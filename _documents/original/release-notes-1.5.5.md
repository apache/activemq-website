       /\* <!\[CDATA\[ */ .download { font-size: 80%; } table.download { width: 100%; } table.download tr td { border: 1px solid #ccc; padding: .5em; } /* \]\]> */  ActiveMQ Artemis

*   [ActiveMQ Artemis](index.html)
*   [Documentation](docs.md)
*   [Download](OverviewOverview/Overview/download.md)

![ActiveMQ logo](/images/activemq-logo.png)

ActiveMQ Artemis
================

Release Notes - Apache ActiveMQ Artemis 1.5.5
---------------------------------------------

A complete list of JIRAs for the 1.5.4 release can be found at the [Apache ActiveMQ Artemis project JIRA](https://issues.apache.org/jira/secure/ReleaseNote.jspa?version=12339947&styleName=&projectId=12315920)

Release Notes - ActiveMQ Artemis - Version 1.5.5

Bug
---

*   \[[ARTEMIS-930](https://issues.apache.org/jira/browse/ARTEMIS-930)\] \- JDBC FileFactory Driver Prepared Statement does not always return ID
*   \[[ARTEMIS-990](https://issues.apache.org/jira/browse/ARTEMIS-990)\] \- AMQ119032: User: Customer does not have permission='CREATE\_DURABLE\_QUEUE' on address $sys.mqtt.queue.qos2
*   \[[ARTEMIS-1033](https://issues.apache.org/jira/browse/ARTEMIS-1033)\] \- NPE on PageTransactions during startup in case of previous TX Failures
*   \[[ARTEMIS-1043](https://issues.apache.org/jira/browse/ARTEMIS-1043)\] \- NettyConnector not working with IPv6 address
*   \[[ARTEMIS-1057](https://issues.apache.org/jira/browse/ARTEMIS-1057)\] \- Lower log level of AMQ214023
*   \[[ARTEMIS-1071](https://issues.apache.org/jira/browse/ARTEMIS-1071)\] \- Invalid Type exception handling improvements
*   \[[ARTEMIS-1072](https://issues.apache.org/jira/browse/ARTEMIS-1072)\] \- ./artemis create --java-opts will have options on bin instead of etc
*   \[[ARTEMIS-1074](https://issues.apache.org/jira/browse/ARTEMIS-1074)\] \- Acceptors and Connectors that enable SSL don’t start up while using a password codec
*   \[[ARTEMIS-1078](https://issues.apache.org/jira/browse/ARTEMIS-1078)\] \- Thread pool executor occasionally misses to create a new thread
*   \[[ARTEMIS-1089](https://issues.apache.org/jira/browse/ARTEMIS-1089)\] \- Backup sync-up is slow when paging
*   \[[ARTEMIS-1114](https://issues.apache.org/jira/browse/ARTEMIS-1114)\] \- Journal Compactor possibly losing records
*   \[[ARTEMIS-1140](https://issues.apache.org/jira/browse/ARTEMIS-1140)\] \- Avoid Queue lock on queueQuery

Improvement
-----------

*   \[[ARTEMIS-1077](https://issues.apache.org/jira/browse/ARTEMIS-1077)\] \- Improving InVM and Buffer usage
*   \[[ARTEMIS-1124](https://issues.apache.org/jira/browse/ARTEMIS-1124)\] \- JDBC Network Timeout configuration