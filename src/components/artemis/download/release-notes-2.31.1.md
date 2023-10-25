---
layout: default_md
title: ActiveMQ Artemis 2.31.1 Release Notes
title-class: page-title-artemis
type: artemis
---

 - [A complete list of JIRAs](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12315920&version=12353642) for the 2.31.1 release.

 - [A list of commits](commit-report-2.31.1).

 - Please see the ["Versions"](https://activemq.apache.org/components/artemis/documentation/latest/versions.html) chapter in the User Guide for upgrade instructions.

**Note**: This release requires use of Java 11 or above.


Release Notes - ActiveMQ Artemis - Version 2.31.1


## Bug
* [ARTEMIS-4141] - Message flow gets stuck
* [ARTEMIS-4270] - Messages get lost when using multiple consumers with topic hierarchies
* [ARTEMIS-4432] - openwire connection failure handling is bypassing the actor and ignoring the operation context leading to contention in error
* [ARTEMIS-4435] - Some Artemis artifacts misses MANIFEST.MF content
* [ARTEMIS-4442] - Message Redistributor is leaking LinkedListImpl$Iterator
* [ARTEMIS-4450] - Auto-deleted clustered destinations can cause message loss
* [ARTEMIS-4451] - non-SASL AMQP connection fails if resource audit logging enabled
* [ARTEMIS-4453] - Bridge blocked by flow control, seemingly forever

## Improvement
* [ARTEMIS-4433] - improve Reproducible Builds
* [ARTEMIS-4443] - properties config - support broker plugin - logging broker plugin
* [ARTEMIS-4444] - Allow broker classpath extension using custom paths
* [ARTEMIS-4447] - Add paging prefetch parameters into address settings
* [ARTEMIS-4449] - [DOC] Fix url parameter separator in acceptor configuration
* [ARTEMIS-4456] - Register metrics plugin
* [ARTEMIS-4459] - Broker should log when ignoring a duplicate MQTT QoS 2 message
* [ARTEMIS-4467] - Core client code visibility change required

## Task
* [ARTEMIS-4434] - Add extra logging.debug on Redistributor when redistribution is happening
* [ARTEMIS-4441] - Add Docker chapter to User Manual
* [ARTEMIS-4446] - Improve readability of code/config blocks in user manual
* [ARTEMIS-4461] - Declare implicit dependencies for artemis-features
* [ARTEMIS-4464] - Cleanup on Soak and Smoke Tests
* [ARTEMIS-4466] - Disable Artemis-features verification on non test profiles
* [ARTEMIS-4471] - Mark Artemis Maven Plugins as threadSafe=true

## Dependency upgrade
* [ARTEMIS-4437] - Upgrade OWASP to 8.4.0
* [ARTEMIS-4438] - Upgrade JGroups to 5.3.0.Final
* [ARTEMIS-4439] - Upgrade Netty to 4.1.100.Final
* [ARTEMIS-4457] - Upgrade jetty version to 10.0.16
* [ARTEMIS-4474] - Update to Zookeeper 3.8.3
* [ARTEMIS-4475] - Upgrade ActiveMQ "Classic" to 5.17.6
