Apache ActiveMQ ™ -- Fanout Transport Reference 

[Using ActiveMQ](../../../using-activemq.md) > [Configuring Transports](../../../Using ActiveMQ/configuring-transports.md) > [ActiveMQ Connection URIs](../../../Using ActiveMQ/Configuring Transports/activemq-connection-uris.md) > [Fanout Transport Reference](../../../Using ActiveMQ/Configuring Transports/ActiveMQ Connection URIs/fanout-transport-reference.md)


### The Fanout Transport

The Fanout transport layers reconnect and replication logic on top of any of the other transports. It utilizes the [Discovery](../../../Using ActiveMQ/Configuring Transports/ActiveMQ Connection URIs/discovery-transport-reference.md) transport to discover brokers and replicates commands to those brokers.

#### Configuration Syntax

**fanout:(discoveryURI)?transportOptions**  
or  
**fanout:discoveryURI**

##### Transport Options

Option Name

Default Value

Description

initialReconnectDelay

10

How long to wait before the first reconnect attempt

maxReconnectDelay

30000

The maximum amount of time we ever wait between reconnect attempts

useExponentialBackOff

true

Should an exponential backoff be used btween reconnect attempts

backOffMultiplier

2

The exponent used in the exponential backoff attempts

maxReconnectAttempts

0

If not 0, then this is the maximum number of reconnect attempts before an error is sent back to the client

fanOutQueues

false

If set to 'true', commands are replicated to queues as well as topics

minAckCount

2

The minimum number of brokers to which connections must be established

The 'fanOutQueues' option is specific to the fanout transport. By default, the fanout does not replicate commands to queues; only topics. Therefore, if you'd like to fanout a message send command to multiple queues on multiple brokers, you'll have to set this option to 'true'.

By default, a client's fanout transport waits for connections to be established to 2 brokers, or the number of static TCP URIs configured (if more than 2). Until this number of connections is established, the client's call to Connection.createSession() does not return. For example, a producer that uses the fanout connector listed below will wait until 2 brokers are running, and connections are established to those two brokers.

fanout:(multicast://default)

Another example would be a producer using the following fanout connector.

fanout:(static:(tcp://localhost:61629,tcp://localhost:61639,tcp://localhost:61649))

In this case, three broker connections are needed. However, this required number of connections can be overridden by using the minAckCount transport option. For example, this fanout connector allows the producer to run after connecting to just one broker.

fanout:(multicast://default)?minAckCount=1

Warning

It is not recommended that you use the fanout URI for consumers. Also, if a producer fans out across multiple brokers, who happen to be inter-connected, then there is a very high likelihood that a consumer on one of those brokers will get duplicate messages.

##### Example URI

fanout:(static:(tcp://localhost:61616,tcp://remotehost:61616))?initialReconnectDelay=100

Applying parameters to discovered transports

Because the Discovery transport is utilized for broker discovery, transport parameters are applied to discovered brokers. See [Discovery Transport Reference](../../../Using ActiveMQ/Configuring Transports/ActiveMQ Connection URIs/discovery-transport-reference.md).

