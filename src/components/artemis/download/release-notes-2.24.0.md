---
layout: default_md
title: ActiveMQ Artemis 2.24.0 Release Notes
title-class: page-title-artemis
type: artemis
---

A complete list of JIRAs for the 2.24.0 release can be found  * [here](https://issues.apache.org/jira/secure/ReleaseNote.jspa?version=12351822&projectId=12315920)

A list of commits can be found  * [here](commit-report-2.24.0).

**Note**: This release requires use of Java 11 or above.


Release Notes - ActiveMQ Artemis - Version 2.24.0

** Bug
* [ARTEMIS-1964] - Address control has 2 methods to get same metric
* [ARTEMIS-3585] - Broken link in tests.md
* [ARTEMIS-3743] - Discrepancy in message counts / address sizes
* [ARTEMIS-3766] - Mirror is not using AckReason to perform similar operations on the target mirror
* [ARTEMIS-3767] - Replication inconsistencies between 2.17 and main
* [ARTEMIS-3815] - Target mirror controller may commit received message after receiving ACK for it
* [ARTEMIS-3820] - expired AMQP messages do not show value for "original queue"
* [ARTEMIS-3840] - Core bridges with concurrency > 1 will get removed on configuration reload
* [ARTEMIS-3851] - MQTT subscription queues exist after restart despite CleanSession=1
* [ARTEMIS-3858] - navigating from session to related consumers/producers gives NPE
* [ARTEMIS-3859] - Offer "Original Queue" column only for dead-letter or expiry queues
* [ARTEMIS-3862] - Short lived subscription can make the addressSize out of sync.
* [ARTEMIS-3863] - properties config - allow role configuration
* [ARTEMIS-3864] - Stomp Transactions are leaking sessions on ActiveMQServer
* [ARTEMIS-3868] - Journal Compactor split logic creating too many files
* [ARTEMIS-3886] - Fix CLI operation retry
* [ARTEMIS-3890] - LVQ - missing and duplicate messages for existing consumer
* [ARTEMIS-3891] - properties config - allow divert/transformer configuration
* [ARTEMIS-3892] - User limits not working with certificate authentication
* [ARTEMIS-3894] - properties config - allow core bridge configuration
* [ARTEMIS-3895] - properties config - treat url with / as directory of alphabetically ordered <..>.properties files
* [ARTEMIS-3896] - Clarify logging for transactional ops
* [ARTEMIS-3905] - Can't find "Connect" tab on Artemis Console Navigation Menu


** New Feature
* [ARTEMIS-3850] - Eliminate Soft Cache in paging, and add reading options
* [ARTEMIS-3873] - AMQP Broker Connection Encrypted Attributes


** Improvement
* [ARTEMIS-3888] - Make web console detection more robust

** Test
* [ARTEMIS-3874] - reduce use of test-jar and related module/test interdependencies


** Task
* [ARTEMIS-3558] - [DOC] Add broker-connections to broker.xml reference
* [ARTEMIS-3870] - Mark the -all client deps as optional in the distribution pom to avoid clashing/duplicate deps
* [ARTEMIS-3876] - avoid unecessary artemis-native dependency unpack for each module
* [ARTEMIS-3877] - move javadoc creation to release profile as with other site content
* [ARTEMIS-3883] - align various dependency versions used in build/test/examples
* [ARTEMIS-3885] - refresh documentation build deps
* [ARTEMIS-3899] - Improve salt calculation