---
version: 5.19.4
release_notes: https://github.com/apache/activemq/releases/tag/activemq-5.19.4
release_date: 2026-03-31
title: ActiveMQ 5.19.4 Release
java_version: 11+
shortDescription: Maintenance release on the 5.19.x series.
redirect_from:
- /../../../activemq-5019004-release
---
Apache Classic {{ page.version }} was released on {{ page.release_date | date_to_string: "ordinal", "US" }}.

This is a maintenance release on the 5.19.x series, including:
- fix FactoryFinder path resolution in Windows
- align DestinationView and DestinationViewMBean
- prevent a VM transport from being used with BrokerView
- validate nested composite URIs used with BrokerView

You can find details on the [release notes]({{ page.release_notes }}).

