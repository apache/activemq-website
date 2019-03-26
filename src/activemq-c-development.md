---
layout: default_md
title: ActiveMQ C Development 
title-class: page-title-activemq5
type: activemq5
---

[Connectivity](connectivity) > [Cross Language Clients](cross-language-clients) > [ActiveMQ C++ Clients](activemq-c-clients) > [ActiveMQ C Development](activemq-c-development)


ActiveMQ CPP Development Page
=============================

This page documents current and planned development of ActiveMQ CPP.  The table below lists development tasks and their current status

Development Activeity|Status  
---|---
Openwire Support|in-progress  

###  Openwire Support

This task adds support for the OpenWire protocol to ActiveMQ CPP.  The tasks involves the addition of new code, the activities are listed below, as well as who is working on them and what the status of each is.

Task Description|Assigned to|Status|Task Info  
---|---|---|---
Openwire Command / Marshallers generation scripts|Tim Bish|In-Progress|Loose Marshalling works, Tight still not working  
WireFormat Negotiation Framework|Tim Bish|Completed|Mimic the DotNet version?  
Primitives Map|Nate Mittler|Complet|Needs more testing for memory leaks and performance.  
Primitive Map Marshalling|Tim Bish|Completed|Needs more testing, for leaks etc.  Add nested maps, lists.  
BaseDataStreamMarshallers Port|Tim Bish|In-Progress|Done, but serious unit testing is needed  
BooleanStream Port|Tim Bish|Completed|Done  
OpenWire Connector Framework Classes|Tim / Nate|Completed|Needs lots of testing  
DataInputStreams / DataOutputStreams|Tim Bish|Completed|Done

Outstanding Issues
------------------

This section document issues that are outstanding...TDB

