       /\* <!\[CDATA\[ */ .download { font-size: 80%; } table.download { width: 100%; } table.download tr td { border: 1px solid #ccc; padding: .5em; } /* \]\]> */  ActiveMQ Artemis

*   [ActiveMQ Artemis](index.html)
*   [Documentation](docs.md)
*   [Download](OverviewOverview/Overview/download.md)

![ActiveMQ logo](/images/activemq-logo.png)

ActiveMQ Artemis
================

Release Notes - Apache ActiveMQ Artemis 1.5.4
---------------------------------------------

A complete list of JIRAs for the 1.5.4 release can be found at the [Apache ActiveMQ Artemis project JIRA](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12315920&version=12339158")

Release Notes - ActiveMQ Artemis - Version 1.5.4

Bug
---

*   \[[ARTEMIS-919](https://issues.apache.org/jira/browse/ARTEMIS-919)\] \- Issues creating jms queues in core config in broker.xml when hot reloading configuration
*   \[[ARTEMIS-932](https://issues.apache.org/jira/browse/ARTEMIS-932)\] \- 2 brokers can be started using the same store
*   \[[ARTEMIS-950](https://issues.apache.org/jira/browse/ARTEMIS-950)\] \- Change log level from INFO to WARN for "Invalid "host" value "0.0.0.0" detected for..." when Artemis is bound to 0.0.0.0
*   \[[ARTEMIS-963](https://issues.apache.org/jira/browse/ARTEMIS-963)\] \- ClassCastException in ActiveMQChannelHandler
*   \[[ARTEMIS-969](https://issues.apache.org/jira/browse/ARTEMIS-969)\] \- ReceiveMessage will expand unecessarily on core protocol
*   \[[ARTEMIS-974](https://issues.apache.org/jira/browse/ARTEMIS-974)\] \- MQTT Will messages are not retained
*   \[[ARTEMIS-976](https://issues.apache.org/jira/browse/ARTEMIS-976)\] \- PostgresSequentialSequentialFileDriver SQLProvider NPE
*   \[[ARTEMIS-982](https://issues.apache.org/jira/browse/ARTEMIS-982)\] \- Deadlock on AMQP Close versus Delivery on AMQP
*   \[[ARTEMIS-986](https://issues.apache.org/jira/browse/ARTEMIS-986)\] \- Integer overflow in MySQLSQLProvider.java
*   \[[ARTEMIS-989](https://issues.apache.org/jira/browse/ARTEMIS-989)\] \- Individual Acknowledge: ActiveMQConnectionFactory.createContext(final int sessionMode) throws exception for ActiveMQJMSConstants.INDIVIDUAL_ACKNOWLEDGE
*   \[[ARTEMIS-991](https://issues.apache.org/jira/browse/ARTEMIS-991)\] \- Null dereference after hitting Ctrl+d when prompted for password in \`artemis create\`
*   \[[ARTEMIS-992](https://issues.apache.org/jira/browse/ARTEMIS-992)\] \- NPE and other trouble when cluster-connection has bad connector-ref
*   \[[ARTEMIS-998](https://issues.apache.org/jira/browse/ARTEMIS-998)\] \- NPE when using JDBCFileDriver when Blob is null
*   \[[ARTEMIS-1017](https://issues.apache.org/jira/browse/ARTEMIS-1017)\] \- Wrong error message when default destination for producer is not specified
*   \[[ARTEMIS-1020](https://issues.apache.org/jira/browse/ARTEMIS-1020)\] \- CDI Extension doesn't discover Configuration via CDI producers

Improvement
-----------

*   \[[ARTEMIS-1002](https://issues.apache.org/jira/browse/ARTEMIS-1002)\] \- ActiveMQBuffers creates a new netty pool increasing memory footprint
*   \[[ARTEMIS-1006](https://issues.apache.org/jira/browse/ARTEMIS-1006)\] \- JDBC Storage Manager to show SQLExceptions on logs

New Feature
-----------

*   \[[ARTEMIS-999](https://issues.apache.org/jira/browse/ARTEMIS-999)\] \- Support Oracle12C for Artemis JDBC Store

Task
----

*   \[[ARTEMIS-995](https://issues.apache.org/jira/browse/ARTEMIS-995)\] \- Cleanup test suite