Apache ActiveMQ ™ -- NMS Providers 

[Index](index.html) > [Apache.NMS](Index/apacheIndex/Overview/nms.md) > [NMS Providers](Index/Apache.NMS/nms-providers.md)

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


