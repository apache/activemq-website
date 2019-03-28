--- 
layout: default_md
title: ActiveMQ Artemis 2.2.0 Release Notes
title-class: page-title-artemis
type: artemis
---

A complete list of JIRAs for the 2.2.0 release can be found [here](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12315920&version=12340541).

#### Bug

* \[[ARTEMIS-565](https://issues.apache.org/jira/browse/ARTEMIS-565)\] - Artemis use no free json.org
* \[[ARTEMIS-1154](https://issues.apache.org/jira/browse/ARTEMIS-1154)\] - Backup activates if isolated on the network with no network health check
* \[[ARTEMIS-1155](https://issues.apache.org/jira/browse/ARTEMIS-1155)\] - JDBC Sequential File would leak after open
* \[[ARTEMIS-1164](https://issues.apache.org/jira/browse/ARTEMIS-1164)\] - NameNotFoundException when using java.naming.provider.url to set url via jndi
* \[[ARTEMIS-1172](https://issues.apache.org/jira/browse/ARTEMIS-1172)\] - ActiveMQServerPlugin beforeDeliver and afterDeliver should pass in the ServerConsumer
* \[[ARTEMIS-1173](https://issues.apache.org/jira/browse/ARTEMIS-1173)\] - AMQP assumes divert route to be non-null
* \[[ARTEMIS-1175](https://issues.apache.org/jira/browse/ARTEMIS-1175)\] - Memory Leak Mqtt
* \[[ARTEMIS-1178](https://issues.apache.org/jira/browse/ARTEMIS-1178)\] - Backwards compatibility issues
* \[[ARTEMIS-1180](https://issues.apache.org/jira/browse/ARTEMIS-1180)\] - Artemis is logging warnings during server shut down
* \[[ARTEMIS-1186](https://issues.apache.org/jira/browse/ARTEMIS-1186)\] - Consumer.receive hangs if http acceptor with non-zero batch-delay is configured
* \[[ARTEMIS-1187](https://issues.apache.org/jira/browse/ARTEMIS-1187)\] - Incompatible version when recreating a session with older server
* \[[ARTEMIS-1189](https://issues.apache.org/jira/browse/ARTEMIS-1189)\] - Fix checkstyle violations post checkstyle upgrade
* \[[ARTEMIS-1190](https://issues.apache.org/jira/browse/ARTEMIS-1190)\] - Long/int type mismatch in JDBCSequentialFile.setWritePosition
* \[[ARTEMIS-1193](https://issues.apache.org/jira/browse/ARTEMIS-1193)\] - \[extra-tests\] StartStopDeadlockTest\#testDeadlock gets stuck
* \[[ARTEMIS-1195](https://issues.apache.org/jira/browse/ARTEMIS-1195)\] - Artemis.create filters should be independent
* \[[ARTEMIS-1196](https://issues.apache.org/jira/browse/ARTEMIS-1196)\] - Unusable JSON api on Karaf
* \[[ARTEMIS-1197](https://issues.apache.org/jira/browse/ARTEMIS-1197)\] - Missing browse permission on Karaf
* \[[ARTEMIS-1204](https://issues.apache.org/jira/browse/ARTEMIS-1204)\] - JDBCSequentialFile getSize does not work if the file is not open
* \[[ARTEMIS-1205](https://issues.apache.org/jira/browse/ARTEMIS-1205)\] - AMQP Shared Durable Subscriber incorrect behaviour.
* \[[ARTEMIS-1206](https://issues.apache.org/jira/browse/ARTEMIS-1206)\] - \[Core JMS Client\] Violates JMS Specification - allows two active connections with same clientid
* \[[ARTEMIS-1207](https://issues.apache.org/jira/browse/ARTEMIS-1207)\] - \[Core JMS Client\] Align order of when setClientId can be called with AcitveMQ5 and QPID
* \[[ARTEMIS-1208](https://issues.apache.org/jira/browse/ARTEMIS-1208)\] - Do not use reconnect-atempts=-1 in tests
* \[[ARTEMIS-1209](https://issues.apache.org/jira/browse/ARTEMIS-1209)\] - JMS OpenWire client cannot read notifications from activemq.notifications topic
* \[[ARTEMIS-1212](https://issues.apache.org/jira/browse/ARTEMIS-1212)\] - \[extra-tests\] HornetQProtocolManagerTest fails on InvalidDestinationException
* \[[ARTEMIS-1215](https://issues.apache.org/jira/browse/ARTEMIS-1215)\] - Broker startup issue with MQTT
* \[[ARTEMIS-1220](https://issues.apache.org/jira/browse/ARTEMIS-1220)\] - Diverted LargeMessage file corrupted during replication
* \[[ARTEMIS-1221](https://issues.apache.org/jira/browse/ARTEMIS-1221)\] - Duplicated ID causes LargeMessage lost at backup
* \[[ARTEMIS-1223](https://issues.apache.org/jira/browse/ARTEMIS-1223)\] - OutOfDirectMemoryError raised from TimedBuffer
* \[[ARTEMIS-1224](https://issues.apache.org/jira/browse/ARTEMIS-1224)\] - Journal File Size needs to be multiple of alignment size
* \[[ARTEMIS-1225](https://issues.apache.org/jira/browse/ARTEMIS-1225)\] - Log messages without prefixed id code in artemis-ra
* \[[ARTEMIS-1226](https://issues.apache.org/jira/browse/ARTEMIS-1226)\] - Log messages without prefixed id code in artemis-jms-client
* \[[ARTEMIS-1228](https://issues.apache.org/jira/browse/ARTEMIS-1228)\] - Log messages without prefixed id code in artemis-rest
* \[[ARTEMIS-1232](https://issues.apache.org/jira/browse/ARTEMIS-1232)\] - deserialization black/white list are not used by regular JMS connection factories
* \[[ARTEMIS-1233](https://issues.apache.org/jira/browse/ARTEMIS-1233)\] - Wrong Log level set on backupDeletingData log message.
* \[[ARTEMIS-1240](https://issues.apache.org/jira/browse/ARTEMIS-1240)\] - Disconnect at client side on decoding error
* \[[ARTEMIS-1242](https://issues.apache.org/jira/browse/ARTEMIS-1242)\] - OpenWire Transactions never removed
* \[[ARTEMIS-1243](https://issues.apache.org/jira/browse/ARTEMIS-1243)\] - Release ReferenceCounted messages
* \[[ARTEMIS-1244](https://issues.apache.org/jira/browse/ARTEMIS-1244)\] - \[mqtt\] Retain flag of received message is lost (caught by outgoing interceptor)
* \[[ARTEMIS-1246](https://issues.apache.org/jira/browse/ARTEMIS-1246)\] - AMQ119019: Queue already exists
* \[[ARTEMIS-1247](https://issues.apache.org/jira/browse/ARTEMIS-1247)\] - Allow tracing on ReplicatedJournal
* \[[ARTEMIS-1250](https://issues.apache.org/jira/browse/ARTEMIS-1250)\] - ClusteredMessageCounterTest.testNonDurableMessageAddedWithPaging fails
* \[[ARTEMIS-1251](https://issues.apache.org/jira/browse/ARTEMIS-1251)\] - Log messages without prefixed id code in artemis-jms-server
* \[[ARTEMIS-1253](https://issues.apache.org/jira/browse/ARTEMIS-1253)\] - Regression: NetworkHealthCheck is not restarting the server
* \[[ARTEMIS-1254](https://issues.apache.org/jira/browse/ARTEMIS-1254)\] - JDBCStorageManager does not allocate LargeMessage handler new executor
* \[[ARTEMIS-1256](https://issues.apache.org/jira/browse/ARTEMIS-1256)\] - PagingOMETest.testPageCleanup fails
* \[[ARTEMIS-1257](https://issues.apache.org/jira/browse/ARTEMIS-1257)\] - ActiveMQActivationSpec.java should use boxed types for attributes values according to the JCA specification
* \[[ARTEMIS-1259](https://issues.apache.org/jira/browse/ARTEMIS-1259)\] - Log messages without prefixed id code in artemis-server-osgi
* \[[ARTEMIS-1261](https://issues.apache.org/jira/browse/ARTEMIS-1261)\] - Adjust default confirmation-window-size for bridges
* \[[ARTEMIS-1268](https://issues.apache.org/jira/browse/ARTEMIS-1268)\] - stomp client can send large message but not receive
* \[[ARTEMIS-1269](https://issues.apache.org/jira/browse/ARTEMIS-1269)\] - Replication Initial Synchronization won't finish sometimes
* \[[ARTEMIS-1272](https://issues.apache.org/jira/browse/ARTEMIS-1272)\] - Artemis incorrectly handle MQTT acknowledgement
* \[[ARTEMIS-1274](https://issues.apache.org/jira/browse/ARTEMIS-1274)\] - MultipleProducersTest.wrongQueue fails
* \[[ARTEMIS-1277](https://issues.apache.org/jira/browse/ARTEMIS-1277)\] - purgeOnNoConsumer is not working properly
* \[[ARTEMIS-1280](https://issues.apache.org/jira/browse/ARTEMIS-1280)\] - Redistribution Future does not get deleted if it gets canceled before it's run
* \[[ARTEMIS-1282](https://issues.apache.org/jira/browse/ARTEMIS-1282)\] - createQueue(String address, RoutingType routingType, String queueName) is creating a temporaryQueue
* \[[ARTEMIS-1283](https://issues.apache.org/jira/browse/ARTEMIS-1283)\] - AMQP Drain of a link encounters unexpected response delay
* \[[ARTEMIS-1284](https://issues.apache.org/jira/browse/ARTEMIS-1284)\] - Deleting queue is not cleaning up Paging
* \[[ARTEMIS-1288](https://issues.apache.org/jira/browse/ARTEMIS-1288)\] - Crash on compacting could leave to server not being able to restart
* \[[ARTEMIS-1289](https://issues.apache.org/jira/browse/ARTEMIS-1289)\] - Unable to configure queues containing "/" in broker.xml
* \[[ARTEMIS-1290](https://issues.apache.org/jira/browse/ARTEMIS-1290)\] - Prefixes are not prepended on QueueQuery Results
* \[[ARTEMIS-1292](https://issues.apache.org/jira/browse/ARTEMIS-1292)\] - Removing paging folder can lead to message loss
* \[[ARTEMIS-1293](https://issues.apache.org/jira/browse/ARTEMIS-1293)\] - Log messages without prefixed id code in artemis-commons
* \[[ARTEMIS-1294](https://issues.apache.org/jira/browse/ARTEMIS-1294)\] - TimedBuffer is not timing, reverting timeout policy
* \[[ARTEMIS-1296](https://issues.apache.org/jira/browse/ARTEMIS-1296)\] - Quorum vote doesn't check for live
* \[[ARTEMIS-1300](https://issues.apache.org/jira/browse/ARTEMIS-1300)\] - Sending Core & receiving AMQP can lead to deadlock when direct delivering
* \[[ARTEMIS-1301](https://issues.apache.org/jira/browse/ARTEMIS-1301)\] - Network failures recognition on backpressure while streaming large messages
* \[[ARTEMIS-1304](https://issues.apache.org/jira/browse/ARTEMIS-1304)\] - Communication Timeout on Commit & Failover can lead to message loss
* \[[ARTEMIS-1311](https://issues.apache.org/jira/browse/ARTEMIS-1311)\] - Log messages without prefixed id code in artemis-core-client

#### Improvement

* \[[ARTEMIS-1129](https://issues.apache.org/jira/browse/ARTEMIS-1129)\] - Client Dependencies
* \[[ARTEMIS-1156](https://issues.apache.org/jira/browse/ARTEMIS-1156)\] - Long Autoboxing occurring on Hot Path
* \[[ARTEMIS-1158](https://issues.apache.org/jira/browse/ARTEMIS-1158)\] - Expose Netty.channelID properly
* \[[ARTEMIS-1159](https://issues.apache.org/jira/browse/ARTEMIS-1159)\] - Fixes and Improvement to the AMQP test client
* \[[ARTEMIS-1162](https://issues.apache.org/jira/browse/ARTEMIS-1162)\] - Make new Adapting TimedBuffer and old Fixed TimedBuffer configurable
* \[[ARTEMIS-1163](https://issues.apache.org/jira/browse/ARTEMIS-1163)\] - Refactory connection factory client creation
* \[[ARTEMIS-1169](https://issues.apache.org/jira/browse/ARTEMIS-1169)\] - Implement Interceptors for the AMQP protocol
* \[[ARTEMIS-1174](https://issues.apache.org/jira/browse/ARTEMIS-1174)\] - Update Hacking Guide Documentation: IDE Integration
* \[[ARTEMIS-1176](https://issues.apache.org/jira/browse/ARTEMIS-1176)\] - Use text messages for management reply messages
* \[[ARTEMIS-1179](https://issues.apache.org/jira/browse/ARTEMIS-1179)\] - Add Optional Client JMS Destination Cache
* \[[ARTEMIS-1188](https://issues.apache.org/jira/browse/ARTEMIS-1188)\] - Update sevntu to 1.24.0 available in maven central
* \[[ARTEMIS-1211](https://issues.apache.org/jira/browse/ARTEMIS-1211)\] - Allow local transactions when no jta in Resource Adapter
* \[[ARTEMIS-1214](https://issues.apache.org/jira/browse/ARTEMIS-1214)\] - Improve performance of read on Paging
* \[[ARTEMIS-1248](https://issues.apache.org/jira/browse/ARTEMIS-1248)\] - Reduce garbage while Paging
* \[[ARTEMIS-1252](https://issues.apache.org/jira/browse/ARTEMIS-1252)\] - Add service loading of password codec to obtain its implementation from the application’s root context, rather than using a class loader
* \[[ARTEMIS-1258](https://issues.apache.org/jira/browse/ARTEMIS-1258)\] - ActiveMQServerPlugin beforeSend and afterSend should pass in ServerSession
* \[[ARTEMIS-1302](https://issues.apache.org/jira/browse/ARTEMIS-1302)\] - Make quorum voting more transparent

#### New Feature

* \[[ARTEMIS-821](https://issues.apache.org/jira/browse/ARTEMIS-821)\] - Support scheduled messages with the STOMP protocol
* \[[ARTEMIS-1182](https://issues.apache.org/jira/browse/ARTEMIS-1182)\] - Add / Port in support for JNDIReferenceFactory and JNDIStorable
* \[[ARTEMIS-1235](https://issues.apache.org/jira/browse/ARTEMIS-1235)\] - Support the ability to enable queue and address deletion when broker.xml changes
* \[[ARTEMIS-1264](https://issues.apache.org/jira/browse/ARTEMIS-1264)\] - Client authentication via Kerberos TLS Cipher Suites (RFC 2712).

#### Task

* \[[ARTEMIS-1153](https://issues.apache.org/jira/browse/ARTEMIS-1153)\] - Create an .NET client example for AMQP and Durable Subscriptions
* \[[ARTEMIS-1168](https://issues.apache.org/jira/browse/ARTEMIS-1168)\] - Update Qpid JMS to 0.23.0 and Proton-J to 0.19.0
* \[[ARTEMIS-1266](https://issues.apache.org/jira/browse/ARTEMIS-1266)\] - Mapped Journal refactoring

#### Test

* \[[ARTEMIS-1160](https://issues.apache.org/jira/browse/ARTEMIS-1160)\] - AMQP Test client doesn't configure its netty WS handler with the AMQP frame size
* \[[ARTEMIS-1166](https://issues.apache.org/jira/browse/ARTEMIS-1166)\] - Handle WebSocket continuation frames on AMQP test client
* \[[ARTEMIS-1167](https://issues.apache.org/jira/browse/ARTEMIS-1167)\] - Add test to validate broker handling of AMQP idle timeout handling
* \[[ARTEMIS-1276](https://issues.apache.org/jira/browse/ARTEMIS-1276)\] - \[openwire-tests\] Enable more OpenWire tests (from ActiveMQ 5)
* \[[ARTEMIS-1287](https://issues.apache.org/jira/browse/ARTEMIS-1287)\] - Test Suite cleanups
