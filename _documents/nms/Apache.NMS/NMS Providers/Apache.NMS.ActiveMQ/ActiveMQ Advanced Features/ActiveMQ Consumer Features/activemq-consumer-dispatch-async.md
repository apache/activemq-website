Apache ActiveMQ ™ -- ActiveMQ Consumer Dispatch Async 

[Index](index.html) > [Apache.NMS](Index/apacheIndex/Overview/nms.md) > [NMS Providers](Index/Apache.NMS/nms-providers.md) > [Apache.NMS.ActiveMQ](Index/Apache.NMS/NMS Providers/apachenmsactivemq.md) > [ActiveMQ Advanced Features](activemq-advanced-features.md) > [ActiveMQ Consumer Features](Index/Apache.NMS/NMS Providers/Apache.NMS.ActiveMQ/ActiveMQ Advanced Features/activemq-Features/consumer-features.md) > [ActiveMQ Consumer Dispatch Async](activemq-Features/Consumer FeaturesFeatures/Consumer Features/Features/Consumer Features/consumer-dispatch-async.md)

Overview
--------

In AMQ4 onwards, the choice of a broker performing synchronous or asynchronous dispatch to a consumer has become more configurable. It is now configured as a default value on the [connection URI, Connection and ConnectionFactory](Index/Apache.NMS/NMS Providers/Apache.NMS.ActiveMQ/activemq-uri-Community/FAQ/configuration.md) together with being customizable on a per consumer basis via the [Destination Options](Index/Apache.NMS/NMS Providers/Apache.NMS.ActiveMQ/activemq-uri-Community/FAQ/configuration.md) instead previously just being a transport server setting.

This makes more sense since you want to do async message delivery to slower consumers, but do sync message delivery to faster consumers (to avoid the synchronization and context switching costs of adding another seda queue). The downside to using sync message delivery is that the producer is more likely to block if there is a slow consumer that he is dispatching messages to.

The default setting is dispatchAsync=true which is the best setting for high performance. If you want to deal better with slow consumers you will want to enable this setting. If you want better thoughput and the chances of having a slow consumer are low, you may want to change this to false.

### Configuring Async Dispatch at the ConnectionFactory Level

connectionFactory.DispatchAsync = false;

### Configuring Dispatch Async at the Connection Level

Configuring the dispatchAsync setting at this level overrides the settings at the connection factory level.

connection.DispatchAsync = false;

### Configuring Dispatch Async at the Consumer Level using the Destination URI

Configuring the dispatchAsync using [Destination Options](Index/Apache.NMS/NMS Providers/Apache.NMS.ActiveMQ/activemq-uri-Community/FAQ/configuration.md) overrides the settings at the connection and connection factory level.

var queue = new ActiveMQQueue("TEST.QUEUE?consumer.dispatchAsync=false");
var consumer = session.CreateConsumer(queue);


