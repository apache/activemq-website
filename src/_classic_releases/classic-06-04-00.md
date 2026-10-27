---
version: 6.4.0
release_notes: https://github.com/apache/activemq/releases/tag/activemq-6.4.0
release_date: 2026-10-27
title: ActiveMQ 6.4.0 Release
java_version: 17, 21, 25 (25+ recommended for Virtual Threads)
shortDescription: ActiveMQ 6.4.0 is a new milestone in the project, starting the 6.4.x series
redirect_from:
- /../../../activemq-6004000-release
---
Apache ActiveMQ {{ page.version }} was released on {{ page.release_date | date_to_string: "ordinal", "US" }}.

This is a new milestone for the project, starting the 6.4.x series.

- Jakarta Messaging 3.1 extended support (receiveBody(), pool, ...)
- OAuth2 JWT support as JAAS LoginModule
- add SSL support for JMX connector in ManagementContext
- several hardening (Jolokia, Web Console, LDAP, IP addresses, ...)
- several performance improvements
- a lot of dependency updates

You can find details on the [release notes]({{ page.release_notes }}).
