Apache ActiveMQ ™ -- How do I change the message store directory for an embedded broker 

[Community](community.md) > [FAQ](CommunityCommunity/Community/faq.md) > [Persistence Questions](Community/FAQCommunity/FAQ/Community/FAQ/persistence-questions.md) > [How do I change the message store directory for an embedded broker](Community/FAQ/Persistence QuestionsCommunity/FAQ/Persistence Questions/Community/FAQ/Persistence Questions/how-do-i-change-the-message-store-directory-for-an-embedded-broker.md)


Embedded brokers create an ActiveMQ directory under the current working directory to store it's persistent message data. To change the location of the directory used by the message store, set the **activemq.store.dir** system property to the directory you want it to use.

Example:

java -Dactivemq.store.dir=/temp your.Application

