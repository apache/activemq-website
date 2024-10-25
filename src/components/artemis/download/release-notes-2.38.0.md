---
layout: default_md
title: ActiveMQ Artemis 2.38.0 Release Notes
title-class: page-title-artemis
type: artemis
---
 - [A list of commits](commit-report-2.38.0).

 - Please see the ["Versions"](https://activemq.apache.org/components/artemis/documentation/latest/versions.html) chapter in the User Guide for upgrade instructions.

**Note**: This release requires use of Java 11 or above.


## Bugs Fixed

* [ARTEMIS-1962](https://issues.apache.org/jira/browse/ARTEMIS-1962) - "HA: failover-on-server-shutdown" documentation wrong or incomplete
* [ARTEMIS-4781](https://issues.apache.org/jira/browse/ARTEMIS-4781) - Clustering not-large AMQP message can leak Core large message file
* [ARTEMIS-4804](https://issues.apache.org/jira/browse/ARTEMIS-4804) - Null dereferencing in ScaleDownHandler.java
* [ARTEMIS-4805](https://issues.apache.org/jira/browse/ARTEMIS-4805) - Null dereferencing in ScaleDownHandler.java
* [ARTEMIS-4915](https://issues.apache.org/jira/browse/ARTEMIS-4915) - TotalMessagesAdded/Acknowledged descriptions are misleading
* [ARTEMIS-4935](https://issues.apache.org/jira/browse/ARTEMIS-4935) - remove unused variable in ProcessBuilder.ProcessLogger
* [ARTEMIS-4957](https://issues.apache.org/jira/browse/ARTEMIS-4957) - unused value in Redistributor class
* [ARTEMIS-4958](https://issues.apache.org/jira/browse/ARTEMIS-4958) - unused variable in AddressImpl class
* [ARTEMIS-4962](https://issues.apache.org/jira/browse/ARTEMIS-4962) - possible NPE in FilterImpl
* [ARTEMIS-4965](https://issues.apache.org/jira/browse/ARTEMIS-4965) - Possible null dereference when property is missing in journal-sql.properties file
* [ARTEMIS-4971](https://issues.apache.org/jira/browse/ARTEMIS-4971) - AckManager "giving up" processing of Acks in warning log level
* [ARTEMIS-4978](https://issues.apache.org/jira/browse/ARTEMIS-4978) - JMX message replay from retention cannot find AMQP messages when using filters
* [ARTEMIS-4998](https://issues.apache.org/jira/browse/ARTEMIS-4998) - AMQP Federation target can close connection in error
* [ARTEMIS-5007](https://issues.apache.org/jira/browse/ARTEMIS-5007) - Mirroring consumer does not recover automatically
* [ARTEMIS-5010](https://issues.apache.org/jira/browse/ARTEMIS-5010) - AckManager records from mirror are not being replicated
* [ARTEMIS-5017](https://issues.apache.org/jira/browse/ARTEMIS-5017) - Bridge leaks ClientSessionFactory instance on reconnect attempt
* [ARTEMIS-5023](https://issues.apache.org/jira/browse/ARTEMIS-5023) - Web temp directory cleaner is moot now
* [ARTEMIS-5032](https://issues.apache.org/jira/browse/ARTEMIS-5032) - Message priority not honored for persisted AMQP messages after server restarted
* [ARTEMIS-5033](https://issues.apache.org/jira/browse/ARTEMIS-5033) - Avoid NPE on method processAddSession in OpenWireConnection
* [ARTEMIS-5038](https://issues.apache.org/jira/browse/ARTEMIS-5038) - Mirror ACKs are broken if using multiple priorities
* [ARTEMIS-5042](https://issues.apache.org/jira/browse/ARTEMIS-5042) - The load balancing is not working correctly when several brokers are down
* [ARTEMIS-5051](https://issues.apache.org/jira/browse/ARTEMIS-5051) - console jolokia default detector config makes unauthenticated mbean requests that are denied by ArtemisRbacMBeanServerBuilder
* [ARTEMIS-5054](https://issues.apache.org/jira/browse/ARTEMIS-5054) - large messages only forwarded to one subscriber when using STOMP on multicast address
* [ARTEMIS-5055](https://issues.apache.org/jira/browse/ARTEMIS-5055) - AIO not detected in official Ubuntu Docker image
* [ARTEMIS-5057](https://issues.apache.org/jira/browse/ARTEMIS-5057) - Configuration Reference is incomplete
* [ARTEMIS-5062](https://issues.apache.org/jira/browse/ARTEMIS-5062) - ClusterConnectionControl has wrong annotation
* [ARTEMIS-5065](https://issues.apache.org/jira/browse/ARTEMIS-5065) - We should remove mirror properties for Core and OpenWire Protocols upon receiving them on the server
* [ARTEMIS-5066](https://issues.apache.org/jira/browse/ARTEMIS-5066) - Diverts should not be applied on mirror
* [ARTEMIS-5067](https://issues.apache.org/jira/browse/ARTEMIS-5067) - Race on Mirror while one side is connected while the other is not
* [ARTEMIS-5068](https://issues.apache.org/jira/browse/ARTEMIS-5068) - Temporary Queues should not be mirrored
* [ARTEMIS-5073](https://issues.apache.org/jira/browse/ARTEMIS-5073) - Formatting error of AMQ601771 audit log event
* [ARTEMIS-5074](https://issues.apache.org/jira/browse/ARTEMIS-5074) - Broker AMQP Message mishandles put and get of byte[] in ApplicationProperties
* [ARTEMIS-5085](https://issues.apache.org/jira/browse/ARTEMIS-5085) - Use retry parameters on initial connection
* [ARTEMIS-5090](https://issues.apache.org/jira/browse/ARTEMIS-5090) - MirrorSNF is not supposed to expire messages
* [ARTEMIS-5097](https://issues.apache.org/jira/browse/ARTEMIS-5097) - ./artemis data exp | imp should deal with deleted queues

## New Features

* [ARTEMIS-2748](https://issues.apache.org/jira/browse/ARTEMIS-2748) - Support websockets compression
* [ARTEMIS-5063](https://issues.apache.org/jira/browse/ARTEMIS-5063) - Addition of a messageMoved() callback in ActiveMQServerMessagePlugin

## Improvements

* [ARTEMIS-4182](https://issues.apache.org/jira/browse/ARTEMIS-4182) - allow configuring client-id for bridge and cluster connections
* [ARTEMIS-4834](https://issues.apache.org/jira/browse/ARTEMIS-4834) - Support consuming messages forever with CLI
* [ARTEMIS-5001](https://issues.apache.org/jira/browse/ARTEMIS-5001) - Relax consistency requirement on OperationContext for Mirror send operations.
* [ARTEMIS-5003](https://issues.apache.org/jira/browse/ARTEMIS-5003) - print a warning if Artemis-profile file does not exist.
* [ARTEMIS-5004](https://issues.apache.org/jira/browse/ARTEMIS-5004) - AMQP Federation address bindings could be cleaned up faster
* [ARTEMIS-5013](https://issues.apache.org/jira/browse/ARTEMIS-5013) - Don't override Netty leak detection config on client
* [ARTEMIS-5028](https://issues.apache.org/jira/browse/ARTEMIS-5028) - Use a default filter when none is specified for management ops
* [ARTEMIS-5034](https://issues.apache.org/jira/browse/ARTEMIS-5034) - Improve &amp; document OpenWire protocol logging
* [ARTEMIS-5045](https://issues.apache.org/jira/browse/ARTEMIS-5045) - Don't change the Micrometer MeterRegistry config
* [ARTEMIS-5048](https://issues.apache.org/jira/browse/ARTEMIS-5048) - Use java.util.Base64
* [ARTEMIS-5049](https://issues.apache.org/jira/browse/ARTEMIS-5049) - Add detailed logging for auth caches
* [ARTEMIS-5052](https://issues.apache.org/jira/browse/ARTEMIS-5052) - Hash authentication cache keys
* [ARTEMIS-5070](https://issues.apache.org/jira/browse/ARTEMIS-5070) - Improve management docs
* [ARTEMIS-5071](https://issues.apache.org/jira/browse/ARTEMIS-5071) - Align naming for management option syntax
* [ARTEMIS-5072](https://issues.apache.org/jira/browse/ARTEMIS-5072) - Support non-paged management results
* [ARTEMIS-5075](https://issues.apache.org/jira/browse/ARTEMIS-5075) - Support NOT_EQUALS operator to filter some management results
* [ARTEMIS-5078](https://issues.apache.org/jira/browse/ARTEMIS-5078) - Support divert management via JSON
* [ARTEMIS-5096](https://issues.apache.org/jira/browse/ARTEMIS-5096) - Exclude unnecessary jars from console war
* [ARTEMIS-5102](https://issues.apache.org/jira/browse/ARTEMIS-5102) - TextFileCertificateLoginModule support normalisation of DN property values
* [ARTEMIS-5111](https://issues.apache.org/jira/browse/ARTEMIS-5111) - from now on use source &lt;(./artemis complete) to enable auto-completion in artemis

## Tests

* [ARTEMIS-5035](https://issues.apache.org/jira/browse/ARTEMIS-5035) - Use randomProtocol in certain tests

## Tasks

* [ARTEMIS-4906](https://issues.apache.org/jira/browse/ARTEMIS-4906) - remove Dockerfile-centos7-17, no longer builds due to repo expiry
* [ARTEMIS-5000](https://issues.apache.org/jira/browse/ARTEMIS-5000) - Stop running most STOMP tests twice
* [ARTEMIS-5012](https://issues.apache.org/jira/browse/ARTEMIS-5012) - Update docs &amp; code to clarify resource-limit-settings
* [ARTEMIS-5018](https://issues.apache.org/jira/browse/ARTEMIS-5018) - Eliminate deprecated use of Class.newInstance
* [ARTEMIS-5050](https://issues.apache.org/jira/browse/ARTEMIS-5050) - misc improvements to 'Broker-to-Broker Connectivity' docs/index
* [ARTEMIS-5101](https://issues.apache.org/jira/browse/ARTEMIS-5101) - Deprecate default codec two-way algorithm
* [ARTEMIS-5103](https://issues.apache.org/jira/browse/ARTEMIS-5103) - Remove hardcoded secure random algorithm from default codec
* [ARTEMIS-5105](https://issues.apache.org/jira/browse/ARTEMIS-5105) - Update the stores the example amqp-sending-overssl

## Dependency Upgrades

* [ARTEMIS-4995](https://issues.apache.org/jira/browse/ARTEMIS-4995) - update jgroups to 5.3.13
* [ARTEMIS-4996](https://issues.apache.org/jira/browse/ARTEMIS-4996) - Update to JUnit 5.11.2
* [ARTEMIS-4999](https://issues.apache.org/jira/browse/ARTEMIS-4999) - Bump plugin.components.maven.version from 3.9.8 to 3.9.9
* [ARTEMIS-5008](https://issues.apache.org/jira/browse/ARTEMIS-5008) - Bump commons-logging:commons-logging from 1.3.3 to 1.3.4
* [ARTEMIS-5011](https://issues.apache.org/jira/browse/ARTEMIS-5011) - update to postgresql 42.7.4
* [ARTEMIS-5015](https://issues.apache.org/jira/browse/ARTEMIS-5015) - Bump io.netty:netty-tcnative-boringssl-static from 2.0.65.Final to 2.0.66.Final
* [ARTEMIS-5019](https://issues.apache.org/jira/browse/ARTEMIS-5019) - Update to ErrorProne 2.31.0
* [ARTEMIS-5020](https://issues.apache.org/jira/browse/ARTEMIS-5020) - Update maven-pmd-plugin to 3.25.0
* [ARTEMIS-5024](https://issues.apache.org/jira/browse/ARTEMIS-5024) - Bump org.apache.commons:commons-lang3 from 3.16.0 to 3.17.0
* [ARTEMIS-5025](https://issues.apache.org/jira/browse/ARTEMIS-5025) - Bump org.jboss.marshalling:jboss-marshalling-river from 2.1.4.Final to 2.2.1.Final
* [ARTEMIS-5026](https://issues.apache.org/jira/browse/ARTEMIS-5026) - Upgrade commons-compress to 1.27.1
* [ARTEMIS-5029](https://issues.apache.org/jira/browse/ARTEMIS-5029) - Bump jetty.version to 10.0.24
* [ARTEMIS-5031](https://issues.apache.org/jira/browse/ARTEMIS-5031) - Bump owasp.version from 10.0.3 to 10.0.4
* [ARTEMIS-5039](https://issues.apache.org/jira/browse/ARTEMIS-5039) - Bump netty.version to 4.1.114.Final
* [ARTEMIS-5044](https://issues.apache.org/jira/browse/ARTEMIS-5044) - Bump io.micrometer:micrometer-core from 1.13.3 to 1.13.5
* [ARTEMIS-5046](https://issues.apache.org/jira/browse/ARTEMIS-5046) - Update to Groovy 4.0.23
* [ARTEMIS-5058](https://issues.apache.org/jira/browse/ARTEMIS-5058) - Update Qpid protonj2 to version 1.0.0-M22
* [ARTEMIS-5059](https://issues.apache.org/jira/browse/ARTEMIS-5059) - Bump commons-io:commons-io from 2.16.1 to 2.17.0
* [ARTEMIS-5060](https://issues.apache.org/jira/browse/ARTEMIS-5060) - Bump selenium.version to 4.25.0
* [ARTEMIS-5061](https://issues.apache.org/jira/browse/ARTEMIS-5061) - Bump org.jline:jline from 3.26.3 to 3.27.0
* [ARTEMIS-5079](https://issues.apache.org/jira/browse/ARTEMIS-5079) - Bump com.google.guava:guava to 33.3.1-jre
* [ARTEMIS-5080](https://issues.apache.org/jira/browse/ARTEMIS-5080) - Bump com.fasterxml.jackson.core:jackson-databind from 2.17.2 to 2.18.0
* [ARTEMIS-5081](https://issues.apache.org/jira/browse/ARTEMIS-5081) - Bump log4j.version to 2.24.1
* [ARTEMIS-5082](https://issues.apache.org/jira/browse/ARTEMIS-5082) - Bump com.puppycrawl.tools:checkstyle to 10.18.2
* [ARTEMIS-5083](https://issues.apache.org/jira/browse/ARTEMIS-5083) - Bump Mockito to 5.14.1
* [ARTEMIS-5084](https://issues.apache.org/jira/browse/ARTEMIS-5084) - Bump testcontainers.version from 1.20.1 to 1.20.2
* [ARTEMIS-5087](https://issues.apache.org/jira/browse/ARTEMIS-5087) - Update to activemq 5.18.6
* [ARTEMIS-5088](https://issues.apache.org/jira/browse/ARTEMIS-5088) - Update to qpid-jms 1.12.1
* [ARTEMIS-5109](https://issues.apache.org/jira/browse/ARTEMIS-5109) - Upgrade to Curator 5.7.1