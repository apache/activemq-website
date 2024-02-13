---
layout: default_md
title: ZeroConf 
title-class: page-title-classic
type: classic
---

[Using ActiveMQ Classic](using-activemq-classic) > [Configuring Transports](configuring-transports) > [ZeroConf Transport Reference](zeroconf-transport-reference) > [ZeroConf](zeroconf)


ZeroConf
--------

[ZeroConf](http://www.zeroconf.org/) is a standard service discovery mechanism. ZeroConf is used on Apple's OS X; which used to call it Rendezvous but now calls it Bonjour.

Support for [ZeroConf](zeroconf) is **deprecated** and scheduled to be removed from ActiveMQ Classic 5.8 onwards.

We use the [jmDNS](http://jmdns.sf.net/) project to implement the Zeroconf specification to detect services. This means other Zeroconf  
based tools can be used in conjunction with this discovery agent.

You can use ZeroConf with ActiveMQ Classic's [Discovery](discovery) mechanism. For more details see

*   [Discovery](discovery)
*   [ZeroConf Transport Reference](zeroconf-transport-reference)

