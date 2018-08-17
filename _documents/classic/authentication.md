  Authentication · ActiveMQ Artemis Documentation               

*   [Introduction](./)
*   [Configuration](FAQ/configuration.md)
*   [Connectors](connectors.md)
*   [Destinations](destinations.md)
*   [Authentication](authentication.md)
*   [Authorization](authorization.md)
*   [SSL](ssl.md)
*   [Legal Notice](notice.md)

*   [Published with GitBook](https://www.gitbook.com)

[Authentication](.)
===================

Authentication
==============

Now that we have our acceptors and addresses ready, it's time to deal with broker security. Artemis inherited most of the security concepts from ActiveMQ. One of the most notable differences is that ActiveMQ _groups_ are now called _roles_ in Artemis. Besides that things should be pretty familiar to existing ActiveMQ users. Let's start by looking into the authentication mechanisms and defining users and roles (groups).

Both ActiveMQ and Artemis use JAAS to define authentication credentials. In ActiveMQ, that's configured through the appropriate broker plugin in `conf/activemq.xml`

    <plugins>
      <jaasAuthenticationPlugin configuration="activemq" />
    </plugins>
    

The name of the JAAS domain is specified as a configuration parameter.

In Artemis, the same thing is achieved by defining `<jaas-security>` configuration in `etc/bootstrap.xml`

    <jaas-security domain="activemq"/>
    

From this point on, you can go and define your users and their roles in appropriate files, like `conf/users.properties` and `conf/groups.properties` in ActiveMQ. Similarly, `etc/artemis-users.properties` and `etc/artemis-roles.properties` files are used in Artemis. These files are interchangeable, so you should be able to just copy your existing configuration over to the new broker.

If your deployment is more complicated that this and requires some advanced JAAS configuration, you'll need go and change the `etc/login.config` file. It's important to say that all custom JAAS modules and configuration you were using in ActiveMQ should be compatible with Artemis.

Finally, in case you're still using ActiveMQ's _Simple Authentication Plugin_, which defines users and groups directly in the broker's xml configuration file, you'll need to migrate to JAAS as Artemis doesn't support the similar concept.

results matching ""
===================

No results matching ""
======================

[](destinations.md)[](authorization.md)

var gitbook = gitbook || \[\]; gitbook.push(function() { gitbook.page.hasChanged({"page":{"title":"Authentication","level":"1.5","depth":1,"next":{"title":"Authorization","level":"1.6","depth":1,"path":"authorization.md","ref":"authorization.md","articles":\[\]},"previous":{"title":"Destinations","level":"1.4","depth":1,"path":"destinations.md","ref":"destinations.md","articles":\[\]},"dir":"ltr"},"config":{"plugins":\[\],"styles":{"website":"styles/website.css","pdf":"styles/pdf.css","epub":"styles/epub.css","mobi":"styles/mobi.css","ebook":"styles/ebook.css","print":"styles/print.css"},"pluginsConfig":{"highlight":{},"search":{},"lunr":{"maxIndexSize":1000000,"ignoreSpecialCharacters":false},"sharing":{"facebook":true,"twitter":true,"google":false,"weibo":false,"instapaper":false,"vk":false,"all":\["facebook","google","twitter","weibo","instapaper"\]},"fontsettings":{"theme":"white","family":"sans","size":2},"theme-default":{"styles":{"website":"styles/website.css","pdf":"styles/pdf.css","epub":"styles/epub.css","mobi":"styles/mobi.css","ebook":"styles/ebook.css","print":"styles/print.css"},"showLevel":false}},"github":"apache/activemq-artemis","theme":"default","githubHost":"https://github.com/","pdf":{"pageNumbers":true,"fontSize":12,"fontFamily":"Arial","paperSize":"a4","chapterMark":"pagebreak","pageBreaksBefore":"/","margin":{"right":62,"left":62,"top":56,"bottom":56}},"structure":{"langs":"LANGS.md","readme":"README.md","glossary":"GLOSSARY.md","summary":"SUMMARY.md"},"variables":{},"title":"ActiveMQ Artemis Documentation","links":{"home":"http://activemq.apache.org/","issues":"http://activemq.apache.org/","contribute":"http://activemq.apache.orgCommunityCommunity/Community/contributing.md"},"gitbook":"3.x.x","description":"ActiveMQ Artemis Migration Guide"},"file":{"path":"authentication.md","mtime":"2017-03-10T10:03:20.000Z","type":"markdown"},"gitbook":{"version":"3.2.2","time":"2017-03-10T13:48:00.771Z"},"basePath":".","book":{"language":""}}); });