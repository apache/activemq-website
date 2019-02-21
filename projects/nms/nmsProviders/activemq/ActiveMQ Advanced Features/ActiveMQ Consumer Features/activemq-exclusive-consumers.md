Apache ActiveMQ ™ -- ActiveMQ Exclusive Consumers 

[Index](index.html) > [Apache.NMS](Index/apacheIndex/Overview/nms.md) > [NMS Providers](Index/Apache.NMS/nms-providers.md) > [Apache.NMS.ActiveMQ](Index/Apache.NMS/NMS Providers/apachenmsactivemq.md) > [ActiveMQ Advanced Features](activemq-advanced-features.md) > [ActiveMQ Consumer Features](Index/Apache.NMS/NMS Providers/Apache.NMS.ActiveMQ/ActiveMQ Advanced Features/activemq-Features/consumer-features.md) > [ActiveMQ Exclusive Consumers](Index/Apache.NMS/NMS Providers/Apache.NMS.ActiveMQ/ActiveMQ Advanced Features/ActiveMQ Consumer Features/activemq-exclusive-consumers.md)

### Exclusive Consumer

We have a new feature in version 4.x and above called Exclusive Consumer or Exclusive Queues which avoids the end user having to _pin_ anything. The broker will pick a single MessageConsumer to get all the messages for a queue to ensure ordering. If that consumer fails, the broker will auto failover and choose another consumer.

So the effect is a heterogeneous cluster where each client has the same setup and configuration; the broker is choosing one consumer to be the _master_ and send all the messages to it in order until it dies; then you get immediate failover to another consumer.

For those who've struggled with pinning NMS consumers in clusters you'll immediately realize how useful this is to making clustered, high available distributed services.

### Example

An Exclusive Consumer is created using [ActiveMQ URI Configuration](Index/Apache.NMS/NMS Providers/Apache.NMS.ActiveMQ/activemq-uri-Community/FAQ/configuration.md) as follows:

var queue = session.GetQueue("TEST.QUEUE?consumer.exclusive=true");
var consumer = session.CreateConsumer(queue);


