---
layout: default_md
title: New Features in 5.1 
title-class: page-title-classic
type: classic
---

[Features](features) > [New Features](new-features) > [New Features in 5.1](new-features-in-51)


New Features in 5.1
-------------------

In the 5.1.x release of Apache ActiveMQ Classic there are the following new features:

*   You can use the new [DestinationSource](http://activemq.apache.org/maven/activemq-core/apidocs/org/apache/activemq/advisory/DestinationSource.html) on an ActiveMQConnection to access the available queues or topics or listen to queues/topics being created or deleted.    
*   Support for more graceful handling of [timeouts within MessageProducer.send](http://issues.apache.org/activemq/browse/AMQ-1517)
*   Add the option for a [backup channel that is already connected for the Failover transport](http://issues.apache.org/activemq/browse/AMQ-1572)
*   ActiveMQ Classic configuration can now validate against an XSD which means that it can be embedded in a spring configuration file.
*   Stomp can now handle delivering Map and Object messages.

