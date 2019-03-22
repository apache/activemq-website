--- 
layout: default 
title: ActiveMQ Artemis 2.6.4 Release Notes
title-class: page-title-artemis
type: artemis
---
A complete list of JIRAs for the 2.6.4 release can be found [here](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12315920&version=12344010).

A list of commits can be found [here](commit-report-2.6.4).

#### Bug

* \[[ARTEMIS-1018](https://issues.apache.org/jira/browse/ARTEMIS-1018)\] - Duplicate error ids on different error messages
* \[[ARTEMIS-1536](https://issues.apache.org/jira/browse/ARTEMIS-1536)\] - Incorrect Journal filesize calculation where specified size is lest that the block size when using AIO
* \[[ARTEMIS-1710](https://issues.apache.org/jira/browse/ARTEMIS-1710)\] - Allow for management messages to exceed global-max-size limit
* \[[ARTEMIS-1825](https://issues.apache.org/jira/browse/ARTEMIS-1825)\] - Live-backup topology not correctly displayed on console
* \[[ARTEMIS-1850](https://issues.apache.org/jira/browse/ARTEMIS-1850)\] - QueueControl.listDeliveringMessages returns empty result
* \[[ARTEMIS-1898](https://issues.apache.org/jira/browse/ARTEMIS-1898)\] - \[AMQP\] sender is not granted credit once space on queue is available
* \[[ARTEMIS-1919](https://issues.apache.org/jira/browse/ARTEMIS-1919)\] - artemis-core-client TLS SNI and verifyHost operation are not independent
* \[[ARTEMIS-1929](https://issues.apache.org/jira/browse/ARTEMIS-1929)\] - Race condition in STOMP with multiple, identical durable subcribers
* \[[ARTEMIS-1996](https://issues.apache.org/jira/browse/ARTEMIS-1996)\] - MappedSequentialFileFactory may cause DirectByteBuffer memory leaks
* \[[ARTEMIS-2000](https://issues.apache.org/jira/browse/ARTEMIS-2000)\] - scaleDown/scaledownconnector call does not take routing type into account when creating queues on addresses
* \[[ARTEMIS-2050](https://issues.apache.org/jira/browse/ARTEMIS-2050)\] - It is possible to get AMQ224000: Failure in initialisation: java.lang.NullPointerException during shutdown of backup server with shared store
* \[[ARTEMIS-2072](https://issues.apache.org/jira/browse/ARTEMIS-2072)\] - Significant performance degradation introduced after 2.4 when using auto create queues
* \[[ARTEMIS-2073](https://issues.apache.org/jira/browse/ARTEMIS-2073)\] - connection null in interceptors
* \[[ARTEMIS-2074](https://issues.apache.org/jira/browse/ARTEMIS-2074)\] - ActiveMQConnectionFactory URI is not changing Properties on ServerLocator
* \[[ARTEMIS-2078](https://issues.apache.org/jira/browse/ARTEMIS-2078)\] - AMQP large messages aren't consumed between cluster nodes with persistence disabled
* \[[ARTEMIS-2084](https://issues.apache.org/jira/browse/ARTEMIS-2084)\] - Failover won't happen when net cable is disconnected unless Netty Timeout is specified
* \[[ARTEMIS-2089](https://issues.apache.org/jira/browse/ARTEMIS-2089)\] - DB2 sending larger message (1MB) crashes the whole server
* \[[ARTEMIS-2092](https://issues.apache.org/jira/browse/ARTEMIS-2092)\] - First page messages lost on server crash
* \[[ARTEMIS-2093](https://issues.apache.org/jira/browse/ARTEMIS-2093)\] - NPE thrown by NettyConnector::createConnection
* \[[ARTEMIS-2095](https://issues.apache.org/jira/browse/ARTEMIS-2095)\] - TypedProperties thread safety
* \[[ARTEMIS-2098](https://issues.apache.org/jira/browse/ARTEMIS-2098)\] - Potential NPE when decoding protocol
* \[[ARTEMIS-2099](https://issues.apache.org/jira/browse/ARTEMIS-2099)\] - Avoid possible double instantiation of properties
* \[[ARTEMIS-2100](https://issues.apache.org/jira/browse/ARTEMIS-2100)\] - address routing-type overridden on attaching AMQP sender
* \[[ARTEMIS-2102](https://issues.apache.org/jira/browse/ARTEMIS-2102)\] - delete paging directory or table if address is removed
* \[[ARTEMIS-2105](https://issues.apache.org/jira/browse/ARTEMIS-2105)\] - Discovery group connectors can delay broker shutdown
* \[[ARTEMIS-2106](https://issues.apache.org/jira/browse/ARTEMIS-2106)\] - Failures during broker start are not clearly logged
* \[[ARTEMIS-2107](https://issues.apache.org/jira/browse/ARTEMIS-2107)\] - Clarify identity for authn failures in notification
* \[[ARTEMIS-2108](https://issues.apache.org/jira/browse/ARTEMIS-2108)\] - Potential StackOverflowError when load balancing disabled
* \[[ARTEMIS-2110](https://issues.apache.org/jira/browse/ARTEMIS-2110)\] - JDBC LeaseLocker repeated renew or renew after aquire can fail in error
* \[[ARTEMIS-2111](https://issues.apache.org/jira/browse/ARTEMIS-2111)\] - ManagementContext can leak
* \[[ARTEMIS-2112](https://issues.apache.org/jira/browse/ARTEMIS-2112)\] - Remove JMX properties from start scripts
* \[[ARTEMIS-2114](https://issues.apache.org/jira/browse/ARTEMIS-2114)\] - hawtio destination delete and purge buttons overlap when pane is resized
* \[[ARTEMIS-2123](https://issues.apache.org/jira/browse/ARTEMIS-2123)\] - Paging not stopped if there are no messages on one subscription
* \[[ARTEMIS-2130](https://issues.apache.org/jira/browse/ARTEMIS-2130)\] - Web console display blank ClientID for the core client.
* \[[ARTEMIS-2131](https://issues.apache.org/jira/browse/ARTEMIS-2131)\] - Error compacting journal
* \[[ARTEMIS-2133](https://issues.apache.org/jira/browse/ARTEMIS-2133)\] - Artemis tab not showing on IE browser
* \[[ARTEMIS-2136](https://issues.apache.org/jira/browse/ARTEMIS-2136)\] - Lack of synchronization on CoreMessage.copy may cause issues
* \[[ARTEMIS-2137](https://issues.apache.org/jira/browse/ARTEMIS-2137)\] - Console retry message is broken
* \[[ARTEMIS-2139](https://issues.apache.org/jira/browse/ARTEMIS-2139)\] - Message sent to JMSReplyTo from old client does not find correct bindings
* \[[ARTEMIS-2140](https://issues.apache.org/jira/browse/ARTEMIS-2140)\] - AMQP Shared Subscriptions fail because of RaceCondition
* \[[ARTEMIS-2144](https://issues.apache.org/jira/browse/ARTEMIS-2144)\] - tx begin failure in ra doesn't get cleaned up
* \[[ARTEMIS-2146](https://issues.apache.org/jira/browse/ARTEMIS-2146)\] - Broker throws exception and becomes unresponsive during AMQP messaging
* \[[ARTEMIS-2149](https://issues.apache.org/jira/browse/ARTEMIS-2149)\] - CoreMessage may have issues encoding if messageChanged is called for any reason.
* \[[ARTEMIS-2155](https://issues.apache.org/jira/browse/ARTEMIS-2155)\] - Failure to handle packet should force consumer to disconnect
* \[[ARTEMIS-2158](https://issues.apache.org/jira/browse/ARTEMIS-2158)\] - don't get pagedMessage if it's nontransactional
* \[[ARTEMIS-2159](https://issues.apache.org/jira/browse/ARTEMIS-2159)\] - OpenWire will allow one extra message to be sent after address is full
* \[[ARTEMIS-2160](https://issues.apache.org/jira/browse/ARTEMIS-2160)\] - Cluster connection non-default configuration elements ignored
* \[[ARTEMIS-2174](https://issues.apache.org/jira/browse/ARTEMIS-2174)\] - Broker reconnect to another with scale down policy cause OOM
* \[[ARTEMIS-2175](https://issues.apache.org/jira/browse/ARTEMIS-2175)\] - Duplicate messages when JMS bridge is stopped and restarted
* \[[ARTEMIS-2187](https://issues.apache.org/jira/browse/ARTEMIS-2187)\] - PageCursorInfo put into consumedPages when page is deleting
* \[[ARTEMIS-2188](https://issues.apache.org/jira/browse/ARTEMIS-2188)\] - Paged large message results in pagingStore sizeInBytes leak when the page is evicted
* \[[ARTEMIS-2190](https://issues.apache.org/jira/browse/ARTEMIS-2190)\] - Core JMS client leaks temporary destination names
* \[[ARTEMIS-2197](https://issues.apache.org/jira/browse/ARTEMIS-2197)\] - Page deleted before transaction finishes
* \[[ARTEMIS-2200](https://issues.apache.org/jira/browse/ARTEMIS-2200)\] - NPE while dropping/failing large messages on paging
* \[[ARTEMIS-2202](https://issues.apache.org/jira/browse/ARTEMIS-2202)\] - Improve MSSQL support for JDBC storage
* \[[ARTEMIS-2207](https://issues.apache.org/jira/browse/ARTEMIS-2207)\] - Page Cursor logging warn for previously acked messages
* \[[ARTEMIS-2210](https://issues.apache.org/jira/browse/ARTEMIS-2210)\] - Fix PagingStore creation synchronization issue
* \[[ARTEMIS-2228](https://issues.apache.org/jira/browse/ARTEMIS-2228)\] - Check message size sent over management API
* \[[ARTEMIS-2229](https://issues.apache.org/jira/browse/ARTEMIS-2229)\] - Qpid jms consumer cannot receive from multicast queue using FQQN

#### New Feature

* \[[ARTEMIS-2116](https://issues.apache.org/jira/browse/ARTEMIS-2116)\] - Set text message content on producer CLI command
* \[[ARTEMIS-2121](https://issues.apache.org/jira/browse/ARTEMIS-2121)\] - Reload logging configuration at runtime

#### Improvement

* \[[ARTEMIS-1961](https://issues.apache.org/jira/browse/ARTEMIS-1961)\] - Track routed and unrouted messages sent to an address
* \[[ARTEMIS-2075](https://issues.apache.org/jira/browse/ARTEMIS-2075)\] - Extra backups only try to replicate once
* \[[ARTEMIS-2082](https://issues.apache.org/jira/browse/ARTEMIS-2082)\] - AMQP: Message corruption possible on redelivered message that have moved
* \[[ARTEMIS-2083](https://issues.apache.org/jira/browse/ARTEMIS-2083)\] - AMQP: Ensure message elements are not decoded unless needed
* \[[ARTEMIS-2085](https://issues.apache.org/jira/browse/ARTEMIS-2085)\] - Improve validation of MDB activation config properties values
* \[[ARTEMIS-2087](https://issues.apache.org/jira/browse/ARTEMIS-2087)\] - Support masked passwords in management.xml
* \[[ARTEMIS-2125](https://issues.apache.org/jira/browse/ARTEMIS-2125)\] - Queue preference changes to display columns not persistent through page refresh
* \[[ARTEMIS-2127](https://issues.apache.org/jira/browse/ARTEMIS-2127)\] - Add auth details to consumer created notification
* \[[ARTEMIS-2157](https://issues.apache.org/jira/browse/ARTEMIS-2157)\] - Add Information on Paths for CriticalAnalyzer
* \[[ARTEMIS-2163](https://issues.apache.org/jira/browse/ARTEMIS-2163)\] - Classloading issue if artemis-commons is not in ther same classloader as artemis-client-\* or artemis-server

#### Test

* \[[ARTEMIS-1894](https://issues.apache.org/jira/browse/ARTEMIS-1894)\] - NetworkHeathTest hits apache.org (or fails to) as a side effect
* \[[ARTEMIS-2104](https://issues.apache.org/jira/browse/ARTEMIS-2104)\] - Implement tests for Import/Export (replay) of messages
* \[[ARTEMIS-2201](https://issues.apache.org/jira/browse/ARTEMIS-2201)\] - Create tests on DEFAULT\_JOURNAL\_FILE\_OPEN\_TIMEOUT value

#### Task

* \[[ARTEMIS-2086](https://issues.apache.org/jira/browse/ARTEMIS-2086)\] - Remove HDRHistogram dependency
* \[[ARTEMIS-2135](https://issues.apache.org/jira/browse/ARTEMIS-2135)\] - NPE in AMQPMessage getPriority
* \[[ARTEMIS-2148](https://issues.apache.org/jira/browse/ARTEMIS-2148)\] - getDoubleProperty changes the message
