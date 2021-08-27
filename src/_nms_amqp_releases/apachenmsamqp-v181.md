---
layout: default_md
title: Apache.NMS.AMQP v1.8.1 
title-class: page-title-nms
type: nms
release_date: 2021-04-04
---

Download Here
-------------

|Description|Download Link|PGP Signature File|Version|
|---|---|---|---|
|Apache.NMS.AMQP Source code|[Apache.NMS.AMQP-1.8.1-src.zip](http://www.apache.org/dyn/closer.lua/activemq/apache-nms-amqp/1.8.1/Apache.NMS.AMQP-1.8.1-src.zip)|[Apache.NMS.AMQP-1.8.1-src.zip.asc](http://www.apache.org/dist/activemq/apache-nms-amqp/1.8.1/Apache.NMS.AMQP-1.8.1-src.zip.asc)|1.8.1|
|Apache.NMS.AMQP Binary Assemblies|[Apache.NMS.AMQP-1.8.1-bin.zip](http://www.apache.org/dyn/closer.lua/activemq/apache-nms-amqp/1.8.1/Apache.NMS.AMQP-1.8.1-bin.zip)|[Apache.NMS.AMQP-1.8.1-bin.zip.asc](http://www.apache.org/dist/activemq/apache-nms-amqp/1.8.1/Apache.NMS.AMQP-1.8.1-bin.zip.asc)|1.8.1|
|Apache.NMS.AMQP Nuget Package|[Apache.NMS.AMQP.1.8.1.nupkg](http://www.apache.org/dyn/closer.lua/activemq/apache-nms-amqp/1.8.1/Apache.NMS.AMQP.1.8.1.nupkg)|[Apache.NMS.AMQP.1.8.1.nupkg.asc](http://www.apache.org/dist/activemq/apache-nms-amqp/1.8.1/Apache.NMS.AMQP.1.8.1.nupkg.asc)|1.8.1|


Git Tag Checkout
----------------

```
git clone https://gitbox.apache.org/repos/asf/activemq-nms-amqp.git
git checkout tags/1.8.1
```

Changelog
---------

- AMQNET-627: Transactions implementation adjustments
- AMQNET-629: Rework Meta classes
- AMQNET-622: Invoke IConnection event listeners on connection lost and on reconnect
- AMQNET-633: Fix session creation when connection not started
- AMQNET-634: Use 4 as default msg priority
- AMQNET-635: Update AMQPNetLite.Core to 2.4.0 version