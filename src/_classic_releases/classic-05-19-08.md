---
version: 5.19.8
release_notes: https://github.com/apache/activemq/releases/tag/activemq-5.19.8
release_date: 2026-06-29
title: ActiveMQ 5.19.8 Release
java_version: 11+
shortDescription: Maintenance release on the 5.19.x series.
redirect_from:
- /../../../activemq-5019008-release
---
Apache Classic {{ page.version }} was released on {{ page.release_date | date_to_string: "ordinal", "US" }}.

This is a maintenance release on the 5.19.x series, including:
- Update Stomp transports with improved validation
- Send advisory messages using the broker connection context
- Several security enforcement and validation fixes (https in BrokerView, webconsole, ...)
- Preserve ${...} placeholders when removing/modifying networkConnectors in RuntimeConfigurationPlugin

TODO add notes about security enforcements and changes

You can find details on the [release notes]({{ page.release_notes }}).

