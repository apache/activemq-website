Apache ActiveMQ ™ -- Can I send really large files over ActiveMQ 

 [FAQ](/FAQ/index.md) > [Using Apache ActiveMQ](../../FAQ/using-apache-activemq.md) > [Can I send really large files over ActiveMQ](../../FAQ/Using Apache ActiveMQ/can-i-send-really-large-files-over-activemq.md)


Can I send really large files over ActiveMQ
-------------------------------------------

The answer is yes.

If you are using ActiveMQ 4.2 or later we highly recommend you use [Blob Messages](../../Features/Message Features/blob-messages.md) which implements an out of band transport of the messages; it allows the files to be hosted on external http/ftp sites if required and can support either direct publisher <-> subscriber communication or publisher -> broker/file server -> consumer messaging.

For 4.1 or ealier large file transfer is achieved using [JMS Streams](../../Features/Message Features/jms-streams.md).

Normally the JMS API expects the entire JMS messsage to reside in the client side memory; however using [Blob Messages](../../Features/Message Features/blob-messages.md) or [JMS Streams](../../Features/Message Features/jms-streams.md) allows you to send and receive arbitrarily large files with very low RAM overhead.

