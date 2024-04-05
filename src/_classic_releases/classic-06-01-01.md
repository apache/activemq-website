---
version: 6.1.1
release_notes: https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12354418
release_date: 2024-04-05
title: ActiveMQ Classic 6.1.1 Release
java_version: 17+
shortDescription: Classic 6.1.1 is a maintanance release for ActiveMQ Classic, on the 6.1.x series.
redirect_from:
- /../../../activemq-6000101-release
---
Apache ActiveMQ Classic {{ page.version }} was released on {{ page.release_date | date_to_string: "ordinal", "US" }}.

It's a major release for the project, especially bringing:
- add firstMessageTimestamp in the StatisticsPlugin
- fix on Docker images authentication
- add sun.nio.* opens classes required for some transports
- important dependency updates, especially Spring 6.1.5
- and much more !

You can find details on the [release notes]({{ page.release_notes }}).

