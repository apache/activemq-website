---
title: ActiveMQ Jakarta Messaging 3.1 & JMS 2.0 Support
layout: classic-doc
---

### Transition Approach

Initially, ActiveMQ clients will not support all JMS 2.0 functionality and will throw an `UnsupportedOperationException` (`RuntimeException`) for unsupported methods and features, such as those for async send with a `CompletionListener`, sending messages with a delivery delay, and using shared topic consumers.

As features are implemented in subsequent releases, these exceptions will be replaced with fully functional methods, examples and unit tests.

### Jakarta Messaging

Support for JMS 2.0 also enables building upon this for transition to Jakarta Messaging 3.1 and its new `jakarta.jms` API namespace rather than the historical `javax.jms` namespace.

- The standard for Java Enterprise features going forward
- Required for Spring 6
- Required for Jakarta EE 9 + 10
- JMS API Java package name-change only
- ActiveMQ package names do not change

| Client jar | API Package | Version | Notes |
|---|---|---|---|
| activemq-client | `jakarta.jms` | 6.0.x | Partial Jakarta Messaging 3.1 support. Works with embedded broker and VM transport. |
| activemq-client | `javax.jms` | 5.18.x | Partial JMS 2.0 support. Works with embedded broker and VM transport. |
| activemq-client-jakarta | `jakarta.jms` | 5.18.1+ | Transitional module for partial, *client-only* Jakarta Messaging 3.1 support. No embedded broker / VM transport support, only remote brokers. |

There is no functional change, this is purely a Java package naming change:
```java
import javax.jms.ConnectionFactory  →  import jakarta.jms.ConnectionFactory
import javax.jms.Message            →  import jakarta.jms.Message
```

To use the Jakarta transition client with ActiveMQ 5.18.x in Maven:
```xml
<dependency>
  <groupId>org.apache.activemq</groupId>
  <artifactId>activemq-client-jakarta</artifactId>
  <version>${activemq.version}</version>
</dependency>
```
Note: With ActiveMQ 6.x the `activemq-client-jakarta` module is removed as it is no longer needed.

### Spring Bean Usage

Spring bean definitions do not change for Jakarta support:
```xml
<bean class="org.apache.activemq.ActiveMQConnectionFactory">
```

### Implementation Progress

| JIRA | Status | Target Version | Completed Version | Feature |
|---|:---:|---|---|---|
| [AMQ-7309](https://issues.apache.org/jira/browse/AMQ-7309) | ✅ | 5.16.0 | 5.18.0 | JMS 2.0 API dependency |
| [AMQ-8322](https://issues.apache.org/jira/browse/AMQ-8322) | ✅ | 5.17.0 | 5.18.0 | `JMSContext`, `JMSConsumer`, `JMSProducer`, & `JMSRuntimeException` |
| [AMQ-8321](https://issues.apache.org/jira/browse/AMQ-8321) | ✅ | 5.18.0 | 5.18.0 | GetBody/isBodyAssignable |
| [AMQ-8325](https://issues.apache.org/jira/browse/AMQ-8325) | ✅ | 5.18.3, 6.0.0 | 5.18.3, 6.0.0 | XA Connection methods |
| [AMQ-8494](https://issues.apache.org/jira/browse/AMQ-8494) | ✅ | 5.17.1 | 5.18.0 | `CLIENT_ACKNOWLEDGEMENT` mode |
| [AMQ-8464](https://issues.apache.org/jira/browse/AMQ-8464) | ❌ | 6.4.0 | | JMSConsumer `.receiveBody(Class<T>)` methods |
| [AMQ-8320](https://issues.apache.org/jira/browse/AMQ-8320) | ❌ | 6.3.0 | | Delivery Delay |
| [AMQ-8324](https://issues.apache.org/jira/browse/AMQ-8324) | ❌ | 6.4.0 | | JMSProducer `CompletionListener` async send |
| [AMQ-8323](https://issues.apache.org/jira/browse/AMQ-8323) | ❌ | | | Shared Topic Consumer |
| [AMQ-9451](https://issues.apache.org/jira/browse/AMQ-9451) | ❌ | 6.5.0 | | Pooled `ConnectionFactory` |

### Feature Notes

| JMS Object | Feature | Notes |
|---|---|---|
| `JMSProducer` | disableMessageID | ActiveMQ does not support the optional and rarely used JMS Specification feature to disable JMS message ID |
