---
title: Apache.NMS.AMQP
layout: nms-download
---

### Overview

The goal of this project is to combine the [.NET Message Service API](../../) (NMS) with the [Advanced Message Queuing Protocol (AMQP)](https://www.amqp.org/) 1.0 standard wireline protocol.

The NMS API gives the flexibility to write .NET applications in C#, VB or any other .NET language, all while using a single API to connect to any number of messaging providers. AMQP is an open and standardized internet protocol for reliably passing messages between applications or organizations.

- **More Choice:** As more message brokers and services implement the AMQP 1.0 standard wireline, .NET developers will have more options for messaging technology.
- **No Migration Risk:** Since AMQP 1.0 is a wireline standard, you won't run into problems when switching between implementations.
- **Innovation:** Competition forces vendors to innovate and differentiate.

### Download

See the [downloads](downloads) page.

### Configuration

See the [URI configuration](uri-configuration) page.

### Contributing

Grab the source from GitHub: [activemq-nms-amqp](https://github.com/apache/activemq-nms-amqp)

#### Architecture

Apache-NMS-AMQP bridges NMS concepts to AMQP protocol concepts as described in [amqp-bindmap-jms-v1.0-wd09.pdf](https://www.oasis-open.org/committees/download.php/60574/amqp-bindmap-jms-v1.0-wd09.pdf). Top-level classes implementing the NMS interface (_Connection, Session, MessageProducer_, etc.) create and manage the [AmqpNetLite](https://github.com/Azure/amqpnetlite) equivalent objects.
