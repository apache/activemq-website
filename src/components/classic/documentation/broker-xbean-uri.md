---
layout: default_md
title: Broker XBean URI 
title-class: page-title-classic
type: classic
---

[Using ActiveMQ Classic](using-activemq-classic) > [Configuring Transports](configuring-transports) > [ActiveMQ Classic Connection URIs](activemq-classic-connection-uris) > [Broker Configuration URI](broker-configuration-uri) > [Broker XBean URI](broker-xbean-uri)


Broker XBean URI
----------------

The Broker XBean URI allows you to [run a configured broker](run-broker) by referencing an [Xml Configuration](xml-configuration) on the classpath. The URI points to an XML document which can be parsed via XBean or Spring. This URI is typically on the classpath; though in 4.2 onwards you can point to a file or URL as well.

#### Syntax

Syntax|Description
---|---
xbean:classPathResource|Where classPathResource is some name which is resolved on the classpath and interpreted to be an XML document.
xbean:file:filePathResource|Where filePathResource is some name which is resolved on the file system and interpreted to be an XML document.
xbean:urlResource|Where urlResource is some resource which points to an XML document

##### Example URI

The following example starts up a broker using the activemq.xml configuration file which is on the classpath
```
xbean:activemq.xml
```
The following example starts up a broker using the activemq.xml configuration file which is in the current directory
```
xbean:file:./activemq.xml
```