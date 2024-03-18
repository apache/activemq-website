---
layout: default_md
title: ActiveMQ Artemis 2.30.0 Release Notes
title-class: page-title-artemis
type: artemis
---
 - [A list of commits](commit-report-2.30.0).

 - Please see the ["Versions"](https://activemq.apache.org/components/artemis/documentation/latest/versions.html) chapter in the User Guide for upgrade instructions.

**Note**: This release requires use of Java 11 or above.


## Bugs Fixed

* [ARTEMIS-4095](https://issues.apache.org/jira/browse/ARTEMIS-4095) - OpenWire clients are unable to consume from mutlicast queue after 2nd paging
* [ARTEMIS-4184](https://issues.apache.org/jira/browse/ARTEMIS-4184) - Bidges with concurrency not checked/cleared properly on config reload
* [ARTEMIS-4311](https://issues.apache.org/jira/browse/ARTEMIS-4311) - Strange typo propagated throughout the codebase: "Mesasge"
* [ARTEMIS-4315](https://issues.apache.org/jira/browse/ARTEMIS-4315) - Incorrect validation for page-limit settings
* [ARTEMIS-4316](https://issues.apache.org/jira/browse/ARTEMIS-4316) - Example HTML does not render correctly
* [ARTEMIS-4319](https://issues.apache.org/jira/browse/ARTEMIS-4319) - Mitigate NPE in paging log statement
* [ARTEMIS-4322](https://issues.apache.org/jira/browse/ARTEMIS-4322) - BundleFactory should use PrivilegedAction
* [ARTEMIS-4328](https://issues.apache.org/jira/browse/ARTEMIS-4328) - Test can hang indefinitely
* [ARTEMIS-4338](https://issues.apache.org/jira/browse/ARTEMIS-4338) - STOMP inoperable w/resource audit logging enabled
* [ARTEMIS-4340](https://issues.apache.org/jira/browse/ARTEMIS-4340) - fix artemis-journal ThreadLocalByteBufferPool.borrow zeroing
* [ARTEMIS-4351](https://issues.apache.org/jira/browse/ARTEMIS-4351) - unnecessary web console logging on impatient jolokia client
* [ARTEMIS-4354](https://issues.apache.org/jira/browse/ARTEMIS-4354) - Update the recovery XAResource underlying session 
* [ARTEMIS-4356](https://issues.apache.org/jira/browse/ARTEMIS-4356) - address match with wildcards seems to be broken
* [ARTEMIS-4365](https://issues.apache.org/jira/browse/ARTEMIS-4365) - MQTT retain flag not set correctly
* [ARTEMIS-4366](https://issues.apache.org/jira/browse/ARTEMIS-4366) - Addresses with multiple subscriptions are not working with Mirroring

## Improvements

* [ARTEMIS-4310](https://issues.apache.org/jira/browse/ARTEMIS-4310) - Smaller Container / Dockerfile based on Alpine
* [ARTEMIS-4314](https://issues.apache.org/jira/browse/ARTEMIS-4314) - Queue Federation, support consumerWindowSize zero and federate in batches only when the local queue is has excess capacity
* [ARTEMIS-4332](https://issues.apache.org/jira/browse/ARTEMIS-4332) - Add management method to close stuck server sessions
* [ARTEMIS-4348](https://issues.apache.org/jira/browse/ARTEMIS-4348) - CLI Abstract Connector should parse connectors if can't find acceptor on broker.xml
* [ARTEMIS-4362](https://issues.apache.org/jira/browse/ARTEMIS-4362) - Produce a logger when consumers are holding too many messages not allowing deposing

## Tasks

* [ARTEMIS-4329](https://issues.apache.org/jira/browse/ARTEMIS-4329) - dont [over]write RAT output in source tree root, use standard output location
* [ARTEMIS-4333](https://issues.apache.org/jira/browse/ARTEMIS-4333) - Document web SNI settings
* [ARTEMIS-4334](https://issues.apache.org/jira/browse/ARTEMIS-4334) - tidyup around artemis-website module used to generate docs for website
* [ARTEMIS-4341](https://issues.apache.org/jira/browse/ARTEMIS-4341) - Refactor JavaDoc generation
* [ARTEMIS-4346](https://issues.apache.org/jira/browse/ARTEMIS-4346) - move stomp test-client into systest support module
* [ARTEMIS-4353](https://issues.apache.org/jira/browse/ARTEMIS-4353) - Clean up Maven dependencies
* [ARTEMIS-4357](https://issues.apache.org/jira/browse/ARTEMIS-4357) - Replace Logger.unableToFindTargetQueue (LoggerID 222188) by a logger.debug
* [ARTEMIS-4360](https://issues.apache.org/jira/browse/ARTEMIS-4360) - Make compatibility-tests opt in with -Pcompatibility-tests

## Dependency Upgrades

* [ARTEMIS-4277](https://issues.apache.org/jira/browse/ARTEMIS-4277) - Upgrade checkstyle
* [ARTEMIS-4318](https://issues.apache.org/jira/browse/ARTEMIS-4318) - Migrate to Airline 2 
* [ARTEMIS-4320](https://issues.apache.org/jira/browse/ARTEMIS-4320) - Upgrade Netty to 4.1.94.Final
* [ARTEMIS-4321](https://issues.apache.org/jira/browse/ARTEMIS-4321) - Upgrade Guava to 32.0.1-jre
* [ARTEMIS-4323](https://issues.apache.org/jira/browse/ARTEMIS-4323) - Upgrade to Apache parent 30
* [ARTEMIS-4331](https://issues.apache.org/jira/browse/ARTEMIS-4331) - Upgrade JGroups to 5.2.16.Final
* [ARTEMIS-4335](https://issues.apache.org/jira/browse/ARTEMIS-4335) - Upgrade bcprov to bcprov-jdk18on:1.75
* [ARTEMIS-4336](https://issues.apache.org/jira/browse/ARTEMIS-4336) - Upgrade mockserver version to 5.15.0
* [ARTEMIS-4342](https://issues.apache.org/jira/browse/ARTEMIS-4342) - update Groovy to 4.0.13
* [ARTEMIS-4343](https://issues.apache.org/jira/browse/ARTEMIS-4343) - Update to Mockito 5.4.0
* [ARTEMIS-4344](https://issues.apache.org/jira/browse/ARTEMIS-4344) - Update to Jacoco 0.8.10
* [ARTEMIS-4345](https://issues.apache.org/jira/browse/ARTEMIS-4345) - Update to Error Prone 2.20.0
* [ARTEMIS-4347](https://issues.apache.org/jira/browse/ARTEMIS-4347) - Upgrade Keycloak in security example
* [ARTEMIS-4358](https://issues.apache.org/jira/browse/ARTEMIS-4358) - Upgrade commons-configuration2 to 2.9.0
* [ARTEMIS-4363](https://issues.apache.org/jira/browse/ARTEMIS-4363) - Update to Qpid JMS 1.10.0
* [ARTEMIS-4364](https://issues.apache.org/jira/browse/ARTEMIS-4364) - Upgrade johnzon version to 1.2.21