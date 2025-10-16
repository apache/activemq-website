---
layout: default_md
title: ActiveMQ Artemis 2.43.0 Release Notes
title-class: page-title-artemis
type: artemis
---
 - [A list of commits](commit-report-2.43.0).

 - Please see the ["Versions"](https://activemq.apache.org/components/artemis/documentation/latest/versions.html) chapter in the User Guide for upgrade instructions.

**Note**: This release requires use of Java 17 or above.


## Bugs Fixed

* [ARTEMIS-4924](https://issues.apache.org/jira/browse/ARTEMIS-4924) - Handle invalid messages in SNF queues
* [ARTEMIS-5099](https://issues.apache.org/jira/browse/ARTEMIS-5099) - Probable impossible cast in AMQPLargeMessage
* [ARTEMIS-5530](https://issues.apache.org/jira/browse/ARTEMIS-5530) - Some handling of compressed messages can throw NegativeArraySizeException
* [ARTEMIS-5562](https://issues.apache.org/jira/browse/ARTEMIS-5562) - NullPointerException on call closeConnectionFactory method in ActiveMQResourceAdapter class 
* [ARTEMIS-5579](https://issues.apache.org/jira/browse/ARTEMIS-5579) - Address not available while paging cleanup being performed
* [ARTEMIS-5581](https://issues.apache.org/jira/browse/ARTEMIS-5581) - Discovery group deadlock on ServerLocator.close
* [ARTEMIS-5587](https://issues.apache.org/jira/browse/ARTEMIS-5587) - HttpServerAuthenticator needs to set correct TCCL
* [ARTEMIS-5596](https://issues.apache.org/jira/browse/ARTEMIS-5596) - New client w/old broker chokes on null ConfigurationManaged flag
* [ARTEMIS-5597](https://issues.apache.org/jira/browse/ARTEMIS-5597) - Initial distribution broken when sending to FQQN
* [ARTEMIS-5598](https://issues.apache.org/jira/browse/ARTEMIS-5598) - Mitigate race condition on ServerConsumer callback
* [ARTEMIS-5601](https://issues.apache.org/jira/browse/ARTEMIS-5601) - Auto create queues in AMQP is not synchronizing bindings storage
* [ARTEMIS-5605](https://issues.apache.org/jira/browse/ARTEMIS-5605) - AMQP Bridge and Federation receivers can NPE if closed before remote Attach arrives
* [ARTEMIS-5612](https://issues.apache.org/jira/browse/ARTEMIS-5612) - Unable to disable queue metrics
* [ARTEMIS-5616](https://issues.apache.org/jira/browse/ARTEMIS-5616) - Compressed Large Messages handled as regular messages are returning too many credits upon rollback
* [ARTEMIS-5634](https://issues.apache.org/jira/browse/ARTEMIS-5634) - Transactions should be used on the server's side when mirror source is in use
* [ARTEMIS-5639](https://issues.apache.org/jira/browse/ARTEMIS-5639) - Fix MQTTRetainMessageManagerTest
* [ARTEMIS-5651](https://issues.apache.org/jira/browse/ARTEMIS-5651) - AMQP Bridge policy managers missing some needed synchronized tags
* [ARTEMIS-5672](https://issues.apache.org/jira/browse/ARTEMIS-5672) - Fix AddressManager Leaks
* [ARTEMIS-5675](https://issues.apache.org/jira/browse/ARTEMIS-5675) - Server's JVM won't halt when storage is disconnected
* [ARTEMIS-5679](https://issues.apache.org/jira/browse/ARTEMIS-5679) - The CLI perf command doesn't close the connection factory
* [ARTEMIS-5683](https://issues.apache.org/jira/browse/ARTEMIS-5683) - Properly convert wildcards in LegacyLDAPSecuritySettingPlugin
* [ARTEMIS-5687](https://issues.apache.org/jira/browse/ARTEMIS-5687) - Closing an AMQP session via console or management does not send an End frame
* [ARTEMIS-5688](https://issues.apache.org/jira/browse/ARTEMIS-5688) - Set routing-type when creating MQTT subscription queue
* [ARTEMIS-5689](https://issues.apache.org/jira/browse/ARTEMIS-5689) - Tunneling Core Large Messages over broker connections can fail in some cases
* [ARTEMIS-5691](https://issues.apache.org/jira/browse/ARTEMIS-5691) - Race between MQTT CONNACK &amp; disconnection for auth failures 
* [ARTEMIS-5693](https://issues.apache.org/jira/browse/ARTEMIS-5693) - jgroups scaledown race with shared channel
* [ARTEMIS-5694](https://issues.apache.org/jira/browse/ARTEMIS-5694) - Lingering sessions after a storage timeout
* [ARTEMIS-5696](https://issues.apache.org/jira/browse/ARTEMIS-5696) - Tunneled core large messages can drop some bytes if flow controled at specific stages
* [ARTEMIS-5697](https://issues.apache.org/jira/browse/ARTEMIS-5697) - Fix looping call from AMQP Sasl handling on no available mechanisms
* [ARTEMIS-5700](https://issues.apache.org/jira/browse/ARTEMIS-5700) - KubernetesLoginModule doesn't control HttpClient instances

## New Features

* [ARTEMIS-5609](https://issues.apache.org/jira/browse/ARTEMIS-5609) - Add support for (add/remove/update) of acceptors via config reload
* [ARTEMIS-5625](https://issues.apache.org/jira/browse/ARTEMIS-5625) - Support AMQP address federation links using filters from the address bindings

## Improvements

* [ARTEMIS-3915](https://issues.apache.org/jira/browse/ARTEMIS-3915) - Support PROXY Protocol
* [ARTEMIS-5588](https://issues.apache.org/jira/browse/ARTEMIS-5588) - config reload of properties requires an xml config
* [ARTEMIS-5608](https://issues.apache.org/jira/browse/ARTEMIS-5608) - Option to purge page folder after exiting page mode
* [ARTEMIS-5637](https://issues.apache.org/jira/browse/ARTEMIS-5637) - Reduce MQTT-to-Core session ratio
* [ARTEMIS-5645](https://issues.apache.org/jira/browse/ARTEMIS-5645) - AMQP senders should have their credit drained after a send fails when address space constraints are exceeded
* [ARTEMIS-5650](https://issues.apache.org/jira/browse/ARTEMIS-5650) - Send Modified(delivery-failed) to AMQP Federation receivers by default when the target address is full
* [ARTEMIS-5656](https://issues.apache.org/jira/browse/ARTEMIS-5656) - Prevent bi-directional AMQP Address Federation from creating unneeded links
* [ARTEMIS-5659](https://issues.apache.org/jira/browse/ARTEMIS-5659) - Support masking JDBC URL
* [ARTEMIS-5669](https://issues.apache.org/jira/browse/ARTEMIS-5669) - Send Modified(delivery-failed) to AMQP bridge receivers by default when the target address is full
* [ARTEMIS-5682](https://issues.apache.org/jira/browse/ARTEMIS-5682) - brokerProperties: support clearing of collections and maps with the removeValue -

## Tests

* [ARTEMIS-5594](https://issues.apache.org/jira/browse/ARTEMIS-5594) - Adjust sizes on LargeMessageTest

## Tasks

* [ARTEMIS-5606](https://issues.apache.org/jira/browse/ARTEMIS-5606) - Refactor chapter on duplicate detection
* [ARTEMIS-5619](https://issues.apache.org/jira/browse/ARTEMIS-5619) - Fix documentation around failover list on broker connections
* [ARTEMIS-5621](https://issues.apache.org/jira/browse/ARTEMIS-5621) - logger.info on QueueImpl when messages are dropped from a noRoute situation.
* [ARTEMIS-5622](https://issues.apache.org/jira/browse/ARTEMIS-5622) - Remove duplicated InVMContext from test code
* [ARTEMIS-5624](https://issues.apache.org/jira/browse/ARTEMIS-5624) - Clarify connection router doc
* [ARTEMIS-5628](https://issues.apache.org/jira/browse/ARTEMIS-5628) - Tidy up Netty test dependency issues
* [ARTEMIS-5638](https://issues.apache.org/jira/browse/ARTEMIS-5638) - Clarify docs for installing libaio
* [ARTEMIS-5640](https://issues.apache.org/jira/browse/ARTEMIS-5640) - Wrong property mentioned in documentation 11.1. Config access using client certificates
* [ARTEMIS-5674](https://issues.apache.org/jira/browse/ARTEMIS-5674) - Update search button locator for queues page tests
* [ARTEMIS-5678](https://issues.apache.org/jira/browse/ARTEMIS-5678) - Add some additional AMQP bridge tests for some edge case usages

## Dependency Upgrades

* [ARTEMIS-5578](https://issues.apache.org/jira/browse/ARTEMIS-5578) - Update to Netty 4.1.127
* [ARTEMIS-5582](https://issues.apache.org/jira/browse/ARTEMIS-5582) - Update to errorprone 2.42.0
* [ARTEMIS-5583](https://issues.apache.org/jira/browse/ARTEMIS-5583) - Update to commons-lang3 3.19.0
* [ARTEMIS-5585](https://issues.apache.org/jira/browse/ARTEMIS-5585) - Update to caffeine 3.2.2
* [ARTEMIS-5586](https://issues.apache.org/jira/browse/ARTEMIS-5586) - Update to jackson 2.20.0
* [ARTEMIS-5589](https://issues.apache.org/jira/browse/ARTEMIS-5589) - Update to commons-io 2.20.0
* [ARTEMIS-5590](https://issues.apache.org/jira/browse/ARTEMIS-5590) - Update to commons-codec 1.19.0
* [ARTEMIS-5591](https://issues.apache.org/jira/browse/ARTEMIS-5591) - Update to JUnit 6.0.0
* [ARTEMIS-5592](https://issues.apache.org/jira/browse/ARTEMIS-5592) - Update to groovy 4.0.28
* [ARTEMIS-5593](https://issues.apache.org/jira/browse/ARTEMIS-5593) - Update to commons-text 1.14.0
* [ARTEMIS-5603](https://issues.apache.org/jira/browse/ARTEMIS-5603) - Update to curator 5.9.0
* [ARTEMIS-5604](https://issues.apache.org/jira/browse/ARTEMIS-5604) - Update to commons-compress 1.28.0
* [ARTEMIS-5610](https://issues.apache.org/jira/browse/ARTEMIS-5610) - Bump plugin.components.maven.version from 3.9.10 to 3.9.11
* [ARTEMIS-5613](https://issues.apache.org/jira/browse/ARTEMIS-5613) - Bump jline.version from 3.30.4 to 3.30.6
* [ARTEMIS-5617](https://issues.apache.org/jira/browse/ARTEMIS-5617) - Update to karaf 4.4.8
* [ARTEMIS-5618](https://issues.apache.org/jira/browse/ARTEMIS-5618) - Update to checkstyle 11.1.0
* [ARTEMIS-5620](https://issues.apache.org/jira/browse/ARTEMIS-5620) - Update to selenium 4.36.0
* [ARTEMIS-5623](https://issues.apache.org/jira/browse/ARTEMIS-5623) - Bump mockito.version to latest release
* [ARTEMIS-5635](https://issues.apache.org/jira/browse/ARTEMIS-5635) - Update to qpid-jms 1.15.0
* [ARTEMIS-5636](https://issues.apache.org/jira/browse/ARTEMIS-5636) - Update to groovy 5.0.1
* [ARTEMIS-5643](https://issues.apache.org/jira/browse/ARTEMIS-5643) - Update to hadoop-minikdc 3.4.2
* [ARTEMIS-5644](https://issues.apache.org/jira/browse/ARTEMIS-5644) - Update to zookeeper 3.9.4
* [ARTEMIS-5646](https://issues.apache.org/jira/browse/ARTEMIS-5646) - Update to protonj2 1.0.0
* [ARTEMIS-5652](https://issues.apache.org/jira/browse/ARTEMIS-5652) - Bump jetty.version to 12.1.1
* [ARTEMIS-5653](https://issues.apache.org/jira/browse/ARTEMIS-5653) - Bump io.micrometer:micrometer-core to 1.15.4
* [ARTEMIS-5654](https://issues.apache.org/jira/browse/ARTEMIS-5654) - Bump artemis-console-version from 1.2.1 to 1.3.0
* [ARTEMIS-5670](https://issues.apache.org/jira/browse/ARTEMIS-5670) - Bump bc-java-version from 1.81 to 1.82
* [ARTEMIS-5671](https://issues.apache.org/jira/browse/ARTEMIS-5671) - Bump com.google.guava:guava from 33.4.8-jre to 33.5.0-jre
* [ARTEMIS-5673](https://issues.apache.org/jira/browse/ARTEMIS-5673) - Bump org.postgresql:postgresql to 42.7.8
* [ARTEMIS-5680](https://issues.apache.org/jira/browse/ARTEMIS-5680) - Bump log4j.version to 2.25.2
* [ARTEMIS-5681](https://issues.apache.org/jira/browse/ARTEMIS-5681) - Bump owasp.version to 12.1.6
* [ARTEMIS-5692](https://issues.apache.org/jira/browse/ARTEMIS-5692) - Update exec-maven-plugin to 3.6.1
* [ARTEMIS-5695](https://issues.apache.org/jira/browse/ARTEMIS-5695) - Bump org.asciidoctor:asciidoctorj-pdf 2.3.20