---
version: 5.19.6
release_notes: https://github.com/apache/activemq/releases/tag/activemq-5.19.6
release_date: 2026-04-23
title: ActiveMQ 5.19.6 Release
java_version: 11+
shortDescription: Maintenance release on the 5.19.x series.
redirect_from:
- /../../../activemq-5019006-release
---
Apache Classic {{ page.version }} was released on {{ page.release_date | date_to_string: "ordinal", "US" }}.

This is a maintenance release on the 5.19.x series, including:
- SSL handshake write timeout enforcement
- restrict URL protocol types loaded by XBeanBrokerFactory
- make brokerName immutable in RegionBroker
- add Http discovery transport to denied list for JMX
- update DestinationView uri resolution
- webconsole handling on backup broker
- queue browse improvements in webconsole
- add more transport types to the denied list for JMX
- add remote file filtering for XBeanBrokerFactory

You can find details on the [release notes]({{ page.release_notes }}).

