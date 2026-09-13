---
title: Could not find PacketReader for packet type - UNKNOWN PACKET TYPE
layout: classic-doc
---



### Error
```
Could not find PacketReader for packet type: UNKNOWN PACKET TYPE: -102
```

### Reason

You are probably using different versions of ActiveMQ Classic jars on the client and the broker. Try using the same jars on each node and the problem should go away.

Once 4.0 is GA we will be freezing the wire format version then increasing it for every future GA release - so the error message you get going forward should be more explicit

