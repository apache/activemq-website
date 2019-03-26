---
layout: default_md
title: ActiveSoap
title-class: page-title-activemq5
type: activemq5
--- 

[Site](site.md) > [Old Links](old-links) > [ActiveSoap](activesoap)

The idea is to provide a really simple & lightweight SOAP stack which can be extended & connected to any transport and binding technology.

### Pluggable transports

With ActiveMQ we've got most common transports covered (TCP, SSL, UDP, multicast, JGroups, JRMS, JXTA, NIO, AIO, Discovery (Zeroconf/ ActiveCluster), reliable transports etc).

Future protocols could be SOAP-over-TCP, SOAP-over-Jabber, FTP / SMTP / file polling etc.

However we should support any kind of transport using any kind of library - since mostly all a transport does is expose a 'packet' which is just a blob of bytes, a String or a stream.

### Marshalling layers

If we then pass data from the transports into a pluggable connector layer which could consist of either

*   XMLBeans direct
*   JAXB
*   StAX, SAX, DOM, Source (TrAX processing)
*   JAX-RCP endpoints & Axis handlers
*   XStream etc
*   custom parsing / marshalling tools

Then we can make a highly scalable & performing SOAP stack using any marshalling code required - without having to pay the DOM price.

### Custom endpoints

There are various possible ultimate endpoints, from Axis stuff to POJOs to JWS and the like - these should all drop into one of the marshalling technologies - use the most efficient one for the endpoint technology you wish.

Issues
------
*   we need a simple way to write reuable header processors. I suspect writing StAX based ones is gonna be the best way forwards as it makes writing header-based pipeline processors the easiest. But we should make this pluggable.
*   is XMLBeans definitely the fastest stack we can use? XStream is pretty fast though its java centric rather than XSD centric (but maybe thats a good thing
