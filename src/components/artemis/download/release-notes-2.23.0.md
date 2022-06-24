---
layout: default_md
title: ActiveMQ Artemis 2.23.0 Release Notes
title-class: page-title-artemis
type: artemis
---

A complete list of JIRAs for the 2.23.0 release can be found  * [here](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12315920&version=12351677)

A list of commits can be found  * [here](commit-report-2.23.0).

**Note**: This release requires use of Java 11 or above.

# Bug
 * [ARTEMIS-3376] - help text for "artemis address --no-anycast/--no-multicast" is incorrect
 * [ARTEMIS-3810] - XID Resumes on already Active Transactions should not throw any error
 * [ARTEMIS-3811] - QueueBinding type will clash with cluster connections
 * [ARTEMIS-3816] - Connection router null pointer dereferences
 * [ARTEMIS-3823] - Connection router - consistent hash modulo needs to deal with negative hash values
 * [ARTEMIS-3824] - browse message screen does not display the reply-to address for amqp messages
 * [ARTEMIS-3826] - properties config - allow address and queue configuration
 * [ARTEMIS-3827] - OpenWire - Anonymous producers risk loosing their sent messages
 * [ARTEMIS-3830] - Lots of large messages prevent startup when using JDBC backend
 * [ARTEMIS-3833] - Distributed AMQP large messages lose JMSCorrelationID
 * [ARTEMIS-3836] - Print-data may not print messages when middle stream is executed
 * [ARTEMIS-3837] - Support getData() on AMQP Large Messages
 * [ARTEMIS-3848] - High cpu usage on ReadWrite locks
 * [ARTEMIS-3853] - Ping command for IPv6 is wrong on Windows
 
# New Feature
 * [ARTEMIS-3700] - Provide JakartaEE 10 artefacts and support
 * [ARTEMIS-3817] - Management schedulePageCleanup operation on AddressControl

# Improvement
 * [ARTEMIS-3759] - Allow for Mirroring (Broker Connections) to specify a specific set of addresses to send events, as is done for a cluster connection
 * [ARTEMIS-3770] - Refactor MQTT handling of client ID
 * [ARTEMIS-3807] - Simplify Message Redistributor avoiding races
 * [ARTEMIS-3808] - Support starting/stopping the embedded web server via mangement
 * [ARTEMIS-3821] - header field "properties.absoluteExpiryTime" is not annotated with readable date-time
 * [ARTEMIS-3822] - Get broker name via management
 * [ARTEMIS-3825] - Improve print-data to recognize queues that do not exist
 * [ARTEMIS-3835] - Deprecate addressesSettings configuration attribute with double plural in place of addressSettings

# Dependency upgrade
 * [ARTEMIS-3806] - Upgrade logging dependencies
 * [ARTEMIS-3812] - Upgrade Micrometer
 * [ARTEMIS-3814] - Update to ActiveMQ 5.17.1
 * [ARTEMIS-3838] - Update Netty to 4.1.77.Final
 * [ARTEMIS-3844] - Update maven dependencies
 * [ARTEMIS-3845] - Update hawtio
 * [ARTEMIS-3849] - Upgrade Spring Framework to 5.3.20
