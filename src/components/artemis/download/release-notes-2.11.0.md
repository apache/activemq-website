---
layout: default_md
title: ActiveMQ Artemis 2.11.0 Release Notes
title-class: page-title-artemis
type: artemis
---

A complete list of JIRAs for the 2.11.0 release can be found [here](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12315920&version=12346258)

A list of commits can be found [here](commit-report-2.11.0).

Release Notes - ActiveMQ Artemis - Version 2.11.0

## Bug
* [[ARTEMIS-2421](https://issues.apache.org/jira/browse/ARTEMIS-2421)] - Implement periodic journal lock evaluation
* [[ARTEMIS-2466](https://issues.apache.org/jira/browse/ARTEMIS-2466)] - PageSyncTimer::timeSync isn't configurable using ASYNCIO journal
* [[ARTEMIS-2494](https://issues.apache.org/jira/browse/ARTEMIS-2494)] - Artemis responds with disposition Rejected if queue is full
* [[ARTEMIS-2497](https://issues.apache.org/jira/browse/ARTEMIS-2497)] - Allow configuring alternative reject behavior for AMQP
* [[ARTEMIS-2500](https://issues.apache.org/jira/browse/ARTEMIS-2500)] - LargeMessage doesn't make a full copy of its props
* [[ARTEMIS-2505](https://issues.apache.org/jira/browse/ARTEMIS-2505)] - Unable to configure address-settings/max-size-bytes-reject-threshold
* [[ARTEMIS-2506](https://issues.apache.org/jira/browse/ARTEMIS-2506)] - MQTT doesn't cleanup underlying connection for bad clients
* [[ARTEMIS-2508](https://issues.apache.org/jira/browse/ARTEMIS-2508)] - Crititical analyser trigger shutdown if removeAllMessages
* [[ARTEMIS-2513](https://issues.apache.org/jira/browse/ARTEMIS-2513)] - Large message's copy may be interfered by other threads
* [[ARTEMIS-2514](https://issues.apache.org/jira/browse/ARTEMIS-2514)] - Duplicate cache leak with clustered temp queues
* [[ARTEMIS-2517](https://issues.apache.org/jira/browse/ARTEMIS-2517)] - JMX Server is stopped after a failback
* [[ARTEMIS-2519](https://issues.apache.org/jira/browse/ARTEMIS-2519)] - ActiveMQUnexpectedRoutingTypeForAddress uses wrong enum type
* [[ARTEMIS-2521](https://issues.apache.org/jira/browse/ARTEMIS-2521)] - Role-mapping not described in documentation
* [[ARTEMIS-2526](https://issues.apache.org/jira/browse/ARTEMIS-2526)] - ActiveMQServerQueuePlugin calls wrong beforeDestroyQueue method
* [[ARTEMIS-2527](https://issues.apache.org/jira/browse/ARTEMIS-2527)] - Print-data may leave thread hanging when there's paged data
* [[ARTEMIS-2529](https://issues.apache.org/jira/browse/ARTEMIS-2529)] - Update address-settings management
* [[ARTEMIS-2531](https://issues.apache.org/jira/browse/ARTEMIS-2531)] - FederatedQueue has invalid filter string leading to an infinite consumer loop
* [[ARTEMIS-2534](https://issues.apache.org/jira/browse/ARTEMIS-2534)] - Deleting addresses auto created on configuration reload
* [[ARTEMIS-2538](https://issues.apache.org/jira/browse/ARTEMIS-2538)] - Removing all messages from a huge queue causes OOM
* [[ARTEMIS-2550](https://issues.apache.org/jira/browse/ARTEMIS-2550)] - Unsupported STOMP Websocket Continuation Frames
* [[ARTEMIS-2554](https://issues.apache.org/jira/browse/ARTEMIS-2554)] - Queue control browse broken with large messages
* [[ARTEMIS-2560](https://issues.apache.org/jira/browse/ARTEMIS-2560)] - Duplicate messages created by cluster lead to OOME crash
* [[ARTEMIS-2564](https://issues.apache.org/jira/browse/ARTEMIS-2564)] - Possible durable message count error with retryMessages()
* [[ARTEMIS-2566](https://issues.apache.org/jira/browse/ARTEMIS-2566)] - Thread safety in the Client InitialContext
* [[ARTEMIS-2567](https://issues.apache.org/jira/browse/ARTEMIS-2567)] - Shared-store failback broken on NFS
* [[ARTEMIS-2570](https://issues.apache.org/jira/browse/ARTEMIS-2570)] - Very slow loading of Connections view
* [[ARTEMIS-2572](https://issues.apache.org/jira/browse/ARTEMIS-2572)] - The retryMessages remove all paged messages
* [[ARTEMIS-2577](https://issues.apache.org/jira/browse/ARTEMIS-2577)] - Thread leak test failure with IBM JRE
* [[ARTEMIS-2583](https://issues.apache.org/jira/browse/ARTEMIS-2583)] - Message permanently in "delivering" state if a JMS XA client crashes
* [[ARTEMIS-2592](https://issues.apache.org/jira/browse/ARTEMIS-2592)] - Purge Queues can lead to deadLock if paging and depaging happening at the same time.
* [[ARTEMIS-2593](https://issues.apache.org/jira/browse/ARTEMIS-2593)] - Thread leak test failure with OpenJ9 JVM

## New Feature
* [[ARTEMIS-2504](https://issues.apache.org/jira/browse/ARTEMIS-2504)] - Support retroactive addresses
* [[ARTEMIS-2540](https://issues.apache.org/jira/browse/ARTEMIS-2540)] - Display LargeMessage column in message browser of admin UI
* [[ARTEMIS-2541](https://issues.apache.org/jira/browse/ARTEMIS-2541)] - Improve rendering in message browser of Admin UI
* [[ARTEMIS-2549](https://issues.apache.org/jira/browse/ARTEMIS-2549)] - Add support for Downstream Federated Queues and Addresses
* [[ARTEMIS-2574](https://issues.apache.org/jira/browse/ARTEMIS-2574)] - Make security manager configurable via XML
* [[ARTEMIS-2580](https://issues.apache.org/jira/browse/ARTEMIS-2580)] - Support pluggable SSL TrustManagerFactory

## Improvement
* [[ARTEMIS-2503](https://issues.apache.org/jira/browse/ARTEMIS-2503)] - Improve wildcards for the roles access match
* [[ARTEMIS-2509](https://issues.apache.org/jira/browse/ARTEMIS-2509)] - Better legacy support for legacy openwire clients
* [[ARTEMIS-2512](https://issues.apache.org/jira/browse/ARTEMIS-2512)] - Move the LocalMonitor tick log
* [[ARTEMIS-2515](https://issues.apache.org/jira/browse/ARTEMIS-2515)] - pageIterator.hasNext spends too much time in the case of no messages matched
* [[ARTEMIS-2516](https://issues.apache.org/jira/browse/ARTEMIS-2516)] - Support system property in xinclude href
* [[ARTEMIS-2524](https://issues.apache.org/jira/browse/ARTEMIS-2524)] - Remove message from map in LVQ if it's deleted/moved/expired/changed
* [[ARTEMIS-2535](https://issues.apache.org/jira/browse/ARTEMIS-2535)] - Add option to ignore PartialResultExceptions in LDAP searches
* [[ARTEMIS-2558](https://issues.apache.org/jira/browse/ARTEMIS-2558)] - Add the commented out args to dump the java heap on OOME
* [[ARTEMIS-2559](https://issues.apache.org/jira/browse/ARTEMIS-2559)] - Connection failure should rollback XA transactions if != Prepared
* [[ARTEMIS-2565](https://issues.apache.org/jira/browse/ARTEMIS-2565)] - Add plugin support for Federated Queues/Addresses
* [[ARTEMIS-2573](https://issues.apache.org/jira/browse/ARTEMIS-2573)] - io.netty:netty-tcnative-boringssl-static should be removed from distribution
* [[ARTEMIS-2578](https://issues.apache.org/jira/browse/ARTEMIS-2578)] - Clarify storage capacity messages
* [[ARTEMIS-2579](https://issues.apache.org/jira/browse/ARTEMIS-2579)] - \[DOC] How to use custom logging handlers
* [[ARTEMIS-2581](https://issues.apache.org/jira/browse/ARTEMIS-2581)] - Make Duplicate Detection Optional on AMQP, default=true
* [[ARTEMIS-2584](https://issues.apache.org/jira/browse/ARTEMIS-2584)] - Optimize PageTransactionInfoImpl in-memory size
* [[ARTEMIS-2585](https://issues.apache.org/jira/browse/ARTEMIS-2585)] - Remove nested quotes from artemis.profile
* [[ARTEMIS-2590](https://issues.apache.org/jira/browse/ARTEMIS-2590)] - Support com.sun.jndi.ldap.read.timeout in LDAPLoginModule
* [[ARTEMIS-2591](https://issues.apache.org/jira/browse/ARTEMIS-2591)] - Add details to consumer lock timeout log

## Test
* [[ARTEMIS-2569](https://issues.apache.org/jira/browse/ARTEMIS-2569)] - LinkedListImpl tests should not rely on the GC mechanism

## Task
* [[ARTEMIS-2523](https://issues.apache.org/jira/browse/ARTEMIS-2523)] - Deprecate the parameter failoverOnInitialConnection
* [[ARTEMIS-2530](https://issues.apache.org/jira/browse/ARTEMIS-2530)] - Upgrade to artemis native 1.0.1
* [[ARTEMIS-2547](https://issues.apache.org/jira/browse/ARTEMIS-2547)] - AMQP Client reconnect fails on broker stop start
* [[ARTEMIS-2557](https://issues.apache.org/jira/browse/ARTEMIS-2557)] - Don't export openwire-protocol JMS spec dependency
* [[ARTEMIS-2423](https://issues.apache.org/jira/browse/ARTEMIS-2423)] - Explain in documentation that auto-create-addresses/queues doesn't work for core protocol

