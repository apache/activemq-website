---
layout: default_md
title: Peer Transport Reference 
title-class: page-title-activemq5
type: activemq5
---

[Using ActiveMQ](using-activemq) > [Configuring Transports](configuring-transports) > [ActiveMQ Connection URIs](activemq-connection-uris) > [Peer Transport Reference](peer-transport-reference)


### The Peer Transport

The Peer transport provides a peer-to-peer network with ActiveMQ. What actually happens is the peer transport uses the VM transport to create and connect to a local embedded broker but which configures the embedded broker to establish network connections to other peer embedded brokers.

#### Configuration Syntax
```
peer://peer-group/brokerName?brokerOptions
```

##### Example URI
```
peer://groupa/broker1?persistent=false
```
