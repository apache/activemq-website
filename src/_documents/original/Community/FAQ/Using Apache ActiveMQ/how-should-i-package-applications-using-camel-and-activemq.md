Apache ActiveMQ ™ -- How should I package applications using Camel and ActiveMQ 

[Community](community.md) > [FAQ](CommunityCommunity/Community/faq.md) > [Using Apache ActiveMQ](Community/FAQCommunity/FAQ/Community/FAQ/using-apache-activemq.md) > [How should I package applications using Camel and ActiveMQ](Community/FAQ/Using Apache ActiveMQCommunity/FAQ/Using Apache ActiveMQ/Community/FAQ/Using Apache ActiveMQ/how-should-i-package-applications-using-camel-and-activemq.md)


How should I package applications using Camel and ActiveMQ
----------------------------------------------------------

So you may wish to use Camel's [Enterprise Integration Patterns](Features/enterprise-integration-patterns.md) inside the ActiveMQ Broker. In which case the stand alone broker is already packaged to work with Camel out of the box; just add your EIP routing rules to ActiveMQ's [Xml Configuration](xml-Community/FAQ/configuration.md) like the example routing rule which ships with ActiveMQ 5.x or later. If you want to include some Java routing rules, then just add your jar to somewhere inside ActiveMQ's lib directory.

If you wish to use ActiveMQ and/or Camel in a standalone application, we recommend you just create a normal Spring application; then add the necessary jars and customise the Spring XML and you're good to go.

### What jars do I need

*   [what jars are required for ActiveMQ](Using ActiveMQ/initial-Community/FAQ/configuration.md)
*   [what jars are required for Camel](http://activemq.apache.org/camelCommunity/FAQ/General/what-jars-do-i-need.md)

