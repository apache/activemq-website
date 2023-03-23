---
layout: default_md
title: ActiveMQ Artemis 2.28.0 Release Notes
title-class: page-title-artemis
type: artemis
---

 - [A complete list of JIRAs](https://issues.apache.org/jira/secure/ReleaseNote.jspa?version=12352523&projectId=12315920) for the 2.28.0 release.

 - [A list of commits](commit-report-2.28.0).

 - Please see the "Versions" chapter in the User Guide for upgrade instructions.

**Note**: This release requires use of Java 11 or above.

## Bug
 * [ARTEMIS-3357] - Setting multicast: prefix explicitely when reconnecting a durable AMQP client causes the queue to be renewed and all pending messages lost
 * [ARTEMIS-3370] - default-queue-routing-type is ignored when set to multicast
 * [ARTEMIS-3609] - Artemis's Core JMS 2 CompletionListener shouldn't be called within Netty thread
 * [ARTEMIS-3819] - stack traces in console output on browse queue due to missing validatedUser value
 * [ARTEMIS-3871] - ActiveMQ Artemis 2.23.0 -- mqtt 5.0, mqtt client can't subscribe multiple share topic?
 * [ARTEMIS-4030] - AMQ222010 (No such file or directory) during startup
 * [ARTEMIS-4078] - Divert filter not added/updated/removed on configuration change
 * [ARTEMIS-4083] - when artemis streaming enabled then artemis-core client is not closing inputstream for Bytes message, blocking deletion of file after its processed in windows
 * [ARTEMIS-4084] - Rolling back massive amounts of messages might crash broker
 * [ARTEMIS-4085] - Exclusive LVQ not working as expected
 * [ARTEMIS-4089] - Auto-deleted queue with active producer leaves producer disabled (or impotent)
 * [ARTEMIS-4092] - ./artemis upgrade backup is not created properly / incomplete
 * [ARTEMIS-4096] - AMQP Large Messages can be lost when sent through Clustered or Bridge
 * [ARTEMIS-4098] - AMQP messages missing correlation ID in console
 * [ARTEMIS-4101] - SecurityStore caches failed authentication result from LDAP connection failures
 * [ARTEMIS-4103] - Support journal-lock-acquisition-timeout in broker.xml
 * [ARTEMIS-4106] - Do not set property with empty key name when converting to OpenWire
 * [ARTEMIS-4108] - AMQP Drain can fail with Large Messages under load
 * [ARTEMIS-4109] - Unable to auto-delete queue for MQTT retained message
 * [ARTEMIS-4114] - Broker deadlock occurs when restarting another broker in the cluster
 * [ARTEMIS-4115] - ArrayIndexOutOfBoundsException when duplicate cache size is 0
 * [ARTEMIS-4125] - Address can be removed inadvertently
 * [ARTEMIS-4126] - Address not created automatically when sending MQTT message
 * [ARTEMIS-4129] - When HA does not configure the oldreplica number of directories parameter (max-saved-replicated-journals-size) for the master/primary, always the default value of 2
 * [ARTEMIS-4132] - broker uses anycast for amqp destination which is configured as multicast
 * [ARTEMIS-4133] - Message with null property value unable to be consumed via STOMP
 * [ARTEMIS-4135] - Mitigate NPE when browsing
 * [ARTEMIS-4137] - MQTT subscription queue clean-up can fail due to security

## New Feature
 * [ARTEMIS-4136] - Mirror sync replication

## Improvement
 * [ARTEMIS-3085] - Support registering IOCriticalErrorListener on the broker
 * [ARTEMIS-3168] - JAAS login module to convert existing Principal to an Artemis UserPrincipal
 * [ARTEMIS-3178] - Provide a way to limit the size of an address after paged
 * [ARTEMIS-3866] - Authorize management message sending using access control context subject
 * [ARTEMIS-4042] - DefaultSensitiveStringCodec - read ARTEMIS_DEFAULT_SENSITIVE_STRING_CODEC_KEY env if system property is not set
 * [ARTEMIS-4065] - Improving Page Counting by using real records, and not use the journal extensive for every message sent
 * [ARTEMIS-4077] - Add an option to disable XML external entity processing
 * [ARTEMIS-4093] - Expose properties and support resource adapter in J2EE environments
 * [ARTEMIS-4100] - Improve consistency and wording of CLI command descriptions
 * [ARTEMIS-4112] - DefaultSensitiveStringCodec don't set system property in scripts as env is read directly
 * [ARTEMIS-4116] - Implement management semaphore to avoid parallel operations being executed from user's persistently calling operations
 * [ARTEMIS-4120] - show labels for header field mqtt.qos.level
 * [ARTEMIS-4122] - Pull update from OpenLDAP
 * [ARTEMIS-4123] - Enable Strict-Transport-Security header
 * [ARTEMIS-4124] - Set the SameSite flag on all cookies
 * [ARTEMIS-4131] - Support custom maven local repo for karaf tests
 * [ARTEMIS-4134] - add version to initial boostrap log message, making it more obvious
 * [ARTEMIS-4149] - add watcher to login.config dir to trigger jass property reload

## Task
 * [ARTEMIS-4110] - tidy up some licence header issues
 * [ARTEMIS-4127] - Refactor multiprotocol JMS tests in AMQP package

## Dependency upgrade
 * [ARTEMIS-4099] - Update to PostgreSQL 42.4.3
 * [ARTEMIS-4117] - Bump netty-codec-http from 4.1.82.Final to 4.1.86.Final
 * [ARTEMIS-4138] - Upgrade jackson version to 2.14.1

