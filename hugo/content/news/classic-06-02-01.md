---
title: "ActiveMQ Classic 6.2.1 Release"
date: 2026-02-18
description: "ActiveMQ Classic 6.2.1 is a new milestone for the project, starting the 6.2.x series."
---

Apache ActiveMQ Classic  was released on .

This is a new milestone for the project, starting the 6.2.x series.
This release especially includes:
- running Docker container with non root user
- fix on environment variables propagation in the Docker container
- additional validation on MQTT control packets
- fix incorrect QueueSize if Non-Persistent messages with TTL is used
- fix KahaDBStore ackAndPreparedMap is not properly cleared when recovered acks are removed
- fix ManagementContext unregister race condition
- a lot of dependencies updates

You can find details on the [release notes]().
