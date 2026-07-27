---
version: 5.19.9
release_notes: https://github.com/apache/activemq/releases/tag/activemq-5.19.9
release_date: 2026-07-27
title: ActiveMQ 5.19.9 Release
java_version: 11+
shortDescription: Maintenance release on the 5.19.x series.
redirect_from:
- /../../../activemq-5019009-release
---
Apache Classic {{ page.version }} was released on {{ page.release_date | date_to_string: "ordinal", "US" }}.

This is a maintenance release on the 5.19.x series, including:
- Add better frame size validation for AMQP
- Prevent cursor from using more than 100% temp store
- Fire message discarded advisory on format errors
- Add metrics about error and reconnect counts to network connector

You can find details on the [release notes]({{ page.release_notes }}).

