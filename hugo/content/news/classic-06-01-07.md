---
title: "ActiveMQ Classic 6.1.7 Release"
date: 2025-06-22
description: "ActiveMQ Classic 6.1.7 is a maintanance release on the 6.1.x series."
---

Apache ActiveMQ Classic  was released on .

It's a maintenance release especially bringing:
- improvements on the HTTP connector working with XA
- fix deadlock in RA ServerSessionImpl
- fix empty virtualName from broken queue name
- fixes and improvements on Network of Broker durable sync TTL
- fix expiration of persistent messages on durable subscriptions
- fix maxMessageSize behavior changed for value -1
- fix performance issues with non-persistent message removal from
topic/durable subscriptions
- add Security Content Policy header to the Web Console
- add an wireFormat option on the HTTP transport to not send the full
stack trace to the client
- a bunch of dependencies updates

You can find details on the [release notes]().
