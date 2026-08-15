---
title: NMS Documentation
layout: nms-download
---

### API Overview

The [NMS API](../nms-api) (_.Net Message Service API_) provides a standard .NET interface to Messaging Systems. There are multiple implementations for different [providers](#providers). The NMS API allows you to build .NET applications in C#, VB, or any other .NET language, using a single API to connect to multiple different providers using a JMS style API.

NMS API currently supports all of the features of JMS in a simple pure C# API and implementation apart from XA. Current features include:

* Creating & disposing of connections, sessions, producers, consumers
* Sending of messages to topics, queues with durable or non durable along with temporary destination support
* Synchronous consuming (blocking receive, receive with no wait or receive with a timeout)
* Asynchronous consuming (adding a MessageListener to be dispatched in the thread pool)
* Message header support along with custom properties
* Text, Bytes, Stream and Map message support
* Support for transactions (sending and acknowledging multiple messages in an atomic transaction)
* Redelivery of messages in rollbacks up to some configured maximum redelivery count
* Optional Queue browser interface for providers that can support it
* Optional .NET Distributed Transaction Support for providers that can support that

---

### Providers {#providers}

An NMS Provider is a .NET Assembly that provides an implementation of the NMS API for connectivity with a particular Messaging Service or protocol. Currently, the following providers are available:

* [AMQP](../providers/amqp) — AMQP 1.0 protocol, compatible with ActiveMQ 5.x, ActiveMQ Artemis and any other AMQP 1.0 compliant broker.
* [ActiveMQ (OpenWire)](../providers/activemq) — communicates with ActiveMQ 5.x using its native wire protocol with many advanced features beyond the standard NMS API.

---

### Examples {#examples}

* [NMS Simple Asynchronous Consumer Example](../examples/nms-simple-asynchronous-consumer-example)
* [NMS Simple Synchronous Consumer Example](../examples/nms-simple-synchronous-consumer-example)
