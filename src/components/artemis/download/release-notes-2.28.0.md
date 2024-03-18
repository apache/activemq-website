---
layout: default_md
title: ActiveMQ Artemis 2.28.0 Release Notes
title-class: page-title-artemis
type: artemis
---
 - [A list of commits](commit-report-2.28.0).

 - Please see the ["Versions"](https://activemq.apache.org/components/artemis/documentation/latest/versions.html) chapter in the User Guide for upgrade instructions.

**Note**: This release requires use of Java 11 or above.


## Bugs Fixed

* [ARTEMIS-3357](https://issues.apache.org/jira/browse/ARTEMIS-3357) - Setting multicast: prefix explicitely when reconnecting a durable AMQP client causes the queue to be renewed and all pending messages lost
* [ARTEMIS-3370](https://issues.apache.org/jira/browse/ARTEMIS-3370) - default-queue-routing-type is ignored when set to multicast
* [ARTEMIS-3609](https://issues.apache.org/jira/browse/ARTEMIS-3609) - Artemis's Core JMS 2 CompletionListener shouldn't be called within Netty thread
* [ARTEMIS-3819](https://issues.apache.org/jira/browse/ARTEMIS-3819) - stack traces in console output on browse queue due to missing validatedUser value
* [ARTEMIS-3871](https://issues.apache.org/jira/browse/ARTEMIS-3871) - ActiveMQ Artemis 2.23.0 -- mqtt 5.0, mqtt client can't   subscribe   multiple  share topic?
* [ARTEMIS-4016](https://issues.apache.org/jira/browse/ARTEMIS-4016) - Bridges created by management operations are removed on restart and config reload
* [ARTEMIS-4030](https://issues.apache.org/jira/browse/ARTEMIS-4030) - AMQ222010 (No such file or directory) during startup
* [ARTEMIS-4078](https://issues.apache.org/jira/browse/ARTEMIS-4078) - Divert filter not added/updated/removed on configuration change
* [ARTEMIS-4083](https://issues.apache.org/jira/browse/ARTEMIS-4083) - when artemis streaming enabled then artemis-core client is not closing inputstream for Bytes message, blocking deletion of file after its processed in windows
* [ARTEMIS-4084](https://issues.apache.org/jira/browse/ARTEMIS-4084) - Rolling back massive amounts of messages might crash broker
* [ARTEMIS-4085](https://issues.apache.org/jira/browse/ARTEMIS-4085) - Exclusive LVQ not working as expected
* [ARTEMIS-4089](https://issues.apache.org/jira/browse/ARTEMIS-4089) - Auto-deleted queue with active producer leaves producer disabled (or impotent)
* [ARTEMIS-4092](https://issues.apache.org/jira/browse/ARTEMIS-4092) - ./artemis upgrade backup is not created properly / incomplete
* [ARTEMIS-4096](https://issues.apache.org/jira/browse/ARTEMIS-4096) - AMQP Large Messages can be lost when sent through Clustered or Bridge
* [ARTEMIS-4098](https://issues.apache.org/jira/browse/ARTEMIS-4098) - AMQP messages missing correlation ID in console
* [ARTEMIS-4101](https://issues.apache.org/jira/browse/ARTEMIS-4101) - SecurityStore caches failed authentication result from LDAP connection failures
* [ARTEMIS-4103](https://issues.apache.org/jira/browse/ARTEMIS-4103) - Support journal-lock-acquisition-timeout in broker.xml
* [ARTEMIS-4106](https://issues.apache.org/jira/browse/ARTEMIS-4106) - Do not set property with empty key name when converting to OpenWire
* [ARTEMIS-4108](https://issues.apache.org/jira/browse/ARTEMIS-4108) - AMQP Drain can fail with Large Messages under load
* [ARTEMIS-4109](https://issues.apache.org/jira/browse/ARTEMIS-4109) - Unable to auto-delete queue for MQTT retained message
* [ARTEMIS-4114](https://issues.apache.org/jira/browse/ARTEMIS-4114) - Broker deadlock occurs when restarting another broker in the cluster
* [ARTEMIS-4115](https://issues.apache.org/jira/browse/ARTEMIS-4115) - ArrayIndexOutOfBoundsException when duplicate cache size is 0
* [ARTEMIS-4125](https://issues.apache.org/jira/browse/ARTEMIS-4125) - Address can be removed inadvertently
* [ARTEMIS-4126](https://issues.apache.org/jira/browse/ARTEMIS-4126) - Address not created automatically when sending MQTT message
* [ARTEMIS-4129](https://issues.apache.org/jira/browse/ARTEMIS-4129) - When HA does not configure the oldreplica number of directories parameter (max-saved-replicated-journals-size) for the master/primary, always the default value of 2
* [ARTEMIS-4132](https://issues.apache.org/jira/browse/ARTEMIS-4132) - broker uses anycast for amqp destination which is configured as multicast
* [ARTEMIS-4133](https://issues.apache.org/jira/browse/ARTEMIS-4133) - Message with null property value unable to be consumed via STOMP
* [ARTEMIS-4135](https://issues.apache.org/jira/browse/ARTEMIS-4135) - Mitigate NPE when browsing
* [ARTEMIS-4137](https://issues.apache.org/jira/browse/ARTEMIS-4137) - MQTT subscription queue clean-up can fail due to security
* [ARTEMIS-4145](https://issues.apache.org/jira/browse/ARTEMIS-4145) - MQTT shared sub queue may be inadvertently removed

## New Features

* [ARTEMIS-4136](https://issues.apache.org/jira/browse/ARTEMIS-4136) - Mirror sync replication

## Improvements

* [ARTEMIS-3085](https://issues.apache.org/jira/browse/ARTEMIS-3085) - Support registering IOCriticalErrorListener on the broker
* [ARTEMIS-3168](https://issues.apache.org/jira/browse/ARTEMIS-3168) - JAAS login module to convert existing Principal to an Artemis UserPrincipal
* [ARTEMIS-3178](https://issues.apache.org/jira/browse/ARTEMIS-3178) - Provide a way to limit the size of an address after paged
* [ARTEMIS-3707](https://issues.apache.org/jira/browse/ARTEMIS-3707) - ResourceAdapter improvements
* [ARTEMIS-3790](https://issues.apache.org/jira/browse/ARTEMIS-3790) - Support masked passwords when creating JMS connections
* [ARTEMIS-3866](https://issues.apache.org/jira/browse/ARTEMIS-3866) - Authorize management message sending using access control context subject
* [ARTEMIS-3875](https://issues.apache.org/jira/browse/ARTEMIS-3875) - Improve consumer/producer metrics
* [ARTEMIS-4042](https://issues.apache.org/jira/browse/ARTEMIS-4042) - DefaultSensitiveStringCodec - read ARTEMIS_DEFAULT_SENSITIVE_STRING_CODEC_KEY env if system property is not set 
* [ARTEMIS-4065](https://issues.apache.org/jira/browse/ARTEMIS-4065) - Improving Page Counting by using real records, and not use the journal extensive for every message sent
* [ARTEMIS-4077](https://issues.apache.org/jira/browse/ARTEMIS-4077) - Add an option to disable XML external entity processing
* [ARTEMIS-4091](https://issues.apache.org/jira/browse/ARTEMIS-4091) - Make scaleDown target more deterministic
* [ARTEMIS-4093](https://issues.apache.org/jira/browse/ARTEMIS-4093) - Expose properties and support resource adapter in J2EE environments
* [ARTEMIS-4100](https://issues.apache.org/jira/browse/ARTEMIS-4100) - Improve consistency and wording of CLI command descriptions
* [ARTEMIS-4112](https://issues.apache.org/jira/browse/ARTEMIS-4112) - DefaultSensitiveStringCodec don't set system property in scripts as env is read directly
* [ARTEMIS-4116](https://issues.apache.org/jira/browse/ARTEMIS-4116) - Implement management semaphore to avoid parallel operations being executed from user's persistently calling operations
* [ARTEMIS-4120](https://issues.apache.org/jira/browse/ARTEMIS-4120) - show labels for header field mqtt.qos.level
* [ARTEMIS-4122](https://issues.apache.org/jira/browse/ARTEMIS-4122) - Pull update from OpenLDAP
* [ARTEMIS-4123](https://issues.apache.org/jira/browse/ARTEMIS-4123) - Enable Strict-Transport-Security header
* [ARTEMIS-4124](https://issues.apache.org/jira/browse/ARTEMIS-4124) - Set the SameSite flag on all cookies
* [ARTEMIS-4131](https://issues.apache.org/jira/browse/ARTEMIS-4131) - Support custom maven local repo for karaf tests
* [ARTEMIS-4134](https://issues.apache.org/jira/browse/ARTEMIS-4134) - add version to initial boostrap log message, making it more obvious
* [ARTEMIS-4149](https://issues.apache.org/jira/browse/ARTEMIS-4149) - add watcher to login.config dir to trigger jass property reload

## Tasks

* [ARTEMIS-4110](https://issues.apache.org/jira/browse/ARTEMIS-4110) - tidy up some licence header issues
* [ARTEMIS-4127](https://issues.apache.org/jira/browse/ARTEMIS-4127) - Refactor multiprotocol JMS tests in AMQP package

## Dependency Upgrades

* [ARTEMIS-4099](https://issues.apache.org/jira/browse/ARTEMIS-4099) - Update to PostgreSQL 42.4.3
* [ARTEMIS-4117](https://issues.apache.org/jira/browse/ARTEMIS-4117) - Bump netty-codec-http from 4.1.82.Final to 4.1.86.Final
* [ARTEMIS-4138](https://issues.apache.org/jira/browse/ARTEMIS-4138) - Upgrade jackson version to 2.14.1