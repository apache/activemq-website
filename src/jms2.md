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

Initially, ActiveMQ clients will not support all JMS 2.0 functionality and will throw an UnsupportedOperationException (RuntimeException) for unsupported methods and features, such as those for async send with a CompletionListener, sending messages with a delivery delay, and using shared topic consumers.

As features are implemented in subsequent releases, these exceptions will be replaced with fully functional methods, examples and unit tests. See later/below for more details on implementation progress.

### Jakarta Messaging 3.1 support

The initial support for JMS 2.0 also enables building upon this for transition to Jakarta Messaging 3.1 and its new jakarta.jms API namespace rather than the historical javax.jms namespace.

 * The standard for Java Enterprise features going forward
 * Required for Spring 6
 * Required for Jakarta EE 9 + 10.
 * JMS API Java package name-change only
 * ActiveMQ package names do not change 

This allows for a dependency-update-only approach to the transition without having to re-code going forward!

Client jar|API Package|Version|Notes
---|---|---
activemq-client | javax.jms | 5.18.0 | 
activemq-client-jakarta | jakarta.jms | 5.18.0 | Transitional module for client-only Jakarta support. Can not be used in the same JVM as javax.jms activemq-client or broker.

There is no functional change, this is purely a Java package naming change:

    import javax.jms.ConnectionFactory
    import javax.jms.Message
    import javax.jms...

Becomes

    import jakarta.jms.ConnectionFactory
    import jakarta.jms.Message
    import jakarta.jms...

To use the Jakarta client in Maven:

    <dependency>
      <groupId>org.apache.activemq</groupId>
      <artifactId>activemq-client-jakarta</artifactId>
      <version>${activemq.version}</version>
    </dependency>

Note: Spring bean definitions do not change for Jakarta support:

    <bean class="org.apache.activemq.ActiveMQConnectionFactory">

### ActiveMQ JMS v2.0 Implementation Progress 

The implementation approach is subject to change. Be sure to verify features in Release notes. 

User feedback is welcome! Please comment on the JIRAs with questions and comments.

JIRA|Status|Target Version|Completed Version|Feature|Notes
---|---|---
[AMQ-7309](https://issues.apache.org/jira/browse/AMQ-7309) | merged | 5.18.0 | 5.18.0 | JMS v2.0 API dependency | ActiveMQ will ship with a JMS v2.0 dependency jar
[AMQ-8322](https://issues.apache.org/jira/browse/AMQ-8322) | merged | 5.18.0 | 5.18.0 | JMSContext | Simplified JMS Context object support
[AMQ-8322](https://issues.apache.org/jira/browse/AMQ-8322) | merged | 5.18.0 | 5.18.0 | JMSRuntimeException | Convert JMSExceptions to be JMSRuntimeExceptions
[AMQ-8322](https://issues.apache.org/jira/browse/AMQ-8322) | merged | 5.18.0 | 5.18.0 | JMSConsumer | Consume messages
[AMQ-8322](https://issues.apache.org/jira/browse/AMQ-8322) | merged | 5.18.0 | 5.18.0 | JMSProducer | Produce messages
[AMQ-8321](https://issues.apache.org/jira/browse/AMQ-8321) | merged | 5.18.0 | 5.18.0 | GetBody/isBodyAssignable | Support for checking body type using a Class<?>
[AMQ-8320](https://issues.apache.org/jira/browse/AMQ-8320) | PR [#982](https://github.com/apache/activemq/pull/982)| 5.18.1 | | Delivery Delay | Support for Message DeliveryDelay feature
[AMQ-8324](https://issues.apache.org/jira/browse/AMQ-8324) | | 5.18.1 | | JMSProducer features | Completion Listener async send support
[AMQ-8323](https://issues.apache.org/jira/browse/AMQ-8323) | | TBD | | Shared Topic Consumer | Multi-consumer (queue-like) consuming from topic subscriptions
[AMQ-8325](https://issues.apache.org/jira/browse/AMQ-8325) | | TBD | | XA Connection methods | Updated methods when using XA Transactions

### Feature notes

JMS Object|Feature|Notes
---|---|---
JMSProducer | disableMessageID | ActiveMQ does not support the optional feature of disabling MessageID

