--- 
layout: default_md
title: ActiveMQ Artemis 1.5.2 Release Notes
title-class: page-title-artemis
type: artemis
---

A complete list of JIRAs for the 1.5.2 release can be found at the [Apache ActiveMQ Artemis project JIRA](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12315920&version=12338833).

#### Bug

* \[[ARTEMIS-882](https://issues.apache.org/jira/browse/ARTEMIS-882)\] - Some objects don't support lists on the connection factory definition
* \[[ARTEMIS-886](https://issues.apache.org/jira/browse/ARTEMIS-886)\] - Tiny error in documentation
* \[[ARTEMIS-890](https://issues.apache.org/jira/browse/ARTEMIS-890)\] - Dropped Messages, Paging and Block are ignored when broker is non persistent
* \[[ARTEMIS-892](https://issues.apache.org/jira/browse/ARTEMIS-892)\] - Error decoding AMQP frame sent by Artemis
* \[[ARTEMIS-913](https://issues.apache.org/jira/browse/ARTEMIS-913)\] - Slow consumer detection not working when paging
* \[[ARTEMIS-914](https://issues.apache.org/jira/browse/ARTEMIS-914)\] - Max saved replicated journal size on Live node should not be -1
* \[[ARTEMIS-921](https://issues.apache.org/jira/browse/ARTEMIS-921)\] - Consumers killed as slow even if overall consuming rate is above threshold
* \[[ARTEMIS-926](https://issues.apache.org/jira/browse/ARTEMIS-926)\] - CME when Artemis server start
* \[[ARTEMIS-927](https://issues.apache.org/jira/browse/ARTEMIS-927)\] - ActiveMQ logs cluster password in plain text

#### Improvement

* \[[ARTEMIS-560](https://issues.apache.org/jira/browse/ARTEMIS-560)\] - Add support for Paging using JDBC Store
* \[[ARTEMIS-920](https://issues.apache.org/jira/browse/ARTEMIS-920)\] - Log SQL Exceptions and Warnings
* \[[ARTEMIS-928](https://issues.apache.org/jira/browse/ARTEMIS-928)\] - Remoting Layer will reuse ByteBuffer Pools on messages

#### Task

* \[[ARTEMIS-891](https://issues.apache.org/jira/browse/ARTEMIS-891)\] - upgrade proton to 0.16
