---
layout: default_md
title: ZeroConf Transport Reference 
title-class: page-title-classic
type: classic
---

[Using ActiveMQ Classic](using-activemq-classic) > [Configuring Transports](configuring-transports) > [ZeroConf Transport Reference](zeroconf-transport-reference)

### The ZeroConf Transport

The ZeroConf transport works just like [Discovery Transport](discovery-transport-reference), except that it uses a [ZeroConf](zeroconf) based discovery agent to locate the list of broker uris to connect to.

#### Configuration Syntax
```
zeroconf:serviceName?transportOptions
```
or  
```
zeroconf:serviceName
```

where _serviceName_ is the Zeroconf service name; which seems to start with an underscore (_) and must end with a dot (.). So we can use this service name to distinguish development, UAT & production brokers - or group them into domains etc.

Note that to be able to use ZeroConf to find brokers, the brokers need to have [Discovery](discovery) enabled. To configure discovery in a Broker you should use the [Xml Configuration](xml-configuration). Its basically something like...
```
<broker name="foo">
  <transportConnectors>
    <transportConnector name="openwire" uri="tcp://0.0.0.0:61616" discoveryUri="zeroconf:_activemq_development. />
  </transportConnectors>
  ...
</broker>
```

##### Example client URI
```
zeroconf:_activemq_development.
```


