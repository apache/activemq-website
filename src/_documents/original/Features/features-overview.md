Apache ActiveMQ ™ -- Features Overview 

[Features](features.md) > [Features Overview](features-overview.md)


*   Supports a variety of [Cross Language Clients and Protocols](Connectivity/cross-language-clients.md) from Java, C, C++, C#, Ruby, Perl, Python, PHP
    *   [OpenWire](Connectivity/Protocols/openwire.md) for high performance clients in Java, C, C++, C#
    *   [Stomp](Connectivity/Protocols/stomp.md) support so that clients can be written easily in C, Ruby, Perl, Python, PHP, ActionScript/Flash, Smalltalk to talk to ActiveMQ as well as any other popular Message Broker
    *   [AMQP](Connectivity/Protocols/amqp.md) v1.0 support
    *   [MQTT](Connectivity/ProtocolsConnectivity/Protocols/Connectivity/Protocols/mqtt.md) v3.1 support allowing for connections in an IoT environment.
*   full support for the [Enterprise Integration Patterns](Features/enterprise-integration-patterns.md) both in the JMS client and the Message Broker
*   Supports many [advanced features](features.md) such as [Message Groups](Features/Consumer FeaturesFeatures/Consumer Features/Features/Consumer Features/message-groups.md), [Virtual Destinations](Features/Destination Features/virtual-destinations.md), [Wildcards](Features/Destination Features/wildcards.md) and [Composite Destinations](Features/Destination Features/composite-destinations.md)
*   Fully supports JMS 1.1 and J2EE 1.4 with support for transient, persistent, transactional and XA messaging
*   [Spring Support](Connectivity/Containers/spring-Community/support.md) so that ActiveMQ can be easily embedded into Spring applications and configured using Spring's XML configuration mechanism
*   Tested inside popular J2EE servers such as [TomEE](http://tomee.apache.org/), [Geronimo](http://geronimo.apache.org/), JBoss, GlassFish and WebLogic
    *   Includes [JCA 1.5 resource adaptors](Connectivity/ContainersConnectivity/Containers/Connectivity/Containers/resource-adapter.md) for inbound & outbound messaging so that ActiveMQ should auto-deploy in any J2EE 1.4 compliant server
*   Supports pluggable [transport protocols](FeaturesFeatures/Features/uri-Connectivity/protocols.md) such as [in-VM](Community/FAQ/Using Apache ActiveMQCommunity/FAQ/Using Apache ActiveMQ/Community/FAQ/Using Apache ActiveMQ/how-do-i-use-activemq-using-in-jvm-messaging.md), TCP, SSL, NIO, UDP, multicast, JGroups and JXTA transports
*   Supports very fast [persistence](Features/persistence.md) using JDBC along with a high performance journal
*   Designed for high performance clustering, client-server, peer based communication
*   [REST](Connectivity/ProtocolsConnectivity/Protocols/Connectivity/Protocols/rest.md) API to provide technology agnostic and language neutral web based API to messaging
*   [Ajax](Connectivity/ajax.md) to support web streaming support to web browsers using pure DHTML, allowing web browsers to be part of the messaging fabric
*   [CXF and Axis Support](axis-and-cxf-CommunityCommunity/Community/support.md) so that ActiveMQ can be easily dropped into either of these web service stacks to provide reliable messaging
*   Can be used as an in memory JMS provider, ideal for [unit testing JMS](Community/FAQ/JMSCommunity/FAQ/JMS/Community/FAQ/JMS/how-to-unit-test-jms-code.md)

