---
layout: default_md
title: UDP Transport Reference 
title-class: page-title-activemq5
type: activemq5
---

[Using ActiveMQ](using-activemq) > [Configuring Transports](configuring-transports) > [ActiveMQ Connection URIs](activemq-connection-uris) > [UDP Transport Reference](udp-transport-reference)


### The UDP Transport

The UDP transport allows clients to connect to a remote ActiveMQ broker using raw UDP

Note that by default UDP is not reliable; datagrams can be lost so you should add a reliability layer to ensure the JMS contract can be implemented on a non-reliable transport.

#### Configuration Syntax

`udp://hostname:port?transportOptions**

##### Transport Options

Option Name

Default Value

Description

minmumWireFormatVersion

0

The minimum version wireformat that is allowed

trace

false

Causes all commands that are sent over the transport to be logged

useLocalHost

true

When true, it causes the local machines name to resolve to "localhost".

datagramSize

4 * 1024

Specifies the size of a datagram

wireFormat

default

The name of the WireFormat to use

wireFormat.*

All the properties with this prefix are used to configure the wireFormat. See [Configuring Wire Formats](configuring-wire-formats) for more information

##### Example URI

udp://localhost:8123

