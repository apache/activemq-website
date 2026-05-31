---
version: 6.2.6
release_notes: https://github.com/apache/activemq/releases/tag/activemq-6.2.6
release_date: 2026-05-31
title: ActiveMQ 6.2.6 Release
java_version: 17+
shortDescription: ActiveMQ 6.2.6 is a new milestone for the project, starting the 6.2.x series.
redirect_from:
- /../../../activemq-6000206-release
---
Apache ActiveMQ {{ page.version }} was released on {{ page.release_date | date_to_string: "ordinal", "US" }}.

This is an important maintenance release on the 6.2.x series.
It especially includes:
- Additional transport types to the JMX denied list
- Fix authorization check on the removeDestination
- Block XBeanBrokerFactory by default inside the VMTransportFactory
- Security enforcements: message servlet disabled by default, harden default configuration for the broker, the webconsole, and jolokia

You can find details on the [release notes]({{ page.release_notes }}).

