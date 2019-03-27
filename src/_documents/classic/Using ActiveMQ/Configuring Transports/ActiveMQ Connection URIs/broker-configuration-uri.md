Apache ActiveMQ ™ -- Broker Configuration URI 

[Using ActiveMQ](../../../using-activemq.md) > [Configuring Transports](../../../Using ActiveMQ/configuring-transports.md) > [ActiveMQ Connection URIs](../../../Using ActiveMQ/Configuring Transports/activemq-connection-uris.md) > [Broker Configuration URI](../../../Using ActiveMQ/Configuring Transports/ActiveMQ Connection URIs/broker-configuration-uri.md)


### Overview

An ActiveMQ broker can be extensivly configured using a single configuration URI. The following URI schemes are supported

Scheme

Link

Description

xbean:

[Broker XBean URI](../../../Using ActiveMQ/Configuring Transports/ActiveMQ Connection URIs/Broker Configuration URI/broker-xbean-uri.md)

Configures the broker using an [Xml Configuration](xml-Community/FAQ/configuration.md) from an XML file which is on the classpath (or in 4.2 onwards can be on the file system or an external URL) which uses Spring and xbean-spring to configure the broker

broker:

[Broker URI](../../../Using ActiveMQ/Configuring Transports/ActiveMQ Connection URIs/Broker Configuration URI/broker-uri.md)

Configures the broker explicitly using a URI syntax

properties:

[Broker Properties URI](../../../Using ActiveMQ/Configuring Transports/ActiveMQ Connection URIs/Broker Configuration URI/broker-properties-uri.md)

Configures the broker explicitly using a URI syntax

For the most flexible and powerful option we recommend the [Xml Configuration](xml-Community/FAQ/configuration.md) via the [Broker XBean URI](../../../Using ActiveMQ/Configuring Transports/ActiveMQ Connection URIs/Broker Configuration URI/broker-xbean-uri.md) to configure AcitveMQ brokers.

If you are worried about jar dependencies then either the [Broker URI](../../../Using ActiveMQ/Configuring Transports/ActiveMQ Connection URIs/Broker Configuration URI/broker-uri.md) or the [Broker Properties URI](../../../Using ActiveMQ/Configuring Transports/ActiveMQ Connection URIs/Broker Configuration URI/broker-properties-uri.md) are useful as they are very simple and require no dependencies on Spring or xbean-spring and don't require any XML.

