---
layout: default_md
title: ActiveMQ Artemis 2.42.0 Release Notes
title-class: page-title-artemis
type: artemis
---
 - [A list of commits](commit-report-2.42.0).

 - Please see the ["Versions"](https://activemq.apache.org/components/artemis/documentation/latest/versions.html) chapter in the User Guide for upgrade instructions.

**Note**: This release requires use of Java 17 or above.


## Bugs Fixed

* [ARTEMIS-3110](https://issues.apache.org/jira/browse/ARTEMIS-3110) - PullMessage timeout is ignored
* [ARTEMIS-4140](https://issues.apache.org/jira/browse/ARTEMIS-4140) - HTTP Transport - Wrong authority compoment in HTTP request causes 400 Bad Request
* [ARTEMIS-4967](https://issues.apache.org/jira/browse/ARTEMIS-4967) - store.commit(txDeleteCursorOnReload); may not be reachable in processReload() method
* [ARTEMIS-4993](https://issues.apache.org/jira/browse/ARTEMIS-4993) - ActiveMQIOErrorException for transformed messages
* [ARTEMIS-5134](https://issues.apache.org/jira/browse/ARTEMIS-5134) - Incorrect address size calculated due to a race condition in AMQP application properties decode process
* [ARTEMIS-5349](https://issues.apache.org/jira/browse/ARTEMIS-5349) - Bridges with concurrency can leak
* [ARTEMIS-5377](https://issues.apache.org/jira/browse/ARTEMIS-5377) - Deadlock and Crash of Artemis Broker When Restarting a Bridged Peer
* [ARTEMIS-5444](https://issues.apache.org/jira/browse/ARTEMIS-5444) - Refactor temp-queue-namespace
* [ARTEMIS-5446](https://issues.apache.org/jira/browse/ARTEMIS-5446) - Memory leak on Artemis backup node with failover &amp; failback
* [ARTEMIS-5452](https://issues.apache.org/jira/browse/ARTEMIS-5452) - Hierarchical Topics extra size added
* [ARTEMIS-5458](https://issues.apache.org/jira/browse/ARTEMIS-5458) - Incorrect capitalization of transport constant "connectionTTL" in documentation
* [ARTEMIS-5463](https://issues.apache.org/jira/browse/ARTEMIS-5463) - ServerStatus.instance.server leaking instances between restarts
* [ARTEMIS-5465](https://issues.apache.org/jira/browse/ARTEMIS-5465) - Connection router doesn't resolve the USER_NAME key with TextFileCertificateLoginModule
* [ARTEMIS-5466](https://issues.apache.org/jira/browse/ARTEMIS-5466) - ClassCastException in AuthenticationFilter after upgrade from 2.38.0
* [ARTEMIS-5467](https://issues.apache.org/jira/browse/ARTEMIS-5467) - High CPU usage in OutboundStore.generateMqttId
* [ARTEMIS-5469](https://issues.apache.org/jira/browse/ARTEMIS-5469) - MQTT5 flow control rules violation
* [ARTEMIS-5481](https://issues.apache.org/jira/browse/ARTEMIS-5481) - Accumulation activemq.managment queues and addresses, increase connections
* [ARTEMIS-5517](https://issues.apache.org/jira/browse/ARTEMIS-5517) - MQTT subscription identifier can't be nullified
* [ARTEMIS-5520](https://issues.apache.org/jira/browse/ARTEMIS-5520) - JSON broker properties for map entries with dots cause NPE
* [ARTEMIS-5521](https://issues.apache.org/jira/browse/ARTEMIS-5521) - brokerProperties - storeConfiguration.dataSourceProperties values don't support conversion from string
* [ARTEMIS-5522](https://issues.apache.org/jira/browse/ARTEMIS-5522) - MQTT LWT not sent after subsequent disconnects on same session
* [ARTEMIS-5523](https://issues.apache.org/jira/browse/ARTEMIS-5523) - AddressSize might be incorrect with race condition between AMQPMessage.getMemoryEstimate and lazyDecodeProperties.
* [ARTEMIS-5536](https://issues.apache.org/jira/browse/ARTEMIS-5536) - Openwire Flowcontrol Hardening
* [ARTEMIS-5540](https://issues.apache.org/jira/browse/ARTEMIS-5540) - Expire MQTT 3.x session immediately when defaultMqttSessionExpiryInterval is 0
* [ARTEMIS-5554](https://issues.apache.org/jira/browse/ARTEMIS-5554) - Minor resources leaks when using CLI
* [ARTEMIS-5564](https://issues.apache.org/jira/browse/ARTEMIS-5564) - Unecessary scans on Mirror ACKManager
* [ARTEMIS-5574](https://issues.apache.org/jira/browse/ARTEMIS-5574) - Fix handling of pending large messages
* [ARTEMIS-5575](https://issues.apache.org/jira/browse/ARTEMIS-5575) - Potential NPE during MQTT link stealing

## New Features

* [ARTEMIS-3692](https://issues.apache.org/jira/browse/ARTEMIS-3692) - Extend Functionality of Temporary Queue Namespace to Security Settings
* [ARTEMIS-5316](https://issues.apache.org/jira/browse/ARTEMIS-5316) - Support for SASL XOAUTH2 Mechanism in Broker Connection
* [ARTEMIS-5493](https://issues.apache.org/jira/browse/ARTEMIS-5493) - MQTT max in-flight messages setting

## Improvements

* [ARTEMIS-615](https://issues.apache.org/jira/browse/ARTEMIS-615) - Prompt users if they are browsing documentation for older release
* [ARTEMIS-4032](https://issues.apache.org/jira/browse/ARTEMIS-4032) - Empty journal folders are created even when the jdbc store is used
* [ARTEMIS-5121](https://issues.apache.org/jira/browse/ARTEMIS-5121) - Improve performance of MQTT subscription ID matching
* [ARTEMIS-5476](https://issues.apache.org/jira/browse/ARTEMIS-5476) - Add a durable subscription option to AMQP bridge senders and receivers
* [ARTEMIS-5485](https://issues.apache.org/jira/browse/ARTEMIS-5485) - Use parent address to deploy queues by broker properties
* [ARTEMIS-5498](https://issues.apache.org/jira/browse/ARTEMIS-5498) - Scan cluster topology to detect wrong discovery entries
* [ARTEMIS-5499](https://issues.apache.org/jira/browse/ARTEMIS-5499) - Refactor MQTT subscription persistence
* [ARTEMIS-5519](https://issues.apache.org/jira/browse/ARTEMIS-5519) - Enable AMQP Bridge address receiver to use shared durable subscriptions
* [ARTEMIS-5529](https://issues.apache.org/jira/browse/ARTEMIS-5529) - Only calculate publish props for MQTT 5 clients
* [ARTEMIS-5541](https://issues.apache.org/jira/browse/ARTEMIS-5541) - MQTT documentation on session scan interval discrepancy
* [ARTEMIS-5565](https://issues.apache.org/jira/browse/ARTEMIS-5565) - Add API for AMQP broker connections to add offered capabilities

## Tests

* [ARTEMIS-5464](https://issues.apache.org/jira/browse/ARTEMIS-5464) - Simplify LargeMessageInterruptTest

## Tasks

* [ARTEMIS-5364](https://issues.apache.org/jira/browse/ARTEMIS-5364) - Clean up scripts &amp; profiles
* [ARTEMIS-5468](https://issues.apache.org/jira/browse/ARTEMIS-5468) - Clarify docs on expiring messages from queue on expiry address
* [ARTEMIS-5482](https://issues.apache.org/jira/browse/ARTEMIS-5482) - Remove documentation for specific IDEs
* [ARTEMIS-5489](https://issues.apache.org/jira/browse/ARTEMIS-5489) - Provide an example showing AMQP bridges with broker connections
* [ARTEMIS-5518](https://issues.apache.org/jira/browse/ARTEMIS-5518) - Fix case of "MessageCount" in AddressView
* [ARTEMIS-5527](https://issues.apache.org/jira/browse/ARTEMIS-5527) - Use single default WildcardConfiguration instance
* [ARTEMIS-5528](https://issues.apache.org/jira/browse/ARTEMIS-5528) - Replace SimpleString.containsEitherOf with WildcardConfiguration.isWild
* [ARTEMIS-5533](https://issues.apache.org/jira/browse/ARTEMIS-5533) - Use Objects.requireNonNull() where sensible
* [ARTEMIS-5534](https://issues.apache.org/jira/browse/ARTEMIS-5534) - Use Objects.requireNonNullElse() where sensible
* [ARTEMIS-5535](https://issues.apache.org/jira/browse/ARTEMIS-5535) - Use Objects.toString() instead of ternary operator
* [ARTEMIS-5539](https://issues.apache.org/jira/browse/ARTEMIS-5539) - Use Objects.hash consistently
* [ARTEMIS-5542](https://issues.apache.org/jira/browse/ARTEMIS-5542) - Use Objects.equals consistently
* [ARTEMIS-5543](https://issues.apache.org/jira/browse/ARTEMIS-5543) - Replace jline uber jar with module jars
* [ARTEMIS-5553](https://issues.apache.org/jira/browse/ARTEMIS-5553) - Update default management address-settings match 
* [ARTEMIS-5555](https://issues.apache.org/jira/browse/ARTEMIS-5555) - Use TLS protocol for KubernetesClientImpl SSLContext
* [ARTEMIS-5556](https://issues.apache.org/jira/browse/ARTEMIS-5556) - Initialize IO executor resources just once
* [ARTEMIS-5559](https://issues.apache.org/jira/browse/ARTEMIS-5559) - Clarify Jolokia ignore-scheme in docs/config
* [ARTEMIS-5566](https://issues.apache.org/jira/browse/ARTEMIS-5566) - remove unused and invalid pluginManagement entry for jetty-maven-plugin

## Dependency Upgrades

* [ARTEMIS-5453](https://issues.apache.org/jira/browse/ARTEMIS-5453) - Bump com.google.errorprone:error_prone_core from 2.37.0 to 2.39.0
* [ARTEMIS-5454](https://issues.apache.org/jira/browse/ARTEMIS-5454) - Bump picocli.version from 4.7.6 to 4.7.7
* [ARTEMIS-5455](https://issues.apache.org/jira/browse/ARTEMIS-5455) - Bump testcontainers.version from 1.20.6 to 1.21.3
* [ARTEMIS-5456](https://issues.apache.org/jira/browse/ARTEMIS-5456) - Bump jackson.version from 2.18.3 to 2.19.1
* [ARTEMIS-5462](https://issues.apache.org/jira/browse/ARTEMIS-5462) - Update to Netty 4.1.121.Final
* [ARTEMIS-5477](https://issues.apache.org/jira/browse/ARTEMIS-5477) - Bump byteman.version from 4.0.24 to 4.0.25
* [ARTEMIS-5478](https://issues.apache.org/jira/browse/ARTEMIS-5478) - Bump selenium.version from 4.31.0 to 4.34.0
* [ARTEMIS-5479](https://issues.apache.org/jira/browse/ARTEMIS-5479) - Bump org.jline:jline from 3.29.0 to 3.30.4
* [ARTEMIS-5480](https://issues.apache.org/jira/browse/ARTEMIS-5480) - Bump io.micrometer:micrometer-core from 1.14.6 to 1.15.1
* [ARTEMIS-5487](https://issues.apache.org/jira/browse/ARTEMIS-5487) - Bump owb.version from 2.0.27 to 2.0.28
* [ARTEMIS-5488](https://issues.apache.org/jira/browse/ARTEMIS-5488) - Bump org.easymock:easymock from 5.5.0 to 5.6.0
* [ARTEMIS-5502](https://issues.apache.org/jira/browse/ARTEMIS-5502) - Bump mockito.version from 5.17.0 to 5.18.0
* [ARTEMIS-5503](https://issues.apache.org/jira/browse/ARTEMIS-5503) - Bump com.puppycrawl.tools:checkstyle from 10.23.1 to 10.26.1
* [ARTEMIS-5504](https://issues.apache.org/jira/browse/ARTEMIS-5504) - Bump io.netty:netty-tcnative-boringssl-static from 2.0.71.Final to 2.0.72.Final
* [ARTEMIS-5505](https://issues.apache.org/jira/browse/ARTEMIS-5505) - Bump commons-beanutils:commons-beanutils from 1.10.1 to 1.11.0
* [ARTEMIS-5506](https://issues.apache.org/jira/browse/ARTEMIS-5506) - Bump org.apache.groovy:groovy-all from 4.0.26 to 4.0.27
* [ARTEMIS-5507](https://issues.apache.org/jira/browse/ARTEMIS-5507) - Bump org.postgresql:postgresql from 42.7.5 to 42.7.6
* [ARTEMIS-5508](https://issues.apache.org/jira/browse/ARTEMIS-5508) - Bump org.codehaus.mojo:exec-maven-plugin from 3.5.0 to 3.5.1
* [ARTEMIS-5513](https://issues.apache.org/jira/browse/ARTEMIS-5513) - Bump org.junit:junit-bom from 5.12.2 to 5.13.3
* [ARTEMIS-5524](https://issues.apache.org/jira/browse/ARTEMIS-5524) - Bump bc-java-version from 1.80 to 1.81
* [ARTEMIS-5525](https://issues.apache.org/jira/browse/ARTEMIS-5525) - Bump org.codehaus.mojo:build-helper-maven-plugin from 3.6.0 to 3.6.1
* [ARTEMIS-5526](https://issues.apache.org/jira/browse/ARTEMIS-5526) - Bump plugin.components.maven.version from 3.9.9 to 3.9.10
* [ARTEMIS-5531](https://issues.apache.org/jira/browse/ARTEMIS-5531) - Bump owasp.version from 12.1.1 to 12.1.3
* [ARTEMIS-5532](https://issues.apache.org/jira/browse/ARTEMIS-5532) - Bump com.github.ben-manes.caffeine:caffeine from 3.2.0 to 3.2.1
* [ARTEMIS-5537](https://issues.apache.org/jira/browse/ARTEMIS-5537) - Bump org.postgresql:postgresql from 42.7.6 to 42.7.7
* [ARTEMIS-5549](https://issues.apache.org/jira/browse/ARTEMIS-5549) - Bump org.apache:apache from 34 to 35
* [ARTEMIS-5550](https://issues.apache.org/jira/browse/ARTEMIS-5550) - Bump log4j.version from 2.24.3 to 2.25.1
* [ARTEMIS-5552](https://issues.apache.org/jira/browse/ARTEMIS-5552) - Bump com.google.cloud.tools:jib-maven-plugin from 3.4.5 to 3.4.6
* [ARTEMIS-5561](https://issues.apache.org/jira/browse/ARTEMIS-5561) - upgrade console to 1.2.1
* [ARTEMIS-5563](https://issues.apache.org/jira/browse/ARTEMIS-5563) - Bump org.apache.maven.plugins:maven-pmd-plugin from 3.26.0 to 3.27.0
* [ARTEMIS-5567](https://issues.apache.org/jira/browse/ARTEMIS-5567) - Update to jetty 12.0.23
* [ARTEMIS-5568](https://issues.apache.org/jira/browse/ARTEMIS-5568) - Update to arquillian 1.10.0