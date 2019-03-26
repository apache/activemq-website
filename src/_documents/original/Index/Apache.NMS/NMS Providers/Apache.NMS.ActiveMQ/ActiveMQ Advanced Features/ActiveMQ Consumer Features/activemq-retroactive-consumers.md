Apache ActiveMQ ™ -- ActiveMQ Retroactive Consumers 

[Index](index.html) > [Apache.NMS](Index/apacheIndex/Overview/nms.md) > [NMS Providers](Index/Apache.NMS/nms-providers.md) > [Apache.NMS.ActiveMQ](Index/Apache.NMS/NMS Providers/apachenmsactivemq.md) > [ActiveMQ Advanced Features](activemq-advanced-features.md) > [ActiveMQ Consumer Features](Index/Apache.NMS/NMS Providers/Apache.NMS.ActiveMQ/ActiveMQ Advanced Features/activemq-Features/consumer-features.md) > [ActiveMQ Retroactive Consumers](Index/Apache.NMS/NMS Providers/Apache.NMS.ActiveMQ/ActiveMQ Advanced Features/ActiveMQ Consumer FeaturesIndex/Apache.NMS/NMS Providers/Apache.NMS.ActiveMQ/ActiveMQ Advanced Features/ActiveMQ Consumer Features/Index/Apache.NMS/NMS Providers/Apache.NMS.ActiveMQ/ActiveMQ Advanced Features/ActiveMQ Consumer Features/activemq-retroactive-consumers.md)

Background
----------

A retroactive consumer is just a regular NMS consumer who indicates that at the start of a subscription every attempt should be used to go back in time and send any old messages (or the last message sent on that topic) that the consumer may have missed.

See the [Subscription Recovery Policy](..Features/Consumer Features/subscription-recovery-policy.md) for more detail.

### Example

You mark a Consumer as being retroactive as follows:

var topic = session.GetTopic("TEST.Topic?consumer.retroactive=true");
var consumer = session.CreateConsumer(topic);

Limitations
-----------

Retroactive consumer will not consistently work when used across a network of brokers.

In the case of topics, when we connect broker A to broker B, broker B will send broker A all the subscriptions that it has received. Since Broker A replicates messages to each subscription, and we want to avoid receiving duplicates at broker B, we can't send broker A more than 1 subscription for the same topic. So our network bridges keep track of the subscriptions sent across and only send the first subscription to a topic. Subsequent subscriptions increment the reference count of the subscription, but the subscription is not actually sent.

This in essence is the problem. If the first subscription to a topic is not retroactive, it is sent B to A, and the B broker will not get the retroactive messages. Then subsequent subscriptions could be (retroactive), but it will not cause retroactive message to sent from broker A to broker B since the subsequent subscription will not be sent to broker A.


