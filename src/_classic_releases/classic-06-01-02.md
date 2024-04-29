---
version: 6.1.2
release_notes: https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12354480
release_date: 2024-04-15
title: ActiveMQ Classic 6.1.2 Release
java_version: 17+
shortDescription: Classic 6.1.2 is a maintanance release for ActiveMQ Classic, on the 6.1.x series.
redirect_from:
- /../../../activemq-6000102-release
---
Apache ActiveMQ Classic {{ page.version }} was released on {{ page.release_date | date_to_string: "ordinal", "US" }}.

It's a major release for the project, especially bringing:
- secure Jolokia and REST Message API by default
- fix on runtimeConfigurationPlugin JMX MBean reload operation
- fix when consuming empty destination via REST Message API
- fix client/server SSL socket configuration via URI

You can find details on the [release notes]({{ page.release_notes }}).

