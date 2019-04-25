---
layout: default_md
title: CMS Documentation
title-class: page-title-cms
type: cms
---

### Overview

CMS (stands for C++ Messaging Service) is a JMS-like API for C++ for interfacing with Message Brokers such as Apache ActiveMQ. CMS helps to make your C++ client code much neater and easier to follow. To get a better feel for CMS try the API Reference. ActiveMQ-CPP is a client only library, a message broker such as Apache ActiveMQ is still needed for your clients to communicate.

Our implementation of CMS is called ActiveMQ-CPP, which has an architecture that allows for pluggable transports and wire formats. Currently we support the OpenWire and Stomp protocols, both over TCP and SSL, we also now support a Failover Transport for more reliable client operation. In addition to CMS, ActiveMQ-CPP also provides a robust set of classes that support platform independent constructs such as threading, I/O, sockets, etc. You may find many of these utilities very useful, such as a Java like Thread class or the "synchronized" macro that let's you use a Java-like synchronization on any object that implements the activemq::concurrent::Synchronizable interface. ActiveMQ-CPP is released under the [Apache 2.0 License](http://www.apache.org/licenses/LICENSE-2.0.html).

Read more in the dedicated [CMS API overview](overview).

*   [Configuring](configuring)
*   [Example](example)

### API Reference <a name="#api"></a>

*   [ActiveMQ-CPP 3.9.x](api_docs/activemqcpp-3.9.0/html/)
*   [ActiveMQ-CPP 3.6.x](api_docs/activemqcpp-3.6.0/html/)

### Connectivity

*   [Stomp](stomp-support)
*   [OpenWire](openwire-support)

### Tutorials

*   [Handling Advisory Messages](tutorials/handling-advisory-messages)

### Developers

*   [Source](developers/source)
*   [Building](developers/building)
*   [Creating Distributions](developers/creating-distributions)
