---
layout: default_md
title: Configuring Brokers 
title-class: page-title-classic
type: classic
---

[Using ActiveMQ Classic](using-activemq-classic) > [Configuring Brokers](configuring-brokers)


### Overview

In ActiveMQ Classic 4, we are using a new xml format to configure the broker.

### Syntax

The following xsd describes the syntax of the broker configuration file.

[activemq-4.0.xsd](configuring-brokers.data/activemq-4.0.xsd?version=1&modificationDate=1133701454000&api=v2)

And here is the reference documentation for that xsd file.

[activemq-4.0.xsd.html](configuring-brokers.data/activemq-4.0.xsd.html?version=1&modificationDate=1133701442000&api=v2)

### Example
```
<beans xmlns="http://activemq.org/config/1.0">

  <broker useJmx="true">
  
    <persistenceAdapter>
      <journaledJDBC journalLogFiles="5" dataDirectory="../data"/>
    </persistenceAdapter>
  
    <transportConnectors>
      <transportConnector uri="discovery:tcp://localhost:61616"/>
    </transportConnectors>
    
    <networkConnectors>
      <networkConnector uri="multicast"/>
    </networkConnectors>
    
  </broker>
  
</beans>
```
