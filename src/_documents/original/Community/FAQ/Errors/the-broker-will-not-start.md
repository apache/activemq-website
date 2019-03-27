Apache ActiveMQ ™ -- The Broker will not start 

[Community](community.md) > [FAQ](CommunityCommunity/Community/faq.md) > [Errors](Community/FAQCommunity/FAQ/Community/FAQ/errors.md) > [The Broker will not start](Community/FAQ/ErrorsCommunity/FAQ/Errors/Community/FAQ/Errors/the-broker-will-not-start.md)


It's been reported that during broker start some users get a message similar to:

15:26:29 INFO  Opening journal. Caught: javax.jms.JMSException: Failed to open transaction journal: java.io.IOException: Invalid argument

It could be [this problem](Community/FAQ/Errors/Exceptions/journal-is-already-opened-by-this-application.md) or the problem could be due to a bad os/jvm combination. See [Known Bad OS and JVM Combinations](Using ActiveMQUsing ActiveMQ/Using ActiveMQ/known-bad-os-and-jvm-combinations.md)

