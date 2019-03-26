Apache ActiveMQ ™ -- How does ActiveMQ compare to Mantaray 

[Community](community.md) > [FAQ](CommunityCommunity/Community/faq.md) > [General](Community/FAQ/general.md) > [How does ActiveMQ compare to Mantaray](Community/FAQ/General/how-does-activemq-compare-to-mantaray.md)


We are obviously biased, and will tell you "just use ActiveMQ!" ![(smile)](https://cwiki.apache.org/confluence/s/en_GB/5997/6f42626d00e36f53fe51440403446ca61552e2a2.1/_/images/icons/emoticons/smile.png) But Mantaray is an OK JMS provider. The interesting thing about MantaRay is it can support a peer-based network, just as ActiveMQ does with its [peer transport](Using ActiveMQ/Configuring Transports/ActiveMQ Connection URIs/peer-transport-reference.md).

We [benchmark](FeaturesFeatures/Features/performance.md) against Mantaray and other open source JMS providers and in our tests (in which we try to be as objective as possible) ActiveMQ exhibits higher performance in most scenarios.

A peer transport can be useful when using non-persistent messaging. But if you want persistent messaging you often want to use a federated network with certain brokers on the network being the persistence brokers (so you can backup the file systems etc).

The ideal topology often depends on your requirements and how you want to manage persistence and deal with hardware failures such as with [MasterSlave](Features/ClusteringFeatures/Clustering/Features/Clustering/masterslave.md).

