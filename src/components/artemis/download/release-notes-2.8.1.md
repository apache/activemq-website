---
layout: default_md
title: ActiveMQ Artemis 2.8.1 Release Notes
title-class: page-title-artemis
type: artemis
---

A complete list of JIRAs for the 2.8.1 release can be found [here](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12315920&version=12345432).

A list of commits can be found [here](commit-report-2.8.1).

## Bug

*   [[ARTEMIS-2317](https://issues.apache.org/jira/browse/ARTEMIS-2317)] - Long TTSP caused by Page::read using mmap read
*   [[ARTEMIS-2323](https://issues.apache.org/jira/browse/ARTEMIS-2323)] - NettyTransport should also send requests with void promises
*   [[ARTEMIS-2327](https://issues.apache.org/jira/browse/ARTEMIS-2327)] - JMS Connection ExceptionListener not invoked when ActiveMQConnectionTimedOutException occurs on sendPacket
*   [[ARTEMIS-2330](https://issues.apache.org/jira/browse/ARTEMIS-2330)] - Possible NPE on dealing with LargeMessages sends towards hornetQ
*   [[ARTEMIS-2332](https://issues.apache.org/jira/browse/ARTEMIS-2332)] - HawtIo - Impossible to send Message with Headers
*   [[ARTEMIS-2333](https://issues.apache.org/jira/browse/ARTEMIS-2333)] - Stomp delivery after connection is closed
*   [[ARTEMIS-2334](https://issues.apache.org/jira/browse/ARTEMIS-2334)] - Apache Artemis HA Slave Node Id NPE
*   [[ARTEMIS-2335](https://issues.apache.org/jira/browse/ARTEMIS-2335)] - Message stuck if consumers are busy during message group delivery
*   [[ARTEMIS-2339](https://issues.apache.org/jira/browse/ARTEMIS-2339)] - TextMessage is not validating prefixes and other prefix and compatibility issues

## Improvement

*   [[ARTEMIS-2321](https://issues.apache.org/jira/browse/ARTEMIS-2321)] - Paging scalability and GC improvements

## Task

*   [[ARTEMIS-2319](https://issues.apache.org/jira/browse/ARTEMIS-2319)] - Upgrade JBoss Logging to 3.4.0.Final
