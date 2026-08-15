---
title: "ActiveMQ Classic 5.18.7 Release"
date: 2025-03-19
description: "Maintenance release on Classic 5.18.x series."
---

Apache ActiveMQ Classic  was released on .

It's a maintenance release on the ActiveMQ Classic 5.18.x series, bringing:
- fix potential OutOfMemory error on client during OpenWire unmarshalling
- fix ClassCastException in SelectorAwareVirtualTopicInterceptor if
there is another interceptor
- fix durable subscriber receives acknowledge messages if they are
farther than the maxBatchSize
- fix potential issue with messages can become stuck on Queues
- fix potential issue in WebConsole where a queue can be created with
browse page
- several dependencies updates

You can find details on the [release notes]().
