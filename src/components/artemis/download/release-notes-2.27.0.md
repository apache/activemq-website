---
layout: default_md
title: ActiveMQ Artemis 2.27.0 Release Notes
title-class: page-title-artemis
type: artemis
---

 - [A complete list of JIRAs](https://issues.apache.org/jira/secure/ReleaseNote.jspa?version=12352297&projectId=12315920) for the 2.27.0 release.

 - [A list of commits](commit-report-2.27.0).

 - Please see the "Versions" chapter in the User Guide for upgrade instructions.

**Note**: This release requires use of Java 11 or above.

## Bug
 * [ARTEMIS-3264] - Core to AMQP conversion error causes client disconnect
 * [ARTEMIS-4002] - Support env $JAVA_ARGS_APPEND to override by appending to the java command used by the scripts
 * [ARTEMIS-4010] - LegacyLDAPSecuritySettingPlugin missing data
 * [ARTEMIS-4013] - PostgresLargeObjectManager does incorrectly unwrap the jdbc connection
 * [ARTEMIS-4024] - Avoid excessive NativeMemory allocation when sending OpenWire Multi mega sized messages in openwire
 * [ARTEMIS-4025] - properties config -  provide error status for invalid properties
 * [ARTEMIS-4026] - fix a couple of logging errors in connection-router classes
 * [ARTEMIS-4028] - properties config - provide checksum read status for properties
 * [ARTEMIS-4029] - PageCleanup may OME if many pages are cleared all at once
 * [ARTEMIS-4033] - Update replay descriptions on the Management Controllers
 * [ARTEMIS-4035] - All consumers of federated queue drop if only one consumer drops
 * [ARTEMIS-4045] - AMQ224041: Failed to deliver in mirror
 * [ARTEMIS-4049] - Creating user fails on Windows with space in instance path
 * [ARTEMIS-4057] - Backup last OOME heap dump fails on Windows
 * [ARTEMIS-4071] - Erroneus audit log messages due to console logouts
 * [ARTEMIS-4079] - CLI retry doesn't work sometimes
 * [ARTEMIS-4089] - Auto-deleted queue with active producer leaves producer disabled (or impotent)

## New Feature
 * [ARTEMIS-4022] - Display "auto-delete" queue/address status column or attribute in web console
 * [ARTEMIS-4081] - Upgrade command

## Improvement
 * [ARTEMIS-3763] - Use configurable time margin for checking offset between database server and broker
 * [ARTEMIS-3902] - Adding reason for Security failure on Audit Security Message 
 * [ARTEMIS-4020] - switch to using SLF4J for logging API and use Log4j 2 for broker distribution
 * [ARTEMIS-4041] - Improve criticalIO reporting
 * [ARTEMIS-4042] - DefaultSensitiveStringCodec - read ARTEMIS_DEFAULT_SENSITIVE_STRING_CODEC_KEY env if system property is not set 
 * [ARTEMIS-4056] - Optimize Paging Startup And Management operation
 * [ARTEMIS-4064] - Harden MetricsManager
 * [ARTEMIS-4073] - Page counters can go off sync with multiple producers in the same address
 * [ARTEMIS-4074] - AMQ144009: Could not get a file in 5 seconds: diagnostics needed

## Task
 * [ARTEMIS-4037] - Use random alphanumeric strings for MQTTRetainMessageManagerTest
 * [ARTEMIS-4043] - cleanup some leftover artemis-rest docs and dependency management
 * [ARTEMIS-4048] - stop the '-all' client modules grabbing their own -SNAPSHOT sources unnecessarily during build
 * [ARTEMIS-4053] - ensure scm tag reference on main uses a non-release version
 * [ARTEMIS-4054] - configure release plugin to auto version submodules and pre-set desired tag name format
 * [ARTEMIS-4055] - update to apache parent pom 27
 * [ARTEMIS-4061] - update maven-bundle-plugin to 5.1.8
 * [ARTEMIS-4067] - remove unused site distributionManagement settings
 * [ARTEMIS-4068] - speed up release preparation process
 * [ARTEMIS-4076] - add JDK 19 run to CI jobs

## Dependency upgrade
 * [ARTEMIS-4038] - Upgrade groovy version to 4.0.5
 * [ARTEMIS-4039] - Upgrade to jackson 2.13.4 and jackson-databind 2.13.4.2
 * [ARTEMIS-4040] - Update to Netty 4.1.82
 * [ARTEMIS-4060] - Upgrade Commons Text to 1.10.0
 * [ARTEMIS-4062] - Update to Mockito 4.8.0
 * [ARTEMIS-4063] - Update to jacoco 0.8.8


