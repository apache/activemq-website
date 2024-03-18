---
layout: default_md
title: Configure Startup Destinations 
title-class: page-title-classic
type: classic
---

[Features](features) > [Destination Features](destination-features) > [Configure Startup Destinations](configure-startup-destinations)


Typically in Apache ActiveMQ Classic we [create destinations on demand](how-do-i-create-new-destinations) as clients start to use them. However sometimes users want to be able to configure which destinations are available on startup explicitly in the [Xml Configuration](xml-configuration).

> **4.1 Feature**
> 
> Note this feature is available from 4.1 onwards. If you try this XML on older versions of ActiveMQ Classic you will get an exception about the 'destinations' property not being writable.

### Example

The following [example](http://svn.apache.org/repos/asf/incubator/activemq/trunk/activemq-core/src/test/resources/org/apache/activemq/broker/destinations-on-start.xml) shows how you can configure a number of destinations to be available at startup. <broker xmlns="http://activemq.apache.org/schema/core"> <destinations> <queue physicalName="FOO.BAR" /> <topic physicalName="SOME.TOPIC" /> </destinations> </broker>

