---
title: "ActiveMQ Classic 5.17.5 Release"
date: 2023-07-02
description: "Maintenance release on Classic 5.17.x series"
---

Apache ActiveMQ Classic  was released on .

It's a maintenance release on the ActiveMQ Classic 5.17.x series, bringing:
- fix on stale queues when a connection is long to shutdown
- fix on KahaDB where the db files may be larger than the maxLength configuration
- fix on composite consumers on a Network of Brokers
- fix memory leak on STOMP transport when client unsubscribe
- a bunch of dependency updates

You can find details on the [release notes]().
