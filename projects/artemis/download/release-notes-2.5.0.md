--- 
layout: default_md
title: ActiveMQ Artemis 2.5.0 Release Notes
title-class: page-title-artemis
type: artemis
---

A complete list of JIRAs for the 2.5.0 release can be found [here](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12315920&version=12342127)

#### Bug

* \[[ARTEMIS-609](https://issues.apache.org/jira/browse/ARTEMIS-609)\] - Documentation for Interceptors is wrong regarding broker.xml file structure
* \[[ARTEMIS-872](https://issues.apache.org/jira/browse/ARTEMIS-872)\] - On extremely large volumes, Artemis falsely reports "Storage usage is beyond max-disk-usage"
* \[[ARTEMIS-1022](https://issues.apache.org/jira/browse/ARTEMIS-1022)\] - Artemis does not deliver large message to OpenWire consumer when it is sent from JMS
* \[[ARTEMIS-1181](https://issues.apache.org/jira/browse/ARTEMIS-1181)\] - Broken "see here" links in address-model.html doc page
* \[[ARTEMIS-1183](https://issues.apache.org/jira/browse/ARTEMIS-1183)\] - Empty "queue-attributes.html" doc page
* \[[ARTEMIS-1241](https://issues.apache.org/jira/browse/ARTEMIS-1241)\] - Auto create does not work for FQQN queues
* \[[ARTEMIS-1341](https://issues.apache.org/jira/browse/ARTEMIS-1341)\] - Core JMS does not permit calling Message\#getBytes(arbitrary type) when message has empty body
* \[[ARTEMIS-1345](https://issues.apache.org/jira/browse/ARTEMIS-1345)\] - Concurrent Modification Exceptions after Message.copy
* \[[ARTEMIS-1364](https://issues.apache.org/jira/browse/ARTEMIS-1364)\] - Sorting is not working in new hawtio console filter
* \[[ARTEMIS-1399](https://issues.apache.org/jira/browse/ARTEMIS-1399)\] - FindBugs: Comparing incompatible types for equality in QueueFilterPredicate.java
* \[[ARTEMIS-1406](https://issues.apache.org/jira/browse/ARTEMIS-1406)\] - FindBugs: impossible instanceof in exception handler in MappedSequentialFile.java
* \[[ARTEMIS-1408](https://issues.apache.org/jira/browse/ARTEMIS-1408)\] - FindBugs: Synchronization on java.util.concurrent objects in MQTTSessionState.java
* \[[ARTEMIS-1414](https://issues.apache.org/jira/browse/ARTEMIS-1414)\] - Coverity: Resource leak on an exceptional path in ArtemisCreatePlugin.java
* \[[ARTEMIS-1415](https://issues.apache.org/jira/browse/ARTEMIS-1415)\] - Coverity: Resource leak on an exceptional path in JMSBridgeImpl.java
* \[[ARTEMIS-1416](https://issues.apache.org/jira/browse/ARTEMIS-1416)\] - Queue autocreate does not autocreate queue if address already exists
* \[[ARTEMIS-1486](https://issues.apache.org/jira/browse/ARTEMIS-1486)\] - Core client should be notified if consumer is closed on broker side
* \[[ARTEMIS-1492](https://issues.apache.org/jira/browse/ARTEMIS-1492)\] - Do not return password parameters for acceptors via management
* \[[ARTEMIS-1495](https://issues.apache.org/jira/browse/ARTEMIS-1495)\] - Creating and destroying many queues could deadlock the broker
* \[[ARTEMIS-1505](https://issues.apache.org/jira/browse/ARTEMIS-1505)\] - NPE prevents browsing queue with large messages
* \[[ARTEMIS-1506](https://issues.apache.org/jira/browse/ARTEMIS-1506)\] - Synchronization issue during failover in ClientSessionImpl
* \[[ARTEMIS-1507](https://issues.apache.org/jira/browse/ARTEMIS-1507)\] - ActiveMQConnectionTimedOutException is thrown even though no timeout expired
* \[[ARTEMIS-1508](https://issues.apache.org/jira/browse/ARTEMIS-1508)\] - AMQPMesage.reencode is broken
* \[[ARTEMIS-1512](https://issues.apache.org/jira/browse/ARTEMIS-1512)\] - Race Condition with STOMP Subscribe Receipt
* \[[ARTEMIS-1513](https://issues.apache.org/jira/browse/ARTEMIS-1513)\] - Core Bridge configuration ignoring forwarding-address for AMQP messages
* \[[ARTEMIS-1514](https://issues.apache.org/jira/browse/ARTEMIS-1514)\] - Supporting Large Messages in AMQP
* \[[ARTEMIS-1516](https://issues.apache.org/jira/browse/ARTEMIS-1516)\] - Ensure JNDI using Tomcat Resources works as like ActiveMQ 5
* \[[ARTEMIS-1521](https://issues.apache.org/jira/browse/ARTEMIS-1521)\] - Missing Parameter annotations in ActiveMQServerControl
* \[[ARTEMIS-1523](https://issues.apache.org/jira/browse/ARTEMIS-1523)\] - Message load balacing type not properly set on wildcard bindings
* \[[ARTEMIS-1524](https://issues.apache.org/jira/browse/ARTEMIS-1524)\] - ActiveMQServerControl.listAddresses() can fail with NullPointerException
* \[[ARTEMIS-1526](https://issues.apache.org/jira/browse/ARTEMIS-1526)\] - ActiveMQServerControl.listConsumers() can fail with NullPointer
* \[[ARTEMIS-1529](https://issues.apache.org/jira/browse/ARTEMIS-1529)\] - AMQP Durable subscriber raised javax.jms.JMSException Maximum Consumer Limit Reached on Queue
* \[[ARTEMIS-1530](https://issues.apache.org/jira/browse/ARTEMIS-1530)\] - Expiry statistics are not being updated
* \[[ARTEMIS-1531](https://issues.apache.org/jira/browse/ARTEMIS-1531)\] - Add CriticalAnalyzer to TimedBuffer operations
* \[[ARTEMIS-1533](https://issues.apache.org/jira/browse/ARTEMIS-1533)\] - Schema validation using linux tools like xmllint fails
* \[[ARTEMIS-1535](https://issues.apache.org/jira/browse/ARTEMIS-1535)\] - AMQP transaction sends settle after disposition
* \[[ARTEMIS-1538](https://issues.apache.org/jira/browse/ARTEMIS-1538)\] - trustAll is ignored when specified in the connectionFactory URI
* \[[ARTEMIS-1540](https://issues.apache.org/jira/browse/ARTEMIS-1540)\] - Missing management annotations
* \[[ARTEMIS-1542](https://issues.apache.org/jira/browse/ARTEMIS-1542)\] - AMQPMessage can throw / not check for null
* \[[ARTEMIS-1543](https://issues.apache.org/jira/browse/ARTEMIS-1543)\] - Vote on Live Setting causes incorrectly shutdown when it's backup dies
* \[[ARTEMIS-1546](https://issues.apache.org/jira/browse/ARTEMIS-1546)\] - Messages sent with snapshot won't be read from 1.x consumers
* \[[ARTEMIS-1552](https://issues.apache.org/jira/browse/ARTEMIS-1552)\] - SASL GSSAPI IBM JDK - clients get authentication refused first time they connect to broker
* \[[ARTEMIS-1553](https://issues.apache.org/jira/browse/ARTEMIS-1553)\] - JSON values all being converted to String
* \[[ARTEMIS-1554](https://issues.apache.org/jira/browse/ARTEMIS-1554)\] - JMS bridge with transactions cannot be stopped on session failover
* \[[ARTEMIS-1555](https://issues.apache.org/jira/browse/ARTEMIS-1555)\] - MQTT - Unsubscribe topic in cluster environment leaves reference to the consumer
* \[[ARTEMIS-1558](https://issues.apache.org/jira/browse/ARTEMIS-1558)\] - Message Grouping Openwire Interoperability Issue
* \[[ARTEMIS-1561](https://issues.apache.org/jira/browse/ARTEMIS-1561)\] - Auto create won't work with 1.x clients
* \[[ARTEMIS-1565](https://issues.apache.org/jira/browse/ARTEMIS-1565)\] - A Replica should retry a quorum vote
* \[[ARTEMIS-1566](https://issues.apache.org/jira/browse/ARTEMIS-1566)\] - Openwire client can't receive compressed messages
* \[[ARTEMIS-1567](https://issues.apache.org/jira/browse/ARTEMIS-1567)\] - Roles in management configuration are hard coded. This may cause issues if the role is defined via CLI when the broker is created
* \[[ARTEMIS-1570](https://issues.apache.org/jira/browse/ARTEMIS-1570)\] - SharedNothingBackup does not replicate all journal from live
* \[[ARTEMIS-1572](https://issues.apache.org/jira/browse/ARTEMIS-1572)\] - UTF-8 Encoding is not translating ASCII edge cases correctly
* \[[ARTEMIS-1576](https://issues.apache.org/jira/browse/ARTEMIS-1576)\] - Anonymous producer with AMQP auto-creates address with wrong routing-type
* \[[ARTEMIS-1577](https://issues.apache.org/jira/browse/ARTEMIS-1577)\] - Address-full-policy isn't being applied properly for 1.x JMS client
* \[[ARTEMIS-1580](https://issues.apache.org/jira/browse/ARTEMIS-1580)\] - Browsing in hawtio console allows to show empty pages
* \[[ARTEMIS-1581](https://issues.apache.org/jira/browse/ARTEMIS-1581)\] - limit non-ssl connection, handshake-timeout not configurable
* \[[ARTEMIS-1589](https://issues.apache.org/jira/browse/ARTEMIS-1589)\] - ActiveMQProtonRemotingConnection\#getClientID does not return remote client ID
* \[[ARTEMIS-1591](https://issues.apache.org/jira/browse/ARTEMIS-1591)\] - Exporter won't preserve message ordering
* \[[ARTEMIS-1594](https://issues.apache.org/jira/browse/ARTEMIS-1594)\] - Artemis excessively logs "AMQ222165: No Dead Letter Address" and "AMQ222166: No Expiry Address"
* \[[ARTEMIS-1595](https://issues.apache.org/jira/browse/ARTEMIS-1595)\] - Serialization issues between 1.x and 2.x JNDI objects
* \[[ARTEMIS-1596](https://issues.apache.org/jira/browse/ARTEMIS-1596)\] - Anonymous STOMP consumer/producer auto-creates address with wrong routing-type
* \[[ARTEMIS-1597](https://issues.apache.org/jira/browse/ARTEMIS-1597)\] - Krb5LoginModule will succeed on null principal in error
* \[[ARTEMIS-1598](https://issues.apache.org/jira/browse/ARTEMIS-1598)\] - Cannot lookup certificate from connector
* \[[ARTEMIS-1599](https://issues.apache.org/jira/browse/ARTEMIS-1599)\] - Data exported with 1.x won't be loaded with 2.x
* \[[ARTEMIS-1601](https://issues.apache.org/jira/browse/ARTEMIS-1601)\] - NPE silently thrown in StompSession\#sendMessage
* \[[ARTEMIS-1602](https://issues.apache.org/jira/browse/ARTEMIS-1602)\] - Sending message from AMQP to STOMP fails because of NPE in StompSession
* \[[ARTEMIS-1607](https://issues.apache.org/jira/browse/ARTEMIS-1607)\] - OpenWire is sending responses too early with durable messages
* \[[ARTEMIS-1608](https://issues.apache.org/jira/browse/ARTEMIS-1608)\] - OpenWire throws AMQ119018: Binding already exists
* \[[ARTEMIS-1609](https://issues.apache.org/jira/browse/ARTEMIS-1609)\] - Fix serialization backwards compatibility for JMS destinations
* \[[ARTEMIS-1610](https://issues.apache.org/jira/browse/ARTEMIS-1610)\] - NPE inside WildcardAddressManager on consumer creation
* \[[ARTEMIS-1611](https://issues.apache.org/jira/browse/ARTEMIS-1611)\] - Artemis transformer interface is not backwards compatible
* \[[ARTEMIS-1612](https://issues.apache.org/jira/browse/ARTEMIS-1612)\] - Redistribution of messages does not work if prefixing is used
* \[[ARTEMIS-1617](https://issues.apache.org/jira/browse/ARTEMIS-1617)\] - MQTTSubscriptionManager does not set the autoCreate flag to true for autoCreated addresses
* \[[ARTEMIS-1621](https://issues.apache.org/jira/browse/ARTEMIS-1621)\] - Make producerWindowSize configurable on cluster connection bridges
* \[[ARTEMIS-1624](https://issues.apache.org/jira/browse/ARTEMIS-1624)\] - Unconfigurable maven plugin option for turning on console
* \[[ARTEMIS-1625](https://issues.apache.org/jira/browse/ARTEMIS-1625)\] - Moving messages is broken
* \[[ARTEMIS-1627](https://issues.apache.org/jira/browse/ARTEMIS-1627)\] - Unable to remove address from broker when linked with a wildcard address
* \[[ARTEMIS-1628](https://issues.apache.org/jira/browse/ARTEMIS-1628)\] - Limit pool size of files on the journal by default
* \[[ARTEMIS-1629](https://issues.apache.org/jira/browse/ARTEMIS-1629)\] - In ActiveMQSecurityManager3\#validateUser calling remoteConnection.getClientID() returns null
* \[[ARTEMIS-1633](https://issues.apache.org/jira/browse/ARTEMIS-1633)\] - ActiveMQServerPlugin message routing callbacks should fire for all results
* \[[ARTEMIS-1638](https://issues.apache.org/jira/browse/ARTEMIS-1638)\] - purgeOnNoConsumer is not working properly
* \[[ARTEMIS-1639](https://issues.apache.org/jira/browse/ARTEMIS-1639)\] - HornetQClientProtocolManager sending unsupported packet
* \[[ARTEMIS-1643](https://issues.apache.org/jira/browse/ARTEMIS-1643)\] - Compaction must check against NULL records while replaying
* \[[ARTEMIS-1644](https://issues.apache.org/jira/browse/ARTEMIS-1644)\] - Legacy clients can't access addresses/queues explicitly configured with "jms.queue." and "jms.topic." prefixes
* \[[ARTEMIS-1645](https://issues.apache.org/jira/browse/ARTEMIS-1645)\] - Diverted messages cannot be retried from DLQ
* \[[ARTEMIS-1646](https://issues.apache.org/jira/browse/ARTEMIS-1646)\] - Browsing messages sent via JS client does not work
* \[[ARTEMIS-1652](https://issues.apache.org/jira/browse/ARTEMIS-1652)\] - XmlDataImporter forgets delete tmp files
* \[[ARTEMIS-1654](https://issues.apache.org/jira/browse/ARTEMIS-1654)\] - Bridge reconnect broken
* \[[ARTEMIS-1655](https://issues.apache.org/jira/browse/ARTEMIS-1655)\] - During failover a null key in TransportConfiguration is causing error during encode.
* \[[ARTEMIS-1657](https://issues.apache.org/jira/browse/ARTEMIS-1657)\] - Memory usage on DLQ does not decrement when messages are moved
* \[[ARTEMIS-1659](https://issues.apache.org/jira/browse/ARTEMIS-1659)\] - AMQ224000: Failure in initialisation: java.lang.IllegalStateException: java.lang.IllegalStateException: Cursor 28 had already been created
* \[[ARTEMIS-1660](https://issues.apache.org/jira/browse/ARTEMIS-1660)\] - create-journal-table.oracle does create identity for column id
* \[[ARTEMIS-1662](https://issues.apache.org/jira/browse/ARTEMIS-1662)\] - Reduce log of "INFO \[org.apache.activemq.artemis.core.client\] (Thread-27 (ActiveMQ-client-global-threads)) AMQ211002: Started EPOLL Netty Connector version unknown to ..." to DEBUG
* \[[ARTEMIS-1664](https://issues.apache.org/jira/browse/ARTEMIS-1664)\] - fix npe bug while getting element in the process of rehash
* \[[ARTEMIS-1666](https://issues.apache.org/jira/browse/ARTEMIS-1666)\] - List of prepared transaction details returns Object.toString() instead of Json string
* \[[ARTEMIS-1667](https://issues.apache.org/jira/browse/ARTEMIS-1667)\] - init pagingFactory with journalBufferTimeout\_NIO
* \[[ARTEMIS-1669](https://issues.apache.org/jira/browse/ARTEMIS-1669)\] - JMS message is not received when using a non-transactional JMSConnectionFactoryDefinition
* \[[ARTEMIS-1677](https://issues.apache.org/jira/browse/ARTEMIS-1677)\] - Wrong documentation describing On Linux machine AIO journal type not supports NFS
* \[[ARTEMIS-1678](https://issues.apache.org/jira/browse/ARTEMIS-1678)\] - Tomcat JNDI example broken
* \[[ARTEMIS-1680](https://issues.apache.org/jira/browse/ARTEMIS-1680)\] - Message load balancing type isn't updated in the linked bindings when wildcards are used
* \[[ARTEMIS-1681](https://issues.apache.org/jira/browse/ARTEMIS-1681)\] - Hawtio console security issue
* \[[ARTEMIS-1682](https://issues.apache.org/jira/browse/ARTEMIS-1682)\] - duplicate classes in Artemis jars
* \[[ARTEMIS-1688](https://issues.apache.org/jira/browse/ARTEMIS-1688)\] - Cluster won't form when auto-create-addresses = false
* \[[ARTEMIS-1693](https://issues.apache.org/jira/browse/ARTEMIS-1693)\] - JMS remote client can't connect to the broker due to a missing security config file
* \[[ARTEMIS-1694](https://issues.apache.org/jira/browse/ARTEMIS-1694)\] - \[DOC\] Wrong default value for graceful-shutdown-enabled
* \[[ARTEMIS-1696](https://issues.apache.org/jira/browse/ARTEMIS-1696)\] - Allow empty 'address' for grouping-handler
* \[[ARTEMIS-1700](https://issues.apache.org/jira/browse/ARTEMIS-1700)\] - Server stopped responding and killed itself while exiting paging state
* \[[ARTEMIS-1701](https://issues.apache.org/jira/browse/ARTEMIS-1701)\] - Zone ID not stripped properly from IPv6 addresses
* \[[ARTEMIS-1703](https://issues.apache.org/jira/browse/ARTEMIS-1703)\] - Restrict directory listings of Hawtio within the web server configuration
* \[[ARTEMIS-1704](https://issues.apache.org/jira/browse/ARTEMIS-1704)\] - Clear activate callbacks when stopping the broker
* \[[ARTEMIS-1705](https://issues.apache.org/jira/browse/ARTEMIS-1705)\] - Queue stop deliver after remove all paged message over JMX
* \[[ARTEMIS-1707](https://issues.apache.org/jira/browse/ARTEMIS-1707)\] - \[openwire\] error on create of queue if another connection creates one of the same name
* \[[ARTEMIS-1709](https://issues.apache.org/jira/browse/ARTEMIS-1709)\] - Can't send large messages with AMQP
* \[[ARTEMIS-1711](https://issues.apache.org/jira/browse/ARTEMIS-1711)\] - Sending a message to an address with an exclusive divert using OpenWire fails
* \[[ARTEMIS-1712](https://issues.apache.org/jira/browse/ARTEMIS-1712)\] - \[openwire\] missing null check could lead to NPE during TX rollback
* \[[ARTEMIS-1713](https://issues.apache.org/jira/browse/ARTEMIS-1713)\] - Calling getClientId() on an OpenWireConnection can cause a NPE
* \[[ARTEMIS-1714](https://issues.apache.org/jira/browse/ARTEMIS-1714)\] - Provide release summary & upgrade details
* \[[ARTEMIS-1717](https://issues.apache.org/jira/browse/ARTEMIS-1717)\] - createAddress & deleteAddress permissions not properly read from broker.xml
* \[[ARTEMIS-1718](https://issues.apache.org/jira/browse/ARTEMIS-1718)\] - Do not programmatically set "artemis.instance.etc" system property
* \[[ARTEMIS-1720](https://issues.apache.org/jira/browse/ARTEMIS-1720)\] - Expose activemq.xsd to validate bootstrap.xml and management.xml
* \[[ARTEMIS-1721](https://issues.apache.org/jira/browse/ARTEMIS-1721)\] - Broken link in User Manual
* \[[ARTEMIS-1726](https://issues.apache.org/jira/browse/ARTEMIS-1726)\] - Roles are not applied for create and delete queue when using OpenWire
* \[[ARTEMIS-1727](https://issues.apache.org/jira/browse/ARTEMIS-1727)\] - Broker should close socket on failed connection attempt using OpenWire
* \[[ARTEMIS-1730](https://issues.apache.org/jira/browse/ARTEMIS-1730)\] - Server leaks memory when messages are expired without an expiry-address
* \[[ARTEMIS-1731](https://issues.apache.org/jira/browse/ARTEMIS-1731)\] - Startup fails when XSD validation cannot access Internet
* \[[ARTEMIS-1737](https://issues.apache.org/jira/browse/ARTEMIS-1737)\] - When live-slave fails-back to master, it turns off everything down, even its console
* \[[ARTEMIS-1741](https://issues.apache.org/jira/browse/ARTEMIS-1741)\] - log warning if a node isnt configured for quorum voting
* \[[ARTEMIS-1751](https://issues.apache.org/jira/browse/ARTEMIS-1751)\] - Artemis backup servers hawtio web management doesn't come online

#### New Feature

* \[[ARTEMIS-853](https://issues.apache.org/jira/browse/ARTEMIS-853)\] - Support for exclusive consumers
* \[[ARTEMIS-1030](https://issues.apache.org/jira/browse/ARTEMIS-1030)\] - Support equivilent ActiveMQ 5.x Virtual Topic Naming Abilities
* \[[ARTEMIS-1548](https://issues.apache.org/jira/browse/ARTEMIS-1548)\] - Support CRL
* \[[ARTEMIS-1550](https://issues.apache.org/jira/browse/ARTEMIS-1550)\] - Support LVQ for OpenWire
* \[[ARTEMIS-1600](https://issues.apache.org/jira/browse/ARTEMIS-1600)\] - Support masked passwords in bootstrap.xm and login.config
* \[[ARTEMIS-1623](https://issues.apache.org/jira/browse/ARTEMIS-1623)\] - create an ActiveMQServerPlugin for logging various broker events
* \[[ARTEMIS-1649](https://issues.apache.org/jira/browse/ARTEMIS-1649)\] - enable openssl provider for Netty
* \[[ARTEMIS-1661](https://issues.apache.org/jira/browse/ARTEMIS-1661)\] - Enable splitting of broker.xml into multiple files
* \[[ARTEMIS-1663](https://issues.apache.org/jira/browse/ARTEMIS-1663)\] - Add enhanced message count and size metrics for Queues

#### Improvement

* \[[ARTEMIS-836](https://issues.apache.org/jira/browse/ARTEMIS-836)\] - Server start log does not display the correct configuration
* \[[ARTEMIS-1198](https://issues.apache.org/jira/browse/ARTEMIS-1198)\] - Add listAllSessionsAsJSON
* \[[ARTEMIS-1511](https://issues.apache.org/jira/browse/ARTEMIS-1511)\] - Add WebSocket coverage to STOMP tests
* \[[ARTEMIS-1520](https://issues.apache.org/jira/browse/ARTEMIS-1520)\] - Add connectionID to trace logging that deals with packet reading/writing
* \[[ARTEMIS-1522](https://issues.apache.org/jira/browse/ARTEMIS-1522)\] - add date to timestamp in default logger
* \[[ARTEMIS-1534](https://issues.apache.org/jira/browse/ARTEMIS-1534)\] - adding openwire connection logging
* \[[ARTEMIS-1544](https://issues.apache.org/jira/browse/ARTEMIS-1544)\] - AMQP: Use proper typing when accessing ApplicationProperties Map values
* \[[ARTEMIS-1547](https://issues.apache.org/jira/browse/ARTEMIS-1547)\] - Support referrals in the LDAP login module
* \[[ARTEMIS-1563](https://issues.apache.org/jira/browse/ARTEMIS-1563)\] - added an example to demo Slow Consumer Policy KILL and NOTIFY
* \[[ARTEMIS-1569](https://issues.apache.org/jira/browse/ARTEMIS-1569)\] - Add 'user' attribute to queue in XML/JMX
* \[[ARTEMIS-1575](https://issues.apache.org/jira/browse/ARTEMIS-1575)\] - configuring custom brokerPlugins within the broker.xml
* \[[ARTEMIS-1579](https://issues.apache.org/jira/browse/ARTEMIS-1579)\] - Browsing messages in hawtio management console is limited to 200 messages
* \[[ARTEMIS-1585](https://issues.apache.org/jira/browse/ARTEMIS-1585)\] - Log connector details on start
* \[[ARTEMIS-1590](https://issues.apache.org/jira/browse/ARTEMIS-1590)\] - Use properties to configure JDBC store SQLProvider
* \[[ARTEMIS-1606](https://issues.apache.org/jira/browse/ARTEMIS-1606)\] - Change AddressInfo RoutingType Set to use EnumSet
* \[[ARTEMIS-1613](https://issues.apache.org/jira/browse/ARTEMIS-1613)\] - Integrate database into CLI Tools (Print-data, export and create)
* \[[ARTEMIS-1616](https://issues.apache.org/jira/browse/ARTEMIS-1616)\] - OpenWire improvements
* \[[ARTEMIS-1619](https://issues.apache.org/jira/browse/ARTEMIS-1619)\] - Add plugin support for address creation, update and removal
* \[[ARTEMIS-1622](https://issues.apache.org/jira/browse/ARTEMIS-1622)\] - Reduce memory footprint of QueueImpl
* \[[ARTEMIS-1626](https://issues.apache.org/jira/browse/ARTEMIS-1626)\] - Disable thread leak check for failing tests
* \[[ARTEMIS-1630](https://issues.apache.org/jira/browse/ARTEMIS-1630)\] - Create Artemis Client Karaf features
* \[[ARTEMIS-1641](https://issues.apache.org/jira/browse/ARTEMIS-1641)\] - Cleanup eventual bad Page Transactions
* \[[ARTEMIS-1647](https://issues.apache.org/jira/browse/ARTEMIS-1647)\] - Add plugin support for binding creation and removal
* \[[ARTEMIS-1650](https://issues.apache.org/jira/browse/ARTEMIS-1650)\] - Improve paged message acknowledge
* \[[ARTEMIS-1651](https://issues.apache.org/jira/browse/ARTEMIS-1651)\] - Allow custom etc and data directories to be used
* \[[ARTEMIS-1656](https://issues.apache.org/jira/browse/ARTEMIS-1656)\] - OpenWire scalability improvements
* \[[ARTEMIS-1658](https://issues.apache.org/jira/browse/ARTEMIS-1658)\] - Core queue lookup with Artemis RA no longer works with 1x address model
* \[[ARTEMIS-1675](https://issues.apache.org/jira/browse/ARTEMIS-1675)\] - Adding --safe option on print-data
* \[[ARTEMIS-1679](https://issues.apache.org/jira/browse/ARTEMIS-1679)\] - Stopping consumer no need to wait until all queued tasks done
* \[[ARTEMIS-1685](https://issues.apache.org/jira/browse/ARTEMIS-1685)\] - Set MQTT connection clientID before session creation
* \[[ARTEMIS-1690](https://issues.apache.org/jira/browse/ARTEMIS-1690)\] - Remove redundant "mvn install" during travis-ci build
* \[[ARTEMIS-1695](https://issues.apache.org/jira/browse/ARTEMIS-1695)\] - Improve Stomp backwards compatibility with 5.x
* \[[ARTEMIS-1697](https://issues.apache.org/jira/browse/ARTEMIS-1697)\] - Simplify ActivateCallback interface with default methods
* \[[ARTEMIS-1698](https://issues.apache.org/jira/browse/ARTEMIS-1698)\] - Support "instance" web deployments
* \[[ARTEMIS-1702](https://issues.apache.org/jira/browse/ARTEMIS-1702)\] - ConcurrentLongHashMap and ConcurrentLongHashSet should avoid volatile set cost on put/remove
* \[[ARTEMIS-1706](https://issues.apache.org/jira/browse/ARTEMIS-1706)\] - Support wantClientAuth on NettyAcceptor
* \[[ARTEMIS-1722](https://issues.apache.org/jira/browse/ARTEMIS-1722)\] - Reduce pooled Netty ByteBuf usage
* \[[ARTEMIS-1723](https://issues.apache.org/jira/browse/ARTEMIS-1723)\] - Migrate AMQP C\# examples to the common .NET version
* \[[ARTEMIS-1724](https://issues.apache.org/jira/browse/ARTEMIS-1724)\] - Create Artemis Openwire Client Karaf feature
* \[[ARTEMIS-1728](https://issues.apache.org/jira/browse/ARTEMIS-1728)\] - Reclaim memory when page cursor complete
* \[[ARTEMIS-1739](https://issues.apache.org/jira/browse/ARTEMIS-1739)\] - default module name for artemis-native uses reserved keyword

#### Task

* \[[ARTEMIS-608](https://issues.apache.org/jira/browse/ARTEMIS-608)\] - Document how to add user-provided classes to Broker class path
* \[[ARTEMIS-1500](https://issues.apache.org/jira/browse/ARTEMIS-1500)\] - make netty dependency usage consistent
* \[[ARTEMIS-1504](https://issues.apache.org/jira/browse/ARTEMIS-1504)\] - AMQP: Update Qpid JMS to latest 0.30.0 release and Proton-j to 0.26.0 to match
* \[[ARTEMIS-1510](https://issues.apache.org/jira/browse/ARTEMIS-1510)\] - Refactor Maven poms
* \[[ARTEMIS-1517](https://issues.apache.org/jira/browse/ARTEMIS-1517)\] - Clarify SendAck and Confirmation WindowSize usage
* \[[ARTEMIS-1525](https://issues.apache.org/jira/browse/ARTEMIS-1525)\] - Refactor embedded examples
* \[[ARTEMIS-1528](https://issues.apache.org/jira/browse/ARTEMIS-1528)\] - Upgrade slf4j-jboss-logmanager to 1.0.4.GA
* \[[ARTEMIS-1557](https://issues.apache.org/jira/browse/ARTEMIS-1557)\] - Update Netty to latest 4.1.18.Final
* \[[ARTEMIS-1562](https://issues.apache.org/jira/browse/ARTEMIS-1562)\] - Refactor example documentation
* \[[ARTEMIS-1571](https://issues.apache.org/jira/browse/ARTEMIS-1571)\] - Upgrade to Netty 4.1.19.Final
* \[[ARTEMIS-1632](https://issues.apache.org/jira/browse/ARTEMIS-1632)\] - Upgrade JBoss logging to 3.3.1.Final
* \[[ARTEMIS-1642](https://issues.apache.org/jira/browse/ARTEMIS-1642)\] - Add log info to FileStoreMonitor
* \[[ARTEMIS-1684](https://issues.apache.org/jira/browse/ARTEMIS-1684)\] - Enable TravisCI
* \[[ARTEMIS-1687](https://issues.apache.org/jira/browse/ARTEMIS-1687)\] - Reduce logging for fast-tests
* \[[ARTEMIS-1719](https://issues.apache.org/jira/browse/ARTEMIS-1719)\] - Update Netty to 4-1-22-Final
