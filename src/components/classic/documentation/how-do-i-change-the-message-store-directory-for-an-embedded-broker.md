---
layout: default_md
title: How do I change the message store directory for an embedded broker 
title-class: page-title-classic
type: classic
---

 [FAQ](faq) > [Persistence Questions](persistence-questions) > [How do I change the message store directory for an embedded broker](how-do-i-change-the-message-store-directory-for-an-embedded-broker)


Embedded brokers create an ActiveMQ Classic directory under the current working directory to store it's persistent message data. To change the location of the directory used by the message store, set the **activemq.store.dir** system property to the directory you want it to use.

Example:
```
java -Dactivemq.store.dir=/temp your.Application
```