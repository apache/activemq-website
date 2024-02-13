---
layout: default_md
title: How do I turn off creating an embedded ActiveMQ Classic broker when using the VM transport 
title-class: page-title-classic
type: classic
---

 [FAQ](faq) > [Using Apache ActiveMQ Classic](using-apache-activemq-classic) > [How do I turn off creating an embedded ActiveMQ Classic broker when using the VM transport](how-do-i-turn-off-creating-an-embedded-activemq-classic-broker-when-using-the-vm-transport)


You can turn off auto creation by setting the create property on the VM Transport to false:
```
ActiveMQConnectionFactory cf = new ActiveMQConnectionFactory("vm://localhost?create=false");
```