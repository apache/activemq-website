---
title: "ActiveMQ Classic 6.1.4 Release"
date: 2024-11-12
description: "Classic 6.1.4 is a maintanance release for ActiveMQ Classic, on the 6.1.x series."
---

Apache ActiveMQ Classic  was released on .

It's a maintenance release especially bringing:
- fix message corruption when using 4-bytes Unicode message from JMS to STOMP
- prevent ClassCastException in SelectorAwareVirtualTopicInterceptor if there is another interceptor
- fix KahaDB PageFile can call setLength() on the recovery file which always throws an exception
- fix Durable Subscriber receives acknowledge messages if they are farther than the maxBatchSize
- ... a bunch of dependency updates

You can find details on the [release notes]().
