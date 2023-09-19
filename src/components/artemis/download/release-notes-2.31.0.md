---
layout: default_md
title: ActiveMQ Artemis 2.31.0 Release Notes
title-class: page-title-artemis
type: artemis
---

 - [A complete list of JIRAs](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12315920&version=12353446) for the 2.31.0 release.

 - [A list of commits](commit-report-2.31.0).

 - Please see the ["Versions"](https://activemq.apache.org/components/artemis/documentation/latest/versions.html) chapter in the User Guide for upgrade instructions.

**Note**: This release requires use of Java 11 or above.

Release Notes - ActiveMQ Artemis - Version 2.31.0

## Bug
* [ARTEMIS-4174] - JMX RMI connector-ports limited to localhost listen for remote connections
* [ARTEMIS-4370] - Publishing message with existing topic alias and different topic causes message to be sent to incorrect topic
* [ARTEMIS-4382] - CLI import / export may take a huge amount of time in large datasets.
* [ARTEMIS-4387] - Empty consumer filter string leak
* [ARTEMIS-4389] - The word "mesage" should be corrected to "message"
* [ARTEMIS-4390] - Windows build fails smoke tests on upgrade-linux
* [ARTEMIS-4394] - management console war file contains some duplicate jars
* [ARTEMIS-4397] - Problem with bootstrap.xml after artemis upgrade
* [ARTEMIS-4399] - Authentication cache set to size 0 (i.e. disabled) is not threadsafe
* [ARTEMIS-4400] - artemis-cdi-client: artemis-unit-test-support should be in test scope
* [ARTEMIS-4405] - Incorrect username logging in AMQ601264 events
* [ARTEMIS-4406] - connection router LocalCache persisted entry tracking is not thread safe
* [ARTEMIS-4410] - Openwire prefetched messages can be out of order after failover to an exclusive queue
* [ARTEMIS-4415] - org.apache.activemq.artemis.tests.integration.server.LVQTest#testMultipleMessages fails intermittently
* [ARTEMIS-4417] - AbstractJournalStorageManager storeKeyValuePair + deleteKeyValuePair are not thread safe
* [ARTEMIS-4418] - openwire lastDeliveredSequenceId depends on message order, it should not
* [ARTEMIS-4421] - Page Counters are not working before rebuild is done
* [ARTEMIS-4424] - "AMQ212025: did not connect the cluster" when bootstrapping a static cluster
* [ARTEMIS-4427] - MDB reusing Thread is using wrong transactionTimeout
* [ARTEMIS-4431] - AMQP federated address consumer not applying hops annotation correctly


## New Feature
* [ARTEMIS-3057] - Provide alternative to max-disk-usage to measure by remaining disk free
* [ARTEMIS-4159] - Support duplicate cache size configuration per address
* [ARTEMIS-4372] - Move CLI framework to picocli and implement auto-complete
* [ARTEMIS-4375] - JLine3 integration
* [ARTEMIS-4384] - CLI method to verify topology on all the nodes (cluster verify)
* [ARTEMIS-4385] - Expand queue stat to other members of the topology
* [ARTEMIS-4419] - Add broker federation support to the AMQP broker connection feature-set


## Improvement
* [ARTEMIS-966] - MQTT Session States do not survive a reboot
* [ARTEMIS-4349] - Replace Guava cache with Caffeine
* [ARTEMIS-4368] - ensure predictable order of subjects for accurate logging
* [ARTEMIS-4378] - Federation, ignore address policy when using pull consumer connection
* [ARTEMIS-4391] - tests: rework AssertionLoggerHandler
* [ARTEMIS-4396] - Make address/queue "internal" property durable
* [ARTEMIS-4398] - Support configuring Database with Broker Properties
* [ARTEMIS-4401] - Improving Paging & JDBC Performance
* [ARTEMIS-4404] - Update the artemis-docker readme.md with minor clarification on building local distribution
* [ARTEMIS-4408] - Update docker-run.sh for overriding etc folder after instance creation
* [ARTEMIS-4411] - Change log level from  ActiveMQRALogger.instantiatingDestination to DEBUG
* [ARTEMIS-4428] - Expand default loggers configuration

## Test
* [ARTEMIS-4402] - add unit tests to exercise semi-generated LogBundle code more directly
* [ARTEMIS-4412] - openwire TwoBrokerFailoverClusterTest test fails sporadically
* [ARTEMIS-4413] - CheckTest.testNodeCheckTopology fails sporadically

## Task
* [ARTEMIS-4369] - add clarifying note to docs around transport options for broker-connections
* [ARTEMIS-4376] - Add Dockerfile for Alpine + JRE 11
* [ARTEMIS-4377] - Add script for pushing docker images for a release
* [ARTEMIS-4383] - Migrate user docs to AsciiDoc
* [ARTEMIS-4386] - consolidate used servlet-api deps
* [ARTEMIS-4388] - Add a test with TopicSubscription and redistribution OFF and OFF_WITH_REDISTRIBUTION
* [ARTEMIS-4409] - Update examples to use management.xml

## Dependency upgrade
* [ARTEMIS-4355] - Update to Сurator 5.5.0 and Zookeeper 3.8.2
* [ARTEMIS-4373] - Upgrade Karaf to 4.4.3
* [ARTEMIS-4374] - Upgrade Pax Exam to 4.13.5
* [ARTEMIS-4392] - Upgrade Netty to 4.1.96.Final
* [ARTEMIS-4395] - Upgrade example spring-boot-plugin version to 2.6.15
* [ARTEMIS-4423] - Upgrade Netty to 4.1.97.Final
* [ARTEMIS-4425] - Upgrade Hawtio to 2.17.6

