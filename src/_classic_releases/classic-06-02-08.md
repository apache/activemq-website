---
version: 6.2.8
release_notes: https://github.com/apache/activemq/releases/tag/activemq-6.2.8
release_date: 2026-07-27
title: ActiveMQ 6.2.8 Release
java_version: 17+
shortDescription: ActiveMQ 6.2.8 is a maintenance release on the 6.2.x series.
redirect_from:
- /../../../activemq-6000208-release
---
Apache ActiveMQ {{ page.version }} was released on {{ page.release_date | date_to_string: "ordinal", "US" }}.

This is an important maintenance release on the 6.2.x series.
It especially includes:
- Add better frame size validation for AMQP
- Prevent cursor from using more than 100% temp store
- Fire message discarded advisory on format errors
- Add metrics about error and reconnect counts to network connector
- Expose NetworkConnector URI and local URI in JMX MBean

You can find details on the [release notes]({{ page.release_notes }}).

