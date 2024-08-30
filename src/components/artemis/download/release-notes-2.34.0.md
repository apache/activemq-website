---
layout: default_md
title: ActiveMQ Artemis 2.34.0 Release Notes
title-class: page-title-artemis
type: artemis
---
 - [A list of commits](commit-report-2.34.0).

 - Please see the ["Versions"](https://activemq.apache.org/components/artemis/documentation/latest/versions.html) chapter in the User Guide for upgrade instructions.

**Note**: This release requires use of Java 11 or above.


## Bugs Fixed

* [ARTEMIS-1551](https://issues.apache.org/jira/browse/ARTEMIS-1551) - Conversion of most of the properties is not working when crossing protocols.
* [ARTEMIS-1634](https://issues.apache.org/jira/browse/ARTEMIS-1634) - Coverity: Unintentional integer overflow (OVERFLOW_BEFORE_WIDEN) in QueueControlImpl.java
* [ARTEMIS-1691](https://issues.apache.org/jira/browse/ARTEMIS-1691) - JMS Bridge: After the FailureHandler exits, a bridge cannot be started full functional anymore
* [ARTEMIS-1921](https://issues.apache.org/jira/browse/ARTEMIS-1921) - Setting client ID on core JMS should be reflected in broker RemotingConnection
* [ARTEMIS-2492](https://issues.apache.org/jira/browse/ARTEMIS-2492) - [Doc] Confusing/old paragraph in clusters.md
* [ARTEMIS-3622](https://issues.apache.org/jira/browse/ARTEMIS-3622) - MQTT can deadlock on client connection / disconnection
* [ARTEMIS-4420](https://issues.apache.org/jira/browse/ARTEMIS-4420) - User authentication leaks into non-Artemis servlets
* [ARTEMIS-4652](https://issues.apache.org/jira/browse/ARTEMIS-4652) - Rollback of XAResource implementation should never return XA_RETRY
* [ARTEMIS-4666](https://issues.apache.org/jira/browse/ARTEMIS-4666) - Federated queue consumers do not receive messages on classic clients
* [ARTEMIS-4694](https://issues.apache.org/jira/browse/ARTEMIS-4694) - Servers should be resilient to large headers
* [ARTEMIS-4698](https://issues.apache.org/jira/browse/ARTEMIS-4698) - MetricsManagers' remove method may cause a NullPointerException 
* [ARTEMIS-4699](https://issues.apache.org/jira/browse/ARTEMIS-4699) - properties config - implied factoryClassName on TransportConfiguration can be wrong, it needs to be provided via a property value
* [ARTEMIS-4705](https://issues.apache.org/jira/browse/ARTEMIS-4705) - Remove unnecessary field from STOMP HeartBeater
* [ARTEMIS-4711](https://issues.apache.org/jira/browse/ARTEMIS-4711) - XmlDataImporter now requires JMS code
* [ARTEMIS-4712](https://issues.apache.org/jira/browse/ARTEMIS-4712) - Remove LDAP connection pooling
* [ARTEMIS-4713](https://issues.apache.org/jira/browse/ARTEMIS-4713) - Mitigate NPE in LargeMessageControllerImpl
* [ARTEMIS-4714](https://issues.apache.org/jira/browse/ARTEMIS-4714) - Mitigate NPE in FederatedQueueConsumerImpl MessageListener
* [ARTEMIS-4718](https://issues.apache.org/jira/browse/ARTEMIS-4718) - Diverted messages are not properly routed on cluster remote bindings
* [ARTEMIS-4721](https://issues.apache.org/jira/browse/ARTEMIS-4721) - Possible documentation error in wildcard syntax recommendation
* [ARTEMIS-4723](https://issues.apache.org/jira/browse/ARTEMIS-4723) - org.apache.activemq.artemis.utils.actors.Handler$Counter left on the ThreadLocal
* [ARTEMIS-4725](https://issues.apache.org/jira/browse/ARTEMIS-4725) - Mirror may send wrong headers
* [ARTEMIS-4726](https://issues.apache.org/jira/browse/ARTEMIS-4726) - Removing scheduled message from queue via management can cause negative message count
* [ARTEMIS-4727](https://issues.apache.org/jira/browse/ARTEMIS-4727) - Fix STOMP durable sub doc and property precedence
* [ARTEMIS-4731](https://issues.apache.org/jira/browse/ARTEMIS-4731) - Openwire failure detection leak with Windows Clients / Server won't cleanup openwork clients with Exception
* [ARTEMIS-4733](https://issues.apache.org/jira/browse/ARTEMIS-4733) - Mirror Infinite loops (mirror infinite Reflection) from Internal Queues
* [ARTEMIS-4734](https://issues.apache.org/jira/browse/ARTEMIS-4734) - Null dereferencing in ReplicationManager.java
* [ARTEMIS-4744](https://issues.apache.org/jira/browse/ARTEMIS-4744) - AMQP broker connections don't fully support multi host URIs
* [ARTEMIS-4746](https://issues.apache.org/jira/browse/ARTEMIS-4746) - SIMILAR_BRANCHES.SWITCH Identical branches in switch node
* [ARTEMIS-4749](https://issues.apache.org/jira/browse/ARTEMIS-4749) - SIMILAR_BRANCHES.SWITCH in ../activemq/artemis/utils/ThreadDumpUtil.java
* [ARTEMIS-4759](https://issues.apache.org/jira/browse/ARTEMIS-4759) - Restore compatibility with LiveOnlyPolicyConfiguration
* [ARTEMIS-4762](https://issues.apache.org/jira/browse/ARTEMIS-4762) - Queue Stat throw NPE if executed against old server
* [ARTEMIS-4765](https://issues.apache.org/jira/browse/ARTEMIS-4765) - Target Mirror is setting wrong size on duplicate cache
* [ARTEMIS-4768](https://issues.apache.org/jira/browse/ARTEMIS-4768) - Property _AMQ_SCHED_DELIVERY lost from Scheduled Persistent Message after broker restart
* [ARTEMIS-4771](https://issues.apache.org/jira/browse/ARTEMIS-4771) - NPE between AMQPLargeMessageWriter::tryDelivering and resetClose
* [ARTEMIS-4774](https://issues.apache.org/jira/browse/ARTEMIS-4774) - PageCounters get out of sync after AckManager
* [ARTEMIS-4776](https://issues.apache.org/jira/browse/ARTEMIS-4776) - Replicated Paged Files may leak as open on replica target
* [ARTEMIS-4784](https://issues.apache.org/jira/browse/ARTEMIS-4784) - Large messages are being kept on the ReplicationEndpoint after they are closed.

## New Features

* [ARTEMIS-4675](https://issues.apache.org/jira/browse/ARTEMIS-4675) - Add replication status metrics
* [ARTEMIS-4709](https://issues.apache.org/jira/browse/ARTEMIS-4709) - Add a plugin to provide periodic expiry of connections on a per acceptor basis
* [ARTEMIS-4763](https://issues.apache.org/jira/browse/ARTEMIS-4763) - properties config - support metrics plugin, conversion of .class for non string attributes and empty init 

## Improvements

* [ARTEMIS-1769](https://issues.apache.org/jira/browse/ARTEMIS-1769) - Return JMS Session's ClientID via JMX
* [ARTEMIS-4306](https://issues.apache.org/jira/browse/ARTEMIS-4306) - Add authn/z metrics
* [ARTEMIS-4498](https://issues.apache.org/jira/browse/ARTEMIS-4498) - Enable management for internal addresses &amp; queues
* [ARTEMIS-4510](https://issues.apache.org/jira/browse/ARTEMIS-4510) - Add auto-create-destination logic to diverts
* [ARTEMIS-4582](https://issues.apache.org/jira/browse/ARTEMIS-4582) - add view and edit permissions to extend security-settings rbac for management operations
* [ARTEMIS-4696](https://issues.apache.org/jira/browse/ARTEMIS-4696) - Deprecate queue prefetch address setting
* [ARTEMIS-4697](https://issues.apache.org/jira/browse/ARTEMIS-4697) - Auto reload SSL PEM config sources on change
* [ARTEMIS-4704](https://issues.apache.org/jira/browse/ARTEMIS-4704) - Eliminate unnecessary variable in ReplicationManager
* [ARTEMIS-4710](https://issues.apache.org/jira/browse/ARTEMIS-4710) - Keep pem-keystore dependencies as is; make it really optional
* [ARTEMIS-4740](https://issues.apache.org/jira/browse/ARTEMIS-4740) - Reduce unnecessary boxing
* [ARTEMIS-4742](https://issues.apache.org/jira/browse/ARTEMIS-4742) - Decoding PersistedSecuritySetting fails after upgrade
* [ARTEMIS-4743](https://issues.apache.org/jira/browse/ARTEMIS-4743) - Improve CLI Queue Stat Output: Split lines and include internal queue attribute
* [ARTEMIS-4745](https://issues.apache.org/jira/browse/ARTEMIS-4745) - Allow configuration of AMQP federation pull consumer batch size 
* [ARTEMIS-4754](https://issues.apache.org/jira/browse/ARTEMIS-4754) - Make configuring security for AMQP federation user accounts simpler
* [ARTEMIS-4758](https://issues.apache.org/jira/browse/ARTEMIS-4758) - Hardening Mirroring
* [ARTEMIS-4766](https://issues.apache.org/jira/browse/ARTEMIS-4766) - gate every newInstance call with a type check on the class to ensure we only call static initialisers of the expected type
* [ARTEMIS-4772](https://issues.apache.org/jira/browse/ARTEMIS-4772) - Expose registered broker plugin class names in JMX
* [ARTEMIS-4773](https://issues.apache.org/jira/browse/ARTEMIS-4773) - Performance improvement on page.sync
* [ARTEMIS-4783](https://issues.apache.org/jira/browse/ARTEMIS-4783) - Touch up federation docs

## Tasks

* [ARTEMIS-4703](https://issues.apache.org/jira/browse/ARTEMIS-4703) - Add additional Queue federation example for AMQP federation
* [ARTEMIS-4715](https://issues.apache.org/jira/browse/ARTEMIS-4715) - Using # wildcard from OpenWire JMS consumer stopped working with 2.33.0
* [ARTEMIS-4720](https://issues.apache.org/jira/browse/ARTEMIS-4720) - Add additional example for AMQP federation showing TLS configuration
* [ARTEMIS-4722](https://issues.apache.org/jira/browse/ARTEMIS-4722) - Exclude netty-tcnative-boringssl-static artifacts
* [ARTEMIS-4750](https://issues.apache.org/jira/browse/ARTEMIS-4750) - AMQP Large Message flow control to use runAfter
* [ARTEMIS-4778](https://issues.apache.org/jira/browse/ARTEMIS-4778) - misc test cleanup

## Dependency Upgrades

* [ARTEMIS-4625](https://issues.apache.org/jira/browse/ARTEMIS-4625) - Upgrade CheckStyle to 10.15.0
* [ARTEMIS-4701](https://issues.apache.org/jira/browse/ARTEMIS-4701) - Update to Netty 4.1.108
* [ARTEMIS-4717](https://issues.apache.org/jira/browse/ARTEMIS-4717) - Upgrade commons-configuration2 to 2.10.1
* [ARTEMIS-4724](https://issues.apache.org/jira/browse/ARTEMIS-4724) - Upgrade karaf version to 4.4.6
* [ARTEMIS-4728](https://issues.apache.org/jira/browse/ARTEMIS-4728) - Upgrade jgroups version to 5.3.4.Final
* [ARTEMIS-4729](https://issues.apache.org/jira/browse/ARTEMIS-4729) - Upgrade slf4j version to 2.0.12
* [ARTEMIS-4751](https://issues.apache.org/jira/browse/ARTEMIS-4751) - Upgrade to Apache parent 32
* [ARTEMIS-4752](https://issues.apache.org/jira/browse/ARTEMIS-4752) - Upgrade ErrorProne to 2.27.0
* [ARTEMIS-4753](https://issues.apache.org/jira/browse/ARTEMIS-4753) - Upgrade CheckStyle to 10.16.0
* [ARTEMIS-4755](https://issues.apache.org/jira/browse/ARTEMIS-4755) - Upgrade Jackson to 2.17.0
* [ARTEMIS-4756](https://issues.apache.org/jira/browse/ARTEMIS-4756) - Upgrade Commons IO to 2.16.1
* [ARTEMIS-4757](https://issues.apache.org/jira/browse/ARTEMIS-4757) - Upgrade Netty to 4.1.109.Final
* [ARTEMIS-4769](https://issues.apache.org/jira/browse/ARTEMIS-4769) - Update to pem-keystore 2.4.0
* [ARTEMIS-4770](https://issues.apache.org/jira/browse/ARTEMIS-4770) - Update to bouncycastle 1.78