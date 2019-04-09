---
layout: default_md
title: ActiveMQ Artemis 2.7.0 Release Notes
title-class: page-title-artemis
type: artemis
---

A complete list of JIRAs for the 2.7.0 release can be found [here](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12315920&version=12342977).

A list of commits can be found [here](commit-report-2.7.0).

#### Bug

* \[[ARTEMIS-1018](https://issues.apache.org/jira/browse/ARTEMIS-1018)\] - Duplicate error ids on different error messages
* \[[ARTEMIS-1058](https://issues.apache.org/jira/browse/ARTEMIS-1058)\] - Jars in web tmp dir locked on Windows
* \[[ARTEMIS-1536](https://issues.apache.org/jira/browse/ARTEMIS-1536)\] - Incorrect Journal filesize calculation where specified size is lest that the block size when using AIO
* \[[ARTEMIS-1604](https://issues.apache.org/jira/browse/ARTEMIS-1604)\] - Artemis deadlock using MQTT Protocol
* \[[ARTEMIS-1710](https://issues.apache.org/jira/browse/ARTEMIS-1710)\] - Allow for management messages to exceed global-max-size limit
* \[[ARTEMIS-1795](https://issues.apache.org/jira/browse/ARTEMIS-1795)\] - The documentation regarding STOMP and message IDs is not correct
* \[[ARTEMIS-1825](https://issues.apache.org/jira/browse/ARTEMIS-1825)\] - Live-backup topology not correctly displayed on console
* \[[ARTEMIS-1858](https://issues.apache.org/jira/browse/ARTEMIS-1858)\] - Expired messages are not traversing bridge with AMQP
* \[[ARTEMIS-1870](https://issues.apache.org/jira/browse/ARTEMIS-1870)\] - Document Bug: Missing documentation for new parameter "jdbc-journal-sync-period" added for JDBC Persistence
* \[[ARTEMIS-1872](https://issues.apache.org/jira/browse/ARTEMIS-1872)\] - Correctly check for queue exists before creating shared queue
* \[[ARTEMIS-1873](https://issues.apache.org/jira/browse/ARTEMIS-1873)\] - AMQ222068: STOMP heartbeat handler is not stopped after StompConnection.destroy()
* \[[ARTEMIS-1874](https://issues.apache.org/jira/browse/ARTEMIS-1874)\] - NPE in ActiveMQMessage.setObjectProperty
* \[[ARTEMIS-1875](https://issues.apache.org/jira/browse/ARTEMIS-1875)\] - Redistribution of messages sometimes does not occur if original message sent using link routing via AMQP
* \[[ARTEMIS-1876](https://issues.apache.org/jira/browse/ARTEMIS-1876)\] - InVMNodeManager shouldn't be used if no JDBC HA is configured
* \[[ARTEMIS-1885](https://issues.apache.org/jira/browse/ARTEMIS-1885)\] - max-consumers attribute in queue definition does not work for AMQP client.
* \[[ARTEMIS-1887](https://issues.apache.org/jira/browse/ARTEMIS-1887)\] - Setting default-max-consumers in addressing setting has no effect on the max-consumers property on matching address queues
* \[[ARTEMIS-1890](https://issues.apache.org/jira/browse/ARTEMIS-1890)\] - # any-word wildcard doesn't match zero words if not used at the end of a wildcard expression
* \[[ARTEMIS-1891](https://issues.apache.org/jira/browse/ARTEMIS-1891)\] - Sending synchronization finished packet starves when thread pool is full
* \[[ARTEMIS-1893](https://issues.apache.org/jira/browse/ARTEMIS-1893)\] - subscription queues for non-durable subscriptions are not deleted when AMQP links are detached
* \[[ARTEMIS-1896](https://issues.apache.org/jira/browse/ARTEMIS-1896)\] - Centralize logging of authentication failures
* \[[ARTEMIS-1900](https://issues.apache.org/jira/browse/ARTEMIS-1900)\] - Race condition in STOMP auto-create causing errors (AMQ339016+AMQ119017)
* \[[ARTEMIS-1902](https://issues.apache.org/jira/browse/ARTEMIS-1902)\] - Message redistribution is not stopped when consumers count on remote node reaches 0 (AMQP)
* \[[ARTEMIS-1915](https://issues.apache.org/jira/browse/ARTEMIS-1915)\] - Expire Processing is holding a lock on the queue while scan is taking place
* \[[ARTEMIS-1919](https://issues.apache.org/jira/browse/ARTEMIS-1919)\] - artemis-core-client TLS SNI and verifyHost operation are not independent
* \[[ARTEMIS-1920](https://issues.apache.org/jira/browse/ARTEMIS-1920)\] - AMQP throws NPE if connection happens after a cluster restart
* \[[ARTEMIS-1922](https://issues.apache.org/jira/browse/ARTEMIS-1922)\] - Configuration reload does not work with include files
* \[[ARTEMIS-1923](https://issues.apache.org/jira/browse/ARTEMIS-1923)\] - Wrongly constructing binding journalimpl
* \[[ARTEMIS-1924](https://issues.apache.org/jira/browse/ARTEMIS-1924)\] - Adding the ability to configure the AMQP IdleTimeout
* \[[ARTEMIS-1927](https://issues.apache.org/jira/browse/ARTEMIS-1927)\] - Server is not disconnecting clients on connection reset by peer
* \[[ARTEMIS-1928](https://issues.apache.org/jira/browse/ARTEMIS-1928)\] - Message conversion on certain body types will cause NPE
* \[[ARTEMIS-1929](https://issues.apache.org/jira/browse/ARTEMIS-1929)\] - Race condition in STOMP with multiple, identical durable subcribers
* \[[ARTEMIS-1930](https://issues.apache.org/jira/browse/ARTEMIS-1930)\] - Durable subscription deleted even without durable-subscription-name (STOMP)
* \[[ARTEMIS-1934](https://issues.apache.org/jira/browse/ARTEMIS-1934)\] - the broker sends duplicate AMQP connection data in certain conditions
* \[[ARTEMIS-1935](https://issues.apache.org/jira/browse/ARTEMIS-1935)\] - Openwire connection logs failures on close for open sessions
* \[[ARTEMIS-1936](https://issues.apache.org/jira/browse/ARTEMIS-1936)\] - getQueueNames(String routingType) method should be mark as Operation instead of Attribute
* \[[ARTEMIS-1939](https://issues.apache.org/jira/browse/ARTEMIS-1939)\] - Remove space from parameter annotations name in ActiveMQServerControl
* \[[ARTEMIS-1940](https://issues.apache.org/jira/browse/ARTEMIS-1940)\] - premature release of pooled buffers during send can cause AMQP connection failures
* \[[ARTEMIS-1941](https://issues.apache.org/jira/browse/ARTEMIS-1941)\] - broker changes AMQP body section type during 'Large' message handling
* \[[ARTEMIS-1942](https://issues.apache.org/jira/browse/ARTEMIS-1942)\] - LDAP Configuration is missing
* \[[ARTEMIS-1943](https://issues.apache.org/jira/browse/ARTEMIS-1943)\] - Removing core specific attributes from broker
* \[[ARTEMIS-1944](https://issues.apache.org/jira/browse/ARTEMIS-1944)\] - Typo mistake in broker.xml at journal-buffer-timeout explanation
* \[[ARTEMIS-1945](https://issues.apache.org/jira/browse/ARTEMIS-1945)\] - InVMNodeManager shared state should be volatile
* \[[ARTEMIS-1949](https://issues.apache.org/jira/browse/ARTEMIS-1949)\] - fix IllegalMonitorStateException during shutdown
* \[[ARTEMIS-1951](https://issues.apache.org/jira/browse/ARTEMIS-1951)\] - Queue's user can't be updated
* \[[ARTEMIS-1952](https://issues.apache.org/jira/browse/ARTEMIS-1952)\] - NPE logged at warn if MQTT subscriber disconnects abruptly
* \[[ARTEMIS-1958](https://issues.apache.org/jira/browse/ARTEMIS-1958)\] - Artemis may not be able to delete pages when there are some empty page files
* \[[ARTEMIS-1959](https://issues.apache.org/jira/browse/ARTEMIS-1959)\] - server startup failure caused by './artemis data print'
* \[[ARTEMIS-1966](https://issues.apache.org/jira/browse/ARTEMIS-1966)\] - Replication channel closed but not connection if flow controlled during replication
* \[[ARTEMIS-1970](https://issues.apache.org/jira/browse/ARTEMIS-1970)\] - Clean up LDAP connection in JAAS login module
* \[[ARTEMIS-1978](https://issues.apache.org/jira/browse/ARTEMIS-1978)\] - AMQP sequencing errors can occur when multi-frame deliveries are multiplexed on a session
* \[[ARTEMIS-1979](https://issues.apache.org/jira/browse/ARTEMIS-1979)\] - Table names with DB2 should be upper-cases
* \[[ARTEMIS-1996](https://issues.apache.org/jira/browse/ARTEMIS-1996)\] - MappedSequentialFileFactory may cause DirectByteBuffer memory leaks
* \[[ARTEMIS-2000](https://issues.apache.org/jira/browse/ARTEMIS-2000)\] - scaleDown/scaledownconnector call does not take routing type into account when creating queues on addresses
* \[[ARTEMIS-2010](https://issues.apache.org/jira/browse/ARTEMIS-2010)\] - LDAPLoginModule should actively detect unauthenticated Bind requests
* \[[ARTEMIS-2014](https://issues.apache.org/jira/browse/ARTEMIS-2014)\] - Treat inability to create directory for paging as critial
* \[[ARTEMIS-2017](https://issues.apache.org/jira/browse/ARTEMIS-2017)\] - Eliminate LRUCache from SelectorParser
* \[[ARTEMIS-2019](https://issues.apache.org/jira/browse/ARTEMIS-2019)\] - Refactor Artemis ServerPlugin to Seperate concerns
* \[[ARTEMIS-2020](https://issues.apache.org/jira/browse/ARTEMIS-2020)\] - Use prefixes when useJNDI=false in RA
* \[[ARTEMIS-2023](https://issues.apache.org/jira/browse/ARTEMIS-2023)\] - Support 1x prefixes for JMS destinations instantiated using session
* \[[ARTEMIS-2027](https://issues.apache.org/jira/browse/ARTEMIS-2027)\] - handle arriving AMQP deliveries being aborted
* \[[ARTEMIS-2032](https://issues.apache.org/jira/browse/ARTEMIS-2032)\] - Artemis RA connections disconnected after failover
* \[[ARTEMIS-2033](https://issues.apache.org/jira/browse/ARTEMIS-2033)\] - Add Spring Boot Integration Example
* \[[ARTEMIS-2050](https://issues.apache.org/jira/browse/ARTEMIS-2050)\] - It is possible to get AMQ224000: Failure in initialisation: java.lang.NullPointerException during shutdown of backup server with shared store
* \[[ARTEMIS-2052](https://issues.apache.org/jira/browse/ARTEMIS-2052)\] - DefaultConsumerWindowSize is not properly being applied
* \[[ARTEMIS-2060](https://issues.apache.org/jira/browse/ARTEMIS-2060)\] - OpenSSL integration broken after Netty upgrade
* \[[ARTEMIS-2065](https://issues.apache.org/jira/browse/ARTEMIS-2065)\] - Can't change queue routing-type between restarts
* \[[ARTEMIS-2066](https://issues.apache.org/jira/browse/ARTEMIS-2066)\] - LegacyJMSConfiguration parser may deploy non-jms queues
* \[[ARTEMIS-2072](https://issues.apache.org/jira/browse/ARTEMIS-2072)\] - Significant performance degradation introduced after 2.4 when using auto create queues
* \[[ARTEMIS-2074](https://issues.apache.org/jira/browse/ARTEMIS-2074)\] - ActiveMQConnectionFactory URI is not changing Properties on ServerLocator
* \[[ARTEMIS-2076](https://issues.apache.org/jira/browse/ARTEMIS-2076)\] - Can't change queue filter between restarts
* \[[ARTEMIS-2078](https://issues.apache.org/jira/browse/ARTEMIS-2078)\] - AMQP large messages aren't consumed between cluster nodes with persistence disabled
* \[[ARTEMIS-2081](https://issues.apache.org/jira/browse/ARTEMIS-2081)\] - When config reload occurs with deletion policy enabled, queues not created by broker xml are removed
* \[[ARTEMIS-2084](https://issues.apache.org/jira/browse/ARTEMIS-2084)\] - Failover won't happen when net cable is disconnected unless Netty Timeout is specified
* \[[ARTEMIS-2088](https://issues.apache.org/jira/browse/ARTEMIS-2088)\] - Page.write() should throw exception if file is closed
* \[[ARTEMIS-2089](https://issues.apache.org/jira/browse/ARTEMIS-2089)\] - DB2 sending larger message (1MB) crashes the whole server
* \[[ARTEMIS-2092](https://issues.apache.org/jira/browse/ARTEMIS-2092)\] - First page messages lost on server crash
* \[[ARTEMIS-2093](https://issues.apache.org/jira/browse/ARTEMIS-2093)\] - NPE thrown by NettyConnector::createConnection
* \[[ARTEMIS-2094](https://issues.apache.org/jira/browse/ARTEMIS-2094)\] - Configuration change loss after failover to slave
* \[[ARTEMIS-2095](https://issues.apache.org/jira/browse/ARTEMIS-2095)\] - TypedProperties thread safety
* \[[ARTEMIS-2096](https://issues.apache.org/jira/browse/ARTEMIS-2096)\] - AMQP: Refactoring AMQPMessage abstraction for better consistency and performance
* \[[ARTEMIS-2098](https://issues.apache.org/jira/browse/ARTEMIS-2098)\] - Potential NPE when decoding protocol
* \[[ARTEMIS-2099](https://issues.apache.org/jira/browse/ARTEMIS-2099)\] - Avoid possible double instantiation of properties
* \[[ARTEMIS-2100](https://issues.apache.org/jira/browse/ARTEMIS-2100)\] - address routing-type overridden on attaching AMQP sender
* \[[ARTEMIS-2102](https://issues.apache.org/jira/browse/ARTEMIS-2102)\] - delete paging directory or table if address is removed
* \[[ARTEMIS-2103](https://issues.apache.org/jira/browse/ARTEMIS-2103)\] - VirtualTopic doesn't work correctly with multiple consumers
* \[[ARTEMIS-2105](https://issues.apache.org/jira/browse/ARTEMIS-2105)\] - Discovery group connectors can delay broker shutdown
* \[[ARTEMIS-2106](https://issues.apache.org/jira/browse/ARTEMIS-2106)\] - Failures during broker start are not clearly logged
* \[[ARTEMIS-2107](https://issues.apache.org/jira/browse/ARTEMIS-2107)\] - Clarify identity for authn failures in notification
* \[[ARTEMIS-2108](https://issues.apache.org/jira/browse/ARTEMIS-2108)\] - Potential StackOverflowError when load balancing disabled
* \[[ARTEMIS-2110](https://issues.apache.org/jira/browse/ARTEMIS-2110)\] - JDBC LeaseLocker repeated renew or renew after aquire can fail in error
* \[[ARTEMIS-2111](https://issues.apache.org/jira/browse/ARTEMIS-2111)\] - ManagementContext can leak
* \[[ARTEMIS-2112](https://issues.apache.org/jira/browse/ARTEMIS-2112)\] - Remove JMX properties from start scripts
* \[[ARTEMIS-2114](https://issues.apache.org/jira/browse/ARTEMIS-2114)\] - hawtio destination delete and purge buttons overlap when pane is resized
* \[[ARTEMIS-2117](https://issues.apache.org/jira/browse/ARTEMIS-2117)\] - Support custom last-value queue key & non-destructive queues
* \[[ARTEMIS-2118](https://issues.apache.org/jira/browse/ARTEMIS-2118)\] - Enhanced Message Groups Support
* \[[ARTEMIS-2123](https://issues.apache.org/jira/browse/ARTEMIS-2123)\] - Paging not stopped if there are no messages on one subscription
* \[[ARTEMIS-2126](https://issues.apache.org/jira/browse/ARTEMIS-2126)\] - Web server can leak
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
* \[[ARTEMIS-2151](https://issues.apache.org/jira/browse/ARTEMIS-2151)\] - JMS Selectors broken in some cases
* \[[ARTEMIS-2155](https://issues.apache.org/jira/browse/ARTEMIS-2155)\] - Failure to handle packet should force consumer to disconnect
* \[[ARTEMIS-2156](https://issues.apache.org/jira/browse/ARTEMIS-2156)\] - Message Duplication when using exclusive divert and clustering
* \[[ARTEMIS-2158](https://issues.apache.org/jira/browse/ARTEMIS-2158)\] - don't get pagedMessage if it's nontransactional
* \[[ARTEMIS-2159](https://issues.apache.org/jira/browse/ARTEMIS-2159)\] - OpenWire will allow one extra message to be sent after address is full
* \[[ARTEMIS-2160](https://issues.apache.org/jira/browse/ARTEMIS-2160)\] - Cluster connection non-default configuration elements ignored
* \[[ARTEMIS-2162](https://issues.apache.org/jira/browse/ARTEMIS-2162)\] - Remove -XX:+AggressiveOpts to improve JDK 11 compatibility
* \[[ARTEMIS-2166](https://issues.apache.org/jira/browse/ARTEMIS-2166)\] - Unable to delete queue with single quote using web console
* \[[ARTEMIS-2174](https://issues.apache.org/jira/browse/ARTEMIS-2174)\] - Broker reconnect to another with scale down policy cause OOM
* \[[ARTEMIS-2175](https://issues.apache.org/jira/browse/ARTEMIS-2175)\] - Duplicate messages when JMS bridge is stopped and restarted
* \[[ARTEMIS-2183](https://issues.apache.org/jira/browse/ARTEMIS-2183)\] - RefsOperation::getDeliveringMessages is broken
* \[[ARTEMIS-2186](https://issues.apache.org/jira/browse/ARTEMIS-2186)\] - Large message incomplete when server is crashed
* \[[ARTEMIS-2187](https://issues.apache.org/jira/browse/ARTEMIS-2187)\] - PageCursorInfo put into consumedPages when page is deleting
* \[[ARTEMIS-2188](https://issues.apache.org/jira/browse/ARTEMIS-2188)\] - Paged large message results in pagingStore sizeInBytes leak when the page is evicted
* \[[ARTEMIS-2189](https://issues.apache.org/jira/browse/ARTEMIS-2189)\] - Allow deleting temporary destination when originating session is closed
* \[[ARTEMIS-2190](https://issues.apache.org/jira/browse/ARTEMIS-2190)\] - Core JMS client leaks temporary destination names
* \[[ARTEMIS-2192](https://issues.apache.org/jira/browse/ARTEMIS-2192)\] - LegacyLDAPSecuritySettingPlugin uses hard-coded RDN types
* \[[ARTEMIS-2194](https://issues.apache.org/jira/browse/ARTEMIS-2194)\] - Typo in word "update" in class MessageCounterInfo
* \[[ARTEMIS-2200](https://issues.apache.org/jira/browse/ARTEMIS-2200)\] - NPE while dropping/failing large messages on paging
* \[[ARTEMIS-2202](https://issues.apache.org/jira/browse/ARTEMIS-2202)\] - Improve MSSQL support for JDBC storage
* \[[ARTEMIS-2206](https://issues.apache.org/jira/browse/ARTEMIS-2206)\] - The MQTT consumer reconnection caused the queue to not be cleared and throw a NullPointerException exception
* \[[ARTEMIS-2207](https://issues.apache.org/jira/browse/ARTEMIS-2207)\] - Page Cursor logging warn for previously acked messages
* \[[ARTEMIS-2210](https://issues.apache.org/jira/browse/ARTEMIS-2210)\] - Fix PagingStore creation synchronization issue
* \[[ARTEMIS-2214](https://issues.apache.org/jira/browse/ARTEMIS-2214)\] - ARTEMIS-2214 Cache durable&deliveryTime in PagedReference
* \[[ARTEMIS-2215](https://issues.apache.org/jira/browse/ARTEMIS-2215)\] - largemessage have been consumed but not deleted from the disk during backup and live sync
* \[[ARTEMIS-2217](https://issues.apache.org/jira/browse/ARTEMIS-2217)\] - ‘MQTTSessionState’ in the ‘SESSIONS ConcurrentHashMap’ never be removed
* \[[ARTEMIS-2226](https://issues.apache.org/jira/browse/ARTEMIS-2226)\] - (MQTT)In the cluster,the last consumer connection should close the previous consumer connection
* \[[ARTEMIS-2227](https://issues.apache.org/jira/browse/ARTEMIS-2227)\] - Missing Implementation-Version attribute in MANIFEST.MF
* \[[ARTEMIS-2228](https://issues.apache.org/jira/browse/ARTEMIS-2228)\] - Check message size sent over management API
* \[[ARTEMIS-2230](https://issues.apache.org/jira/browse/ARTEMIS-2230)\] - Exception closing advisory consumers when supportAdvisory=false
* \[[ARTEMIS-2234](https://issues.apache.org/jira/browse/ARTEMIS-2234)\] - Incorrect warning from LoggingConfigurationFileReloader
* \[[ARTEMIS-2236](https://issues.apache.org/jira/browse/ARTEMIS-2236)\] - Address Latency Impact caused by ARTEMIS-1451
* \[[ARTEMIS-2238](https://issues.apache.org/jira/browse/ARTEMIS-2238)\] - JMS Producer queueQuery does not work when addressName != queueName
* \[[ARTEMIS-2242](https://issues.apache.org/jira/browse/ARTEMIS-2242)\] - Enforce Address type broken by ARTEMIS-2229
* \[[ARTEMIS-2244](https://issues.apache.org/jira/browse/ARTEMIS-2244)\] - checkDepage method placed outside CRITICAL_DELIVER avoid critical analyzer timeout
* \[[ARTEMIS-2246](https://issues.apache.org/jira/browse/ARTEMIS-2246)\] - Documentation for configuration max-disk-usage is inaccurate.
* \[[ARTEMIS-2247](https://issues.apache.org/jira/browse/ARTEMIS-2247)\] - Value argument in artermis-service.xml is incorrect
* \[[ARTEMIS-2248](https://issues.apache.org/jira/browse/ARTEMIS-2248)\] - Don't create sslEngine with sniHost in NettyConnector
* \[[ARTEMIS-2251](https://issues.apache.org/jira/browse/ARTEMIS-2251)\] - Large messages might not be deleted when server crashed
* \[[ARTEMIS-2254](https://issues.apache.org/jira/browse/ARTEMIS-2254)\] - Support UseTopologyForLoadBalancing on JMS ConnectionFactoryConfiguration
* \[[ARTEMIS-2256](https://issues.apache.org/jira/browse/ARTEMIS-2256)\] - Wrong Topology After Bridge Reconnected
* \[[ARTEMIS-2257](https://issues.apache.org/jira/browse/ARTEMIS-2257)\] - Synchronize SharedEventLoopGroup shutdownGracefully to prevent race conditions
* \[[ARTEMIS-2259](https://issues.apache.org/jira/browse/ARTEMIS-2259)\] - Client session not exist if reattach on new connection timeout
* \[[ARTEMIS-2264](https://issues.apache.org/jira/browse/ARTEMIS-2264)\] - PurgeOnNoConsumers prevent removal of messages with replication
* \[[ARTEMIS-2274](https://issues.apache.org/jira/browse/ARTEMIS-2274)\] - sending a close to JournalBufferSize message cause Critical IO Error

## New Feature

* \[[ARTEMIS-856](https://issues.apache.org/jira/browse/ARTEMIS-856)\] - Support advanced destination options
* \[[ARTEMIS-1545](https://issues.apache.org/jira/browse/ARTEMIS-1545)\] - JMS MessageProducer fails to expose exception on send when message is sent non-persistent, but not authorised
* \[[ARTEMIS-1856](https://issues.apache.org/jira/browse/ARTEMIS-1856)\] - Add support for delays before deleting addresses and queues
* \[[ARTEMIS-1892](https://issues.apache.org/jira/browse/ARTEMIS-1892)\] - Allow whitespace in <acceptor>
* \[[ARTEMIS-1917](https://issues.apache.org/jira/browse/ARTEMIS-1917)\] - Support logging HTTP access
* \[[ARTEMIS-2008](https://issues.apache.org/jira/browse/ARTEMIS-2008)\] - Add a CLI command to purge queue
* \[[ARTEMIS-2022](https://issues.apache.org/jira/browse/ARTEMIS-2022)\] - Create count messages "group by" this property filter
* \[[ARTEMIS-2028](https://issues.apache.org/jira/browse/ARTEMIS-2028)\] - Add OpenTracing support
* \[[ARTEMIS-2116](https://issues.apache.org/jira/browse/ARTEMIS-2116)\] - Set text message content on producer CLI command
* \[[ARTEMIS-2121](https://issues.apache.org/jira/browse/ARTEMIS-2121)\] - Reload logging configuration at runtime
* \[[ARTEMIS-2141](https://issues.apache.org/jira/browse/ARTEMIS-2141)\] - Display "Filter" column in Consumers View of AdminUI
* \[[ARTEMIS-2150](https://issues.apache.org/jira/browse/ARTEMIS-2150)\] - Counts the number of delivering messages in this queue
* \[[ARTEMIS-2241](https://issues.apache.org/jira/browse/ARTEMIS-2241)\] - Support direct deliver for InVMAcceptors
* \[[ARTEMIS-2243](https://issues.apache.org/jira/browse/ARTEMIS-2243)\] - Support user and role manipulation for PropertiesLoginModule via management interfaces
* \[[ARTEMIS-2245](https://issues.apache.org/jira/browse/ARTEMIS-2245)\] - Implement Docker images
* \[[ARTEMIS-2258](https://issues.apache.org/jira/browse/ARTEMIS-2258)\] - The FileLockNodeManager directory should be configurable
* \[[ARTEMIS-2262](https://issues.apache.org/jira/browse/ARTEMIS-2262)\] - Correlate management response messages with request message.
* \[[ARTEMIS-2263](https://issues.apache.org/jira/browse/ARTEMIS-2263)\] - Add support to configure auto-delete-queue at the queue level
* \[[ARTEMIS-2273](https://issues.apache.org/jira/browse/ARTEMIS-2273)\] - Adding Audit Log

## Improvement

* \[[ARTEMIS-196](https://issues.apache.org/jira/browse/ARTEMIS-196)\] - Implementing Consumer Priority
* \[[ARTEMIS-1778](https://issues.apache.org/jira/browse/ARTEMIS-1778)\] - let artemis test suite be used against an external security enabled broker
* \[[ARTEMIS-1866](https://issues.apache.org/jira/browse/ARTEMIS-1866)\] - Make wait time for reply configurable once vote goes out to acquire a quorum.
* \[[ARTEMIS-1867](https://issues.apache.org/jira/browse/ARTEMIS-1867)\] - Support FQQN for producers
* \[[ARTEMIS-1888](https://issues.apache.org/jira/browse/ARTEMIS-1888)\] - Add forceSSLParameters flag to core client to prefer local SSL properties over System properties
* \[[ARTEMIS-1895](https://issues.apache.org/jira/browse/ARTEMIS-1895)\] - Add duplicate metadata failure callback to ActiveMQServerPlugin
* \[[ARTEMIS-1897](https://issues.apache.org/jira/browse/ARTEMIS-1897)\] - STOMP should use core session for authentication
* \[[ARTEMIS-1903](https://issues.apache.org/jira/browse/ARTEMIS-1903)\] - Log STOMP ERROR frames at WARN on the broker
* \[[ARTEMIS-1947](https://issues.apache.org/jira/browse/ARTEMIS-1947)\] - Return meta-data in JSON session management ops
* \[[ARTEMIS-1961](https://issues.apache.org/jira/browse/ARTEMIS-1961)\] - Track routed and unrouted messages sent to an address
* \[[ARTEMIS-1971](https://issues.apache.org/jira/browse/ARTEMIS-1971)\] - Support connection pooling in LDAPLoginModule
* \[[ARTEMIS-1977](https://issues.apache.org/jira/browse/ARTEMIS-1977)\] - ASYNCIO can reduce sys-calls to retrieve I/O events
* \[[ARTEMIS-1980](https://issues.apache.org/jira/browse/ARTEMIS-1980)\] - Warn on failed check of table existence should be info
* \[[ARTEMIS-1981](https://issues.apache.org/jira/browse/ARTEMIS-1981)\] - JDBCJournalImpl constructor isn't using tableName parameter
* \[[ARTEMIS-1987](https://issues.apache.org/jira/browse/ARTEMIS-1987)\] - Support configuring a default consumer window size via Address Settings
* \[[ARTEMIS-2003](https://issues.apache.org/jira/browse/ARTEMIS-2003)\] - Add support for Bridge metrics
* \[[ARTEMIS-2018](https://issues.apache.org/jira/browse/ARTEMIS-2018)\] - Artemis ServerPlugin support for Bridging events
* \[[ARTEMIS-2044](https://issues.apache.org/jira/browse/ARTEMIS-2044)\] - Add broker plugin methods to handle errors during "send"/"route" operations
* \[[ARTEMIS-2045](https://issues.apache.org/jira/browse/ARTEMIS-2045)\] - [AMQP] Add support for setting delivery annotations on outgoing messages
* \[[ARTEMIS-2051](https://issues.apache.org/jira/browse/ARTEMIS-2051)\] - Add trace logging for JDBC
* \[[ARTEMIS-2058](https://issues.apache.org/jira/browse/ARTEMIS-2058)\] - Allow setting of any value (not just bytes) in AMQPMessage.extraProperties
* \[[ARTEMIS-2062](https://issues.apache.org/jira/browse/ARTEMIS-2062)\] - AMQP: Reduce lock contention and allocations on message processing
* \[[ARTEMIS-2063](https://issues.apache.org/jira/browse/ARTEMIS-2063)\] - Improve logging around address & queue deployment
* \[[ARTEMIS-2064](https://issues.apache.org/jira/browse/ARTEMIS-2064)\] - Make address & queue deployment more robust
* \[[ARTEMIS-2067](https://issues.apache.org/jira/browse/ARTEMIS-2067)\] - AMQP: Cleanup some proton event handling code
* \[[ARTEMIS-2068](https://issues.apache.org/jira/browse/ARTEMIS-2068)\] - broker should avoid reading any file to get AMQP large msg size
* \[[ARTEMIS-2075](https://issues.apache.org/jira/browse/ARTEMIS-2075)\] - Extra backups only try to replicate once
* \[[ARTEMIS-2085](https://issues.apache.org/jira/browse/ARTEMIS-2085)\] - Improve validation of MDB activation config properties values
* \[[ARTEMIS-2087](https://issues.apache.org/jira/browse/ARTEMIS-2087)\] - Support masked passwords in management.xml
* \[[ARTEMIS-2125](https://issues.apache.org/jira/browse/ARTEMIS-2125)\] - Queue preference changes to display columns not persistent through page refresh
* \[[ARTEMIS-2127](https://issues.apache.org/jira/browse/ARTEMIS-2127)\] - Add auth details to consumer created notification
* \[[ARTEMIS-2142](https://issues.apache.org/jira/browse/ARTEMIS-2142)\] - Support JMSXGroupSeq -1 to close/reset Groups
* \[[ARTEMIS-2157](https://issues.apache.org/jira/browse/ARTEMIS-2157)\] - Add Information on Paths for CriticalAnalyzer
* \[[ARTEMIS-2163](https://issues.apache.org/jira/browse/ARTEMIS-2163)\] - Classloading issue if artemis-commons is not in ther same classloader as artemis-client-* or artemis-server
* \[[ARTEMIS-2169](https://issues.apache.org/jira/browse/ARTEMIS-2169)\] - Allow configuration of RMI registry port
* \[[ARTEMIS-2170](https://issues.apache.org/jira/browse/ARTEMIS-2170)\] - Optimized CoreMessage's checkProperties and cleanupInternalProperties methods
* \[[ARTEMIS-2178](https://issues.apache.org/jira/browse/ARTEMIS-2178)\] - Support routing-type configuration on core bridge
* \[[ARTEMIS-2179](https://issues.apache.org/jira/browse/ARTEMIS-2179)\] - Add management method to get cluster-connection names
* \[[ARTEMIS-2196](https://issues.apache.org/jira/browse/ARTEMIS-2196)\] - Avoid creating RandomAccessFile when FileChannel is needed
* \[[ARTEMIS-2198](https://issues.apache.org/jira/browse/ARTEMIS-2198)\] - Reduce GC pressure on TransactionImpl and OperationContextImpl
* \[[ARTEMIS-2205](https://issues.apache.org/jira/browse/ARTEMIS-2205)\] - Make AMQP Processing Single Threaded and other AMQP perf improvements
* \[[ARTEMIS-2208](https://issues.apache.org/jira/browse/ARTEMIS-2208)\] - Unit Tests POM file contains version value and not parameter
* \[[ARTEMIS-2211](https://issues.apache.org/jira/browse/ARTEMIS-2211)\] - Refactor ByteBuffer pooling, alignment and zeroing
* \[[ARTEMIS-2212](https://issues.apache.org/jira/browse/ARTEMIS-2212)\] - Avoid using CLQ on ServerConsumerImpl
* \[[ARTEMIS-2216](https://issues.apache.org/jira/browse/ARTEMIS-2216)\] - Use a specific executor for pageSyncTimer
* \[[ARTEMIS-2220](https://issues.apache.org/jira/browse/ARTEMIS-2220)\] - Fix PageCursorStressTest::testSimpleCursorWithFilter NPE
* \[[ARTEMIS-2221](https://issues.apache.org/jira/browse/ARTEMIS-2221)\] - Avoid unnecessary Bindings instance creation
* \[[ARTEMIS-2222](https://issues.apache.org/jira/browse/ARTEMIS-2222)\] - why the position remains unchanged if ignored is set to true
* \[[ARTEMIS-2224](https://issues.apache.org/jira/browse/ARTEMIS-2224)\] - Reduce contention on LivePageCacheImpl
* \[[ARTEMIS-2235](https://issues.apache.org/jira/browse/ARTEMIS-2235)\] - Username and password logged in browser log
* \[[ARTEMIS-2239](https://issues.apache.org/jira/browse/ARTEMIS-2239)\] - Zero-copy NIO/MAPPED TimedBuffer
* \[[ARTEMIS-2240](https://issues.apache.org/jira/browse/ARTEMIS-2240)\] - ActiveMQThreadPoolExecutor should use LinkedTransferQueue
* \[[ARTEMIS-2249](https://issues.apache.org/jira/browse/ARTEMIS-2249)\] - Update proton cpp example to use correct latest client libs
* \[[ARTEMIS-2260](https://issues.apache.org/jira/browse/ARTEMIS-2260)\] - Move artemis-native as its own project, as activemq-artemis-native
* \[[ARTEMIS-2265](https://issues.apache.org/jira/browse/ARTEMIS-2265)\] - Support Federated Queues and Addresses
* \[[ARTEMIS-2269](https://issues.apache.org/jira/browse/ARTEMIS-2269)\] - Karaf config should use predefined etc-dir instead of hard-coded etc
* \[[ARTEMIS-2271](https://issues.apache.org/jira/browse/ARTEMIS-2271)\] - Upgrade to Netty Libs to Latest

## Test

* \[[ARTEMIS-1853](https://issues.apache.org/jira/browse/ARTEMIS-1853)\] - Adding Netty OpenSSL provider test
* \[[ARTEMIS-1868](https://issues.apache.org/jira/browse/ARTEMIS-1868)\] - Openwire doesn't add delivery count in client ack mode
* \[[ARTEMIS-1894](https://issues.apache.org/jira/browse/ARTEMIS-1894)\] - NetworkHeathTest hits apache.org (or fails to) as a side effect
* \[[ARTEMIS-2104](https://issues.apache.org/jira/browse/ARTEMIS-2104)\] - Implement tests for Import/Export (replay) of messages
* \[[ARTEMIS-2201](https://issues.apache.org/jira/browse/ARTEMIS-2201)\] - Create tests on DEFAULT_JOURNAL_FILE_OPEN_TIMEOUT value

## Task

* \[[ARTEMIS-1882](https://issues.apache.org/jira/browse/ARTEMIS-1882)\] - Verify PKCS12 keystores work
* \[[ARTEMIS-1912](https://issues.apache.org/jira/browse/ARTEMIS-1912)\] - Review Documentation
* \[[ARTEMIS-1913](https://issues.apache.org/jira/browse/ARTEMIS-1913)\] - Dependency to tcpnative should be optional
* \[[ARTEMIS-1914](https://issues.apache.org/jira/browse/ARTEMIS-1914)\] - NPE on ConfigurationImpl if maskPassword=null
* \[[ARTEMIS-1918](https://issues.apache.org/jira/browse/ARTEMIS-1918)\] - RemotingConnectionImpl contains unused private clientID field used by toString()
* \[[ARTEMIS-1926](https://issues.apache.org/jira/browse/ARTEMIS-1926)\] - Refactor SSLSupport
* \[[ARTEMIS-1931](https://issues.apache.org/jira/browse/ARTEMIS-1931)\] - Create a Camel example
* \[[ARTEMIS-1938](https://issues.apache.org/jira/browse/ARTEMIS-1938)\] - AMQP: Update Qpid JMS (and Netty) and Proton-J to latest
* \[[ARTEMIS-1948](https://issues.apache.org/jira/browse/ARTEMIS-1948)\] - AMQPLite example with a High Performant Producer and Consumer
* \[[ARTEMIS-1950](https://issues.apache.org/jira/browse/ARTEMIS-1950)\] - Clarify STOMP durable subscription header names
* \[[ARTEMIS-1954](https://issues.apache.org/jira/browse/ARTEMIS-1954)\] - Eliminate all possible usage of JMSServerManager
* \[[ARTEMIS-1956](https://issues.apache.org/jira/browse/ARTEMIS-1956)\] - Move MessageCounterInfo from server module to core-client module
* \[[ARTEMIS-1957](https://issues.apache.org/jira/browse/ARTEMIS-1957)\] - Update management notification documentation
* \[[ARTEMIS-1974](https://issues.apache.org/jira/browse/ARTEMIS-1974)\] - Document LDAP role expansion functionality
* \[[ARTEMIS-1991](https://issues.apache.org/jira/browse/ARTEMIS-1991)\] - Document Advanced Destination Options
* \[[ARTEMIS-2036](https://issues.apache.org/jira/browse/ARTEMIS-2036)\] - Recompile libaio on an older kernel version for compatibility with older boxes.
* \[[ARTEMIS-2086](https://issues.apache.org/jira/browse/ARTEMIS-2086)\] - Remove HDRHistogram dependency
* \[[ARTEMIS-2148](https://issues.apache.org/jira/browse/ARTEMIS-2148)\] - getDoubleProperty changes the message