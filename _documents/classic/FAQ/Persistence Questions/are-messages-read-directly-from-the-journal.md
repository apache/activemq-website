Apache ActiveMQ ™ -- Are messages read directly from the journal 

 [FAQ](/FAQ/index.md) > [Persistence Questions](../../FAQ/persistence-questions.md) > [Are messages read directly from the journal](../../FAQ/Persistence Questions/are-messages-read-directly-from-the-journal.md)


Kind of. A message can be loaded directly from the journal if it was swapped out of memory.

The journal cannot be used, however, to recover a durable subscription as it does not keep an ordered index of messages per durable sub. So when a durable sub is activated, the journal checkpoints to flush any messages in the journal to the long term store and then the long term store is used to recover the durable subscription.

