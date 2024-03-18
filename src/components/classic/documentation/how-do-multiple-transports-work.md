---
layout: default_md
title: How do multiple transports work 
title-class: page-title-classic
type: classic
---

 [FAQ](faq) > [Using Apache ActiveMQ Classic](using-apache-activemq-classic) > [How do multiple transports work](how-do-multiple-transports-work)


### For ActiveMQ Classic 3.x/4.x

The transport a client uses to connect to the broker is just the transport your client uses. So messages the broker sends to your client will be sent over that transport. However the broker can support many transports.

So client A could connect over HTTP and client B could connect over tcp. Messages client A sends via HTTP will be delivered to B using B's transport, tcp.

