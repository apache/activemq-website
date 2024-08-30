---
layout: default_md
title: ActiveMQ Artemis 2.35.0 Release Notes
title-class: page-title-artemis
type: artemis
---
 - [A list of commits](commit-report-2.35.0).

 - Please see the ["Versions"](https://activemq.apache.org/components/artemis/documentation/latest/versions.html) chapter in the User Guide for upgrade instructions.

**Note**: This release requires use of Java 11 or above.


## Bugs Fixed

* [ARTEMIS-4165](https://issues.apache.org/jira/browse/ARTEMIS-4165) - Page transactions not getting deleted on queue deletion
* [ARTEMIS-4760](https://issues.apache.org/jira/browse/ARTEMIS-4760) - Creating MQTT consumer should work if auto-create-queues is false
* [ARTEMIS-4786](https://issues.apache.org/jira/browse/ARTEMIS-4786) - ConcurrentModificationException on Page.destroy
* [ARTEMIS-4788](https://issues.apache.org/jira/browse/ARTEMIS-4788) - AMQP Federation Broker connection can deadlock broker shutdown
* [ARTEMIS-4789](https://issues.apache.org/jira/browse/ARTEMIS-4789) - Page.destroy race with cleanup
* [ARTEMIS-4795](https://issues.apache.org/jira/browse/ARTEMIS-4795) - Enforce queue filter when sending to FQQN
* [ARTEMIS-4798](https://issues.apache.org/jira/browse/ARTEMIS-4798) - Address Size differs between Mirror and Source queue, leading to OME scenarios
* [ARTEMIS-4799](https://issues.apache.org/jira/browse/ARTEMIS-4799) - Broker Connection Receiver attach handled incorrectly
* [ARTEMIS-4801](https://issues.apache.org/jira/browse/ARTEMIS-4801) - AMQP Session address query cache can have invalid state for long lived sessions
* [ARTEMIS-4812](https://issues.apache.org/jira/browse/ARTEMIS-4812) - PageCursorInfo should be cleared on its Maps when page is marked as complete
* [ARTEMIS-4813](https://issues.apache.org/jira/browse/ARTEMIS-4813) - LargeMessages could lose a body while in sync if backup becomes activated

## New Features

* [ARTEMIS-4792](https://issues.apache.org/jira/browse/ARTEMIS-4792) - Add support for setting consumer priority on AMQP Receiver Source addresses

## Improvements

* [ARTEMIS-4796](https://issues.apache.org/jira/browse/ARTEMIS-4796) - Simplify SimpleString API
* [ARTEMIS-4800](https://issues.apache.org/jira/browse/ARTEMIS-4800) - Simplify QueueConfiguration API
* [ARTEMIS-4815](https://issues.apache.org/jira/browse/ARTEMIS-4815) - Add --json option to ./artemis queue stat

## Tasks

* [ARTEMIS-4790](https://issues.apache.org/jira/browse/ARTEMIS-4790) - Use JUnit 5 for the test suite
* [ARTEMIS-4802](https://issues.apache.org/jira/browse/ARTEMIS-4802) - Update deprecated tags in examples/features/ha/replicated-failback sample

## Dependency Upgrades

* [ARTEMIS-4791](https://issues.apache.org/jira/browse/ARTEMIS-4791) - Update to JUnit 5.10.2
* [ARTEMIS-4811](https://issues.apache.org/jira/browse/ARTEMIS-4811) - Upgrade Netty to 4.1.111.Final