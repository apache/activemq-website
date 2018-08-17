Apache ActiveMQ ™ -- ActiveMQ 3.1 Release 

[Overview](overview.md) > [Download](OverviewOverview/Overview/download.md) > [ActiveMQ 3.1 Release](Overview/DownloadOverview/Download/Overview/Download/activemq-31-release.md)


New and Noteworthy
------------------

This new release includes the following

*   New [Stomp](http://stomp.codehaus.org/) support to make it easy to create cross language clients such as for Ruby or Perl etc. (Python, C and .Net coming soon)
*   XPath based selectors and demand based publishing, making it easy to implement [WS-Notification](http://servicemix.org/WS+Notification) on top of ActiveMQ
*   a pooling JMS ConnectionFactory for better support of the Spring JMSTemplate outside of a JCA container
*   improved JNDI support to allow easy dynamic creation of Queues and Topics, to handle different connection settings and to reuse standard JNDI properties
*   Increased support for the number of [databases and JDBC drivers](jdbc-CommunityCommunity/Community/support.md) to include
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

Download

Description

[activemq-3.1.zip](http://dist.codehaus.org/activemq/distributions/activemq-3.1.zip)

Binary Distribution in zip package

[activemq-3.1-src.zip](http://dist.codehaus.org/activemq/distributions/activemq-3.1-src.zip)

Source Distribution in zip package

[activemq-3.1.tar.gz](http://dist.codehaus.org/activemq/distributions/activemq-3.1.tar.gz)

Binary Distribution in gz package

[activemq-3.1-src.tar.gz](http://dist.codehaus.org/activemq/distributions/activemq-3.1-src.tar.gz)

Source Distribution in gz package

Changelog
---------

For a more detailed view of new features and bug fixes, see the [release notes](http://jira.activemq.org/jira/secure/ReleaseNote.jspa?version=11501&styleName=Html&projectId=10520&Create=Create)

JIRA Issues Macro: Unable to locate JIRA server for this macro. It may be due to Application Link configuration.

You may also want to look at [the previous Changelog](Overview/Download/activemq-30-release.md)

