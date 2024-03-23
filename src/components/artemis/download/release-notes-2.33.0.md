---
layout: default_md
title: ActiveMQ Artemis 2.33.0 Release Notes
title-class: page-title-artemis
type: artemis
---
 - [A list of commits](commit-report-2.33.0).

 - Please see the ["Versions"](https://activemq.apache.org/components/artemis/documentation/latest/versions.html) chapter in the User Guide for upgrade instructions.

**Note**: This release requires use of Java 11 or above.


## Bugs Fixed

* [ARTEMIS-4187](https://issues.apache.org/jira/browse/ARTEMIS-4187) - SizeAwareMetric attribute inconsistency
* [ARTEMIS-4527](https://issues.apache.org/jira/browse/ARTEMIS-4527) - Redistributor race when consumerCount reaches 0 in cluster
* [ARTEMIS-4532](https://issues.apache.org/jira/browse/ARTEMIS-4532) - MQTT-to-core wildcard conversion is broken
* [ARTEMIS-4585](https://issues.apache.org/jira/browse/ARTEMIS-4585) - Mirror may fail with previously created SNF queues if metrics plugin is in use
* [ARTEMIS-4588](https://issues.apache.org/jira/browse/ARTEMIS-4588) - Queue Federation and large messages move slowdown
* [ARTEMIS-4626](https://issues.apache.org/jira/browse/ARTEMIS-4626) - AMQP Federation demand tracking can overcount demand
* [ARTEMIS-4629](https://issues.apache.org/jira/browse/ARTEMIS-4629) - Core bridge configuration validation errors
* [ARTEMIS-4638](https://issues.apache.org/jira/browse/ARTEMIS-4638) - Remove bashism from install validation script
* [ARTEMIS-4639](https://issues.apache.org/jira/browse/ARTEMIS-4639) - Artemis Cluster and NullpointerException in "sending topology"
* [ARTEMIS-4642](https://issues.apache.org/jira/browse/ARTEMIS-4642) - AMQP Federation demand tracking can under count demand in some narrow cases
* [ARTEMIS-4646](https://issues.apache.org/jira/browse/ARTEMIS-4646) - Unacknowledged MQTT message ID is reused after ID generator wraparound
* [ARTEMIS-4647](https://issues.apache.org/jira/browse/ARTEMIS-4647) - Use specified call-timeout on backup connector
* [ARTEMIS-4649](https://issues.apache.org/jira/browse/ARTEMIS-4649) - STOMP message IDs are not unique when same message is received on multiple subscriptions
* [ARTEMIS-4652](https://issues.apache.org/jira/browse/ARTEMIS-4652) - Rollback of XAResource implementation should never return XA_RETRY
* [ARTEMIS-4664](https://issues.apache.org/jira/browse/ARTEMIS-4664) - autoCreatedResource can get removed while receiving batch of messages
* [ARTEMIS-4668](https://issues.apache.org/jira/browse/ARTEMIS-4668) - Move AMQP Large Message File Handling away from Netty thread
* [ARTEMIS-4670](https://issues.apache.org/jira/browse/ARTEMIS-4670) - Slow performance with Core large messages and JDBC
* [ARTEMIS-4676](https://issues.apache.org/jira/browse/ARTEMIS-4676) - Use ActionContext consistently for logging in CLI commands
* [ARTEMIS-4677](https://issues.apache.org/jira/browse/ARTEMIS-4677) - Validate AutoCreate queues with Mirroring and Clustering
* [ARTEMIS-4678](https://issues.apache.org/jira/browse/ARTEMIS-4678) - JDBC User and password is not used by CLI Exporter
* [ARTEMIS-4682](https://issues.apache.org/jira/browse/ARTEMIS-4682) - JDBC Storage slow to reboot the server
* [ARTEMIS-4684](https://issues.apache.org/jira/browse/ARTEMIS-4684) - Internal queues should not have message redistributed
* [ARTEMIS-4687](https://issues.apache.org/jira/browse/ARTEMIS-4687) - Concurrent use of DocumentBuilder breaking Xpath filtering
* [ARTEMIS-4689](https://issues.apache.org/jira/browse/ARTEMIS-4689) - Import command should accept URL
* [ARTEMIS-4691](https://issues.apache.org/jira/browse/ARTEMIS-4691) - AMQ212037 warning when closing any in-vm connection
* [ARTEMIS-4695](https://issues.apache.org/jira/browse/ARTEMIS-4695) - Fix a few bugs found via static analysis

## New Features

* [ARTEMIS-4648](https://issues.apache.org/jira/browse/ARTEMIS-4648) - Support typed properties on CLI producer
* [ARTEMIS-4650](https://issues.apache.org/jira/browse/ARTEMIS-4650) - CLI command PWD showing current folders.

## Improvements

* [ARTEMIS-1230](https://issues.apache.org/jira/browse/ARTEMIS-1230) - Create Maven Bill of Materials (BOM)
* [ARTEMIS-4579](https://issues.apache.org/jira/browse/ARTEMIS-4579) - Add the *FirstMessage* API for scheduled messages
* [ARTEMIS-4582](https://issues.apache.org/jira/browse/ARTEMIS-4582) - add view and edit permissions to extend security-settings rbac for management operations
* [ARTEMIS-4586](https://issues.apache.org/jira/browse/ARTEMIS-4586) - Auto reload web binding SSL stores on change
* [ARTEMIS-4587](https://issues.apache.org/jira/browse/ARTEMIS-4587) - Config security setting plugins by using broker properties
* [ARTEMIS-4627](https://issues.apache.org/jira/browse/ARTEMIS-4627) - Oracle tests now can use publicly "maven central" available JDBC drivers.
* [ARTEMIS-4637](https://issues.apache.org/jira/browse/ARTEMIS-4637) - Allow unordered xml conf elements for clusters and bridges
* [ARTEMIS-4641](https://issues.apache.org/jira/browse/ARTEMIS-4641) - Allow AMQP federation to recover from missing or removed resources
* [ARTEMIS-4651](https://issues.apache.org/jira/browse/ARTEMIS-4651) - Performance improvements on Mirror and Paging
* [ARTEMIS-4653](https://issues.apache.org/jira/browse/ARTEMIS-4653) - AMQP Federation should apply queue consumer filters for demand
* [ARTEMIS-4655](https://issues.apache.org/jira/browse/ARTEMIS-4655) - Report logging metrics
* [ARTEMIS-4657](https://issues.apache.org/jira/browse/ARTEMIS-4657) - Support better correlation ID compatibility between JMS clients
* [ARTEMIS-4658](https://issues.apache.org/jira/browse/ARTEMIS-4658) - AMQP Federation should prevent reflection of multicast messages between nodes
* [ARTEMIS-4679](https://issues.apache.org/jira/browse/ARTEMIS-4679) - Config HA policy by using broker properties
* [ARTEMIS-4686](https://issues.apache.org/jira/browse/ARTEMIS-4686) - Reduce number of FilterImpl instances
* [ARTEMIS-4690](https://issues.apache.org/jira/browse/ARTEMIS-4690) - Remove deprecated StorageManager.addAddressSettings from codebase.
* [ARTEMIS-4693](https://issues.apache.org/jira/browse/ARTEMIS-4693) - Improve XPath filter performance

## Tasks

* [ARTEMIS-4559](https://issues.apache.org/jira/browse/ARTEMIS-4559) - Refactor HA docs &amp; code/module naming
* [ARTEMIS-4583](https://issues.apache.org/jira/browse/ARTEMIS-4583) - remove artemis-server module test-jar, do some related cleanup
* [ARTEMIS-4589](https://issues.apache.org/jira/browse/ARTEMIS-4589) - consolidate utility code and remove test-jar usages within tests/ subtree
* [ARTEMIS-4592](https://issues.apache.org/jira/browse/ARTEMIS-4592) - Detect possible dependency updates
* [ARTEMIS-4601](https://issues.apache.org/jira/browse/ARTEMIS-4601) - Remove OpenTelemetry deps from main pom
* [ARTEMIS-4640](https://issues.apache.org/jira/browse/ARTEMIS-4640) - move extension added to aid 'offline' maven usage into a profile
* [ARTEMIS-4644](https://issues.apache.org/jira/browse/ARTEMIS-4644) - convert some broker-connection tests to use test peer
* [ARTEMIS-4645](https://issues.apache.org/jira/browse/ARTEMIS-4645) - Update AMQP broker connection tests to use better connector names
* [ARTEMIS-4656](https://issues.apache.org/jira/browse/ARTEMIS-4656) - Remove superfluous artemis-spring-integration module
* [ARTEMIS-4665](https://issues.apache.org/jira/browse/ARTEMIS-4665) - Fix intermittent failures in a few AMQP federation tests
* [ARTEMIS-4669](https://issues.apache.org/jira/browse/ARTEMIS-4669) - Clarify Large Messages around StorageManager usage
* [ARTEMIS-4683](https://issues.apache.org/jira/browse/ARTEMIS-4683) - Add additional examples for AMQP federation

## Dependency Upgrades

* [ARTEMIS-4591](https://issues.apache.org/jira/browse/ARTEMIS-4591) - Upgrade Netty to 4.1.106.Final
* [ARTEMIS-4593](https://issues.apache.org/jira/browse/ARTEMIS-4593) - Upgrade Caffeine to 3.1.8
* [ARTEMIS-4594](https://issues.apache.org/jira/browse/ARTEMIS-4594) - Upgrade Error Prone to 2.24.1
* [ARTEMIS-4595](https://issues.apache.org/jira/browse/ARTEMIS-4595) - Upgrade Guava to 33.0.0-jre
* [ARTEMIS-4596](https://issues.apache.org/jira/browse/ARTEMIS-4596) - Upgrade Commons Codec to 1.16.0
* [ARTEMIS-4597](https://issues.apache.org/jira/browse/ARTEMIS-4597) - Upgrade Commons IO to 2.15.1
* [ARTEMIS-4598](https://issues.apache.org/jira/browse/ARTEMIS-4598) - Upgrade Commons Logging to 1.3.0
* [ARTEMIS-4599](https://issues.apache.org/jira/browse/ARTEMIS-4599) - Upgrade PEM Keystore to 2.3.0
* [ARTEMIS-4600](https://issues.apache.org/jira/browse/ARTEMIS-4600) - Upgrade Micrometer to 1.12.2
* [ARTEMIS-4602](https://issues.apache.org/jira/browse/ARTEMIS-4602) - Upgrade Jetty to 10.0.20
* [ARTEMIS-4603](https://issues.apache.org/jira/browse/ARTEMIS-4603) - Upgrade JavaCC to 7.0.13
* [ARTEMIS-4604](https://issues.apache.org/jira/browse/ARTEMIS-4604) - Upgrade Commons DBCP2 to 2.11.0 and Commons Pool to 2.12.0
* [ARTEMIS-4605](https://issues.apache.org/jira/browse/ARTEMIS-4605) - Upgrade Commons Lang to 3.14.0
* [ARTEMIS-4606](https://issues.apache.org/jira/browse/ARTEMIS-4606) - Upgrade Commons Text to 1.11.0
* [ARTEMIS-4607](https://issues.apache.org/jira/browse/ARTEMIS-4607) - Upgrade Curator to 5.6.0
* [ARTEMIS-4608](https://issues.apache.org/jira/browse/ARTEMIS-4608) - Upgrade Derby to 10.15.2.0
* [ARTEMIS-4609](https://issues.apache.org/jira/browse/ARTEMIS-4609) - Upgrade Log4j to 2.22.1
* [ARTEMIS-4610](https://issues.apache.org/jira/browse/ARTEMIS-4610) - Upgrade ZooKeeper to 3.9.1
* [ARTEMIS-4611](https://issues.apache.org/jira/browse/ARTEMIS-4611) - Upgrade BouncyCastle to 1.77
* [ARTEMIS-4612](https://issues.apache.org/jira/browse/ARTEMIS-4612) - Upgrade EasyMock to 5.2.0
* [ARTEMIS-4613](https://issues.apache.org/jira/browse/ARTEMIS-4613) - Upgrade Jansi to 2.4.1
* [ARTEMIS-4614](https://issues.apache.org/jira/browse/ARTEMIS-4614) - Upgrade Jacoco to 0.8.11
* [ARTEMIS-4615](https://issues.apache.org/jira/browse/ARTEMIS-4615) - Upgrade JCTools to 4.0.2
* [ARTEMIS-4616](https://issues.apache.org/jira/browse/ARTEMIS-4616) - Upgrade JGroups to 5.3.2.Final
* [ARTEMIS-4617](https://issues.apache.org/jira/browse/ARTEMIS-4617) - Upgrade JLine to 3.25.1
* [ARTEMIS-4618](https://issues.apache.org/jira/browse/ARTEMIS-4618) - Upgrade JUnit to 5.10.1
* [ARTEMIS-4619](https://issues.apache.org/jira/browse/ARTEMIS-4619) - Upgrade Mockito to 5.10.0
* [ARTEMIS-4620](https://issues.apache.org/jira/browse/ARTEMIS-4620) - Upgrade OWASP to 9.0.9
* [ARTEMIS-4621](https://issues.apache.org/jira/browse/ARTEMIS-4621) - Upgrade PostgreSQL to 42.7.2
* [ARTEMIS-4622](https://issues.apache.org/jira/browse/ARTEMIS-4622) - Upgrade Selenium to 4.17.0
* [ARTEMIS-4623](https://issues.apache.org/jira/browse/ARTEMIS-4623) - Upgrade SLF4J to 2.0.11
* [ARTEMIS-4624](https://issues.apache.org/jira/browse/ARTEMIS-4624) - Upgrade TestContainers to 1.19.4
* [ARTEMIS-4631](https://issues.apache.org/jira/browse/ARTEMIS-4631) - Upgrade Spring to 5.3.33
* [ARTEMIS-4632](https://issues.apache.org/jira/browse/ARTEMIS-4632) - Upgrade Apache HTTP Client to 4.5.14
* [ARTEMIS-4633](https://issues.apache.org/jira/browse/ARTEMIS-4633) - Upgrade Apache HTTP Core to 4.4.16
* [ARTEMIS-4634](https://issues.apache.org/jira/browse/ARTEMIS-4634) - Upgrade Maven Plugin Annotations to 3.11.0
* [ARTEMIS-4635](https://issues.apache.org/jira/browse/ARTEMIS-4635) - Upgrade Arquillian &amp; Weld dependencies
* [ARTEMIS-4636](https://issues.apache.org/jira/browse/ARTEMIS-4636) - Upgrade OpenWebBeans to 2.0.27
* [ARTEMIS-4672](https://issues.apache.org/jira/browse/ARTEMIS-4672) - Upgrade Netty to 4.107.Final