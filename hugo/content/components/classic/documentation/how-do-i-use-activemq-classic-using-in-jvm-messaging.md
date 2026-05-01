---
title: How do I use ActiveMQ Classic using in JVM messaging
layout: classic-doc
---



### For ActiveMQ Classic 3.x/4.x

To use pure in-memory messaging you just need to set the broker URL to be
```
vm://localhost
```
Actually you can use any text after _vm://_ so that you can segment multiple logical JMS brokers within the same JVM and classloader, using the name to distinguish between them.

There is an example of how to do this along with a description of the available protocols in the [Protocols overview](uri-protocols).

Also see: [how to optimise the VM transport](how-should-i-use-the-vm-transport)

