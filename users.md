---
layout: default_md
title: Users
title-class: page-title-activemq5
type: activemq5
--- 

[Community](community) > [Users](users)

This page contains a list of some of our users and gives a brief overview of how they are using ActiveMQ. The purpose of this page is to help the ActiveMQ community get to know each other & find out what we're all doing with ActiveMQ and for the developers of ActiveMQ to get a better feel for what kinds of things people are doing with ActiveMQ.

Name|Company name or description|Use of ActiveMQ
---|---|---
|[FuseSource](http://fusesource.com/)|FuseSource provide enterprise class support, training and mentoring around an open source Apache SOA stack including [ServiceMix](http://servicemix.apache.org/), [ActiveMQ](http://activemq.apache.org/) and [Camel](http://activemq.apache.org/camel/)
Matt Biddulph|[Dopplr](http://www.dopplr.com/)|Use ActiveMQ as their messaging provider - see Matt's great presentation [Made of Messages](http://www.slideshare.net/carsonified/dopplr-its-made-of-messages-matt-biddulph-presentation)
|[gnip](http://gnip.com)|Use [ActiveMQ for their low latency MOM messaging](http://www.byteonic.com/2008/gnip-online-message-oriented-middleware-mom/)
Peter Brooke|RomTrac|We are using ActiveMQ and Camel to provider high performance load balancing of requests across a cluster of servers
Sridhar Komandur|University of Washington (UW Tech)|ActiveMQ is being used as backend messaging layer for a variety of distributed applications withing UW
Gareth Davies|Daugherty Systems|At current client (global agribusiness firm), using ActiveMQ for asynchronous, reliable messaging within in-house SOA application
Raffe G.|Document archiving/flow systems|We try to use ActiveMQ as connectivity option between our FrontEnd (FE) and BackEnd (BE). FE receives requests which processing is normally heavy time-consuming. Thus FE creates a message which is sent to BE for processing and returns a ticket (correlationID) to the user. This will later use the ticket to ask for the response of the processing (again sending a message from FE to BE which will respond synchronously in this case). So we want to have reliable messaging between our FE and BE. So far this is not entirely working for us.
Tom L.|Promotional Marketing|Here is our flow. The backend systems (written in a propriatery language) send requests to a tomcat server via http. The message servlet from the ActiveMQ's web API connects to an embeded broker instance using the VM connector and places the request on the queue. We don't have a need for clustering yet, but we are planning on using either tomcat's clustering or ActiveCluster if it becomes necessary (since the brokers are embeded anyways).
Aleksi Kallio|CSC, the Finnish IT center for science|We are building a bioinformatics system for DNA-microarray data storage and analysis. System contains rich graphical clients, a large database and heavy server machinery for processing analysis jobs. We are trying to use ActiveMQ as a JMS implementation to shuttle data between the servers and clients in an event based manner.
[Frik Strecker](mailto:frik@gatherworks.com)|[GatherPlace](http://www.gatherplace.net) provides cost-effective remote application sharing|ActiveMQ is used to collect real-time billing and usage information from servers distributed throughout the world. Free accounts are available to active ActiveMQ developers for ActiveMQ purposes.
[Golconde](http://code.google.com/p/golconde/)||Uses ActiveMQ to implement a distributed Postgresql replication system
[Robert Liguori](http://www.oreillynet.com/pub/au/3212)|STG Technologies, Inc.|Uses ActiveMQ in support of the aviation industry.

