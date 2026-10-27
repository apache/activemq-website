---
version: 5.19.12
release_notes: https://github.com/apache/activemq/releases/tag/activemq-5.19.12
release_date: 2026-10-27
title: ActiveMQ 5.19.12 Release
java_version: 11, 17, 21
shortDescription: Maintenance release on the 5.19.x series.
redirect_from:
- /../../../activemq-5019012-release
---
Apache ActiveMQ {{ page.version }} was released on {{ page.release_date | date_to_string: "ordinal", "US" }}.

This is a maintenance release on the 5.19.x series, including:

- fix MQTTWireFormat rejecting valid 4-byte remaining lengths
- LDAP hardening
- ACL cleanup
- several dependency updates

You can find details on the [release notes]({{ page.release_notes }}).

