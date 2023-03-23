---
layout: default_md
title: ActiveMQ Artemis 2.25.0 Release Notes
title-class: page-title-artemis
type: artemis
---

A complete list of JIRAs for the 2.25.0 release can be found  * [here](https://issues.apache.org/jira/secure/ReleaseNote.jspa?version=12352143&projectId=12315920)

A list of commits can be found  * [here](commit-report-2.25.0).

**Note**: This release requires use of Java 11 or above.

Release Notes - ActiveMQ Artemis - Version 2.25.0

# Bug
* [ARTEMIS-3916] - Fix OpenWire selector with JMSMessageID
* [ARTEMIS-3917] - missing/incorrect getters on Configuration.java
* [ARTEMIS-3918] - Support FQQN + anycast + redistribution
* [ARTEMIS-3922] - Reducing contention on java.lang.Throwable#getOurStackTrace
* [ARTEMIS-3923] - AddressControlImpl.getRoles doesn't return all the security role permissions
* [ARTEMIS-3925] - Last value queues only keeping last messages (regardless of last value key)
* [ARTEMIS-3928] - Paging will flood memory with Native Buffers if too many destinations are used at once
* [ARTEMIS-3929] - Changing OpenWireProtocolManager::clientIDs to a concurrent Hash Map
* [ARTEMIS-3933] - ScaleDown NPE on DLA resources with multiple destinations
* [ARTEMIS-3940] - MaxMessages and Page.policy fail is not working
* [ARTEMIS-3942] - Use session instead of direct routing for MQTT LWT messages
* [ARTEMIS-3943] - Changing Address Settings defaults like Paging Flow Control to avoid OME on default configuration on broker
* [ARTEMIS-3947] - Expiry settings not merging properly
* [ARTEMIS-3958] - Sending LWT may recurse infinitely if disk full
* [ARTEMIS-3961] - Don't log OperationContext
* [ARTEMIS-3963] - Error setting security roles via properties on OpenJ9 JDK 11

# Improvement
* [ARTEMIS-3785] - Add configuration to specify the alias of the private key in the keystore
* [ARTEMIS-3843] - add/remove connector via mangement
* [ARTEMIS-3872] - Send scheduled message immediately via mangement
* [ARTEMIS-3900] - Support management allowlist entries with wildcard domain
* [ARTEMIS-3950] - dont prepare unused debug detail during xml data import processing
* [ARTEMIS-3955] - Consolidate Subject on RemotingConnection

# Task
* [ARTEMIS-3909] - Move RoutingContext::processReferences to PostOfficeImpl
* [ARTEMIS-3914] - Document Client Classpath using automation
* [ARTEMIS-3954] - add some detail to core-client thread model javadoc note
* [ARTEMIS-3956] - Clean up use of RemotingConnection

# Dependency upgrade
* [ARTEMIS-3927] - Update to PostgreSQL 42.4.1
* [ARTEMIS-3946] - Update to Netty 4.1.79