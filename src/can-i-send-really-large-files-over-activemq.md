---
layout: default_md
title: Can I send really large files over ActiveMQ 
title-class: page-title-activemq5
type: activemq5
---

 [FAQ](faq) > [Using Apache ActiveMQ](using-apache-activemq) > [Can I send really large files over ActiveMQ](can-i-send-really-large-files-over-activemq)


Can I send really large files over ActiveMQ
-------------------------------------------

The answer is yes.

If you are using ActiveMQ 4.2 or later we highly recommend you use [Blob Messages](blob-messages) which implements an out of band transport of the messages; it allows the files to be hosted on external http/ftp sites if required and can support either direct publisher <-> subscriber communication or publisher -> broker/file server -> consumer messaging.

For 4.1 or ealier large file transfer is achieved using [JMS Streams](jms-streams).

Normally the JMS API expects the entire JMS messsage to reside in the client side memory; however using [Blob Messages](blob-messages) or [JMS Streams](jms-streams) allows you to send and receive arbitrarily large files with very low RAM overhead.

