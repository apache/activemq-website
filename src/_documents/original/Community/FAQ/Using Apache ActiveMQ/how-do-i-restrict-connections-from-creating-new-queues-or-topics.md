Apache ActiveMQ ™ -- How do I restrict connections from creating new queues or topics 

[Community](community.md) > [FAQ](CommunityCommunity/Community/faq.md) > [Using Apache ActiveMQ](Community/FAQCommunity/FAQ/Community/FAQ/using-apache-activemq.md) > [How do I restrict connections from creating new queues or topics](Community/FAQ/Using Apache ActiveMQCommunity/FAQ/Using Apache ActiveMQ/Community/FAQ/Using Apache ActiveMQ/how-do-i-restrict-connections-from-creating-new-queues-or-topics.md)


How do I restrict connections from creating new queues or topics?
-----------------------------------------------------------------

As is described in [How do I create new destinations](Community/FAQ/Using Apache ActiveMQ/how-do-i-create-new-destinations.md) there is no need to create all the destinations up front, you can let the broker create them on the fly.

However if you don't want this behaviour, or wish to restrict this behaviour to certain topic or queue [Wildcards](Features/Destination Features/wildcards.md) (areas of the queue or topic name space) then you can use the [Security](FeaturesFeatures/Features/security.md) plugins to disallow the **admin** role on whatever areas of the queue and topic namespace you wish

