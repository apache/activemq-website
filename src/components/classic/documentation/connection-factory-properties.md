---
layout: default_md
title: Connection Factory Properties 
title-class: page-title-classic
type: classic
---

[Connectivity](connectivity) > [Containers](containers) > [Resource Adapter](resource-adapter) > [Connection Factory Properties](connection-factory-properties)


The 'outbound' Connection Factory objects used to send messages by default use the connection configuration properties of the Resource Adapter deployment, but those properties can be overridden per connection factory.

The Connection Factory properties that can be configured are:

Property Name|Required|Default Value
---|---|---
ServerUrl|no|set in resource adapter
UserName|no|set in resource adapter
Clientid|no|set in resource adapter
Password|no|set in resource adapter
UseInboundSession|no|set in resource adapter

#### ServerUrl

The URL to the ActiveMQ Classic server that you want this connection to connect to. If using an embedded broker, this value should be 'vm://localhost'.

#### UserName

The default user name that will be used to establish connections to the ActiveMQ Classic server.

#### Password

The default password that will be used to log the default user into the ActiveMQ Classic server.

#### Clientid

The client id that will be set on the connection that is established to the ActiveMQ Classic server.

#### UseInboundSession

Boolean to configure if outbound connections should reuse the inbound connection's session for sending messages.

