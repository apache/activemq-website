Apache ActiveMQ ™ -- My producer blocks 

 [FAQ](/FAQ/index.md) > [Errors](../../FAQ/errors.md) > [My producer blocks](../../FAQ/Errors/my-producer-blocks.md)


What can I do if my producer blocks sending a message?
------------------------------------------------------

This relates to [Producer Flow Control](../../Features/Message Dispatching Features/producer-flow-control.md).

### Active 4.x

In ActiveMQ 4.x, all in transit messages are held in memory. If you have a slow consumer, to avoid exausting the JVM memory and getting an out of memory error, ActiveMQ has a configurable limit of how many in transit messages it will hold. Once it is reached, producers will be slowed down / blocked.

A quick fix is just to bump up the setting in your **usageManager** in your [Xml Configuration](xml-Community/FAQ/configuration.md). The default that ships with ActiveMQ is pretty low, only 20Mb of RAM, so try setting it to something large, say 512Mb.

An alternative approach is to set individual usageManager limits on different destinations and for producers versus consumers.

You might also want to use the [JMX](../../Features/jmx.md) support or [Web Console](../../Tools/web-console.md) to look at what destinations are being used and what producers & consumers you have to see whats going on.

### Active 5.x and Later

As of 5.x of ActiveMQ there is support for [Message Cursors](../../Features/Message Dispatching Features/message-cursors.md) which by default move messages out of memory and onto disk. So this problem will not be seen unless you fill up the max allocated disk space for message storage which typically is an order of magnitude larger.

### See Also

*   [Producer Flow Control](../../Features/Message Dispatching Features/producer-flow-control.md)
*   [Message Cursors](../../Features/Message Dispatching Features/message-cursors.md)

