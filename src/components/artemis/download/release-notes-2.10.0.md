---
layout: default_md
title: ActiveMQ Artemis 2.10.0 Release Notes
title-class: page-title-artemis
type: artemis
---

A complete list of JIRAs for the 2.10.0 release can be found [here](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12315920&version=12345602)

A list of commits can be found [here](commit-report-2.10.0).

## Bug

*   [[ARTEMIS-1011](https://issues.apache.org/jira/browse/ARTEMIS-1011)] - Slow consumer detection - producer msg/s rate for queue should take into account messages which are already in queue
*   [[ARTEMIS-1825](https://issues.apache.org/jira/browse/ARTEMIS-1825)] - Live-backup topology not correctly displayed on console
*   [[ARTEMIS-1982](https://issues.apache.org/jira/browse/ARTEMIS-1982)] - Queue#MessageCount negative and messages stop flowing to AMQP consumer
*   [[ARTEMIS-2002](https://issues.apache.org/jira/browse/ARTEMIS-2002)] - Proton transport objects leaked if client disconnects abruptly leading to OutOfMemoryError: Java heap space
*   [[ARTEMIS-2069](https://issues.apache.org/jira/browse/ARTEMIS-2069)] - Backup doesn't activate after shared store is reconnected
*   [[ARTEMIS-2128](https://issues.apache.org/jira/browse/ARTEMIS-2128)] - Replication - 2nd backup server is unable to go into passive mode
*   [[ARTEMIS-2327](https://issues.apache.org/jira/browse/ARTEMIS-2327)] - JMS Connection ExceptionListener not invoked when ActiveMQConnectionTimedOutException occurs on sendPacket
*   [[ARTEMIS-2350](https://issues.apache.org/jira/browse/ARTEMIS-2350)] - ClassNotFoundException while invoking ActiveMQServerControlImpl::listConsumers
*   [[ARTEMIS-2366](https://issues.apache.org/jira/browse/ARTEMIS-2366)] - artemis-service start failed by java.lang.NoClassDefFoundError
*   [[ARTEMIS-2368](https://issues.apache.org/jira/browse/ARTEMIS-2368)] - Fix races on closing consumer
*   [[ARTEMIS-2371](https://issues.apache.org/jira/browse/ARTEMIS-2371)] - AMQP: message with very large header shuts broker down
*   [[ARTEMIS-2374](https://issues.apache.org/jira/browse/ARTEMIS-2374)] - JournalStorageManager::addBytesToLargeMessage leaks ByteBuffer
*   [[ARTEMIS-2378](https://issues.apache.org/jira/browse/ARTEMIS-2378)] - openwire redelivery counter for message increasing, if consumer is closed without consuming any message
*   [[ARTEMIS-2386](https://issues.apache.org/jira/browse/ARTEMIS-2386)] - MQTT should use internal calls for QOS2
*   [[ARTEMIS-2390](https://issues.apache.org/jira/browse/ARTEMIS-2390)] - JMSMessageID header can be null when messages are cross-protocol
*   [[ARTEMIS-2391](https://issues.apache.org/jira/browse/ARTEMIS-2391)] - Statically created addresses may be auto-deleted
*   [[ARTEMIS-2395](https://issues.apache.org/jira/browse/ARTEMIS-2395)] - Empty address.txt causes NPE
*   [[ARTEMIS-2403](https://issues.apache.org/jira/browse/ARTEMIS-2403)] - Consumer command, clientID is not saved during JMS exception
*   [[ARTEMIS-2405](https://issues.apache.org/jira/browse/ARTEMIS-2405)] - Resource adapter getter should return wrapped objects and not primitive
*   [[ARTEMIS-2407](https://issues.apache.org/jira/browse/ARTEMIS-2407)] - Large message file not deleted if broker crashes between page deleted and pending large message written
*   [[ARTEMIS-2408](https://issues.apache.org/jira/browse/ARTEMIS-2408)] - Too many opened FDs after server stops
*   [[ARTEMIS-2409](https://issues.apache.org/jira/browse/ARTEMIS-2409)] - HornetQ client vs Artemis broker compatibility: issue while using JMSMessageID as selector
*   [[ARTEMIS-2410](https://issues.apache.org/jira/browse/ARTEMIS-2410)] - max-saved-replicated-journals-size=0 throws ArrayIndexOutOfBoundsException
*   [[ARTEMIS-2414](https://issues.apache.org/jira/browse/ARTEMIS-2414)] - Sync before closing file in case data loss
*   [[ARTEMIS-2418](https://issues.apache.org/jira/browse/ARTEMIS-2418)] - Race conditions between cursor movement and page writing
*   [[ARTEMIS-2425](https://issues.apache.org/jira/browse/ARTEMIS-2425)] - Message loss due to writing incomplete page file
*   [[ARTEMIS-2429](https://issues.apache.org/jira/browse/ARTEMIS-2429)] - Swapped arguments to registerQueueGauge cause wrong tags on metrics
*   [[ARTEMIS-2430](https://issues.apache.org/jira/browse/ARTEMIS-2430)] - Avoid data loss when live page cache evicted
*   [[ARTEMIS-2437](https://issues.apache.org/jira/browse/ARTEMIS-2437)] - AMQP message conversion fails if annotations contain values outwith simple property types
*   [[ARTEMIS-2439](https://issues.apache.org/jira/browse/ARTEMIS-2439)] - ServerSessionImpl cache does not clear names of deleted temporary destinations
*   [[ARTEMIS-2440](https://issues.apache.org/jira/browse/ARTEMIS-2440)] - Connection.fail should be executed on a separate thread
*   [[ARTEMIS-2444](https://issues.apache.org/jira/browse/ARTEMIS-2444)] - Artemis hawtio plugin overriding sublevel tabs
*   [[ARTEMIS-2448](https://issues.apache.org/jira/browse/ARTEMIS-2448)] - group-name ignored in replicated colocated setup
*   [[ARTEMIS-2450](https://issues.apache.org/jira/browse/ARTEMIS-2450)] - page-size-bytes should not be greater than Integer.MAX_VALUE
*   [[ARTEMIS-2453](https://issues.apache.org/jira/browse/ARTEMIS-2453)] - DeadLock between server.destroyQueue and server.removeAddressInfo
*   [[ARTEMIS-2454](https://issues.apache.org/jira/browse/ARTEMIS-2454)] - AMQPMessage re-encode may damage the message body and application properties.
*   [[ARTEMIS-2459](https://issues.apache.org/jira/browse/ARTEMIS-2459)] - Fix err in the replacement of a non-destructively consumed LVQ message

## New Feature

*   [[ARTEMIS-2364](https://issues.apache.org/jira/browse/ARTEMIS-2364)] - Implement collision avoidance for redelivery
*   [[ARTEMIS-2401](https://issues.apache.org/jira/browse/ARTEMIS-2401)] - Implement the Pause method for a Topic
*   [[ARTEMIS-2412](https://issues.apache.org/jira/browse/ARTEMIS-2412)] - Full connection configuration through JNDI
*   [[ARTEMIS-2457](https://issues.apache.org/jira/browse/ARTEMIS-2457)] - Implement ring queue

## Improvement

*   [[ARTEMIS-2322](https://issues.apache.org/jira/browse/ARTEMIS-2322)] - Expose Queue.getRate() data as JMX metric
*   [[ARTEMIS-2336](https://issues.apache.org/jira/browse/ARTEMIS-2336)] - Use zero copy to replicate journal/page/large message file
*   [[ARTEMIS-2338](https://issues.apache.org/jira/browse/ARTEMIS-2338)] - Live server does not shutdown when using vote-on-replication-failure
*   [[ARTEMIS-2358](https://issues.apache.org/jira/browse/ARTEMIS-2358)] - Add user and pass to database store to allow encryption
*   [[ARTEMIS-2376](https://issues.apache.org/jira/browse/ARTEMIS-2376)] - Remove guava dependency from OSGi feature
*   [[ARTEMIS-2377](https://issues.apache.org/jira/browse/ARTEMIS-2377)] - Masked password does not work in LDAP security-setting-plugin
*   [[ARTEMIS-2381](https://issues.apache.org/jira/browse/ARTEMIS-2381)] - ActiveMQJMSConnectionFactory - Allow to configure brokerURL via setter
*   [[ARTEMIS-2382](https://issues.apache.org/jira/browse/ARTEMIS-2382)] - Reclaimer doesn't need to be instantiatable
*   [[ARTEMIS-2384](https://issues.apache.org/jira/browse/ARTEMIS-2384)] - AMQ224091 message does not provide reason why bridge connection fails
*   [[ARTEMIS-2385](https://issues.apache.org/jira/browse/ARTEMIS-2385)] - Log header for rejecting message with too large header
*   [[ARTEMIS-2387](https://issues.apache.org/jira/browse/ARTEMIS-2387)] - Add schedule count and routing type to the queue stat command
*   [[ARTEMIS-2389](https://issues.apache.org/jira/browse/ARTEMIS-2389)] - Add more details to AMQ212037
*   [[ARTEMIS-2392](https://issues.apache.org/jira/browse/ARTEMIS-2392)] - Enable remove on cancel policy for scheduled pool
*   [[ARTEMIS-2394](https://issues.apache.org/jira/browse/ARTEMIS-2394)] - Improve scheduling synchronization for AMQPConnectionContext
*   [[ARTEMIS-2399](https://issues.apache.org/jira/browse/ARTEMIS-2399)] - Improve Paging performance when there are a lot of subscribers
*   [[ARTEMIS-2428](https://issues.apache.org/jira/browse/ARTEMIS-2428)] - Exposing shutdownTimeout and gracePeriodTimeout on acceptor as properties
*   [[ARTEMIS-2433](https://issues.apache.org/jira/browse/ARTEMIS-2433)] - Support LDAP role mapping of SASL EXTERNAL credentials
*   [[ARTEMIS-2434](https://issues.apache.org/jira/browse/ARTEMIS-2434)] - Don't lock ServerConsumerImpl for long period of time
*   [[ARTEMIS-2435](https://issues.apache.org/jira/browse/ARTEMIS-2435)] - Configuration on device-block-size through CLI / broker.xml
*   [[ARTEMIS-2438](https://issues.apache.org/jira/browse/ARTEMIS-2438)] - Server Activations should remove themselves after shutdown
*   [[ARTEMIS-2441](https://issues.apache.org/jira/browse/ARTEMIS-2441)] - Use separate file for locking broker and backup
*   [[ARTEMIS-2447](https://issues.apache.org/jira/browse/ARTEMIS-2447)] - Allow mapping admin permission to manage permission in LegacyLDAPSecuritySettingsPlugin
*   [[ARTEMIS-2449](https://issues.apache.org/jira/browse/ARTEMIS-2449)] - Limit size of producer details
*   [[ARTEMIS-2451](https://issues.apache.org/jira/browse/ARTEMIS-2451)] - eliminate knownDestinations cache

## Task

*   [[ARTEMIS-2348](https://issues.apache.org/jira/browse/ARTEMIS-2348)] - The Versions page is out of date
*   [[ARTEMIS-2354](https://issues.apache.org/jira/browse/ARTEMIS-2354)] - Improve compatibillity of tests with JDK 11
*   [[ARTEMIS-2359](https://issues.apache.org/jira/browse/ARTEMIS-2359)] - Upgrade to Guava 24.1
*   [[ARTEMIS-2363](https://issues.apache.org/jira/browse/ARTEMIS-2363)] - spring-core-5.0.1.RELEASE.jar vulnerable to CVE-2018-15756
*   [[ARTEMIS-2367](https://issues.apache.org/jira/browse/ARTEMIS-2367)] - Test Data dir bening created outside the target dir in artemis-server
*   [[ARTEMIS-2379](https://issues.apache.org/jira/browse/ARTEMIS-2379)] - AMQP: Update Qpid JMS and Proton-J to latest releases
*   [[ARTEMIS-2383](https://issues.apache.org/jira/browse/ARTEMIS-2383)] - Upgrade to Guava 24.1.1
*   [[ARTEMIS-2396](https://issues.apache.org/jira/browse/ARTEMIS-2396)] - Clarify documentation on how to add users
*   [[ARTEMIS-2458](https://issues.apache.org/jira/browse/ARTEMIS-2458)] - AMQP Transaction rollback causes loss of message order
*   [[ARTEMIS-2461](https://issues.apache.org/jira/browse/ARTEMIS-2461)] - Update qpid-jms to 0.45
