---
layout: default_md
title: ActiveMQ Artemis 2.16.0 Release Notes
title-class: page-title-artemis
type: artemis
---

A complete list of JIRAs for the 2.15.0 release can be found [here](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12315920&version=12348718&styleName=Text)

A list of commits can be found [here](commit-report-2.16.0).


Release Notes - ActiveMQ Artemis - Version 2.16.0




## Bug
    * [ARTEMIS-2696] - Netty DirectBufferLeak noticed in the log and server not processing messages with out of direct memory errors after running for a day
    * [ARTEMIS-2768] - Negative AddressSize in JMX
    * [ARTEMIS-2854] - Non-durable subscribers may stop receiving after failover
    * [ARTEMIS-2859] - Strange Address Sizes on clustered topics.
    * [ARTEMIS-2874] - PagingStoreImplTest.testConcurrentDepage fails a lot
    * [ARTEMIS-2875] - Failed to handle reestablish connection failover
    * [ARTEMIS-2888] - MQTT spec violation when subscribed to wildcard topic
    * [ARTEMIS-2890] - FQQN security-settings + JMS not working
    * [ARTEMIS-2893] - Concurrent user admin actions can corrupt properties
    * [ARTEMIS-2895] - Support authentication over anonymous connection context in LDAPLoginModule
    * [ARTEMIS-2896] - RA doubles legacy prefix
    * [ARTEMIS-2902] - expose at queue control messages held in a prepared tx
    * [ARTEMIS-2908] - Persist Divert Configuration in Bindings journal
    * [ARTEMIS-2909] - Revert ARTEMIS-2322
    * [ARTEMIS-2910] - consider routing type annotations during node auto-creation for AMQP anonymous producers
    * [ARTEMIS-2911] - DB2 isn't replacing Blob data
    * [ARTEMIS-2912] - Server start exception before activation can cause a zombie broker
    * [ARTEMIS-2914] - MariaDB SQL isn't correctly recognized
    * [ARTEMIS-2915] - Duplicate temp queues using OpenWire
    * [ARTEMIS-2920] - ActiveMQ Artemis Features build fails using IBM JDK 1.8
    * [ARTEMIS-2924] - Boot fails with NPE when using JDBC storage and trace logging is enabled
    * [ARTEMIS-2926] - Scheduled task executions are skipped randomly
    * [ARTEMIS-2927] - LVQ broken after restart
    * [ARTEMIS-2935] - Cannot start broker when jmx-use-broker-name is set
    * [ARTEMIS-2951] - Large Message Ref counting may leave messages not removed
    * [ARTEMIS-2953] - Page.finalize causing intermittent test failures
    * [ARTEMIS-2954] - RA doesn't use the RA specified prefix when setting up a destination
    * [ARTEMIS-2955] - commons-dbcp2 performance issue with Derby Embedded DBMS
    * [ARTEMIS-2957] - ManagementContext is started twice
    * [ARTEMIS-2958] - Timed out waiting pool stop on backup restart
    * [ARTEMIS-2964] - Openwire ActiveMQ.Advisory.Connection  does not fire
    * [ARTEMIS-2966] - Server.send does not support ANYCAST with distinct queue names.
    * [ARTEMIS-2968] - stacktrace-including warnings of non-existent queues/addresses emitted during AMQPReplicaTest#testDualStandard
    * [ARTEMIS-2969] - broker doesnt handle server-connection being severed
    * [ARTEMIS-2973] - JMS AMQP Shared global subscriber queue not deleted on unsubscribe



## New Feature
    * [ARTEMIS-2901] - Support namespace for temporary queues
    * [ARTEMIS-2937] - AMQP Server Connectivity
    * [ARTEMIS-2947] - Implement SecurityManager that supports replication

## Improvement
    * [ARTEMIS-589] - Add prefetch control support via STOMP
    * [ARTEMIS-2823] - Improve JDBC connection management
    * [ARTEMIS-2838] - Migrate Console to use Hawtio 2
    * [ARTEMIS-2878] - Add numberOfPages as metric
    * [ARTEMIS-2886] - Optimize security auth
    * [ARTEMIS-2887] - Expose AMQP Message through Audit Logger
    * [ARTEMIS-2889] - Support JMS topic use-cases with LegacyLDAPSecuritySettingPlugin
    * [ARTEMIS-2900] - Expose whole wire size on Large Messages
    * [ARTEMIS-2903] - Support admin objects in JCA RA
    * [ARTEMIS-2904] - Prevent acceptor from automatically starting
    * [ARTEMIS-2906] - Add lastAckTimestamp to message counter
    * [ARTEMIS-2928] - blocking CallbackCache can be replaced with a JCTools lock-free queue
    * [ARTEMIS-2936] - Add information on when to enable trace on CriticalAnalyzer
    * [ARTEMIS-2939] - Artemis should not delete corrupt log files
    * [ARTEMIS-2941] - Improve JDBC HA connection resiliency
    * [ARTEMIS-2949] - Reduce GC on OperationContext::checkTasks



## Task
    * [ARTEMIS-2921] - Update netty version to 4.1.51.Final
    * [ARTEMIS-2942] - Disable hawtio proxy
    * [ARTEMIS-2960] - Update httpcomponents
