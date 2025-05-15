---
layout: default_md
title: ActiveMQ Classic Jakarta Messaging 3.1 &amp; JMS 2.0 Support
title-class: page-title-classic
type: classic
---

**ActiveMQ Classic 5.x & 6.x support for Jakarta Messaging 3.1 & JMS 2.0 is in progress**. This work commenced in late 2019 via [AMQ-7309](https://issues.apache.org/jira/browse/AMQ-7309).

If you need full support for Jakarta Messaging 3.1 or JMS 2.0 we recommend [ActiveMQ Artemis]({{site.baseurl}}/components/artemis).

### Transition Approach

Initially, ActiveMQ Classic clients will not support all JMS 2.0 functionality and will throw an `UnsupportedOperationException` (`RuntimeException`) for unsupported methods and features, such as those for async send with a `CompletionListener`, sending messages with a delivery delay, and using shared topic consumers.

As features are implemented in subsequent releases, these exceptions will be replaced with fully functional methods, examples and unit tests. See later/below for more details on implementation progress.

### Jakarta Messaging

Support for JMS 2.0 also enables building upon this for transition to Jakarta Messaging 3.1 and its new `jakarta.jms` API namespace rather than the historical `javax.jms` namespace.

 * The standard for Java Enterprise features going forward
 * Required for Spring 6
 * Required for Jakarta EE 9 + 10.
 * JMS API Java package name-change only
 * ActiveMQ Classic package names do not change

This allows for a dependency-update-only approach to the transition without having to re-code going forward!

Client jar|API Package|Version|Notes
---|---|---|---
activemq-client | `jakarta.jms` | 6.0.x | Partial Jakarta Messaging 3.1 support. Works with embedded broker and VM transport.
activemq-client | `javax.jms` | 5.18.x | Partial JMS 2.0 support. Works with embedded broker and VM transport.
activemq-client-jakarta | `jakarta.jms` | 5.18.1+ | Transitional module for partial, *client-only* Jakarta Messaging 3.1 support. Can't be used in the same JVM as activemq-client or broker which use javax.jms API. **Note this means no embedded broker / VM transport support, only remote brokers.**

There is no functional change, this is purely a Java package naming change:
```java
import javax.jms.ConnectionFactory
import javax.jms.Message
import javax.jms...
```
Becomes:
```java
import jakarta.jms.ConnectionFactory
import jakarta.jms.Message
import jakarta.jms...
```
To use the Jakarta transition client available with ActiveMQ Classic 5.18.x in Maven:
```xml
<dependency>
  <groupId>org.apache.activemq</groupId>
  <artifactId>activemq-client-jakarta</artifactId>
  <version>${activemq.version}</version>
</dependency>
```
Note: With ActiveMQ Classic 6.x the `activemq-client-jakarta` module is removed as it is no longer needed.

### Spring bean usage

Spring bean definitions do not change for Jakarta support.
```xml
<bean class="org.apache.activemq.ActiveMQConnectionFactory">
```
### Implementation Progress

The implementation approach is subject to change. Be sure to verify features in release notes.

User feedback is welcome! Please comment on the JIRAs with questions and comments.

JIRA|Status|Target Version|Completed Version|Feature|Notes
---|:---:|---|---|---|---
[AMQ-7309](https://issues.apache.org/jira/browse/AMQ-7309) | ✅ | 5.16.0 | 5.18.0 | JMS 2.0 API dependency | ActiveMQ Classic will ship with a JMS 2.0 dependency jar
[AMQ-8322](https://issues.apache.org/jira/browse/AMQ-8322) | ✅ | 5.17.0 | 5.18.0 | `JMSContext`, `JMSConsumer`, `JMSProducer`, &amp; `JMSRuntimeException` | Simplified JMS API support
[AMQ-8321](https://issues.apache.org/jira/browse/AMQ-8321) | ✅ | 5.18.0 | 5.18.0 | GetBody/isBodyAssignable | Support for checking body type using a `Class<?>`
[AMQ-8325](https://issues.apache.org/jira/browse/AMQ-8325) | ✅ | 5.18.3, 6.0.0 | 5.18.3, 6.0.0 | XA Connection methods | Updated methods when using XA transactions
[AMQ-8494](https://issues.apache.org/jira/browse/AMQ-8494) | ✅ | 5.17.1 | 5.18.0 | Implement `CLIENT_ACKNOWLEDGEMENT` mode | Client ack requires special handling w/ the simplified JMSContext API
[AMQ-8464](https://issues.apache.org/jira/browse/AMQ-8464) | ❌ | 5.17.1 | | JMSConsumer | `.receiveBody(Class<T>)` methods
[AMQ-8320](https://issues.apache.org/jira/browse/AMQ-8320) | ❌ | 6.2.0 | | Delivery Delay | Support for Message DeliveryDelay feature
[AMQ-8324](https://issues.apache.org/jira/browse/AMQ-8324) | ❌ | 5.17.0 | | JMSProducer features | `CompletionListener` async send support
[AMQ-8323](https://issues.apache.org/jira/browse/AMQ-8323) | ❌ | | | Shared Topic Consumer | Multi-consumer (queue-like) consuming from topic subscriptions
[AMQ-9451](https://issues.apache.org/jira/browse/AMQ-9451) | ❌ | 6.2.0 | | Pooled `ConnectionFactory` | Support for JMSContext in activemq-jms-pool 

### Feature notes

JMS Object|Feature|Notes
---|---|---
`JMSProducer` | disableMessageID | ActiveMQ Classic does not support the optional feature of disabling JMS message ID


