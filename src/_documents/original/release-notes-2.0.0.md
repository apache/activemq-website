       /\* <!\[CDATA\[ */ .download { font-size: 80%; } table.download { width: 100%;} table.download tr td { border: 1px solid #ccc; padding: .5em; } /* \]\]> */  ActiveMQ Artemis

*   [ActiveMQ Artemis](index.html)
*   [Documentation](docs.md)
*   [Download](OverviewOverview/Overview/download.md)

![ActiveMQ logo](/images/activemq-logo.png)

ActiveMQ Artemis
================

Release Notes - Apache ActiveMQ Artemis 2.0.0
---------------------------------------------

A complete list of JIRAs for the 2.0.0 release can be found at the [Apache ActiveMQ Artemis project JIRA](https://issues.apache.org/jira/secure/ReleaseNote.jspa?version=12338813&styleName=Html&projectId=12315920&Create=Create&atl_token=A5KQ-2QAV-T4JA-FDED%7C3a4edecc0ebb5f9059c9c484a7c71713d9250294%7Clout")

Release Notes - ActiveMQ Artemis - Version 2.0.0

Sub-task
--------

*   \[[ARTEMIS-781](https://issues.apache.org/jira/browse/ARTEMIS-781)\] \- Create Address Journal Record Type
*   \[[ARTEMIS-782](https://issues.apache.org/jira/browse/ARTEMIS-782)\] \- Add new configuration schema that includes first class Address elements
*   \[[ARTEMIS-783](https://issues.apache.org/jira/browse/ARTEMIS-783)\] \- Implement "anycast" routing in Artemis PostOffice
*   \[[ARTEMIS-784](https://issues.apache.org/jira/browse/ARTEMIS-784)\] \- Add new management methods to include new first class addresses
*   \[[ARTEMIS-785](https://issues.apache.org/jira/browse/ARTEMIS-785)\] \- Update Examples to use new configuration
*   \[[ARTEMIS-787](https://issues.apache.org/jira/browse/ARTEMIS-787)\] \- Update core client wireformat to support new addressing scheme
*   \[[ARTEMIS-788](https://issues.apache.org/jira/browse/ARTEMIS-788)\] \- Update MQTT& STOMP to check that addresses are multicast
*   \[[ARTEMIS-789](https://issues.apache.org/jira/browse/ARTEMIS-789)\] \- Update Tests
*   \[[ARTEMIS-790](https://issues.apache.org/jira/browse/ARTEMIS-790)\] \- Create a Configv1 to Configv2 transformation tool
*   \[[ARTEMIS-791](https://issues.apache.org/jira/browse/ARTEMIS-791)\] \- Define XSD for new configuration
*   \[[ARTEMIS-813](https://issues.apache.org/jira/browse/ARTEMIS-813)\] \- Store Address Data and AutoCreate Address on Queue Load/Create
*   \[[ARTEMIS-815](https://issues.apache.org/jira/browse/ARTEMIS-815)\] \- Make address path separator configurable
*   \[[ARTEMIS-876](https://issues.apache.org/jira/browse/ARTEMIS-876)\] \- Remove JMS stuff from code-base
*   \[[ARTEMIS-877](https://issues.apache.org/jira/browse/ARTEMIS-877)\] \- Update various protocols to deal with new addressing scheme
*   \[[ARTEMIS-878](https://issues.apache.org/jira/browse/ARTEMIS-878)\] \- Update CLI
*   \[[ARTEMIS-879](https://issues.apache.org/jira/browse/ARTEMIS-879)\] \- Implement new security roles for addresses
*   \[[ARTEMIS-880](https://issues.apache.org/jira/browse/ARTEMIS-880)\] \- Support address prefixing
*   \[[ARTEMIS-881](https://issues.apache.org/jira/browse/ARTEMIS-881)\] \- Add new address-settings to deal with new config options

Bug
---

*   \[[ARTEMIS-164](https://issues.apache.org/jira/browse/ARTEMIS-164)\] \- Add examples from qpid JMS
*   \[[ARTEMIS-367](https://issues.apache.org/jira/browse/ARTEMIS-367)\] \- MQTT Tests log error checking DLQ
*   \[[ARTEMIS-474](https://issues.apache.org/jira/browse/ARTEMIS-474)\] \- replication fails with colocated topologies
*   \[[ARTEMIS-566](https://issues.apache.org/jira/browse/ARTEMIS-566)\] \- Cannot remove JMS queue that has been removed from Core side
*   \[[ARTEMIS-773](https://issues.apache.org/jira/browse/ARTEMIS-773)\] \- AMQP: Transactional Acquistion and Retirement does not seem to work correctly.
*   \[[ARTEMIS-882](https://issues.apache.org/jira/browse/ARTEMIS-882)\] \- Some objects don't support lists on the connection factory definition
*   \[[ARTEMIS-883](https://issues.apache.org/jira/browse/ARTEMIS-883)\] \- Fix OpenWire policy=Block
*   \[[ARTEMIS-885](https://issues.apache.org/jira/browse/ARTEMIS-885)\] \- Fix OpenWire wildcard conversion issue
*   \[[ARTEMIS-886](https://issues.apache.org/jira/browse/ARTEMIS-886)\] \- Tiny error in documentation
*   \[[ARTEMIS-887](https://issues.apache.org/jira/browse/ARTEMIS-887)\] \- Fix some OpenWire test failures
*   \[[ARTEMIS-888](https://issues.apache.org/jira/browse/ARTEMIS-888)\] \- AMQP headers arent always set
*   \[[ARTEMIS-890](https://issues.apache.org/jira/browse/ARTEMIS-890)\] \- Dropped Messages, Paging and Block are ignored when broker is non persistent
*   \[[ARTEMIS-892](https://issues.apache.org/jira/browse/ARTEMIS-892)\] \- Error decoding AMQP frame sent by Artemis
*   \[[ARTEMIS-893](https://issues.apache.org/jira/browse/ARTEMIS-893)\] \- Fix FailoverTransactionTest.testWaitForMissingRedeliveries
*   \[[ARTEMIS-899](https://issues.apache.org/jira/browse/ARTEMIS-899)\] \- On user authentication a stack trace is logged to the error channel
*   \[[ARTEMIS-900](https://issues.apache.org/jira/browse/ARTEMIS-900)\] \- Fix compatibility with older Artemis and HornetQ versions after the address changes
*   \[[ARTEMIS-901](https://issues.apache.org/jira/browse/ARTEMIS-901)\] \- SASL PLAIN auth with AMQP doesn't take authzid into account
*   \[[ARTEMIS-902](https://issues.apache.org/jira/browse/ARTEMIS-902)\] \- OpenWire Compression Issue
*   \[[ARTEMIS-907](https://issues.apache.org/jira/browse/ARTEMIS-907)\] \- Fix NettySecurityClientTest
*   \[[ARTEMIS-909](https://issues.apache.org/jira/browse/ARTEMIS-909)\] \- the default welcome files aren't served correctly
*   \[[ARTEMIS-911](https://issues.apache.org/jira/browse/ARTEMIS-911)\] \- consumer ack count no increased with individual acknowledge
*   \[[ARTEMIS-912](https://issues.apache.org/jira/browse/ARTEMIS-912)\] \- 1.x to 2.0 configuration migration tool does not work
*   \[[ARTEMIS-913](https://issues.apache.org/jira/browse/ARTEMIS-913)\] \- Slow consumer detection not working when paging
*   \[[ARTEMIS-914](https://issues.apache.org/jira/browse/ARTEMIS-914)\] \- Max saved replicated journal size on Live node should not be -1
*   \[[ARTEMIS-915](https://issues.apache.org/jira/browse/ARTEMIS-915)\] \- WebComponent stopped when backup failback
*   \[[ARTEMIS-917](https://issues.apache.org/jira/browse/ARTEMIS-917)\] \- Retained messages from file system contain weird chars
*   \[[ARTEMIS-918](https://issues.apache.org/jira/browse/ARTEMIS-918)\] \- Autocreated address is always anycast when using qpid-jms client
*   \[[ARTEMIS-919](https://issues.apache.org/jira/browse/ARTEMIS-919)\] \- Issues creating jms queues in core config in broker.xml when hot reloading configuration
*   \[[ARTEMIS-921](https://issues.apache.org/jira/browse/ARTEMIS-921)\] \- Consumers killed as slow even if overall consuming rate is above threshold
*   \[[ARTEMIS-926](https://issues.apache.org/jira/browse/ARTEMIS-926)\] \- CME when Artemis server start
*   \[[ARTEMIS-927](https://issues.apache.org/jira/browse/ARTEMIS-927)\] \- ActiveMQ logs cluster password in plain text
*   \[[ARTEMIS-929](https://issues.apache.org/jira/browse/ARTEMIS-929)\] \- Artemis cli tools does not check non-existing options
*   \[[ARTEMIS-930](https://issues.apache.org/jira/browse/ARTEMIS-930)\] \- JDBC FileFactory Driver Prepared Statement does not always return ID
*   \[[ARTEMIS-931](https://issues.apache.org/jira/browse/ARTEMIS-931)\] \- Improve HTTP upgrade connection
*   \[[ARTEMIS-934](https://issues.apache.org/jira/browse/ARTEMIS-934)\] \- Stomp server keeps pinging client after client stops responding
*   \[[ARTEMIS-936](https://issues.apache.org/jira/browse/ARTEMIS-936)\] \- Allow AMQP transformers to be configured and default to native
*   \[[ARTEMIS-937](https://issues.apache.org/jira/browse/ARTEMIS-937)\] \- Use Proper disk alignment over libaio instead of 512 hard coded.
*   \[[ARTEMIS-939](https://issues.apache.org/jira/browse/ARTEMIS-939)\] \- User list not updated on the broker dynamically
*   \[[ARTEMIS-944](https://issues.apache.org/jira/browse/ARTEMIS-944)\] \- Broker can't convert AMQP python message to Openwire format
*   \[[ARTEMIS-945](https://issues.apache.org/jira/browse/ARTEMIS-945)\] \- The queue manager doesn't check for null when deleting queue
*   \[[ARTEMIS-946](https://issues.apache.org/jira/browse/ARTEMIS-946)\] \- CLONE - Consumers killed as slow even if overall consuming rate is above threshold
*   \[[ARTEMIS-949](https://issues.apache.org/jira/browse/ARTEMIS-949)\] \- Prevent Openwire from closing consumer twice
*   \[[ARTEMIS-950](https://issues.apache.org/jira/browse/ARTEMIS-950)\] \- Change log level from INFO to WARN for "Invalid "host" value "0.0.0.0" detected for..." when Artemis is bound to 0.0.0.0
*   \[[ARTEMIS-951](https://issues.apache.org/jira/browse/ARTEMIS-951)\] \- MQTT Messages Acks are not auto-committed
*   \[[ARTEMIS-952](https://issues.apache.org/jira/browse/ARTEMIS-952)\] \- MQTT Clean session should delete subscription queues
*   \[[ARTEMIS-953](https://issues.apache.org/jira/browse/ARTEMIS-953)\] \- Refactor JMX object names
*   \[[ARTEMIS-954](https://issues.apache.org/jira/browse/ARTEMIS-954)\] \- role does not default to amq as the documentation states.
*   \[[ARTEMIS-958](https://issues.apache.org/jira/browse/ARTEMIS-958)\] \- Improve web server tmp dir cleanup
*   \[[ARTEMIS-960](https://issues.apache.org/jira/browse/ARTEMIS-960)\] \- Send Will messages have extra string encoding
*   \[[ARTEMIS-961](https://issues.apache.org/jira/browse/ARTEMIS-961)\] \- MQTT Will messages are not encoded as UTF8
*   \[[ARTEMIS-962](https://issues.apache.org/jira/browse/ARTEMIS-962)\] \- improve the OpenMBean support for browsing
*   \[[ARTEMIS-963](https://issues.apache.org/jira/browse/ARTEMIS-963)\] \- ClassCastException in ActiveMQChannelHandler
*   \[[ARTEMIS-969](https://issues.apache.org/jira/browse/ARTEMIS-969)\] \- ReceiveMessage will expand unecessarily on core protocol
*   \[[ARTEMIS-970](https://issues.apache.org/jira/browse/ARTEMIS-970)\] \- javax.jms.Message.getJMSDestination() fails when message not sent with AMQP
*   \[[ARTEMIS-974](https://issues.apache.org/jira/browse/ARTEMIS-974)\] \- MQTT Will messages are not retained
*   \[[ARTEMIS-976](https://issues.apache.org/jira/browse/ARTEMIS-976)\] \- PostgresSequentialSequentialFileDriver SQLProvider NPE
*   \[[ARTEMIS-977](https://issues.apache.org/jira/browse/ARTEMIS-977)\] \- record id of address not set on journal reload
*   \[[ARTEMIS-978](https://issues.apache.org/jira/browse/ARTEMIS-978)\] \- Replicating live restarts as backup when both live and backup are killed in a cluster
*   \[[ARTEMIS-979](https://issues.apache.org/jira/browse/ARTEMIS-979)\] \- OpenWire "no-Local" consumer not working
*   \[[ARTEMIS-980](https://issues.apache.org/jira/browse/ARTEMIS-980)\] \- Openwire can't send message to temp destination
*   \[[ARTEMIS-981](https://issues.apache.org/jira/browse/ARTEMIS-981)\] \- OpenWire can't receive empty ObjectMessage
*   \[[ARTEMIS-982](https://issues.apache.org/jira/browse/ARTEMIS-982)\] \- Deadlock on AMQP Close versus Delivery on AMQP
*   \[[ARTEMIS-986](https://issues.apache.org/jira/browse/ARTEMIS-986)\] \- Integer overflow in MySQLSQLProvider.java
*   \[[ARTEMIS-988](https://issues.apache.org/jira/browse/ARTEMIS-988)\] \- Regression: web tmp dir not cleaned up
*   \[[ARTEMIS-989](https://issues.apache.org/jira/browse/ARTEMIS-989)\] \- Individual Acknowledge: ActiveMQConnectionFactory.createContext(final int sessionMode) throws exception for ActiveMQJMSConstants.INDIVIDUAL_ACKNOWLEDGE
*   \[[ARTEMIS-990](https://issues.apache.org/jira/browse/ARTEMIS-990)\] \- AMQ119032: User: Customer does not have permission='CREATE\_DURABLE\_QUEUE' on address $sys.mqtt.queue.qos2
*   \[[ARTEMIS-991](https://issues.apache.org/jira/browse/ARTEMIS-991)\] \- Null dereference after hitting Ctrl+d when prompted for password in \`artemis create\`
*   \[[ARTEMIS-992](https://issues.apache.org/jira/browse/ARTEMIS-992)\] \- NPE and other trouble when cluster-connection has bad connector-ref
*   \[[ARTEMIS-998](https://issues.apache.org/jira/browse/ARTEMIS-998)\] \- NPE when using JDBCFileDriver when Blob is null
*   \[[ARTEMIS-1000](https://issues.apache.org/jira/browse/ARTEMIS-1000)\] \- Openwire exception response no correlation-id
*   \[[ARTEMIS-1003](https://issues.apache.org/jira/browse/ARTEMIS-1003)\] \- Documentation uses incorrect variable in code example for Large Messaging
*   \[[ARTEMIS-1007](https://issues.apache.org/jira/browse/ARTEMIS-1007)\] \- Missing management annotations
*   \[[ARTEMIS-1010](https://issues.apache.org/jira/browse/ARTEMIS-1010)\] \- Oracle12C driver does not support table names with lower case letters
*   \[[ARTEMIS-1017](https://issues.apache.org/jira/browse/ARTEMIS-1017)\] \- Wrong error message when default destination for producer is not specified
*   \[[ARTEMIS-1020](https://issues.apache.org/jira/browse/ARTEMIS-1020)\] \- CDI Extension doesn't discover Configuration via CDI producers
*   \[[ARTEMIS-1026](https://issues.apache.org/jira/browse/ARTEMIS-1026)\] \- Don't route to queue when consumerCount = 0 and purge-on-no-consumers = true

Improvement
-----------

*   \[[ARTEMIS-410](https://issues.apache.org/jira/browse/ARTEMIS-410)\] \- STOMP destination prefixes should be configurable
*   \[[ARTEMIS-537](https://issues.apache.org/jira/browse/ARTEMIS-537)\] \- Allow Artemis to use Karaf JAAS security
*   \[[ARTEMIS-560](https://issues.apache.org/jira/browse/ARTEMIS-560)\] \- Add support for Paging using JDBC Store
*   \[[ARTEMIS-762](https://issues.apache.org/jira/browse/ARTEMIS-762)\] \- AMQP Clients are not updated after management operations
*   \[[ARTEMIS-829](https://issues.apache.org/jira/browse/ARTEMIS-829)\] \- Core Protocol Producers will re-encode messages on the server
*   \[[ARTEMIS-851](https://issues.apache.org/jira/browse/ARTEMIS-851)\] \- Parse System.properties as Configuration
*   \[[ARTEMIS-866](https://issues.apache.org/jira/browse/ARTEMIS-866)\] \- make replication and quorum voting configurable and more resilient
*   \[[ARTEMIS-873](https://issues.apache.org/jira/browse/ARTEMIS-873)\] \- Use K,M,G notations on broker.xml
*   \[[ARTEMIS-903](https://issues.apache.org/jira/browse/ARTEMIS-903)\] \- Add documentation for updating Artemis to newer versions
*   \[[ARTEMIS-906](https://issues.apache.org/jira/browse/ARTEMIS-906)\] \- Memory Mapped JournalType
*   \[[ARTEMIS-920](https://issues.apache.org/jira/browse/ARTEMIS-920)\] \- Log SQL Exceptions and Warnings
*   \[[ARTEMIS-922](https://issues.apache.org/jira/browse/ARTEMIS-922)\] \- Clean up addressing API
*   \[[ARTEMIS-928](https://issues.apache.org/jira/browse/ARTEMIS-928)\] \- Remoting Layer will reuse ByteBuffer Pools on messages
*   \[[ARTEMIS-935](https://issues.apache.org/jira/browse/ARTEMIS-935)\] \- Tool to recalculate disk sync times
*   \[[ARTEMIS-938](https://issues.apache.org/jira/browse/ARTEMIS-938)\] \- JDBC persistence-store should use BIGINT type for IDs in database tables
*   \[[ARTEMIS-943](https://issues.apache.org/jira/browse/ARTEMIS-943)\] \- Update and document XML importer/exporter for new addressing scheme
*   \[[ARTEMIS-947](https://issues.apache.org/jira/browse/ARTEMIS-947)\] \- Configuration reload logic should deal with new addressing scheme
*   \[[ARTEMIS-957](https://issues.apache.org/jira/browse/ARTEMIS-957)\] \- JDBC Store should use setBytes API vs using Concat on BLOB
*   \[[ARTEMIS-964](https://issues.apache.org/jira/browse/ARTEMIS-964)\] \- Move common XMLDataExporter logic into a utility class
*   \[[ARTEMIS-993](https://issues.apache.org/jira/browse/ARTEMIS-993)\] \- ClientConsumerImpl.java contains unreachable code
*   \[[ARTEMIS-996](https://issues.apache.org/jira/browse/ARTEMIS-996)\] \- Simplify and deduplicate lookupHome(path) in artemis-maven-plugin
*   \[[ARTEMIS-1002](https://issues.apache.org/jira/browse/ARTEMIS-1002)\] \- ActiveMQBuffers creates a new netty pool increasing memory footprint
*   \[[ARTEMIS-1006](https://issues.apache.org/jira/browse/ARTEMIS-1006)\] \- JDBC Storage Manager to show SQLExceptions on logs
*   \[[ARTEMIS-1008](https://issues.apache.org/jira/browse/ARTEMIS-1008)\] \- Allow web server host to be set on create

New Feature
-----------

*   \[[ARTEMIS-17](https://issues.apache.org/jira/browse/ARTEMIS-17)\] \- Add Broker Interceptor - like the Camel Broker Component in ActiveMQ 5
*   \[[ARTEMIS-24](https://issues.apache.org/jira/browse/ARTEMIS-24)\] \- Lazy conversions on Protocols / Persistency
*   \[[ARTEMIS-562](https://issues.apache.org/jira/browse/ARTEMIS-562)\] \- Use 'to' field if sender target is null
*   \[[ARTEMIS-780](https://issues.apache.org/jira/browse/ARTEMIS-780)\] \- Improve addressing, routing and JMS configuration in Artemis
*   \[[ARTEMIS-983](https://issues.apache.org/jira/browse/ARTEMIS-983)\] \- Allow JMS client to fully qualify the queue it uses
*   \[[ARTEMIS-999](https://issues.apache.org/jira/browse/ARTEMIS-999)\] \- Support Oracle12C for Artemis JDBC Store
*   \[[ARTEMIS-1009](https://issues.apache.org/jira/browse/ARTEMIS-1009)\] \- Pure Encoding of Messages

Task
----

*   \[[ARTEMIS-891](https://issues.apache.org/jira/browse/ARTEMIS-891)\] \- upgrade proton to 0.16
*   \[[ARTEMIS-896](https://issues.apache.org/jira/browse/ARTEMIS-896)\] \- Remove 32 bits native library
*   \[[ARTEMIS-923](https://issues.apache.org/jira/browse/ARTEMIS-923)\] \- Bump minimum Maven to 3.1.0
*   \[[ARTEMIS-995](https://issues.apache.org/jira/browse/ARTEMIS-995)\] \- Cleanup test suite
*   \[[ARTEMIS-1019](https://issues.apache.org/jira/browse/ARTEMIS-1019)\] \- Removing defunct integrations (Aerogear and Vertx)
*   \[[ARTEMIS-1029](https://issues.apache.org/jira/browse/ARTEMIS-1029)\] \- Cleanup testsuites