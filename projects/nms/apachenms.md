---
layout: default_md
title: Apache ActiveMQ ™ -- Apache.NMS 
---

An Overview of NMS
------------------

The [NMS API](nms-Index/Site/NavigationIndex/Site/Navigation/Index/Site/Navigation/api.md) (_.Net Message Service API_) providers a standard .NET interface to Messaging Systems. There could be multiple implementations to different [providers](Index/Apache.NMS/nms-providers.md) (including MSMQ). The NMS API This allows you to build .NET applications in C#, VB, or any other .NET language, using a single API to connect to multiple different providers using a JMS style API.

NMS API currently supports all of the features of JMS in a simple pure C# API and implementation apart from XA. Current features include

*   creating & disposing of connections, sessions, producers, consumers
*   sending of messages to topics, queues with durable or non durable along with temporary destination support
*   synchronous consuming (blocking receive, receive with no wait or receive with a timeout)
*   asynchronous consuming (adding a MessageListener to be dispatched in the thread pool)
*   message header support along with custom properties
*   Text, Bytes, Stream and Map message support
*   support for transactions (sending and acknowledging multiple messages in an atomic transaction)
*   redelivery of messages in rollbacks up to some configured maximum redelivery count
*   Optional Queue browser interface for providers that can support it.
*   Optional .NET Distributed Transaction Support for providers that can support that.

A provider implementation based on a pure C# implementation of [OpenWire](http://activemq.apache.orgConnectivity/Protocols/openwire.md) is provided for working with the Apache ActiveMQ broker.  There are other [provider implementations](Index/Apache.NMS/nms-providers.md) for working with Stomp, TIBCO, Microsoft Message Queue (MSMQ), and Windows Communication Foundation (WCF).

If you are curious you can browse the [source code and tests](https://svn.apache.org/repos/asf/activemq/activemq-dotnet/) for the entire project or download an [NMS Provider](Index/Apache.NMS/nms-providers.md).

*   [NMS API](nms-Index/Site/NavigationIndex/Site/Navigation/Index/Site/Navigation/api.md)
*   [NMS API Downloads](Index/Apache.NMSIndex/Apache.NMS/Index/Apache.NMS/nms-api-downloads.md)
*   [NMS Examples](nms-Using ActiveMQ/examples.md)
*   [NMS FAQ](nms-CommunityCommunity/Community/faq.md)
*   [NMS Providers](Index/Apache.NMS/nms-providers.md)
*   [NMS URI Configuration](nms-uri-Community/FAQ/configuration.md)


