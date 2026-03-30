---
version: 6.2.3
release_notes: https://github.com/apache/activemq/releases/tag/activemq-6.2.3
release_date: 2026-03-30
title: ActiveMQ 6.2.3 Release
java_version: 17+
shortDescription: ActiveMQ 6.2.3 is a new milestone for the project, starting the 6.2.x series.
redirect_from:
- /../../../activemq-6000203-release
---
Apache ActiveMQ {{ page.version }} was released on {{ page.release_date | date_to_string: "ordinal", "US" }}.

This is a new milestone for the project, starting the 6.2.x series.
This release especially includes:
- fix FactoryFinder path resolution in Windows
- prevent a VM transport from being used with BrokerView
- also validate nested composite URIs used with BrokerView

You can find details on the [release notes]({{ page.release_notes }}).

