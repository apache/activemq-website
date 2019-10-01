---
layout: default_md
title: ActiveMQ Artemis 2.10.1 Release Notes
title-class: page-title-artemis
type: artemis
---

A complete list of JIRAs for the 2.10.1 release can be found [here](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12315920&version=12346078)

A list of commits can be found [here](commit-report-2.10.1).

Release Notes - ActiveMQ Artemis - Version 2.10.1



## Bug
* [[ARTEMIS-2380](https://issues.apache.org/jira/browse/ARTEMIS-2380)] - Fix delivering message in the case of consume close
* [[ARTEMIS-2471](https://issues.apache.org/jira/browse/ARTEMIS-2471)] - JdbcNodeManager doesn't use jdbc-user and jdbc-password tags
* [[ARTEMIS-2472](https://issues.apache.org/jira/browse/ARTEMIS-2472)] - Persistent and delivering size not right in replacement of lvq message
* [[ARTEMIS-2473](https://issues.apache.org/jira/browse/ARTEMIS-2473)] - RemoteQueueBindingImpl should check for empty filters
* [[ARTEMIS-2478](https://issues.apache.org/jira/browse/ARTEMIS-2478)] - Expired message not removed in non destructive queue
* [[ARTEMIS-2479](https://issues.apache.org/jira/browse/ARTEMIS-2479)] - ActiveMQConnectionFactory may not be able to connect with initialConnectAttempt=-1
* [[ARTEMIS-2480](https://issues.apache.org/jira/browse/ARTEMIS-2480)] - Reloading configuration can kill broker
* [[ARTEMIS-2483](https://issues.apache.org/jira/browse/ARTEMIS-2483)] - BlockSize is not used on sync calculation on CLI create
* [[ARTEMIS-2485](https://issues.apache.org/jira/browse/ARTEMIS-2485)] - Deleting SNF Queue should also delete associated remote bindings
* [[ARTEMIS-2487](https://issues.apache.org/jira/browse/ARTEMIS-2487)] - artemis-server-osgi references not-existing jctools:2.2.0
* [[ARTEMIS-2489](https://issues.apache.org/jira/browse/ARTEMIS-2489)] - Ring queue fails with concurrent producers
* [[ARTEMIS-2493](https://issues.apache.org/jira/browse/ARTEMIS-2493)] - OpenWire session close doesn't cleanup consumer refs
* [[ARTEMIS-2496](https://issues.apache.org/jira/browse/ARTEMIS-2496)] - Use of Netty FileRegion on ReplicationCatch is breaking wildfly integration with artemis
* [[ARTEMIS-2501](https://issues.apache.org/jira/browse/ARTEMIS-2501)] - Incorrect ActiveMQRALogger configuration for invalidNumberOfMaxSession and unableToRetrieveDestinationName




## Improvement
* [[ARTEMIS-1811](https://issues.apache.org/jira/browse/ARTEMIS-1811)] - NIOSequentialFile should use RandomAccessFile with heap ByteBuffers
* [[ARTEMIS-2424](https://issues.apache.org/jira/browse/ARTEMIS-2424)] - Add option to override InetAddress.isReachable() with purePing()
* [[ARTEMIS-2462](https://issues.apache.org/jira/browse/ARTEMIS-2462)] - Allow store and forward queue to be deleted after scaledown
* [[ARTEMIS-2465](https://issues.apache.org/jira/browse/ARTEMIS-2465)] - [JDBC-STORE] Adding index on txId
* [[ARTEMIS-2467](https://issues.apache.org/jira/browse/ARTEMIS-2467)] - Define static cluster through ./artemis create --static <node-list>
* [[ARTEMIS-2468](https://issues.apache.org/jira/browse/ARTEMIS-2468)] - console.war doesn't need checker-compat-qual lib
* [[ARTEMIS-2474](https://issues.apache.org/jira/browse/ARTEMIS-2474)] - Backup Connector ignores the retryInterval on the connection factories
* [[ARTEMIS-2475](https://issues.apache.org/jira/browse/ARTEMIS-2475)] - Log details when initializing metrics plugin
* [[ARTEMIS-2477](https://issues.apache.org/jira/browse/ARTEMIS-2477)] - create quieter check dependencies warning
* [[ARTEMIS-2488](https://issues.apache.org/jira/browse/ARTEMIS-2488)] - Potential NPE parsing source address in AMQP



** Task
    * [[ARTEMIS-2423](https://issues.apache.org/jira/browse/ARTEMIS-2423)] - Explain in documentation that auto-create-addresses/queues doesn't work for core protocol

