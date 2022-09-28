---
layout: default_md
title: ActiveMQ Artemis 2.26.0 Release Notes
title-class: page-title-artemis
type: artemis
---

A complete list of JIRAs for the 2.26.0 release can be found  * [here](https://issues.apache.org/jira/secure/ReleaseNote.jspa?version=12352297&projectId=12315920)

A list of commits can be found  * [here](commit-report-2.26.0).

**Note**: This release requires use of Java 11 or above.


# Release Notes - ActiveMQ Artemis - Version 2.26.0

#### Upgrading from older versions
1. We removed the *-all clients from ./lib/client in the assembly as part of [ARTEMIS-4006](https://issues.apache.org/jira/browse/ARTEMIS-4006). If you use these libraries they can be found at Maven Central, please refer to the [client class path documentation](https://activemq.apache.org/components/artemis/documentation/latest/client-classpath) for more information.
2. We removed ActiveMQ-Artemis rest as part of 2.26.0. If you still require activemq rest you can still have access to its latest version at [Maven central](https://mvnrepository.com/artifact/org.apache.activemq.rest/artemis-rest/2.25.0). You can still follow the steps on Rest from any [previous documentation](https://activemq.apache.org/components/artemis/documentation/2.24.0/rest.html), however you should stop using the module as it will not be maintained any more.
3. We removed web content from distribution and redirected to the console web requests with the root target as part of  [ARTEMIS-3980](https://issues.apache.org/jira/browse/ARTEMIS-3980). If you used to customize the index page or to add custom content in the web folder please refer to the [web-server documentation](https://activemq.apache.org/components/artemis/documentation/latest/web-server) for more information on disabling the redirect and enabling the web content.





## Bug
* [ARTEMIS-3748] - Cannot create docker for an older version of Artemis
* [ARTEMIS-3913] - MQTTReasonCodes byte loss of precision，must int type
* [ARTEMIS-3964] - Windows ping IPv4/6 commands have wrong time unit
* [ARTEMIS-3967] - Camel WAR pom.xml file incorrect and incomplete
* [ARTEMIS-3971] - remove vulnerable .js deps from javadoc output - jQuery, jQuery UI, jszip
* [ARTEMIS-3973] - High pressure on paging can leave address stuck in paging
* [ARTEMIS-3975] - examples pom enables snapshot repo for release artifacts
* [ARTEMIS-3978] - properties config - allow federation upstream configuration
* [ARTEMIS-3981] - empty docker image if Artemis release download returns 404
* [ARTEMIS-3984] - LegacyLDAPSecuritySettingPlugin shouldn't modify existing matches
* [ARTEMIS-3986] - Last value errors
* [ARTEMIS-3989] - ActiveMQServerControlImpl.getRoles doesn't return all the security role permissions
* [ARTEMIS-3990] - AMQP NettyReadable buffer does not consume readable bytes on string reads
* [ARTEMIS-3998] - Error setting broker properties for connectionRouters
* [ARTEMIS-3999] - Error setting extraParams for new acceptors via broker properties
* [ARTEMIS-4001] - properties config - have configuration refresh track properties urls
* [ARTEMIS-4003] - FlowControl on BridgeImpl is broken for Large Messages
* [ARTEMIS-4005] - e2e-tests module is broken due Dockerfile change change
* [ARTEMIS-4007] - properties config - complete feedback loop with server status attribute

## Improvement
* [ARTEMIS-3902] - Adding reason for Security failure on Audit Security Message 
* [ARTEMIS-3962] - Port filter updates from "Classic"
* [ARTEMIS-3983] - Update all base docker images to use Eclipse-Temurin

## Task
* [ARTEMIS-3934] - Restore settings equivalent to -XX:+AggressiveOpts
* [ARTEMIS-3969] - Remove extra-tests module
* [ARTEMIS-3970] - update keycloak used in example to 19.0.2
* [ARTEMIS-3980] - Remove web content from distribution
* [ARTEMIS-3987] - Remove ActiveMQ Artemis Rest
* [ARTEMIS-3988] - Move MMSFactoryTest tests from smoke-tests -> soak-tests
* [ARTEMIS-3995] - Mute System.out on maven plugins
* [ARTEMIS-4006] - remove '-all' repackaged clients from the assembly 

## Dependency upgrade
* [ARTEMIS-3985] - update to activemq 5.17.2
* [ARTEMIS-3996] - update to proton-j 0.34.0
* [ARTEMIS-3997] - update vertx-proton test dep to 4.3.3
* [ARTEMIS-4008] - Update to Qpid JMS 1.7.0
