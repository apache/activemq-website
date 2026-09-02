---
version: 6.3.2
release_notes: https://github.com/apache/activemq/releases/tag/activemq-6.3.2
release_date: 2026-09-02
title: ActiveMQ 6.3.2 Release
java_version: 17, 21, 25 (25+ recommended for Virtual Threads)
shortDescription: ActiveMQ 6.3.2 is a maintenance release on the 6.3.x series.
redirect_from:
- /../../../activemq-6003002-release
---
Apache ActiveMQ {{ page.version }} was released on {{ page.release_date | date_to_string: "ordinal", "US" }}.

This is an important maintenance release on the 6.3.x series.

- Performance: Skip topic sendLock for non-persistent sends 
- Fix: Update TopicRegion removeSubscription to use connection clientId
- Fix: Harden soTimeout vs InactivityMonitor
- Fix: Add missing jetty dependency to assembly for websockets
- Fix: Fix network bridge local-side close 
- Fix: Assembly startup logs harmless WARN about schemas 
- other dependency updates

You can find details on the [release notes]({{ page.release_notes }}).
