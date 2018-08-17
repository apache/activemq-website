Apache ActiveMQ ™ -- How do I back-up KahaDB 

 [FAQ](/FAQ/index.md) > [Persistence Questions](../../FAQ/persistence-questions.md) > [How do I back-up KahaDB](/FAQ/Persistence Questions/how-do-i-back-up-Features/Persistence/kahadb.md)


In creating a backup, there may be an issue with the lock file, or with an inuse journal file. The lock file is not important but you would want the latest journal files.

1.  Freeze the filesystem containing the database to ensure that you get a consistent snapshot of the journal.
2.  Back-up the database using any of the standard back-up mechanisms.

Batch writes are serialised and followed by an fsync, so the fsfreeze will either block the next write or the next fsync. Either way is fine from a consistency point of view. The index is checkpointed to the journal periodically, so recovery of the index will at worst be from the last know good state.

