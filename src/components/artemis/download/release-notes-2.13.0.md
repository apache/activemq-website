---
layout: default_md
title: ActiveMQ Artemis 2.13.0 Release Notes
title-class: page-title-artemis
type: artemis
---

A complete list of JIRAs for the 2.13.0 release can be found [here](https://issues.apache.org/jira/secure/ReleaseNote.jspa?version=12348088&styleName=Text&projectId=12315920&Create=Create&atl_token=A5KQ-2QAV-T4JA-FDED_ab1c19329c3c749d4aa188134b14f1a230130c66_lin)

A list of commits can be found [here](commit-report-2.13.0).

Release Notes - ActiveMQ Artemis - Version 2.13.0

## Bug
    * [ARTEMIS-2638] - Retroactive resources created recursively when using # match
    * [ARTEMIS-2655] - Support auto-creation w/FQQN for STOMP
    * [ARTEMIS-2740] - Broker sends messages from DLQ populated with illegal AMQP message annotations
    * [ARTEMIS-2743] - Synchronize JMS connection methods
    * [ARTEMIS-2744] - Fix karaf mvn repositories for ArtemisFeatureTest
    * [ARTEMIS-2745] - Queue registering wrong metrics
    * [ARTEMIS-2750] - AMQP server consumer should flush NettyExecutor first
    * [ARTEMIS-2752] - Federated Address DivertBindings are not properly updated on queue binding removal
    * [ARTEMIS-2753] - OpenWire Temp Queues fail if using _ on wildcard config and if computer name has "." on the name
    * [ARTEMIS-2757] - AMQP: Broker grants credit before accepting the inbound messages that caused it to grant credit
    * [ARTEMIS-2763] - Embedded Artemis fails to start when journal grows too big
    * [ARTEMIS-2765] - StringIndexOutOfBoundsException while processing broker.xml

## New Feature
    * [ARTEMIS-2666] - Add management for duplicate ID cache 
    * [ARTEMIS-2726] - Implement min/max expiry-delay
    * [ARTEMIS-2738] - Implement per-acceptor security domains
    * [ARTEMIS-2739] - Artemis health check tool
    * [ARTEMIS-2758] - Support disabling metrics per address
    * [ARTEMIS-2761] - Supporting QUOTED-IDS on expressions to align with qpid-jms

## Improvement
    * [ARTEMIS-2372] - Support Filtering on Message Annotations
    * [ARTEMIS-2648] - Improve the Audit logging capabilities
    * [ARTEMIS-2680] - Use queue name for address if none specified via configuration
    * [ARTEMIS-2704] - Provide a SPI to manage and cache SSLContext 
    * [ARTEMIS-2718] - Take advantage of ARTEMIS-2704 to cache SSLContexts
    * [ARTEMIS-2720] - Optimize HierarchicalObjectRepository
    * [ARTEMIS-2741] - Pass Call timeout to connection bridges
    * [ARTEMIS-2749] - Add control objects for non UDP broadcast groups
    * [ARTEMIS-2755] - Improve SoakPagingTest stability
    * [ARTEMIS-2759] - Warn ignored connection factory URI parameters
    * [ARTEMIS-2760] - Filter AddressQueueReaper misleading error messages
    * [ARTEMIS-2762] - JournalRecord is using too much memory to track JournalFile updates
    * [ARTEMIS-2766] - Avoid parsing application properties for duplicate detection
    * [ARTEMIS-2767] - Perf Improvement. Routing = null should still reuse context

## Test
    * [ARTEMIS-2730] - Move AuditLoggerTest as a smoke test
    * [ARTEMIS-2734] - Implement Apache logger for the testsuite


## Task
    * [ARTEMIS-2709] - Fix  LiveToLiveFailoverTest::scaleDownDelay
    * [ARTEMIS-2717] - Isolate the current Quorum Vote implementation
    * [ARTEMIS-2732] - Cleanup Logging on tests
    * [ARTEMIS-2737] - Update apache commons-text version to 1.8
    * [ARTEMIS-2747] - Upgrade com.sun.winsw to 2.7.0
    * [ARTEMIS-2764] - Update to Qpid JMS 0.51.0
