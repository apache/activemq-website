  SSL · ActiveMQ Artemis Documentation               

*   [Introduction](./)
*   [Configuration](Community/FAQ/configuration.md)
*   [Connectors](connectors.md)
*   [Destinations](destinations.md)
*   [Authentication](authentication.md)
*   [Authorization](authorization.md)
*   [SSL](ssl.md)
*   [Legal Notice](notice.md)

*   [Published with GitBook](https://www.gitbook.com)

[SSL](.)
========

SSL
===

The next interesting security related topic is encrypting transport layer using SSL. Both ActiveMQ and Artemis leverage JDK's Java Secure Socket Extension (JSSE), so things should be easy to migrate.

Let's recap quickly how SSL is used in ActiveMQ. First, you need to define the _SSL Context_. You can do that using `<sslContext>` configuration section in `conf/activemq.xml`, like

    <sslContext>
        <sslContext keyStore="file:${activemq.conf}/broker.ks" keyStorePassword="password"/>
    </sslContext>
    

The SSL context defines key and trust stores to be used by the broker. After this, you set your transport connector with the `ssl` schema and preferably some additional options.

    <transportConnectors>
        <transportConnector name="ssl" uri="ssl://localhost:61617?transport.needClientAuth=true"/>
    </transportConnectors>
    

These options are related to [SSLServerSocket](https://docs.oracle.com/javase/8/docs/api/javax/net/ssl/SSLServerSocket.html) and are specified as URL parameters with the `transport.` prefix, like `needClientAuth` shown in the example above.

In Artemis, Netty is responsible for all things related to the transport layer, so it handles SSL for us as well. All configuration options are set directly on the acceptor, like

    <acceptors>
        <acceptor name="netty-ssl-acceptor">tcp://localhost:61617?sslEnabled=true;keyStorePath=${data.dir}/../etc/broker.ks;keyStorePassword=password;needClientAuth=true</acceptor>
    </acceptors>
    

Note that we used the same Netty connector schema and just added `sslEnabled=true` parameter to use it with SSL. Next, we can go ahead and define key and trust stores. There's a slight difference in parameter naming between two brokers, as shown in the table below.

ActiveMQ

Artemis

keyStore

keyStorePath

keyStorePassword

keyStorePassword

trustStore

trustStorePath

trustStorePassword

trustStorePassword

Finally, you can go and set all other `SSLServerSocket` parameters you need (like `needClientAuth` in this example). There's no extra prefix needed for this in Artemis.

It's important to note that you should be able to reuse your existing key and trust stores and just copy them to the new broker.

results matching ""
===================

No results matching ""
======================

[](authorization.md)[](notice.md)

var gitbook = gitbook || \[\]; gitbook.push(function() { gitbook.page.hasChanged({"page":{"title":"SSL","level":"1.7","depth":1,"next":{"title":"Legal Notice","level":"1.8","depth":1,"path":"notice.md","ref":"notice.md","articles":\[\]},"previous":{"title":"Authorization","level":"1.6","depth":1,"path":"authorization.md","ref":"authorization.md","articles":\[\]},"dir":"ltr"},"config":{"plugins":\[\],"styles":{"website":"styles/website.css","pdf":"styles/pdf.css","epub":"styles/epub.css","mobi":"styles/mobi.css","ebook":"styles/ebook.css","print":"styles/print.css"},"pluginsConfig":{"highlight":{},"search":{},"lunr":{"maxIndexSize":1000000,"ignoreSpecialCharacters":false},"sharing":{"facebook":true,"twitter":true,"google":false,"weibo":false,"instapaper":false,"vk":false,"all":\["facebook","google","twitter","weibo","instapaper"\]},"fontsettings":{"theme":"white","family":"sans","size":2},"theme-default":{"styles":{"website":"styles/website.css","pdf":"styles/pdf.css","epub":"styles/epub.css","mobi":"styles/mobi.css","ebook":"styles/ebook.css","print":"styles/print.css"},"showLevel":false}},"github":"apache/activemq-artemis","theme":"default","githubHost":"https://github.com/","pdf":{"pageNumbers":true,"fontSize":12,"fontFamily":"Arial","paperSize":"a4","chapterMark":"pagebreak","pageBreaksBefore":"/","margin":{"right":62,"left":62,"top":56,"bottom":56}},"structure":{"langs":"LANGS.md","readme":"README.md","glossary":"GLOSSARY.md","summary":"SUMMARY.md"},"variables":{},"title":"ActiveMQ Artemis Documentation","links":{"home":"http://activemq.apache.org/","issues":"http://activemq.apache.org/","contribute":"http://activemq.apache.orgCommunityCommunity/Community/contributing.md"},"gitbook":"3.x.x","description":"ActiveMQ Artemis Migration Guide"},"file":{"path":"ssl.md","mtime":"2017-03-10T13:47:56.000Z","type":"markdown"},"gitbook":{"version":"3.2.2","time":"2017-03-10T13:48:00.771Z"},"basePath":".","book":{"language":""}}); });