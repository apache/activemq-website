---
layout: default_md
title: ActiveMQ Artemis 2.39.0 Release Notes
title-class: page-title-artemis
type: artemis
---
 - [A list of commits](commit-report-2.39.0).

 - Please see the ["Versions"](https://activemq.apache.org/components/artemis/documentation/latest/versions.html) chapter in the User Guide for upgrade instructions.

**Note**: This release requires use of Java 17 or above.


## Bugs Fixed

* [ARTEMIS-5104](https://issues.apache.org/jira/browse/ARTEMIS-5104) - Remove unused variables
* [ARTEMIS-5106](https://issues.apache.org/jira/browse/ARTEMIS-5106) - Exception thrown from plugin in beforeSend method is not propagated to AMQP tx clients on commit
* [ARTEMIS-5116](https://issues.apache.org/jira/browse/ARTEMIS-5116) - SslAutoReload not working in kubernetes environment
* [ARTEMIS-5135](https://issues.apache.org/jira/browse/ARTEMIS-5135) - AMQP Address federation consumer can fail to attach if previous detach response delayed
* [ARTEMIS-5150](https://issues.apache.org/jira/browse/ARTEMIS-5150) - ActiveMQServerControlImpl.getHAPolicy() gets NullPointerException
* [ARTEMIS-5155](https://issues.apache.org/jira/browse/ARTEMIS-5155) - AMQP LargeMessage file can be deleted in error on connection drop if final frame is being processed
* [ARTEMIS-5172](https://issues.apache.org/jira/browse/ARTEMIS-5172) - Reduce the permissions on temp file
* [ARTEMIS-5187](https://issues.apache.org/jira/browse/ARTEMIS-5187) - ArtemisRbacMBeanServerBuilder causes AMQ229031 errors after authentication failures
* [ARTEMIS-5199](https://issues.apache.org/jira/browse/ARTEMIS-5199) - Create directory race on shared storage

## Improvements

* [ARTEMIS-5093](https://issues.apache.org/jira/browse/ARTEMIS-5093) - Support configurable onMessage timeout when closing consumer
* [ARTEMIS-5110](https://issues.apache.org/jira/browse/ARTEMIS-5110) - Add ability to identify retired IDs in log annotations
* [ARTEMIS-5117](https://issues.apache.org/jira/browse/ARTEMIS-5117) - Freshen up releasing doc
* [ARTEMIS-5118](https://issues.apache.org/jira/browse/ARTEMIS-5118) - Expose HelpCreate on the CLI Jar
* [ARTEMIS-5151](https://issues.apache.org/jira/browse/ARTEMIS-5151) - Clarify transfer command parameter descriptions
* [ARTEMIS-5153](https://issues.apache.org/jira/browse/ARTEMIS-5153) - Mark AMQP federation events and control queues as internal
* [ARTEMIS-5157](https://issues.apache.org/jira/browse/ARTEMIS-5157) - Add management capabilities for AMQP Federation and its Broker Connection
* [ARTEMIS-5158](https://issues.apache.org/jira/browse/ARTEMIS-5158) - brokerProperties - storeConfiguration.dataSourceProperties are not exposed
* [ARTEMIS-5168](https://issues.apache.org/jira/browse/ARTEMIS-5168) - Improve remoting to brokers from Artemis shell
* [ARTEMIS-5201](https://issues.apache.org/jira/browse/ARTEMIS-5201) - Allow Artemis cli to system exit(1) on exception like the Artemis boot
* [ARTEMIS-5206](https://issues.apache.org/jira/browse/ARTEMIS-5206) - Provide description = "" instead of null in certain exception instances

## Tests

* [ARTEMIS-5148](https://issues.apache.org/jira/browse/ARTEMIS-5148) - Simplify and make ClusteredLargeMessageInterruptTest more reliable
* [ARTEMIS-5156](https://issues.apache.org/jira/browse/ARTEMIS-5156) - Simplify and make LargeMessageFrozenTest more reliable
* [ARTEMIS-5159](https://issues.apache.org/jira/browse/ARTEMIS-5159) - Lower number of threads on SoakReplicatedPagingTest
* [ARTEMIS-5166](https://issues.apache.org/jira/browse/ARTEMIS-5166) - Improve reliability of ReconnectTest
* [ARTEMIS-5173](https://issues.apache.org/jira/browse/ARTEMIS-5173) - Improve reliability of tests

## Tasks

* [ARTEMIS-3410](https://issues.apache.org/jira/browse/ARTEMIS-3410) - the Karaf integration tests dont work on Java 16+
* [ARTEMIS-5132](https://issues.apache.org/jira/browse/ARTEMIS-5132) - consolidate ActiveMQQueueLogger into ActiveMQServerLogger 
* [ARTEMIS-5170](https://issues.apache.org/jira/browse/ARTEMIS-5170) - Fix AutoCreateExpiryResourcesTest and document expiry of expiry situation
* [ARTEMIS-5171](https://issues.apache.org/jira/browse/ARTEMIS-5171) - remove unusual relativePath from base pom
* [ARTEMIS-5202](https://issues.apache.org/jira/browse/ARTEMIS-5202) - Require Java 17+ (i.e drop support for Java 11)

## Dependency Upgrades

* [ARTEMIS-5122](https://issues.apache.org/jira/browse/ARTEMIS-5122) - Update micrometer-core to 1.14.1
* [ARTEMIS-5123](https://issues.apache.org/jira/browse/ARTEMIS-5123) - Update mockito to 5.14.2
* [ARTEMIS-5124](https://issues.apache.org/jira/browse/ARTEMIS-5124) - Update jline to 3.27.1
* [ARTEMIS-5125](https://issues.apache.org/jira/browse/ARTEMIS-5125) - Update asciidoctorj-pdf to 2.3.19
* [ARTEMIS-5126](https://issues.apache.org/jira/browse/ARTEMIS-5126) - Update jib-maven-plugin to 3.4.4
* [ARTEMIS-5127](https://issues.apache.org/jira/browse/ARTEMIS-5127) - Update hadoop-minikdc to 3.4.1
* [ARTEMIS-5128](https://issues.apache.org/jira/browse/ARTEMIS-5128) - Update to junit 5.11.3
* [ARTEMIS-5129](https://issues.apache.org/jira/browse/ARTEMIS-5129) - Update exec-maven-plugin to 3.5.0
* [ARTEMIS-5130](https://issues.apache.org/jira/browse/ARTEMIS-5130) - Update testcontainers to 1.20.3
* [ARTEMIS-5136](https://issues.apache.org/jira/browse/ARTEMIS-5136) - Update to zookeeper 3.9.3
* [ARTEMIS-5137](https://issues.apache.org/jira/browse/ARTEMIS-5137) - Update to jackson 2.18.2
* [ARTEMIS-5138](https://issues.apache.org/jira/browse/ARTEMIS-5138) - Update to checkstyle 10.20.2
* [ARTEMIS-5143](https://issues.apache.org/jira/browse/ARTEMIS-5143) - Update to bouncycastle 1.79
* [ARTEMIS-5144](https://issues.apache.org/jira/browse/ARTEMIS-5144) - Update to selenium 4.27.0
* [ARTEMIS-5145](https://issues.apache.org/jira/browse/ARTEMIS-5145) - Update asciidoctor-maven-plugin to 3.1.1
* [ARTEMIS-5152](https://issues.apache.org/jira/browse/ARTEMIS-5152) - Update to Groovy 4.0.24
* [ARTEMIS-5154](https://issues.apache.org/jira/browse/ARTEMIS-5154) - Update to Netty 4.1.115
* [ARTEMIS-5162](https://issues.apache.org/jira/browse/ARTEMIS-5162) - Upgrade pem-keystore to 3.0.0
* [ARTEMIS-5165](https://issues.apache.org/jira/browse/ARTEMIS-5165) - update to easymock 5.5.0
* [ARTEMIS-5174](https://issues.apache.org/jira/browse/ARTEMIS-5174) - Have dependabot ignore jgroups until JGRP-2794 is resolved
* [ARTEMIS-5177](https://issues.apache.org/jira/browse/ARTEMIS-5177) - Bump log4j.version from 2.24.1 to 2.24.2
* [ARTEMIS-5178](https://issues.apache.org/jira/browse/ARTEMIS-5178) - Bump testcontainers.version from 1.20.3 to 1.20.4
* [ARTEMIS-5179](https://issues.apache.org/jira/browse/ARTEMIS-5179) - Bump commons-io:commons-io from 2.17.0 to 2.18.0
* [ARTEMIS-5180](https://issues.apache.org/jira/browse/ARTEMIS-5180) - Bump owasp.version from 10.0.4 to 11.1.1
* [ARTEMIS-5181](https://issues.apache.org/jira/browse/ARTEMIS-5181) - Bump org.apache.maven.plugins:maven-pmd-plugin from 3.25.0 to 3.26.0
* [ARTEMIS-5191](https://issues.apache.org/jira/browse/ARTEMIS-5191) - Update commons-dbcp2 to 2.13.0
* [ARTEMIS-5203](https://issues.apache.org/jira/browse/ARTEMIS-5203) - Bump pax.exam.version from 4.13.5 to 4.14.0
* [ARTEMIS-5208](https://issues.apache.org/jira/browse/ARTEMIS-5208) - Bump Jetty from 10.0.24 to 12.0.15
* [ARTEMIS-5210](https://issues.apache.org/jira/browse/ARTEMIS-5210) - Bump com.google.errorprone:error_prone_core from 2.31.0 to 2.36.0
* [ARTEMIS-5211](https://issues.apache.org/jira/browse/ARTEMIS-5211) - Bump org.jline:jline from 3.27.1 to 3.28.0
* [ARTEMIS-5212](https://issues.apache.org/jira/browse/ARTEMIS-5212) - Bump io.micrometer:micrometer-core from 1.14.1 to 1.14.2