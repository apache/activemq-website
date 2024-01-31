---
layout: default_md
title: Pure Active Passive 
title-class: page-title-activemq5
type: activemq5
redirect_from:
- /pure-master-slave
---

[Features](features) > [Clustering](clustering) > [ActivePassive](activepassive) > [Pure Active Passive](pure-active-passive)

{% include inclusive-terminology-notice.html %}

> **Warning**
> 
> The LevelDB store has been removed from production.
> This page only serves as an archival page for previous releases.
> Use [shared storage active/passive](activepassive) instead.


### Pure Active Passive

> This feature has been deprecated and will be removed in version 5.8
> 
> This feature will be removed in 5.8 as it has not evolved to be production ready. You are advised to use [shared storage active/passive](activepassive) or the [Replicated LevelDB Store](replicated-leveldb-store). See [AMQ-4165](https://issues.apache.org/jira/browse/AMQ-4165)

A Pure Active Passive configuration provides a basic shared nothing, fully replicated topology which does not depend on a shared file system or shared database.

### How Pure Active Passive works

*   A passive of a active broker consumes all message states from the active - messages, acknowledgments and transactional states.  
    Whilst a Passive is actively connected to the Active - it does not allow or start any network or transport connectors, it's sole purpose is to duplicate the state of the active.

*   The active broker will only respond to a client when a message exchange has been successfully passed to the passive. For example, a commit  
    in a clients transaction will not complete until the active and the passive have processed the commit.

*   In the event the active fails (e.g. hardware failure) the passive has optionally two modes of operation
    1.  starts all it's network and transport connectors - allowing clients connected to the active to resume on the passive.
    2.  or can be configured to close down. In this mode, the passive is simply used to duplicate state for the active.

*   clients should use a failover transport for connecting to the active broker first and then the passive. e.g. using a URL such as
```
failover://(tcp://activehost:61616,tcp://passivehost:61616)?randomize=false
```
The **randomize** property just disables randomness so that the transport will always try the active first, then the passive if it can't connect to that. Note that the passive does not accept connections until it becomes the active

### Limitations of Pure Active Passive

*   Only one passive can be connected to the Active
*   A failed active cannot be re-introduced without shutting down the the passive broker (no automatic failback)
*   There is no automatic synchronization between brokers. This is a manual process.

### Recovering a Pure Active Passive topology

This is a manual process - once a active has failed, the only sure way to ensure that the toplogy is synchronized again is manually:

*   shutdown the passive broker (The clients do not need to be shutdown - they will wait until the topology is re-established if they are failover clients
*   copy the data directory from the passive over the data directory of the active broker
*   re-start the active and the passive

### Configuring Pure Active Passive

You should not configure a connection between the active and a passive. The connection is automatically established with the passive's configuration. If you explicitly configure a network connection, you may encounter race conditions when the active broker is under heavy load.

A active broker doesn't need any special configuration - it's a normal broker until a passive broker attaches itself.  
To identify a broker as a passive - there is just one property to set (see below) as this [example shows](http://svn.apache.org/repos/asf/activemq/trunk/activemq-core/src/test/resources/org/apache/activemq/broker/ft/passive2.xml) - so configuration is nice and easy:
```
<broker activeConnectorURI="tcp://activehost:62001" shutdownOnMasterFailure="false">
  <persistenceAdapter>
      <journaledJDBC journalLogFiles="5" dataDirectory="${activemq.base}/data/broker2" />
    </persistenceAdapter>

    <transportConnectors>
	  <transportConnector uri="tcp://passivehost:61616"/>
   </transportConnectors>
</broker>
```
Broker Property|default|Description
---|---|---
activeConnectorURI|null|URI to the active broker e.g. `tcp://activehost:62001`
shutdownOnMasterFailure|false|if true, the passive will shut down if the active fails otherwise the passive will take over as being the new active. The passive ensures that there is a separate copy of each message and acknowledgement on another machine which can protect against catastrophic hardware failure. If the active fails you might want the passive to shut down as well as you may always want to duplicate messages to 2 physical locations to prevent message loss on catastrophic data centre or hardware failure. If you would rather the system keep on running after a active failure then leave this flag as false.
waitForPassive|false|version 5.2+, if true, a active will wait till a passive has attached before completing its startup sequence
shutdownOnPassiveFailure|false|version 5.2+, if true, a active will shutdown if the passive connection is lost, ensuring that the active will not become out of sync with the passive.

### Configuring the authentication of the Passive

In ActiveMQ 4.1 or later you can use a `<activeConnector/>` element as an alternative XML configuration mechanism as shown in the following [example](http://svn.apache.org/repos/asf/activemq/trunk/activemq-core/src/test/resources/org/apache/activemq/broker/ft/slave2.xml) to configure the user and password that the passive will use to connect to the active
```
<broker brokerName="passive" useJmx="false"  deleteAllMessagesOnStartup="true"  xmlns="http://activemq.apache.org/schema/core">
  <services>
    <masterConnector remoteURI= "tcp://localhost:62001" userName="James" password="Cheese"/>
  </services>

  <transportConnectors>
    <transportConnector uri="tcp://localhost:62002"/>
  </transportConnectors>
</broker>
```
