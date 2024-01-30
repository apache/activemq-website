---
layout: default_md
title: ActiveMQ Artemis 2.32.0 Release Notes
title-class: page-title-artemis
type: artemis
---
 - [A list of commits](commit-report-2.32.0).

 - Please see the ["Versions"](https://activemq.apache.org/components/artemis/documentation/latest/versions.html) chapter in the User Guide for upgrade instructions.

**Note**: This release requires use of Java 11 or above.


## Bugs Fixed

* [ARTEMIS-3831](https://issues.apache.org/jira/browse/ARTEMIS-3831) - Scale-down fails when using same discovery-group used by Broker cluster connection
* [ARTEMIS-4436](https://issues.apache.org/jira/browse/ARTEMIS-4436) - Artemis is logging warnings during clean shutdown of server in cluster
* [ARTEMIS-4470](https://issues.apache.org/jira/browse/ARTEMIS-4470) - Add documentation about calling reencode on AMQP Interceptors or anything on server's side
* [ARTEMIS-4480](https://issues.apache.org/jira/browse/ARTEMIS-4480) - exclusiveConsumer release needs an operation context completion callbacks to ensure isolation for delivered and transacted messages
* [ARTEMIS-4483](https://issues.apache.org/jira/browse/ARTEMIS-4483) - Log.warn messages with AMQP during regular closing of AMQP clients.
* [ARTEMIS-4486](https://issues.apache.org/jira/browse/ARTEMIS-4486) - update metrics documentation
* [ARTEMIS-4499](https://issues.apache.org/jira/browse/ARTEMIS-4499) - ThreadCreateAction won't work properly with SecurityManager
* [ARTEMIS-4504](https://issues.apache.org/jira/browse/ARTEMIS-4504) - running examples creates unexpected dirs/files (or shows failure trying)
* [ARTEMIS-4506](https://issues.apache.org/jira/browse/ARTEMIS-4506) - Restore MQTT subscription queue name syntax
* [ARTEMIS-4507](https://issues.apache.org/jira/browse/ARTEMIS-4507) - Make critical analyzer logging consistent 
* [ARTEMIS-4508](https://issues.apache.org/jira/browse/ARTEMIS-4508) - The recovery connection factory ignores useTopologyForLoadBalancing
* [ARTEMIS-4512](https://issues.apache.org/jira/browse/ARTEMIS-4512) - JMS queue consumer can mistakenly connect to multicast queue
* [ARTEMIS-4513](https://issues.apache.org/jira/browse/ARTEMIS-4513) - HTTP request logging not working
* [ARTEMIS-4515](https://issues.apache.org/jira/browse/ARTEMIS-4515) - Setting web request log using system properties not working
* [ARTEMIS-4517](https://issues.apache.org/jira/browse/ARTEMIS-4517) - rollback causes loss of message order if concurrent producers commit out of order 
* [ARTEMIS-4518](https://issues.apache.org/jira/browse/ARTEMIS-4518) - Exclude slf4j-api from activemq-client to prevent java.lang.LinkageError during artemis-jms-bridge.war deployment
* [ARTEMIS-4520](https://issues.apache.org/jira/browse/ARTEMIS-4520) - JMSContext.acknowledge() doesn't work if last message received is null
* [ARTEMIS-4521](https://issues.apache.org/jira/browse/ARTEMIS-4521) - Deleting divert using management API doesn't remove binding from journal
* [ARTEMIS-4523](https://issues.apache.org/jira/browse/ARTEMIS-4523) - Failover leaving consumers and producers behind
* [ARTEMIS-4529](https://issues.apache.org/jira/browse/ARTEMIS-4529) - NPE with empty core message and STOMP consumer
* [ARTEMIS-4535](https://issues.apache.org/jira/browse/ARTEMIS-4535) - invalid filter in GUI gives large stack-trace in logfile
* [ARTEMIS-4537](https://issues.apache.org/jira/browse/ARTEMIS-4537) - Address setting matches with wildcard are not idempotent
* [ARTEMIS-4540](https://issues.apache.org/jira/browse/ARTEMIS-4540) - Validate MQTT session state data
* [ARTEMIS-4542](https://issues.apache.org/jira/browse/ARTEMIS-4542) - Improve MQTT state storage
* [ARTEMIS-4543](https://issues.apache.org/jira/browse/ARTEMIS-4543) - Journal Sync in NIO not scalling
* [ARTEMIS-4544](https://issues.apache.org/jira/browse/ARTEMIS-4544) - Option to not sync large messages
* [ARTEMIS-4547](https://issues.apache.org/jira/browse/ARTEMIS-4547) - empty message shows "Unsupported message body type which cannot be displayed by hawtio"
* [ARTEMIS-4549](https://issues.apache.org/jira/browse/ARTEMIS-4549) - confirmation for delete/purge-queue mention "address" instead of "queue"
* [ARTEMIS-4551](https://issues.apache.org/jira/browse/ARTEMIS-4551) - Interceptor client example should not depend on interceptor example
* [ARTEMIS-4558](https://issues.apache.org/jira/browse/ARTEMIS-4558) - AMQP Mirror ACKS should be idempotent
* [ARTEMIS-4560](https://issues.apache.org/jira/browse/ARTEMIS-4560) - Wrong default on BridgeConfiguration options when using broker properties
* [ARTEMIS-4563](https://issues.apache.org/jira/browse/ARTEMIS-4563) - Auto created addresses are not removed upon restart
* [ARTEMIS-4564](https://issues.apache.org/jira/browse/ARTEMIS-4564) - Large Message files left over in case of duplicate detection and Mirror
* [ARTEMIS-4565](https://issues.apache.org/jira/browse/ARTEMIS-4565) - 'artemis help' shows wrong text for 'queue'
* [ARTEMIS-4570](https://issues.apache.org/jira/browse/ARTEMIS-4570) - filter not applied to all brokers in cluster
* [ARTEMIS-4571](https://issues.apache.org/jira/browse/ARTEMIS-4571) - Race condition w/TTL impacting in-vm connections
* [ARTEMIS-4574](https://issues.apache.org/jira/browse/ARTEMIS-4574) - Broker diagram no longer works
* [ARTEMIS-4576](https://issues.apache.org/jira/browse/ARTEMIS-4576) - ServerSessionImpl#updateProducerMetrics access large messages after being routed
* [ARTEMIS-4577](https://issues.apache.org/jira/browse/ARTEMIS-4577) - CONNECTION_CLOSED event is sent before deleting temporary resources
* [ARTEMIS-4580](https://issues.apache.org/jira/browse/ARTEMIS-4580) - Security settings for FQQN not enforced on send
* [ARTEMIS-4581](https://issues.apache.org/jira/browse/ARTEMIS-4581) - NullPointer exception on Queue scan Init
* [ARTEMIS-4584](https://issues.apache.org/jira/browse/ARTEMIS-4584) - broker-connections TLS example reconnecting due to mismatched sender config

## New Features

* [ARTEMIS-4452](https://issues.apache.org/jira/browse/ARTEMIS-4452) - Allow to customize http header in http-upgrade request from Artemis
* [ARTEMIS-4488](https://issues.apache.org/jira/browse/ARTEMIS-4488) - Support "literal" address setting match
* [ARTEMIS-4502](https://issues.apache.org/jira/browse/ARTEMIS-4502) - Allow core messages to cross AMQP broker connection links without conversion
* [ARTEMIS-4516](https://issues.apache.org/jira/browse/ARTEMIS-4516) - Support reloading connectors
* [ARTEMIS-4568](https://issues.apache.org/jira/browse/ARTEMIS-4568) - Support reloading AMQP broker federation configuration

## Improvements

* [ARTEMIS-3932](https://issues.apache.org/jira/browse/ARTEMIS-3932) - replace addAddressSettings with JSON param
* [ARTEMIS-4164](https://issues.apache.org/jira/browse/ARTEMIS-4164) - Auto reload acceptor SSL keystores on change
* [ARTEMIS-4495](https://issues.apache.org/jira/browse/ARTEMIS-4495) - Improve documentation on journal retention
* [ARTEMIS-4501](https://issues.apache.org/jira/browse/ARTEMIS-4501) - Clean up MQTT subscription queues when session expires
* [ARTEMIS-4503](https://issues.apache.org/jira/browse/ARTEMIS-4503) - Use BufferedOutputStream on Consumer --data output
* [ARTEMIS-4505](https://issues.apache.org/jira/browse/ARTEMIS-4505) - Cleanup page transactions in case paged files were removed
* [ARTEMIS-4514](https://issues.apache.org/jira/browse/ARTEMIS-4514) - Make Jetty thread pool configurable
* [ARTEMIS-4522](https://issues.apache.org/jira/browse/ARTEMIS-4522) - Flow control may get delayed significantly on occupied pool
* [ARTEMIS-4525](https://issues.apache.org/jira/browse/ARTEMIS-4525) - Deterministic webapp directory names
* [ARTEMIS-4528](https://issues.apache.org/jira/browse/ARTEMIS-4528) - TLS support PEM format for key and trust store type
* [ARTEMIS-4536](https://issues.apache.org/jira/browse/ARTEMIS-4536) - Imrpvoment JournalTransaction API
* [ARTEMIS-4541](https://issues.apache.org/jira/browse/ARTEMIS-4541) - Clarify divert docs
* [ARTEMIS-4552](https://issues.apache.org/jira/browse/ARTEMIS-4552) - Configure all connection-router settings by using broker properties
* [ARTEMIS-4557](https://issues.apache.org/jira/browse/ARTEMIS-4557) - expose producer window size in clusterconnection JMX
* [ARTEMIS-4561](https://issues.apache.org/jira/browse/ARTEMIS-4561) - allow key and trust store type to be configured on the web component
* [ARTEMIS-4566](https://issues.apache.org/jira/browse/ARTEMIS-4566) - Allow management of Mirrored Internal Queue
* [ARTEMIS-4569](https://issues.apache.org/jira/browse/ARTEMIS-4569) - Blocked Producers Memory Leaks
* [ARTEMIS-4575](https://issues.apache.org/jira/browse/ARTEMIS-4575) - Don't start all previous consumers when new consumer added

## Tests

* [ARTEMIS-4526](https://issues.apache.org/jira/browse/ARTEMIS-4526) - Move ShutdownOnCriticalIOErrorMoveNextTest into Isolated tests

## Tasks

* [ARTEMIS-3474](https://issues.apache.org/jira/browse/ARTEMIS-3474) - Replace use of non-inclusive terms throughout source code, comments and documentation
* [ARTEMIS-4476](https://issues.apache.org/jira/browse/ARTEMIS-4476) - Connection Failure Race Conditions in AMQP and Core
* [ARTEMIS-4492](https://issues.apache.org/jira/browse/ARTEMIS-4492) - update logging docs to match current config
* [ARTEMIS-4509](https://issues.apache.org/jira/browse/ARTEMIS-4509) - ActiveMQTestBase leak check should identify state clearly without need of logs
* [ARTEMIS-4511](https://issues.apache.org/jira/browse/ARTEMIS-4511) - prevent MainTest failure causing knock-on failures in later tests
* [ARTEMIS-4530](https://issues.apache.org/jira/browse/ARTEMIS-4530) - Clean up SessionCallback interface
* [ARTEMIS-4533](https://issues.apache.org/jira/browse/ARTEMIS-4533) - Move the examples to their own repository
* [ARTEMIS-4538](https://issues.apache.org/jira/browse/ARTEMIS-4538) - Make note around amqp broker-connection URI transport options more prominent
* [ARTEMIS-4539](https://issues.apache.org/jira/browse/ARTEMIS-4539) - simplify various release process steps
* [ARTEMIS-4546](https://issues.apache.org/jira/browse/ARTEMIS-4546) - Modernize Validators
* [ARTEMIS-4548](https://issues.apache.org/jira/browse/ARTEMIS-4548) - Refactor MQTT tests
* [ARTEMIS-4554](https://issues.apache.org/jira/browse/ARTEMIS-4554) - Upgrade to latest Java for Docker images 
* [ARTEMIS-4556](https://issues.apache.org/jira/browse/ARTEMIS-4556) - Support release of multi-platform Docker images
* [ARTEMIS-4567](https://issues.apache.org/jira/browse/ARTEMIS-4567) - Support OpenWire clients for broker embedded in Jakarta environment

## Dependency Upgrades

* [ARTEMIS-4478](https://issues.apache.org/jira/browse/ARTEMIS-4478) - update to Log4j 2.21.1
* [ARTEMIS-4489](https://issues.apache.org/jira/browse/ARTEMIS-4489) - Update to Karaf 4.4.4
* [ARTEMIS-4490](https://issues.apache.org/jira/browse/ARTEMIS-4490) - update to SLF4J 2.0.9
* [ARTEMIS-4491](https://issues.apache.org/jira/browse/ARTEMIS-4491) - update to activemq 5.18.3
* [ARTEMIS-4493](https://issues.apache.org/jira/browse/ARTEMIS-4493) - Upgrade Hawtio to 2.17.7
* [ARTEMIS-4494](https://issues.apache.org/jira/browse/ARTEMIS-4494) - Upgrade commons-lang3 from 3.12.0 to 3.13.0
* [ARTEMIS-4500](https://issues.apache.org/jira/browse/ARTEMIS-4500) - Upgrade Netty to 4.1.101.Final
* [ARTEMIS-4550](https://issues.apache.org/jira/browse/ARTEMIS-4550) - Upgrade spring boot version to 2.7.18
* [ARTEMIS-4572](https://issues.apache.org/jira/browse/ARTEMIS-4572) - Upgrade to Apache parent 31
* [ARTEMIS-4573](https://issues.apache.org/jira/browse/ARTEMIS-4573) - Upgrade Checkstyle to 10.12.7 &amp; Sevntu to 1.44.1
* [ARTEMIS-4578](https://issues.apache.org/jira/browse/ARTEMIS-4578) - Upgrade Jackson to 2.16.1