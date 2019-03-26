---
layout: default_md
title: How do I turn off creating an embedded ActiveMQ broker when using the VM transport 
title-class: page-title-activemq5
type: activemq5
---

 [FAQ](faq) > [Using Apache ActiveMQ](using-apache-activemq) > [How do I turn off creating an embedded ActiveMQ broker when using the VM transport](how-do-i-turn-off-creating-an-embedded-activemq-broker-when-using-the-vm-transport)


You can turn off auto creation by setting the create property on the VM Transport to false:
```
ActiveMQConnectionFactory cf = new ActiveMQConnectionFactory("vm://localhost?create=false");
```