---
layout: default_md
title: NMS Documentation
title-class: page-title-nms
type: nms
---

### API Overview

The [NMS API](nms-api) (_.Net Message Service API_) provides a standard .NET interface to Messaging Systems. There are multiple implementations for different [providers](#providers) (including MSMQ). The NMS API allows you to build .NET applications in C#, VB, or any other .NET language, using a single API to connect to multiple different providers using a JMS style API.

NMS API currently supports all of the features of JMS in a simple pure C# API and implementation apart from XA. Current features include:

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

A provider implementation based on a pure C# implementation of OpenWire is provided for working with the Apache ActiveMQ broker. There are other [provider implementations](#providers) for working with Stomp, TIBCO EMS, Microsoft Message Queue (MSMQ), AMQP, and Windows Communication Foundation (WCF).

If you are curious you can browse the [source code and tests](https://svn.apache.org/repos/asf/activemq/activemq-dotnet/) for the entire project or download an [NMS Provider](#providers).

*   [API](nms-api)
*   [API Downloads](nms-api-downloads)
*   [Providers](#providers)
*   [Examples](#examples)
*   [URI Configuration](nms-uri-configuration)

---

### Providers <a name="providers"></a>

An NMS Provider is a .NET Assembly that provides an implementation of the NMS API that provides connectivity with a particular Messaging Service or an implementation of a standard Messaging Protocol. Currently, the following providers are available:

*   [ActiveMQ](providers/activemq) client which communicates with ActiveMQ using its own native wire protocol and provides many [advanced features](providers/activemq/advanced-features) beyond the standard NMS API.
*   [STOMP](providers/stomp) which connects to any [STOMP Broker](https://stomp.github.io/implementations.html). Also, when coupled with StompConnect, NMS can be used to communicate with pretty much any existing MOM provider! (Or at least those that support JMS which most MOM providers do).
*   [MSMQ](providers/msmq) is an implementation of NMS using Microsoft's MSMQ API.
*   [EMS](providers/ems) provider for talking to TIBCO's EMS message broker. To use this, you will need to following TIBCO's licensing requirements to acquire the TIBCO client assembly DLL. NMS does not ship with the TIBCO client assembly.
*   [WCF](providers/wcf) provides support of Windows Communications Framework.
*   [AMQP](providers/amqp) provides support for AMQP 1.0.

---

### Building the code

While there are binary distributions available for all the NMS Providers you sometimes might want to build the code from trunk in order to test out the latest changes or fixes. On Windows you can use Visual Studio to build the code. On Linux or OS X you can use [Mono](http://www.mono-project.com).

The build uses [NAnt](http://nant.sourceforge.net/) which both work on .Net and Mono.  You will need to have NAnt 0.91-Alpha2 or later.

For more help see the [Building NMS](building) guide.

---

### Alternatives to NMS

There are currently a few alternatives to using NMS and working with ActiveMQ in .NET applications however the [NMS ActiveMQ Provider](providers/activemq) is very feature rich and we recommend it as your starting point for .NET ActiveMQ inter-op.

*   use the [pure C# Stomp client](http://stomp.codehaus.org/DotNet) to access ActiveMQ from .Net using a lightweight client.
*   use the ActiveMQ Java client from C# and .Net using IKVM. [More information](http://dotnetjunkies.com/WebLog/csteen/archive/2004/08/20/22813.aspx).
*   use the [ActiveMQ REST](http://activemq.apache.orgConnectivity/ProtocolsConnectivity/Protocols/Connectivity/Protocols/rest.md) API via HTTP
*   use the [ActiveMQ C Integration](http://activemq.apache.orgConnectivity/Cross Language ClientsConnectivity/Cross Language Clients/Connectivity/Cross Language Clients/c-integration.md) to reuse the C/C++ library.

---

### Examples <a name="examples"></a>

This is where you will find examples of how to use the NMS API. These examples demonstrate using the NMS API generically and are limited to features exposed directly through the API model. For examples covering more advanced features of a specific NMS Provider, refer to the documentation for that NMS Provider.

*   [NMS Simple Asynchronous Consumer Example](examples/nms-simple-asynchronous-consumer-example)
*   [NMS Simple Synchronous Consumer Example](examples/nms-simple-synchronous-consumer-example)
















