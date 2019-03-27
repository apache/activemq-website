Apache ActiveMQ ™ -- MasterSlave 

[Features](../../features.md) > [Clustering](../../Features/clustering.md) > [MasterSlave](../../Features/Clustering/masterslave.md)


Introduction to Master / Slave
------------------------------

The following are the different kinds of Master/Slave configurations available:

Master Slave Type

Requirements

Pros

Cons

[Shared File System Master Slave](../../Features/Clustering/MasterSlave/shared-file-system-master-slave.md)

A shared file system such as a SAN

Run as many slaves as required. Automatic recovery of old masters

Requires shared file system

[JDBC Master Slave](../../Features/Clustering/MasterSlave/jdbc-master-slave.md)

A Shared database

Run as many slaves as required. Automatic recovery of old masters

Requires a shared database. Also relatively slow as it cannot use the high performance journal

[Replicated LevelDB Store](replicated-Features/PersistenceFeatures/Persistence/Features/Persistence/leveldb-store.md)

ZooKeeper Server

Run as many slaves as required. Automatic recovery of old masters. Very fast.

Requires a ZooKeeper server.

If you are using a shared network file system such as a SAN we recommend a [Shared File System Master Slave](../../Features/Clustering/MasterSlave/shared-file-system-master-slave.md). If you are happy to dispense with the high performance journal and are using pure JDBC as your persistence engine then you should use [JDBC Master Slave](../../Features/Clustering/MasterSlave/jdbc-master-slave.md) instead. For those willing to try out new tech, the [Replicated LevelDB Store](replicated-Features/PersistenceFeatures/Persistence/Features/Persistence/leveldb-store.md) gives speeds similar to a SAN solution without the hassle of having to setup a highly available shared file system.

