---
layout: default_md
title: ActiveMQ 3.1 Release 
title-class: page-title-activemq5
type: activemq5
redirect_from:
- /activemq-31-release
---

[Overview](overview) > [Download](download) > [ActiveMQ 3.2.1 Release](activemq-31-release)

New and Noteworthy
------------------

This new release includes the following

*   New [Stomp](http://stomp.codehaus.org/) support to make it easy to create cross language clients such as for Ruby or Perl etc. (Python, C and .Net coming soon)
*   XPath based selectors and demand based publishing, making it easy to implement [WS-Notification](http://servicemix.org/WS+Notification) on top of ActiveMQ
*   a pooling JMS ConnectionFactory for better support of the Spring JMSTemplate outside of a JCA container
*   improved JNDI support to allow easy dynamic creation of Queues and Topics, to handle different connection settings and to reuse standard JNDI properties
*   Increased support for the number of [databases and JDBC drivers](jdbc-support) to include
    *   Apache Derby
    *   Oracle
    *   Sybase
    *   DB2
    *   SQLServer
    *   Postgresql
    *   MySQL
    *   Axion
    *   HSQL
*   improved authentication at the connection and destination level
*   More flexible prefetch policy configurations for more control over queue dispatching and performance tuning
*   improved support for priority message ordering
*   cleaner servlet integration
*   better XA integration to allow outbound producers to reuse inbound JMS sessions
*   improved support for WebSphere and JBoss
*   easier journal file size and checkpoint period configuration
*   jabber transport
*   various performance enhancements and bug fixes

Download Here
-------------

Download|Description
---|---
[activemq-release-3.1.zip](http://dist.codehaus.org/activemq/distributions/activemq-release-3.1.zip)|Binary Distribution in zip package
[activemq-release-3.1-src.zip](http://dist.codehaus.org/activemq/distributions/activemq-release-3.1-src.zip)|Source Distribution in zip package
[activemq-release-3.1.tar.gz](http://dist.codehaus.org/activemq/distributions/activemq-release-3.1.tar.gz)|Binary Distribution in gz package
[activemq-release-3.1-src.tar.gz](http://dist.codehaus.org/activemq/distributions/activemq-release-3.1-src.tar.gz)|Source Distribution in gz package

Changelog
---------

For a more detailed view of new features and bug fixes, see the [release notes](http://jira.activemq.org/jira/secure/ReleaseNote.jspa?version=11501&styleName=Html&projectId=10520&Create=Create)

You may also want to look at [the previous Changelog](activemq-30-release)

