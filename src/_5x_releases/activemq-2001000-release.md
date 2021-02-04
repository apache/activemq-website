---
layout: default_md
title: ActiveMQ 2.1 Release 
title-class: page-title-activemq5
type: activemq5
redirect_from:
- /activemq-21-release
---

[Overview](overview) > [Download](download) > [ActiveMQ 3.2.1 Release](activemq-21-release)

New and Noteworthy
------------------

This release includes full support for the high performance journal. Our default persistence mechanism is now the journal for short term persistence and then JDBC (via Apache Derby by default) for long term storage. The journal is regularly checkpointed with the database for high performance and high resiliency.

This new release includes a number of performance enhancements in both durable and non durable messaging as well as a number of bug fixes.

Download Here
-------------

Download|Description
---|---
[activemq-release-2.1.zip](http://dist.codehaus.org/activemq/distributions/activemq-release-2.1.zip)|Binary Distribution in zip package
[activemq-release-2.1-src.zip](http://dist.codehaus.org/activemq/distributions/activemq-release-2.1-src.zip)|Source Distribution in zip package
[activemq-release-2.1.tar.gz](http://dist.codehaus.org/activemq/distributions/activemq-release-2.1.tar.gz)|Binary Distribution in gz package
[activemq-release-2.1-src.tar.gz](http://dist.codehaus.org/activemq/distributions/activemq-release-2.1-src.tar.gz)|Source Distribution in gz package

Changelog
---------

For a more detailed view of new features and bug fixes, see the [release notes](http://jira.activemq.org/jira/secure/ReleaseNote.jspa?version=11499&styleName=Html&projectId=10520&Create=Create)

JIRA Issues Macro: Unable to locate JIRA server for this macro. It may be due to Application Link configuration.

You may also want to look at [the previous Changelog](activemq-20-release)

