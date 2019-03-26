Apache ActiveMQ ™ -- How do I send messages to different Destinations from a single MessageProducer 

[Community](community.md) > [FAQ](CommunityCommunity/Community/faq.md) > [JMS](Community/FAQCommunity/FAQ/Community/FAQ/jms.md) > [How do I send messages to different Destinations from a single MessageProducer](Community/FAQ/JMS/how-do-i-send-messages-to-different-destinations-from-a-single-messageproducer.md)


How do I send messages to different Destinations from a single MessageProducer?
-------------------------------------------------------------------------------

Create the MessageProducer using a null destination; then specify the destination each time you send...

MessageProducer producer = session.createProducer(null);
...
producer.send(someDestination, message);
...
producer.send(anotherDestination, message);

