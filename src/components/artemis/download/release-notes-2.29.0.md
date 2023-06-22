---
layout: default_md
title: ActiveMQ Artemis 2.29.0 Release Notes
title-class: page-title-artemis
type: artemis
---

 - [A complete list of JIRAs](https://issues.apache.org/jira/secure/ReleaseNote.jspa?version=12352880&projectId=12315920) for the 2.29.0 release.

 - [A list of commits](commit-report-2.29.0).

 - Please see the ["Versions"](https://activemq.apache.org/components/artemis/documentation/latest/versions.html) chapter in the User Guide for upgrade instructions.

**Note**: This release requires use of Java 11 or above.


## Bug
* [ARTEMIS-2431] - [AMQP] Broker does not send security errors for unauthorized anonymous sasl with pipelined open
* [ARTEMIS-2824] - _AMQ_Client_ID on SESSION_CLOSED notification is always null
* [ARTEMIS-3640] - external clients cannot use cluster topology for HA or load balancing
* [ARTEMIS-3809] - LargeMessageControllerImpl hangs the message consume
* [ARTEMIS-4082] - AcknowledgementTest.testDupsOKAcknowledgeQueue test is flakey
* [ARTEMIS-4143] - Improve mitigation against split-brain with shared-storage
* [ARTEMIS-4153] - Support "offline" Maven
* [ARTEMIS-4155] - Broker will dead lock if sending OpenWire Large Messages With Journal Retention configured.
* [ARTEMIS-4157] - Error setting broker properties for AddressSettings
* [ARTEMIS-4160] - jolokia-access.xml getting invalid XML from hostname during instance creation
* [ARTEMIS-4161] - AMQP and OpenWire have a few Leaks during open and close connections
* [ARTEMIS-4162] - Support deleting addresses and queues without usage check
* [ARTEMIS-4163] - Fix concurrency on Large Message parsing in OpenWire
* [ARTEMIS-4168] - Keycloak example is broken
* [ARTEMIS-4170] - Remove redundant queue creation for OpenWire
* [ARTEMIS-4171] - Potential large message file leak
* [ARTEMIS-4172] - Sending large message via core skips plugins & audit logging
* [ARTEMIS-4175] - JournalFileImpl Leaking
* [ARTEMIS-4176] - Console custom root redirect ignored
* [ARTEMIS-4177] - Misleading documentation for "Logging the clients remote address"
* [ARTEMIS-4183] - Broker diagram is not properly updated when new nodes become available
* [ARTEMIS-4185] - Resending compressed message uncompressed throws exception in consumer
* [ARTEMIS-4188] - creating dynamicQueues from an JavaEE MDB applies configured messageSelector as per-queue filters
* [ARTEMIS-4190] - config-delete-queues doesn't always work as expected
* [ARTEMIS-4191] - JournalImpl::needs compact should include more logging to enable eventual investigations
* [ARTEMIS-4193] - Interrupting Large Message Streaming with a server kill may leave orphaned files
* [ARTEMIS-4196] - MQTT cluster message distribution is broken with OFF and OFF_WITH_REDISTRIBUTION loadbalancing types
* [ARTEMIS-4199] - PageCounter leaving record out of Transaction
* [ARTEMIS-4201] - Not sending proper MQTT disconnect code on stolen link
* [ARTEMIS-4206] - Unreferenced AMQP Large Messages are not removed
* [ARTEMIS-4207] - Redistribution may leave large messages stranded
* [ARTEMIS-4208] - OpenWire ChunkSend issuing CriticalAnalyzer
* [ARTEMIS-4209] - "User ID" in web console prefixed with "ID:ID:" for AMQP messages
* [ARTEMIS-4211] - AMQ222153: Cannot locate record in bidirectional upstream queue federation
* [ARTEMIS-4215] - JournalFlush might never happen when journal-sync-* is false
* [ARTEMIS-4233] - QueueImpl::NPE on holder.iter == null
* [ARTEMIS-4234] - EmbeddedActiveMQResource is able to receive only first message
* [ARTEMIS-4235] - Losing bridge connection when sending empty Openwire map message.
* [ARTEMIS-4238] - transaction timeout ActivationConfigProperty is no longer working
* [ARTEMIS-4241] - Paging + FQQN is broken
* [ARTEMIS-4243] - ActiveMQ Artemis CLI fails to export bindings without routing types
* [ARTEMIS-4247] - Inconsistencies between AMQP Mirror and Artemis Clustering
* [ARTEMIS-4249] - Failure to create internal MQTT consumer can orphan subscription queue
* [ARTEMIS-4258] - delayBeforeDispatch not working with OpenWire
* [ARTEMIS-4259] - JMS consumer + FQQN + selector not working
* [ARTEMIS-4266] - Mitigate NPE with bad SSL config
* [ARTEMIS-4267] - Original exception lost for NoCacheLoginException
* [ARTEMIS-4268] - AMQPMessage copy constructor shouldn't copy all message annotations
* [ARTEMIS-4273] - Mask command not picking up codec properties
* [ARTEMIS-4275] - _AMQ_ConsumerName is missing from Consumer Created/Closed notifications
* [ARTEMIS-4278] - Incorrect Page Counters when using Prepared Transactions with Paging
* [ARTEMIS-4279] - CriticalAnalyzer thread does not shut down if error during broker initialization
* [ARTEMIS-4281] - Queue Reaper may remove non empty queues
* [ARTEMIS-4282] - Sending Large ApplicationProperties section in a transactional session may break the server.
* [ARTEMIS-4286] - Sometimes federated consumer won't stop
* [ARTEMIS-4298] - Journal Retention Duplicated files during replication
* [ARTEMIS-4302] - NPE on JournalTransaction::forget
* [ARTEMIS-4303] - Artemis Windows Service fails to start correctly when filepath has a space
* [ARTEMIS-4309] - Large JMS ObjectMessage types result in UTFDataFormatException when deserialized on client side
* [ARTEMIS-4312] - Duplicates with redistribution and multiple multicast queues on the same address

## New Feature
* [ARTEMIS-4195] - Auth callback to get Client ID
* [ARTEMIS-4244] - Set web config using system properties

## Improvement
* [ARTEMIS-4169] - Auto detect dead-letter and expiry queues in the console
* [ARTEMIS-4186] - Ability to set compressionLevel for compressLargeMessages
* [ARTEMIS-4200] - Allow configuring link-stealing behavior for MQTT
* [ARTEMIS-4202] - expand coverage of noCacheExceptions in LDAPLoginModule
* [ARTEMIS-4204] - Connectors added via management are not durable
* [ARTEMIS-4210] - Audit connection creation & destruction
* [ARTEMIS-4212] - Unexpected Behavior when Routing Type of Destinations Doesn't Match Clients
* [ARTEMIS-4236] - Reorganize default broker.xml around paging configuration
* [ARTEMIS-4239] - use StandardCharsets.UTF_8
* [ARTEMIS-4245] - Expose web SNI settings
* [ARTEMIS-4251] - Support CORE client failover to other live servers
* [ARTEMIS-4256] - properties config - support removal
* [ARTEMIS-4262] - Clarify wildcard syntax documentation
* [ARTEMIS-4263] - support access to our JaasCallbackhandler from a jdk http Authenticator
* [ARTEMIS-4265] - Make more web console tabs conditional on permission
* [ARTEMIS-4274] - Push masked credential support into core client
* [ARTEMIS-4280] -  Kubernetes JaaS LoginModule extract role info from review groups
* [ARTEMIS-4283] - Fail fast CORE client connect on closing
* [ARTEMIS-4284] - Openwire prefetched messages can be out of order for a single consumer
* [ARTEMIS-4285] - Disable Redelivery Persistence for new broker installations.
* [ARTEMIS-4291] - Some metrics do not have the "broker" tag
* [ARTEMIS-4292] - Support additional Micrometer system metrics
* [ARTEMIS-4293] - Add management ops to clear authn/z caches
* [ARTEMIS-4294] - Support text WebSocket encoding
* [ARTEMIS-4297] - Allow regex in no-cache exception config
* [ARTEMIS-4313] - Bridge does not retry if destination is full when configured to FAIL
* [ARTEMIS-4324] - extensible OCI image  tar for the broker; java -jar with properties files and optional base xml config

## Test
* [ARTEMIS-4218] - Support console smoke tests from remote servers
* [ARTEMIS-4223] - compatibility tests fail on JDK builds with version qualifiers
* [ARTEMIS-4248] - Fix PagingTest::testSimpleResume
* [ARTEMIS-4250] - ShutdownOnCriticalIOErrorMoveNextTest failing
* [ARTEMIS-4252] - Fix flaky QuorumFailOverTest tests
* [ARTEMIS-4253] - disabling a few ActiveMQServerControlUsingCoreTest tests
* [ARTEMIS-4254] - Transactional / Replication Soak Test
* [ARTEMIS-4290] - Move some tests out of integration-tests into a new module where these tests will run individually
* [ARTEMIS-4308] - Add tests for JDBC and Paging in Soak tests

## Task
* [ARTEMIS-4150] - Disable Log4j2 MBean by default
* [ARTEMIS-4151] - Tighten default MBean access
* [ARTEMIS-4178] - Fixing typo on amqp-broker-connections.md
* [ARTEMIS-4181] - Make try-with-resources style consistent
* [ARTEMIS-4224] - Manage memory consumption on the test suite
* [ARTEMIS-4237] - Move SoakPagingTest and ReplicationFlowControlTest into soak-tests
* [ARTEMIS-4288] - Update to maven-bundle-plugin 5.1.9
* [ARTEMIS-4299] - Exclude unused json-smart dependency

## Dependency upgrade
* [ARTEMIS-4158] - Upgrade doc generation utilities
* [ARTEMIS-4179] - Upgrade keycloak version to 21.0.0
* [ARTEMIS-4194] - Upgrade CheckLeak to 0.8
* [ARTEMIS-4198] - Upgrade qpid/proton-j to 0.34.1
* [ARTEMIS-4203] - Replace aether-api with maven-resolver-api 1.9.6
* [ARTEMIS-4221] - update to Groovy 4.0.10
* [ARTEMIS-4222] - Update to Mockito 5.2.0
* [ARTEMIS-4226] - Upgrade guava version to 31.1-jre
* [ARTEMIS-4227] - Upgrade opentelemetry version to 1.24.0
* [ARTEMIS-4228] - Upgrade testcontainers version to 1.17.6
* [ARTEMIS-4229] - Upgrade selenium version to 4.8.3
* [ARTEMIS-4269] - Upgrade netty version to 4.1.93.Final
* [ARTEMIS-4271] - Update to Spring 5.3.27
* [ARTEMIS-4272] - Update to Jetty 10.0.15
* [ARTEMIS-4287] - Update to Qpid JMS 1.9.0
* [ARTEMIS-4289] - update to Log4j 2.20.0
