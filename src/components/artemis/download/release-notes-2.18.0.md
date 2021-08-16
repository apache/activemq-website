---
layout: default_md
title: ActiveMQ Artemis 2.18.0 Release Notes
title-class: page-title-artemis
type: artemis
---

A complete list of JIRAs for the 2.18.0 release can be found     * [here](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12315920&version=12349326)

A list of commits can be found     * [here](commit-report-2.18.0).


# Bug
 * [ARTEMIS-1883] - Address name of ::test.topic incorrectly interpreted as FQQN
 * [ARTEMIS-2620] - Avoid Exception on client when large message file corrupted
 * [ARTEMIS-2802] - Federation not working when clients connect using OpenWire protocol
 * [ARTEMIS-2870] - CORE connection failure sometimes doesn't cleanup sessions
 * [ARTEMIS-2931] - Potential null pointer access at several places
 * [ARTEMIS-3093] - Message Order broken with Core Protocol when rolling back transactions
 * [ARTEMIS-3116] - Scheduled Delivery is Ignored by Core->AMQP Conversion
 * [ARTEMIS-3118] - Browse queue does not always show correct "Expires"
 * [ARTEMIS-3120] - ActiveMQXAResourceWrapper NPE if no LocatorConfig
 * [ARTEMIS-3124] - When expiration=0, the browse-queue function shows "1970-00-04 01:00:00"
 * [ARTEMIS-3132] - Choosing 'Go to summary page' always goes to http://.../console/undefined
 * [ARTEMIS-3135] - AMQ222214: Destination q has an inconsistent and negative address size=-6
 * [ARTEMIS-3147] - auto-delete does not work for destinations that existed before broker restart
 * [ARTEMIS-3150] - wrong username in error message for AMQP connections
 * [ARTEMIS-3152] - COLUMNS button shows warning text from CLOSE in Browse Connection
 * [ARTEMIS-3155] - Differentiate SSL store type and provider
 * [ARTEMIS-3159] - AMQ222145: Error expiring reference Reference
 * [ARTEMIS-3172] - Don't log STOMP CONNECT passcode header
 * [ARTEMIS-3174] - ServerSessionImpl doesn't set new connection when transferring session
 * [ARTEMIS-3176] - Don't log JDBC datasource "password" property
 * [ARTEMIS-3180] - Consumers with wildcards addresses broken
 * [ARTEMIS-3188] - StackOverflow over Bindings and load balancing
 * [ARTEMIS-3191] - Cannot use broker-connection mirror with credentials
 * [ARTEMIS-3200] - ProtonAbstractReceiver memory leak
 * [ARTEMIS-3201] - Configured Diverts aren't persisted
 * [ARTEMIS-3203] - sorting tables does not work for all columns
 * [ARTEMIS-3204] - Resource Limiting on Queues is not working
 * [ARTEMIS-3217] - manually creating a queue under a wildcard address fails when address contains "*"
 * [ARTEMIS-3234] - Openwire Advisory messages are limited by prefetch in error
 * [ARTEMIS-3236] - broker.xml defined queue deleted on MQTT client disconnect with auto-delete-created-queues=false
 * [ARTEMIS-3237] - Logging OpenWire producer exception is confusing
 * [ARTEMIS-3238] - AMQP Mirror is not routing correctly with Durable SNF
 * [ARTEMIS-3240] - Openwire nonBlockingRedelivery to true doesn't rollback the messages if the consumer is killed mid processing.
 * [ARTEMIS-3241] - binary archive LICENSE file contains improper (and possibly stale) entries for management console deps
 * [ARTEMIS-3257] - documentation references non-existing element transport-connector-ref
 * [ARTEMIS-3258] - downstream federation with ssl does not use the given truststore
 * [ARTEMIS-3261] - Infinite Redelivery could lead to extensive journal usage
 * [ARTEMIS-3270] - update build to enforce use of Maven 3.5.0+
 * [ARTEMIS-3271] - Avoid Multi Thread measurement on Critical Analyzer
 * [ARTEMIS-3273] - Option to recover messages from the journal
 * [ARTEMIS-3275] - CORE client unlocks communication during failover retries
 * [ARTEMIS-3285] - Potential duplicate messages with LVQ + non-destructive
 * [ARTEMIS-3294] - Error browsing messages with a text body
 * [ARTEMIS-3295] - Openwire advisories are clustered
 * [ARTEMIS-3302] - various use of deprecated-for-removal javax.security.cert.X509Certificate
 * [ARTEMIS-3304] - replace Long/Double/etc constructor usage marked deprecated for-removal
 * [ARTEMIS-3310] - Paging could lose AMQPmessage if match didn't work for any reason
 * [ARTEMIS-3311] - potential loss of error propagation to producer on failed paged message add
 * [ARTEMIS-3317] - OpenWire property conversion can cause ClassCastException
 * [ARTEMIS-3318] - Paging won't cleanup if there's a truncated file for any reason.
 * [ARTEMIS-3323] - Openwire messageId needs to be globally unique
 * [ARTEMIS-3324] - Compacting could make the system to run out of open files generating increased latency
 * [ARTEMIS-3326] - OpenWireConnection, state visibility issue leading to javax.jms.IllegalStateException Cannot add a producer ..
 * [ARTEMIS-3330] - JMS session stopped on failed rollback
 * [ARTEMIS-3332] - Console uses Consumer ID instead of Consumer count for searching
 * [ARTEMIS-3333] - xml error in documentation for jgroups example
 * [ARTEMIS-3337] - CORE Client sessions are closed when there are errors during failover
 * [ARTEMIS-3338] - Rollback of prepared XA transactions fails after a connection failure
 * [ARTEMIS-3339] - Role Based Authorisation for JMX not working as expected
 * [ARTEMIS-3346] - Fix typo in coreMaptoJMSMap
 * [ARTEMIS-3354] - journal-max-io cannot be set to 1 with ASYNCIO journal
 * [ARTEMIS-3356] - Paging - wrong arguments in formatted message
 * [ARTEMIS-3366] - deleteAddress can remove SnF queue
 * [ARTEMIS-3372] - Openwire - deleting a queue leaves consumers in limbo
 * [ARTEMIS-3374] - Config managed queue can be deleted by durable subscriber
 * [ARTEMIS-3375] - "artemis address" shows the help text of "artemis queue"
 * [ARTEMIS-3381] - AMQP bypasses session when deleting queues
 * [ARTEMIS-3383] - AMQP Message isDurable returns false during RELOAD_PERSISTENCE state
 * [ARTEMIS-3384] - Duplicated messages with bridge duplicate detection enabled
 * [ARTEMIS-3385] - Management changes can be reverted by XML update
 * [ARTEMIS-3386] - Broker could use too many Threads to expire messages on the reaper
 * [ARTEMIS-3392] - Scale down would fail if target queue's id greater than max int
 * [ARTEMIS-3394] - ClassCastException when queue & divert have same name
 * [ARTEMIS-3395] - Ensure sending audit log contains message ID
 * [ARTEMIS-3396] - MessageFormatException when consuming a message using OpenWire
 * [ARTEMIS-3397] - Remove queue rate metric from web console
 * [ARTEMIS-3398] - message count incorrect when browsing messages with filter in console
 * [ARTEMIS-3399] - Fix audit logging for AMQP
 * [ARTEMIS-3403] - wrong debug level in ArtemisMBeanServerGuard
 
# New Feature
 * [ARTEMIS-2716] - Implements pluggable Quorum Vote
 * [ARTEMIS-2919] - Support timestamping incoming messages
 * [ARTEMIS-3106] - Support for SASL-SCRAM
 * [ARTEMIS-3137] - Support XPath filters
 * [ARTEMIS-3168] - JAAS login module to convert existing Principal to an Artemis UserPrincipal
 * [ARTEMIS-3198] - Add ability to increase concurrency on core bridges
 * [ARTEMIS-3243] - Dual Mirror Support on AMQP Broker Connections
 * [ARTEMIS-3280] - Expose Netty pool metrics via Micrometer
 * [ARTEMIS-3288] - Support bulk user loading with basic security manager
 * [ARTEMIS-3297] - Journal Retention Feature
 * [ARTEMIS-3365] - Broker Balancers
 * [ARTEMIS-3402] - Split Brain detection should reject bad member updates
 
# Improvement
 * [ARTEMIS-2932] - Configuration of SSL/TLS
 * [ARTEMIS-2952] - Extending ActiveMQXAConnectionFactory is limited by readOnly being private
 * [ARTEMIS-2965] - Allow mirror to stop capture events and delete inner queue
 * [ARTEMIS-3045] - ReplicationManager can batch sent replicated packets
 * [ARTEMIS-3102] - ActiveMQSecurityManager5 should disconnect user when his authentication is not valid anymore
 * [ARTEMIS-3117] - Performance degradation when switching from JDK8 to JDK11
 * [ARTEMIS-3128] - Queue browser may cause OutOfMemoryError on server side
 * [ARTEMIS-3129] - add browse entry in RBAC
 * [ARTEMIS-3130] - filter fields broker in console
 * [ARTEMIS-3133] - Reduce memory usage for Null an Ping packets
 * [ARTEMIS-3138] - Shared Nothing Live broker shouldn't try to connect to itself
 * [ARTEMIS-3141] - limit the amount of data returned from jmx/queue control listMessages
 * [ARTEMIS-3154] - Add support for navigation/deleting messages while being browsed
 * [ARTEMIS-3156] - Better support for PKCS #11
 * [ARTEMIS-3166] - Support disabling configuration file reload
 * [ARTEMIS-3175] - Restrict/truncate messages attributes to a configurable limit for management views
 * [ARTEMIS-3195] - Filter empty items from listNetworkTopology
 * [ARTEMIS-3196] - expose journal pool files in JMX
 * [ARTEMIS-3197] - Add selectorAware option to the openwire virtualTopicConsumerWildcards feature
 * [ARTEMIS-3202] - add flag to delete diverts removed from config
 * [ARTEMIS-3209] - improve error message AMQ222186: unable to authorise cluster control
 * [ARTEMIS-3219] - Improve FQQN message routing
 * [ARTEMIS-3226] - Add version output to cli
 * [ARTEMIS-3229] - Add details to AddressControl MBean
 * [ARTEMIS-3256] - internalqueue and internaladdress get their own color in the broker diagram
 * [ARTEMIS-3283] - Enable setting "slow-consumer-threshold" to lower than 1msg/second
 * [ARTEMIS-3284] - Clarify ordering of elements in broadcast group XML configuration
 * [ARTEMIS-3309] - Add a parameter to limit messages to move or transfer
 * [ARTEMIS-3315] - QueueControl fails JSON serialization of AMQP messages
 * [ARTEMIS-3327] - Remove unnecessary block operations on journal
 * [ARTEMIS-3331] - Improvements to Resource Adapter and example
 * [ARTEMIS-3334] - documentation gives no clue on how to place the jgroups config file in the classpath
 * [ARTEMIS-3340] - Replicated Journal quorum-based logical timestamp/version
 * [ARTEMIS-3343] - duplicate address-setting gets lost
 * [ARTEMIS-3360] - Backup connector ignores TTL settings on the connection factories
 * [ARTEMIS-3367] - The connector verifyHost parameter default should be changed
 * [ARTEMIS-3379] - Add message details to consumer audit log
 * [ARTEMIS-3393] - Support securityDomain on in-vm acceptor
 * [ARTEMIS-3400] - Add audit logging for message ack
 * [ARTEMIS-3401] - Support dead-letter and expiry identification on the web console via regex
 * [ARTEMIS-3404] - expose max retry interval on bridge mbean
 * [ARTEMIS-3405] - Log the end of paging mode for a destination
 * [ARTEMIS-3411] - Expose Divert Records on Print Data
 * [ARTEMIS-3414] - Disable OpenWire advisory support as default created configuration on CLI
 * [ARTEMIS-3417] - Disable Auto-delete queue and auto-delete address on the default broker.xml
 * [ARTEMIS-3177] - hide/show the internal addresses/queues for cluster operation

# Test
 * [ARTEMIS-2813] - Kerberos tests failures on Java 11
 * [ARTEMIS-3044] - Add Artemis web console tests
 * [ARTEMIS-3185] - Various TLS tests fail on newer JDKs/environments
 * [ARTEMIS-3371] - Implement Testcontainer test for quid-dispatch
 * [ARTEMIS-3409] - DNSSwitchTest skips on Java 8 but fails on Java 11+ if preconditions not satisfied
 * [ARTEMIS-3412] - update Mockito to 3.11.2
 * [ARTEMIS-3413] - Validate Mirror with removeQueue=false

# Task
 * [ARTEMIS-3038] - Investigate CoreClientOverOneWaySSLKerb5Test#testOneWaySSLWithGoodClientCipherSuite
 * [ARTEMIS-3121] - Refactor NettyAcceptor.getPrototcols(Map) method
 * [ARTEMIS-3182] - remove jcenter repo definition from artemis-mqtt-protocol module
 * [ARTEMIS-3183] - resolve warnings seen immediately upon starting build
 * [ARTEMIS-3224] - Removing Migration Tool from Artemis 1.x
 * [ARTEMIS-3227] - WebConsole shutdown after certain network isolations.
 * [ARTEMIS-3228] - Enable javadoc check on github PRs
 * [ARTEMIS-3293] - Test Paging on a System Test
 * [ARTEMIS-3296] - enable building on Java 16
 * [ARTEMIS-3314] - Fix warnings emitted during build of artemis-distribution module
 * [ARTEMIS-3328] - various assembly related improvements
 * [ARTEMIS-3341] - update checkstyle, use consistent plugin version
 * [ARTEMIS-3352] - misc pom cleanups
 * [ARTEMIS-3373] - Update org.apache.activemq.artemis.utils.collections to be consistent on Types

# Dependency upgrade
 * [ARTEMIS-3123] - Update netty version to 4.1.59.Final
 * [ARTEMIS-3144] - Update resteasy version to 3.15.0.Final
 * [ARTEMIS-3165] - Update karaf version to 4.3.0
 * [ARTEMIS-3169] - Update jetty to 9.4.38 and servlet-api to 3.0
 * [ARTEMIS-3194] - Upgrade hawtio version to 2.13.1
 * [ARTEMIS-3199] - Upgrade postgresql to 42.2.19
 * [ARTEMIS-3215] - Upgrade hawtio version to 2.13.2
 * [ARTEMIS-3221] - Migrating to Jakarta EE 8 artifacts
 * [ARTEMIS-3232] - Upgrade netty version to 4.1.63.Final
 * [ARTEMIS-3242] - update to Qpid JMS 0.59.0
 * [ARTEMIS-3266] - Upgrade jetty version to 9.4.40.v20210413
 * [ARTEMIS-3287] - Upgrade micrometer version to 1.6.3
 * [ARTEMIS-3316] - Upgrade netty version to 4.1.65.Final
 * [ARTEMIS-3347] - update commons-io
 * [ARTEMIS-3348] - update hawtio
 * [ARTEMIS-3368] - Upgrade hawtio version to 2.13.5
 * [ARTEMIS-3380] - Upgrade jetty version to 9.4.43.v20210629
 * [ARTEMIS-3391] - Upgrade netty version to 4.1.66.Final
 * [ARTEMIS-3407] - update pax-exam to 4.13.4 and karaf to 4.3.1, get related tests to work on Java 11
