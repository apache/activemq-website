---
layout: default_md
title: KahaDB Active Passive 
title-class: page-title-activemq5
type: activemq5
redirect_from:
- /kahadb-master-slave
---

[Features](features) > [Clustering](clustering) > [ActivePassive](activepassive) > [KahaDB Active Passive](kahadb-active-passive)

{% include inclusive-terminology-notice.html %}

> **Note**  
> 
> This is under review - and not currently supported.

Overview
--------

The new KahaDB store supports a very fast and flexible replication system. It features:

*   Journal level replication (The translates into lower overhead to the active to replicate records).
*   Support for multiple passives.
*   Support to dynamically add passives at runtime.
*   Uses multiple concurrent data transfer sessions to do an initial passive synchronization.
*   Big passive synchronizations can be resumed so synchronization progress is not lost if a passive is restarted.
*   A configurable minimum number of replicas allows you to pause processing until the data has been guaranteed to be replicated enough times.

Active Election
---------------

KahaDB supports a pluggable Active Election algorithm but the only current implementation is one based on [ZooKeeper](http://hadoop.apache.org/zookeeper).

ZooKeeper is used to implement the active election algorithm. ZooKeeper is a very fast, replicated, in memory database with features that make it easy to implement cluster control algorithms. It is an Apache project which you can [freely download](http://hadoop.apache.org/zookeeper/releases.html). You must installed and have at least one ZooKeeper server running before setting up a KahaDB Active Passive configuration.

Configuring a Broker:
---------------------

The ActiveMQ binary distribution includes a KahaDB HA broker configuration at **$ACTIVEMQ_HOME/conf/ha.xml**.

It it setup to look for a ZooKeeper 3.0.0 server on localhost at port 2181. Edit the configuration if this is not where you are running your ZooKeeper server.

Start the configuation up by running:

```
prompt> $ACTIVEMQ_HOME/bin/activemq xbean:ha.xml
```

The actual contents of the configuration file follows:
```
Error formatting macro: snippet: java.lang.IndexOutOfBoundsException: Index: 20, Size: 20
```

Understanding the kahadbReplication XML element
-----------------------------------------------

### The brokerURI Attribute

Notice that the brokerURI attribute points at another broker configuration file. The ha-broker.xml contains the actual broker configuration that the broker uses when the node take over as active. The ha-broker.xml configuration file is a standard broker configuration except in these aspects:

*   It MUST set the start="false" attribute on the broker element.
*   It MUST not configure a persistenceAdapter.

The above rules allows the replication system to inject the replicated KahaDB store into the Active when it's starting up.

### The minimumReplicas Attribute

The minimumReplicas specifies how many copies of the database are required before synchronous update operations are deemed successful. Setting this to 0 allows a broker to continue operating even if there are no passives attached. If the value is set to 1 or greater, and there are no passives attached, the brokers persistent message processing will be suspended until the minimum number of passives are attached and the data synchronized.

### The uri Attribute

The uri attribute should always be configured with a **kdbr://** based URI. KDBR stands for 'KahaDB Replication' and this is the replication protocol used between the actives and the passives. The active binds the specified port with passives subsequently connect to and establish replication sessions. The host name in the uri MUST get updated to the actual machine's host name since this is also used to identify the nodes in the cluster.

### The directory Attribute

This is the data directory where the KahaDB will store it's persistence files.