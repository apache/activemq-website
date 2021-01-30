---
layout: default_md
title: ActiveMQ 1.1 Release 
title-class: page-title-activemq5
type: activemq5
---

[Overview](overview) > [Download](download) > [ActiveMQ 1.1 Release](activemq-11-release)

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