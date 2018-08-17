       /\* <!\[CDATA\[ */ .download { font-size: 80%; } table.download { width: 100%;} table.download tr td { border: 1px solid #ccc; padding: .5em; } /* \]\]> */  ActiveMQ Artemis Release Notes 2.1.0

*   [ActiveMQ Artemis](index.html)
*   [Documentation](docs.md)
*   [Download](OverviewOverview/Overview/download.md)

![ActiveMQ logo](/images/activemq-logo.png)

ActiveMQ Artemis
================

Release Notes - Apache ActiveMQ Artemis 2.1.0
---------------------------------------------

A complete list of JIRAs for the 2.1.0 release can be found [here.](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12315920&version=12339963)

Release Notes - ActiveMQ Artemis - Version 2.1.0

Bug
---

*   \[[ARTEMIS-56](https://issues.apache.org/jira/browse/ARTEMIS-56)\] \- the message-id of AMQP messages gets cleared within the broker
*   \[[ARTEMIS-57](https://issues.apache.org/jira/browse/ARTEMIS-57)\] \- the 'to' field of AMQP messages gets cleared within the broker
*   \[[ARTEMIS-59](https://issues.apache.org/jira/browse/ARTEMIS-59)\] \- AMQP messages published transactionally should be accepted using a TransactionalState
*   \[[ARTEMIS-60](https://issues.apache.org/jira/browse/ARTEMIS-60)\] \- Transactionally consumed AMQP messages are settled without any disposition state.
*   \[[ARTEMIS-267](https://issues.apache.org/jira/browse/ARTEMIS-267)\] \- AMQP messages without a Header section get persisted despite being non-durable
*   \[[ARTEMIS-457](https://issues.apache.org/jira/browse/ARTEMIS-457)\] \- Scale down with live-only ha policy failing
*   \[[ARTEMIS-547](https://issues.apache.org/jira/browse/ARTEMIS-547)\] \- Authorize AMQP sender/receive on link attach
*   \[[ARTEMIS-688](https://issues.apache.org/jira/browse/ARTEMIS-688)\] \- java.util.ConcurrentModificationException when sending message to JMS client
*   \[[ARTEMIS-712](https://issues.apache.org/jira/browse/ARTEMIS-712)\] \- Artemis does not support local transactions properly over AMQP
*   \[[ARTEMIS-775](https://issues.apache.org/jira/browse/ARTEMIS-775)\] \- AMQP: Message seems to be delivered twice when receiver close with pending messages
*   \[[ARTEMIS-826](https://issues.apache.org/jira/browse/ARTEMIS-826)\] \- MQTT with a long password field causes NPE exception
*   \[[ARTEMIS-834](https://issues.apache.org/jira/browse/ARTEMIS-834)\] \- Management over AMQP throws exception
*   \[[ARTEMIS-861](https://issues.apache.org/jira/browse/ARTEMIS-861)\] \- Artemis 1.5 compilation fails with IBM JDK
*   \[[ARTEMIS-864](https://issues.apache.org/jira/browse/ARTEMIS-864)\] \- Sending to a destroyed temp queue didn't get exception
*   \[[ARTEMIS-874](https://issues.apache.org/jira/browse/ARTEMIS-874)\] \- ThreadGroup memory leak
*   \[[ARTEMIS-908](https://issues.apache.org/jira/browse/ARTEMIS-908)\] \- AMQP flow control misses unblock during heavy load
*   \[[ARTEMIS-925](https://issues.apache.org/jira/browse/ARTEMIS-925)\] \- broker logs connection failure warning when client closes AMQP connection
*   \[[ARTEMIS-956](https://issues.apache.org/jira/browse/ARTEMIS-956)\] \- exception when messages are settled separately
*   \[[ARTEMIS-1012](https://issues.apache.org/jira/browse/ARTEMIS-1012)\] \- AMQP TX is redelivering message that are still aquired
*   \[[ARTEMIS-1013](https://issues.apache.org/jira/browse/ARTEMIS-1013)\] \- AMQP Release does not redelivery message if flow or new message does not arrive
*   \[[ARTEMIS-1024](https://issues.apache.org/jira/browse/ARTEMIS-1024)\] \- Management operation causes ClassNotFoundException
*   \[[ARTEMIS-1031](https://issues.apache.org/jira/browse/ARTEMIS-1031)\] \- Prefixes no longer working with Core Client
*   \[[ARTEMIS-1033](https://issues.apache.org/jira/browse/ARTEMIS-1033)\] \- NPE on PageTransactions during startup in case of previous TX Failures
*   \[[ARTEMIS-1034](https://issues.apache.org/jira/browse/ARTEMIS-1034)\] \- \[AMQP\] non-durable subscription queue not ended on link close
*   \[[ARTEMIS-1039](https://issues.apache.org/jira/browse/ARTEMIS-1039)\] \- AMQP: Broker does not replenish the credit for the receiver link of it transaction coordinator
*   \[[ARTEMIS-1041](https://issues.apache.org/jira/browse/ARTEMIS-1041)\] \- AMQP: Broker not respecting absolute expiry time
*   \[[ARTEMIS-1043](https://issues.apache.org/jira/browse/ARTEMIS-1043)\] \- NettyConnector not working with IPv6 address
*   \[[ARTEMIS-1044](https://issues.apache.org/jira/browse/ARTEMIS-1044)\] \- Stackoverflow on AMQP sends
*   \[[ARTEMIS-1046](https://issues.apache.org/jira/browse/ARTEMIS-1046)\] \- Transaction issues over AMQP
*   \[[ARTEMIS-1048](https://issues.apache.org/jira/browse/ARTEMIS-1048)\] \- Filter is not working with AMQP Unsigned Types
*   \[[ARTEMIS-1051](https://issues.apache.org/jira/browse/ARTEMIS-1051)\] \- Server Session is not thread safe
*   \[[ARTEMIS-1053](https://issues.apache.org/jira/browse/ARTEMIS-1053)\] \- Use credentials when checking for active server
*   \[[ARTEMIS-1057](https://issues.apache.org/jira/browse/ARTEMIS-1057)\] \- Lower log level of AMQ214023
*   \[[ARTEMIS-1064](https://issues.apache.org/jira/browse/ARTEMIS-1064)\] \- Getting "deliveryModes" of an Address from a client via management causes AMQ119034
*   \[[ARTEMIS-1065](https://issues.apache.org/jira/browse/ARTEMIS-1065)\] \- Bring back in v2.0.x the API that allows clients to get the list of JMS Topics and Queue
*   \[[ARTEMIS-1067](https://issues.apache.org/jira/browse/ARTEMIS-1067)\] \- Wrong format string specifiers in exception messages
*   \[[ARTEMIS-1068](https://issues.apache.org/jira/browse/ARTEMIS-1068)\] \- Routing for JMS over AMQP is broken
*   \[[ARTEMIS-1069](https://issues.apache.org/jira/browse/ARTEMIS-1069)\] \- AMQP: Thread unsafe proton usage found
*   \[[ARTEMIS-1072](https://issues.apache.org/jira/browse/ARTEMIS-1072)\] \- ./artemis create --java-opts will have options on bin instead of etc
*   \[[ARTEMIS-1074](https://issues.apache.org/jira/browse/ARTEMIS-1074)\] \- Acceptors and Connectors that enable SSL don’t start up while using a password codec
*   \[[ARTEMIS-1076](https://issues.apache.org/jira/browse/ARTEMIS-1076)\] \- Broken links in User Manual
*   \[[ARTEMIS-1078](https://issues.apache.org/jira/browse/ARTEMIS-1078)\] \- Thread pool executor occasionally misses to create a new thread
*   \[[ARTEMIS-1079](https://issues.apache.org/jira/browse/ARTEMIS-1079)\] \- CLI option for paging/blocking
*   \[[ARTEMIS-1082](https://issues.apache.org/jira/browse/ARTEMIS-1082)\] \- OpenWire protocol race condition on create queue
*   \[[ARTEMIS-1083](https://issues.apache.org/jira/browse/ARTEMIS-1083)\] \- WARNS are printed on start when no native persister is found for certain protocols
*   \[[ARTEMIS-1085](https://issues.apache.org/jira/browse/ARTEMIS-1085)\] \- JDBC store does handle store lineup properly
*   \[[ARTEMIS-1086](https://issues.apache.org/jira/browse/ARTEMIS-1086)\] \- Incorrect addition of SimpleString object to ApplicationProperties
*   \[[ARTEMIS-1089](https://issues.apache.org/jira/browse/ARTEMIS-1089)\] \- Backup sync-up is slow when paging
*   \[[ARTEMIS-1090](https://issues.apache.org/jira/browse/ARTEMIS-1090)\] \- Message not expired if absolute expiry time is 0 and ttl is set
*   \[[ARTEMIS-1092](https://issues.apache.org/jira/browse/ARTEMIS-1092)\] \- Validated user + AMQP throwing exception
*   \[[ARTEMIS-1093](https://issues.apache.org/jira/browse/ARTEMIS-1093)\] \- Full qualified queue name support
*   \[[ARTEMIS-1094](https://issues.apache.org/jira/browse/ARTEMIS-1094)\] \- Replica can't connect to live via group-name when group size > 1
*   \[[ARTEMIS-1097](https://issues.apache.org/jira/browse/ARTEMIS-1097)\] \- Message priority ordering not being respected
*   \[[ARTEMIS-1100](https://issues.apache.org/jira/browse/ARTEMIS-1100)\] \- AMQPMessage doesn't store header
*   \[[ARTEMIS-1101](https://issues.apache.org/jira/browse/ARTEMIS-1101)\] \- Get of UserID and Timestamp incorrect in AMQPMessage
*   \[[ARTEMIS-1105](https://issues.apache.org/jira/browse/ARTEMIS-1105)\] \- Null pointer when replicating paged messages
*   \[[ARTEMIS-1107](https://issues.apache.org/jira/browse/ARTEMIS-1107)\] \- fix and Test AddressControl.sendMessage()
*   \[[ARTEMIS-1108](https://issues.apache.org/jira/browse/ARTEMIS-1108)\] \- Shared-store with AIO fails to lock lockfile on NFS shares
*   \[[ARTEMIS-1111](https://issues.apache.org/jira/browse/ARTEMIS-1111)\] \- Broker thread hangs if an AMQP consumer is closed during delivery
*   \[[ARTEMIS-1113](https://issues.apache.org/jira/browse/ARTEMIS-1113)\] \- Stomp doesn't deal with management address appropriately
*   \[[ARTEMIS-1114](https://issues.apache.org/jira/browse/ARTEMIS-1114)\] \- Journal Compactor possibly losing records
*   \[[ARTEMIS-1121](https://issues.apache.org/jira/browse/ARTEMIS-1121)\] \- Expiry scanner under load might break queue
*   \[[ARTEMIS-1122](https://issues.apache.org/jira/browse/ARTEMIS-1122)\] \- ActiveMQJAASSecurityManager class loading issue
*   \[[ARTEMIS-1123](https://issues.apache.org/jira/browse/ARTEMIS-1123)\] \- Cleanup and add new AMQP protocol handling tests
*   \[[ARTEMIS-1128](https://issues.apache.org/jira/browse/ARTEMIS-1128)\] \- QueueControlImpl.sendMessage() fixes
*   \[[ARTEMIS-1130](https://issues.apache.org/jira/browse/ARTEMIS-1130)\] \- Log disallowed SSL protocols just once
*   \[[ARTEMIS-1132](https://issues.apache.org/jira/browse/ARTEMIS-1132)\] \- Creating an AMQP resources when security is configured can hang or return wrong error type
*   \[[ARTEMIS-1134](https://issues.apache.org/jira/browse/ARTEMIS-1134)\] \- Internal errors in AMQP protocol handler can lead to stalled connection
*   \[[ARTEMIS-1135](https://issues.apache.org/jira/browse/ARTEMIS-1135)\] \- Overflows during integer addition or multiplication
*   \[[ARTEMIS-1137](https://issues.apache.org/jira/browse/ARTEMIS-1137)\] \- Address configured without routing type causes exception on broker restart
*   \[[ARTEMIS-1138](https://issues.apache.org/jira/browse/ARTEMIS-1138)\] \- OSGI Netty Epoll Fix
*   \[[ARTEMIS-1140](https://issues.apache.org/jira/browse/ARTEMIS-1140)\] \- Avoid Queue lock on queueQuery
*   \[[ARTEMIS-1150](https://issues.apache.org/jira/browse/ARTEMIS-1150)\] \- Logging config won't work when server has spaces

Improvement
-----------

*   \[[ARTEMIS-590](https://issues.apache.org/jira/browse/ARTEMIS-590)\] \- Allow NettyConnector to use the default SSL Context
*   \[[ARTEMIS-904](https://issues.apache.org/jira/browse/ARTEMIS-904)\] \- Remove cyclic dependencies from artemis-cli
*   \[[ARTEMIS-1037](https://issues.apache.org/jira/browse/ARTEMIS-1037)\] \- Doc for the MAPPED journalType
*   \[[ARTEMIS-1038](https://issues.apache.org/jira/browse/ARTEMIS-1038)\] \- Make use of Proton/Delivery.available and upgrade proton
*   \[[ARTEMIS-1042](https://issues.apache.org/jira/browse/ARTEMIS-1042)\] \- Support AMQP failover lists
*   \[[ARTEMIS-1045](https://issues.apache.org/jira/browse/ARTEMIS-1045)\] \- Performance improvement on AMQP
*   \[[ARTEMIS-1047](https://issues.apache.org/jira/browse/ARTEMIS-1047)\] \- Improve GC Settings
*   \[[ARTEMIS-1052](https://issues.apache.org/jira/browse/ARTEMIS-1052)\] \- Dealing with Expires and DLQ properly over AMQP
*   \[[ARTEMIS-1054](https://issues.apache.org/jira/browse/ARTEMIS-1054)\] \- JVM Monitoring pauses logs
*   \[[ARTEMIS-1056](https://issues.apache.org/jira/browse/ARTEMIS-1056)\] \- Performance improvements over AMQP
*   \[[ARTEMIS-1059](https://issues.apache.org/jira/browse/ARTEMIS-1059)\] \- DEBUG option on Paging counters
*   \[[ARTEMIS-1073](https://issues.apache.org/jira/browse/ARTEMIS-1073)\] \- Exposing AMQP Credits, and setting the default credits to 1000
*   \[[ARTEMIS-1075](https://issues.apache.org/jira/browse/ARTEMIS-1075)\] \- Add Routing Type to QueueControl management API
*   \[[ARTEMIS-1077](https://issues.apache.org/jira/browse/ARTEMIS-1077)\] \- Improving InVM and Buffer usage
*   \[[ARTEMIS-1084](https://issues.apache.org/jira/browse/ARTEMIS-1084)\] \- Oracle12C has table name size limit of 30 chars. When using paging and a table name of >10 chars. Artemis will work fine, until it's Page UUID size goes above 20 chars. Then start failing to page.
*   \[[ARTEMIS-1096](https://issues.apache.org/jira/browse/ARTEMIS-1096)\] \- Load tests exhaust memory if global-max-size is not set
*   \[[ARTEMIS-1102](https://issues.apache.org/jira/browse/ARTEMIS-1102)\] \- Implement cert-based auth for OpenWire
*   \[[ARTEMIS-1110](https://issues.apache.org/jira/browse/ARTEMIS-1110)\] \- AMQP Transaction controller can reuse a single buffer for decoding commands
*   \[[ARTEMIS-1117](https://issues.apache.org/jira/browse/ARTEMIS-1117)\] \- Improve IO Resilience to failures
*   \[[ARTEMIS-1118](https://issues.apache.org/jira/browse/ARTEMIS-1118)\] \- AMQP is missing OperationContext callbacks
*   \[[ARTEMIS-1119](https://issues.apache.org/jira/browse/ARTEMIS-1119)\] \- Flow control on ProtonHandler
*   \[[ARTEMIS-1124](https://issues.apache.org/jira/browse/ARTEMIS-1124)\] \- JDBC Network Timeout configuration
*   \[[ARTEMIS-1127](https://issues.apache.org/jira/browse/ARTEMIS-1127)\] \- AMQP: Match client SenderSettleMode instead of always defaulting to MIXED
*   \[[ARTEMIS-1136](https://issues.apache.org/jira/browse/ARTEMIS-1136)\] \- Improve UnpooledUnsafeDirectByteBufWrapper
*   \[[ARTEMIS-1141](https://issues.apache.org/jira/browse/ARTEMIS-1141)\] \- Validate Karaf features using the karaf plugin
*   \[[ARTEMIS-1144](https://issues.apache.org/jira/browse/ARTEMIS-1144)\] \- Include SL4J->JUL logger bridge

New Feature
-----------

*   \[[ARTEMIS-639](https://issues.apache.org/jira/browse/ARTEMIS-639)\] \- Make credit refresh size and refresh threshold configurable on AMQP protocol
*   \[[ARTEMIS-898](https://issues.apache.org/jira/browse/ARTEMIS-898)\] \- Artemis Plugin Support
*   \[[ARTEMIS-994](https://issues.apache.org/jira/browse/ARTEMIS-994)\] \- Support Netty Native Epoll on Linux
*   \[[ARTEMIS-1080](https://issues.apache.org/jira/browse/ARTEMIS-1080)\] \- Implement AMQP::reject
*   \[[ARTEMIS-1081](https://issues.apache.org/jira/browse/ARTEMIS-1081)\] \- Implement AMQP:undeliverableHere
*   \[[ARTEMIS-1087](https://issues.apache.org/jira/browse/ARTEMIS-1087)\] \- Allow Buffer Pooling to be configurable for InVM Transport
*   \[[ARTEMIS-1116](https://issues.apache.org/jira/browse/ARTEMIS-1116)\] \- map ldap roles to local artemis roles

Task
----

*   \[[ARTEMIS-794](https://issues.apache.org/jira/browse/ARTEMIS-794)\] \- AMQP: Modified and Rjected Outcomes are not being handled correctly
*   \[[ARTEMIS-795](https://issues.apache.org/jira/browse/ARTEMIS-795)\] \- AMQP: Dynamic Node handling does not respect lifetime policies

Test
----

*   \[[ARTEMIS-1139](https://issues.apache.org/jira/browse/ARTEMIS-1139)\] \- Add some tests for AMQP over websockets