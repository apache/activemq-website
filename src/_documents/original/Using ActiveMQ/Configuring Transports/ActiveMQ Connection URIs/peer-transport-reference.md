Apache ActiveMQ ™ -- Peer Transport Reference 

[Using ActiveMQ](using-activemq.md) > [Configuring Transports](Using ActiveMQ/configuring-transports.md) > [ActiveMQ Connection URIs](Using ActiveMQ/Configuring Transports/activemq-connection-uris.md) > [Peer Transport Reference](Using ActiveMQ/Configuring Transports/ActiveMQ Connection URIs/peer-transport-reference.md)


### The Peer Transport

The Peer transport provides a peer-to-peer network with ActiveMQ. What actually happens is the peer transport uses the VM transport to create and connect to a local embedded broker but which configures the embedded broker to establish network connections to other peer embedded brokers.

#### Configuration Syntax

**peer://peer-group/brokerName?brokerOptions**

##### Example URI

peer://groupa/broker1?persistent=false

