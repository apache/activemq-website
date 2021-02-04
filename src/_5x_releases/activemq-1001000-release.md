---
layout: default_md
title: ActiveMQ 1.1 Release 
title-class: page-title-activemq5
type: activemq5
redirect_from:
- /activemq-11-release
---

[Overview](overview) > [Download](download) > [ActiveMQ 3.2.1 Release](activemq-11-release)

New and Noteworthy
------------------

This release represents a major increase in functionality; the new features in this release are:-

*   distributed queues and topics and clusters of message brokers
*   auto-reconnection of clients across a cluster of brokers
*   support for high performance non-durable queues
*   wildcard support on queues (as well as topics)
*   transaction log and JDBC persistence in addition to JDBM and BDB
*   JNDI support for easy integration
*   HTTP tunnelling support
*   auto-broker discovery using Zeroconf (Apple Rendezvous) for a peer based network using high performance pointcast
*   composite destinations support (allowing a publish or subscribe operation on several queues and/or topics in one atomic operation, such as writing to N queues in one operation)
*   simpler pure-Java configuration API
*   heaps of bug fixes and new test cases

Download Here
-------------

Download|Description
---|---
[activemq-1.1.zip](http://dist.codehaus.org/activemq/distributions/activemq-1.1.zip)|Binary Distribution in zip package
[activemq-1.1-src.zip](http://dist.codehaus.org/activemq/distributions/activemq-1.1-src.zip)|Source Distribution in zip package
[activemq-1.1.tar.gz](http://dist.codehaus.org/activemq/distributions/activemq-1.1.tar.gz)|Binary Distribution in gz package
[activemq-1.1-src.tar.gz](http://dist.codehaus.org/activemq/distributions/activemq-1.1-src.tar.gz)|Source Distribution in gz package

Changelog
---------

JIRA Issues Macro: Unable to locate JIRA server for this macro. It may be due to Application Link configuration.

For a more detailed view of new features and bug fixes, see the [release notes](http://jira.activemq.org/jira/secure/ReleaseNote.jspa?projectId=10520&styleName=Html&version=10632)

