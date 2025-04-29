---
layout: default_md
title: ActiveMQ Artemis 2.41.0 Release Notes
title-class: page-title-artemis
type: artemis
---
 - [A list of commits](commit-report-2.41.0).

 - Please see the ["Versions"](https://activemq.apache.org/components/artemis/documentation/latest/versions.html) chapter in the User Guide for upgrade instructions.

**Note**: This release requires use of Java 17 or above.


## Bugs Fixed

* [ARTEMIS-3351](https://issues.apache.org/jira/browse/ARTEMIS-3351) - Explicitly disconnect consumers when closing session administratively
* [ARTEMIS-4777](https://issues.apache.org/jira/browse/ARTEMIS-4777) - Broker connections (AMQP) with receiver operation not working
* [ARTEMIS-5253](https://issues.apache.org/jira/browse/ARTEMIS-5253) - ActiveMQRAConnectionFactoryImpl fails to implement getReference()
* [ARTEMIS-5254](https://issues.apache.org/jira/browse/ARTEMIS-5254) - MQTTSession.stop failure: Parameters not enabled.
* [ARTEMIS-5325](https://issues.apache.org/jira/browse/ARTEMIS-5325) - Don't block session creation/closing with sending management notification
* [ARTEMIS-5337](https://issues.apache.org/jira/browse/ARTEMIS-5337) - Consumer + auto-create receives from existing wildcard queue
* [ARTEMIS-5358](https://issues.apache.org/jira/browse/ARTEMIS-5358) - Log when core bridge fails to send a message
* [ARTEMIS-5372](https://issues.apache.org/jira/browse/ARTEMIS-5372) - parsing invalid json properties should trap error and report in status
* [ARTEMIS-5373](https://issues.apache.org/jira/browse/ARTEMIS-5373) - json properties need to support keySurround and only auto surround when not already surrounded
* [ARTEMIS-5379](https://issues.apache.org/jira/browse/ARTEMIS-5379) - Journal commit record recorded before Page Writer is finished leading to possible message loss on a crash
* [ARTEMIS-5380](https://issues.apache.org/jira/browse/ARTEMIS-5380) - json properties need to respect insertion order
* [ARTEMIS-5381](https://issues.apache.org/jira/browse/ARTEMIS-5381) - auto increment of link name in amqp address federation can lead to missing messages on restart
* [ARTEMIS-5382](https://issues.apache.org/jira/browse/ARTEMIS-5382) - Temporary network issues can cause persistent cluster subgroups
* [ARTEMIS-5384](https://issues.apache.org/jira/browse/ARTEMIS-5384) - PagedTimeWriter should be stopped before a server shutdown
* [ARTEMIS-5385](https://issues.apache.org/jira/browse/ARTEMIS-5385) - Paging check completion should be done at the page's executor
* [ARTEMIS-5428](https://issues.apache.org/jira/browse/ARTEMIS-5428) - Hardening Paging Operation around Server Shutdown
* [ARTEMIS-5439](https://issues.apache.org/jira/browse/ARTEMIS-5439) - Value 'ROLE_NAME' is not facet-valid with respect to enumeration '[CLIENT_ID, SNI_HOST, SOURCE_IP, USER_NAME]'
* [ARTEMIS-5441](https://issues.apache.org/jira/browse/ARTEMIS-5441) - Replication start will deadlock / starve if PageTimedWriter is flow controlled

## New Features

* [ARTEMIS-5371](https://issues.apache.org/jira/browse/ARTEMIS-5371) - Support HTTP/2 from the embedded web server
* [ARTEMIS-5437](https://issues.apache.org/jira/browse/ARTEMIS-5437) - Add a more advanced message bridging feature to AMQP broker connections

## Improvements

* [ARTEMIS-5207](https://issues.apache.org/jira/browse/ARTEMIS-5207) - Expose persisted status of queue's paused attribute
* [ARTEMIS-5351](https://issues.apache.org/jira/browse/ARTEMIS-5351) - Harmonize AddressControl and AddressView
* [ARTEMIS-5360](https://issues.apache.org/jira/browse/ARTEMIS-5360) - Syntax issues in Docker files
* [ARTEMIS-5368](https://issues.apache.org/jira/browse/ARTEMIS-5368) - AMQP Federation prevent consumer loops for included federation consumers
* [ARTEMIS-5375](https://issues.apache.org/jira/browse/ARTEMIS-5375) - provide a fileAlder32 checksum in status of property configuration
* [ARTEMIS-5388](https://issues.apache.org/jira/browse/ARTEMIS-5388) - Expose core bridge connection status via JMX
* [ARTEMIS-5422](https://issues.apache.org/jira/browse/ARTEMIS-5422) - AMQP Federation example needs hardening
* [ARTEMIS-5434](https://issues.apache.org/jira/browse/ARTEMIS-5434) - Use full exception name in exceptions

## Tasks

* [ARTEMIS-5056](https://issues.apache.org/jira/browse/ARTEMIS-5056) - make auto-delete queues/addresses 'default' documentation clearer
* [ARTEMIS-5363](https://issues.apache.org/jira/browse/ARTEMIS-5363) - Clean up old war references in docs &amp; configs
* [ARTEMIS-5383](https://issues.apache.org/jira/browse/ARTEMIS-5383) - Performance issues with HierarchicalRepositoryChangeListener
* [ARTEMIS-5387](https://issues.apache.org/jira/browse/ARTEMIS-5387) - Test suite improvements
* [ARTEMIS-5426](https://issues.apache.org/jira/browse/ARTEMIS-5426) - Update jar exclusions for new console

## Dependency Upgrades

* [ARTEMIS-5352](https://issues.apache.org/jira/browse/ARTEMIS-5352) - Bump org.apache:apache from 33 to 34
* [ARTEMIS-5353](https://issues.apache.org/jira/browse/ARTEMIS-5353) - Bump curator.version from 5.7.1 to 5.8.0
* [ARTEMIS-5354](https://issues.apache.org/jira/browse/ARTEMIS-5354) - Bump io.micrometer:micrometer-core from 1.14.4 to 1.14.5
* [ARTEMIS-5355](https://issues.apache.org/jira/browse/ARTEMIS-5355) - Bump mockito.version from 5.16.0 to 5.16.1
* [ARTEMIS-5356](https://issues.apache.org/jira/browse/ARTEMIS-5356) - Bump org.junit:junit-bom from 5.12.0 to 5.12.1
* [ARTEMIS-5357](https://issues.apache.org/jira/browse/ARTEMIS-5357) - Bump com.google.cloud.tools:jib-maven-plugin from 3.4.4 to 3.4.5
* [ARTEMIS-5365](https://issues.apache.org/jira/browse/ARTEMIS-5365) - Bump com.google.errorprone:error_prone_core from 2.36.0 to 2.37.0
* [ARTEMIS-5366](https://issues.apache.org/jira/browse/ARTEMIS-5366) - Bump com.google.guava:guava from 33.4.0-jre to 33.4.5-jre
* [ARTEMIS-5369](https://issues.apache.org/jira/browse/ARTEMIS-5369) - Bump org.asciidoctor:asciidoctor-maven-plugin from 3.1.1 to 3.2.0
* [ARTEMIS-5370](https://issues.apache.org/jira/browse/ARTEMIS-5370) - Bump selenium.version from 4.29.0 to 4.30.0
* [ARTEMIS-5397](https://issues.apache.org/jira/browse/ARTEMIS-5397) - Bump org.codehaus.mojo:javacc-maven-plugin from 3.1.0 to 3.1.1
* [ARTEMIS-5398](https://issues.apache.org/jira/browse/ARTEMIS-5398) - Bump org.jboss.marshalling:jboss-marshalling-river from 2.2.2.Final to 2.2.3.Final
* [ARTEMIS-5399](https://issues.apache.org/jira/browse/ARTEMIS-5399) - Bump com.puppycrawl.tools:checkstyle from 10.21.4 to 10.23.0
* [ARTEMIS-5400](https://issues.apache.org/jira/browse/ARTEMIS-5400) - Bump jacoco from 0.8.12 to 0.8.13
* [ARTEMIS-5401](https://issues.apache.org/jira/browse/ARTEMIS-5401) - Bump mockito.version from 5.16.1 to 5.17.0
* [ARTEMIS-5402](https://issues.apache.org/jira/browse/ARTEMIS-5402) - Bump owasp.version from 12.1.0 to 12.1.1
* [ARTEMIS-5403](https://issues.apache.org/jira/browse/ARTEMIS-5403) - Bump selenium.version from 4.30.0 to 4.31.0
* [ARTEMIS-5404](https://issues.apache.org/jira/browse/ARTEMIS-5404) - Bump com.google.guava:guava from 33.4.6-jre to 33.4.7-jre
* [ARTEMIS-5420](https://issues.apache.org/jira/browse/ARTEMIS-5420) - Update to jetty 12.0.19
* [ARTEMIS-5421](https://issues.apache.org/jira/browse/ARTEMIS-5421) - Bump org.apache.commons:commons-text from 1.13.0 to 1.13.1
* [ARTEMIS-5429](https://issues.apache.org/jira/browse/ARTEMIS-5429) - Bump commons-io:commons-io from 2.18.0 to 2.19.0
* [ARTEMIS-5430](https://issues.apache.org/jira/browse/ARTEMIS-5430) - Bump com.google.guava:guava from 33.4.7-jre to 33.4.8-jre
* [ARTEMIS-5431](https://issues.apache.org/jira/browse/ARTEMIS-5431) - Bump io.micrometer:micrometer-core from 1.14.5 to 1.14.6