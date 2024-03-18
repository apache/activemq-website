---
layout: default_md
title: Web Samples 
title-class: page-title-classic
type: classic
---

[Using ActiveMQ Classic](using-activemq-classic) > [Web Samples](web-samples)

There are a few example programs demonstrating the [REST](rest), [Ajax](ajax) and [WebSockets](websockets) messaging that comes with the ActiveMQ Classic distribution.

Up until version 5.8 web demos were included in the default configuration and could be accessed directly using [http://localhost:8161/demo](http://localhost:8161/demo) url after starting the broker.

From 5.8 onwards, demos are excluded from default configuration. To start a broker with web examples, use `activemq-demo.xml` configuration file, like
```
bin/activemq console xbean:examples/conf/activemq-demo.xml
```
See Also
--------

*   [Examples](examples)
*   [JMX](jmx)
*   [Web Console](web-console)

