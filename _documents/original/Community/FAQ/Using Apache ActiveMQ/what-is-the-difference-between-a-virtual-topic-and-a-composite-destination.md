Apache ActiveMQ ™ -- What is the difference between a Virtual Topic and a Composite Destination 

[Community](community.md) > [FAQ](CommunityCommunity/Community/faq.md) > [Using Apache ActiveMQ](Community/FAQCommunity/FAQ/Community/FAQ/using-apache-activemq.md) > [What is the difference between a Virtual Topic and a Composite Destination](Community/FAQ/Using Apache ActiveMQ/what-is-the-difference-between-a-virtual-topic-and-a-composite-destination.md)


What is the difference between a Virtual Topic and a Composite Destination
--------------------------------------------------------------------------

Both kinds of [Virtual Destinations](Features/Destination Features/virtual-destinations.md) offer similar capabilities, namely that the producer sees a single Destination to send to and the consumer sees a different Destination to consume from and there can be a many to many map of producer Destination to many different consumer destinations (as well as a mix of Topics and Queues.

The main difference between a Virtual Topic and a Composite Desetination is that with a Composite Destination the list of consumer destinations is static and hard wired. Whereas with a Virtual Topic at run time a new consumer or queue can be created dynamically and addded to the subscription without having to reconfigure the broker.

e.g. for a virtual topic, **VirtualTopic.Orders** at run time a new consumer can be created on the non-existent queue **Consumer.FOO.VirtualTopic.Orders** (where FOO is the unique name of the consumer) and the queue will be created which is also automatically wired up to the virtual topic as a consumer queue.

### See

*   [How does a Queue compare to a Topic](Community/FAQ/JMSCommunity/FAQ/JMS/Community/FAQ/JMS/how-does-a-queue-compare-to-a-topic.md)

