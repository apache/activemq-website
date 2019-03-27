Apache ActiveMQ ™ -- How do I configure distributed queues or topics 

[Community](community.md) > [FAQ](CommunityCommunity/Community/faq.md) > [Configuration](Community/FAQ/configuration.md) > [How do I configure distributed queues or topics](Community/FAQ/ConfigurationCommunity/FAQ/Configuration/Community/FAQ/Configuration/how-do-i-configure-distributed-queues-or-topics.md)


How do I configure distributed queues or topics
-----------------------------------------------

You don't need to explicitly [configure distributed queues or topics](Community/FAQ/Configuration/how-do-i-configure-the-queues-i-want.md) as any queue or topic is automatically distributed across other brokers when the brokers are configured in either a store and forward network or a master/slave cluster.

So you just need to connect brokers together to form either

*   a [Store and Forward Network of Brokers](Features/Clustering/networks-of-brokers.md), which means the messages travel from broker to broker until they reach a consumer; with each message being owned by a single broker at any point in time
*   a [Master/Slave Cluster](Features/ClusteringFeatures/Clustering/Features/Clustering/masterslave.md), which means all messages are replicated across each broker in the master/slave cluster

### Also see

*   [How do I configure the queues I want](Community/FAQ/Configuration/how-do-i-configure-the-queues-i-want.md)
*   [How do distributed queues work](Community/FAQ/Using Apache ActiveMQCommunity/FAQ/Using Apache ActiveMQ/Community/FAQ/Using Apache ActiveMQ/how-do-distributed-queues-work.md)
*   [Networks of Brokers](Features/Clustering/networks-of-brokers.md)
*   [MasterSlave](Features/ClusteringFeatures/Clustering/Features/Clustering/masterslave.md)

