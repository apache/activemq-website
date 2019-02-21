--- 
layout: default_md
title: ActiveMQ Artemis 2.4.0 Release Notes
title-class: page-title-artemis
type: artemis
---

A complete list of JIRAs for the 2.4.0 release can be found [here](https://issues.apache.org/jira/secure/ReleaseNote.jspa?version=12341540&projectId=12315920)

#### Bug

* \[[ARTEMIS-450](https://issues.apache.org/jira/browse/ARTEMIS-450)\] - Deadlocked broker over addHead and Rollback with AMQP
* \[[ARTEMIS-1218](https://issues.apache.org/jira/browse/ARTEMIS-1218)\] - Add support for MQTT "link stealing" (MQTT-3.1.4-2)
* \[[ARTEMIS-1227](https://issues.apache.org/jira/browse/ARTEMIS-1227)\] - Internal properties not removed from messages
* \[[ARTEMIS-1314](https://issues.apache.org/jira/browse/ARTEMIS-1314)\] - Using the message filter with JMSCorrelationID seems not to work
* \[[ARTEMIS-1352](https://issues.apache.org/jira/browse/ARTEMIS-1352)\] - Artemis 2.2.0, createTopic create an anycast queue when there is no consumer created
* \[[ARTEMIS-1366](https://issues.apache.org/jira/browse/ARTEMIS-1366)\] - Openwire consumer is listed twice in hawtio console, consuming from Advisory & requested queue/address
* \[[ARTEMIS-1382](https://issues.apache.org/jira/browse/ARTEMIS-1382)\] - Log messages without prefixed id code in artemis-server
* \[[ARTEMIS-1391](https://issues.apache.org/jira/browse/ARTEMIS-1391)\] - Embedding two instances of Artemis as MQTT broker doesn't work
* \[[ARTEMIS-1393](https://issues.apache.org/jira/browse/ARTEMIS-1393)\] - CriticalAnalyzer timeout uses System::currentTimeMillis
* \[[ARTEMIS-1395](https://issues.apache.org/jira/browse/ARTEMIS-1395)\] - FindBugs: Dubious method used: System.exit() in CoreMessage\#toString()
* \[[ARTEMIS-1397](https://issues.apache.org/jira/browse/ARTEMIS-1397)\] - io.netty.buffer.UnpooledUnsafeDirectByteBufWrapper not found when running in an OSGI container
* \[[ARTEMIS-1398](https://issues.apache.org/jira/browse/ARTEMIS-1398)\] - MQTT client sending wrong password will hang indefinitely, broker logs Error disconnecting client: null
* \[[ARTEMIS-1400](https://issues.apache.org/jira/browse/ARTEMIS-1400)\] - FindBugs warnings
* \[[ARTEMIS-1401](https://issues.apache.org/jira/browse/ARTEMIS-1401)\] - Numerical overflow fix when using System::nanoTime
* \[[ARTEMIS-1403](https://issues.apache.org/jira/browse/ARTEMIS-1403)\] - Wildcard matching should always respect delimiters
* \[[ARTEMIS-1405](https://issues.apache.org/jira/browse/ARTEMIS-1405)\] - PurgeOnNoConsumer queue config is not persisted on restart
* \[[ARTEMIS-1407](https://issues.apache.org/jira/browse/ARTEMIS-1407)\] - FindBugs: Suspicious calls to generic collection methods in AMQPConnectionCallback.java
* \[[ARTEMIS-1410](https://issues.apache.org/jira/browse/ARTEMIS-1410)\] - Coverity: Identical code for different branches
* \[[ARTEMIS-1413](https://issues.apache.org/jira/browse/ARTEMIS-1413)\] - JMSDeliveryMode/Priority is lost when AMQP Producer and CORE Consumer
* \[[ARTEMIS-1417](https://issues.apache.org/jira/browse/ARTEMIS-1417)\] - Failback not working on NFSv4
* \[[ARTEMIS-1418](https://issues.apache.org/jira/browse/ARTEMIS-1418)\] - AIOSequentialFile does not throw Critical IO in several places
* \[[ARTEMIS-1419](https://issues.apache.org/jira/browse/ARTEMIS-1419)\] - OpenWire advisory message never deleted
* \[[ARTEMIS-1421](https://issues.apache.org/jira/browse/ARTEMIS-1421)\] - Duplicate queue in XML possible
* \[[ARTEMIS-1422](https://issues.apache.org/jira/browse/ARTEMIS-1422)\] - Support wildcard config for address matching
* \[[ARTEMIS-1424](https://issues.apache.org/jira/browse/ARTEMIS-1424)\] - Openwire not work with different tightEncoding options
* \[[ARTEMIS-1425](https://issues.apache.org/jira/browse/ARTEMIS-1425)\] - Unable to purge messages in queue (via hawtio)
* \[[ARTEMIS-1431](https://issues.apache.org/jira/browse/ARTEMIS-1431)\] - AMQ154003: Unable to reconnect org.apache.activemq.artemis.ra.inflow.ActiveMQActivationSpec
* \[[ARTEMIS-1438](https://issues.apache.org/jira/browse/ARTEMIS-1438)\] - Upgrade hawtio to 1.5.4
* \[[ARTEMIS-1440](https://issues.apache.org/jira/browse/ARTEMIS-1440)\] - Artemis broker.forceFailover not shutting down broker
* \[[ARTEMIS-1441](https://issues.apache.org/jira/browse/ARTEMIS-1441)\] - Critical Analyzer checkPeriod is not properly parsed
* \[[ARTEMIS-1442](https://issues.apache.org/jira/browse/ARTEMIS-1442)\] - Server should shut itself down if can't open new file
* \[[ARTEMIS-1443](https://issues.apache.org/jira/browse/ARTEMIS-1443)\] - When running Artemis in OSGI specifying CORE protocol causes it not to start
* \[[ARTEMIS-1444](https://issues.apache.org/jira/browse/ARTEMIS-1444)\] - Large messages are not working with OpenWire protocol
* \[[ARTEMIS-1445](https://issues.apache.org/jira/browse/ARTEMIS-1445)\] - Auto-created addresses and queues are not being auto-deleted for AMQP and OpenWire clients
* \[[ARTEMIS-1448](https://issues.apache.org/jira/browse/ARTEMIS-1448)\] - Core to JMS message fails to convert priority
* \[[ARTEMIS-1450](https://issues.apache.org/jira/browse/ARTEMIS-1450)\] - InitialMessagePacketSize property can not be set on ConnectionFactoryConfiguration
* \[[ARTEMIS-1455](https://issues.apache.org/jira/browse/ARTEMIS-1455)\] - HQ222142: Error on resetting large message deliver - null: java.lang.NullPointerException
* \[[ARTEMIS-1456](https://issues.apache.org/jira/browse/ARTEMIS-1456)\] - createQueue(null, ...) is failing, even though documentation says this is valid call
* \[[ARTEMIS-1457](https://issues.apache.org/jira/browse/ARTEMIS-1457)\] - Diverts are not working with Openwire protocol
* \[[ARTEMIS-1461](https://issues.apache.org/jira/browse/ARTEMIS-1461)\] - Allow Property changes on AMQP message and reencode
* \[[ARTEMIS-1464](https://issues.apache.org/jira/browse/ARTEMIS-1464)\] - Core to AMQP conversion BytesMessage corrupts bytes
* \[[ARTEMIS-1468](https://issues.apache.org/jira/browse/ARTEMIS-1468)\] - Address can't be deleted via management console
* \[[ARTEMIS-1470](https://issues.apache.org/jira/browse/ARTEMIS-1470)\] - Console move message broken
* \[[ARTEMIS-1473](https://issues.apache.org/jira/browse/ARTEMIS-1473)\] - System property BROKER\_BIND\_URL with parameters will not work if AMQ\_USER and AMQ\_PASSWORD also set
* \[[ARTEMIS-1475](https://issues.apache.org/jira/browse/ARTEMIS-1475)\] - NPE when deploying 2 MDBs with same clientID/subscriptionName
* \[[ARTEMIS-1479](https://issues.apache.org/jira/browse/ARTEMIS-1479)\] - Set validated user in all messages
* \[[ARTEMIS-1480](https://issues.apache.org/jira/browse/ARTEMIS-1480)\] - Console purge Queue is broken
* \[[ARTEMIS-1482](https://issues.apache.org/jira/browse/ARTEMIS-1482)\] - Catch malformed simple string
* \[[ARTEMIS-1483](https://issues.apache.org/jira/browse/ARTEMIS-1483)\] - Upgrade beanutils
* \[[ARTEMIS-1484](https://issues.apache.org/jira/browse/ARTEMIS-1484)\] - Live's topology update may be ignored
* \[[ARTEMIS-1490](https://issues.apache.org/jira/browse/ARTEMIS-1490)\] - Race on deleteAddress when autocreated
* \[[ARTEMIS-1491](https://issues.apache.org/jira/browse/ARTEMIS-1491)\] - multiple Jolokia instances shipped

#### Improvement

* \[[ARTEMIS-1318](https://issues.apache.org/jira/browse/ARTEMIS-1318)\] - Uses unbuffered MAPPED Journal if no data-sync is required
* \[[ARTEMIS-1390](https://issues.apache.org/jira/browse/ARTEMIS-1390)\] - 2 minute delay in hawtio startup on host with no internet access
* \[[ARTEMIS-1420](https://issues.apache.org/jira/browse/ARTEMIS-1420)\] - enforce timeout on network client handshake
* \[[ARTEMIS-1423](https://issues.apache.org/jira/browse/ARTEMIS-1423)\] - \[ActiveMQServerControl.listQueues(), filtering \] add numeric filtering for ActiveMQServerControl.listQueues()
* \[[ARTEMIS-1433](https://issues.apache.org/jira/browse/ARTEMIS-1433)\] - expose total Address memory usage in JMX
* \[[ARTEMIS-1435](https://issues.apache.org/jira/browse/ARTEMIS-1435)\] - Expose the Jolokia security configuration for the web console
* \[[ARTEMIS-1436](https://issues.apache.org/jira/browse/ARTEMIS-1436)\] - update CLI StatQueue to allow greater\_than/less\_than operations
* \[[ARTEMIS-1439](https://issues.apache.org/jira/browse/ARTEMIS-1439)\] - Upgrade to Netty 4.1.16.Final
* \[[ARTEMIS-1446](https://issues.apache.org/jira/browse/ARTEMIS-1446)\] - Support passing in properties to Transformers for configuration
* \[[ARTEMIS-1451](https://issues.apache.org/jira/browse/ARTEMIS-1451)\] - Remove synchronization on ActiveMQThreadPoolExecutor
* \[[ARTEMIS-1452](https://issues.apache.org/jira/browse/ARTEMIS-1452)\] - Journal Configuration Improvements
* \[[ARTEMIS-1454](https://issues.apache.org/jira/browse/ARTEMIS-1454)\] - Support SASL in outgoing AMQP connections
* \[[ARTEMIS-1465](https://issues.apache.org/jira/browse/ARTEMIS-1465)\] - Improve MQTT protocol logging
* \[[ARTEMIS-1469](https://issues.apache.org/jira/browse/ARTEMIS-1469)\] - Support trusting any SSL client certificate for testing purposes
* \[[ARTEMIS-1474](https://issues.apache.org/jira/browse/ARTEMIS-1474)\] - TimedBuffer improved doc and refactored dead brenches on methods
* \[[ARTEMIS-1476](https://issues.apache.org/jira/browse/ARTEMIS-1476)\] - HdrHistogram support on verbose SyncCalculation
* \[[ARTEMIS-1477](https://issues.apache.org/jira/browse/ARTEMIS-1477)\] - Remove netty-all dependency from clients
* \[[ARTEMIS-1481](https://issues.apache.org/jira/browse/ARTEMIS-1481)\] - Update to hawtio 1.5.5
* \[[ARTEMIS-1485](https://issues.apache.org/jira/browse/ARTEMIS-1485)\] - ActiveMQTestBase.threadDump should print information about locks and deadlocks
* \[[ARTEMIS-1489](https://issues.apache.org/jira/browse/ARTEMIS-1489)\] - Add TimedBuffer to Critical Analyzer

#### New Feature

* \[[ARTEMIS-534](https://issues.apache.org/jira/browse/ARTEMIS-534)\] - Allow JMX configuration from broker.xml
* \[[ARTEMIS-1428](https://issues.apache.org/jira/browse/ARTEMIS-1428)\] - Allow configuration of max frame payload length for STOMP web-socket
* \[[ARTEMIS-1447](https://issues.apache.org/jira/browse/ARTEMIS-1447)\] - JDBC NodeManager to support JDBC HA Shared Store
* \[[ARTEMIS-1463](https://issues.apache.org/jira/browse/ARTEMIS-1463)\] - Implement rbac of management objects

#### Task

* \[[ARTEMIS-1426](https://issues.apache.org/jira/browse/ARTEMIS-1426)\] - Update stomp.js in chat example
* \[[ARTEMIS-1432](https://issues.apache.org/jira/browse/ARTEMIS-1432)\] - update to qpid-jms 0.25.0 and proton-j 0.22.0
* \[[ARTEMIS-1434](https://issues.apache.org/jira/browse/ARTEMIS-1434)\] - handle edge cases when driving transport\#tick(now) with nanoTime derived values
* \[[ARTEMIS-1453](https://issues.apache.org/jira/browse/ARTEMIS-1453)\] - AMQP: Update Qpid JMS to latest 0.26.0 release
* \[[ARTEMIS-1462](https://issues.apache.org/jira/browse/ARTEMIS-1462)\] - Allow ActiveMQScheduledComponent initial delay configuration
* \[[ARTEMIS-1466](https://issues.apache.org/jira/browse/ARTEMIS-1466)\] - Upgrade Node.js version to comply with GitBook 3.2.3
* \[[ARTEMIS-1467](https://issues.apache.org/jira/browse/ARTEMIS-1467)\] - Create example for bridging messages from the 5.x broker to Artemis
* \[[ARTEMIS-1488](https://issues.apache.org/jira/browse/ARTEMIS-1488)\] - Add "all" client jar to distribution
