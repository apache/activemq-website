Apache ActiveMQ ™ -- ActiveMQ Mirrored Queues 

[Index](index.html) > [Apache.NMS](Index/apacheIndex/Overview/nms.md) > [NMS Providers](Index/Apache.NMS/nms-providers.md) > [Apache.NMS.ActiveMQ](Index/Apache.NMS/NMS Providers/apachenmsactivemq.md) > [ActiveMQ Advanced Features](activemq-advanced-features.md) > [ActiveMQ Destination Features](Index/Apache.NMS/NMS Providers/Apache.NMS.ActiveMQ/ActiveMQ Advanced Features/activemq-Features/destination-features.md) > [ActiveMQ Mirrored Queues](activemq-Features/Destination FeaturesFeatures/Destination Features/Features/Destination Features/mirrored-queues.md)

Mirrored Queues
---------------

Queues provide an excellent reliable and high performance [load balancing mechanism](..Community/FAQ/JMSCommunity/FAQ/JMS/Community/FAQ/JMS/how-does-a-queue-compare-to-a-topic.md). Each message placed on a queue can only be successfully processed by a single consumer. This is a good thing! ![(smile)](https://cwiki.apache.org/confluence/s/en_GB/5997/6f42626d00e36f53fe51440403446ca61552e2a2.1/_/images/icons/emoticons/smile.png). However sometimes you want to monitor what messages flow between the producers and consumers on a queue.

To do this you can use [Virtual Destinations](..Features/Destination Features/Features/Destination Features/virtual-destinations.md) to setup a virtual Queue which forwards the message to multiple physical queues. However enabling this for every single queue in your system can be painful.

So to make it easy to monitor queues, we have added a feature we call _Mirrored Queues_. Mirrored Queues are kinda like a zero-configuration [Wire Tap](http://activemq.apache.org/camel/wire-tap.html) on all of your queues inside your Message Broker.

### Example

For example imagine we have a number of producers sending to queue **Foo.Bar** and consumers consuming from queue **Foo.Bar** and we want to monitor or view activity.

If you enable Mirrored Queues then by default you can subscribe to the topic **VirtualTopic.Mirror.Foo.Bar** and receive all the messages that are sent to the queue **Foo.Bar**. Since its a topic as many consumers can subscribe to this topic as are required.

If you want you can use this feature with [Virtual Topics](..Features/Destination Features/Features/Destination Features/virtual-destinations.md); so that you can define a logical consumer; say called A. Then you can subscribe to the queue **Consumer.A.VirtualTopic.Mirror.Foo.Bar** to receive all the messages sent to queue **Foo.Bar** for the consumer A. You can then run multiple instances of this consumer who can then load balance among each other.

This combination of Mirrored Queues and [Virtual Destinations](..Features/Destination Features/Features/Destination Features/virtual-destinations.md) can be extremely useful for monitoring transaction flows; for example with [Business Activity Monitoring (BAM)](http://activemq.apache.org/camel/bam.html).

### How Mirrored Queues work

When enabled, mirrored queues causes every message sent to a queue to also be sent to a topic of a similar name; so that folks who are interested in watching message exchanges on a queue can consume from the mirrored queue topic.

When coupled with [Virtual Topics](..Features/Destination Features/Features/Destination Features/virtual-destinations.md) on this topic as described in the above example, you can actually end up creating new queues which are mirrors of a given queue dynamically at runtime!

### Enabling Mirrored Queues

By default Mirrored Queues is disabled; as enabling it will cause a virtual topic to be created for each queue you use.

To enable Mirrored Queues, set the **useMirroredQueues** property on [BrokerService](http://activemq.apache.org/maven/activemq-core/apidocs/org/apache/activemq/broker/BrokerService.html) or add the following inside the <broker> element in the [Xml Configuration](../xml-Community/FAQ/configuration.md):

    <destinationInterceptors>
        <mirroredQueue copyMessage = "true" postfix=".qmirror" prefix=""/>
    </destinationInterceptors>

This would make a topic named "*.qmirror" for each queue on your Broker.


