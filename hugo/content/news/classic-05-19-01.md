---
title: "ActiveMQ Classic 5.19.1 Release"
date: 2025-10-11
description: "Maintenance release on the 5.19.x series."
---

Apache ActiveMQ Classic  was released on .

This is a maintenance release on the 5.19.x series, including:
- fix on the network of broker TTL management
- fix expiration of persistent messages on durable subscriptions
- fix maxMessageSize behavior changed for value -1 (since 5.19.0)
- fix performance issues with non-persistent message removal from
topic/durable subscriptions
- fix FilePendingMessageCursor clear() method
- fix Kahadb checkpoint runner thread dies without catching exception
- fix backup only recovers one message
- fix KahaDB error while recovering topics with no pending acks and
TRACE logging enabled
- several dependency updates

You can find details on the [release notes]().
