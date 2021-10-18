---
layout: default_md
title: ActiveMQ Artemis 2.19.0 Release Notes
title-class: page-title-artemis
type: artemis
---

A complete list of JIRAs for the 2.19.0 release can be found  * [here]()

A list of commits can be found  * [here](commit-report-2.19.0).

# Bug
 * [ARTEMIS-1946] - Cluster with allow-direct-connections-only="true" and localAddress in netty connections with allow-direct-connections-only="true"  prevents core bridge to be created.
 * [ARTEMIS-1960] - "Clusters: Scaling Down" documentation wrong or incomplete
 * [ARTEMIS-3223] - MQTT spec violation when subscribed to wildcard topic on redistribution
 * [ARTEMIS-3313] - DLA messages disappear when running retry or export/import
 * [ARTEMIS-3421] - update doc for default change in ARTEMIS-3367
 * [ARTEMIS-3422] - Message deletion via web console causes NullPointerException if log level >= INFO
 * [ARTEMIS-3423] - recreated shared durable subscription is created as unshared
 * [ARTEMIS-3425] - Paging NPE on reloading after PageComplete record and PageACK record
 * [ARTEMIS-3426] - MQTT retain large messages not copied correctly
 * [ARTEMIS-3429] - Backup forget coordination-id after quorum loss
 * [ARTEMIS-3430] - Activation Sequence Auto-Repair
 * [ARTEMIS-3431] - PrintData is missing a retro-compatible printData method
 * [ARTEMIS-3433] - AMQ224068 on stop due to No OpenSSLContextFactory registered
 * [ARTEMIS-3434] - Journal Retention is using the wrong month
 * [ARTEMIS-3438] - Legacy updateQueue doesn't respect ringSize
 * [ARTEMIS-3443] - Browse Queue Body don't show full text
 * [ARTEMIS-3454] - Prevent directory listing for deployed web apps
 * [ARTEMIS-3459] - AMQPMessage.scanMessageData() creates unecessary buffer wrapper
 * [ARTEMIS-3464] - Mirror could Miss Acks with Paging
 * [ARTEMIS-3465] -  BufferSplitter::split shouldn't consume input buffer
 * [ARTEMIS-3466] - byte arrays are shown with negative hex numbers
 * [ARTEMIS-3467] - FD leak on receiving AMQP large messages
 * [ARTEMIS-3468] - field "selected" is sometimes visible in the message details in Browse queue
 * [ARTEMIS-3470] - IDE integration - error on junit interspection
 * [ARTEMIS-3471] - Implement "session present" for MQTT CONNACK
 * [ARTEMIS-3472] - Openwire reconnect may leave internal session null
 * [ARTEMIS-3475] - Possible recursion on PacketImpl::toString
 * [ARTEMIS-3485] - Custom web context path doesn't work
 * [ARTEMIS-3491] - JMX: cluster-connection restart does not work
 * [ARTEMIS-3494] - ActiveMQClientProtocolManagerFactory shouldn't have a private constructor
 * [ARTEMIS-3498] - Bridge will not discount delivering counts on internal queues
 * [ARTEMIS-3501] - Corrupted message in journal can inhibit broker from starting
 * [ARTEMIS-3502] - Auto delete of a queue could lead to inconsistencies
 * [ARTEMIS-3513] - Compacting Exception May Invalid Journal Deletes and updates
 * [ARTEMIS-3519] - OperationContextImpl storeOnly is broken
 * [ARTEMIS-3520] - include failure hint in Open frame sent when broker-balancer rejects or redirects AMQP connection

# New Feature
 * [ARTEMIS-3329] - Add ability to purge all queues on an address
 * [ARTEMIS-3436] - Expose Retention as a JMX Operation replay
 * [ARTEMIS-3488] - Create env variable `AMQ_PASSWORD_CODEC_INIT_KEY`

# Improvement
 * [ARTEMIS-1925] - Allow message redistribution even with OFF message-load-balancing semantics
 * [ARTEMIS-2007] - Messages not redistributed to consumers with matching filters when local non matching consumers are present
 * [ARTEMIS-2545] - Auto queue creation does not work with MDBs
 * [ARTEMIS-3300] - artemis.data system property for OSGi runtime environment
 * [ARTEMIS-3432] - Use batavia to produce transformed source code instead of transformed binaries
 * [ARTEMIS-3442] - Allow configuration of journal-retention through CLI
 * [ARTEMIS-3445] - Automatically clean-up abandoned MQTT subscriptions
 * [ARTEMIS-3446] - Pluggable quorum vote force live CLI command
 * [ARTEMIS-3448] - AMQP Large message delivery fails with expiry eventually
 * [ARTEMIS-3449] - Speedup AMQP large message streaming
 * [ARTEMIS-3457] - Log WARN for OpenWire property conversion problem
 * [ARTEMIS-3462] - Improve MBean Guard exception messages
 * [ARTEMIS-3469] - Browse queue shows timestamp/expires as human readable, but message view does not
 * [ARTEMIS-3484] - Flesh out Jakarta Messaging support
 * [ARTEMIS-3493] - expose the User ID in the send message tab in console
 * [ARTEMIS-3508] - detailed message view provides less information for some fields
 * [ARTEMIS-3510] - explain magic values in properties in browse view
 * [ARTEMIS-3521] - Configuration property to disable openwire duplicate detection on failover clients

# Test
 * [ARTEMIS-3435] - ActiveMQTestBase.checkLibaio waits can cause hours to be added to failing test suite
 * [ARTEMIS-3450] - StaticPoolTest and DiscoveryPoolTest fail sporadically in CI
 * [ARTEMIS-3458] - CuratorDistributedLockTest fails a lot in CI
 * [ARTEMIS-3473] - Testsuite leaving "null" folder behind
 * [ARTEMIS-3514] - update Mockito to 3.12.4

# Task
 * [ARTEMIS-2933] - Add .NET Famework v4.0 supported runtime for com.sun.winsw
 * [ARTEMIS-3038] - unwind defunct changes from ARTEMIS-1264
 * [ARTEMIS-3440] - separate effect of -Pdev from -Ptests
 * [ARTEMIS-3441] - Removing some finalize methods
 * [ARTEMIS-3451] - add dependencyManagement entry to consolidate versioning for qpid-jms-client usage
 * [ARTEMIS-3453] - exclude transitive log4j dep from zookeeper usage
 * [ARTEMIS-3482] - Tidy up on AMQP Large message methods
 * [ARTEMIS-3486] - refresh data tools documentation
 * [ARTEMIS-3515] - Adding an example with broker connection and multicast

# Dependency upgrade
 * [ARTEMIS-3447] - update version of bcprov-jdk15on used by Directory in tests
 * [ARTEMIS-3455] - Upgrade jasypt to 1.9.3
 * [ARTEMIS-3476] - Upgrade maven-artifact to 3.8.2
 * [ARTEMIS-3477] - Upgrade selenium-java to 3.141.59
 * [ARTEMIS-3478] - Upgrade netty version to 4.1.68.Final
 * [ARTEMIS-3479] - Upgrade commons-codec version to 1.15
 * [ARTEMIS-3497] - update to proton-j 0.33.9
 * [ARTEMIS-3518] - Upgrade karaf version to 4.3.3


























