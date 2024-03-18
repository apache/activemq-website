---
layout: default_md
title: How does ActiveMQ Classic compare to JBossMQ 
title-class: page-title-classic
type: classic
---

 [FAQ](faq) > [General](general) > [How does ActiveMQ Classic compare to JBossMQ](how-does-activemq-classic-compare-to-jbossmq)


There are some similarities between the two; they both support JMS 1.1 and run inside [JBoss 4.x](jboss-integration).

However ActiveMQ Classic does offer some specific differences and advantages (at least from our perspective)

*   ActiveMQ Classic works great in any JVM not just inside the JBoss application server
*   ActiveMQ Classic comes complete with a large number of [Cross Language Clients](cross-language-clients)
*   ActiveMQ Classic supports many different [Protocols](protocols) such as [Ajax](ajax), [REST](rest), [Stomp](stomp), [OpenWire](openwire), [XMPP](xmpp.md)
*   ActiveMQ Classic supports a large number of advanced features like [Message Groups](message-groups), [Exclusive Consumer](exclusive-consumer), [Composite Destinations](composite-destinations), [Advisory Message](advisory-message) support
*   ActiveMQ Classic supports reliable connections with [configurable](configuring-transports) automatic reconnection
*   ActiveMQ Classic has great [Spring Support](spring-Community/support)
*   ActiveMQ Classic supports distributed destinations across networks
*   ActiveMQ Classic is very fast; often 10x faster than JBossMQ.

Performance guides
------------------

If you're not convinced by performance reports then please do try running performance tests yourself. You might wanna check out our overview of [Performance](performance) or try using out the [ActiveMQ Classic Performance Module Users Manual](activemq-classic-performance-module-users-manual)

[Commercial providers](support#commercial-support) may also be able to help diagnose performance issues, suggest changes, etc...

More on JBoss Integration
-------------------------

[Integrating Apache ActiveMQ Classic with JBoss](integrating-apache-activemq-classic-with-jboss)

