---
layout: default_md
title: ActiveMQ Artemis 2.37.0 Release Notes
title-class: page-title-artemis
type: artemis
---
 - [A list of commits](commit-report-2.37.0).

 - Please see the ["Versions"](https://activemq.apache.org/components/artemis/documentation/latest/versions.html) chapter in the User Guide for upgrade instructions.

**Note**: This release requires use of Java 11 or above.


## Bugs Fixed

* [ARTEMIS-4785](https://issues.apache.org/jira/browse/ARTEMIS-4785) - Isolate broker run command Log4j and profile config from other CLI commands
* [ARTEMIS-4939](https://issues.apache.org/jira/browse/ARTEMIS-4939) - Allow configuring request &amp; response header sizes for embedded web server
* [ARTEMIS-4952](https://issues.apache.org/jira/browse/ARTEMIS-4952) - JMX countMessages: groupBy not working on AMQP messages
* [ARTEMIS-4959](https://issues.apache.org/jira/browse/ARTEMIS-4959) - moveMessages operation can move more messages than max messageCount
* [ARTEMIS-4960](https://issues.apache.org/jira/browse/ARTEMIS-4960) - Ubuntu package name change preventing Docker image build
* [ARTEMIS-4969](https://issues.apache.org/jira/browse/ARTEMIS-4969) - FQQN Security settings not honored when an AMQP Sender attaches
* [ARTEMIS-4973](https://issues.apache.org/jira/browse/ARTEMIS-4973) - pageSizeBytes/pageLimitBytes combination can cause Address full
* [ARTEMIS-4982](https://issues.apache.org/jira/browse/ARTEMIS-4982) - AMQP Large message files not removed immediately on failed sends
* [ARTEMIS-4985](https://issues.apache.org/jira/browse/ARTEMIS-4985) - Message priority occasionally broken
* [ARTEMIS-4986](https://issues.apache.org/jira/browse/ARTEMIS-4986) - Replication/Vote incompatibility between versions up to 2.31.2 (inclusive) and 2.32.0 - 2.36.0

## Improvements

* [ARTEMIS-4909](https://issues.apache.org/jira/browse/ARTEMIS-4909) - update category names for "Reloading configuration"
* [ARTEMIS-4955](https://issues.apache.org/jira/browse/ARTEMIS-4955) - Support broker properties from JSON files
* [ARTEMIS-4963](https://issues.apache.org/jira/browse/ARTEMIS-4963) - Reject openwire senders that lack SEND permissions on attach

## Tests

* [ARTEMIS-4964](https://issues.apache.org/jira/browse/ARTEMIS-4964) - Add FAST ACK tests with OpenWire, AMQP and OpenWire

## Tasks

* [ARTEMIS-4980](https://issues.apache.org/jira/browse/ARTEMIS-4980) - adjust build handling of module sources jars

## Dependency Upgrades

* [ARTEMIS-4976](https://issues.apache.org/jira/browse/ARTEMIS-4976) - update to testcontainers 1.20.1
* [ARTEMIS-4977](https://issues.apache.org/jira/browse/ARTEMIS-4977) - update jgroups to 5.3.10
* [ARTEMIS-4979](https://issues.apache.org/jira/browse/ARTEMIS-4979) - update asciidoctorj-pdf to 2.3.18
* [ARTEMIS-4981](https://issues.apache.org/jira/browse/ARTEMIS-4981) - update commons-lang3 to 3.16.0
* [ARTEMIS-4984](https://issues.apache.org/jira/browse/ARTEMIS-4984) - Update to ErrorProne 2.30.0
* [ARTEMIS-4987](https://issues.apache.org/jira/browse/ARTEMIS-4987) - Bump org.easymock:easymock from 5.3.0 to 5.4.0
* [ARTEMIS-4988](https://issues.apache.org/jira/browse/ARTEMIS-4988) - Bump org.hamcrest:hamcrest from 2.2 to 3.0
* [ARTEMIS-4989](https://issues.apache.org/jira/browse/ARTEMIS-4989) - Bump slf4j.version from 2.0.13 to 2.0.16
* [ARTEMIS-4990](https://issues.apache.org/jira/browse/ARTEMIS-4990) - Bump selenium.version from 4.23.0 to 4.23.1
* [ARTEMIS-4991](https://issues.apache.org/jira/browse/ARTEMIS-4991) - Bump io.micrometer:micrometer-core from 1.13.2 to 1.13.3
* [ARTEMIS-4992](https://issues.apache.org/jira/browse/ARTEMIS-4992) - Bump org.codehaus.mojo:exec-maven-plugin from 3.3.0 to 3.4.1
* [ARTEMIS-4994](https://issues.apache.org/jira/browse/ARTEMIS-4994) - update to Spring 5.3.39