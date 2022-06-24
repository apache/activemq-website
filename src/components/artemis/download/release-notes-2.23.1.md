---
layout: default_md
title: ActiveMQ Artemis 2.23.1 Release Notes
title-class: page-title-artemis
type: artemis
---

A complete list of JIRAs for the 2.23.1 release can be found  * [here](https://issues.apache.org/jira/secure/ReleaseNote.jspa?version=12351846&projectId=12315920)

A list of commits can be found  * [here](commit-report-2.23.1).

**Note**: This release requires use of Java 11 or above.

# Bug
 * [ARTEMIS-3305] - compatibility tests dont work on Java 16+
 * [ARTEMIS-3856] - Failed to change channel state to ReadyForWriting : java.util.ConcurrentModificationException

# Test
 * [ARTEMIS-3854] - tests using reflection to get process pid fail on Java 17

# Task
 * [ARTEMIS-3842] - artemis-selector module still references a JDK8
