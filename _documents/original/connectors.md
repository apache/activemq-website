  Connectors · ActiveMQ Artemis Documentation               

*   [Introduction](./)
*   [Configuration](Community/FAQ/configuration.md)
*   [Connectors](connectors.md)
*   [Destinations](destinations.md)
*   [Authentication](authentication.md)
*   [Authorization](authorization.md)
*   [SSL](ssl.md)
*   [Legal Notice](notice.md)

*   [Published with GitBook](https://www.gitbook.com)

[Connectors](.)
===============

Connectors
==========

After broker is started, you'll want to connect your clients to it. So, let's start with comparing ActiveMQ and Artemis configurations in area of client connectors. In ActiveMQ terminology, they are called _transport connectors_, and the default configuration looks something like this (in `conf/activemq.xml`).

    <transportConnectors>
        <transportConnector name="openwire" uri="tcp://0.0.0.0:61616?maximumConnections=1000&amp;wireFormat.maxFrameSize=104857600"/>
        <transportConnector name="amqp" uri="amqp://0.0.0.0:5672?maximumConnections=1000&amp;wireFormat.maxFrameSize=104857600"/>
        <transportConnector name="stomp" uri="stomp://0.0.0.0:61613?maximumConnections=1000&amp;wireFormat.maxFrameSize=104857600"/>
        <transportConnector name="mqtt" uri="mqtt://0.0.0.0:1883?maximumConnections=1000&amp;wireFormat.maxFrameSize=104857600"/>
        <transportConnector name="ws" uri="ws://0.0.0.0:61614?maximumConnections=1000&amp;wireFormat.maxFrameSize=104857600"/>
    </transportConnectors>
    

In Artemis, client connectors are called _acceptors_ and they are configured in `etc/broker.xml` like this

    <acceptors>
        <acceptor name="artemis">tcp://0.0.0.0:61616?tcpSendBufferSize=1048576;tcpReceiveBufferSize=1048576;protocols=CORE,AMQP,STOMP,HORNETQ,MQTT,OPENWIRE</acceptor>
        <acceptor name="amqp">tcp://0.0.0.0:5672?protocols=AMQP</acceptor>
        <acceptor name="stomp">tcp://0.0.0.0:61613?protocols=STOMP</acceptor>
        <acceptor name="hornetq">tcp://0.0.0.0:5445?protocols=HORNETQ,STOMP</acceptor>
        <acceptor name="mqtt">tcp://0.0.0.0:1883?protocols=MQTT</acceptor>
    </acceptors>
    

As you can notice the syntax is very similar, but there are still some differences that we need to understand. First, as we said earlier, there's no notion of blocking and non-blocking (nio) transport in Artemis, so you should treat everything as non-blocking. Also, in Artemis the low level transport is distinct from the actual messaging protocol (like AMQP or MQTT) used on top of it. One acceptor can handle multiple messaging protocols on the same port. By default, all protocols are accepted on the single port, but you can restrict this using the `protocols=X,Y` uri attribute pattern as shown in the example above.

Besides _tcp_ network protocol, Artemis support _InVm_ and _Web Socket_ transports. The _InVm_ transport is similar to ActiveMQ's _vm_ transport and is used to connect clients to the embedded broker. The difference is that you can use any messaging protocol on top of _InVm_ transport in Artemis, while _vm_ transport in ActiveMQ is tied to OpenWire.

One of the advantages of using Netty for IO layer, is that Web Sockets are supported out of the box. So, there's no need for the separate _ws_ transport like in ActiveMQ, the _tcp_ (Netty) acceptor in Artemis will detect Web Socket clients and handle them accordingly.

To summarize this topic, here's a table that shows you how to migrate your ActiveMQ transport connectors to the Artemis acceptors

ActiveMQ

Artemis (options in the acceptor URL)

OpenWire

protocols=OpenWire (version 10+)

NIO

-

AMQP

protocols=AMQP

STOMP

protocols=STOMP

VM (OpenWire only)

InVM (all protocols, peer to tcp)

HTTP (OpenWire-based)

-

MQTT

protocols=MQTT

WebSocket (STOMP and MQTT)

handled by tcp (all protocols)

results matching ""
===================

No results matching ""
======================

[](Community/FAQ/configuration.md)[](destinations.md)

var gitbook = gitbook || \[\]; gitbook.push(function() { gitbook.page.hasChanged({"page":{"title":"Connectors","level":"1.3","depth":1,"next":{"title":"Destinations","level":"1.4","depth":1,"path":"destinations.md","ref":"destinations.md","articles":\[\]},"previous":{"title":"Configuration","level":"1.2","depth":1,"path":"Community/FAQ/configuration.md","ref":"Community/FAQ/configuration.md","articles":\[\]},"dir":"ltr"},"config":{"plugins":\[\],"styles":{"website":"styles/website.css","pdf":"styles/pdf.css","epub":"styles/epub.css","mobi":"styles/mobi.css","ebook":"styles/ebook.css","print":"styles/print.css"},"pluginsConfig":{"highlight":{},"search":{},"lunr":{"maxIndexSize":1000000,"ignoreSpecialCharacters":false},"sharing":{"facebook":true,"twitter":true,"google":false,"weibo":false,"instapaper":false,"vk":false,"all":\["facebook","google","twitter","weibo","instapaper"\]},"fontsettings":{"theme":"white","family":"sans","size":2},"theme-default":{"styles":{"website":"styles/website.css","pdf":"styles/pdf.css","epub":"styles/epub.css","mobi":"styles/mobi.css","ebook":"styles/ebook.css","print":"styles/print.css"},"showLevel":false}},"github":"apache/activemq-artemis","theme":"default","githubHost":"https://github.com/","pdf":{"pageNumbers":true,"fontSize":12,"fontFamily":"Arial","paperSize":"a4","chapterMark":"pagebreak","pageBreaksBefore":"/","margin":{"right":62,"left":62,"top":56,"bottom":56}},"structure":{"langs":"LANGS.md","readme":"README.md","glossary":"GLOSSARY.md","summary":"SUMMARY.md"},"variables":{},"title":"ActiveMQ Artemis Documentation","links":{"home":"http://activemq.apache.org/","issues":"http://activemq.apache.org/","contribute":"http://activemq.apache.orgCommunityCommunity/Community/contributing.md"},"gitbook":"3.x.x","description":"ActiveMQ Artemis Migration Guide"},"file":{"path":"connectors.md","mtime":"2017-03-10T10:03:20.000Z","type":"markdown"},"gitbook":{"version":"3.2.2","time":"2017-03-10T13:48:00.771Z"},"basePath":".","book":{"language":""}}); });