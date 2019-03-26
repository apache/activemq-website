---
layout: default_md
title: How do I enable debug logging 
title-class: page-title-activemq5
type: activemq5
---

 [FAQ](faq) > [Using Apache ActiveMQ](using-apache-activemq) > [How do I enable debug logging](how-do-i-enable-debug-logging)


How do I enable debug logging?
------------------------------

For background see [How do I change the logging](how-do-i-change-the-logging).

You can enable debug logging in ActiveMQ by adding the following line to the `conf/log4j.properties` file
```
log4j.logger.org.apache.activemq=DEBUG
```
