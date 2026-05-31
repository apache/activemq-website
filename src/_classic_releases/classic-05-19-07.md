---
version: 5.19.7
release_notes: https://github.com/apache/activemq/releases/tag/activemq-5.19.7
release_date: 2026-05-31
title: ActiveMQ 5.19.7 Release
java_version: 11+
shortDescription: Maintenance release on the 5.19.x series.
redirect_from:
- /../../../activemq-5019007-release
---
Apache Classic {{ page.version }} was released on {{ page.release_date | date_to_string: "ordinal", "US" }}.

This is a maintenance release on the 5.19.x series, including:
- Additional transport types to the JMX denied list
- Fix authorization check on the removeDestination
- Block XBeanBrokerFactory by default inside the VMTransportFactory
- Security enforcements: message servlet disabled by default, harden default configuration for the broker, the webconsole, and jolokia

You can find details on the [release notes]({{ page.release_notes }}).

