---
title: How do I turn off creating an embedded ActiveMQ Classic broker when using the VM transport
layout: classic-doc
---



You can turn off auto creation by setting the create property on the VM Transport to false:
```
ActiveMQConnectionFactory cf = new ActiveMQConnectionFactory("vm://localhost?create=false");
```