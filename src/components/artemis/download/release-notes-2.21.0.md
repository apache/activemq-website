---
layout: default_md
title: ActiveMQ Artemis 2.21.0 Release Notes
title-class: page-title-artemis
type: artemis
---

A complete list of JIRAs for the 2.21.0 release can be found  * [here](https://issues.apache.org/jira/secure/ReleaseNote.jspa?version=12351083&styleName=Text&projectId=12315920&Create=Create)

A list of commits can be found  * [here](commit-report-2.21.0).

**Note**: This release requires use of Java 11 or above.


# New Feature
 * [ARTEMIS-3522] - Implement performance tools to evaluate throughput and Response Under Load performance of Artemis
 * [ARTEMIS-3638] - Support MQTT 5
 * [ARTEMIS-3670] - Support diverting to multiple addresses
 * [ARTEMIS-3685] - Support reloading bridges
 * [ARTEMIS-3686] -  Add example integrating OpenTelemetry
 * [ARTEMIS-3720] - Max number of messages as a deciding factor for Paging

# Bug
 * [ARTEMIS-2582] - EmbeddedActiveMQ.stop() should check for null
 * [ARTEMIS-2934] - ARTEMIS-2226 causes excessive notifications to be sent for Spring XA clients
 * [ARTEMIS-3145] - Failure when shutting down the broker
 * [ARTEMIS-3591] - PagingStoreImpl#checkMemory can run the provided task more than once
 * [ARTEMIS-3607] - JsonUtil addToObject should be able to add a JsonValue
 * [ARTEMIS-3608] - OFF_WITH_REDISTRIBUTION - no redistribution for non persistent Multicast messages
 * [ARTEMIS-3616] - Netty epoll is not available
 * [ARTEMIS-3620] - Journal blocking delete/update record with no sync 
 * [ARTEMIS-3623] - extraProperties._AMQ_ACTUAL_EXPIRY should be numeric in expired AMQP messages
 * [ARTEMIS-3624] - MVN eclipse:eclipse fails due to missing version for org.apache.kerby/token-provider
 * [ARTEMIS-3625] - NPE on createSharedSubscription when client connects to older versions
 * [ARTEMIS-3626] - simple syntax error in PluggableQuorumBackupSyncJournalTest.java
 * [ARTEMIS-3628] - validation error in pom file
 * [ARTEMIS-3629] - syntax error in css file
 * [ARTEMIS-3630] - missing end tag for pf-table-view in diagram.js
 * [ARTEMIS-3633] - The tooltip for "Artemis password" is the same as for the username field
 * [ARTEMIS-3636] - LinkedListImpl$Iterator leak on mesage consume error
 * [ARTEMIS-3646] - OpenWire clients leave incorrect queue metrics when messages are sent to DLQ
 * [ARTEMIS-3647] - rolledbackMessageRefs can grow until OOM with OpenWire clients
 * [ARTEMIS-3649] - OpenWire consumers with zero prefetch get stuck
 * [ARTEMIS-3664] - Critical Analyzer should not kick in during Starting phase of the broker
 * [ARTEMIS-3676] - "No route to host" exceptions from Netty with NIO transport
 * [ARTEMIS-3677] - Mitigate NPE when browsing messages
 * [ARTEMIS-3678] - Return proper CONNACK code when MQTT 3.x auth fails
 * [ARTEMIS-3679] - Brokers with JDBC shared-store shutdown after daylight saving fall back
 * [ARTEMIS-3682] - No way of knowing if a bridge was successfully deployed or not
 * [ARTEMIS-3687] - Bridges with concurrency > 1 can leak
 * [ARTEMIS-3696] - Avoid null property values on STOMP messages
 * [ARTEMIS-3701] - Do not block libaio before moving to next file.
 * [ARTEMIS-3702] - Authorization failures don't adhere to MQTT spec
 * [ARTEMIS-3709] - Queue "group-rebalance-pause-dispatch" attribute invalid
 * [ARTEMIS-3714] - Change Docker group and user IDs to 1001
 * [ARTEMIS-3719] - Dead-letter and expiry address not applied when using temp-queue-namespace
 * [ARTEMIS-3721] - AMQP Mirrored Large Message's body file is not deleted
 * [ARTEMIS-3729] - JMS CORE client session commit doesn't work after async sends
 * [ARTEMIS-3732] - ServerLocator disableFinalizeCheck method has been removed without being deprecated first
 * [ARTEMIS-3734] - Correct typo on CLI transfer

# Improvement
 * [ARTEMIS-3573] - Support PropertiesLoginModule custom password codecs
 * [ARTEMIS-3613] - Deprecate stompMaxFramePayloadLength which is use for any protocol no just stomp
 * [ARTEMIS-3618] - Faster Artemis CORE client MessageListener::onMessage without SecurityManager
 * [ARTEMIS-3621] - viewing message without timestamp shows a 1970 datetime
 * [ARTEMIS-3627] - Allow properties to configure 'new' broker attributes and load from a file
 * [ARTEMIS-3631] - 2 more header fields can be interpreted as timestamp
 * [ARTEMIS-3632] - expiry timestamps are only shown in relative form in the details table
 * [ARTEMIS-3637] - config-delete-diverts not being applied properly
 * [ARTEMIS-3644] - Add cert info to CONNECTION_CREATED notification
 * [ARTEMIS-3645] - Support broker balancer cache persistence
 * [ARTEMIS-3653] - BrokerDiagram improvements, a.o. highlight the (real) current broker
 * [ARTEMIS-3660] - broker balancer - tidy up configuration; rename to connection router
 * [ARTEMIS-3671] - Fix readability of queue stat output
 * [ARTEMIS-3673] - Set default hawtio role
 * [ARTEMIS-3690] - Enhancement of ActiveMQRAManagedConnectionFactory by compressLargeMessage and initialConnectAttempts
 * [ARTEMIS-3691] - Build the CLI connector from a broker acceptor
 * [ARTEMIS-3694] - Support remote servers for console smoke tests
 * [ARTEMIS-3697] - Paging improvements
 * [ARTEMIS-3698] - Avoid byte[] property values when converting from OpenWire
 * [ARTEMIS-3699] - add method exposing the bound port of an acceptor
 * [ARTEMIS-3708] - Collapse key transformer into policy
 * [ARTEMIS-3710] - Deprecate queues config element
 * [ARTEMIS-3711] - Support AMQ_SCHEDULED_DELAY for OpenWire clients
 * [ARTEMIS-3715] - Support testClientID for artemis-maven-plugin

# Test
 * [ARTEMIS-3652] - ElasticQueueTest can leave behind task loops creating producers and consumers
 * [ARTEMIS-3654] - AllClassesTest can create and fail to close a LibaioContext instance

# Wish
 * [ARTEMIS-3186] - enable option "Create queue" more often

# Task
 * [ARTEMIS-3612] - Update Hawtio and strip Log4j from console web app
 * [ARTEMIS-3641] - Move to the latest checkstyle
 * [ARTEMIS-3650] - rework assembly creation to simplify and ease maintenance
 * [ARTEMIS-3655] - isolate the ErrorProne dependencies to the profiles that use them
 * [ARTEMIS-3657] - Refactor address docs
 * [ARTEMIS-3658] - Remove refs to Jetty's deprecated NCSARequestLog
 * [ARTEMIS-3662] - Remove deprecated config from default broker.xml
 * [ARTEMIS-3675] - use reload4j in optional openwire tests module
 * [ARTEMIS-3689] - Tidy up console build, use consistent plugin versions etc
 * [ARTEMIS-3695] - use specific jetty dependencies instead of jetty-all
 * [ARTEMIS-3716] - Move end-to-end tests from smoke-tests to e2e-tests module


# Dependency upgrade
 * [ARTEMIS-2413] - Upgrade JGroups
 * [ARTEMIS-3648] - Update netty version to 4.1.73.Final
 * [ARTEMIS-3666] - Update to PostgreSQL 42.3.3
 * [ARTEMIS-3667] - Update to Groovy 4.0.0
 * [ARTEMIS-3668] - Update to Qpid JMS 1.5.0
 * [ARTEMIS-3674] - Update to SLF4J 1.7.36
 * [ARTEMIS-3684] - Update Netty to 4.1.74
 * [ARTEMIS-3712] - Refresh doc generation tool-chain
 * [ARTEMIS-3723] - Update Netty to 4.1.75.Final
 * [ARTEMIS-3724] - Update Jetty to 9.4.45

