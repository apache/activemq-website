Apache ActiveMQ ™ -- How does ConnectionFactory relate to the Broker 

 [FAQ](/FAQ/index.md) > [JMS](../../FAQ/jms.md) > [How does ConnectionFactory relate to the Broker](../../FAQ/JMS/how-does-connectionfactory-relate-to-the-broker.md)


How does ConnectionFactory relate to the Broker?
------------------------------------------------

The ConnectionFactory is a JMS specification client side interface for creating connections to a JMS broker. The Broker is a service on the network or [embedded in the same JVM](../../FAQ/Using Apache ActiveMQ/how-do-i-embed-a-broker-inside-a-connection.md) which provides the message provider. So think of the ConnectionFactory as the client API for sending and receiving messages and the broker is a server side implementation.

### See Also

*   [How do I create new destinations](../../FAQ/Using Apache ActiveMQ/how-do-i-create-new-destinations.md)
*   [How do I embed a Broker inside a Connection](../../FAQ/Using Apache ActiveMQ/how-do-i-embed-a-broker-inside-a-connection.md)
*   [What are administered objects](../../FAQ/JMS/what-are-administered-objects.md)

