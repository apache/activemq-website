---
layout: default_md
title: How do I configure ActiveMQ Classic to hold 100s of millions of Queue Messages?
title-class: page-title-classic
type: classic
---

 [FAQ](faq) > [Configuration](configuration) > [How do I configure ActiveMQ Classic to hold 100s of millions of Queue Messages](how-do-i-configure-activemq-classic-to-hold-100s-of-millions-of-queue-messages)


Nearly all messaging systems (certainly open source ones) hold either a copy of a persistent message or a reference to a persisted message in memory. This is primarily to try and improve performance, but it also can significantly decrease the complexity of implementation. In fact ActiveMQ Classic version 4 and below worked this - way - by holding references to persisted messages in memory.

However there is a limitation to this approach, no matter how much memory you have at your disposal, you will hit a limit to the number persistent messages a broker can handle at any particular time.

To get around this limitation, ActiveMQ Classic introduced a paging cache - for all message stores (except the memory store) to get the best of both worlds - great performance and the ability to hold 100s of millions of messages in persistent store. ActiveMQ Classic is **not** limited by memory availability, but by the size of the disk available to hold the persistent messages.

For more information see: [Message Cursors](message-cursors)

