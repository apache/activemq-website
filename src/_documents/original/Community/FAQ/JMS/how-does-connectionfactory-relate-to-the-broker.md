Apache ActiveMQ ™ -- How does ConnectionFactory relate to the Broker 

[Community](community.md) > [FAQ](CommunityCommunity/Community/faq.md) > [JMS](Community/FAQCommunity/FAQ/Community/FAQ/jms.md) > [How does ConnectionFactory relate to the Broker](Community/FAQ/JMSCommunity/FAQ/JMS/Community/FAQ/JMS/how-does-connectionfactory-relate-to-the-broker.md)


How does ConnectionFactory relate to the Broker?
------------------------------------------------

The ConnectionFactory is a JMS specification client side interface for creating connections to a JMS broker. The Broker is a service on the network or [embedded in the same JVM](Community/FAQ/Using Apache ActiveMQ/how-do-i-embed-a-broker-inside-a-connection.md) which provides the message provider. So think of the ConnectionFactory as the client API for sending and receiving messages and the broker is a server side implementation.

### See Also

*   [How do I create new destinations](Community/FAQ/Using Apache ActiveMQ/how-do-i-create-new-destinations.md)
*   [How do I embed a Broker inside a Connection](Community/FAQ/Using Apache ActiveMQ/how-do-i-embed-a-broker-inside-a-connection.md)
*   [What are administered objects](Community/FAQ/JMS/what-are-administered-objects.md)

