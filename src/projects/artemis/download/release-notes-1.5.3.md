--- 
layout: default_md
title: ActiveMQ Artemis 1.5.3 Release Notes
title-class: page-title-artemis
type: artemis
---

A complete list of JIRAs for the 1.5.3 release can be found at the [Apache ActiveMQ Artemis project JIRA](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12315920&version=12339575).

#### Bug

* \[[ARTEMIS-917](https://issues.apache.org/jira/browse/ARTEMIS-917)\] - Retained messages from file system contain weird chars
* \[[ARTEMIS-931](https://issues.apache.org/jira/browse/ARTEMIS-931)\] - Improve HTTP upgrade connection
* \[[ARTEMIS-934](https://issues.apache.org/jira/browse/ARTEMIS-934)\] - Stomp server keeps pinging client after client stops responding
* \[[ARTEMIS-937](https://issues.apache.org/jira/browse/ARTEMIS-937)\] - Use Proper disk alignment over libaio instead of 512 hard coded.
* \[[ARTEMIS-939](https://issues.apache.org/jira/browse/ARTEMIS-939)\] - User list not updated on the broker dynamically
* \[[ARTEMIS-951](https://issues.apache.org/jira/browse/ARTEMIS-951)\] - MQTT Messages Acks are not auto-committed
* \[[ARTEMIS-952](https://issues.apache.org/jira/browse/ARTEMIS-952)\] - MQTT Clean session should delete subscription queues

#### Improvement

* \[[ARTEMIS-873](https://issues.apache.org/jira/browse/ARTEMIS-873)\] - Use K,M,G notations on broker.xml
* \[[ARTEMIS-935](https://issues.apache.org/jira/browse/ARTEMIS-935)\] - Tool to recalculate disk sync times
* \[[ARTEMIS-938](https://issues.apache.org/jira/browse/ARTEMIS-938)\] - JDBC persistence-store should use BIGINT type for IDs in database tables
* \[[ARTEMIS-957](https://issues.apache.org/jira/browse/ARTEMIS-957)\] - JDBC Store should use setBytes API vs using Concat on BLOB
