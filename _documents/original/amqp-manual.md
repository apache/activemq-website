       

*   [Apollo 1.7.1](../index.html)
*   [Developers](../communitydevelopers.md)
*   [Community](../community/index.html)
*   [Download](..OverviewOverview/Overview/download.md)

Apollo 1.7.1 AMQP Protocol Manual
=================================

*   [Using the AMQP Protocol](#Using_the_AMQP_Protocol)
*   *   [AMPQ Protocol Options](#AMPQ_Protocol_Options)
    *   [Connecting](#Connecting)
    *   [Destination Types](#Destination_Types)
    *   [Reliable Messaging](#Reliable_Messaging)
    *   [Message Expiration](#Message_Expiration)
    *   [Topic Durable Subscriptions](#Topic_Durable_Subscriptions)
    *   [Browsing Queues](#Browsing_Queues)
    *   [Temporary Destinations](#Temporary_Destinations)
    *   [Destination Wildcards](#Destination_Wildcards)
    *   [Composite Destinations](#Composite_Destinations)
    *   [Message Selectors](#Message_Selectors)
    *   [Destination Name Restrictions](#Destination_Name_Restrictions)

Using the AMQP Protocol
-----------------------

Clients can connect to Apollo using the [AMQP](http://amqp.github.com/) protocol. AMQP's mission is “To become the standard protocol for interoperability between all messaging middleware”. Apollo implements version 1.0 of AMQP which has become an OASIS Standard.

It is recommend that you use an AMQP 1.0 client library like the one provided by the [Apache Qpid Proton](http://qpid.apache.org/proton/) project in order to access this server or any other AMQP 1.0 server.

AMQP clients can connect to any of the default connectors that the default Apollo configuration opens up, but since AMQP has the IANA-assigned port of 5672 and 5671 for SSL secured AMQP, you might want to add the following configuration elements to your Apollo config file so that AMQP clients can more easily connect to Apollo.

    
    <connector id="amqp" bind="tcp://0.0.0.0:5672"/>
    <connector id="amqps" bind="ssl://0.0.0.0:5671"/>
    

### AMPQ Protocol Options

You can use the `amqp` configuration element within the `connector` element in the `apollo.xml` configuration file to change the default settings used in the AMQP protocol implementation. The `amqp` element supports the following configuration attributes:

*   `max_frame_size` : The maximum allowed size of an AMQP frame. Defaults to `100M`.
*   `trace` : Set to `true` if you want to enabled AMQP frame tracing to get logged. Defaults to `false`.
*   `buffer_size` : How much each sender or receiver will buffer between the client and the broker. If not set, it will be auto tuned between `640k` and `20k` depending on the number of connections open on the broker.
*   `die_delay` : The amount of time to delay in milliseconds after an AMQP connection is  
    closed before the socket is closed/reset.

The amqp configuration element can also be used to control how the destination headers are parsed and interpreted. The supported attributes are:

*   `queue_prefix` : Defaults to `queue://`
*   `topic_prefix` : Defaults to `topic://`
*   `path_separator` : Defaults to `.`
*   `destination_separator` : Defaults to `,`
*   `any_child_wildcard` : Defaults to `*`
*   `regex_wildcard_start` : Defaults to `{`
*   `regex_wildcard_end` : Defaults to `}`
*   `any_descendant_wildcard` : Defaults to `**`

Example:

    
    <connector id="tcp" bind="tcp://0.0.0.0:5672">
      <amqp max_frame_size="4M"/>
    </connector>
    

### Connecting

The default broker configuration secures access to the broker so that only the `admin` user can connect. The default password for the `admin` user is `password`. Your client must use PLAIN Sasl to pass the credentials.

If the client does not specify the remote host when in the AMQP Open frame, the client will be connected to the first virtual host defined in it's configuration. If a remote host is specified, then connection will be closed with an error if it cannot find a virtual with that match name defined. Therefore, it is critical that the virtual hosts configuration define all the possible host names that clients may connect to host with.

### Destination Types

Apollo supports three types of destinations, queues, topics, and durable subscriptions.

The difference between queues and topics is how messages are delivered to consumers. A queue will load balance it's messages over the connected subscribers so that only one subscriber gets a message. Topics replicate every message sent to it to all the connected subscribers. Queues hold on to unconsumed messages even when there are no receivers attached, while a topic will drop messages when there are no connected receivers.

A durable subscription allows you to create a subscription against a topic which will queue messages even after the client disconnects. Clients can reconnect and consume the queued message originating from the topic at a later time.

If you want to send or subscribe to a queue, topic, or durable subscription the AMQP address should be prefixed with `queue://`, `topic://` or `dsub://` respectively.

### Reliable Messaging

Apollo supports reliable messaging by allowing messages to be durable so that they can be recovered if there is failure which kills the broker. Processing durable messages has orders of magnitude more overhead than non-durable variety. You should only mark messages durable if you can't afford to loose the message.

Durable messages should be sent either as part of a transaction or not pre-settled so that the client can be notified when the durable message has been fully received the the broker.

### Message Expiration

Apollo supports expiring old messages. Unconsumed expired messages are automatically removed from the queue. You just need to specify when the message expires by setting the message header.

### Topic Durable Subscriptions

A durable subscription is a queue which is subscribed to a topic so that even if the client which created the durable subscription is not online, he can still get a copy of all the messages sent to the topic when he comes back online. Multiple clients can subscribe to the same durable subscription and since it's backed by a queue, those subscribers will have the topic's messages load balanced across them.

To create or reattach to a a durable subscription with AMQP, you create an AMQP receiver link and use the Link name to identify the durable subscription. The link source durable property must be set to DURABLE and the expiry policy must be set to NEVER.

If you want the durable subscription to be destroyed, change the source expiry policy to LINK_DETACH and then close the link.

If the durable subscription already exists you can address it directly using `dsub://` prefix on the `destination` header. For example, send a message to the previously created `mysub` durable subscription, you would message to the target address of `dsub://mysub`.

Similarly, you can also receive messages from the durable subscription by using the source address of `dsub://mysub`,

Unlike typical AMQP link id's which are local to the AMQP client's connection, the durable subscription id's are global across a virtual host. If two different connections setup receivers against the same durable subscription id, then messages from the durable subscription will get load balanced across the two connections.

### Browsing Queues

To browse messages on a queue without consuming them, the receiver should set the distribution mode attribute of the source to COPY.

### Temporary Destinations

Temporary destinations are typically used to receive response messages in a request/response messaging exchange. A temporary destination can only be consumed by a subscription created on the connection which is associated with the temporary destination. Once the connection is closed, all associated temporary destinations are removed. To create a temporary destination, set the dynamic attribute on a source or target and do not set the address attribute. Once the link is opened, address will be updated to be temporary address that you should use when sending messages.

Temporary destination names actually map to normal queues and topics. They just have a `temp.<broker_id>.<connection_id>.` prefix. Any destination which starts with `temp.` has a security policy which only allows the connection which created it to subscribe from it. These destinations are also auto deleted once the connection is closed.

### Destination Wildcards

We support destination wildcards to easily subscribe to multiple destinations with one subscription. This concept has been popular in financial market data for some time as a way of organizing events (such as price changes) into hierarchies and to use wildcards for easy subscription of the range of information you're interested in.

*   `.` is used to separate names in a path
*   `*` is used to match any name in a path
*   `{regex}` is used to match a path name against a regular expression.
*   `**` is used to recursively match path names

For example imagine you are sending price messages from a stock exchange feed. You might use some kind of destination naming conventions such as:

*   `topic://PRICE.STOCK.NASDAQ.IBM` to publish IBM's price on NASDAQ and
*   `topic://PRICE.STOCK.NYSE.SUNW` to publish Sun's price on the New York Stock Exchange

A subscriber could then use exact destinations to subscribe to exactly the prices it requires. Or it could use wildcards to define hierarchical pattern matches to the destinations to subscribe from.

For example using the example above, these subscriptions are possible

*   `topic://PRICE.**` : Any price for any product on any exchange
*   `topic://PRICE.STOCK.**` : Any price for a stock on any exchange
*   `topic://PRICE.STOCK.NASDAQ.*` : Any stock price on NASDAQ
*   `topic://PRICE.STOCK.*.IBM` : Any IBM stock price on any exchange
*   `topic://PRICE.STOCK.*.I*` : Any stock price starting with 'I' on any exchange
*   `topic://PRICE.STOCK.*.*{[0-9]}` : Any stock price that ends in a digit on any exchange

Destination wildcards can only be used in a SUBSCRIBE frame.

### Composite Destinations

You can use composite destinations to send or subscribe to multiple destinations at one time. You use separator of `,` between destination names. For example to send one message to 2 queues and 1 topic, you would use an address of 'queue://a,queue://b,topic://c'

### Message Selectors

Message selectors allow a receiver to only receive a subset of the messages sent to a destination. The selector acts like a filter which is applied against the message properties and only those messages which match pass through to the subscription.

The broker currently only support JMS style selectors. These selectors are defined using SQL 92 syntax.

Here is an example selector:

    type = 'car' AND color = 'blue' AND weight > 2500

To use the selector just set filter attribute of the source to a map which contains a `jms-selector` symbol key mapped to your selector string value.

### Destination Name Restrictions

Destination names are restricted to using the characters `a-z`, `A-Z`, `0-9`, `_`, `-` `%`, `~`, `:`, ' ', '(', ')' or `.` in addition to composite separator `,` and the wild card `*`. Any other characters must be UTF-8 and then URL encoded if you wish to preserve their significance.

External Resources:

*   [AMQP 1.0 Specification](http://docs.oasis-open.org/amqp/core/v1.0/os/amqp-core-complete-v1.0-os.pdf)