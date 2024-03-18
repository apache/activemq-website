---
layout: default_md
title: Broker Configuration URI 
title-class: page-title-classic
type: classic
---

[Using ActiveMQ Classic](using-activemq-classic) > [Configuring Transports](configuring-transports) > [ActiveMQ Classic Connection URIs](activemq-classic-connection-uris) > [Broker Configuration URI](broker-configuration-uri)


### Overview

An ActiveMQ Classic broker can be extensivly configured using a single configuration URI. The following URI schemes are supported

Scheme|Link|Description
---|---|---
xbean:|[Broker XBean URI](broker-xbean-uri)|Configures the broker using an [Xml Configuration](xml-configuration) from an XML file which is on the classpath (or in 4.2 onwards can be on the file system or an external URL) which uses Spring and xbean-spring to configure the broker
broker:|[Broker URI](broker-uri)|Configures the broker explicitly using a URI syntax
properties:|[Broker Properties URI](broker-properties-uri)|Configures the broker explicitly using a URI syntax

For the most flexible and powerful option we recommend the [Xml Configuration](xml-configuration) via the [Broker XBean URI](broker-xbean-uri) to configure AcitveMQ brokers.

If you are worried about jar dependencies then either the [Broker URI](broker-uri) or the [Broker Properties URI](broker-properties-uri) are useful as they are very simple and require no dependencies on Spring or xbean-spring and don't require any XML.

