---
layout: default_md
title: How can I see what destinations are used?
title-class: page-title-classic
type: classic
---

 [FAQ](faq) > [Using ActiveMQ Classic](using-apache-activemq-classic) > [How can I see what destinations are used?](how-can-i-see-what-destinations-are-used)


The easiest way is to use [JMX](jmx) by pointing your JMX console or JConsole at the broker JVM.

You can also get all of the active destinations from the broker using Java code via [getDestinations()](http://activemq.apache.org/maven/apidocs/org/apache/activemq/broker/region/Region.html#getDestinations-org.apache.activemq.command.ActiveMQDestination-).

You can also get a Map of all the [Destination](http://activemq.apache.org/maven/apidocs/org/apache/activemq/broker/region/Destination.html) objects indexed by ActiveMQDestination via [getDestinationMap()](http://activemq.apache.org/maven/apidocs/org/apache/activemq/broker/region/Region.html#getDestinationMap--). This allows you to look at the individual destination details such as the queue depths and so forth

