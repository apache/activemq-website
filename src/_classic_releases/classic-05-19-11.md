---
version: 5.19.11
release_notes: https://github.com/apache/activemq/releases/tag/activemq-5.19.11
release_date: 2026-09-05
title: ActiveMQ 5.19.11 Release
java_version: 11, 17, 21
shortDescription: Maintenance release on the 5.19.x series.
redirect_from:
- /../../../activemq-5019011-release
---
Apache Classic {{ page.version }} was released on {{ page.release_date | date_to_string: "ordinal", "US" }}.

This is a maintenance release on the 5.19.x series, including:

Features:
   - Support destination gc sweep of destinations with only wildcard consumers

Fixes:
   - Fix network bridge local-side close 
   - Harden soTimeout vs InactivityMonitor
   - Update TopicRegion removeSubscription to use connection clientId

Dependency updates:
   - 5 minor dependency updates

You can find details on the [release notes]({{ page.release_notes }}).

