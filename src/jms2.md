---
layout: default_md
title: JMS v2.0
title-class: page-title-activemq5
type: activemq5
---

[Connectivity](connectivity) > [Protocols](protocols) > [JMS 2.0](jms2)

ActiveMQ 5.x support for JMS v2.0 is in progress.

### ActiveMQ JMS v2.0 Implementation Progress 

JIRA|Target Version|Completed Version|Feature|Notes
---|---|---
AMQ-7309 (https://issues.apache.org/jira/browse/AMQ-7309) | 5.17.0.RC1 | | JMS v2.0 API dependency | ActiveMQ will ship with a JMS v2.0 dependency jar
AMQ-8320 (https://issues.apache.org/jira/browse/AMQ-8320) | 5.17.0.RC1 | | Delivery Delay | Support for Message DeliveryDelay feature
AMQ-8321 (https://issues.apache.org/jira/browse/AMQ-8321) | 5.17.0.RC1 | | GetBody/isBodyAssignable | Support for checking body type using a Class<?>
AMQ-8322 (https://issues.apache.org/jira/browse/AMQ-8322) | TBD | | Connection.createContext | Simplified JMS Context object support
AMQ-8323 (https://issues.apache.org/jira/browse/AMQ-8323) | TBD | | Session Topic Consumer | Consume messages using a MessageConsumer object (same as Queue)
AMQ-8324 (https://issues.apache.org/jira/browse/AMQ-8324) | 5.17.0.RC1 | | MessageProducer send methods | Completion Listener and Delivery Delay support
AMQ-8325 (https://issues.apache.org/jira/browse/AMQ-8325) | TBD | | XA Connection methods | Updated methods when using XA Transactions



