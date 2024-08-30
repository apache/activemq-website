---
layout: default_md
title: ActiveMQ Artemis 2.36.0 Release Notes
title-class: page-title-artemis
type: artemis
---
 - [A list of commits](commit-report-2.36.0).

 - Please see the ["Versions"](https://activemq.apache.org/components/artemis/documentation/latest/versions.html) chapter in the User Guide for upgrade instructions.

**Note**: This release requires use of Java 11 or above.


## Bugs Fixed

* [ARTEMIS-2892](https://issues.apache.org/jira/browse/ARTEMIS-2892) - Replication stopped working after many failovers
* [ARTEMIS-3509](https://issues.apache.org/jira/browse/ARTEMIS-3509) - STOMP Websocket client disconnected after ConcurrentModificationException in Broker
* [ARTEMIS-4667](https://issues.apache.org/jira/browse/ARTEMIS-4667) - JMX Recovery operation triggers ClassCastException
* [ARTEMIS-4747](https://issues.apache.org/jira/browse/ARTEMIS-4747) - UNREACHABLE_CODE.EXCEPTION This statement in the source code is unreachable
* [ARTEMIS-4794](https://issues.apache.org/jira/browse/ARTEMIS-4794) - CoreBridge: Duplicate message when bridge is stopped/Lost message when bridge is paused while messages being produced to target node.
* [ARTEMIS-4816](https://issues.apache.org/jira/browse/ARTEMIS-4816) - Docker image echo's admin credentials during startup
* [ARTEMIS-4817](https://issues.apache.org/jira/browse/ARTEMIS-4817) - AMQP Federation address policy doesn't allow credit configuration to override parent settings
* [ARTEMIS-4820](https://issues.apache.org/jira/browse/ARTEMIS-4820) - AMQP TTL message property being treated as int instead of uint
* [ARTEMIS-4821](https://issues.apache.org/jira/browse/ARTEMIS-4821) - OperationContext may leak between servers in embedded/test mode on SendAckThread on a bridge
* [ARTEMIS-4826](https://issues.apache.org/jira/browse/ARTEMIS-4826) - ICAST_INTEGER_MULTIPLY_CAST_TO_LONG value too high
* [ARTEMIS-4827](https://issues.apache.org/jira/browse/ARTEMIS-4827) - UNREACHABLE_CODE
* [ARTEMIS-4902](https://issues.apache.org/jira/browse/ARTEMIS-4902) - Downstream federation example not compliant with xsd
* [ARTEMIS-4905](https://issues.apache.org/jira/browse/ARTEMIS-4905) - PeriodicConnectionExpiry plugin comparison error treating seconds as milli seconds
* [ARTEMIS-4910](https://issues.apache.org/jira/browse/ARTEMIS-4910) - DivertConfiguration encoding is broken
* [ARTEMIS-4912](https://issues.apache.org/jira/browse/ARTEMIS-4912) - Filter is not enforced when sending message to queue via web console
* [ARTEMIS-4914](https://issues.apache.org/jira/browse/ARTEMIS-4914) - Clarify docs on core + client ID
* [ARTEMIS-4919](https://issues.apache.org/jira/browse/ARTEMIS-4919) - AMQP protocol level errors not handled cleanly
* [ARTEMIS-4922](https://issues.apache.org/jira/browse/ARTEMIS-4922) - Spurious warn message when OpenWire client disconnects
* [ARTEMIS-4925](https://issues.apache.org/jira/browse/ARTEMIS-4925) - Mirroring and Replication do not work in combination
* [ARTEMIS-4931](https://issues.apache.org/jira/browse/ARTEMIS-4931) - BridgeConfiguration encoding is broken
* [ARTEMIS-4936](https://issues.apache.org/jira/browse/ARTEMIS-4936) - Verify response correlationId in Core client
* [ARTEMIS-4941](https://issues.apache.org/jira/browse/ARTEMIS-4941) - Remove update estimate after ARTEMIS-3067
* [ARTEMIS-4948](https://issues.apache.org/jira/browse/ARTEMIS-4948) - Clarify failover-on-shutdown-doc
* [ARTEMIS-4949](https://issues.apache.org/jira/browse/ARTEMIS-4949) - java.nio.channels.ClosedChannelException with slower devices and NIO journal
* [ARTEMIS-4950](https://issues.apache.org/jira/browse/ARTEMIS-4950) - MBeanGuard throws an NPE
* [ARTEMIS-4951](https://issues.apache.org/jira/browse/ARTEMIS-4951) - Multiple connection router occurrences with same policy cause parser error

## Improvements

* [ARTEMIS-4764](https://issues.apache.org/jira/browse/ARTEMIS-4764) - Increase automation for dependecy updates
* [ARTEMIS-4814](https://issues.apache.org/jira/browse/ARTEMIS-4814) - Remove linear iteration to get direct bindings
* [ARTEMIS-4818](https://issues.apache.org/jira/browse/ARTEMIS-4818) - Improve support for multiple broker plugins from broker properties
* [ARTEMIS-4913](https://issues.apache.org/jira/browse/ARTEMIS-4913) - Provide more details on error callbacks
* [ARTEMIS-4920](https://issues.apache.org/jira/browse/ARTEMIS-4920) - Strip leading forward slash from IP address
* [ARTEMIS-4921](https://issues.apache.org/jira/browse/ARTEMIS-4921) - Include protocol name in disconnection log message
* [ARTEMIS-4923](https://issues.apache.org/jira/browse/ARTEMIS-4923) - Reduce synchronization in ManagementServiceImpl
* [ARTEMIS-4930](https://issues.apache.org/jira/browse/ARTEMIS-4930) - Refactor storage manager tests

## Tasks

* [ARTEMIS-4822](https://issues.apache.org/jira/browse/ARTEMIS-4822) - improve build reproducibility
* [ARTEMIS-4828](https://issues.apache.org/jira/browse/ARTEMIS-4828) - Remove unused variables
* [ARTEMIS-4829](https://issues.apache.org/jira/browse/ARTEMIS-4829) - Use lambdas consistently
* [ARTEMIS-4831](https://issues.apache.org/jira/browse/ARTEMIS-4831) - consistently use surefire default behaviour around test failure
* [ARTEMIS-4832](https://issues.apache.org/jira/browse/ARTEMIS-4832) - direct test output to file by default
* [ARTEMIS-4833](https://issues.apache.org/jira/browse/ARTEMIS-4833) - Remove redundant type arguments
* [ARTEMIS-4845](https://issues.apache.org/jira/browse/ARTEMIS-4845) - remove unnecessary plugin from extra openwire tests
* [ARTEMIS-4863](https://issues.apache.org/jira/browse/ARTEMIS-4863) - misc pom tweaks
* [ARTEMIS-4872](https://issues.apache.org/jira/browse/ARTEMIS-4872) - use explicit annotationProcessorPaths compiler configuration
* [ARTEMIS-4873](https://issues.apache.org/jira/browse/ARTEMIS-4873) - Add an AMQP federation example showing pull mode
* [ARTEMIS-4880](https://issues.apache.org/jira/browse/ARTEMIS-4880) - remove unnecessary dependency from extra openwire tests
* [ARTEMIS-4918](https://issues.apache.org/jira/browse/ARTEMIS-4918) - artemis-maven-plugin pom cleanups
* [ARTEMIS-4938](https://issues.apache.org/jira/browse/ARTEMIS-4938) - Update commons-lang to 3.15.0

## Dependency Upgrades

* [ARTEMIS-4823](https://issues.apache.org/jira/browse/ARTEMIS-4823) - Upgrade BouncyCastle to 1.78.1
* [ARTEMIS-4835](https://issues.apache.org/jira/browse/ARTEMIS-4835) - Bump JCTools from 4.0.2 to 4.0.5
* [ARTEMIS-4836](https://issues.apache.org/jira/browse/ARTEMIS-4836) - Update to Mockito 5.12.0
* [ARTEMIS-4837](https://issues.apache.org/jira/browse/ARTEMIS-4837) - Update to Groovy 4.0.22
* [ARTEMIS-4838](https://issues.apache.org/jira/browse/ARTEMIS-4838) - Bump version.batavia from 1.0.10.Final to 1.0.15.Final
* [ARTEMIS-4839](https://issues.apache.org/jira/browse/ARTEMIS-4839) - Bump org.jline:jline from 3.25.1 to 3.26.2
* [ARTEMIS-4840](https://issues.apache.org/jira/browse/ARTEMIS-4840) - Bump org.apache.commons:commons-dbcp2 from 2.11.0 to 2.12.0
* [ARTEMIS-4841](https://issues.apache.org/jira/browse/ARTEMIS-4841) - Bump jetty.version from 10.0.20 to 10.0.22
* [ARTEMIS-4843](https://issues.apache.org/jira/browse/ARTEMIS-4843) - Bump log4j.version from 2.22.1 to 2.23.1
* [ARTEMIS-4844](https://issues.apache.org/jira/browse/ARTEMIS-4844) - Update jackson to 2.17.2
* [ARTEMIS-4846](https://issues.apache.org/jira/browse/ARTEMIS-4846) - Bump version.org.jacoco.plugin from 0.8.11 to 0.8.12
* [ARTEMIS-4847](https://issues.apache.org/jira/browse/ARTEMIS-4847) - update jgroups to 5.3.9
* [ARTEMIS-4848](https://issues.apache.org/jira/browse/ARTEMIS-4848) - Bump org.codehaus.mojo:javacc-maven-plugin from 2.6 to 3.1.0
* [ARTEMIS-4849](https://issues.apache.org/jira/browse/ARTEMIS-4849) - Bump ZooKeeper from 3.9.1 to 3.9.2
* [ARTEMIS-4850](https://issues.apache.org/jira/browse/ARTEMIS-4850) - Bump owasp.version from 9.0.9 to 9.2.0
* [ARTEMIS-4851](https://issues.apache.org/jira/browse/ARTEMIS-4851) - Bump curator.version from 5.6.0 to 5.7.0
* [ARTEMIS-4852](https://issues.apache.org/jira/browse/ARTEMIS-4852) - Bump slf4j.version from 2.0.12 to 2.0.13
* [ARTEMIS-4853](https://issues.apache.org/jira/browse/ARTEMIS-4853) - Bump selenium.version from 4.17.0 to 4.22.0
* [ARTEMIS-4854](https://issues.apache.org/jira/browse/ARTEMIS-4854) - Bump picocli.version from 4.7.5 to 4.7.6
* [ARTEMIS-4855](https://issues.apache.org/jira/browse/ARTEMIS-4855) - Bump org.asciidoctor:asciidoctor-maven-plugin from 2.2.4 to 3.0.0
* [ARTEMIS-4856](https://issues.apache.org/jira/browse/ARTEMIS-4856) - Bump org.asciidoctor:asciidoctorj-pdf from 2.3.9 to 2.3.17
* [ARTEMIS-4857](https://issues.apache.org/jira/browse/ARTEMIS-4857) - Bump testcontainers.version from 1.19.4 to 1.19.8
* [ARTEMIS-4858](https://issues.apache.org/jira/browse/ARTEMIS-4858) - Bump spring.version from 5.3.33 to 5.3.37
* [ARTEMIS-4859](https://issues.apache.org/jira/browse/ARTEMIS-4859) - Bump org.jboss.marshalling:jboss-marshalling-river from 2.0.9.Final to 2.1.4.Final
* [ARTEMIS-4860](https://issues.apache.org/jira/browse/ARTEMIS-4860) - Bump org.codehaus.mojo:findbugs-maven-plugin from 2.5.2 to 3.0.5
* [ARTEMIS-4861](https://issues.apache.org/jira/browse/ARTEMIS-4861) - Bump org.codehaus.mojo:findbugs-maven-plugin from 2.5.2 to 3.0.5
* [ARTEMIS-4862](https://issues.apache.org/jira/browse/ARTEMIS-4862) - Bump check-leak-version from 0.8 to 0.11
* [ARTEMIS-4864](https://issues.apache.org/jira/browse/ARTEMIS-4864) - Bump org.easymock:easymock from 5.2.0 to 5.3.0
* [ARTEMIS-4865](https://issues.apache.org/jira/browse/ARTEMIS-4865) - Bump org.apache.commons:commons-text from 1.10.0 to 1.12.0
* [ARTEMIS-4866](https://issues.apache.org/jira/browse/ARTEMIS-4866) - Bump com.google.cloud.tools:jib-maven-plugin from 3.3.2 to 3.4.3
* [ARTEMIS-4867](https://issues.apache.org/jira/browse/ARTEMIS-4867) - Bump com.sun.winsw:winsw from 2.7.0 to 2.9.0
* [ARTEMIS-4868](https://issues.apache.org/jira/browse/ARTEMIS-4868) - Bump byteman.version from 4.0.18 to 4.0.23
* [ARTEMIS-4869](https://issues.apache.org/jira/browse/ARTEMIS-4869) - Update to ErrorProne 2.29.2
* [ARTEMIS-4870](https://issues.apache.org/jira/browse/ARTEMIS-4870) - Bump com.puppycrawl.tools:checkstyle from 10.16.0 to 10.17.0
* [ARTEMIS-4871](https://issues.apache.org/jira/browse/ARTEMIS-4871) - Bump org.osgi:osgi.cmpn from 6.0.0 to 7.0.0
* [ARTEMIS-4874](https://issues.apache.org/jira/browse/ARTEMIS-4874) - Bump org.codehaus.mojo:exec-maven-plugin from 3.0.0 to 3.3.0
* [ARTEMIS-4875](https://issues.apache.org/jira/browse/ARTEMIS-4875) - Bump activemq5-version from 5.18.3 to 5.18.4
* [ARTEMIS-4876](https://issues.apache.org/jira/browse/ARTEMIS-4876) - Bump commons-codec:commons-codec from 1.16.0 to 1.17.1
* [ARTEMIS-4877](https://issues.apache.org/jira/browse/ARTEMIS-4877) - Bump jakarta.inject:jakarta.inject-api from 1.0.3 to 1.0.5
* [ARTEMIS-4878](https://issues.apache.org/jira/browse/ARTEMIS-4878) - Bump org.apache.maven.resolver:maven-resolver-api from 1.9.6 to 1.9.20
* [ARTEMIS-4879](https://issues.apache.org/jira/browse/ARTEMIS-4879) - Bump jmh.version from 1.26 to 1.37
* [ARTEMIS-4881](https://issues.apache.org/jira/browse/ARTEMIS-4881) - Bump org.apache.maven:maven-artifact from 3.8.5 to 3.9.8
* [ARTEMIS-4882](https://issues.apache.org/jira/browse/ARTEMIS-4882) - Bump org.apache.qpid:qpid-jms-client from 1.10.0 to 1.11.0
* [ARTEMIS-4883](https://issues.apache.org/jira/browse/ARTEMIS-4883) - Bump org.codehaus.woodstox:woodstox-core-asl from 4.4.0 to 4.4.1
* [ARTEMIS-4885](https://issues.apache.org/jira/browse/ARTEMIS-4885) - Bump version.jaxb.runtime from 2.3.3 to 2.3.9
* [ARTEMIS-4886](https://issues.apache.org/jira/browse/ARTEMIS-4886) - Bump org.apache.maven.plugins:maven-pmd-plugin from 3.21.2 to 3.23.0
* [ARTEMIS-4887](https://issues.apache.org/jira/browse/ARTEMIS-4887) - Bump org.apache.hadoop:hadoop-minikdc from 3.3.1 to 3.4.0
* [ARTEMIS-4888](https://issues.apache.org/jira/browse/ARTEMIS-4888) - Bump org.postgresql:postgresql from 42.7.2 to 42.7.3
* [ARTEMIS-4889](https://issues.apache.org/jira/browse/ARTEMIS-4889) - Bump org.apache.maven:maven-plugin-api from 3.3.3 to 3.9.8
* [ARTEMIS-4890](https://issues.apache.org/jira/browse/ARTEMIS-4890) - Bump maven-antrun-plugin from 1.8 to 3.1.0 in artemis-dto
* [ARTEMIS-4891](https://issues.apache.org/jira/browse/ARTEMIS-4891) - Bump org.hamcrest:hamcrest from 2.1 to 2.2
* [ARTEMIS-4892](https://issues.apache.org/jira/browse/ARTEMIS-4892) - Bump io.micrometer:micrometer-core from 1.12.2 to 1.13.2
* [ARTEMIS-4893](https://issues.apache.org/jira/browse/ARTEMIS-4893) - Bump org.codehaus.mojo:build-helper-maven-plugin from 1.8 to 3.6.0
* [ARTEMIS-4894](https://issues.apache.org/jira/browse/ARTEMIS-4894) - Bump com.google.guava:guava from 33.0.0-jre to 33.2.1-jre
* [ARTEMIS-4895](https://issues.apache.org/jira/browse/ARTEMIS-4895) - Bump org.apache.maven.plugins:maven-plugin-plugin from 3.6.0 to 3.13.1
* [ARTEMIS-4896](https://issues.apache.org/jira/browse/ARTEMIS-4896) - Bump org.hdrhistogram:HdrHistogram from 2.1.12 to 2.2.2
* [ARTEMIS-4897](https://issues.apache.org/jira/browse/ARTEMIS-4897) - Bump org.apache.servicemix.tooling:depends-maven-plugin from 1.2 to 1.5.0
* [ARTEMIS-4898](https://issues.apache.org/jira/browse/ARTEMIS-4898) - Bump org.junit:junit-bom from 5.10.2 to 5.10.3
* [ARTEMIS-4899](https://issues.apache.org/jira/browse/ARTEMIS-4899) - Bump org.apache.directory.jdbm:apacheds-jdbm2 from 2.0.0-M1 to 2.0.0-M3
* [ARTEMIS-4900](https://issues.apache.org/jira/browse/ARTEMIS-4900) - Bump version.org.jacoco from 0.8.11 to 0.8.12
* [ARTEMIS-4901](https://issues.apache.org/jira/browse/ARTEMIS-4901) - Bump owasp.version from 9.2.0 to 10.0.0
* [ARTEMIS-4903](https://issues.apache.org/jira/browse/ARTEMIS-4903) - Use parent version of maven-plugin-tools
* [ARTEMIS-4907](https://issues.apache.org/jira/browse/ARTEMIS-4907) - update commons-configuration2 to 2.11.0
* [ARTEMIS-4908](https://issues.apache.org/jira/browse/ARTEMIS-4908) - Update to commons-logging 1.3.3
* [ARTEMIS-4917](https://issues.apache.org/jira/browse/ARTEMIS-4917) - Update to apache parent pom 33
* [ARTEMIS-4940](https://issues.apache.org/jira/browse/ARTEMIS-4940) - update to protonj2 test driver 1.0.0-M21
* [ARTEMIS-4942](https://issues.apache.org/jira/browse/ARTEMIS-4942) - Bump org.apache.maven.plugins:maven-pmd-plugin from 3.23.0 to 3.24.0
* [ARTEMIS-4943](https://issues.apache.org/jira/browse/ARTEMIS-4943) - Bump owasp.version from 10.0.0 to 10.0.3
* [ARTEMIS-4944](https://issues.apache.org/jira/browse/ARTEMIS-4944) - Bump testcontainers.version from 1.19.8 to 1.20.0
* [ARTEMIS-4945](https://issues.apache.org/jira/browse/ARTEMIS-4945) - Bump netty.version from 4.1.111.Final to 4.1.112.Final
* [ARTEMIS-4946](https://issues.apache.org/jira/browse/ARTEMIS-4946) - Bump selenium.version from 4.22.0 to 4.23.0
* [ARTEMIS-4953](https://issues.apache.org/jira/browse/ARTEMIS-4953) - update to activemq 5.18.5