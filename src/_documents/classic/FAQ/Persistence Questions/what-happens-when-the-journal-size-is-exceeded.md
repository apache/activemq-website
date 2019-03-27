Apache ActiveMQ ™ -- What happens when the journal size is exceeded 

 [FAQ](/FAQ/index.md) > [Persistence Questions](../../FAQ/persistence-questions.md) > [What happens when the journal size is exceeded](../../FAQ/Persistence Questions/what-happens-when-the-journal-size-is-exceeded.md)


If the "preferred" size is exceeded then the last log files keeps growing until the first log files can be overwritten. When a log file is overwritten, it's size is reset to the "preferred" size.

