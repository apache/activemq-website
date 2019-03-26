Apache ActiveMQ ™ -- How do I set the message expiration 

[Community](community.md) > [FAQ](CommunityCommunity/Community/faq.md) > [Using Apache ActiveMQ](Community/FAQCommunity/FAQ/Community/FAQ/using-apache-activemq.md) > [How do I set the message expiration](Community/FAQ/Using Apache ActiveMQCommunity/FAQ/Using Apache ActiveMQ/Community/FAQ/Using Apache ActiveMQ/how-do-i-set-the-message-expiration.md)


JMSExpiration on a message is set by the MessageProducer in JMS - either via

*   [producer.setTimeToLive()](http://java.sun.com/j2ee/1.4/docs/api/javax/jms/MessageProducer.html#setTimeToLive(long))
*   [producer.send(Destination, Message, int, int, long)](http://java.sun.com/j2ee/1.4/docs/api/javax/jms/MessageProducer.html#send(javax.jms.Destination,%20javax.jms.Message,%20int,%20int,%20long))

