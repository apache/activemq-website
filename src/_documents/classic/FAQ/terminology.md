Apache ActiveMQ ™ -- Terminology 

 [FAQ](/FAQ/index.md) > [Terminology](../FAQ/terminology.md)


Questions on Message Orientated Middleware and ActiveMQ terminology

*   [DR](../FAQ/Terminology/dr.md)
*   [HA](../FAQ/Terminology/ha.md)
*   [Latency](../FAQ/Terminology/latency.md)
*   [MOM](../FAQ/Terminology/mom.md)
*   [QoS](../FAQ/Terminology/qos.md)
*   [SEDA](../FAQ/Terminology/seda.md)
*   [Throughput](../FAQ/Terminology/throughput.md)

### Store and Forward

brokers receive messages, store them locally and forwards the message to a recipient (in this case another broker) when it is able to do so. The message is only deleted once its been sucessfully delivered.

### Reliable messaging

Best efforts are made to deliver a message whilst the system (broker/cluster/network) is running.

### Guaranteed

No matter what happens to the physical network connections or the destination service the message will be delivered to the receiptant - provided there is no catastraphic loss to the persistent data store of a broker along the message(s) route. This means a message could be lost if there was a catastrophic failure to a broker's activemq data disk.

### Fault Tolerance

Unexpected failures never lead to lost or corrupted data - for a messaging system - there are additional caveats for corrupted data - message ordering and once and only once message delivery.

### Network Orphan

A broker can become isolated from other brokers in the cluster due to an network outage. The broker and it's connected clients may not be able to detect if the loss of other brokers in the cluster is due to the broker(or their machines) or simply a router/cable problem. This is a big issue for clustering, as it has the potential to create corrupted data exchanges when the network is re-established.

### Clustering

multiple brokers are used to provide a single logical service.  
There are three reasons for using clustering:

##### Increased capacity

This is load balancing - this is currently achived by networking brokers together - this won't change in ActiveMQ 4.0 (see below).

##### Geographical Distribution

Again this is achived in ActiveMQ by broker networks.

##### High Availability

The guarenteed maximum amount of downtime that will not be exceeded:

Uptime

Average Down time

implications

95%

8 hours a week

System will be offline for nightly backups a broker loss could result in loss of all messages since last back-up

99%

1.5 hours a week

system maybe offline for backup or maintenance

99.9%

40 mins/month

all back-ups done online

99.999%

5 mins/year

full redundancy

##### Architecture basics

Clusters can be either based around shared storage (shared database or disk) or shared nothing (every broker has their own private storage). There is also two basic mechanisms used for message integrity for failure scenarios:

###### Master/Slave

A broker has a standby replacement - another broker that is kept in step by the cluster that will take over in the event of a broker failure.

###### Synchronous

Every broker is kept exactly in-step with message exchanges across the entire cluster. This is the most secure for failure scenrios, but suffers from performance problems because it the responsibility of the cluster to ensure that messages are fully replicated across every node. This results in higher latency and increased traffic. In practice, it is unsual to have more than 2 brokers in such a cluster, because the performance degradation is directly related to the number of brokers in the cluster.

###### Hybrid

A fully synchronous cluster, but it is the responsibility of the client (not the brokers) to ensure every broker is kept up to date. This has advantages for performance, but is complicated by the additional exchange between client and broker(s) to ensure that only one broker does the message dispatching for a client.

