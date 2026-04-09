---
version: 6.2.4
release_notes: https://github.com/apache/activemq/releases/tag/activemq-6.2.4
release_date: 2026-04-08
title: ActiveMQ 6.2.4 Release
java_version: 17+
shortDescription: ActiveMQ 6.2.4 is a new milestone for the project, starting the 6.2.x series.
redirect_from:
- /../../../activemq-6000204-release
---
Apache ActiveMQ {{ page.version }} was released on {{ page.release_date | date_to_string: "ordinal", "US" }}.

This is an important maintenance release on the 6.2.x series.
It especially includes:
- ensure AMQP protocol marshals messages before passing to broker
- several MQTT fixes
- properly handle SSL handshake updates

You can find details on the [release notes]({{ page.release_notes }}).

