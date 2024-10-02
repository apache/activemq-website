---
version: 5.18.6
release_notes: https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12354938
release_date: 2024-10-02
title: ActiveMQ Classic 5.18.6 Release
java_version: 11+
shortDescription: Maintenance release on Classic 5.18.x series.
redirect_from:
- /../../../activemq-5018006-release
---
Apache ActiveMQ Classic {{ page.version }} was released on {{ page.release_date | date_to_string: "ordinal", "US" }}.

It's a maintenance release on the ActiveMQ Classic 5.18.x series, bringing:
- fixes on the STOMP protocol
- fix on KahaDB (on the recovery files)
- improvements on the WebConsole (e.g. cache control policy)
- dependency updates (spring, jetty, ...)

You can find details on the [release notes]({{ page.release_notes }}).

