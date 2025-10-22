---
version: 6.1.8
release_notes: https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12355916
release_date: 2025-10-22
title: ActiveMQ Classic 6.1.8 Release
java_version: 17+
shortDescription: ActiveMQ Classic 6.1.8 is a maintanance release on the 6.1.x series.
redirect_from:
- /../../../activemq-6000108-release
---
Apache ActiveMQ Classic {{ page.version }} was released on {{ page.release_date | date_to_string: "ordinal", "US" }}.

It's a maintenance release especially bringing:
- fixes on the webconsole (columns sorting, assets resolution in HTTP, ...)
- fixes on KahaDB (checkpoint runner thread was diying without catching exception, error while recovering topics with no pending acks and TRACE logging enabled, ...)
- a bunch of dependencies updates (jolokia, jetty, log4j, jackson, ...)

You can find details on the [release notes]({{ page.release_notes }}).

