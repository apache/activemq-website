Apache ActiveMQ ™ -- How do I turn off creating an embedded ActiveMQ broker when using the VM transport 

[Community](community.md) > [FAQ](CommunityCommunity/Community/faq.md) > [Using Apache ActiveMQ](Community/FAQCommunity/FAQ/Community/FAQ/using-apache-activemq.md) > [How do I turn off creating an embedded ActiveMQ broker when using the VM transport](Community/FAQ/Using Apache ActiveMQ/how-do-i-turn-off-creating-an-embedded-activemq-broker-when-using-the-vm-transport.md)


You can turn off auto creation by setting the create property on the VM Transport to false:

ActiveMQConnectionFactory cf = new ActiveMQConnectionFactory("vm://localhost?create=false");

