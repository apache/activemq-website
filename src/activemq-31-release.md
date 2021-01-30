---
layout: default_md
title: ActiveMQ 3.1 Release 
title-class: page-title-activemq5
type: activemq5
---

[Overview](overview) > [Download](download) > [ActiveMQ 3.1 Release](activemq-31-release)

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