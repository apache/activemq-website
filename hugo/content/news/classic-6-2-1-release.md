---
title: "ActiveMQ Classic 6.2.1 Release"
date: 2026-02-18
description: "ActiveMQ Classic 6.2.1 is a new milestone for the project, starting the 6.2.x series."
---

Apache ActiveMQ Classic 6.2.1 was released on February 18th, 2026.

This is a new milestone for the project, starting the 6.2.x series. This release includes:

- Running Docker container with non-root user
- Fix on environment variables propagation in the Docker container
- Additional validation on MQTT control packets
- Fix incorrect QueueSize if non-persistent messages with TTL is used
- Fix KahaDBStore ackAndPreparedMap not properly cleared when recovered acks are removed
- Fix ManagementContext unregister race condition
- Dependency updates

See the [release notes](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12356338) for full details.
