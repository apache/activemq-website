---
layout: default_md
title: ActiveMQ Artemis 2.15.0 Release Notes
title-class: page-title-artemis
type: artemis
---

A complete list of JIRAs for the 2.15.0 release can be found [here](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12315920&version=12348568&styleName=Text)

A list of commits can be found [here](commit-report-2.15.0).



Release Notes - ActiveMQ Artemis - Version 2.15.0




## Bug
    * [ARTEMIS-2839] - Audit logging typo for resuming queue
    * [ARTEMIS-2840] - Missing AddressControl audit logging
    * [ARTEMIS-2843] - LVQ + non-destructive not delivering message to existing consumer
    * [ARTEMIS-2846] - Cannot define hawtio.role with whitespace
    * [ARTEMIS-2848] - Resource adapter fails to create durable subscriber with legacy prefix
    * [ARTEMIS-2853] - page-max-concurrent-io cannot be disabled
    * [ARTEMIS-2856] - Consumers can be created on closed sessions
    * [ARTEMIS-2862] - Activation failure can result in zombie broker
    * [ARTEMIS-2865] - LegacyLDAPSecuritySettingPlugin can change default security match
    * [ARTEMIS-2867] - NetworkHealthCheck should not cache IPs, and always use DNS
    * [ARTEMIS-2868] - Protect a replicated broker pair from breaking the topology in case of a split brain
    * [ARTEMIS-2869] - JDBC XML config can't use custom password codec
    * [ARTEMIS-2873] - Configuration Managed Queues are being auto deleted but should not.
    * [ARTEMIS-2877] - Fix journal replication scalability 
    * [ARTEMIS-2881] - Potential deadlock when destroying a queue and depaging concurrently



## New Feature
    * [ARTEMIS-2847] - socks5h support
    * [ARTEMIS-2855] - Define a new broker plugin to track XA transactions
    * [ARTEMIS-2857] - Expose ActivemqServer::isActivated through ActiveMQServerControl

## Improvement
    * [ARTEMIS-2844] - Improve MQTT subscribe/unsubscribe topic performance
    * [ARTEMIS-2845] - ConcurrentAppendOnlyChunkedList cannot be queried while resizing
    * [ARTEMIS-2863] - Support pausing dispatch during group rebalance
    * [ARTEMIS-2872] - Support FQQN syntax for security-settings
    * [ARTEMIS-2880] - Support FQQN syntax for JNDI lookup
    * [ARTEMIS-2882] - Better support for JMS topics + FQQN

## Test
    * [ARTEMIS-2849] - Eliminate zeroing of buffers while writing the ASYNCIO journal
    * [ARTEMIS-2858] - Tests with DNS Changes and outages


## Task
    * [ARTEMIS-2871] - update to proton-j 0.33.6 and qpid-jms 0.54.0





































