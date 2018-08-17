Apache ActiveMQ ™ -- NMS 

[Index](index.html) > [Overview](overview.md) > [NMS](Index/Overview/nms.md)

Getting Started with NMS
------------------------

The NMS API provides your client with a common API model for working with Message Oriented Middleware, but to make use of the API you need to download one of the NMS Provider libraries. The NMS Providers libraries are what makes it possible for your code to connect to your Message Broker. Follow the links below to read more about the [NMS Provider](Index/Apache.NMS/nms-providers.md) for your Message broker and [download](OverviewOverview/Overview/download.md) a release bundle.

### NMS Providers

An NMS Provider is a .NET Assembly that provides an implementation of the NMS API that provides connectivity with a particular Messaging Service or an implementation of a standard Messaging Protocol. Currently, the following providers are available:

*   [**ActiveMQ**](Index/Apache.NMS/NMS Providers/apachenmsactivemq.md) client which communicates with ActiveMQ using its own native wire protocol and provides many [advanced features](activemq-advanced-features.md) beyond the standard NMS API.
*   [**STOMP**](Index/Apache.NMS/NMS ProvidersIndex/Apache.NMS/NMS Providers/Index/Apache.NMS/NMS Providers/apachenmsstomp.md) which connects to any [STOMP Broker](http://stomp.codehaus.org/).  Also, when coupled with [StompConnect](http://stomp.codehaus.org/StompConnect), NMS can be used to communicate with pretty much any existing MOM provider! (Or at least those that support JMS which most MOM providers do).
*   [**MSMQ**](Index/Apache.NMS/NMS Providers/apachenmsmsmq.md) is an implementation of NMS using Microsoft's MSMQ API.
*   [**EMS**](Index/Apache.NMS/NMS ProvidersIndex/Apache.NMS/NMS Providers/Index/Apache.NMS/NMS Providers/apachenmsems.md) provider for talking to TIBCO's EMS message broker.  To use this, you will need to following TIBCO's licensing requirements to acquire the TIBCO client assembly DLL.  NMS does not ship with the TIBCO client assembly.
*   [**WCF**](Index/Apache.NMS/NMS ProvidersIndex/Apache.NMS/NMS Providers/Index/Apache.NMS/NMS Providers/apachenmswcf.md) provides support of Windows Communications Framework.
*   [**AMQP**](Index/Apache.NMS/NMS Providers/apachenmsamqp.md) is an implementation of NMS using the [Apache Qpid Messaging API](https://qpid.apache.org/components/messaging-api/index.html). AMQP 1.0 protocol support is provided by [Apache Qpid Proton](https://qpid.apache.org/proton/index.html).
*   [**MQTT**](Index/Apache.NMS/NMS Providers/apachenmsConnectivity/Protocols/mqtt.md) provider uses the publish-subscribe pattern that is a "light weight" messaging protocol for use on top of the [TCP/IP protocol](https://en.wikipedia.org/wiki/TCP/IP "TCP/IP"). 
*   **[XMS](Index/Apache.NMS/NMS Providers/apachenmsxms.md)** provider connects to the IBM WebSphere MQ Series broker.

Building the code
-----------------

While there are binary distributions available for all the [NMS Providers](Index/Apache.NMS/nms-providers.md) you sometimes might want to build the code from trunk in order to test out the latest changes or fixes. On Windows you can use Visual Studio to build the code. On Linux or OS X you can use [Mono](http://www.mono-project.com).

The build uses [NAnt](http://nant.sourceforge.net/) which both work on .Net and Mono.  You will need to have NAnt 0.91-Alpha2 or later.

For more help see the [Building NMS](http://activemq.apache.org/nmsDevelopers/building.md) guide.

Alternatives to NMS
-------------------

There are currently a few alternatives to using NMS and working with ActiveMQ in .NET applications however the [NMS ActiveMQ Provider](Index/Apache.NMS/NMS Providers/apachenmsactivemq.md) is very feature rich and we recommend it as your starting point for .NET ActiveMQ inter-op.

*   use the [pure C# Stomp client](http://stomp.codehaus.org/DotNet) to access ActiveMQ from .Net using a lightweight client.
*   use the ActiveMQ Java client from C# and .Net using IKVM. [More information](http://dotnetjunkies.com/WebLog/csteen/archive/2004/08/20/22813.aspx).
*   use the [ActiveMQ REST](http://activemq.apache.orgConnectivity/ProtocolsConnectivity/Protocols/Connectivity/Protocols/rest.md) API via HTTP
*   use the [ActiveMQ C Integration](http://activemq.apache.orgConnectivity/Cross Language ClientsConnectivity/Cross Language Clients/Connectivity/Cross Language Clients/c-integration.md) to reuse the C/C++ library.


