---
layout: default_md
title: C Integration 
title-class: page-title-classic
type: classic
---

[Connectivity](connectivity) > [Cross Language Clients](cross-language-clients) > [C Integration](c-integration)


It is very common for an organisation to have lots of legacy C code which needs integration into the message bus. The current available solutions are

*   [CMS](#) is an easy-to-use JMS 1.1-like API for C++. Our implementation of CMS is called ActiveMQ-CPP, the architecture for which supports pluggable transport protocols, very much like the ActiveMQ Classic broker itself.
*   use the [OpenWire C Client](openwire-c-client) which is only available in ActiveMQ Classic 4.x or later.
*   we are working on the [OpenWire CPP Client](openwire-cpp-client)

*   use the [Stomp C Client](http://stomp.codehaus.org/C) for any version of ActiveMQ Classic from 3.1 onwards. You can also use [Stomp](http://stomp.codehaus.org/) from many other languages like .Net, Python, Ruby, Perl etc.

Other alternative mechanisms to communicate using.

*   use the [REST](rest) API
*   use [WS-Notification](http://servicemix.org/WS+Notification) and generate C bindings to WS-Notification using a SOAP stack
*   use [.Net or Mono](how-do-i-access-activemq-classic-from-csharp-or-dotnet) to use ActiveMQ Classic insided .Net
*   [Compile ActiveMQ Classic with GCJ](compile-activemq-with-gcj) to get a native C/C++ library
*   link to the ActiveMQ Classic Java client using JNI
*   Use a Jabber client to talk to the ActiveMQ Classic broker via the [XMPP](xmpp) protocol

