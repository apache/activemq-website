---
layout: default_md
title: ActiveMQ 2.0 Release 
title-class: page-title-activemq5
type: activemq5
redirect_from:
- /activemq-20-release
---

[Overview](overview) > [Download](download) > [ActiveMQ 2.0 Release](activemq-20-release)

New and Noteworthy
------------------

This is a major release including lots of new functionality and performance improvements:

This release includes

*   advisory messages so you can listen to the state of the message fabric
*   optimised wire format for higher throughput
*   improved persistence engine and closer integration with Apache Derby as the default implementation
*   chunking of large messages on transports (transport independent but particularly useful for UDP and multicast or for multiplexing over TCP)
*   new message compression support
*   full dead letter queue support
*   numerous improvements for distributed and remote destinations
*   various performance improvements
*   improved Message Driven POJO support via the JCA Container
*   improvements in the JCA Resource Adapter for easier integration into Geronimo, JBoss and WebLogic

This new 2.0 wire format is incompatible with previous releases, so when upgrading please be sure to upgrade across your system. The wire format should not change now for some time, certainly not until another major release.