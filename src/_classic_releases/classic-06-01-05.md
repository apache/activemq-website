---
version: 6.1.5
release_notes: https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12355276
release_date: 2025-01-13
title: ActiveMQ Classic 6.1.5 Release
java_version: 17+
shortDescription: Classic 6.1.5 is a maintanance release for ActiveMQ Classic, on the 6.1.x series.
redirect_from:
- /../../../activemq-6000105-release
---
Apache ActiveMQ Classic {{ page.version }} was released on {{ page.release_date | date_to_string: "ordinal", "US" }}.

It's a maintenance release especially bringing:
- messages (in specific circumstances) can become stuck in queues
- remove commons-io use (replaced by JDK methods)
- several dependency updates, especially Spring 6.1.16, Jackson 2.18.2, Jolokia 2.1.2 (removing json-simple dependency), xstream 1.4.21

You can find details on the [release notes]({{ page.release_notes }}).

