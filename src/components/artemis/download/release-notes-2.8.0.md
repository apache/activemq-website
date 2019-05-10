---
layout: default_md
title: ActiveMQ Artemis 2.8.0 Release Notes
title-class: page-title-artemis
type: artemis
---

A complete list of JIRAs for the 2.8.0 release can be found [here](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12315920&version=12345169).

A list of commits can be found [here](commit-report-2.8.0).

## Bug

*   [[ARTEMIS-1592](https://issues.apache.org/jira/browse/ARTEMIS-1592)] - Clustered broker throws "java.lang.IllegalStateException: Cannot find binding for [Queue]" for auto-deleted queues
*   [[ARTEMIS-2286](https://issues.apache.org/jira/browse/ARTEMIS-2286)] - AMQP to Core Conversion doesn't map routing type always.
*   [[ARTEMIS-2289](https://issues.apache.org/jira/browse/ARTEMIS-2289)] - STOMP - SUBSCRIBE with receipt returns multiple receipt-id headers
*   [[ARTEMIS-2290](https://issues.apache.org/jira/browse/ARTEMIS-2290)] - JMSBridgeImpl::stop is failing when called from FailureHandler
*   [[ARTEMIS-2292](https://issues.apache.org/jira/browse/ARTEMIS-2292)] - Auto-delete set at queue level is not honored when not auto-created
*   [[ARTEMIS-2295](https://issues.apache.org/jira/browse/ARTEMIS-2295)] - IBM JDK Cannot parse new XSD
*   [[ARTEMIS-2296](https://issues.apache.org/jira/browse/ARTEMIS-2296)] - AMQ222010: Critical IO Error, shutting down the server, Method org.postgresql.jdbc.PgResultSet.updateBlob(int,Blob) is not yet implemented.
*   [[ARTEMIS-2300](https://issues.apache.org/jira/browse/ARTEMIS-2300)] - message expiry notification is not received from ExpiryScanner
*   [[ARTEMIS-2307](https://issues.apache.org/jira/browse/ARTEMIS-2307)] - old clients require separate security settings if they use the jms.topic or jms.queue prefix
*   [[ARTEMIS-2309](https://issues.apache.org/jira/browse/ARTEMIS-2309)] - TempQueueCleanerUpper instances are leaking
*   [[ARTEMIS-2310](https://issues.apache.org/jira/browse/ARTEMIS-2310)] - Variable substitution does not happen with xinclude'd sub files
*   [[ARTEMIS-2312](https://issues.apache.org/jira/browse/ARTEMIS-2312)] - CoreAmqpConverter settig JMS_DEST_TYPE_MSG_ANNOTATION to a fixed type.
*   [[ARTEMIS-2313](https://issues.apache.org/jira/browse/ARTEMIS-2313)] - Accumulation in HierarchicalObjectRepository cache
*   [[ARTEMIS-2314](https://issues.apache.org/jira/browse/ARTEMIS-2314)] - Broken backwards compatibility with core JMS FQQN consumer
*   [[ARTEMIS-2315](https://issues.apache.org/jira/browse/ARTEMIS-2315)] - Incorrect Routing type of the queue created
*   [[ARTEMIS-2316](https://issues.apache.org/jira/browse/ARTEMIS-2316)] - AMQPMessage missing ApplicationProperties from custom transformer
*   [[ARTEMIS-2318](https://issues.apache.org/jira/browse/ARTEMIS-2318)] - HornetQ Protocol Manager should copy the messages before replacing message properties
*   [[ARTEMIS-2324](https://issues.apache.org/jira/browse/ARTEMIS-2324)] - AMQPDuplicate Detection possible race
*   [[ARTEMIS-2326](https://issues.apache.org/jira/browse/ARTEMIS-2326)] - Remove password parameters before creating protocol manager
*   [[ARTEMIS-2328](https://issues.apache.org/jira/browse/ARTEMIS-2328)] - Invalid Routing with Empty Topics and mixed Session
*   [[ARTEMIS-2329](https://issues.apache.org/jira/browse/ARTEMIS-2329)] - AddressSettings inconsistence on decoding

## New Feature

*   [[ARTEMIS-2306](https://issues.apache.org/jira/browse/ARTEMIS-2306)] - Support ActiveMQ5 feature JMSXGroupFirstForConsumer

## Improvement

*   [[ARTEMIS-2288](https://issues.apache.org/jira/browse/ARTEMIS-2288)] - Clarify handshake timeout error with remote address
*   [[ARTEMIS-2294](https://issues.apache.org/jira/browse/ARTEMIS-2294)] - Support duplicate detection for AMQP messages the same as core
*   [[ARTEMIS-2297](https://issues.apache.org/jira/browse/ARTEMIS-2297)] - Replication isolation during errors could lead to Split Brain
*   [[ARTEMIS-2301](https://issues.apache.org/jira/browse/ARTEMIS-2301)] - Improve check for epoll and kqueue
*   [[ARTEMIS-2305](https://issues.apache.org/jira/browse/ARTEMIS-2305)] - MESSAGES_ACKNOWLEDGED is incrememented even if message consumption is rolled back
*   [[ARTEMIS-2311](https://issues.apache.org/jira/browse/ARTEMIS-2311)] - JMSReplyTo insconsistent when dealing with Protocol conversions
*   [[ARTEMIS-2320](https://issues.apache.org/jira/browse/ARTEMIS-2320)] - Upgrade errorprone compiler dependency to 2.3.3 and review the new warnings
*   [[ARTEMIS-2323](https://issues.apache.org/jira/browse/ARTEMIS-2323)] - NettyTransport should also send requests with void promises

## Task

*   [[ARTEMIS-2298](https://issues.apache.org/jira/browse/ARTEMIS-2298)] - AMQP: Update Qpid JMS and Proton-J to latest releases