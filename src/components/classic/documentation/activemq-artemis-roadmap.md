---
layout: default_md
title: Artemis' Roadmap to ActiveMQ <i>Next</i>
title-class: page-title-main
type: main
---

The goal of this page is to identify the outstanding issues that must be addressed by Artemis in order to achieve feature parity with Classic. The overall objective for working toward feature parity between Classic and Artemis is for Artemis to eventually become the next major version of ActiveMQ. This page exists so that we can work together as a group to achieve this goal. This page does **not** list the features which Artemis has *beyond* what currently exists in Classic.

## Features/Scenarios

This section should be used to compare what features from ActiveMQ Classic have been implemented in Artemis. Feature items can be listed, with links to JIRA tickets for longer conversation and hashing out specific feature details. This will help us to more clearly track everything that Artemis needs. This list of features was taken from the Classic [features page](features).

Keep in mind that not every feature must have a &#9989;. Artemis may still be ready to become ActiveMQ *Next* even if features on this page still have an &#10060; if those features are deemed low priority. Artemis is not meant to be a 100% complete reimplementation of ActiveMQ Classic. Features should only be reimplemented where it makes good sense.

### Protocol Support

|Feature|Artemis Support|Version(s)|
|---|:---:|---|---|
|OpenWire|&#9989;||
|Stomp|&#9989;|1.0, 1.1, 1.2|
|AMQP|&#9989;|1.0|
|MQTT|&#9989;|3.1|
|REST|&#9989;||

### General

|Feature|Artemis Support|JIRA|Notes|
|---|:---:|---|---|
|[Broker Camel Component](broker-camel-component)|&#9989;||[example](https://github.com/apache/activemq-artemis/tree/master/examples/features/standard/camel)|
|[Discovery](discovery)|&#9989;||[UDP multicast & JGroups](components/artemis/documentation/latest/using-jms)|
|[Enterprise Integration Patterns](enterprise-integration-patterns)|&#9989;||see "Broker Camel Component"|
|[Horizontal Scaling](horizontal-scaling)|&#9989;||supported via [clustering](components/artemis/documentation/latest/clusters) or [federation](components/artemis/documentation/latest/federation)|
|[JMSXUserID](jmsxuserid)|&#9989;||[documentation](activemq.apache.org/components/artemis/documentation/latest/security.html#tracking-the-validated-user)|
|[JMX](jmx)|&#9989;||[documentation](components/artemis/documentation/latest/management)|
|[Logging a warning if you forget to start a connection](logging-a-warning-if-you-forget-to-start-a-connection)|&#10060;|||
|[MDC Logging](mdc-logging)|&#10060;|||
|[Scaling the depth of a queue](scaling-the-depth-of-a-queue)|&#9989;||[documentation](components/artemis/documentation/latest/paging)|
|[URI Protocols](uri-protocols)|&#9989;||[vm, tcp, udp, jgroups](components/artemis/documentation/latest/using-jms)|
|[Proxy Connector](the-proxy-connector)|&#10060;|||
|[Unix Shell Script](unix-shell-script)|&#9989;|||

### Clustering

|Feature|Artemis Support|JIRA|Notes|
|---|:---:|---|---|
|[Master-slave](masterslave)|&#9989;||using JDBC, shared filesystem, & replication; [documentation](components/artemis/documentation/latest/ha)|
|[Network of brokers](networks-of-brokers)|&#9989;|[ARTEMIS-2265](https://issues.apache.org/jira/browse/ARTEMIS-2265)|equivalent through [clustering](components/artemis/documentation/latest/clusters) or [federation](components/artemis/documentation/latest/federation)|
|[Replicated message store](replicated-message-store)|&#9989;||equivalent via [replication](components/artemis/documentation/latest/ha) HA config|

### Consumer Features

|Feature|Artemis Support|JIRA|Notes|
|---|:---:|---|---|
|[Consumer Dispatch Async](consumer-dispatch-async)|&#9989;||[equivalent via the `directDeliver` URL parameter](components/artemis/documentation/latest/configuring-transports.html#configuring-netty-tcp)|
|[Consumer Priority](consumer-priority)|&#9989;|[ARTEMIS-196](https://issues.apache.org/jira/browse/ARTEMIS-196)|[documentation](components/artemis/documentation/latest/consumer-priority)|
|[Exclusive Consumer](exclusive-consumer)|&#9989;|[ARTEMIS-853](https://issues.apache.org/jira/browse/ARTEMIS-853)|[documentation](components/artemis/documentation/latest/exclusive-queues)|
|[Manage Durable Subscribers](manage-durable-subscribers)|&#9989;||[equivalent via the `expiry-delay` address setting](components/artemis/documentation/latest/address-model.html#configuring-addresses-and-queues-via-address-settings)|
|[Message Groups](message-groups)|&#9989;||[documentation](components/artemis/documentation/latest/message-grouping)|
|[Redelivery Policy](redelivery-policy)|&#9989;||[documentation](components/artemis/documentation/latest/undelivered-messages)|
|[Retroactive Consumer](retroactive-consumer)|&#9989;|[ARTEMIS-2504](https://issues.apache.org/jira/browse/ARTEMIS-2504)|documentation coming in 2.11|
|[Selectors](selectors)|&#9989;||[documentation](components/artemis/documentation/latest/filter-expressions)|
|[Slow Consumer Handling](slow-consumer-handling)|&#9989;||[documentation](components/artemis/documentation/latest/slow-consumers)|
|[Subscription Recovery Policy](subscription-recovery-policy)|&#9989;||see retroactive addresses|

### Destination Features

|Feature|Artemis Support|JIRA|Notes|
|---|:---:|---|---|
|[Composite Destinations](composite-destinations)|&#9989;||supported for OpenWire clients; see also [diverts](components/artemis/documentation/latest/diverts)|
|[Configure Startup Destinations](configure-startup-destinations)|&#9989;|||
|[Delete Inactive Destinations](delete-inactive-destinations)|&#9989;|||
|[Destination Options](destination-options)|&#9989;|||
|[Mirrored Queues](mirrored-queues)|&#10060;||rough equivalent via non-exclusive [diverts](components/artemis/documentation/latest/diverts)|
|[Per Destination Policies](per-destination-policies)|&#9989;||config via `address-settings`|
|[Virtual Destinations](virtual-destinations)|&#9989;||[docs](components/artemis/documentation/latest/openwire.html#virtual-topic-consumer-destination-translation) for backwards compatibility with OpenWire clients|
|[Wildcards](wildcards)|&#9989;||[documentation](components/artemis/documentation/latest/wildcard-syntax)|

### Interceptors

|Feature|Artemis Support|JIRA|Notes|
|---|:---:|---|---|
|[Destinations Plugin](destinations-plugin)|&#9989;||[documentation](activemq.apache.org/components/artemis/documentation/latest/broker-plugins)|
|[Logging Interceptor](logging-interceptor)|&#9989;||[documentation](components/artemis/documentation/latest/broker-plugins.html#using-the-loggingactivemqserverplugin)|
|[StatisticsPlugin](statisticsplugin)|&#9989;||equivalent via [management messages](activemq.apache.org/components/artemis/documentation/latest/management.html#using-management-message-api)|
|[TimeStampPlugin](timestampplugin)|&#10060;|||

### Message Dispatching Features

|Feature|Artemis Support|JIRA|Notes|
|---|:---:|---|---|
|[Async Sends](async-sends)|&#9989;||supported for OpenWire & also for core (via `blockOnDurableSend` and `blockOnNonDurableSend` URL parameters)|
|[Pluggable Dispatch Policies](dispatch-policies)|&#10060;||delay-before-dispatch and consumers-before-dispatch have been implemented|
|[Message Cursors](message-cursors)|&#9989;||equivalent via [paging](components/artemis/documentation/latest/paging)|
|[Optimized Acknowledgement](optimized-acknowledgement)|&#9989;||supported for OpenWire & core as well via `ackBatchSize` URL parameter|
|[Producer Flow Control](producer-flow-control)|&#9989;||[documentation](components/artemis/documentation/latest/flow-control)|
|[Total Ordering](total-ordering)|&#10060;|||

### Message Features

| Feature                                                                                        |Artemis Support|JIRA|Notes|
|------------------------------------------------------------------------------------------------|:---:|---|---|
| [ActiveMQ Classic Message Properties](activemq-classic-message-properties)                     |&#9989;|||
| [Advisory Message](advisory-message)                                                           |&#9989;||equivalent support via [management notifications](components/artemis/documentation/latest/management.html#management-notifications)|
| [Blob Messages](blob-messages)                                                                 |&#9989;||arbitrarily [large messages](components/artemis/documentation/latest/large-messages) supported|
| [Delay and Schedule Message Delivery](delay-and-schedule-message-delivery)                     |&#9989;||[documentation](components/artemis/documentation/latest/scheduled-messages)|
| [Message Transformation](message-transformation)                                               |&#9989;||supported via transformers and [remoting interceptors](components/artemis/documentation/latest/intercepting-operations)|
| [ObjectMessage](objectmessage)                                                                 |&#9989;||[documentation](components/artemis/documentation/latest/security.html#controlling-jms-objectmessage-deserialization)|
| [Structured Message Properties and MapMessages](structured-message-properties-and-mapmessages) |&#10060;|||

### Persistence

|Feature|Artemis Support|JIRA|Notes|
|---|:---:|---|---|
|[AMQ Message Store](amq-message-store)|&#9989;||equivalent functionality via [journal](components/artemis/documentation/latest/persistence)|
|[Configurable IOException Handling](configurable-ioexception-handling)|&#10060;||all IO errors considered critical|
|[JDBC Support](jdbc-support)|&#9989;|||
|[KahaDB](kahadb)|&#9989;||equivalent functionality via [journal](components/artemis/documentation/latest/persistence)|
|[Kaha Persistence](kaha-persistence)|&#9989;||equivalent functionality via [journal](components/artemis/documentation/latest/persistence)|
|[Periodically checking disk limits](periodically-checking-disk-limits)|&#9989;|||
|[Pluggable storage lockers](pluggable-storage-lockers)|&#10060;|||
|[Replicated LevelDB Store](replicated-Persistenceleveldb-store)|&#9989;||equivalent functionality via [journal replication HA config](components/artemis/documentation/latest/ha)|
|[Multi-kahaDB](https://activemq.apache.org/kahadb)|&#10060;|[ARTEMIS-839](https://issues.apache.org/jira/browse/ARTEMIS-839)||

### Security

|Feature|Artemis Support|JIRA|Notes|
|---|:---:|---|---|
|[Audit Logging](audit-logging)|&#9989;|[ARTEMIS-2273](https://issues.apache.org/jira/browse/ARTEMIS-2273)|[documentation](components/artemis/documentation/latest/logging.html#configuring-audit-log)|
|[Cached LDAP Authorization Module](cached-ldap-authorization-module)|&#9989;|[ARTEMIS-168](https://issues.apache.org/jira/browse/ARTEMIS-168)|[documentation](components/artemis/documentation/latest/security.html#legacyldapsecuritysettingplugin)|
|[Encrypted passwords](encrypted-passwords)|&#9989;||[documentation](components/artemis/documentation/latest/masking-passwords)|
|[Shiro](shiro)|&#10060;||equivalent functionality available via JAAS|

Migration
=========

This section should help to answer the end user question, _'How do I migrate from Classic to Artemis?'_. This should include the identification of any tools that can help make this easier, as well as documenting information and procedures specific to migrating.

* [Migration Guide](components/artemis/migration)
* Export messages from KahaDB using [this tool](https://github.com/apache/activemq-cli-tools/tree/master/activemq-kahadb-exporter). The exported XML can be imported via the `./artemis data imp` command.
* For non-standard backends (where direct export isn't an option) follow [this example](https://github.com/apache/activemq-artemis/tree/master/examples/features/sub-modules/inter-broker-bridge/artemis-jms-bridge) to migrate messages from Classic to Artemis over the wire.
