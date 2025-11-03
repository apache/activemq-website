---
layout: default_md
title: ActiveMQ Artemis 2.44.0 Release Notes
title-class: page-title-artemis
type: artemis
---
 - [A list of commits](commit-report-2.44.0).

 - Please see the ["Versions"](https://activemq.apache.org/components/artemis/documentation/latest/versions.html) chapter in the User Guide for upgrade instructions.

**Note**: This release requires use of Java 17 or above.


## Bugs Fixed

* [ARTEMIS-4932](https://issues.apache.org/jira/browse/ARTEMIS-4932) - Reference, returned from function 'defaultFactory.getScheme()String' at URISchema.java:53, may be null and is dereferenced at URISchema.java:53.
* [ARTEMIS-5163](https://issues.apache.org/jira/browse/ARTEMIS-5163) - Artemis fails to send mqtt will message using mutual TLS
* [ARTEMIS-5374](https://issues.apache.org/jira/browse/ARTEMIS-5374) - JDK 24 Support - getSubject is not supported
* [ARTEMIS-5662](https://issues.apache.org/jira/browse/ARTEMIS-5662) - NegativeArraySizeException in StringSimpleStringPool's constructor
* [ARTEMIS-5701](https://issues.apache.org/jira/browse/ARTEMIS-5701) - artemis-junit-5 in 2.43.0 uses junit 6
* [ARTEMIS-5712](https://issues.apache.org/jira/browse/ARTEMIS-5712) - Fix HAProxy test
* [ARTEMIS-5717](https://issues.apache.org/jira/browse/ARTEMIS-5717) - BrokerConnection Receiver would lose messages on routing type mismatch
* [ARTEMIS-5718](https://issues.apache.org/jira/browse/ARTEMIS-5718) - Fix default max-hops during broker instance creation
* [ARTEMIS-5719](https://issues.apache.org/jira/browse/ARTEMIS-5719) - Login to web console causes logout from other web consoles

## Improvements

* [ARTEMIS-5711](https://issues.apache.org/jira/browse/ARTEMIS-5711) - Enable support for building and running on Java 25
* [ARTEMIS-5723](https://issues.apache.org/jira/browse/ARTEMIS-5723) - Add a setting to disable HTTP/2

## Tests

* [ARTEMIS-5722](https://issues.apache.org/jira/browse/ARTEMIS-5722) - Improve test TimedBufferMovementTest

## Dependency Upgrades

* [ARTEMIS-5702](https://issues.apache.org/jira/browse/ARTEMIS-5702) - Bump jetty.version from 12.1.1 to 12.1.3
* [ARTEMIS-5703](https://issues.apache.org/jira/browse/ARTEMIS-5703) - Bump version.org.jacoco.plugin from 0.8.13 to 0.8.14
* [ARTEMIS-5704](https://issues.apache.org/jira/browse/ARTEMIS-5704) - Bump activemq5-version from 5.19.0 to 5.19.1
* [ARTEMIS-5705](https://issues.apache.org/jira/browse/ARTEMIS-5705) - Bump org.apache.maven.plugins:maven-pmd-plugin from 3.27.0 to 3.28.0
* [ARTEMIS-5706](https://issues.apache.org/jira/browse/ARTEMIS-5706) - Bump io.micrometer:micrometer-core from 1.15.4 to 1.15.5
* [ARTEMIS-5707](https://issues.apache.org/jira/browse/ARTEMIS-5707) - Bump owasp.version from 12.1.6 to 12.1.8
* [ARTEMIS-5708](https://issues.apache.org/jira/browse/ARTEMIS-5708) - Bump netty.version from 4.1.127.Final to 4.1.128.Final
* [ARTEMIS-5709](https://issues.apache.org/jira/browse/ARTEMIS-5709) - Bump byteman.version from 4.0.25 to 4.0.26
* [ARTEMIS-5710](https://issues.apache.org/jira/browse/ARTEMIS-5710) - Bump com.puppycrawl.tools:checkstyle from 11.1.0 to 12.1.0
* [ARTEMIS-5713](https://issues.apache.org/jira/browse/ARTEMIS-5713) - Bump selenium.version from 4.36.0 to 4.37.0
* [ARTEMIS-5714](https://issues.apache.org/jira/browse/ARTEMIS-5714) - Bump org.asciidoctor:asciidoctorj-pdf from 2.3.20 to 2.3.21
* [ARTEMIS-5715](https://issues.apache.org/jira/browse/ARTEMIS-5715) - Bump org.codehaus.mojo:exec-maven-plugin from 3.6.1 to 3.6.2
* [ARTEMIS-5716](https://issues.apache.org/jira/browse/ARTEMIS-5716) - Bump org.apache.groovy:groovy-all from 5.0.1 to 5.0.2