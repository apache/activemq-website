---
layout: default_md
title: ActiveMQ 2.0 Release 
title-class: page-title-activemq5
type: activemq5
redirect_from:
- /activemq-20-release
---

[Overview](overview) > [Download](download) > [ActiveMQ 3.2.1 Release](activemq-20-release)

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

Download Here
-------------

Download|Description
---|---
[activemq-release-2.0.zip](http://dist.codehaus.org/activemq/distributions/activemq-release-2.0.zip)|Binary Distribution in zip package
[activemq-release-2.0-src.zip](http://dist.codehaus.org/activemq/distributions/activemq-release-2.0-src.zip)|Source Distribution in zip package
[activemq-release-2.0.tar.gz](http://dist.codehaus.org/activemq/distributions/activemq-release-2.0.tar.gz)|Binary Distribution in gz package
[activemq-release-2.0-src.tar.gz](http://dist.codehaus.org/activemq/distributions/activemq-release-2.0-src.tar.gz)|Source Distribution in gz package

Changelog
---------

For a more detailed view of new features and bug fixes, see the [release notes](http://jira.activemq.org/jira/secure/ReleaseNote.jspa?version=11420&styleName=Html&projectId=10520&Create=Create)

JIRA Issues Macro: Unable to locate JIRA server for this macro. It may be due to Application Link configuration.

You may also want to look at [the previous Changelog](activemq-15-release)

