---
version: 6.3.3
release_notes: https://github.com/apache/activemq/releases/tag/activemq-6.3.3
release_date: 2026-10-27
title: ActiveMQ 6.3.3 Release
java_version: 17, 21, 25 (25+ recommended for Virtual Threads)
shortDescription: ActiveMQ 6.3.3 is a maintenance release on the 6.3.x series.
redirect_from:
- /../../../activemq-6003003-release
---
Apache ActiveMQ {{ page.version }} was released on {{ page.release_date | date_to_string: "ordinal", "US" }}.

This is an important maintenance release on the 6.3.x series.

- Improve GC checkpoint algorithm for empty durables
- Avoid NPE in ConnectionView.getWireFormatInfo
- Fix MQTTWireFormat rejecting valid 4-byte remaining lengths
- Hardening (LDAP LoginModule, Web Console, JMX, Jolokia, ...)
- Other fixes and improvements
- A lot of dependency updates

You can find details on the [release notes]({{ page.release_notes }}).
