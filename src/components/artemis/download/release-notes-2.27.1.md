---
layout: default_md
title: ActiveMQ Artemis 2.27.1 Release Notes
title-class: page-title-artemis
type: artemis
---

 - [A complete list of JIRAs](https://issues.apache.org/jira/secure/ReleaseNote.jspa?version=12352610&projectId=12315920) for the 2.27.1 release.

 - [A list of commits](commit-report-2.27.0).

 - Please see the "Versions" chapter in the User Guide for upgrade instructions.

**Note**: This release requires use of Java 11 or above.

## Bug
 * [ARTEMIS-4030] - AMQ222010 (No such file or directory) during startup
 * [ARTEMIS-4078] - Divert filter not added/updated/removed on configuration change
 * [ARTEMIS-4083] - when artemis streaming enabled then artemis-core client is not closing inputstream for Bytes message, blocking deletion of file after its processed in windows
 * [ARTEMIS-4084] - Rollbacking massive amounts of messages might crash broker
 * [ARTEMIS-4085] - Exclusive LVQ not working as expected
 * [ARTEMIS-4089] - Auto-deleted queue with active producer leaves producer disabled (or impotent)
 * [ARTEMIS-4092] - ./artemis upgrade backup is not created properly / incomplete
 * [ARTEMIS-4096] - AMQP Large Messages can be lost when sent through Clustered or Bridge
