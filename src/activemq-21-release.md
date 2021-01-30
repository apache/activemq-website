---
layout: default_md
title: ActiveMQ 2.1 Release 
title-class: page-title-activemq5
type: activemq5
---

[Overview](overview) > [Download](download) > [ActiveMQ 2.1 Release](activemq-21-release)

New and Noteworthy
------------------

This release includes full support for the high performance journal. Our default persistence mechanism is now the journal for short term persistence and then JDBC (via Apache Derby by default) for long term storage. The journal is regularly checkpointed with the database for high performance and high resiliency.

This new release includes a number of performance enhancements in both durable and non durable messaging as well as a number of bug fixes.