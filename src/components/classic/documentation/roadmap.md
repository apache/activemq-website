---
layout: default_md
title: Roadmap
title-class: page-title-classic
type: classic
---

[Roadmap](roadmap)

This is a high level overview of the ActiveMQ roadmap.
You can find more details about proposals on [GitHub Issues with the proposal label](https://github.com/apache/activemq/issues?q=is%3Aissue%20label%3Aproposal).

* [6.3.0](https://github.com/apache/activemq/milestone/1)
  * Java 25 support (runtime)
  * Virtual Thread Support Preview
  * Jetty 12 support
  * JMS 3 `receiveBody` support
  * Helm Charts
* [6.4.0](https://github.com/apache/activemq/milestone/2)
  * New security features
    * OAuth2 
    * External IdP/IdM support
    * OPA support
  * New JMS 3 features support
* [6.5.0](https://github.com/apache/activemq/milestone/3)
  * New JMS 3 features support
    * Message DeliveryDelay
    * CompletionListener async send support
    * Shared Subscription/Consumer
    * JMSContext support in pool
* [6.6.0](https://github.com/apache/activemq/milestone/4)
  * Replicated/Mirrored features (several active KahaDB/broker instances for HA and clustering)
  * Lock coordinator on the transport connector
* [7.0.0](https://github.com/apache/activemq/milestone/5)
  * New pluggable runtime
  * New configuration formats (yaml, xml, json, ...)
  * Remove Spring dependencies
