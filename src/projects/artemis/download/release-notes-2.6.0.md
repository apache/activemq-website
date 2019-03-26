--- 
layout: default_md
title: ActiveMQ Artemis 2.6.0 Release Notes
title-class: page-title-artemis
type: artemis
---

A complete list of JIRAs for the 2.6.0 release can be found [here](https://issues.apache.org/jira/secure/ReleaseNote.jspa?version=12342903&&projectId=12315920).

A list of commits can be found [here](commit-report-2.6.0).

#### Sub-task

* \[[ARTEMIS-857](https://issues.apache.org/jira/browse/ARTEMIS-857)\] - JMX+API support for viewing and manually clearing message group caches

#### Bug

* \[[ARTEMIS-375](https://issues.apache.org/jira/browse/ARTEMIS-375)\] - When use ./artemis data exp, the xml printed to stdout mixed with logging information
* \[[ARTEMIS-618](https://issues.apache.org/jira/browse/ARTEMIS-618)\] - Fails to initialize journal if hard drive block size is over 512 bytes
* \[[ARTEMIS-1286](https://issues.apache.org/jira/browse/ARTEMIS-1286)\] - Server stops responding and throws OutOfDirectMemoryError when sending & receiving lots of 2MB MQTT messages.
* \[[ARTEMIS-1449](https://issues.apache.org/jira/browse/ARTEMIS-1449)\] - Artemis does not start on Oracle JDK 9
* \[[ARTEMIS-1605](https://issues.apache.org/jira/browse/ARTEMIS-1605)\] - RBAC back compatibility Issue in upgrading broker from 2.3
* \[[ARTEMIS-1659](https://issues.apache.org/jira/browse/ARTEMIS-1659)\] - AMQ224000: Failure in initialisation: java.lang.IllegalStateException: java.lang.IllegalStateException: Cursor 28 had already been created
* \[[ARTEMIS-1701](https://issues.apache.org/jira/browse/ARTEMIS-1701)\] - Zone ID not stripped properly from IPv6 addresses
* \[[ARTEMIS-1743](https://issues.apache.org/jira/browse/ARTEMIS-1743)\] - NPE in server log when Artemis trace logging is enabled
* \[[ARTEMIS-1744](https://issues.apache.org/jira/browse/ARTEMIS-1744)\] - Address or queue containing '\*' or '?' cannot be deleted from hawtio console
* \[[ARTEMIS-1746](https://issues.apache.org/jira/browse/ARTEMIS-1746)\] - Client-side openSSH support is broken
* \[[ARTEMIS-1747](https://issues.apache.org/jira/browse/ARTEMIS-1747)\] - When Broker Stops and Starts configuration changes by reload are lost
* \[[ARTEMIS-1748](https://issues.apache.org/jira/browse/ARTEMIS-1748)\] - AMQP client connections are not cleaned up properly on connectionDestroyed
* \[[ARTEMIS-1752](https://issues.apache.org/jira/browse/ARTEMIS-1752)\] - Avoid null pointer in bridge
* \[[ARTEMIS-1753](https://issues.apache.org/jira/browse/ARTEMIS-1753)\] - When using the 1.5.5 Artemis JMS Client, NPE is thrown when creating a durable subscription
* \[[ARTEMIS-1754](https://issues.apache.org/jira/browse/ARTEMIS-1754)\] - LargeServerMessageImpl.toString() may leak files
* \[[ARTEMIS-1757](https://issues.apache.org/jira/browse/ARTEMIS-1757)\] - Improve DB2 compatibility
* \[[ARTEMIS-1761](https://issues.apache.org/jira/browse/ARTEMIS-1761)\] - Log one warning if cluster could not be formed because it's not possible to connect to other cluster node
* \[[ARTEMIS-1762](https://issues.apache.org/jira/browse/ARTEMIS-1762)\] - JdbcNodeManager shouldn't be used if no HA is configured
* \[[ARTEMIS-1763](https://issues.apache.org/jira/browse/ARTEMIS-1763)\] - Remove 'quick check' before quorum
* \[[ARTEMIS-1764](https://issues.apache.org/jira/browse/ARTEMIS-1764)\] - Broker does not start properly if prepared tx exists with ack to non existent queue
* \[[ARTEMIS-1765](https://issues.apache.org/jira/browse/ARTEMIS-1765)\] - Compressed Large Messages are not converted to other protocols
* \[[ARTEMIS-1766](https://issues.apache.org/jira/browse/ARTEMIS-1766)\] - LastValue queue config is not persisted to bindings.
* \[[ARTEMIS-1768](https://issues.apache.org/jira/browse/ARTEMIS-1768)\] - Openwire connection logs failures on clean close
* \[[ARTEMIS-1770](https://issues.apache.org/jira/browse/ARTEMIS-1770)\] - Warnings/Errors during clean shutdown of server with JMS Bridge
* \[[ARTEMIS-1775](https://issues.apache.org/jira/browse/ARTEMIS-1775)\] - Mismatch in Windows cmd files using ARTEMIS\_INSTANCE\_ETC and ARTEMIS\_ETC\_INSTANCE
* \[[ARTEMIS-1779](https://issues.apache.org/jira/browse/ARTEMIS-1779)\] - ClusterConnectionBridge may connect to other nodes than its target
* \[[ARTEMIS-1780](https://issues.apache.org/jira/browse/ARTEMIS-1780)\] - AMQP: NPE when dispatching ObjectMessage that was handled as a Large Message
* \[[ARTEMIS-1781](https://issues.apache.org/jira/browse/ARTEMIS-1781)\] - Broken backward compatibility with HornetQ
* \[[ARTEMIS-1782](https://issues.apache.org/jira/browse/ARTEMIS-1782)\] - Missing drop-down menu with create/delete/browse buttons in hawtio console
* \[[ARTEMIS-1783](https://issues.apache.org/jira/browse/ARTEMIS-1783)\] - Exception in thread "main" java.lang.BootstrapMethodError: java.lang.NoClassDefFoundError: com/google/common/base/Supplier
* \[[ARTEMIS-1785](https://issues.apache.org/jira/browse/ARTEMIS-1785)\] - CLI producer with text messages is broken
* \[[ARTEMIS-1791](https://issues.apache.org/jira/browse/ARTEMIS-1791)\] - Large message files are not removed after redistribution across a cluster
* \[[ARTEMIS-1792](https://issues.apache.org/jira/browse/ARTEMIS-1792)\] - Race condition when auto deleting an address
* \[[ARTEMIS-1794](https://issues.apache.org/jira/browse/ARTEMIS-1794)\] - Confusion when auto removing a queue
* \[[ARTEMIS-1796](https://issues.apache.org/jira/browse/ARTEMIS-1796)\] - Flush during handshake of AMQP can cause issues with SASL clients
* \[[ARTEMIS-1797](https://issues.apache.org/jira/browse/ARTEMIS-1797)\] - Auto-create-address flag shouldn't block temp destination creation
* \[[ARTEMIS-1798](https://issues.apache.org/jira/browse/ARTEMIS-1798)\] - DEBUG message bad write method arg count: public void org.apache.activemq.artemis.core.protocol.openwire.OpenWireProtocolManager.setUpInactivityParams
* \[[ARTEMIS-1800](https://issues.apache.org/jira/browse/ARTEMIS-1800)\] - Incorrect number of messages on queue after remove of scheduled message
* \[[ARTEMIS-1801](https://issues.apache.org/jira/browse/ARTEMIS-1801)\] - Remove dereferences before null check
* \[[ARTEMIS-1804](https://issues.apache.org/jira/browse/ARTEMIS-1804)\] - NPE in recent snapshot
* \[[ARTEMIS-1805](https://issues.apache.org/jira/browse/ARTEMIS-1805)\] - Some broker operations in hawtio causes error
* \[[ARTEMIS-1806](https://issues.apache.org/jira/browse/ARTEMIS-1806)\] - JDBC Connection leaks
* \[[ARTEMIS-1808](https://issues.apache.org/jira/browse/ARTEMIS-1808)\] - LargeServerMessageImpl leaks direct ByteBuffer
* \[[ARTEMIS-1810](https://issues.apache.org/jira/browse/ARTEMIS-1810)\] - JDBCSequentialFileFactoryDriver should check &lt;=0 read length
* \[[ARTEMIS-1813](https://issues.apache.org/jira/browse/ARTEMIS-1813)\] - DB2 should avoid Blob to append data
* \[[ARTEMIS-1814](https://issues.apache.org/jira/browse/ARTEMIS-1814)\] - Try Original Connector when Live and Backup are both restarted
* \[[ARTEMIS-1818](https://issues.apache.org/jira/browse/ARTEMIS-1818)\] - Reconnecting core JMS client won't re-create auto-created queue
* \[[ARTEMIS-1819](https://issues.apache.org/jira/browse/ARTEMIS-1819)\] - Missing fields on listAllConsumersAsJSON, listConsumersAsJSON and listConnectionsAsJSON
* \[[ARTEMIS-1821](https://issues.apache.org/jira/browse/ARTEMIS-1821)\] - LDAPLoginModule always returns true on commit()
* \[[ARTEMIS-1823](https://issues.apache.org/jira/browse/ARTEMIS-1823)\] - Log warning on boot when persistence is disabled and paging enabled
* \[[ARTEMIS-1824](https://issues.apache.org/jira/browse/ARTEMIS-1824)\] - Broker cannot run from path containing unicode characters
* \[[ARTEMIS-1829](https://issues.apache.org/jira/browse/ARTEMIS-1829)\] - Remove deprecated plugin's messageExpired implementations
* \[[ARTEMIS-1830](https://issues.apache.org/jira/browse/ARTEMIS-1830)\] - listPreparedTransactions management operation (and its variants) return all transactions not just prepared ones
* \[[ARTEMIS-1834](https://issues.apache.org/jira/browse/ARTEMIS-1834)\] - Incorrect STOMP destination header
* \[[ARTEMIS-1836](https://issues.apache.org/jira/browse/ARTEMIS-1836)\] - Artemis broker for Windows does not set login.config path correctly
* \[[ARTEMIS-1837](https://issues.apache.org/jira/browse/ARTEMIS-1837)\] - Replication catch up dead locks with clients failing
* \[[ARTEMIS-1838](https://issues.apache.org/jira/browse/ARTEMIS-1838)\] - Race on converting isDurable from AMQP to Core
* \[[ARTEMIS-1839](https://issues.apache.org/jira/browse/ARTEMIS-1839)\] - NettyConnector is ignoring sniHost on Kerberos connection
* \[[ARTEMIS-1842](https://issues.apache.org/jira/browse/ARTEMIS-1842)\] - Vote is blocked on Netty Thread
* \[[ARTEMIS-1844](https://issues.apache.org/jira/browse/ARTEMIS-1844)\] - \[Artemis Testsuite\] CoreClientOverOneWaySSLTest.testOneWaySSLWithGoodClientCipherSuite\[storeType=\*\] fails
* \[[ARTEMIS-1846](https://issues.apache.org/jira/browse/ARTEMIS-1846)\] - Using activemq.usemaskedpassword in URL is broken
* \[[ARTEMIS-1848](https://issues.apache.org/jira/browse/ARTEMIS-1848)\] - Auto deletion broken for OpenWire clients
* \[[ARTEMIS-1851](https://issues.apache.org/jira/browse/ARTEMIS-1851)\] - IllegalStateException in web console
* \[[ARTEMIS-1852](https://issues.apache.org/jira/browse/ARTEMIS-1852)\] - PageCursorProvider is leaking cleanup tasks while stopping
* \[[ARTEMIS-1862](https://issues.apache.org/jira/browse/ARTEMIS-1862)\] - fix acceptor config default for 'amqpLowCredits' and update related code defaults

#### Improvement

* \[[ARTEMIS-370](https://issues.apache.org/jira/browse/ARTEMIS-370)\] - Make JDBC Journal Sync period configurable
* \[[ARTEMIS-1653](https://issues.apache.org/jira/browse/ARTEMIS-1653)\] - Allow database tables to be created externally
* \[[ARTEMIS-1740](https://issues.apache.org/jira/browse/ARTEMIS-1740)\] - Add support for regex based certificate authentication
* \[[ARTEMIS-1758](https://issues.apache.org/jira/browse/ARTEMIS-1758)\] - Support SASL EXTERNAL
* \[[ARTEMIS-1760](https://issues.apache.org/jira/browse/ARTEMIS-1760)\] - JDBC HA should have configurable tolerance of DB time misalignment
* \[[ARTEMIS-1767](https://issues.apache.org/jira/browse/ARTEMIS-1767)\] - JDBC Lock Acquisition Timeout should behave like the file based version
* \[[ARTEMIS-1774](https://issues.apache.org/jira/browse/ARTEMIS-1774)\] - Node Manager Store table name should be configurable
* \[[ARTEMIS-1776](https://issues.apache.org/jira/browse/ARTEMIS-1776)\] - Implement asynchronous flow control on bridge and clustered bridge
* \[[ARTEMIS-1777](https://issues.apache.org/jira/browse/ARTEMIS-1777)\] - Adding AMQP as an option on producer & consumer & import
* \[[ARTEMIS-1784](https://issues.apache.org/jira/browse/ARTEMIS-1784)\] - JDBC NodeManager should just use DMBS clock
* \[[ARTEMIS-1788](https://issues.apache.org/jira/browse/ARTEMIS-1788)\] - JDBC HA should use JDBC Network Timeout
* \[[ARTEMIS-1790](https://issues.apache.org/jira/browse/ARTEMIS-1790)\] - Improve Topology Member Finding
* \[[ARTEMIS-1793](https://issues.apache.org/jira/browse/ARTEMIS-1793)\] - Do not expose the \_AMQ\_ROUTING\_TYPE header (at least) in STOMP
* \[[ARTEMIS-1799](https://issues.apache.org/jira/browse/ARTEMIS-1799)\] - Create a NotificationActiveMQServerPlugin to publish new types of notifications
* \[[ARTEMIS-1803](https://issues.apache.org/jira/browse/ARTEMIS-1803)\] - Pass ServerConsumer to messageExpired and messageAcknowledged plugin callbacks
* \[[ARTEMIS-1809](https://issues.apache.org/jira/browse/ARTEMIS-1809)\] - Add example showing Virtual Topic Mapping
* \[[ARTEMIS-1815](https://issues.apache.org/jira/browse/ARTEMIS-1815)\] - add "exclusive-queue" example
* \[[ARTEMIS-1816](https://issues.apache.org/jira/browse/ARTEMIS-1816)\] - OpenWire should avoid ByteArrayOutputStream lazy allocation
* \[[ARTEMIS-1826](https://issues.apache.org/jira/browse/ARTEMIS-1826)\] - Hide embedded jetty version
* \[[ARTEMIS-1828](https://issues.apache.org/jira/browse/ARTEMIS-1828)\] - Add option in CLI to specify a routing type for queues
* \[[ARTEMIS-1840](https://issues.apache.org/jira/browse/ARTEMIS-1840)\] - Enhance consumer / producer to generate and consume files
* \[[ARTEMIS-1843](https://issues.apache.org/jira/browse/ARTEMIS-1843)\] - AMQP: Update Qpid JMS to latest 0.32.0 release and Proton-j to 0.27.1 to match
* \[[ARTEMIS-1845](https://issues.apache.org/jira/browse/ARTEMIS-1845)\] - Timestamp header field should display in human readable format on console.
* \[[ARTEMIS-1847](https://issues.apache.org/jira/browse/ARTEMIS-1847)\] - Update Netty to 4-1-24-Final
* \[[ARTEMIS-1861](https://issues.apache.org/jira/browse/ARTEMIS-1861)\] - AMQP: Set a default maxFrameSize for AMQP connections

#### Test

* \[[ARTEMIS-1338](https://issues.apache.org/jira/browse/ARTEMIS-1338)\] - JMS test AmqpMessageRoutingTest\#testRoutingExclusivity fails with the OpenWire protocol (activemq-client library)
* \[[ARTEMIS-1832](https://issues.apache.org/jira/browse/ARTEMIS-1832)\] - HAAutomaticBackupSharedStoreTest::basicDiscovery is dead

#### Task

* \[[ARTEMIS-1772](https://issues.apache.org/jira/browse/ARTEMIS-1772)\] - Reduce memory footprint and allocations of QueueImpl
* \[[ARTEMIS-1822](https://issues.apache.org/jira/browse/ARTEMIS-1822)\] - Inconsistent method name
