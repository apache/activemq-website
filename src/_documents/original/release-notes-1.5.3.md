       /\* <!\[CDATA\[ */ .download { font-size: 80%; } table.download { width: 100%; } table.download tr td { border: 1px solid #ccc; padding: .5em; } /* \]\]> */  ActiveMQ Artemis

*   [ActiveMQ Artemis](index.html)
*   [Documentation](docs.md)
*   [Download](OverviewOverview/Overview/download.md)

![ActiveMQ logo](/images/activemq-logo.png)

ActiveMQ Artemis
================

Release Notes - Apache ActiveMQ Artemis 1.5.3
---------------------------------------------

A complete list of JIRAs for the 1.5.3 release can be found at the [Apache ActiveMQ Artemis project JIRA](https://issues.apache.org/jira/secure/ReleaseNote.jspa?version=12339575&styleName=Html&projectId=12315920&Create=Create&atl_token=A5KQ-2QAV-T4JA-FDED%7Ce0a2038e11728890d51e45bf9f28e4d2105fddab%7Clout")

Release Notes - ActiveMQ Artemis - Version 1.5.3

Bug
---

*   \[[ARTEMIS-917](https://issues.apache.org/jira/browse/ARTEMIS-917)\] \- Retained messages from file system contain weird chars
*   \[[ARTEMIS-931](https://issues.apache.org/jira/browse/ARTEMIS-931)\] \- Improve HTTP upgrade connection
*   \[[ARTEMIS-934](https://issues.apache.org/jira/browse/ARTEMIS-934)\] \- Stomp server keeps pinging client after client stops responding
*   \[[ARTEMIS-937](https://issues.apache.org/jira/browse/ARTEMIS-937)\] \- Use Proper disk alignment over libaio instead of 512 hard coded.
*   \[[ARTEMIS-939](https://issues.apache.org/jira/browse/ARTEMIS-939)\] \- User list not updated on the broker dynamically
*   \[[ARTEMIS-951](https://issues.apache.org/jira/browse/ARTEMIS-951)\] \- MQTT Messages Acks are not auto-committed
*   \[[ARTEMIS-952](https://issues.apache.org/jira/browse/ARTEMIS-952)\] \- MQTT Clean session should delete subscription queues

Improvement
-----------

*   \[[ARTEMIS-873](https://issues.apache.org/jira/browse/ARTEMIS-873)\] \- Use K,M,G notations on broker.xml
*   \[[ARTEMIS-935](https://issues.apache.org/jira/browse/ARTEMIS-935)\] \- Tool to recalculate disk sync times
*   \[[ARTEMIS-938](https://issues.apache.org/jira/browse/ARTEMIS-938)\] \- JDBC persistence-store should use BIGINT type for IDs in database tables
*   \[[ARTEMIS-957](https://issues.apache.org/jira/browse/ARTEMIS-957)\] \- JDBC Store should use setBytes API vs using Concat on BLOB