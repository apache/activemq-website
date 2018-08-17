Apache ActiveMQ ™ -- Async Sends 

[Features](features.md) > [Message Dispatching Features](FeaturesFeatures/Features/message-dispatching-features.md) > [Async Sends](Features/Message Dispatching Features/async-sends.md)


Background
----------

ActiveMQ supports sending messages to a broker in sync or async mode. The mode used has a huge impact in the latency of the send call. Since latency is typically a huge factor in the throughput that can achieved by producer, using async sends can increase the performance of your system dramatically.

The good news is that ActiveMQ sends message in async mode by default in several cases. It is only in cases where the JMS specification required the use of sync sending that we default to sync sending. The cases that we are forced to send in sync mode are when persistent messages are being sent outside of a transaction.

If you are not using transactions and are sending persistent messages, then each send is synch and blocks until the broker has sent back an acknowledgement to the producer that the message has been safely persisted to disk. This ack provides that guarantee that the message will not be lost but it also costs a huge latency penalty since the client is blocked.

Many high performance applications are designed to be tolerate a small amount of message loss in failure scenarios. If your application has been designed in this fashion, you can enable the use of async sends to increase throughput even when using persistent messages.

### Configuring Async Send using a Connection URI

You can use the [Connection Configuration URI](Using ActiveMQ/Configuring Transports/ActiveMQ Connection URIs/connection-configuration-uri.md) to configure async sends as follows

cf = new ActiveMQConnectionFactory("tcp://locahost:61616?jms.useAsyncSend=true");

### Configuring Async Send at the ConnectionFactory Level

You can enable this feature on the [ActiveMQConnectionFactory](http://incubator.apache.org/activemq/maven/activemq-core/apidocs/org/apache/activemq/ActiveMQConnectionFactory.html) object using the property.

((ActiveMQConnectionFactory)connectionFactory).setUseAsyncSend(true);

### Configuring Async Send at the Connection Level

Configuring the dispatchAsync setting at this level overrides the settings at the connection factory level.

You can enable this feature on the [ActiveMQConnection](http://incubator.apache.org/activemq/maven/activemq-core/apidocs/org/apache/activemq/ActiveMQConnection.html) object using the property.

((ActiveMQConnection)connection).setUseAsyncSend(true);

### Also see

*   [Connection Configuration URI](Using ActiveMQ/Configuring Transports/ActiveMQ Connection URIs/connection-configuration-uri.md)
*   [Should I use transactions](Community/FAQ/JMSCommunity/FAQ/JMS/Community/FAQ/JMS/should-i-use-transactions.md)
*   [Consumer Dispatch Async](Features/Consumer FeaturesFeatures/Consumer Features/Features/Consumer Features/consumer-dispatch-async.md)

