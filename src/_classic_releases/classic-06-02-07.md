---
version: 6.2.7
release_notes: https://github.com/apache/activemq/releases/tag/activemq-6.2.7
release_date: 2026-06-29
title: ActiveMQ 6.2.7 Release
java_version: 17+
shortDescription: ActiveMQ 6.2.7 is a new milestone for the project, starting the 6.2.x series.
redirect_from:
- /../../../activemq-6000207-release
---
Apache ActiveMQ {{ page.version }} was released on {{ page.release_date | date_to_string: "ordinal", "US" }}.

This is an important maintenance release on the 6.2.x series.
It especially includes:
- Update Stomp transports with improved validation
- Send advisory messages using the broker connection context
- Several security enforcement and validation fixes (https in BrokerView, webconsole, ...)
- Preserve ${...} placeholders when removing/modifying networkConnectors in RuntimeConfigurationPlugin

TODO: add notes about security enforcements and changes

You can find details on the [release notes]({{ page.release_notes }}).

