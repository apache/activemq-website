---
layout: default_md
title: Kaha Persistence 
title-class: page-title-classic
type: classic
---

[Features](features) > [Persistence](persistence) > [Kaha Persistence](kaha-persistence)


Kaha Persistence
----------------

Kaha Peristence is a storage solution written especially for message persistence and is part of the ActiveMQ Classic project. It's tuned to provide optimal performance for typical message usage patterns, which involves writing/reading and discarding messages that are persisted very quickly.

Data stored in Kaha is appended to data logs - the log files are discarded once there is no longer interest in the data contained in the log.

### Configuring Kaha Persistence

In the broker XML specify the persistence adaptor to be Kaha e.g.

ActiveMQ Classic 5.0 and above:
```
<broker brokerName="broker" persistent="true" useShutdownHook="false">
  <transportConnectors>
    <transportConnector uri="tcp://localhost:61616"/>
  </transportConnectors>
  <persistenceAdapter>
    <kahaPersistenceAdapter directory="activemq-data" maxDataFileLength="33554432"/>
  </persistenceAdapter>
</broker>
```
ActiveMQ Classic 4.1 and earlier:
```
<broker brokerName="broker" persistent="true" useShutdownHook="false">
  <transportConnectors>
    <transportConnector uri="tcp://localhost:61616"/>
  </transportConnectors>
  <persistenceAdapter>
    <kahaPersistenceAdapter dir="activemq-data" maxDataFileLength="33554432"/>
  </persistenceAdapter>
</broker>
```
