---
layout: default_md
title: ActiveMQ Artemis 2.40.0 Release Notes
title-class: page-title-artemis
type: artemis
---
 - [A list of commits](commit-report-2.40.0).

 - Please see the ["Versions"](https://activemq.apache.org/components/artemis/documentation/latest/versions.html) chapter in the User Guide for upgrade instructions.

**Note**: This release requires use of Java 17 or above.


## Bugs Fixed

* [ARTEMIS-3642](https://issues.apache.org/jira/browse/ARTEMIS-3642) - Management Console -&gt; Browse Queue -&gt; [] Select All broken after first use
* [ARTEMIS-4926](https://issues.apache.org/jira/browse/ARTEMIS-4926) - Throw checked URISyntaxException on bad URL
* [ARTEMIS-5002](https://issues.apache.org/jira/browse/ARTEMIS-5002) - AMQP producer not unblock if the disk space is freed
* [ARTEMIS-5036](https://issues.apache.org/jira/browse/ARTEMIS-5036) - Performance regression with Micrometer 
* [ARTEMIS-5053](https://issues.apache.org/jira/browse/ARTEMIS-5053) - OOME during scaledown
* [ARTEMIS-5094](https://issues.apache.org/jira/browse/ARTEMIS-5094) - potential null dereference in QueueImpl
* [ARTEMIS-5107](https://issues.apache.org/jira/browse/ARTEMIS-5107) - Using uninitialized value in ReplicationStartSyncMessage
* [ARTEMIS-5115](https://issues.apache.org/jira/browse/ARTEMIS-5115) - remove needless null checks in ChannelImpl
* [ARTEMIS-5119](https://issues.apache.org/jira/browse/ARTEMIS-5119) - Messages that expire in store-and-forward (sf-) queues should go to original queue's configured expiry queue
* [ARTEMIS-5133](https://issues.apache.org/jira/browse/ARTEMIS-5133) - FB.UWF_UNWRITTEN_FIELD in ArtemisClientPlugin.java
* [ARTEMIS-5147](https://issues.apache.org/jira/browse/ARTEMIS-5147) - Unreachable code in ClientSessionFactoryImpl.java
* [ARTEMIS-5164](https://issues.apache.org/jira/browse/ARTEMIS-5164) - AMQ222225: Sending unexpected exception to the client.Message count failure
* [ARTEMIS-5182](https://issues.apache.org/jira/browse/ARTEMIS-5182) - STOMP subscriber w/noLocal + selector missing messages
* [ARTEMIS-5183](https://issues.apache.org/jira/browse/ARTEMIS-5183) - STOMP noLocal filter ignores legitimate messages
* [ARTEMIS-5184](https://issues.apache.org/jira/browse/ARTEMIS-5184) - STOMP noLocal is scoped to session not subscription
* [ARTEMIS-5215](https://issues.apache.org/jira/browse/ARTEMIS-5215) - AMQP Federation Queue Consumer can leave a duplicate message on remote broker
* [ARTEMIS-5218](https://issues.apache.org/jira/browse/ARTEMIS-5218) - Stomp Heart beat restarted after shutdown
* [ARTEMIS-5219](https://issues.apache.org/jira/browse/ARTEMIS-5219) - The KubernetesClientImpl doesn't load all CA certs, can lead to TLS failure during token review
* [ARTEMIS-5226](https://issues.apache.org/jira/browse/ARTEMIS-5226) - Jetty choking on bad URI
* [ARTEMIS-5232](https://issues.apache.org/jira/browse/ARTEMIS-5232) - Cleanup the test suite for speed
* [ARTEMIS-5241](https://issues.apache.org/jira/browse/ARTEMIS-5241) - Remove useless validation for cluster-connection confirmation-window-size
* [ARTEMIS-5248](https://issues.apache.org/jira/browse/ARTEMIS-5248) - Audit log user string contains just the last role rather than the full list 
* [ARTEMIS-5249](https://issues.apache.org/jira/browse/ARTEMIS-5249) - Broker chokes on pong WebSocket frames
* [ARTEMIS-5280](https://issues.apache.org/jira/browse/ARTEMIS-5280) - Metrics manager doesn't inspect temp queue namespace
* [ARTEMIS-5303](https://issues.apache.org/jira/browse/ARTEMIS-5303) - -1 on AddressSettings messages and page sizes means null value (that will be translated as default values)
* [ARTEMIS-5308](https://issues.apache.org/jira/browse/ARTEMIS-5308) - Messages are blocked after sending too large header
* [ARTEMIS-5310](https://issues.apache.org/jira/browse/ARTEMIS-5310) - Check class of Principals in Subject
* [ARTEMIS-5326](https://issues.apache.org/jira/browse/ARTEMIS-5326) - Expose prefetch and maxread paging values into Address Control
* [ARTEMIS-5330](https://issues.apache.org/jira/browse/ARTEMIS-5330) - Use proper address name on retroactive messages
* [ARTEMIS-5338](https://issues.apache.org/jira/browse/ARTEMIS-5338) - Flow control between Mirror Target and AckManager's size
* [ARTEMIS-5340](https://issues.apache.org/jira/browse/ARTEMIS-5340) - PEM provider not actually optional
* [ARTEMIS-5346](https://issues.apache.org/jira/browse/ARTEMIS-5346) - Check routing-type when creating queue

## New Features

* [ARTEMIS-5292](https://issues.apache.org/jira/browse/ARTEMIS-5292) - Introduce jakarta version of artemis-cdi-client
* [ARTEMIS-5319](https://issues.apache.org/jira/browse/ARTEMIS-5319) - Updated and Improved Web Console
* [ARTEMIS-5347](https://issues.apache.org/jira/browse/ARTEMIS-5347) - Support environment variable substitution in bootstrap.xml

## Improvements

* [ARTEMIS-5100](https://issues.apache.org/jira/browse/ARTEMIS-5100) - Add support for modifying journal-max-io to create CLI command
* [ARTEMIS-5139](https://issues.apache.org/jira/browse/ARTEMIS-5139) - Improve locking on TypedProperties
* [ARTEMIS-5142](https://issues.apache.org/jira/browse/ARTEMIS-5142) - support never expiring incoming messages
* [ARTEMIS-5250](https://issues.apache.org/jira/browse/ARTEMIS-5250) - AMQP Federation management views for sent and receive counts and producer views
* [ARTEMIS-5258](https://issues.apache.org/jira/browse/ARTEMIS-5258) - Custom list of browsers to execute console smoke tests
* [ARTEMIS-5279](https://issues.apache.org/jira/browse/ARTEMIS-5279) - Add AMQP Federation management views for the remote broker
* [ARTEMIS-5302](https://issues.apache.org/jira/browse/ARTEMIS-5302) - Use QueueConfiguration more
* [ARTEMIS-5304](https://issues.apache.org/jira/browse/ARTEMIS-5304) - Allow AMQP Federation consumer to idle for a period of time when demand is removed
* [ARTEMIS-5305](https://issues.apache.org/jira/browse/ARTEMIS-5305) - Improve performance on paging for multiple producers and optimize locking
* [ARTEMIS-5314](https://issues.apache.org/jira/browse/ARTEMIS-5314) - overhaul JavaDoc formatting &amp; content
* [ARTEMIS-5320](https://issues.apache.org/jira/browse/ARTEMIS-5320) - Expose session count metrics
* [ARTEMIS-5321](https://issues.apache.org/jira/browse/ARTEMIS-5321) - Expose address limit percent via metrics
* [ARTEMIS-5332](https://issues.apache.org/jira/browse/ARTEMIS-5332) - add exportConfigAsProperties operation to server control
* [ARTEMIS-5333](https://issues.apache.org/jira/browse/ARTEMIS-5333) - add support for setting global max size percent of jvm max memory
* [ARTEMIS-5339](https://issues.apache.org/jira/browse/ARTEMIS-5339) - Adjust AMQP federation configuration to avoid accidental federation receiver loops
* [ARTEMIS-5342](https://issues.apache.org/jira/browse/ARTEMIS-5342) - Exposing pending ack sizes from mirror on management attributes

## Tests

* [ARTEMIS-5214](https://issues.apache.org/jira/browse/ARTEMIS-5214) - Test improvements, follow up to ARTEMIS-5173

## Tasks

* [ARTEMIS-5209](https://issues.apache.org/jira/browse/ARTEMIS-5209) - Tweak duplicate detection docs, improve AMQP test
* [ARTEMIS-5233](https://issues.apache.org/jira/browse/ARTEMIS-5233) - Make style for commas consistent
* [ARTEMIS-5234](https://issues.apache.org/jira/browse/ARTEMIS-5234) - Make style for parentheses consistent
* [ARTEMIS-5259](https://issues.apache.org/jira/browse/ARTEMIS-5259) - Don't expose port 9404 in Docker
* [ARTEMIS-5263](https://issues.apache.org/jira/browse/ARTEMIS-5263) - Remove unused Docker directives
* [ARTEMIS-5266](https://issues.apache.org/jira/browse/ARTEMIS-5266) - Code gardening after move to Java 17
* [ARTEMIS-5282](https://issues.apache.org/jira/browse/ARTEMIS-5282) - Remove deprecated QueueImpl constructors
* [ARTEMIS-5283](https://issues.apache.org/jira/browse/ARTEMIS-5283) - Tune up JUnit tests
* [ARTEMIS-5312](https://issues.apache.org/jira/browse/ARTEMIS-5312) - Reduce build-time warnings for JavaDoc
* [ARTEMIS-5315](https://issues.apache.org/jira/browse/ARTEMIS-5315) - Get rid of unnecessary code in InetAddresses
* [ARTEMIS-5327](https://issues.apache.org/jira/browse/ARTEMIS-5327) - Document option to use environment variables in config

## Dependency Upgrades

* [ARTEMIS-5222](https://issues.apache.org/jira/browse/ARTEMIS-5222) - Bump com.puppycrawl.tools:checkstyle from 10.20.2 to 10.21.0
* [ARTEMIS-5223](https://issues.apache.org/jira/browse/ARTEMIS-5223) - Bump log4j.version from 2.24.2 to 2.24.3
* [ARTEMIS-5224](https://issues.apache.org/jira/browse/ARTEMIS-5224) - Bump org.apache.commons:commons-text from 1.12.0 to 1.13.0
* [ARTEMIS-5225](https://issues.apache.org/jira/browse/ARTEMIS-5225) - Update to JUnit 5.11.4
* [ARTEMIS-5227](https://issues.apache.org/jira/browse/ARTEMIS-5227) - Bump com.google.guava:guava from 33.3.1-jre to 33.4.0-jre
* [ARTEMIS-5228](https://issues.apache.org/jira/browse/ARTEMIS-5228) - Update to Netty 4.1.119.Final
* [ARTEMIS-5229](https://issues.apache.org/jira/browse/ARTEMIS-5229) - Bump com.puppycrawl.tools:checkstyle from 10.20.2 to 10.21.4
* [ARTEMIS-5230](https://issues.apache.org/jira/browse/ARTEMIS-5230) - Bump mockito.version from 5.14.2 to 5.16.0
* [ARTEMIS-5231](https://issues.apache.org/jira/browse/ARTEMIS-5231) - Bump commons-codec:commons-codec from 1.17.1 to 1.18.0
* [ARTEMIS-5235](https://issues.apache.org/jira/browse/ARTEMIS-5235) - Bump commons-beanutils:commons-beanutils from 1.9.4 to 1.10.1
* [ARTEMIS-5236](https://issues.apache.org/jira/browse/ARTEMIS-5236) - Bump byteman.version from 4.0.23 to 4.0.24
* [ARTEMIS-5243](https://issues.apache.org/jira/browse/ARTEMIS-5243) - Bump owasp.version from 11.1.1 to 12.1.0
* [ARTEMIS-5244](https://issues.apache.org/jira/browse/ARTEMIS-5244) - Bump org.jboss.marshalling:jboss-marshalling-river from 2.2.1.Final to 2.2.2.Final
* [ARTEMIS-5245](https://issues.apache.org/jira/browse/ARTEMIS-5245) - Bump io.micrometer:micrometer-core from 1.14.2 to 1.14.4
* [ARTEMIS-5246](https://issues.apache.org/jira/browse/ARTEMIS-5246) - Bump org.postgresql:postgresql from 42.7.4 to 42.7.5
* [ARTEMIS-5247](https://issues.apache.org/jira/browse/ARTEMIS-5247) - Bump bc-java-version from 1.79 to 1.80
* [ARTEMIS-5256](https://issues.apache.org/jira/browse/ARTEMIS-5256) - Bump com.github.ben-manes.caffeine:caffeine from 3.1.8 to 3.2.0
* [ARTEMIS-5257](https://issues.apache.org/jira/browse/ARTEMIS-5257) - Bump selenium.version from 4.27.0 to 4.29.0
* [ARTEMIS-5264](https://issues.apache.org/jira/browse/ARTEMIS-5264) - Update to groovy 4.0.25
* [ARTEMIS-5265](https://issues.apache.org/jira/browse/ARTEMIS-5265) - Update to karaf 4.4.7
* [ARTEMIS-5300](https://issues.apache.org/jira/browse/ARTEMIS-5300) - Bump org.jline:jline from 3.28.0 to 3.29.0
* [ARTEMIS-5301](https://issues.apache.org/jira/browse/ARTEMIS-5301) - Bump org.apache.commons:commons-pool2 from 2.12.0 to 2.12.1
* [ARTEMIS-5309](https://issues.apache.org/jira/browse/ARTEMIS-5309) - Bump commons-logging:commons-logging from 1.3.4 to 1.3.5
* [ARTEMIS-5317](https://issues.apache.org/jira/browse/ARTEMIS-5317) - Update to qpid-jms 1.13.0
* [ARTEMIS-5318](https://issues.apache.org/jira/browse/ARTEMIS-5318) - Update Qpid protonj2 to version 1.0.0-M23
* [ARTEMIS-5328](https://issues.apache.org/jira/browse/ARTEMIS-5328) - Bump testcontainers.version from 1.20.4 to 1.20.6
* [ARTEMIS-5329](https://issues.apache.org/jira/browse/ARTEMIS-5329) - Bump org.junit:junit-bom from 5.11.4 to 5.12.0
* [ARTEMIS-5331](https://issues.apache.org/jira/browse/ARTEMIS-5331) - Bump slf4j.version from 2.0.16 to 2.0.17
* [ARTEMIS-5335](https://issues.apache.org/jira/browse/ARTEMIS-5335) - Bump jackson.version from 2.18.2 to 2.18.3
* [ARTEMIS-5336](https://issues.apache.org/jira/browse/ARTEMIS-5336) - Bump org.apache.groovy:groovy-all from 4.0.25 to 4.0.26
* [ARTEMIS-5345](https://issues.apache.org/jira/browse/ARTEMIS-5345) - Upgrade keycloak version in security-keycloak example to 24.0.5
* [ARTEMIS-5348](https://issues.apache.org/jira/browse/ARTEMIS-5348) - Update to activemq 5.19.0