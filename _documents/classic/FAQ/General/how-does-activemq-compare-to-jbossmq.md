Apache ActiveMQ ™ -- How does ActiveMQ compare to JBossMQ 

 [FAQ](/FAQ/index.md) > [General](../../FAQ/general.md) > [How does ActiveMQ compare to JBossMQ](../../FAQ/General/how-does-activemq-compare-to-jbossmq.md)


There are some similarities between the two; they both support JMS 1.1 and run inside [JBoss 4.x](../../Connectivity/Containers/jboss-integration.md).

However ActiveMQ does offer some specific differences and advantages (at least from our perspective)

*   ActiveMQ works great in any JVM not just inside the JBoss application server
*   ActiveMQ comes complete with a large number of [Cross Language Clients](../../Connectivity/cross-language-clients.md)
*   ActiveMQ supports many different [Protocols](../../Connectivity/protocols.md) such as [Ajax](../../Connectivity/ajax.md), [REST](../../Connectivity/Protocols/rest.md), [Stomp](../../Connectivity/Protocols/stomp.md), [OpenWire](../../Connectivity/Protocols/openwire.md), [XMPP](../../Connectivity/Protocols/xmpp.md)
*   ActiveMQ supports a large number of advanced features like [Message Groups](../../Features/Consumer Features/message-groups.md), [Exclusive Consumer](../../Features/Consumer Features/exclusive-consumer.md), [Composite Destinations](../../Features/Destination Features/composite-destinations.md), [Advisory Message](../../Features/Message Features/advisory-message.md) support
*   ActiveMQ supports reliable connections with [configurable](../../Using ActiveMQ/configuring-transports.md) automatic reconnection
*   ActiveMQ has great [Spring Support](Connectivity/Containers/spring-Community/support.md)
*   ActiveMQ supports distributed destinations across networks
*   ActiveMQ is very fast; often 10x faster than JBossMQ.

Performance guides
------------------

If you're not convinced by performance reports then please do try running performance tests yourself. You might wanna check out our overview of [Performance](../../Features/performance.md) or try using out the [ActiveMQ Performance Module Users Manual](../../Features/Performance/activemq-performance-module-users-manual.md)

The Commercial Providers on the [Support](CommunityCommunity/Community/support.md) page may also be able to help diagnose performance issues, suggest changes, etc...

More on JBoss Integration
-------------------------

[Integrating Apache ActiveMQ with JBoss](../../Connectivity/Containers/integrating-apache-activemq-with-jboss.md)

