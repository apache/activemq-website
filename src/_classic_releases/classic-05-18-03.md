---
version: 5.18.3
release_notes: https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12353355
release_date: 2023-10-25
title: ActiveMQ Classic 5.18.3 Release
java_version: 11+
shortDescription: Maintenance release on Classic 5.18.x series.
redirect_from:
- /../../../activemq-5018003-release
---
Apache ActiveMQ Classic {{ page.version }} was released on {{ page.release_date | date_to_string: "ordinal", "US" }}.

It's a maintenance release on the ActiveMQ Classic 5.18.x series, bringing:
- fix on destinations create when message is delayed
- fix on moving message to DLQ when produce via HTTP and TTL is reached
- improvement on KahaDB memory consumption
- improvement on OpenWire marshaller on Throwable class type
- implementation of JMS 2.x XA methods
- fix on JDK17+ support
- a lot of dependency updates

You can find details on the [release notes]({{ page.release_notes }}).

