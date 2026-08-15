---
title: OpenWire Support
layout: cms-page
---

[OpenWire](http://activemq.apache.org/openwire.html) is the native protocol used by the ActiveMQ 5.x broker. As of version 2.0, ActiveMQ-CPP supports the OpenWire protocol, with one exception:

- **ObjectMessage** — C++ cannot reconstruct Java objects, so `ObjectMessage` payloads are received but cannot be extracted.
