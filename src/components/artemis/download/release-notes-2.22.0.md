---
layout: default_md
title: ActiveMQ Artemis 2.22.0 Release Notes
title-class: page-title-artemis
type: artemis
---

A complete list of JIRAs for the 2.22.0 release can be found  * [here]https://issues.apache.org/jira/secure/ReleaseNote.jspa?version=12351488&styleName=Html&projectId=12315920&Create=Create)

A list of commits can be found  * [here](commit-report-2.22.0).

**Note**: This release requires use of Java 11 or above.

# Bug
 * [ARTEMIS-3744] - NPE with empty security-manager config in bootstrap.xml
 * [ARTEMIS-3751] - Artemis cuts off large bytes messages with compression that exceed the minimal large message size
 * [ARTEMIS-3753] - Messages are not deleted in the mirror broker if they were distributed from the main to another broker in the cluster
 * [ARTEMIS-3755] - Mitigate NPE related to fail-back
 * [ARTEMIS-3756] - Connectors extra parameters are not passed throught the URI
 * [ARTEMIS-3764] - Incorrect CONNACK return code for MQTT 5
 * [ARTEMIS-3769] - Browsing iterator could cause NoSuchElementException
 * [ARTEMIS-3773] - Remove defunct rate references from web console
 * [ARTEMIS-3774] - Support user properties on MQTT will message
 * [ARTEMIS-3775] - Don't carry forward MQTT topic aliases to new connection
 * [ARTEMIS-3776] - Inconsistency with older OpenWire clients due to AMQ-6431 with messageID>Integer.MaxValue
 * [ARTEMIS-3777] - Fix MQTT request/response + nolocal
 * [ARTEMIS-3778] - Reaper reporting TimeoutException on Reaper threads
 * [ARTEMIS-3781] - Send PUBREC on duplicate PUBLISH for MQTT QoS 2
 * [ARTEMIS-3788] - Don't send MQTT will message if will flag = false
 * [ARTEMIS-3789] - Respect session expiry interval on MQTT disconnect message
 * [ARTEMIS-3791] - Leak on OpenWire Sessions after failover
 * [ARTEMIS-3798] - Some OpenWire message details dropped during upgrade to 2.21.0
 * [ARTEMIS-3799] - Ping command is wrong on Windows
 * [ARTEMIS-3801] - Not getting messages on MQTT subscriptions with $
 * [ARTEMIS-3802] - Possible issue with concurrent removing on Queue references and Mirror
 * [ARTEMIS-3803] - The first NetworkHealthCheck execution uses default commands

# Improvement
 * [ARTEMIS-3083] - Set a default producer-window-size on cluster connection
 * [ARTEMIS-3733] - Destination cache size too small for OpenWire clients
 * [ARTEMIS-3741] - Cache MBeanInfoHelper results
 * [ARTEMIS-3749] - Improvements to e2e-tests module
 * [ARTEMIS-3757] - properties config - allow system and env var substitution
 * [ARTEMIS-3761] - Cleanup paged messages in the middle of the stream
 * [ARTEMIS-3765] - Display validated user in Hawtio
 * [ARTEMIS-3771] - Rework destination handling for the OpenWire-protocol
 * [ARTEMIS-3779] - Critical IO Error to be logged as Error
 * [ARTEMIS-3780] - OpenWire messageConverter throws exceptions for all user properties
 * [ARTEMIS-3786] - properties config - allow conversion from String for NamedPropertyConfiguration
 * [ARTEMIS-3800] - Allow CLI to delete address with queues
 * [ARTEMIS-3805] - Change default Bridge Producer Window Size to 1MB

# Task
 * [ARTEMIS-3758] - do some tidy up of optional openwire systests module
 * [ARTEMIS-3762] - refresh package dependency versions for doc build
 * [ARTEMIS-3782] - use existing managed version for shade plugin uses
 * [ARTEMIS-3783] - rationalise config for alternate jakarta spec versions
 * [ARTEMIS-3804] - make version available for reference in the user manual

# Dependency upgrade
 * [ARTEMIS-3740] - Upgrade Johnzon
 * [ARTEMIS-3752] - Upgrade Spring Framework to 5.3.19
 * [ARTEMIS-3754] - Upgrade tomcat-servlet-api to 8.5.78
 * [ARTEMIS-3760] - Upgrade jackson version to 2.13.2
 * [ARTEMIS-3768] - Update to Qpid JMS 1.6.0
 * [ARTEMIS-3772] - Update to Mockito 4.4.0