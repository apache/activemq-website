---
layout: default_md
title: MasterSlave
title-class: page-title-activemq5
type: activemq5
---

 [Features](features) > [Clustering](clustering) > [MasterSlave](masterslave)

Introduction to Master / Slave
------------------------------

The following are the different kinds of Master/Slave configurations available:

Master Slave Type|Requirements|Pros|Cons
---|---|---|---
[Shared File System Master Slave](shared-file-system-master-slave)|A shared file system such as a SAN|Run as many slaves as required. Automatic recovery of old masters|Requires shared file system
[JDBC Master Slave](jdbc-master-slave)|A Shared database|Run as many slaves as required. Automatic recovery of old masters|Requires a shared database. Also relatively slow as it cannot use the high performance journal
[Replicated LevelDB Store](replicated-Features/PersistenceFeatures/Persistence/Features/Persistence/leveldb-store)|ZooKeeper Server|Run as many slaves as required. Automatic recovery of old masters. Very fast.|Requires a ZooKeeper server.

If you are using a shared network file system such as a SAN we recommend a [Shared File System Master Slave](shared-file-system-master-slave). If you are happy to dispense with the high performance journal and are using pure JDBC as your persistence engine then you should use [JDBC Master Slave](jdbc-master-slave) instead. For those willing to try out new tech, the [Replicated LevelDB Store](leveldb-store) gives speeds similar to a SAN solution without the hassle of having to setup a highly available shared file system.

