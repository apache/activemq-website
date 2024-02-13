---
layout: default_md
title: Can I send really large files over ActiveMQ Classic?
title-class: page-title-classic
type: classic
---

 [FAQ](faq) > [Using Apache ActiveMQ Classic](using-apache-activemq-classic) > [Can I send really large files over ActiveMQ Classic?](can-i-send-really-large-files-over-activemq-classic)


Can I send really large files over ActiveMQ Classic?
----------------------------------------------------
If you are using ActiveMQ Classic 4.2 or later we highly recommend you use [Blob Messages](blob-messages) which implements an out-of-band transport of the messages. It allows the files to be hosted on external http/ftp sites if required and can support either direct publisher <-> subscriber communication or publisher -> broker/file server -> consumer messaging.

For 4.1 or ealier large file transfer is achieved using [JMS Streams](jms-streams).

Normally the JMS API expects the entire JMS messsage to reside in the client side memory; however using [Blob Messages](blob-messages) or [JMS Streams](jms-streams) allows you to send and receive arbitrarily large files with very low RAM overhead.

If you want the broker itself to be able to handle large messages (i.e. without needing to use an out-of-band transport mechanism like HTTP or FTP) then use [ActiveMQ Artemis](../../artemis/documentation/latest/large-messages.html).

