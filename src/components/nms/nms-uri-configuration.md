---
layout: default_md
title: NMS URI Configuration 
title-class: page-title-nms
type: nms
---

When working with the generic NMS API NMSConnectionFactory class you must choose via the URI which NMS provider you actually wish to use. This page documents the uri syntax and available options for the NMS providers.

### Connection URI Parameters

#####  Example Configuration
```
cf = new NMSConnectionFactory("activemq:tcp://localhost:61616");
```
### NMS Provider Options

Click on the provider name to visit the URI configuration documentation for your chosen NMS provider.

|Option Name|Description|
|---|---|
|[activemq](providers/activemq/uri-configuration)|Use the NMS.ActiveMQ Provider to talk to an ActiveMQ Broker.|
|[stomp](providers/stomp/uri-configuration)|Use the NMS.Stomp Provider to talk to an Stomp Broker ActivemMQ Broker supports the Stomp protocol natively.|
|ems|Use the NMS.EMS Provider to talk to a TIBCO Broker.|
|msmq|Use the NMS.MSMQ Provider to talk to a Microsoft Messaging (MSMQ) Broker.|
|wcf|Use the NMS.WCF Provider to support a Windows Communication Foundation (WCF) endpoint connection for connecting to a back-end broker.|
|xms|Use the NMS.XMS Provider to talk to an IBM MQSerios Broker. This provider is currently not implemented.|


