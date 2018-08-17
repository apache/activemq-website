Apache ActiveMQ ™ -- What happens when the journal size is exceeded 

[Community](community.md) > [FAQ](CommunityCommunity/Community/faq.md) > [Persistence Questions](Community/FAQCommunity/FAQ/Community/FAQ/persistence-questions.md) > [What happens when the journal size is exceeded](Community/FAQ/Persistence QuestionsCommunity/FAQ/Persistence Questions/Community/FAQ/Persistence Questions/what-happens-when-the-journal-size-is-exceeded.md)


If the "preferred" size is exceeded then the last log files keeps growing until the first log files can be overwritten. When a log file is overwritten, it's size is reset to the "preferred" size.

