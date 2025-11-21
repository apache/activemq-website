---
layout: project_default_md
project_name: ActiveMQ
project_info: The Tried and Trusted Open Source Message Broker
project_class: classic
project_color: pink
---

Apache ActiveMQ&reg; is a popular and powerful open source messaging and [Integration Patterns](documentation/enterprise-integration-patterns) server.

It supports many [Cross Language Clients and Protocols](documentation/cross-language-clients), comes with easy to use [Enterprise Integration Patterns](documentation/enterprise-integration-patterns) and many [advanced features](documentation/features) while [partially supporting Jakarta Messaging 3.1 & JMS 2.0](documentation/jms2) and fully supporting JMS 1.1 and J2EE 1.4+\. Apache ActiveMQ is released under the [Apache](http://www.apache.org/) [2.0 License](http://www.apache.org/licenses/LICENSE-2.0)

Grab yourself a [download](download), review our [Getting Started Guide](documentation/getting-started), surf our [FAQ](documentation/faq), or start [contributing](../../contributing).

---

#### Features

*   Supports a variety of [Cross Language Clients and Protocols](documentation/cross-language-clients) from Java, C, C++, C#, Ruby, Perl, Python, PHP
    *   [OpenWire](documentation/openwire) for high performance clients in Java, C, C++, C#
    *   [Stomp](documentation/stomp) support so that clients can be written easily in C, Ruby, Perl, Python, PHP, ActionScript/Flash, Smalltalk to talk to ActiveMQ as well as any other popular Message Broker
    *   [AMQP](documentation/amqp) v1.0 support
    *   [MQTT](documentation/mqtt) v3.1 support allowing for connections in an IoT environment.
*   full support for the [Enterprise Integration Patterns](documentation/enterprise-integration-patterns) both in the JMS client and the Message Broker
*   Supports many [advanced features](documentation/features) such as [Message Groups](documentation/message-groups), [Virtual Destinations](documentation/virtual-destinations), [Wildcards](documentation/wildcards) and [Composite Destinations](documentation/composite-destinations)
*   [Partially supports Jakarta Messaging 3.1 & JMS 2.0](documentation/jms2) and fully supports JMS 1.1 and J2EE 1.4+ with support for transient, persistent, transactional and XA messaging
*   [Spring Support](documentation/spring-support) so that ActiveMQ can be easily embedded into Spring applications and configured using Spring's XML configuration mechanism
*   Tested inside popular J2EE servers such as [TomEE](http://tomee.apache.org/), [Geronimo](http://geronimo.apache.org/), JBoss, GlassFish and WebLogic
    *   Includes [JCA 1.5 resource adaptors](documentation/resource-adapter) for inbound & outbound messaging so that ActiveMQ should auto-deploy in any J2EE 1.4 compliant server
*   Supports pluggable [transport protocols](documentation/uri-protocols) such as [in-VM](documentation/how-do-i-use-activemq-using-in-jvm-messaging), TCP, SSL, NIO, UDP, multicast, JGroups and JXTA transports
*   Supports very fast [persistence](documentation/persistence) using JDBC along with a high performance journal
*   Designed for high performance clustering, client-server, peer based communication
*   [REST](documentation/rest) API to provide technology agnostic and language neutral web based API to messaging
*   [Ajax](documentation/ajax) to support web streaming support to web browsers using pure DHTML, allowing web browsers to be part of the messaging fabric
*   [CXF and Axis Support](documentation/axis-and-cxf-support) so that ActiveMQ can be easily dropped into either of these web service stacks to provide reliable messaging
*   Can be used as an in memory JMS provider, ideal for [unit testing JMS](documentation/how-to-unit-test-jms-code)

[Find out more.](documentation/features)
