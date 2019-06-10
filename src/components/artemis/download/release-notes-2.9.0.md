---
layout: default_md
title: ActiveMQ Artemis 2.9.0 Release Notes
title-class: page-title-artemis
type: artemis
---

A complete list of JIRAs for the 2.9.0 release can be found [here](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12315920&version=12345527).

A list of commits can be found [here](commit-report-2.9.0).

## Bug

*   [[ARTEMIS-2339](https://issues.apache.org/jira/browse/ARTEMIS-2339)] - TextMessage is not validating prefixes and other prefix and compatibility issues
*   [[ARTEMIS-2342](https://issues.apache.org/jira/browse/ARTEMIS-2342)] - The reload logging configuration at runtime for Active MQ Servers may log warnings
*   [[ARTEMIS-2344](https://issues.apache.org/jira/browse/ARTEMIS-2344)] - [AMQP] Broker does not send security errors for unauthorized anonymous sasl
*   [[ARTEMIS-2347](https://issues.apache.org/jira/browse/ARTEMIS-2347)] - JournalStorageManager::stopReplication can deadlock while stopping
*   [[ARTEMIS-2355](https://issues.apache.org/jira/browse/ARTEMIS-2355)] - Message does not redistribute in cluster when using AMQP and Multicast
*   [[ARTEMIS-2360](https://issues.apache.org/jira/browse/ARTEMIS-2360)] - IndexOutOfBoundException when dealing with HornetQ Clients concurrently
*   [[ARTEMIS-2361](https://issues.apache.org/jira/browse/ARTEMIS-2361)] - Core Bridge should make a copy before sending a message

## New Feature

*   [[ARTEMIS-2308](https://issues.apache.org/jira/browse/ARTEMIS-2308)] - Support exporting metrics

## Improvement

*   [[ARTEMIS-2346](https://issues.apache.org/jira/browse/ARTEMIS-2346)] - make timestamp human readable in console
*   [[ARTEMIS-2352](https://issues.apache.org/jira/browse/ARTEMIS-2352)] - Add the ability to reject messages without a validated user set
*   [[ARTEMIS-2358](https://issues.apache.org/jira/browse/ARTEMIS-2358)] - Add user and pass to database store to allow encryption

## Task

*   [[ARTEMIS-2351](https://issues.apache.org/jira/browse/ARTEMIS-2351)] - AMQP: Update to Proton-J 0.33.0 and Qpid JMS 0.42.0
