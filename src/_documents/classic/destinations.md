  Destinations · ActiveMQ Artemis Documentation               

*   [Introduction](./)
*   [Configuration](FAQ/configuration.md)
*   [Connectors](connectors.md)
*   [Destinations](destinations.md)
*   [Authentication](authentication.md)
*   [Authorization](authorization.md)
*   [SSL](ssl.md)
*   [Legal Notice](notice.md)

*   [Published with GitBook](https://www.gitbook.com)

[Destinations](.)
=================

Destinations
============

We already talked about addressing differences between ActiveMQ and Artemis in the [introduction](./). Now let's dig into the details and see how to configure JMS queues and topics. It's important to note here that both brokers are configured by default to _auto-create_ destinations requested by clients, which is preferred behavior for many use cases. This is configured using authorization security policies, so we will cover this topic in the later sections of this manual. For now, let's see how you can predefine JMS queues and topics in both brokers.

In ActiveMQ, destinations are pre-defined in the `<destinations>` section of the `conf/activemq.xml` configuration file.

    <destinations>
         <queue physicalName="my-queue" />
         <topic physicalName="my-topic" />
    </destinations>
    

Things looks a bit different in Artemis. We already explained that queues are `anycast` addresses and topics are `muticast` ones. We're not gonna go deep into the address settings details here and you're advised to look at the user manual for that. Let's just see what we need to do in order to replicate ActiveMQ configuration.

Addresses are defined in `<addresses>` section of the `etc/broker.xml` configuration file. So the corresponding Artemis configuration for the ActiveMQ example above, looks like this:

    <addresses>    
        <address name="my-queue">
            <anycast>
                <queue name="my-queue"/>
            </anycast>
        </address>
    
        <address name="my-topic">
            <multicast></multicast>
        </address>
    </adresses>
    

After this step we have our destinations ready in the new broker.

results matching ""
===================

No results matching ""
======================

[](connectors.md)[](authentication.md)

var gitbook = gitbook || \[\]; gitbook.push(function() { gitbook.page.hasChanged({"page":{"title":"Destinations","level":"1.4","depth":1,"next":{"title":"Authentication","level":"1.5","depth":1,"path":"authentication.md","ref":"authentication.md","articles":\[\]},"previous":{"title":"Connectors","level":"1.3","depth":1,"path":"connectors.md","ref":"connectors.md","articles":\[\]},"dir":"ltr"},"config":{"plugins":\[\],"styles":{"website":"styles/website.css","pdf":"styles/pdf.css","epub":"styles/epub.css","mobi":"styles/mobi.css","ebook":"styles/ebook.css","print":"styles/print.css"},"pluginsConfig":{"highlight":{},"search":{},"lunr":{"maxIndexSize":1000000,"ignoreSpecialCharacters":false},"sharing":{"facebook":true,"twitter":true,"google":false,"weibo":false,"instapaper":false,"vk":false,"all":\["facebook","google","twitter","weibo","instapaper"\]},"fontsettings":{"theme":"white","family":"sans","size":2},"theme-default":{"styles":{"website":"styles/website.css","pdf":"styles/pdf.css","epub":"styles/epub.css","mobi":"styles/mobi.css","ebook":"styles/ebook.css","print":"styles/print.css"},"showLevel":false}},"github":"apache/activemq-artemis","theme":"default","githubHost":"https://github.com/","pdf":{"pageNumbers":true,"fontSize":12,"fontFamily":"Arial","paperSize":"a4","chapterMark":"pagebreak","pageBreaksBefore":"/","margin":{"right":62,"left":62,"top":56,"bottom":56}},"structure":{"langs":"LANGS.md","readme":"README.md","glossary":"GLOSSARY.md","summary":"SUMMARY.md"},"variables":{},"title":"ActiveMQ Artemis Documentation","links":{"home":"http://activemq.apache.org/","issues":"http://activemq.apache.org/","contribute":"http://activemq.apache.orgCommunityCommunity/Community/contributing.md"},"gitbook":"3.x.x","description":"ActiveMQ Artemis Migration Guide"},"file":{"path":"destinations.md","mtime":"2017-03-10T10:03:20.000Z","type":"markdown"},"gitbook":{"version":"3.2.2","time":"2017-03-10T13:48:00.771Z"},"basePath":".","book":{"language":""}}); });