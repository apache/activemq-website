       /\* <!\[CDATA\[ */ .download { font-size: 80%; } table.download { width: 100%;} table.download tr td { border: 1px solid #ccc; padding: .5em; } /* \]\]> */  ActiveMQ Artemis Release Notes 2.3.0

*   [ActiveMQ Artemis](index.html)
*   [Documentation](docs.md)
*   [Download](OverviewOverview/Overview/download.md)

![ActiveMQ logo](/images/activemq-logo.png)

ActiveMQ Artemis
================

Release Notes - Apache ActiveMQ Artemis 2.3.0
---------------------------------------------

A complete list of JIRAs for the 2.3.0 release can be found [here.](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12315920&version=12341247)

Bug
---

*   \[[ARTEMIS-1255](https://issues.apache.org/jira/browse/ARTEMIS-1255)\] \- Unable to validate user
*   \[[ARTEMIS-1271](https://issues.apache.org/jira/browse/ARTEMIS-1271)\] \- Deadlock on shutdown may occur if using shared store and network cable is pulled
*   \[[ARTEMIS-1291](https://issues.apache.org/jira/browse/ARTEMIS-1291)\] \- Broken link in a documentation
*   \[[ARTEMIS-1297](https://issues.apache.org/jira/browse/ARTEMIS-1297)\] \- AMQPMessages cannot be load balanced across a Message Bridge
*   \[[ARTEMIS-1299](https://issues.apache.org/jira/browse/ARTEMIS-1299)\] \- Unable to configure comma delimited enabledProtocols
*   \[[ARTEMIS-1303](https://issues.apache.org/jira/browse/ARTEMIS-1303)\] \- Potential dead lock in Replication Endpoint
*   \[[ARTEMIS-1305](https://issues.apache.org/jira/browse/ARTEMIS-1305)\] \- Server Frozen during shutdown if RA is retrying
*   \[[ARTEMIS-1308](https://issues.apache.org/jira/browse/ARTEMIS-1308)\] \- Client Acknowledge not performant
*   \[[ARTEMIS-1310](https://issues.apache.org/jira/browse/ARTEMIS-1310)\] \- Provide GSSAPI (kerberos) SASL mechanism for AMQP
*   \[[ARTEMIS-1311](https://issues.apache.org/jira/browse/ARTEMIS-1311)\] \- Log messages without prefixed id code in artemis-core-client
*   \[[ARTEMIS-1312](https://issues.apache.org/jira/browse/ARTEMIS-1312)\] \- TimedBuffer doubled timeout with blocking flush
*   \[[ARTEMIS-1313](https://issues.apache.org/jira/browse/ARTEMIS-1313)\] \- getAddresses in PostOfficeImpl does not correctly return all addresses
*   \[[ARTEMIS-1315](https://issues.apache.org/jira/browse/ARTEMIS-1315)\] \- Client disconnection may cause consumer to hang
*   \[[ARTEMIS-1317](https://issues.apache.org/jira/browse/ARTEMIS-1317)\] \- Messages that expire on OpenWire client are lost (never make it to ExpiryQueue, if one is configured)
*   \[[ARTEMIS-1320](https://issues.apache.org/jira/browse/ARTEMIS-1320)\] \- Support arbitrary URL for connection between REST interface and broker
*   \[[ARTEMIS-1323](https://issues.apache.org/jira/browse/ARTEMIS-1323)\] \- REST: manual acknowledgment not working as documented
*   \[[ARTEMIS-1328](https://issues.apache.org/jira/browse/ARTEMIS-1328)\] \- Delivery guard can take too long
*   \[[ARTEMIS-1332](https://issues.apache.org/jira/browse/ARTEMIS-1332)\] \- The broker should always return a response when a client adds metadata
*   \[[ARTEMIS-1333](https://issues.apache.org/jira/browse/ARTEMIS-1333)\] \- Completion listener can lead to message loss in case of crash
*   \[[ARTEMIS-1353](https://issues.apache.org/jira/browse/ARTEMIS-1353)\] \- Replication packets can get out of order
*   \[[ARTEMIS-1354](https://issues.apache.org/jira/browse/ARTEMIS-1354)\] \- AIOSequentialFile does not call IOError on write failure
*   \[[ARTEMIS-1355](https://issues.apache.org/jira/browse/ARTEMIS-1355)\] \- Default config for client reconnection attempts does not match documentation
*   \[[ARTEMIS-1359](https://issues.apache.org/jira/browse/ARTEMIS-1359)\] \- AMQP: Broker reencodes the message Header needlessly on outbound dispatch
*   \[[ARTEMIS-1368](https://issues.apache.org/jira/browse/ARTEMIS-1368)\] \- Artemis gets to state when it doesn't respond to producer
*   \[[ARTEMIS-1376](https://issues.apache.org/jira/browse/ARTEMIS-1376)\] \- AMQ224014: Failed to close session: java.lang.NullPointerException
*   \[[ARTEMIS-1378](https://issues.apache.org/jira/browse/ARTEMIS-1378)\] \- ActiveMQServer.updateQueue or cli.updateQueue is broken, may lose messages
*   \[[ARTEMIS-1379](https://issues.apache.org/jira/browse/ARTEMIS-1379)\] \- Some queue stats are not thread-safe
*   \[[ARTEMIS-1385](https://issues.apache.org/jira/browse/ARTEMIS-1385)\] \- Incomplete comment in default broker.xml file
*   \[[ARTEMIS-1389](https://issues.apache.org/jira/browse/ARTEMIS-1389)\] \- Closing session on open wire will throw a NPE on logs

Improvement
-----------

*   \[[ARTEMIS-1306](https://issues.apache.org/jira/browse/ARTEMIS-1306)\] \- Clarify identity for authentication failures
*   \[[ARTEMIS-1321](https://issues.apache.org/jira/browse/ARTEMIS-1321)\] \- Remove final modifier from org.apache.activemq.artemis.ra.ActiveMQRASession
*   \[[ARTEMIS-1327](https://issues.apache.org/jira/browse/ARTEMIS-1327)\] \- Support checked exceptions from ActiveMQServerPlugin
*   \[[ARTEMIS-1335](https://issues.apache.org/jira/browse/ARTEMIS-1335)\] \- Update Netty to 4.1.14
*   \[[ARTEMIS-1343](https://issues.apache.org/jira/browse/ARTEMIS-1343)\] \- Update Configuration Transport Documentation
*   \[[ARTEMIS-1346](https://issues.apache.org/jira/browse/ARTEMIS-1346)\] \- Add documentation for new Management Console
*   \[[ARTEMIS-1347](https://issues.apache.org/jira/browse/ARTEMIS-1347)\] \- ActiveMQServerPlugin beforeCreateConsumer should have the QueueBinding as an argument
*   \[[ARTEMIS-1356](https://issues.apache.org/jira/browse/ARTEMIS-1356)\] \- Avoid allocations and atomic operations to recognize handler's thread
*   \[[ARTEMIS-1357](https://issues.apache.org/jira/browse/ARTEMIS-1357)\] \- TypedProperties encode/decode improvement
*   \[[ARTEMIS-1361](https://issues.apache.org/jira/browse/ARTEMIS-1361)\] \- Support Updating queue config from broker.xml at runtime
*   \[[ARTEMIS-1367](https://issues.apache.org/jira/browse/ARTEMIS-1367)\] \- Add LOG to the Critical Analyzer policies
*   \[[ARTEMIS-1369](https://issues.apache.org/jira/browse/ARTEMIS-1369)\] \- Include queue name in security errors where appropriate
*   \[[ARTEMIS-1370](https://issues.apache.org/jira/browse/ARTEMIS-1370)\] \- consumer command, does not offer a ClientID command line arg
*   \[[ARTEMIS-1374](https://issues.apache.org/jira/browse/ARTEMIS-1374)\] \- AMQP: Improve transfer tag generation and add tag pooling
*   \[[ARTEMIS-1377](https://issues.apache.org/jira/browse/ARTEMIS-1377)\] \- AMQP: Better handle message disposition events
*   \[[ARTEMIS-1381](https://issues.apache.org/jira/browse/ARTEMIS-1381)\] \- add a JMX operation removeAllMessages() to the queue
*   \[[ARTEMIS-1384](https://issues.apache.org/jira/browse/ARTEMIS-1384)\] \- add a CLI command to display basic queue stats

New Feature
-----------

*   \[[ARTEMIS-1270](https://issues.apache.org/jira/browse/ARTEMIS-1270)\] \- Provide a Management Console for Artemis
*   \[[ARTEMIS-1322](https://issues.apache.org/jira/browse/ARTEMIS-1322)\] \- Add a ServerLocator option to ignore topology for load-balancing
*   \[[ARTEMIS-1324](https://issues.apache.org/jira/browse/ARTEMIS-1324)\] \- Critical Analysis and deadlock detection on broker
*   \[[ARTEMIS-1342](https://issues.apache.org/jira/browse/ARTEMIS-1342)\] \- Support Netty Native KQueue on MacOS
*   \[[ARTEMIS-1348](https://issues.apache.org/jira/browse/ARTEMIS-1348)\] \- Support LVQ for AMQP
*   \[[ARTEMIS-1372](https://issues.apache.org/jira/browse/ARTEMIS-1372)\] \- Support kerberos authentication to LDAP for the LdapJAASLoginModule
*   \[[ARTEMIS-1373](https://issues.apache.org/jira/browse/ARTEMIS-1373)\] \- Allow chaining of Kerberos and LDAP JAAS Login Modules for authentication and authorisation

Task
----

*   \[[ARTEMIS-1316](https://issues.apache.org/jira/browse/ARTEMIS-1316)\] \- Document Scheduled message support over AMQP
*   \[[ARTEMIS-1325](https://issues.apache.org/jira/browse/ARTEMIS-1325)\] \- Update Proton 0.20 and qpid-jms 0.24
*   \[[ARTEMIS-1350](https://issues.apache.org/jira/browse/ARTEMIS-1350)\] \- Update management console to expose client side objects
*   \[[ARTEMIS-1358](https://issues.apache.org/jira/browse/ARTEMIS-1358)\] \- Eliminate code duplication in MQTTProtocolManager
*   \[[ARTEMIS-1360](https://issues.apache.org/jira/browse/ARTEMIS-1360)\] \- Documenting runtime reloadable configuration
*   \[[ARTEMIS-1371](https://issues.apache.org/jira/browse/ARTEMIS-1371)\] \- Update JGroups stack files
*   \[[ARTEMIS-1380](https://issues.apache.org/jira/browse/ARTEMIS-1380)\] \- Simplify documentation to refer to URL syntax rather than API