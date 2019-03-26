Apache ActiveMQ ™ -- OpenWire 

[Connectivity](../../connectivity.md) > [Protocols](../../Connectivity/protocols.md) > [OpenWire](../../Connectivity/Protocols/openwire.md)


OpenWire is our cross language [Wire Protocol](../../Developers/wire-protocol.md) to allow native access to ActiveMQ from a number of different languages and platforms. The Java OpenWire transport is the default transport in ActiveMQ 4.x or later. For other languages see the following...

*   [NMS](http://activemq.apache.org/nms/) for the C# API to Messaging and the OpenWire implementation in C#
*   [CMS](cms/index.html) for the C++ API to Messaging and the OpenWire implementation in C++

**Note** that you can also use [Stomp](../../Connectivity/Protocols/stomp.md) to access ActiveMQ from many different languages as well as use [GCJ](../../FAQ/Using Apache ActiveMQ/how-do-i-access-activemq-from-c.md) or [IKVM](http://activemq.apache.org/nms/) to access the Java code for ActiveMQ from C/C++ or .Net respectively without using OpenWire.

### How it works

OpenWire works by code generating language specific commands and marshaling code which understands the core OpenWire protocol. Then we can write language specific extensions for the low level protocol to provide a nice and easy to use client API in different languages.

To give you an idea, [here](https://svn.apache.org/repos/asf/activemq/trunk/activemq-openwire-generator/src/main/java/org/apache/activemq/openwire/tool/) are the Java classes which code generate the C#, Java, C, and CPP client code.

Since OpenWire automates the creation of language specific [Wire Protocol](../../Developers/wire-protocol.md) implementations; then its a matter of wrapping the language specific TCP/IP socket code and wrapping the API in some easy to use functions/classes.

### Specification

For a detailed specification of what you will see on the wire:

*   [OpenWire Version 2 Specification](../../Connectivity/Protocols/OpenWire/openwire-version-2-specification.md)

