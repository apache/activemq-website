---
layout: default_md
title: ActiveMQ Artemis 2.19.1 Release Notes
title-class: page-title-artemis
type: artemis
---

A complete list of JIRAs for the 2.19.0 release can be found  * [here](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12315920&version=12351260)

A list of commits can be found  * [here](commit-report-2.19.1).


# Bug
 * [ARTEMIS-2293] - addPacket method in the org.apache.activemq.artemis.core.client.impl.LargeMessageControllerImpl doesn't notify threads in case of an Exception
 * [ARTEMIS-2922] - artemis-cli consumer on large message results in a ClassCastException
 * [ARTEMIS-3021] - OOM due to wrong CORE clustered message memory estimation
 * [ARTEMIS-3115] - Incorrect default call-failover-timeout on clusterConnection in broker.xml
 * [ARTEMIS-3308] - Federated queue will not move large messages
 * [ARTEMIS-3363] - using parameter minLargeMessage on cluster connections results in stack traces
 * [ARTEMIS-3433] - AMQ224068 on stop due to No OpenSSLContextFactory registered
 * [ARTEMIS-3461] - Browse Queue fails when the queue contains AMQP highly structured messages
 * [ARTEMIS-3495] - Backup cluster controller connection loop after failover
 * [ARTEMIS-3496] - Replica connection to its live should fail fast
 * [ARTEMIS-3529] - Expire move should not reject duplicates from duplicateID
 * [ARTEMIS-3530] - Space in role list breaks user listing
 * [ARTEMIS-3535] - management-message-attribute-size-limit = -1 does not unlimit
 * [ARTEMIS-3540] - SimpleSymmetricClusterTest.testSimpleRestartClusterConnection fix
 * [ARTEMIS-3541] - destroyQueue ignoring autoDeleteAddress flag
 * [ARTEMIS-3543] - Artemis client doesn't support encrypted passwords in composite urls
 * [ARTEMIS-3552] - NullPointerException on message expiration
 * [ARTEMIS-3553] - Expiry Fields AMQP Large Message are not translated on AmqpToCore conversion
 * [ARTEMIS-3554] - Prepared Transaction with Invalid Data may prevent a server start
 * [ARTEMIS-3555] - Invalid Journal Update Record could break compacting
 * [ARTEMIS-3566] - Stomp Embedded Interceptor Example throws NPE
 * [ARTEMIS-3567] - IllegalStateException on web console logout
 * [ARTEMIS-3568] - fixes/improvements on the "Send message" screens
 * [ARTEMIS-3571] - pluralization not always correct
 * [ARTEMIS-3576] - Fix toString methods throwing exceptions
 * [ARTEMIS-3577] - Save Core msg re-encoding due to msg copy
 * [ARTEMIS-3578] - Save SimpleString duplication and long[] allocation while moving Core messages
 * [ARTEMIS-3587] - After upgrade: AMQ224107: The Critical Analyzer detected slow paths on the broker.
 * [ARTEMIS-3593] - OOM error on rogue message to Artemis Broker
 * [ARTEMIS-3596] - ServiceLoader.load causing issues in OSGi enviroments.
 * [ARTEMIS-3604] - Async sends could overflow server with messages in openwire
 * [ARTEMIS-3620] - Journal blocking delete/update record with no sync
 * [ARTEMIS-3623] - extraProperties._AMQ_ACTUAL_EXPIRY should be numeric in expired AMQP messages
 * [ARTEMIS-3625] - NPE on createSharedSubscription when client connects to older versions
 * [ARTEMIS-3626] - simple syntax error in PluggableQuorumBackupSyncJournalTest.java
 * [ARTEMIS-3628] - validation error in pom file
 * [ARTEMIS-3629] - syntax error in css file
 * [ARTEMIS-3630] - missing end tag for pf-table-view in diagram.js
 * [ARTEMIS-3633] - The tooltip for "Artemis password" is the same as for the username field
 * [ARTEMIS-3636] - LinkedListImpl$Iterator leak on mesage consume error
 * [ARTEMIS-3649] - OpenWire consumers with zero prefetch get stuck

# Test
 * [ARTEMIS-3489] - JdbcLeaseLockTest fails sporadically in CI

# Task
 * [ARTEMIS-3538] - Removing // --------- comments from the codebase
 * [ARTEMIS-3612] - Update Hawtio and strip Log4j from console web app
 * Dependency upgrade
 * [ARTEMIS-3537] - update to proton-j 0.33.10
 * [ARTEMIS-3648] - Update netty version to 4.1.73.Final
