Apache ActiveMQ ™ -- XBean XML Reference 5.0 

[Using ActiveMQ](../../using-activemq.md) > [Xml Reference](../../Using ActiveMQ/xml-reference.md) > [XBean XML Reference 5.0](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)


### Elements By Type

#### The _[org.apache.activemq.broker.TransportConnector](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Type Implementations

_[<transportConnector>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

#### The _[org.apache.activemq.network.jms.InboundQueueBridge](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Type Implementations

_[<inboundQueueBridge>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Create an Inbound Queue Bridge

#### The _[org.apache.activemq.network.NetworkConnector](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Type Implementations

_[<ldapNetworkConnector>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

class to create dynamic network connectors listed in an directory server using the LDAP v3 protocol as defined in RFC 2251, the entries listed in the directory server must implement the ipHost and ipService objectClasses as defined in RFC 2307.

_[<multicastNetworkConnector>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

A network connector which uses some kind of multicast-like transport that communicates with potentially many remote brokers over a single logical {@link Transport} instance such as when using multicast. This implementation does not depend on multicast at all; any other group based transport could be used.

_[<networkConnector>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

A network connector which uses a discovery agent to detect the remote brokers available and setup a connection to each available remote broker

#### The _[org.apache.activemq.broker.BrokerService](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Type Implementations

_[<broker>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

An ActiveMQ Message Broker. It consists of a number of transport connectors, network connectors and a bunch of properties which can be used to configure the broker as its lazily created.

#### The _[org.apache.activemq.usage.TempUsage](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Type Implementations

_[<tempUsage>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Used to keep track of how much of something is being used so that a productive working set usage can be controlled. Main use case is manage memory usage.

#### The _[org.apache.activemq.broker.region.policy.PendingSubscriberMessageStoragePolicy](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Type Implementations

_[<fileCursor>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Pending messages

_[<vmCursor>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Pending messages held

#### The _[org.apache.activemq.usage.MemoryUsage](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Type Implementations

_[<memoryUsage>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Used to keep track of how much of something is being used so that a productive working set usage can be controlled. Main use case is manage memory usage.

#### The _[org.apache.activemq.broker.BrokerPlugin](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Type Implementations

_[<authorizationPlugin>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

An authorization plugin where each operation on a destination is checked against an authorizationMap

_[<connectionDotFilePlugin>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

A [DOT](http://www.graphviz.org/) file creator plugin which creates a DOT file showing the current connections

_[<destinationDotFilePlugin>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

A [DOT](http://www.graphviz.org/) file creator plugin which creates a DOT file showing the current topic & queue hierarchies.

_[<jaasAuthenticationPlugin>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Provides a JAAS based authentication plugin

_[<jaasCertificateAuthenticationPlugin>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Provides a JAAS based SSL certificate authentication plugin

_[<loggingBrokerPlugin>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

A simple Broker interceptor which allows you to enable/disable logging.

_[<multicastTraceBrokerPlugin>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

A Broker interceptor which allows you to trace all operations to a Multicast socket.

_[<simpleAuthenticationPlugin>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Provides a simple authentication plugin

_[<timeStampingBrokerPlugin>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

A Broker interceptor which updates a JMS Client's timestamp on the message with a broker timestamp. Useful when the clocks on client machines are known to not be correct and you can only trust the time set on the broker machines. Enabling this plugin will break JMS compliance since the timestamp that the producer sees on the messages after as send() will be different from the timestamp the consumer will observe when he receives the message. This plugin is not enabled in the default ActiveMQ configuration.

_[<udpTraceBrokerPlugin>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

A Broker interceptor which allows you to trace all operations to a UDP socket.

#### The _[org.apache.activemq.store.jdbc.JDBCAdapter](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Type Implementations

_[<axionJDBCAdapter>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Axion specific Adapter. Axion does not seem to support ALTER statements or sub-selects. This means: - We cannot auto upgrade the schema was we roll out new versions of ActiveMQ - We cannot delete durable sub messages that have be acknowledged by all consumers.

_[<blobJDBCAdapter>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

This JDBCAdapter inserts and extracts BLOB data using the getBlob()/setBlob() operations. This is a little more involved since to insert a blob you have to: 1: insert empty blob. 2: select the blob 3: finally update the blob with data value. The databases/JDBC drivers that use this adapter are:

_[<bytesJDBCAdapter>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

This JDBCAdapter inserts and extracts BLOB data using the setBytes()/getBytes() operations. The databases/JDBC drivers that use this adapter are:

_[<db2JDBCAdapter>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

_[<defaultJDBCAdapter>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Implements all the default JDBC operations that are used by the JDBCPersistenceAdapter.

sub-classing is encouraged to override the default implementation of methods to account for differences in JDBC Driver implementations.

The JDBCAdapter inserts and extracts BLOB data using the getBytes()/setBytes() operations.

The databases/JDBC drivers that use this adapter are:

_[<imageBasedJDBCAdaptor>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Provides JDBCAdapter since that uses IMAGE datatype to hold binary data. The databases/JDBC drivers that use this adapter are:

*   Sybase
*   MS SQL

_[<informixJDBCAdapter>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

JDBC Adapter for Informix database. Because Informix database restricts length of composite primary keys, length of _container name_ field and _subscription id_ field must be reduced to 150 characters. Therefore be sure not to use longer names for container name and subscription id than 150 characters.

_[<oracleJDBCAdapter>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Implements all the default JDBC operations that are used by the JDBCPersistenceAdapter.

Subclassing is encouraged to override the default implementation of methods to account for differences in JDBC Driver implementations.

The JDBCAdapter inserts and extracts BLOB data using the getBytes()/setBytes() operations.

The databases/JDBC drivers that use this adapter are:

_[<streamJDBCAdapter>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

This JDBCAdapter inserts and extracts BLOB data using the setBinaryStream()/getBinaryStream() operations. The databases/JDBC drivers that use this adapter are:

*   Axion

#### The _[org.apache.activemq.broker.region.policy.PendingQueueMessageStoragePolicy](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Type Implementations

_[<fileQueueCursor>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Pending

_[<storeCursor>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Pending messages

_[<vmQueueCursor>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Pending messages

#### The _[javax.jms.TopicConnectionFactory](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Type Implementations

_[<connectionFactory>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

A [Spring](http://www.springframework.org/) enhanced connection factory which will automatically use the Spring bean name as the clientIDPrefix property so that connections created have client IDs related to your Spring.xml file for easier comprehension from [JMX](http://activemq.apache.orgFeatures/jmx.md).

_[<xaConnectionFactory>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

A [Spring](http://www.springframework.org/) enhanced XA connection factory which will automatically use the Spring bean name as the clientIDPrefix property so that connections created have client IDs related to your Spring.xml file for easier comprehension from [JMX](http://activemq.apache.orgFeatures/jmx.md).

#### The _[org.apache.activemq.broker.region.virtual.VirtualDestination](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Type Implementations

_[<compositeQueue>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Represents a virtual queue which forwards to a number of other destinations.

_[<compositeTopic>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Represents a virtual topic which forwards to a number of other destinations.

_[<virtualTopic>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Creates [Virtual Topics](http://activemq.org/siteFeatures/Destination Features/Features/Destination Features/virtual-destinations.md) using a prefix and postfix. The virtual destination creates a wildcard that is then used to look up all active queue subscriptions which match.

#### The _[org.apache.activemq.broker.region.policy.PolicyMap](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Type Implementations

_[<policyMap>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Represents a destination based configuration of policies so that individual destinations or wildcard hierarchies of destinations can be configured using different policies.

#### The _[org.apache.activemq.usage.UsageCapacity](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Type Implementations

_[<defaultUsageCapacity>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Identify if a limit has been reached

_[<usageCapacity>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Identify if a limit has been reached

#### The _[org.apache.activemq.broker.region.policy.PendingMessageLimitStrategy](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Type Implementations

_[<constantPendingMessageLimitStrategy>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

This PendingMessageLimitStrategy is configured to a constant value for all subscriptions.

_[<prefetchRatePendingMessageLimitStrategy>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

This PendingMessageLimitStrategy sets the maximum pending message limit value to be a multiplier of the prefetch limit of the subscription.

#### The _[org.apache.activemq.usage.SystemUsage](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Type Implementations

_[<systemUsage>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Holder for Usage instances for memory, store and temp files Main use case is manage memory usage.

#### The _[javax.jms.Destination](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Type Implementations

_[<queue>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

An ActiveMQ Queue

_[<topic>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

An ActiveMQ Topic

#### The _[org.apache.activemq.broker.region.policy.SubscriptionRecoveryPolicy](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Type Implementations

_[<fixedCountSubscriptionRecoveryPolicy>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

This implementation of {@link SubscriptionRecoveryPolicy} will keep a fixed count of last messages.

_[<fixedSizedSubscriptionRecoveryPolicy>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

This implementation of {@link SubscriptionRecoveryPolicy} will keep a fixed amount of memory available in RAM for message history which is evicted in time order.

_[<lastImageSubscriptionRecoveryPolicy>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

This implementation of {@link SubscriptionRecoveryPolicy} will only keep the last message.

_[<noSubscriptionRecoveryPolicy>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

This SubscriptionRecoveryPolicy disable recovery of messages.

_[<queryBasedSubscriptionRecoveryPolicy>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

This implementation of {@link SubscriptionRecoveryPolicy} will perform a user specific query mechanism to load any messages they may have missed.

_[<timedSubscriptionRecoveryPolicy>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

This implementation of {@link SubscriptionRecoveryPolicy} will keep a timed buffer of messages around in memory and use that to recover new subscriptions.

#### The _[javax.jms.QueueConnectionFactory](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Type Implementations

_[<connectionFactory>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

A [Spring](http://www.springframework.org/) enhanced connection factory which will automatically use the Spring bean name as the clientIDPrefix property so that connections created have client IDs related to your Spring.xml file for easier comprehension from [JMX](http://activemq.apache.orgFeatures/jmx.md).

_[<xaConnectionFactory>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

A [Spring](http://www.springframework.org/) enhanced XA connection factory which will automatically use the Spring bean name as the clientIDPrefix property so that connections created have client IDs related to your Spring.xml file for easier comprehension from [JMX](http://activemq.apache.orgFeatures/jmx.md).

#### The _[org.apache.activemq.broker.jmx.ManagementContext](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Type Implementations

_[<managementContext>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

A Flow provides different dispatch policies within the NMR

#### The _[org.apache.activemq.store.jdbc.Statements](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Type Implementations

_[<statements>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

#### The _[org.apache.activemq.store.PersistenceAdapterFactory](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Type Implementations

_[<amqPersistenceAdapterFactory>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

An implementation of {@link PersistenceAdapterFactory}

_[<journaledJDBC>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Creates a default persistence model using the Journal and JDBC

#### The _[org.apache.activemq.security.AuthorizationEntry](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Type Implementations

_[<authorizationEntry>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Represents an entry in a {@link DefaultAuthorizationMap} for assigning different operations (read, write, admin) of user roles to a specific destination or a hierarchical wildcard area of destinations.

_[<tempDestinationAuthorizationEntry>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Represents an entry in a {@link DefaultAuthorizationMap} for assigning different operations (read, write, admin) of user roles to a temporary destination

#### The _[org.apache.activemq.broker.region.policy.PendingDurableSubscriberMessageStoragePolicy](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Type Implementations

_[<fileDurableSubscriberCursor>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Pending messages for durable subscribers

_[<storeDurableSubscriberCursor>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Pending messages for a durable

_[<vmDurableCursor>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Pending

#### The _[org.apache.activemq.broker.region.group.MessageGroupMapFactory](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Type Implementations

_[<messageGroupHashBucketFactory>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

A factory to create instances of {@link SimpleMessageGroupMap} when implementing the [Message Groups](http://activemq.apache.org/Features/Consumer Features/message-groups.md) functionality.

_[<simpleMessageGroupMapFactory>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

A factory to create instances of {@link SimpleMessageGroupMap} when implementing the [Message Groups](http://activemq.apache.org/Features/Consumer Features/message-groups.md) functionality.

#### The _[org.apache.activemq.usage.StoreUsage](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Type Implementations

_[<storeUsage>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Used to keep track of how much of something is being used so that a productive working set usage can be controlled. Main use case is manage memory usage.

#### The _[org.apache.activemq.broker.region.policy.DeadLetterStrategy](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Type Implementations

_[<individualDeadLetterStrategy>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

A {@link DeadLetterStrategy} where each destination has its own individual DLQ using the subject naming hierarchy.

_[<sharedDeadLetterStrategy>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

A default implementation of {@link DeadLetterStrategy} which uses a constant destination.

#### The _[javax.jms.Topic](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Type Implementations

_[<topic>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

An ActiveMQ Topic

#### The _[org.apache.activemq.ActiveMQPrefetchPolicy](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Type Implementations

_[<prefetchPolicy>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Defines the prefetch message policies for different types of consumers

#### The _[org.apache.activemq.broker.Broker](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Type Implementations

_[<loggingBrokerPlugin>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

A simple Broker interceptor which allows you to enable/disable logging.

_[<multicastTraceBrokerPlugin>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

A Broker interceptor which allows you to trace all operations to a Multicast socket.

_[<timeStampingBrokerPlugin>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

A Broker interceptor which updates a JMS Client's timestamp on the message with a broker timestamp. Useful when the clocks on client machines are known to not be correct and you can only trust the time set on the broker machines. Enabling this plugin will break JMS compliance since the timestamp that the producer sees on the messages after as send() will be different from the timestamp the consumer will observe when he receives the message. This plugin is not enabled in the default ActiveMQ configuration.

_[<udpTraceBrokerPlugin>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

A Broker interceptor which allows you to trace all operations to a UDP socket.

#### The _[org.apache.activemq.store.PersistenceAdapter](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Type Implementations

_[<amqPersistenceAdapter>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

An implementation of {@link PersistenceAdapter} designed for use with a {@link Journal} and then check pointing asynchronously on a timeout with some other long term persistent storage.

_[<jdbcPersistenceAdapter>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

A {@link PersistenceAdapter} implementation using JDBC for persistence storage. This persistence adapter will correctly remember prepared XA transactions, but it will not keep track of local transaction commits so that operations performed against the Message store are done as a single uow.

_[<journalPersistenceAdapter>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

An implementation of {@link PersistenceAdapter} designed for use with a {@link Journal} and then check pointing asynchronously on a timeout with some other long term persistent storage.

_[<kahaPersistenceAdapter>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

_[<memoryPersistenceAdapter>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

#### The _[org.apache.activemq.broker.region.policy.PolicyEntry](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Type Implementations

_[<policyEntry>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Represents an entry in a {@link PolicyMap} for assigning policies to a specific destination or a hierarchical wildcard area of destinations.

#### The _[org.apache.activemq.network.DemandForwardingBridgeSupport](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Type Implementations

_[<compositeDemandForwardingBridge>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

A demand forwarding bridge which works with multicast style transports where a single Transport could be communicating with multiple remote brokers

_[<demandForwardingBridge>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Forwards messages from the local broker to the remote broker based on demand.

#### The _[org.apache.activemq.network.jms.OutboundQueueBridge](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Type Implementations

_[<outboundQueueBridge>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Create an Outbound Queue Bridge

#### The _[org.apache.activemq.store.jdbc.JDBCPersistenceAdapter](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Type Implementations

_[<jdbcPersistenceAdapter>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

A {@link PersistenceAdapter} implementation using JDBC for persistence storage. This persistence adapter will correctly remember prepared XA transactions, but it will not keep track of local transaction commits so that operations performed against the Message store are done as a single uow.

#### The _[org.apache.activemq.command.ActiveMQDestination](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Type Implementations

_[<queue>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

An ActiveMQ Queue

_[<topic>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

An ActiveMQ Topic

#### The _[org.apache.activemq.network.jms.InboundTopicBridge](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Type Implementations

_[<inboundTopicBridge>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Create an Inbound Topic Bridge

#### The _[org.apache.activemq.network.jms.JmsConnector](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Type Implementations

_[<jmsQueueConnector>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

A Bridge to other JMS Queue providers

_[<jmsTopicConnector>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

A Bridge to other JMS Topic providers

#### The _[org.apache.activemq.RedeliveryPolicy](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Type Implementations

_[<redeliveryPolicy>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Configuration options used to control how messages are re-delivered when they are rolled back.

#### The _[org.apache.activemq.security.AuthorizationMap](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Type Implementations

_[<authorizationMap>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Represents a destination based configuration of policies so that individual destinations or wildcard hierarchies of destinations can be configured using different policies. Each entry in the map represents the authorization ACLs for each operation.

_[<lDAPAuthorizationMap>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

An {@link AuthorizationMap} which uses LDAP

_[<simpleAuthorizationMap>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

An AuthorizationMap which is configured with individual DestinationMaps for each operation.

#### The _[org.apache.activemq.security.TempDestinationAuthorizationEntry](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Type Implementations

_[<tempDestinationAuthorizationEntry>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Represents an entry in a {@link DefaultAuthorizationMap} for assigning different operations (read, write, admin) of user roles to a temporary destination

#### The _[org.apache.activemq.broker.region.policy.DispatchPolicy](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Type Implementations

_[<roundRobinDispatchPolicy>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Simple dispatch policy that sends a message to every subscription that matches the message.

_[<simpleDispatchPolicy>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Simple dispatch policy that sends a message to every subscription that matches the message.

_[<strictOrderDispatchPolicy>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Dispatch policy that causes every subscription to see messages in the same order.

#### The _[javax.jms.ConnectionFactory](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Type Implementations

_[<connectionFactory>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

A [Spring](http://www.springframework.org/) enhanced connection factory which will automatically use the Spring bean name as the clientIDPrefix property so that connections created have client IDs related to your Spring.xml file for easier comprehension from [JMX](http://activemq.apache.orgFeatures/jmx.md).

_[<xaConnectionFactory>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

A [Spring](http://www.springframework.org/) enhanced XA connection factory which will automatically use the Spring bean name as the clientIDPrefix property so that connections created have client IDs related to your Spring.xml file for easier comprehension from [JMX](http://activemq.apache.orgFeatures/jmx.md).

#### The _[javax.jms.Queue](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Type Implementations

_[<queue>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

An ActiveMQ Queue

#### The _[org.apache.activemq.broker.region.policy.MessageEvictionStrategy](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Type Implementations

_[<oldestMessageEvictionStrategy>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

An eviction strategy which evicts the oldest message first (which is the default).

_[<oldestMessageWithLowestPriorityEvictionStrategy>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

An eviction strategy which evicts the oldest message with the lowest priority first.

#### The _[org.apache.activemq.Service](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Type Implementations

_[<broker>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

An ActiveMQ Message Broker. It consists of a number of transport connectors, network connectors and a bunch of properties which can be used to configure the broker as its lazily created.

_[<commandAgent>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

An agent which listens to commands on a JMS destination

_[<forwardingBridge>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Forwards all messages from the local broker to the remote broker.

_[<inboundQueueBridge>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Create an Inbound Queue Bridge

_[<inboundTopicBridge>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Create an Inbound Topic Bridge

_[<jmsQueueConnector>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

A Bridge to other JMS Queue providers

_[<jmsTopicConnector>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

A Bridge to other JMS Topic providers

_[<ldapNetworkConnector>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

class to create dynamic network connectors listed in an directory server using the LDAP v3 protocol as defined in RFC 2251, the entries listed in the directory server must implement the ipHost and ipService objectClasses as defined in RFC 2307.

_[<managementContext>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

A Flow provides different dispatch policies within the NMR

_[<masterConnector>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Connects a Slave Broker to a Master when using [Master Slave](http://activemq.apache.orgFeatures/ClusteringFeatures/Clustering/Features/Clustering/masterslave.md) for High Availability of messages.

_[<memoryUsage>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Used to keep track of how much of something is being used so that a productive working set usage can be controlled. Main use case is manage memory usage.

_[<multicastNetworkConnector>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

A network connector which uses some kind of multicast-like transport that communicates with potentially many remote brokers over a single logical {@link Transport} instance such as when using multicast. This implementation does not depend on multicast at all; any other group based transport could be used.

_[<networkConnector>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

A network connector which uses a discovery agent to detect the remote brokers available and setup a connection to each available remote broker

_[<outboundQueueBridge>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Create an Outbound Queue Bridge

_[<outboundTopicBridge>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Create an Outbound Topic Bridge

_[<proxyConnector>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

_[<storeUsage>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Used to keep track of how much of something is being used so that a productive working set usage can be controlled. Main use case is manage memory usage.

_[<systemUsage>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Holder for Usage instances for memory, store and temp files Main use case is manage memory usage.

_[<tempUsage>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Used to keep track of how much of something is being used so that a productive working set usage can be controlled. Main use case is manage memory usage.

#### The _[org.apache.activemq.network.jms.JmsMesageConvertor](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Type Implementations

_[<simpleJmsMessageConvertor>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Converts Message from one JMS to another

#### The _[org.apache.activemq.network.jms.OutboundTopicBridge](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Type Implementations

_[<outboundTopicBridge>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Create an Outbound Topic Bridge

#### The _[org.apache.activemq.broker.region.DestinationInterceptor](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Type Implementations

_[<mirroredQueue>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Creates [Mirrored Queue](http://activemq.org/siteFeatures/Destination FeaturesFeatures/Destination Features/Features/Destination Features/mirrored-queues.md) using a prefix and postfix to define the topic name on which to mirror the queue to.

_[<virtualDestinationInterceptor>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Implements [Virtual Topics](http://activemq.apache.orgFeatures/Destination Features/Features/Destination Features/virtual-destinations.md).

#### The _[org.apache.activemq.filter.DestinationMap](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Type Implementations

_[<authorizationMap>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Represents a destination based configuration of policies so that individual destinations or wildcard hierarchies of destinations can be configured using different policies. Each entry in the map represents the authorization ACLs for each operation.

_[<policyMap>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Represents a destination based configuration of policies so that individual destinations or wildcard hierarchies of destinations can be configured using different policies.

#### The _[org.apache.activemq.network.NetworkBridgeConfiguration](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Type Implementations

_[<ldapNetworkConnector>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

class to create dynamic network connectors listed in an directory server using the LDAP v3 protocol as defined in RFC 2251, the entries listed in the directory server must implement the ipHost and ipService objectClasses as defined in RFC 2307.

_[<multicastNetworkConnector>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

A network connector which uses some kind of multicast-like transport that communicates with potentially many remote brokers over a single logical {@link Transport} instance such as when using multicast. This implementation does not depend on multicast at all; any other group based transport could be used.

_[<networkConnector>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

A network connector which uses a discovery agent to detect the remote brokers available and setup a connection to each available remote broker

### The _[<amqPersistenceAdapter>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

An implementation of {@link PersistenceAdapter} designed for use with a {@link Journal} and then check pointing asynchronously on a timeout with some other long term persistent storage.

#### Properties

Property Name

Type

Description

archiveDataLogs

_boolean_

asyncDataManager

_org.apache.activemq.kaha.impl.async.AsyncDataManager_

brokerName

_java.lang.String_

brokerService

_[org.apache.activemq.broker.BrokerService](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

checkpointInterval

_long_

cleanupInterval

_long_

directory

_java.io.File_

directoryArchive

_java.io.File_

indexBinSize

_int_

indexKeySize

_int_

indexPageSize

_int_

When set using XBean, you can use values such as: "20 mb", "1024 kb", or "1 gb"

maxCheckpointMessageAddSize

_int_

When set using XBean, you can use values such as: "20 mb", "1024 kb", or "1 gb"

maxFileLength

_int_

When set using XBean, you can use values such as: "20 mb", "1024 kb", or "1 gb"

persistentIndex

_boolean_

referenceStoreAdapter

_org.apache.activemq.store.ReferenceStoreAdapter_

syncOnWrite

_boolean_

taskRunnerFactory

_org.apache.activemq.thread.TaskRunnerFactory_

usageManager

_[org.apache.activemq.usage.SystemUsage](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

useNio

_boolean_

wireFormat

_org.apache.activemq.wireformat.WireFormat_

### The _[<amqPersistenceAdapterFactory>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

An implementation of {@link PersistenceAdapterFactory}

#### Properties

Property Name

Type

Description

brokerName

_java.lang.String_

dataDirectory

_java.io.File_

journalThreadPriority

_int_

maxFileLength

_int_

persistentIndex

_boolean_

referenceStoreAdapter

_org.apache.activemq.store.ReferenceStoreAdapter_

syncOnWrite

_boolean_

taskRunnerFactory

_org.apache.activemq.thread.TaskRunnerFactory_

useNio

_boolean_

### The _[<authenticationUser>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

A helper object used to configure simple authentiaction plugin

#### Properties

Property Name

Type

Description

groups

_java.lang.String_

password

_java.lang.String_

username

_java.lang.String_

### The _[<authorizationEntry>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

Represents an entry in a {@link DefaultAuthorizationMap} for assigning different operations (read, write, admin) of user roles to a specific destination or a hierarchical wildcard area of destinations.

#### Properties

Property Name

Type

Description

admin

_java.lang.String_

adminACLs

(_java.lang.Object_)*

destination

_[org.apache.activemq.command.ActiveMQDestination](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

groupClass

_java.lang.String_

queue

_java.lang.String_

A helper method to set the destination from a configuration file

read

_java.lang.String_

readACLs

(_java.lang.Object_)*

topic

_java.lang.String_

A helper method to set the destination from a configuration file

write

_java.lang.String_

writeACLs

(_java.lang.Object_)*

### The _[<authorizationMap>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

Represents a destination based configuration of policies so that individual destinations or wildcard hierarchies of destinations can be configured using different policies. Each entry in the map represents the authorization ACLs for each operation.

#### Properties

Property Name

Type

Description

authorizationEntries

(_java.lang.Object_)*

Sets the individual entries on the authorization map

defaultEntry

_[org.apache.activemq.security.AuthorizationEntry](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

entries

(_java.lang.Object_)*

A helper method to allow the destination map to be populated from a dependency injection framework such as Spring

tempDestinationAuthorizationEntry

_[org.apache.activemq.security.TempDestinationAuthorizationEntry](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

### The _[<authorizationPlugin>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

An authorization plugin where each operation on a destination is checked against an authorizationMap

#### Properties

Property Name

Type

Description

map

_[org.apache.activemq.security.AuthorizationMap](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

### The _[<axionJDBCAdapter>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

Axion specific Adapter. Axion does not seem to support ALTER statements or sub-selects. This means: - We cannot auto upgrade the schema was we roll out new versions of ActiveMQ - We cannot delete durable sub messages that have be acknowledged by all consumers.

#### Properties

Property Name

Type

Description

batchStatments

_boolean_

statements

_[org.apache.activemq.store.jdbc.Statements](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

useExternalMessageReferences

_boolean_

### The _[<blobJDBCAdapter>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

This JDBCAdapter inserts and extracts BLOB data using the getBlob()/setBlob() operations. This is a little more involved since to insert a blob you have to: 1: insert empty blob. 2: select the blob 3: finally update the blob with data value. The databases/JDBC drivers that use this adapter are:

#### Properties

Property Name

Type

Description

batchStatments

_boolean_

statements

_[org.apache.activemq.store.jdbc.Statements](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

useExternalMessageReferences

_boolean_

### The _[<broker>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

An ActiveMQ Message Broker. It consists of a number of transport connectors, network connectors and a bunch of properties which can be used to configure the broker as its lazily created.

#### Properties

Property Name

Type

Description

adminView

_org.apache.activemq.broker.jmx.BrokerView_

Returns the administration view of the broker; used to create and destroy resources such as queues and topics. Note this method returns null if JMX is disabled.

advisorySupport

_boolean_

Allows the support of advisory messages to be disabled for performance reasons.

brokerName

_java.lang.String_

Sets the name of this broker; which must be unique in the network

brokerObjectName

_javax.management.ObjectName_

Sets the JMX ObjectName for this broker

clustered

_boolean_

consumerSystemUsage

_[org.apache.activemq.usage.SystemUsage](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

dataDirectory

_java.lang.String_

Sets the directory in which the data files will be stored by default for the JDBC and Journal persistence adaptors.

dataDirectoryFile

_java.io.File_

Sets the directory in which the data files will be stored by default for the JDBC and Journal persistence adaptors.

deleteAllMessagesOnStartup

_boolean_

Sets whether or not all messages are deleted on startup - mostly only useful for testing.

destinationFactory

_org.apache.activemq.broker.region.DestinationFactory_

destinationInterceptors

(_[org.apache.activemq.broker.region.DestinationInterceptor](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_)*

Sets the destination interceptors to use

destinationPolicy

_[org.apache.activemq.broker.region.policy.PolicyMap](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Sets the destination specific policies available either for exact destinations or for wildcard areas of destinations.

destinations

(_[org.apache.activemq.command.ActiveMQDestination](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_)*

Sets the destinations which should be loaded/created on startup

enableStatistics

_boolean_

Sets whether or not the Broker's services enable statistics or not.

jmsBridgeConnectors

(_[org.apache.activemq.network.jms.JmsConnector](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_)*

keepDurableSubsActive

_boolean_

managementContext

_[org.apache.activemq.broker.jmx.ManagementContext](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

masterConnectorURI

_java.lang.String_

messageAuthorizationPolicy

_org.apache.activemq.security.MessageAuthorizationPolicy_

Sets the policy used to decide if the current connection is authorized to consume a given message

networkConnectorURIs

(_java.lang.String_)*

networkConnectors

(_[org.apache.activemq.network.NetworkConnector](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_)*

Sets the network connectors which this broker will use to connect to other brokers in a federated network

persistenceAdapter

_[org.apache.activemq.store.PersistenceAdapter](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Sets the persistence adaptor implementation to use for this broker

persistenceFactory

_[org.apache.activemq.store.PersistenceAdapterFactory](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

persistenceTaskRunnerFactory

_org.apache.activemq.thread.TaskRunnerFactory_

persistenceThreadPriority

_int_

persistent

_boolean_

Sets whether or not persistence is enabled or disabled.

plugins

(_[org.apache.activemq.broker.BrokerPlugin](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_)*

Sets a number of broker plugins to install such as for security authentication or authorization

populateJMSXUserID

_boolean_

Sets whether or not the broker should populate the JMSXUserID header.

producerSystemUsage

_[org.apache.activemq.usage.SystemUsage](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

proxyConnectors

(_java.lang.Object_)*

Sets the network connectors which this broker will use to connect to other brokers in a federated network

services

(_[org.apache.activemq.Service](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_)*

Sets the services associated with this broker such as a {@link MasterConnector}

shutdownOnMasterFailure

_boolean_

start

_boolean_

Sets whether or not the broker is started along with the ApplicationContext it is defined within. Normally you would want the broker to start up along with the ApplicationContext but sometimes when working with JUnit tests you may wish to start and stop the broker explicitly yourself.

supportFailOver

_boolean_

systemUsage

_[org.apache.activemq.usage.SystemUsage](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

taskRunnerFactory

_org.apache.activemq.thread.TaskRunnerFactory_

tempDataStore

_org.apache.activemq.kaha.Store_

tmpDataDirectory

_java.io.File_

transportConnectorURIs

(_java.lang.String_)*

transportConnectors

(_[org.apache.activemq.broker.TransportConnector](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_)*

Sets the transport connectors which this broker will listen on for new clients

useJmx

_boolean_

Sets whether or not the Broker's services should be exposed into JMX or not.

useLocalHostBrokerName

_boolean_

useLoggingForShutdownErrors

_boolean_

Sets whether or not we should use commons-logging when reporting errors when shutting down the broker

useMirroredQueues

_boolean_

Sets whether or not [Mirrored Queues](http://activemq.apache.orgFeatures/Destination FeaturesFeatures/Destination Features/Features/Destination Features/mirrored-queues.md) should be supported by default if they have not been explicitly configured.

useShutdownHook

_boolean_

Sets whether or not we should use a shutdown handler to close down the broker cleanly if the JVM is terminated. It is recommended you leave this enabled.

useVirtualTopics

_boolean_

Sets whether or not [Virtual Topics](http://activemq.apache.orgFeatures/Destination Features/Features/Destination Features/virtual-destinations.md) should be supported by default if they have not been explicitly configured.

vmConnectorURI

_java.net.URI_

### The _[<bytesJDBCAdapter>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

This JDBCAdapter inserts and extracts BLOB data using the setBytes()/getBytes() operations. The databases/JDBC drivers that use this adapter are:

#### Properties

Property Name

Type

Description

batchStatments

_boolean_

statements

_[org.apache.activemq.store.jdbc.Statements](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

useExternalMessageReferences

_boolean_

### The _[<commandAgent>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

An agent which listens to commands on a JMS destination

#### Properties

Property Name

Type

Description

brokerUrl

_java.lang.String_

commandDestination

_[javax.jms.Destination](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

connection

_javax.jms.Connection_

connectionFactory

_[javax.jms.ConnectionFactory](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

### The _[<compositeDemandForwardingBridge>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

A demand forwarding bridge which works with multicast style transports where a single Transport could be communicating with multiple remote brokers

#### Properties

Property Name

Type

Description

configuration

_[org.apache.activemq.network.NetworkBridgeConfiguration](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

createdByDuplex

_boolean_

durableDestinations

(_[org.apache.activemq.command.ActiveMQDestination](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_)*

dynamicallyIncludedDestinations

(_[org.apache.activemq.command.ActiveMQDestination](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_)*

excludedDestinations

(_[org.apache.activemq.command.ActiveMQDestination](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_)*

localBroker

_org.apache.activemq.transport.Transport_

networkBridgeListener

_org.apache.activemq.network.NetworkBridgeListener_

remoteBroker

_org.apache.activemq.transport.Transport_

staticallyIncludedDestinations

(_[org.apache.activemq.command.ActiveMQDestination](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_)*

### The _[<compositeQueue>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

Represents a virtual queue which forwards to a number of other destinations.

#### Properties

Property Name

Type

Description

copyMessage

_boolean_

Sets whether a copy of the message will be sent to each destination. Defaults to true so that the forward destination is set as the destination of the message

forwardOnly

_boolean_

Sets if the virtual destination is forward only (and so there is no physical queue to match the virtual queue) or if there is also a physical queue with the same name).

forwardTo

(_java.lang.Object_)*

Sets the list of destinations to forward to

name

_java.lang.String_

Sets the name of this composite destination

### The _[<compositeTopic>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

Represents a virtual topic which forwards to a number of other destinations.

#### Properties

Property Name

Type

Description

copyMessage

_boolean_

Sets whether a copy of the message will be sent to each destination. Defaults to true so that the forward destination is set as the destination of the message

forwardOnly

_boolean_

Sets if the virtual destination is forward only (and so there is no physical queue to match the virtual queue) or if there is also a physical queue with the same name).

forwardTo

(_java.lang.Object_)*

Sets the list of destinations to forward to

name

_java.lang.String_

Sets the name of this composite destination

### The _[<connectionDotFilePlugin>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

A [DOT](http://www.graphviz.org/) file creator plugin which creates a DOT file showing the current connections

#### Properties

Property Name

Type

Description

file

_java.lang.String_

Sets the destination file name to create the destination diagram

### The _[<connectionFactory>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

A [Spring](http://www.springframework.org/) enhanced connection factory which will automatically use the Spring bean name as the clientIDPrefix property so that connections created have client IDs related to your Spring.xml file for easier comprehension from [JMX](http://activemq.apache.orgFeatures/jmx.md).

#### Properties

Property Name

Type

Description

alwaysSessionAsync

_boolean_

If this flag is set then a separate thread is not used for dispatching messages for each Session in the Connection. However, a separate thread is always used if there is more than one session, or the session isn't in auto acknowledge or duplicates ok mode

alwaysSyncSend

_boolean_

Set true if always require messages to be sync sent

beanName

_java.lang.String_

blobTransferPolicy

_org.apache.activemq.blob.BlobTransferPolicy_

Sets the policy used to describe how out-of-band BLOBs (Binary Large OBjects) are transferred from producers to brokers to consumers

brokerURL

_java.lang.String_

Sets the [connection URL](http://activemq.apache.orgUsing ActiveMQ/configuring-transports.md) used to connect to the ActiveMQ broker.

clientID

_java.lang.String_

Sets the JMS clientID to use for the created connection. Note that this can only be used by one connection at once so generally its a better idea to set the clientID on a Connection

clientIDPrefix

_java.lang.String_

Sets the prefix used by autogenerated JMS Client ID values which are used if the JMS client does not explicitly specify on.

clientIdGenerator

_org.apache.activemq.util.IdGenerator_

closeTimeout

_int_

Sets the timeout before a close is considered complete. Normally a close() on a connection waits for confirmation from the broker; this allows that operation to timeout to save the client hanging if there is no broker

copyMessageOnSend

_boolean_

Should a JMS message be copied to a new JMS Message object as part of the send() method in JMS. This is enabled by default to be compliant with the JMS specification. You can disable it if you do not mutate JMS messages after they are sent for a performance boost

disableTimeStampsByDefault

_boolean_

Sets whether or not timestamps on messages should be disabled or not. If you disable them it adds a small performance boost.

dispatchAsync

_boolean_

Enables or disables the default setting of whether or not consumers have their messages [dispatched synchronously or asynchronously by the broker](http://activemq.apache.org/Features/Consumer Features/consumer-dispatch-async.md). For non-durable topics for example we typically dispatch synchronously by default to minimize context switches which boost performance. However sometimes its better to go slower to ensure that a single blocked consumer socket does not block delivery to other consumers.

exclusiveConsumer

_boolean_

Enables or disables whether or not queue consumers should be exclusive or not for example to preserve ordering when not using [Message Groups](http://activemq.apache.org/Features/Consumer Features/message-groups.md)

nestedMapAndListEnabled

_boolean_

Enables/disables whether or not Message properties and MapMessage entries support [Nested Structures](http://activemq.apache.orgFeatures/Message Features/structured-message-properties-and-mapmessages.md) of Map and List objects

objectMessageSerializationDefered

_boolean_

When an object is set on an ObjectMessage, the JMS spec requires the object to be serialized by that set method. Enabling this flag causes the object to not get serialized. The object may subsequently get serialized if the message needs to be sent over a socket or stored to disk.

optimizeAcknowledge

_boolean_

optimizedMessageDispatch

_boolean_

If this flag is set then an larger prefetch limit is used - only applicable for durable topic subscribers.

password

_java.lang.String_

Sets the JMS password used for connections created from this factory

prefetchPolicy

_[org.apache.activemq.ActiveMQPrefetchPolicy](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Sets the [prefetch policy](http://activemq.apache.orgCommunity/FAQ/Using Apache ActiveMQCommunity/FAQ/Using Apache ActiveMQ/Community/FAQ/Using Apache ActiveMQ/what-is-the-prefetch-limit-for.md) for consumers created by this connection.

producerWindowSize

_int_

properties

_java.util.Properties_

Get the properties from this instance for storing in JNDI

redeliveryPolicy

_[org.apache.activemq.RedeliveryPolicy](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Sets the global redelivery policy to be used when a message is delivered but the session is rolled back

statsEnabled

_boolean_

transformer

_org.apache.activemq.MessageTransformer_

Sets the transformer used to transform messages before they are sent on to the JMS bus or when they are received from the bus but before they are delivered to the JMS client

transportListener

_org.apache.activemq.transport.TransportListener_

Allows a listener to be configured on the ConnectionFactory so that when this factory is used with frameworks which don't expose the Connection such as Spring JmsTemplate, you can still register a transport listener.

useAsyncSend

_boolean_

Forces the use of [Async Sends](http://activemq.apache.orgFeatures/Message Dispatching Features/async-sends.md) which adds a massive performance boost; but means that the send() method will return immediately whether the message has been sent or not which could lead to message loss.

useBeanNameAsClientIdPrefix

_boolean_

useCompression

_boolean_

Enables the use of compression of the message bodies

useRetroactiveConsumer

_boolean_

Sets whether or not retroactive consumers are enabled. Retroactive consumers allow non-durable topic subscribers to receive old messages that were published before the non-durable subscriber started.

userName

_java.lang.String_

Sets the JMS userName used by connections created by this factory

warnAboutUnstartedConnectionTimeout

_long_

Enables the timeout from a connection creation to when a warning is generated if the connection is not properly started via {@link Connection#start()} and a message is received by a consumer. It is a very common gotcha to forget to [start the connection](http://activemq.apache.orgCommunity/FAQ/ErrorsCommunity/FAQ/Errors/Community/FAQ/Errors/i-am-not-receiving-any-messages-what-is-wrong.md) so this option makes the default case to create a warning if the user forgets. To disable the warning just set the value to < 0 (say -1).

watchTopicAdvisories

_boolean_

### The _[<constantPendingMessageLimitStrategy>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

This PendingMessageLimitStrategy is configured to a constant value for all subscriptions.

#### Properties

Property Name

Type

Description

limit

_int_

### The _[<db2JDBCAdapter>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

#### Properties

Property Name

Type

Description

batchStatments

_boolean_

statements

_[org.apache.activemq.store.jdbc.Statements](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

useExternalMessageReferences

_boolean_

### The _[<defaultJDBCAdapter>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

Implements all the default JDBC operations that are used by the JDBCPersistenceAdapter.

sub-classing is encouraged to override the default implementation of methods to account for differences in JDBC Driver implementations.

The JDBCAdapter inserts and extracts BLOB data using the getBytes()/setBytes() operations.

The databases/JDBC drivers that use this adapter are:

#### Properties

Property Name

Type

Description

batchStatments

_boolean_

statements

_[org.apache.activemq.store.jdbc.Statements](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

useExternalMessageReferences

_boolean_

### The _[<defaultUsageCapacity>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

Identify if a limit has been reached

#### Properties

Property Name

Type

Description

limit

_long_

### The _[<demandForwardingBridge>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

Forwards messages from the local broker to the remote broker based on demand.

#### Properties

Property Name

Type

Description

configuration

_[org.apache.activemq.network.NetworkBridgeConfiguration](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

createdByDuplex

_boolean_

durableDestinations

(_[org.apache.activemq.command.ActiveMQDestination](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_)*

dynamicallyIncludedDestinations

(_[org.apache.activemq.command.ActiveMQDestination](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_)*

excludedDestinations

(_[org.apache.activemq.command.ActiveMQDestination](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_)*

localBroker

_org.apache.activemq.transport.Transport_

networkBridgeListener

_org.apache.activemq.network.NetworkBridgeListener_

remoteBroker

_org.apache.activemq.transport.Transport_

staticallyIncludedDestinations

(_[org.apache.activemq.command.ActiveMQDestination](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_)*

### The _[<destinationDotFilePlugin>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

A [DOT](http://www.graphviz.org/) file creator plugin which creates a DOT file showing the current topic & queue hierarchies.

#### Properties

Property Name

Type

Description

file

_java.lang.String_

Sets the destination file name to create the destination diagram

### The _[<destinationEntry>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

A default entry in a DestinationMap which holds a single value.

#### Properties

Property Name

Type

Description

destination

_[org.apache.activemq.command.ActiveMQDestination](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

queue

_java.lang.String_

A helper method to set the destination from a configuration file

topic

_java.lang.String_

A helper method to set the destination from a configuration file

value

_java.lang.Object_

### The _[<fileCursor>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

Pending messages

### The _[<fileDurableSubscriberCursor>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

Pending messages for durable subscribers

### The _[<fileQueueCursor>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

Pending

### The _[<filteredDestination>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

Represents a destination which is filtered using some predicate such as a selector so that messages are only dispatched to the destination if they match the filter.

#### Properties

Property Name

Type

Description

destination

_[org.apache.activemq.command.ActiveMQDestination](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

The destination to send messages to if they match the filter

filter

_org.apache.activemq.filter.BooleanExpression_

queue

_java.lang.String_

Sets the destination property to the given queue name

selector

_java.lang.String_

Sets the JMS selector used to filter messages before forwarding them to this destination

topic

_java.lang.String_

Sets the destination property to the given topic name

### The _[<fixedCountSubscriptionRecoveryPolicy>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

This implementation of {@link SubscriptionRecoveryPolicy} will keep a fixed count of last messages.

#### Properties

Property Name

Type

Description

maximumSize

_int_

Sets the maximum number of messages that this destination will hold around in RAM

### The _[<fixedSizedSubscriptionRecoveryPolicy>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

This implementation of {@link SubscriptionRecoveryPolicy} will keep a fixed amount of memory available in RAM for message history which is evicted in time order.

#### Properties

Property Name

Type

Description

buffer

_org.apache.activemq.memory.list.MessageList_

maximumSize

_int_

Sets the maximum amount of RAM in bytes that this buffer can hold in RAM

useSharedBuffer

_boolean_

### The _[<forwardingBridge>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

Forwards all messages from the local broker to the remote broker.

#### Properties

Property Name

Type

Description

clientId

_java.lang.String_

destinationFilter

_java.lang.String_

dispatchAsync

_boolean_

localBroker

_org.apache.activemq.transport.Transport_

networkBridgeFailedListener

_org.apache.activemq.network.NetworkBridgeListener_

prefetchSize

_int_

remoteBroker

_org.apache.activemq.transport.Transport_

### The _[<imageBasedJDBCAdaptor>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

Provides JDBCAdapter since that uses IMAGE datatype to hold binary data. The databases/JDBC drivers that use this adapter are:

*   Sybase
*   MS SQL

#### Properties

Property Name

Type

Description

batchStatments

_boolean_

statements

_[org.apache.activemq.store.jdbc.Statements](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

useExternalMessageReferences

_boolean_

### The _[<inboundQueueBridge>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

Create an Inbound Queue Bridge

#### Properties

Property Name

Type

Description

consumer

_javax.jms.MessageConsumer_

consumerConnection

_javax.jms.QueueConnection_

consumerQueue

_[javax.jms.Queue](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

doHandleReplyTo

_boolean_

inboundQueueName

_java.lang.String_

jmsConnector

_[org.apache.activemq.network.jms.JmsConnector](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

jmsMessageConvertor

_[org.apache.activemq.network.jms.JmsMesageConvertor](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

localQueueName

_java.lang.String_

maximumRetries

_int_

Sets the maximum number of retries if a send fails before closing the bridge

producerConnection

_javax.jms.QueueConnection_

producerQueue

_[javax.jms.Queue](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

selector

_java.lang.String_

### The _[<inboundTopicBridge>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

Create an Inbound Topic Bridge

#### Properties

Property Name

Type

Description

consumer

_javax.jms.MessageConsumer_

consumerConnection

_javax.jms.TopicConnection_

consumerName

_java.lang.String_

consumerTopic

_[javax.jms.Topic](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

doHandleReplyTo

_boolean_

inboundTopicName

_java.lang.String_

jmsConnector

_[org.apache.activemq.network.jms.JmsConnector](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

jmsMessageConvertor

_[org.apache.activemq.network.jms.JmsMesageConvertor](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

localTopicName

_java.lang.String_

maximumRetries

_int_

Sets the maximum number of retries if a send fails before closing the bridge

producerConnection

_javax.jms.TopicConnection_

producerTopic

_[javax.jms.Topic](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

selector

_java.lang.String_

### The _[<individualDeadLetterStrategy>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

A {@link DeadLetterStrategy} where each destination has its own individual DLQ using the subject naming hierarchy.

#### Properties

Property Name

Type

Description

processExpired

_boolean_

processNonPersistent

_boolean_

queuePrefix

_java.lang.String_

Sets the prefix to use for all dead letter queues for queue messages

topicPrefix

_java.lang.String_

Sets the prefix to use for all dead letter queues for topic messages

useQueueForQueueMessages

_boolean_

Sets whether a queue or topic should be used for queue messages sent to a DLQ. The default is to use a Queue

useQueueForTopicMessages

_boolean_

Sets whether a queue or topic should be used for topic messages sent to a DLQ. The default is to use a Queue

### The _[<informixJDBCAdapter>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

JDBC Adapter for Informix database. Because Informix database restricts length of composite primary keys, length of _container name_ field and _subscription id_ field must be reduced to 150 characters. Therefore be sure not to use longer names for container name and subscription id than 150 characters.

#### Properties

Property Name

Type

Description

batchStatments

_boolean_

statements

_[org.apache.activemq.store.jdbc.Statements](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

useExternalMessageReferences

_boolean_

### The _[<jaasAuthenticationPlugin>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

Provides a JAAS based authentication plugin

#### Properties

Property Name

Type

Description

configuration

_java.lang.String_

Sets the JAAS configuration domain name used

discoverLoginConfig

_boolean_

Enables or disables the auto-discovery of the login.config file for JAAS to initialize itself. This flag is enabled by default such that if the **java.security.auth.login.config** system property is not defined then it is set to the location of the **login.config** file on the classpath.

### The _[<jaasCertificateAuthenticationPlugin>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

Provides a JAAS based SSL certificate authentication plugin

#### Properties

Property Name

Type

Description

configuration

_java.lang.String_

Sets the JAAS configuration domain name used

discoverLoginConfig

_boolean_

Enables or disables the auto-discovery of the login.config file for JAAS to initialize itself. This flag is enabled by default such that if the **java.security.auth.login.config** system property is not defined then it is set to the location of the **login.config** file on the classpath.

### The _[<jdbcPersistenceAdapter>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

A {@link PersistenceAdapter} implementation using JDBC for persistence storage. This persistence adapter will correctly remember prepared XA transactions, but it will not keep track of local transaction commits so that operations performed against the Message store are done as a single uow.

#### Properties

Property Name

Type

Description

adapter

_[org.apache.activemq.store.jdbc.JDBCAdapter](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

brokerName

_java.lang.String_

brokerService

_[org.apache.activemq.broker.BrokerService](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

cleanupPeriod

_int_

Sets the number of milliseconds until the database is attempted to be cleaned up for durable topics

createTablesOnStartup

_boolean_

Sets whether or not tables are created on startup

dataDirectory

_java.lang.String_

dataDirectoryFile

_java.io.File_

dataSource

_javax.sql.DataSource_

databaseLocker

_org.apache.activemq.store.jdbc.DatabaseLocker_

Sets the database locker strategy to use to lock the database on startup

directory

_java.io.File_

ds

_javax.sql.DataSource_

scheduledThreadPoolExecutor

_java.util.concurrent.ScheduledThreadPoolExecutor_

statements

_[org.apache.activemq.store.jdbc.Statements](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

usageManager

_[org.apache.activemq.usage.SystemUsage](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

useDatabaseLock

_boolean_

Sets whether or not an exclusive database lock should be used to enable JDBC Master/Slave. Enabled by default.

useExternalMessageReferences

_boolean_

wireFormat

_org.apache.activemq.wireformat.WireFormat_

### The _[<jmsQueueConnector>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

A Bridge to other JMS Queue providers

#### Properties

Property Name

Type

Description

brokerService

_[org.apache.activemq.broker.BrokerService](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

One way to configure the local connection - this is called by The BrokerService when the Connector is embedded

inboundMessageConvertor

_[org.apache.activemq.network.jms.JmsMesageConvertor](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

inboundQueueBridges

(_[org.apache.activemq.network.jms.InboundQueueBridge](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_)*

jndiLocalTemplate

_org.springframework.jndi.JndiTemplate_

jndiOutboundTemplate

_org.springframework.jndi.JndiTemplate_

localConnectionFactoryName

_java.lang.String_

localPassword

_java.lang.String_

localQueueConnection

_javax.jms.QueueConnection_

localQueueConnectionFactory

_[javax.jms.QueueConnectionFactory](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

localUsername

_java.lang.String_

name

_java.lang.String_

outboundMessageConvertor

_[org.apache.activemq.network.jms.JmsMesageConvertor](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

outboundPassword

_java.lang.String_

outboundQueueBridges

(_[org.apache.activemq.network.jms.OutboundQueueBridge](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_)*

outboundQueueConnection

_javax.jms.QueueConnection_

outboundQueueConnectionFactory

_[javax.jms.QueueConnectionFactory](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

outboundQueueConnectionFactoryName

_java.lang.String_

outboundUsername

_java.lang.String_

replyToDestinationCacheSize

_int_

### The _[<jmsTopicConnector>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

A Bridge to other JMS Topic providers

#### Properties

Property Name

Type

Description

brokerService

_[org.apache.activemq.broker.BrokerService](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

One way to configure the local connection - this is called by The BrokerService when the Connector is embedded

inboundMessageConvertor

_[org.apache.activemq.network.jms.JmsMesageConvertor](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

inboundTopicBridges

(_[org.apache.activemq.network.jms.InboundTopicBridge](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_)*

jndiLocalTemplate

_org.springframework.jndi.JndiTemplate_

jndiOutboundTemplate

_org.springframework.jndi.JndiTemplate_

localConnectionFactoryName

_java.lang.String_

localPassword

_java.lang.String_

localTopicConnection

_javax.jms.TopicConnection_

localTopicConnectionFactory

_[javax.jms.TopicConnectionFactory](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

localUsername

_java.lang.String_

name

_java.lang.String_

outboundMessageConvertor

_[org.apache.activemq.network.jms.JmsMesageConvertor](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

outboundPassword

_java.lang.String_

outboundTopicBridges

(_[org.apache.activemq.network.jms.OutboundTopicBridge](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_)*

outboundTopicConnection

_javax.jms.TopicConnection_

outboundTopicConnectionFactory

_[javax.jms.TopicConnectionFactory](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

outboundTopicConnectionFactoryName

_java.lang.String_

outboundUsername

_java.lang.String_

replyToDestinationCacheSize

_int_

### The _[<journalPersistenceAdapter>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

An implementation of {@link PersistenceAdapter} designed for use with a {@link Journal} and then check pointing asynchronously on a timeout with some other long term persistent storage.

#### Properties

Property Name

Type

Description

brokerName

_java.lang.String_

directory

_java.io.File_

journal

_org.apache.activeio.journal.Journal_

longTermPersistence

_[org.apache.activemq.store.PersistenceAdapter](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

maxCheckpointMessageAddSize

_int_

maxCheckpointWorkers

_int_

taskRunnerFactory

_org.apache.activemq.thread.TaskRunnerFactory_

usageManager

_[org.apache.activemq.usage.SystemUsage](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

useExternalMessageReferences

_boolean_

### The _[<journaledJDBC>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

Creates a default persistence model using the Journal and JDBC

#### Properties

Property Name

Type

Description

adapter

_[org.apache.activemq.store.jdbc.JDBCAdapter](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

createTablesOnStartup

_boolean_

Sets whether or not tables are created on startup

dataDirectory

_java.lang.String_

dataDirectoryFile

_java.io.File_

dataSource

_javax.sql.DataSource_

jdbcAdapter

_[org.apache.activemq.store.jdbc.JDBCPersistenceAdapter](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

journal

_org.apache.activeio.journal.Journal_

journalArchiveDirectory

_java.io.File_

journalLogFileSize

_int_

Sets the size of the journal log files

journalLogFiles

_int_

Sets the number of journal log files to use

journalThreadPriority

_int_

Sets the thread priority of the journal thread

statements

_[org.apache.activemq.store.jdbc.Statements](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

taskRunnerFactory

_org.apache.activemq.thread.TaskRunnerFactory_

useDatabaseLock

_boolean_

Sets whether or not an exclusive database lock should be used to enable JDBC Master/Slave. Enabled by default.

useJournal

_boolean_

Enables or disables the use of the journal. The default is to use the journal

useQuickJournal

_boolean_

Enables or disables the use of quick journal, which keeps messages in the journal and just stores a reference to the messages in JDBC. Defaults to false so that messages actually reside long term in the JDBC database.

### The _[<kahaPersistenceAdapter>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

#### Properties

Property Name

Type

Description

brokerName

_java.lang.String_

directory

_java.io.File_

maxDataFileLength

_long_

persistentIndex

_boolean_

size

_java.util.concurrent.atomic.AtomicLong_

usageManager

_[org.apache.activemq.usage.SystemUsage](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

### The _[<lDAPAuthorizationMap>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

An {@link AuthorizationMap} which uses LDAP

#### Properties

Property Name

Type

Description

adminAttribute

_java.lang.String_

adminBase

_java.lang.String_

authentication

_java.lang.String_

connectionPassword

_java.lang.String_

connectionProtocol

_java.lang.String_

connectionURL

_java.lang.String_

connectionUsername

_java.lang.String_

context

_javax.naming.directory.DirContext_

initialContextFactory

_java.lang.String_

options

_java.util.Map_

queueSearchMatchingFormat

_java.text.MessageFormat_

queueSearchSubtreeBool

_boolean_

readAttribute

_java.lang.String_

readBase

_java.lang.String_

topicSearchMatchingFormat

_java.text.MessageFormat_

topicSearchSubtreeBool

_boolean_

writeAttribute

_java.lang.String_

writeBase

_java.lang.String_

### The _[<lastImageSubscriptionRecoveryPolicy>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

This implementation of {@link SubscriptionRecoveryPolicy} will only keep the last message.

### The _[<ldapNetworkConnector>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

class to create dynamic network connectors listed in an directory server using the LDAP v3 protocol as defined in RFC 2251, the entries listed in the directory server must implement the ipHost and ipService objectClasses as defined in RFC 2307.

#### Properties

Property Name

Type

Description

base

_java.lang.String_

sets the base LDAP dn used for lookup operations

bridgeTempDestinations

_boolean_

brokerName

_java.lang.String_

brokerService

_[org.apache.activemq.broker.BrokerService](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

conduitSubscriptions

_boolean_

connectionFilter

_org.apache.activemq.network.ConnectionFilter_

decreaseNetworkConsumerPriority

_boolean_

destinationFilter

_java.lang.String_

dispatchAsync

_boolean_

duplex

_boolean_

durableDestinations

(_java.lang.Object_)*

dynamicOnly

_boolean_

dynamicallyIncludedDestinations

(_java.lang.Object_)*

excludedDestinations

(_java.lang.Object_)*

localUri

_java.net.URI_

name

_java.lang.String_

networkTTL

_int_

objectName

_javax.management.ObjectName_

password

_java.lang.String_

sets the LDAP password for access credentials

prefetchSize

_int_

searchFilter

_java.lang.String_

sets the LDAP search filter as defined in RFC 2254

searchScope

_java.lang.String_

sets the LDAP search scope

staticallyIncludedDestinations

(_java.lang.Object_)*

uri

_java.net.URI_

sets the LDAP server URI

user

_java.lang.String_

sets the LDAP user for access credentials

userName

_java.lang.String_

### The _[<loggingBrokerPlugin>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

A simple Broker interceptor which allows you to enable/disable logging.

#### Properties

Property Name

Type

Description

ackLog

_org.apache.commons.logging.Log_

adminConnectionContext

_org.apache.activemq.broker.ConnectionContext_

log

_org.apache.commons.logging.Log_

next

_[org.apache.activemq.broker.Broker](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

sendLog

_org.apache.commons.logging.Log_

### The _[<managementContext>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

A Flow provides different dispatch policies within the NMR

#### Properties

Property Name

Type

Description

MBeanServer

_javax.management.MBeanServer_

Get the MBeanServer

connectorPath

_java.lang.String_

connectorPort

_int_

createConnector

_boolean_

createMBeanServer

_boolean_

findTigerMbeanServer

_boolean_

Enables/disables the searching for the Java 5 platform MBeanServer

jmxDomainName

_java.lang.String_

rmiServerPort

_int_

server

_javax.management.MBeanServer_

useMBeanServer

_boolean_

### The _[<masterConnector>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

Connects a Slave Broker to a Master when using [Master Slave](http://activemq.apache.orgFeatures/ClusteringFeatures/Clustering/Features/Clustering/masterslave.md) for High Availability of messages.

#### Properties

Property Name

Type

Description

brokerService

_[org.apache.activemq.broker.BrokerService](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

localURI

_java.net.URI_

password

_java.lang.String_

remoteURI

_java.net.URI_

remoteUri

_java.lang.String_

userName

_java.lang.String_

### The _[<memoryPersistenceAdapter>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

#### Properties

Property Name

Type

Description

brokerName

_java.lang.String_

directory

_java.io.File_

usageManager

_[org.apache.activemq.usage.SystemUsage](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

useExternalMessageReferences

_boolean_

### The _[<memoryUsage>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

Used to keep track of how much of something is being used so that a productive working set usage can be controlled. Main use case is manage memory usage.

#### Properties

Property Name

Type

Description

limit

_long_

Sets the memory limit in bytes. Setting the limit in bytes will set the usagePortion to 0 since the UsageManager is not going to be portion based off the parent. When set using XBean, you can use values such as: "20 mb", "1024 kb", or "1 gb"

limiter

_[org.apache.activemq.usage.UsageCapacity](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

name

_java.lang.String_

parent

_T_

percentUsage

_int_

percentUsageMinDelta

_int_

Sets the minimum number of percentage points the usage has to change before a UsageListener event is fired by the manager.

pollingTime

_int_

portion

_float_

usage

_long_

usagePortion

_float_

### The _[<messageGroupHashBucketFactory>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

A factory to create instances of {@link SimpleMessageGroupMap} when implementing the [Message Groups](http://activemq.apache.org/Features/Consumer Features/message-groups.md) functionality.

#### Properties

Property Name

Type

Description

bucketCount

_int_

Sets the number of hash buckets to use for the message group functionality. This is only applicable to using message groups to parallelize processing of a queue while preserving order across an individual JMSXGroupID header value. This value sets the number of hash buckets that will be used (i.e. the maximum possible concurrency).

### The _[<mirroredQueue>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

Creates [Mirrored Queue](http://activemq.org/siteFeatures/Destination FeaturesFeatures/Destination Features/Features/Destination Features/mirrored-queues.md) using a prefix and postfix to define the topic name on which to mirror the queue to.

#### Properties

Property Name

Type

Description

brokerService

_[org.apache.activemq.broker.BrokerService](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

copyMessage

_boolean_

Sets whether a copy of the message will be sent to each destination. Defaults to true so that the forward destination is set as the destination of the message

postfix

_java.lang.String_

Sets any postix used to identify the queue consumers

prefix

_java.lang.String_

Sets the prefix wildcard used to identify the queue consumers for a given topic

### The _[<multicastNetworkConnector>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

A network connector which uses some kind of multicast-like transport that communicates with potentially many remote brokers over a single logical {@link Transport} instance such as when using multicast. This implementation does not depend on multicast at all; any other group based transport could be used.

#### Properties

Property Name

Type

Description

bridge

_[org.apache.activemq.network.DemandForwardingBridgeSupport](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

bridgeTempDestinations

_boolean_

brokerName

_java.lang.String_

brokerService

_[org.apache.activemq.broker.BrokerService](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

conduitSubscriptions

_boolean_

connectionFilter

_org.apache.activemq.network.ConnectionFilter_

decreaseNetworkConsumerPriority

_boolean_

destinationFilter

_java.lang.String_

dispatchAsync

_boolean_

duplex

_boolean_

durableDestinations

(_java.lang.Object_)*

dynamicOnly

_boolean_

dynamicallyIncludedDestinations

(_java.lang.Object_)*

excludedDestinations

(_java.lang.Object_)*

localTransport

_org.apache.activemq.transport.Transport_

localUri

_java.net.URI_

name

_java.lang.String_

networkTTL

_int_

objectName

_javax.management.ObjectName_

password

_java.lang.String_

prefetchSize

_int_

remoteTransport

_org.apache.activemq.transport.Transport_

Sets the remote transport implementation

remoteURI

_java.net.URI_

Sets the remote transport URI to some group transport like `multicast://address:port`

staticallyIncludedDestinations

(_java.lang.Object_)*

userName

_java.lang.String_

### The _[<multicastTraceBrokerPlugin>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

A Broker interceptor which allows you to trace all operations to a Multicast socket.

#### Properties

Property Name

Type

Description

address

_java.net.SocketAddress_

adminConnectionContext

_org.apache.activemq.broker.ConnectionContext_

broadcast

_boolean_

destination

_java.net.URI_

maxTraceDatagramSize

_int_

next

_[org.apache.activemq.broker.Broker](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

timeToLive

_int_

wireFormat

_org.apache.activemq.wireformat.WireFormat_

wireFormatFactory

_org.apache.activemq.wireformat.WireFormatFactory_

### The _[<networkConnector>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

A network connector which uses a discovery agent to detect the remote brokers available and setup a connection to each available remote broker

#### Properties

Property Name

Type

Description

bridgeTempDestinations

_boolean_

brokerName

_java.lang.String_

brokerService

_[org.apache.activemq.broker.BrokerService](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

conduitSubscriptions

_boolean_

connectionFilter

_org.apache.activemq.network.ConnectionFilter_

decreaseNetworkConsumerPriority

_boolean_

destinationFilter

_java.lang.String_

discoveryAgent

_org.apache.activemq.transport.discovery.DiscoveryAgent_

discoveryURI

_java.net.URI_

dispatchAsync

_boolean_

duplex

_boolean_

durableDestinations

(_java.lang.Object_)*

dynamicOnly

_boolean_

dynamicallyIncludedDestinations

(_java.lang.Object_)*

excludedDestinations

(_java.lang.Object_)*

localUri

_java.net.URI_

name

_java.lang.String_

networkTTL

_int_

objectName

_javax.management.ObjectName_

password

_java.lang.String_

prefetchSize

_int_

staticallyIncludedDestinations

(_java.lang.Object_)*

uri

_java.net.URI_

userName

_java.lang.String_

### The _[<noSubscriptionRecoveryPolicy>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

This SubscriptionRecoveryPolicy disable recovery of messages.

### The _[<oldestMessageEvictionStrategy>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

An eviction strategy which evicts the oldest message first (which is the default).

#### Properties

Property Name

Type

Description

evictExpiredMessagesHighWatermark

_int_

Sets the high water mark on which we will eagerly evict expired messages from RAM

### The _[<oldestMessageWithLowestPriorityEvictionStrategy>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

An eviction strategy which evicts the oldest message with the lowest priority first.

#### Properties

Property Name

Type

Description

evictExpiredMessagesHighWatermark

_int_

Sets the high water mark on which we will eagerly evict expired messages from RAM

### The _[<oracleJDBCAdapter>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

Implements all the default JDBC operations that are used by the JDBCPersistenceAdapter.

Subclassing is encouraged to override the default implementation of methods to account for differences in JDBC Driver implementations.

The JDBCAdapter inserts and extracts BLOB data using the getBytes()/setBytes() operations.

The databases/JDBC drivers that use this adapter are:

#### Properties

Property Name

Type

Description

batchStatments

_boolean_

statements

_[org.apache.activemq.store.jdbc.Statements](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

useExternalMessageReferences

_boolean_

### The _[<outboundQueueBridge>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

Create an Outbound Queue Bridge

#### Properties

Property Name

Type

Description

consumer

_javax.jms.MessageConsumer_

consumerConnection

_javax.jms.QueueConnection_

consumerQueue

_[javax.jms.Queue](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

doHandleReplyTo

_boolean_

jmsConnector

_[org.apache.activemq.network.jms.JmsConnector](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

jmsMessageConvertor

_[org.apache.activemq.network.jms.JmsMesageConvertor](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

localQueueName

_java.lang.String_

maximumRetries

_int_

Sets the maximum number of retries if a send fails before closing the bridge

outboundQueueName

_java.lang.String_

producerConnection

_javax.jms.QueueConnection_

producerQueue

_[javax.jms.Queue](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

selector

_java.lang.String_

### The _[<outboundTopicBridge>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

Create an Outbound Topic Bridge

#### Properties

Property Name

Type

Description

consumer

_javax.jms.MessageConsumer_

consumerConnection

_javax.jms.TopicConnection_

consumerName

_java.lang.String_

consumerTopic

_[javax.jms.Topic](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

doHandleReplyTo

_boolean_

jmsConnector

_[org.apache.activemq.network.jms.JmsConnector](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

jmsMessageConvertor

_[org.apache.activemq.network.jms.JmsMesageConvertor](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

localTopicName

_java.lang.String_

maximumRetries

_int_

Sets the maximum number of retries if a send fails before closing the bridge

outboundTopicName

_java.lang.String_

producerConnection

_javax.jms.TopicConnection_

producerTopic

_[javax.jms.Topic](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

selector

_java.lang.String_

### The _[<policyEntry>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

Represents an entry in a {@link PolicyMap} for assigning policies to a specific destination or a hierarchical wildcard area of destinations.

#### Properties

Property Name

Type

Description

deadLetterStrategy

_[org.apache.activemq.broker.region.policy.DeadLetterStrategy](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Sets the policy used to determine which dead letter queue destination should be used

destination

_[org.apache.activemq.command.ActiveMQDestination](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

dispatchPolicy

_[org.apache.activemq.broker.region.policy.DispatchPolicy](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

enableAudit

_boolean_

maxAuditDepth

_int_

maxProducersToAudit

_int_

maxQueueAuditDepth

_int_

memoryLimit

_long_

messageEvictionStrategy

_[org.apache.activemq.broker.region.policy.MessageEvictionStrategy](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Sets the eviction strategy used to decide which message to evict when the slow consumer needs to discard messages

messageGroupMapFactory

_[org.apache.activemq.broker.region.group.MessageGroupMapFactory](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Sets the factory used to create new instances of {MessageGroupMap} used to implement the [Message Groups](http://activemq.apache.org/Features/Consumer Features/message-groups.md) functionality.

optimizedDispatch

_boolean_

pendingDurableSubscriberPolicy

_[org.apache.activemq.broker.region.policy.PendingDurableSubscriberMessageStoragePolicy](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

pendingMessageLimitStrategy

_[org.apache.activemq.broker.region.policy.PendingMessageLimitStrategy](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Sets the strategy to calculate the maximum number of messages that are allowed to be pending on consumers (in addition to their prefetch sizes). Once the limit is reached, non-durable topics can then start discarding old messages. This allows us to keep dispatching messages to slow consumers while not blocking fast consumers and discarding the messages oldest first.

pendingQueuePolicy

_[org.apache.activemq.broker.region.policy.PendingQueueMessageStoragePolicy](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

pendingSubscriberPolicy

_[org.apache.activemq.broker.region.policy.PendingSubscriberMessageStoragePolicy](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

producerFlowControl

_boolean_

queue

_java.lang.String_

A helper method to set the destination from a configuration file

sendAdvisoryIfNoConsumers

_boolean_

Sends an advisory message if a non-persistent message is sent and there are no active consumers

subscriptionRecoveryPolicy

_[org.apache.activemq.broker.region.policy.SubscriptionRecoveryPolicy](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

topic

_java.lang.String_

A helper method to set the destination from a configuration file

### The _[<policyMap>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

Represents a destination based configuration of policies so that individual destinations or wildcard hierarchies of destinations can be configured using different policies.

#### Properties

Property Name

Type

Description

defaultEntry

_[org.apache.activemq.broker.region.policy.PolicyEntry](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

entries

(_java.lang.Object_)*

A helper method to allow the destination map to be populated from a dependency injection framework such as Spring

policyEntries

(_java.lang.Object_)*

Sets the individual entries on the policy map

### The _[<prefetchPolicy>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

Defines the prefetch message policies for different types of consumers

#### Properties

Property Name

Type

Description

all

_int_

durableTopicPrefetch

_int_

inputStreamPrefetch

_int_

maximumPendingMessageLimit

_int_

Sets how many messages a broker will keep around, above the prefetch limit, for non-durable topics before starting to discard older messages.

optimizeDurableTopicPrefetch

_int_

queueBrowserPrefetch

_int_

queuePrefetch

_int_

topicPrefetch

_int_

### The _[<prefetchRatePendingMessageLimitStrategy>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

This PendingMessageLimitStrategy sets the maximum pending message limit value to be a multiplier of the prefetch limit of the subscription.

#### Properties

Property Name

Type

Description

multiplier

_double_

Sets the multiplier of the prefetch size which will be used to define the maximum number of pending messages for non-durable topics before messages are discarded.

### The _[<proxyConnector>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

#### Properties

Property Name

Type

Description

bind

_java.net.URI_

localUri

_java.net.URI_

name

_java.lang.String_

remote

_java.net.URI_

server

_org.apache.activemq.transport.TransportServer_

### The _[<queryBasedSubscriptionRecoveryPolicy>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

This implementation of {@link SubscriptionRecoveryPolicy} will perform a user specific query mechanism to load any messages they may have missed.

#### Properties

Property Name

Type

Description

query

_org.apache.activemq.broker.region.policy.MessageQuery_

Sets the query strategy to load initial messages

### The _[<queue>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

An ActiveMQ Queue

#### Properties

Property Name

Type

Description

compositeDestinations

(_[org.apache.activemq.command.ActiveMQDestination](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_)*

name

_java.lang.String_

physicalName

_java.lang.String_

properties

_java.util.Properties_

Get the properties from this instance for storing in JNDI

### The _[<redeliveryPolicy>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

Configuration options used to control how messages are re-delivered when they are rolled back.

#### Properties

Property Name

Type

Description

backOffMultiplier

_short_

collisionAvoidancePercent

_short_

initialRedeliveryDelay

_long_

maximumRedeliveries

_int_

useCollisionAvoidance

_boolean_

useExponentialBackOff

_boolean_

### The _[<roundRobinDispatchPolicy>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

Simple dispatch policy that sends a message to every subscription that matches the message.

### The _[<sharedDeadLetterStrategy>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

A default implementation of {@link DeadLetterStrategy} which uses a constant destination.

#### Properties

Property Name

Type

Description

deadLetterQueue

_[org.apache.activemq.command.ActiveMQDestination](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

processExpired

_boolean_

processNonPersistent

_boolean_

### The _[<simpleAuthenticationPlugin>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

Provides a simple authentication plugin

#### Properties

Property Name

Type

Description

userGroups

_java.util.Map_

Sets the groups a user is in. The key is the user name and the value is a Set of groups

userPasswords

_java.util.Map_

Sets the map indexed by user name with the value the password

users

(_java.lang.Object_)*

Sets individual users for authentication

### The _[<simpleAuthorizationMap>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

An AuthorizationMap which is configured with individual DestinationMaps for each operation.

#### Properties

Property Name

Type

Description

adminACLs

_[org.apache.activemq.filter.DestinationMap](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

readACLs

_[org.apache.activemq.filter.DestinationMap](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

tempDestinationAuthorizationEntry

_[org.apache.activemq.security.TempDestinationAuthorizationEntry](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

writeACLs

_[org.apache.activemq.filter.DestinationMap](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

### The _[<simpleDispatchPolicy>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

Simple dispatch policy that sends a message to every subscription that matches the message.

### The _[<simpleJmsMessageConvertor>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

Converts Message from one JMS to another

#### Properties

Property Name

Type

Description

connection

_javax.jms.Connection_

### The _[<simpleMessageGroupMapFactory>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

A factory to create instances of {@link SimpleMessageGroupMap} when implementing the [Message Groups](http://activemq.apache.org/Features/Consumer Features/message-groups.md) functionality.

### The _[<statements>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

#### Properties

Property Name

Type

Description

addMessageStatement

_java.lang.String_

binaryDataType

_java.lang.String_

containerNameDataType

_java.lang.String_

createDurableSubStatement

_java.lang.String_

createSchemaStatements

(_java.lang.String_)*

deleteOldMessagesStatement

_java.lang.String_

deleteSubscriptionStatement

_java.lang.String_

destinationMessageCountStatement

_java.lang.String_

dropSchemaStatements

(_java.lang.String_)*

durableSubAcksTableName

_java.lang.String_

durableSubscriberMessageCountStatement

_java.lang.String_

findAllDestinationsStatement

_java.lang.String_

findAllDurableSubMessagesStatement

_java.lang.String_

findAllDurableSubsStatement

_java.lang.String_

findAllMessagesStatement

_java.lang.String_

findDurableSubMessagesStatement

_java.lang.String_

findDurableSubStatement

_java.lang.String_

findLastSequenceIdInAcksStatement

_java.lang.String_

findLastSequenceIdInMsgsStatement

_java.lang.String_

findMessageSequenceIdStatement

_java.lang.String_

findMessageStatement

_java.lang.String_

findNextMessagesStatement

_java.lang.String_

lastAckedDurableSubscriberMessageStatement

_java.lang.String_

lockCreateStatement

_java.lang.String_

lockTableName

_java.lang.String_

lockUpdateStatement

_java.lang.String_

longDataType

_java.lang.String_

messageTableName

_java.lang.String_

msgIdDataType

_java.lang.String_

nextDurableSubscriberMessageStatement

_java.lang.String_

removeAllMessagesStatement

_java.lang.String_

removeAllSubscriptionsStatement

_java.lang.String_

removeMessageStatment

_java.lang.String_

sequenceDataType

_java.lang.String_

stringIdDataType

_java.lang.String_

tablePrefix

_java.lang.String_

updateLastAckOfDurableSubStatement

_java.lang.String_

updateMessageStatement

_java.lang.String_

useExternalMessageReferences

_boolean_

useLockCreateWhereClause

_boolean_

### The _[<storeCursor>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

Pending messages

### The _[<storeDurableSubscriberCursor>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

Pending messages for a durable

### The _[<storeUsage>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

Used to keep track of how much of something is being used so that a productive working set usage can be controlled. Main use case is manage memory usage.

#### Properties

Property Name

Type

Description

limit

_long_

Sets the memory limit in bytes. Setting the limit in bytes will set the usagePortion to 0 since the UsageManager is not going to be portion based off the parent. When set using XBean, you can use values such as: "20 mb", "1024 kb", or "1 gb"

limiter

_[org.apache.activemq.usage.UsageCapacity](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

name

_java.lang.String_

parent

_T_

percentUsage

_int_

percentUsageMinDelta

_int_

Sets the minimum number of percentage points the usage has to change before a UsageListener event is fired by the manager.

pollingTime

_int_

store

_[org.apache.activemq.store.PersistenceAdapter](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

usagePortion

_float_

### The _[<streamJDBCAdapter>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

This JDBCAdapter inserts and extracts BLOB data using the setBinaryStream()/getBinaryStream() operations. The databases/JDBC drivers that use this adapter are:

*   Axion

#### Properties

Property Name

Type

Description

batchStatments

_boolean_

statements

_[org.apache.activemq.store.jdbc.Statements](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

useExternalMessageReferences

_boolean_

### The _[<strictOrderDispatchPolicy>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

Dispatch policy that causes every subscription to see messages in the same order.

### The _[<systemUsage>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

Holder for Usage instances for memory, store and temp files Main use case is manage memory usage.

#### Properties

Property Name

Type

Description

adapter

_[org.apache.activemq.store.PersistenceAdapter](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

memoryUsage

_[org.apache.activemq.usage.MemoryUsage](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

name

_java.lang.String_

parent

_[org.apache.activemq.usage.SystemUsage](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

sendFailIfNoSpace

_boolean_

Sets whether or not a send() should fail if there is no space free. The default value is false which means to block the send() method until space becomes available

sendFailIfNoSpaceExplicitySet

_boolean_

storeUsage

_[org.apache.activemq.usage.StoreUsage](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

tempStore

_org.apache.activemq.kaha.Store_

tempUsage

_[org.apache.activemq.usage.TempUsage](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

### The _[<tempDestinationAuthorizationEntry>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

Represents an entry in a {@link DefaultAuthorizationMap} for assigning different operations (read, write, admin) of user roles to a temporary destination

#### Properties

Property Name

Type

Description

admin

_java.lang.String_

adminACLs

(_java.lang.Object_)*

destination

_[org.apache.activemq.command.ActiveMQDestination](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

groupClass

_java.lang.String_

queue

_java.lang.String_

A helper method to set the destination from a configuration file

read

_java.lang.String_

readACLs

(_java.lang.Object_)*

topic

_java.lang.String_

A helper method to set the destination from a configuration file

write

_java.lang.String_

writeACLs

(_java.lang.Object_)*

### The _[<tempUsage>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

Used to keep track of how much of something is being used so that a productive working set usage can be controlled. Main use case is manage memory usage.

#### Properties

Property Name

Type

Description

limit

_long_

Sets the memory limit in bytes. Setting the limit in bytes will set the usagePortion to 0 since the UsageManager is not going to be portion based off the parent. When set using XBean, you can use values such as: "20 mb", "1024 kb", or "1 gb"

limiter

_[org.apache.activemq.usage.UsageCapacity](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

name

_java.lang.String_

parent

_T_

percentUsage

_int_

percentUsageMinDelta

_int_

Sets the minimum number of percentage points the usage has to change before a UsageListener event is fired by the manager.

pollingTime

_int_

store

_org.apache.activemq.kaha.Store_

usagePortion

_float_

### The _[<timeStampingBrokerPlugin>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

A Broker interceptor which updates a JMS Client's timestamp on the message with a broker timestamp. Useful when the clocks on client machines are known to not be correct and you can only trust the time set on the broker machines. Enabling this plugin will break JMS compliance since the timestamp that the producer sees on the messages after as send() will be different from the timestamp the consumer will observe when he receives the message. This plugin is not enabled in the default ActiveMQ configuration.

#### Properties

Property Name

Type

Description

adminConnectionContext

_org.apache.activemq.broker.ConnectionContext_

next

_[org.apache.activemq.broker.Broker](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

### The _[<timedSubscriptionRecoveryPolicy>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

This implementation of {@link SubscriptionRecoveryPolicy} will keep a timed buffer of messages around in memory and use that to recover new subscriptions.

#### Properties

Property Name

Type

Description

recoverDuration

_long_

### The _[<topic>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

An ActiveMQ Topic

#### Properties

Property Name

Type

Description

compositeDestinations

(_[org.apache.activemq.command.ActiveMQDestination](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_)*

name

_java.lang.String_

physicalName

_java.lang.String_

properties

_java.util.Properties_

Get the properties from this instance for storing in JNDI

### The _[<transportConnector>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

#### Properties

Property Name

Type

Description

broker

_[org.apache.activemq.broker.Broker](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

brokerInfo

_org.apache.activemq.command.BrokerInfo_

brokerName

_java.lang.String_

connectUri

_java.net.URI_

disableAsyncDispatch

_boolean_

discoveryAgent

_org.apache.activemq.transport.discovery.DiscoveryAgent_

discoveryUri

_java.net.URI_

enableStatusMonitor

_boolean_

messageAuthorizationPolicy

_org.apache.activemq.security.MessageAuthorizationPolicy_

Sets the policy used to decide if the current connection is authorized to consume a given message

name

_java.lang.String_

server

_org.apache.activemq.transport.TransportServer_

taskRunnerFactory

_org.apache.activemq.thread.TaskRunnerFactory_

uri

_java.net.URI_

Sets the server transport URI to use if there is not a {@link TransportServer} configured via the {@link #setServer(TransportServer)} method. This value is used to lazy create a {@link TransportServer} instance

### The _[<udpTraceBrokerPlugin>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

A Broker interceptor which allows you to trace all operations to a UDP socket.

#### Properties

Property Name

Type

Description

address

_java.net.SocketAddress_

adminConnectionContext

_org.apache.activemq.broker.ConnectionContext_

broadcast

_boolean_

destination

_java.net.URI_

maxTraceDatagramSize

_int_

next

_[org.apache.activemq.broker.Broker](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

wireFormat

_org.apache.activemq.wireformat.WireFormat_

wireFormatFactory

_org.apache.activemq.wireformat.WireFormatFactory_

### The _[<usageCapacity>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

Identify if a limit has been reached

#### Properties

Property Name

Type

Description

limit

_long_

### The _[<virtualDestinationInterceptor>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

Implements [Virtual Topics](http://activemq.apache.orgFeatures/Destination Features/Features/Destination Features/virtual-destinations.md).

#### Properties

Property Name

Type

Description

virtualDestinations

(_[org.apache.activemq.broker.region.virtual.VirtualDestination](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_)*

### The _[<virtualTopic>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

Creates [Virtual Topics](http://activemq.org/siteFeatures/Destination Features/Features/Destination Features/virtual-destinations.md) using a prefix and postfix. The virtual destination creates a wildcard that is then used to look up all active queue subscriptions which match.

#### Properties

Property Name

Type

Description

name

_java.lang.String_

postfix

_java.lang.String_

Sets any postix used to identify the queue consumers

prefix

_java.lang.String_

Sets the prefix wildcard used to identify the queue consumers for a given topic

### The _[<vmCursor>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

Pending messages held

### The _[<vmDurableCursor>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

Pending

### The _[<vmQueueCursor>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

Pending messages

### The _[<xaConnectionFactory>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_ Element

A [Spring](http://www.springframework.org/) enhanced XA connection factory which will automatically use the Spring bean name as the clientIDPrefix property so that connections created have client IDs related to your Spring.xml file for easier comprehension from [JMX](http://activemq.apache.orgFeatures/jmx.md).

#### Properties

Property Name

Type

Description

alwaysSessionAsync

_boolean_

If this flag is set then a separate thread is not used for dispatching messages for each Session in the Connection. However, a separate thread is always used if there is more than one session, or the session isn't in auto acknowledge or duplicates ok mode

alwaysSyncSend

_boolean_

Set true if always require messages to be sync sent

beanName

_java.lang.String_

blobTransferPolicy

_org.apache.activemq.blob.BlobTransferPolicy_

Sets the policy used to describe how out-of-band BLOBs (Binary Large OBjects) are transferred from producers to brokers to consumers

brokerURL

_java.lang.String_

Sets the [connection URL](http://activemq.apache.orgUsing ActiveMQ/configuring-transports.md) used to connect to the ActiveMQ broker.

clientID

_java.lang.String_

Sets the JMS clientID to use for the created connection. Note that this can only be used by one connection at once so generally its a better idea to set the clientID on a Connection

clientIDPrefix

_java.lang.String_

Sets the prefix used by autogenerated JMS Client ID values which are used if the JMS client does not explicitly specify on.

clientIdGenerator

_org.apache.activemq.util.IdGenerator_

closeTimeout

_int_

Sets the timeout before a close is considered complete. Normally a close() on a connection waits for confirmation from the broker; this allows that operation to timeout to save the client hanging if there is no broker

copyMessageOnSend

_boolean_

Should a JMS message be copied to a new JMS Message object as part of the send() method in JMS. This is enabled by default to be compliant with the JMS specification. You can disable it if you do not mutate JMS messages after they are sent for a performance boost

disableTimeStampsByDefault

_boolean_

Sets whether or not timestamps on messages should be disabled or not. If you disable them it adds a small performance boost.

dispatchAsync

_boolean_

Enables or disables the default setting of whether or not consumers have their messages [dispatched synchronously or asynchronously by the broker](http://activemq.apache.org/Features/Consumer Features/consumer-dispatch-async.md). For non-durable topics for example we typically dispatch synchronously by default to minimize context switches which boost performance. However sometimes its better to go slower to ensure that a single blocked consumer socket does not block delivery to other consumers.

exclusiveConsumer

_boolean_

Enables or disables whether or not queue consumers should be exclusive or not for example to preserve ordering when not using [Message Groups](http://activemq.apache.org/Features/Consumer Features/message-groups.md)

nestedMapAndListEnabled

_boolean_

Enables/disables whether or not Message properties and MapMessage entries support [Nested Structures](http://activemq.apache.orgFeatures/Message Features/structured-message-properties-and-mapmessages.md) of Map and List objects

objectMessageSerializationDefered

_boolean_

When an object is set on an ObjectMessage, the JMS spec requires the object to be serialized by that set method. Enabling this flag causes the object to not get serialized. The object may subsequently get serialized if the message needs to be sent over a socket or stored to disk.

optimizeAcknowledge

_boolean_

optimizedMessageDispatch

_boolean_

If this flag is set then an larger prefetch limit is used - only applicable for durable topic subscribers.

password

_java.lang.String_

Sets the JMS password used for connections created from this factory

prefetchPolicy

_[org.apache.activemq.ActiveMQPrefetchPolicy](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Sets the [prefetch policy](http://activemq.apache.orgCommunity/FAQ/Using Apache ActiveMQCommunity/FAQ/Using Apache ActiveMQ/Community/FAQ/Using Apache ActiveMQ/what-is-the-prefetch-limit-for.md) for consumers created by this connection.

producerWindowSize

_int_

properties

_java.util.Properties_

Get the properties from this instance for storing in JNDI

redeliveryPolicy

_[org.apache.activemq.RedeliveryPolicy](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Sets the global redelivery policy to be used when a message is delivered but the session is rolled back

statsEnabled

_boolean_

transformer

_org.apache.activemq.MessageTransformer_

Sets the transformer used to transform messages before they are sent on to the JMS bus or when they are received from the bus but before they are delivered to the JMS client

transportListener

_org.apache.activemq.transport.TransportListener_

Allows a listener to be configured on the ConnectionFactory so that when this factory is used with frameworks which don't expose the Connection such as Spring JmsTemplate, you can still register a transport listener.

useAsyncSend

_boolean_

Forces the use of [Async Sends](http://activemq.apache.orgFeatures/Message Dispatching Features/async-sends.md) which adds a massive performance boost; but means that the send() method will return immediately whether the message has been sent or not which could lead to message loss.

useBeanNameAsClientIdPrefix

_boolean_

useCompression

_boolean_

Enables the use of compression of the message bodies

useRetroactiveConsumer

_boolean_

Sets whether or not retroactive consumers are enabled. Retroactive consumers allow non-durable topic subscribers to receive old messages that were published before the non-durable subscriber started.

userName

_java.lang.String_

Sets the JMS userName used by connections created by this factory

warnAboutUnstartedConnectionTimeout

_long_

Enables the timeout from a connection creation to when a warning is generated if the connection is not properly started via {@link Connection#start()} and a message is received by a consumer. It is a very common gotcha to forget to [start the connection](http://activemq.apache.orgCommunity/FAQ/ErrorsCommunity/FAQ/Errors/Community/FAQ/Errors/i-am-not-receiving-any-messages-what-is-wrong.md) so this option makes the default case to create a warning if the user forgets. To disable the warning just set the value to < 0 (say -1).

watchTopicAdvisories

_boolean_

### Element Index

_[<amqPersistenceAdapter>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

An implementation of {@link PersistenceAdapter} designed for use with a {@link Journal} and then check pointing asynchronously on a timeout with some other long term persistent storage.

_[<amqPersistenceAdapterFactory>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

An implementation of {@link PersistenceAdapterFactory}

_[<authenticationUser>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

A helper object used to configure simple authentiaction plugin

_[<authorizationEntry>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Represents an entry in a {@link DefaultAuthorizationMap} for assigning different operations (read, write, admin) of user roles to a specific destination or a hierarchical wildcard area of destinations.

_[<authorizationMap>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Represents a destination based configuration of policies so that individual destinations or wildcard hierarchies of destinations can be configured using different policies. Each entry in the map represents the authorization ACLs for each operation.

_[<authorizationPlugin>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

An authorization plugin where each operation on a destination is checked against an authorizationMap

_[<axionJDBCAdapter>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Axion specific Adapter. Axion does not seem to support ALTER statements or sub-selects. This means: - We cannot auto upgrade the schema was we roll out new versions of ActiveMQ - We cannot delete durable sub messages that have be acknowledged by all consumers.

_[<blobJDBCAdapter>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

This JDBCAdapter inserts and extracts BLOB data using the getBlob()/setBlob() operations. This is a little more involved since to insert a blob you have to: 1: insert empty blob. 2: select the blob 3: finally update the blob with data value. The databases/JDBC drivers that use this adapter are:

_[<broker>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

An ActiveMQ Message Broker. It consists of a number of transport connectors, network connectors and a bunch of properties which can be used to configure the broker as its lazily created.

_[<bytesJDBCAdapter>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

This JDBCAdapter inserts and extracts BLOB data using the setBytes()/getBytes() operations. The databases/JDBC drivers that use this adapter are:

_[<commandAgent>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

An agent which listens to commands on a JMS destination

_[<compositeDemandForwardingBridge>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

A demand forwarding bridge which works with multicast style transports where a single Transport could be communicating with multiple remote brokers

_[<compositeQueue>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Represents a virtual queue which forwards to a number of other destinations.

_[<compositeTopic>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Represents a virtual topic which forwards to a number of other destinations.

_[<connectionDotFilePlugin>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

A [DOT](http://www.graphviz.org/) file creator plugin which creates a DOT file showing the current connections

_[<connectionFactory>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

A [Spring](http://www.springframework.org/) enhanced connection factory which will automatically use the Spring bean name as the clientIDPrefix property so that connections created have client IDs related to your Spring.xml file for easier comprehension from [JMX](http://activemq.apache.orgFeatures/jmx.md).

_[<constantPendingMessageLimitStrategy>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

This PendingMessageLimitStrategy is configured to a constant value for all subscriptions.

_[<db2JDBCAdapter>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

_[<defaultJDBCAdapter>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Implements all the default JDBC operations that are used by the JDBCPersistenceAdapter.

sub-classing is encouraged to override the default implementation of methods to account for differences in JDBC Driver implementations.

The JDBCAdapter inserts and extracts BLOB data using the getBytes()/setBytes() operations.

The databases/JDBC drivers that use this adapter are:

_[<defaultUsageCapacity>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Identify if a limit has been reached

_[<demandForwardingBridge>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Forwards messages from the local broker to the remote broker based on demand.

_[<destinationDotFilePlugin>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

A [DOT](http://www.graphviz.org/) file creator plugin which creates a DOT file showing the current topic & queue hierarchies.

_[<destinationEntry>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

A default entry in a DestinationMap which holds a single value.

_[<fileCursor>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Pending messages

_[<fileDurableSubscriberCursor>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Pending messages for durable subscribers

_[<fileQueueCursor>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Pending

_[<filteredDestination>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Represents a destination which is filtered using some predicate such as a selector so that messages are only dispatched to the destination if they match the filter.

_[<fixedCountSubscriptionRecoveryPolicy>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

This implementation of {@link SubscriptionRecoveryPolicy} will keep a fixed count of last messages.

_[<fixedSizedSubscriptionRecoveryPolicy>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

This implementation of {@link SubscriptionRecoveryPolicy} will keep a fixed amount of memory available in RAM for message history which is evicted in time order.

_[<forwardingBridge>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Forwards all messages from the local broker to the remote broker.

_[<imageBasedJDBCAdaptor>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Provides JDBCAdapter since that uses IMAGE datatype to hold binary data. The databases/JDBC drivers that use this adapter are:

*   Sybase
*   MS SQL

_[<inboundQueueBridge>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Create an Inbound Queue Bridge

_[<inboundTopicBridge>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Create an Inbound Topic Bridge

_[<individualDeadLetterStrategy>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

A {@link DeadLetterStrategy} where each destination has its own individual DLQ using the subject naming hierarchy.

_[<informixJDBCAdapter>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

JDBC Adapter for Informix database. Because Informix database restricts length of composite primary keys, length of _container name_ field and _subscription id_ field must be reduced to 150 characters. Therefore be sure not to use longer names for container name and subscription id than 150 characters.

_[<jaasAuthenticationPlugin>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Provides a JAAS based authentication plugin

_[<jaasCertificateAuthenticationPlugin>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Provides a JAAS based SSL certificate authentication plugin

_[<jdbcPersistenceAdapter>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

A {@link PersistenceAdapter} implementation using JDBC for persistence storage. This persistence adapter will correctly remember prepared XA transactions, but it will not keep track of local transaction commits so that operations performed against the Message store are done as a single uow.

_[<jmsQueueConnector>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

A Bridge to other JMS Queue providers

_[<jmsTopicConnector>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

A Bridge to other JMS Topic providers

_[<journalPersistenceAdapter>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

An implementation of {@link PersistenceAdapter} designed for use with a {@link Journal} and then check pointing asynchronously on a timeout with some other long term persistent storage.

_[<journaledJDBC>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Creates a default persistence model using the Journal and JDBC

_[<kahaPersistenceAdapter>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

_[<lDAPAuthorizationMap>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

An {@link AuthorizationMap} which uses LDAP

_[<lastImageSubscriptionRecoveryPolicy>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

This implementation of {@link SubscriptionRecoveryPolicy} will only keep the last message.

_[<ldapNetworkConnector>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

class to create dynamic network connectors listed in an directory server using the LDAP v3 protocol as defined in RFC 2251, the entries listed in the directory server must implement the ipHost and ipService objectClasses as defined in RFC 2307.

_[<loggingBrokerPlugin>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

A simple Broker interceptor which allows you to enable/disable logging.

_[<managementContext>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

A Flow provides different dispatch policies within the NMR

_[<masterConnector>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Connects a Slave Broker to a Master when using [Master Slave](http://activemq.apache.orgFeatures/ClusteringFeatures/Clustering/Features/Clustering/masterslave.md) for High Availability of messages.

_[<memoryPersistenceAdapter>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

_[<memoryUsage>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Used to keep track of how much of something is being used so that a productive working set usage can be controlled. Main use case is manage memory usage.

_[<messageGroupHashBucketFactory>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

A factory to create instances of {@link SimpleMessageGroupMap} when implementing the [Message Groups](http://activemq.apache.org/Features/Consumer Features/message-groups.md) functionality.

_[<mirroredQueue>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Creates [Mirrored Queue](http://activemq.org/siteFeatures/Destination FeaturesFeatures/Destination Features/Features/Destination Features/mirrored-queues.md) using a prefix and postfix to define the topic name on which to mirror the queue to.

_[<multicastNetworkConnector>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

A network connector which uses some kind of multicast-like transport that communicates with potentially many remote brokers over a single logical {@link Transport} instance such as when using multicast. This implementation does not depend on multicast at all; any other group based transport could be used.

_[<multicastTraceBrokerPlugin>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

A Broker interceptor which allows you to trace all operations to a Multicast socket.

_[<networkConnector>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

A network connector which uses a discovery agent to detect the remote brokers available and setup a connection to each available remote broker

_[<noSubscriptionRecoveryPolicy>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

This SubscriptionRecoveryPolicy disable recovery of messages.

_[<oldestMessageEvictionStrategy>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

An eviction strategy which evicts the oldest message first (which is the default).

_[<oldestMessageWithLowestPriorityEvictionStrategy>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

An eviction strategy which evicts the oldest message with the lowest priority first.

_[<oracleJDBCAdapter>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Implements all the default JDBC operations that are used by the JDBCPersistenceAdapter.

Subclassing is encouraged to override the default implementation of methods to account for differences in JDBC Driver implementations.

The JDBCAdapter inserts and extracts BLOB data using the getBytes()/setBytes() operations.

The databases/JDBC drivers that use this adapter are:

_[<outboundQueueBridge>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Create an Outbound Queue Bridge

_[<outboundTopicBridge>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Create an Outbound Topic Bridge

_[<policyEntry>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Represents an entry in a {@link PolicyMap} for assigning policies to a specific destination or a hierarchical wildcard area of destinations.

_[<policyMap>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Represents a destination based configuration of policies so that individual destinations or wildcard hierarchies of destinations can be configured using different policies.

_[<prefetchPolicy>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Defines the prefetch message policies for different types of consumers

_[<prefetchRatePendingMessageLimitStrategy>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

This PendingMessageLimitStrategy sets the maximum pending message limit value to be a multiplier of the prefetch limit of the subscription.

_[<proxyConnector>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

_[<queryBasedSubscriptionRecoveryPolicy>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

This implementation of {@link SubscriptionRecoveryPolicy} will perform a user specific query mechanism to load any messages they may have missed.

_[<queue>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

An ActiveMQ Queue

_[<redeliveryPolicy>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Configuration options used to control how messages are re-delivered when they are rolled back.

_[<roundRobinDispatchPolicy>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Simple dispatch policy that sends a message to every subscription that matches the message.

_[<sharedDeadLetterStrategy>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

A default implementation of {@link DeadLetterStrategy} which uses a constant destination.

_[<simpleAuthenticationPlugin>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Provides a simple authentication plugin

_[<simpleAuthorizationMap>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

An AuthorizationMap which is configured with individual DestinationMaps for each operation.

_[<simpleDispatchPolicy>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Simple dispatch policy that sends a message to every subscription that matches the message.

_[<simpleJmsMessageConvertor>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Converts Message from one JMS to another

_[<simpleMessageGroupMapFactory>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

A factory to create instances of {@link SimpleMessageGroupMap} when implementing the [Message Groups](http://activemq.apache.org/Features/Consumer Features/message-groups.md) functionality.

_[<statements>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

_[<storeCursor>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Pending messages

_[<storeDurableSubscriberCursor>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Pending messages for a durable

_[<storeUsage>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Used to keep track of how much of something is being used so that a productive working set usage can be controlled. Main use case is manage memory usage.

_[<streamJDBCAdapter>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

This JDBCAdapter inserts and extracts BLOB data using the setBinaryStream()/getBinaryStream() operations. The databases/JDBC drivers that use this adapter are:

*   Axion

_[<strictOrderDispatchPolicy>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Dispatch policy that causes every subscription to see messages in the same order.

_[<systemUsage>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Holder for Usage instances for memory, store and temp files Main use case is manage memory usage.

_[<tempDestinationAuthorizationEntry>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Represents an entry in a {@link DefaultAuthorizationMap} for assigning different operations (read, write, admin) of user roles to a temporary destination

_[<tempUsage>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Used to keep track of how much of something is being used so that a productive working set usage can be controlled. Main use case is manage memory usage.

_[<timeStampingBrokerPlugin>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

A Broker interceptor which updates a JMS Client's timestamp on the message with a broker timestamp. Useful when the clocks on client machines are known to not be correct and you can only trust the time set on the broker machines. Enabling this plugin will break JMS compliance since the timestamp that the producer sees on the messages after as send() will be different from the timestamp the consumer will observe when he receives the message. This plugin is not enabled in the default ActiveMQ configuration.

_[<timedSubscriptionRecoveryPolicy>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

This implementation of {@link SubscriptionRecoveryPolicy} will keep a timed buffer of messages around in memory and use that to recover new subscriptions.

_[<topic>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

An ActiveMQ Topic

_[<transportConnector>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

_[<udpTraceBrokerPlugin>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

A Broker interceptor which allows you to trace all operations to a UDP socket.

_[<usageCapacity>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Identify if a limit has been reached

_[<virtualDestinationInterceptor>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Implements [Virtual Topics](http://activemq.apache.orgFeatures/Destination Features/Features/Destination Features/virtual-destinations.md).

_[<virtualTopic>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Creates [Virtual Topics](http://activemq.org/siteFeatures/Destination Features/Features/Destination Features/virtual-destinations.md) using a prefix and postfix. The virtual destination creates a wildcard that is then used to look up all active queue subscriptions which match.

_[<vmCursor>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Pending messages held

_[<vmDurableCursor>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Pending

_[<vmQueueCursor>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

Pending messages

_[<xaConnectionFactory>](../../Using ActiveMQ/Xml Reference/xbean-xml-reference-50.md)_

A [Spring](http://www.springframework.org/) enhanced XA connection factory which will automatically use the Spring bean name as the clientIDPrefix property so that connections created have client IDs related to your Spring.xml file for easier comprehension from [JMX](http://activemq.apache.orgFeatures/jmx.md).

