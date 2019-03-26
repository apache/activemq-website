Apache ActiveMQ ™ -- How do I use ActiveMQ using in JVM messaging 

[Community](community.md) > [FAQ](CommunityCommunity/Community/faq.md) > [Using Apache ActiveMQ](Community/FAQCommunity/FAQ/Community/FAQ/using-apache-activemq.md) > [How do I use ActiveMQ using in JVM messaging](Community/FAQ/Using Apache ActiveMQCommunity/FAQ/Using Apache ActiveMQ/Community/FAQ/Using Apache ActiveMQ/how-do-i-use-activemq-using-in-jvm-messaging.md)


### For ActiveMQ 3.x/4.x

To use pure in-memory messaging you just need to set the broker URL to be

vm://localhost

Actually you can use any text after _vm://_ so that you can segment multiple logical JMS brokers within the same JVM and classloader, using the name to distinguish between them.

There is an example of how to do this along with a description of the available protocols in the [Protocols overview](FeaturesFeatures/Features/uri-Connectivity/protocols.md).

Also see: [how to optimise the VM transport](Community/FAQ/Using Apache ActiveMQCommunity/FAQ/Using Apache ActiveMQ/Community/FAQ/Using Apache ActiveMQ/how-should-i-use-the-vm-transport.md)

