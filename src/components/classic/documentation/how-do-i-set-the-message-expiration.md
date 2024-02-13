---
layout: default_md
title: How do I set the message expiration 
title-class: page-title-classic
type: classic
---

 [FAQ](faq) > [Using Apache ActiveMQ Classic](using-apache-activemq-classic) > [How do I set the message expiration](how-do-i-set-the-message-expiration)


JMSExpiration on a message is set by the MessageProducer in JMS - either via

*   [producer.setTimeToLive()](http://java.sun.com/j2ee/1.4/docs/api/javax/jms/MessageProducer.html#setTimeToLive(long))
*   [producer.send(Destination, Message, int, int, long)](http://java.sun.com/j2ee/1.4/docs/api/javax/jms/MessageProducer.html#send(javax.jms.Destination,%20javax.jms.Message,%20int,%20int,%20long))

