---
version: 5.19.5
release_notes: https://github.com/apache/activemq/releases/tag/activemq-5.19.5
release_date: 2026-04-08
title: ActiveMQ 5.19.5 Release
java_version: 11+
shortDescription: Maintenance release on the 5.19.x series.
redirect_from:
- /../../../activemq-5019005-release
---
Apache Classic {{ page.version }} was released on {{ page.release_date | date_to_string: "ordinal", "US" }}.

This is a maintenance release on the 5.19.x series, including:
- ensure AMQP protocol marshals messages before passing to broker
- support purging the first number of messages from a queue
- properly handle SSL handshake updates

You can find details on the [release notes]({{ page.release_notes }}).

