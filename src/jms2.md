---
layout: default_md
title: JMS v2.0
title-class: page-title-activemq5
type: activemq5
---

[Connectivity](connectivity) > [Protocols](protocols) > [JMS 2.0](jms2)

ActiveMQ 5.x support for JMS v2.0 is in progress.

Adding support for JMS v2.0 creates compatability challenges both for existing JMS v1.1 users and existing frameworks that use JMS v2.0 API via the JMS v1.1 compatability capabilities. 

### Transition Approach

Initially, ActiveMQ Clients will throw an UnsupportedOperationException (RuntimeException) for JMS v2.0 methods and features. This ensures that existing JMS v2.0 frameworks are notified of the coming JMS v2.0 support for ActiveMQ and have time to accomodate the changes accordingly.

As features are implemented in subsequent releases, these exceptions will be replaced with fully functional methods, examples and unit tests.

### ActiveMQ JMS v2.0 Implementation Progress 

The implementation approach is subject to change. Be sure to verify features in Release notes. 

User feedback is welcome! Please comment on the JIRAs with questions and comments.

JIRA|Status|Target Version|Completed Version|Feature|Notes
---|---|---
[AMQ-7309](https://issues.apache.org/jira/browse/AMQ-7309) | merged | 5.18.0 | | JMS v2.0 API dependency | ActiveMQ will ship with a JMS v2.0 dependency jar
[AMQ-8322](https://issues.apache.org/jira/browse/AMQ-8322) | review [PR-729](https://github.com/apache/activemq/pull/729) | 5.18.0 | | JMSContext | Simplified JMS Context object support
[AMQ-8322](https://issues.apache.org/jira/browse/AMQ-8322) | review [PR-729](https://github.com/apache/activemq/pull/729) | 5.18.0 | | JMSRuntimeException | Convert JMSExceptions to be JMSRuntimeExceptions
[AMQ-8322](https://issues.apache.org/jira/browse/AMQ-8322) | review [PR-729](https://github.com/apache/activemq/pull/729) | 5.18.0 | | JMSConsumer | Consume messages
[AMQ-8322](https://issues.apache.org/jira/browse/AMQ-8322) | review [PR-729](https://github.com/apache/activemq/pull/729) | 5.18.0 | | JMSProducer | Produce messages
[AMQ-8320](https://issues.apache.org/jira/browse/AMQ-8320) | | 5.18.0 | | Delivery Delay | Support for Message DeliveryDelay feature
[AMQ-8321](https://issues.apache.org/jira/browse/AMQ-8321) | | 5.18.0 | | GetBody/isBodyAssignable | Support for checking body type using a Class<?>
[AMQ-8324](https://issues.apache.org/jira/browse/AMQ-8324) | | 5.18.0 | | JMSProducer features | Completion Listener and Delivery Delay support
[AMQ-8325](https://issues.apache.org/jira/browse/AMQ-8325) | | TBD | | XA Connection methods | Updated methods when using XA Transactions
[AMQ-8323](https://issues.apache.org/jira/browse/AMQ-8323) | | TBD | | Shared Topic Consumer | Multi-consumer (queue-like) consuming from topic subscriptions

### Feature notes

JMS Object|Feature|Notes
---|---|---
JMSProducer | disableMessageID | ActiveMQ does not support the optional feature of disabling MessageID

