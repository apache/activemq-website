---
version: 6.2.5
release_notes: https://github.com/apache/activemq/releases/tag/activemq-6.2.5
release_date: 2026-04-23
title: ActiveMQ 6.2.5 Release
java_version: 17+
shortDescription: ActiveMQ 6.2.5 is a new milestone for the project, starting the 6.2.x series.
redirect_from:
- /../../../activemq-6000205-release
---
Apache ActiveMQ {{ page.version }} was released on {{ page.release_date | date_to_string: "ordinal", "US" }}.

This is an important maintenance release on the 6.2.x series.
It especially includes:
- SSL handshake write timeout enforcement
- restrict URL protocol types loaded by XBeanBrokerFactory
- make brokerName immutable in RegionBroker
- add Http discovery transport to denied list for JMX
- update resource cleanup on queueBrowse servlet
- webconsole handling on backup broker
- queue browse improvements in webconsole
- add more transport types to the denied list for JMX
- add remote file filtering for XBeanBrokerFactory

You can find details on the [release notes]({{ page.release_notes }}).

