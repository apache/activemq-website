---
version: 5.17.7
release_notes: https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12353765
release_date: 2025-03-20
title: ActiveMQ Classic 5.17.7 Release
java_version: 11+
shortDescription: Maintenance release on Classic 5.17.x series
redirect_from:
- /../../../activemq-5017007-release
---
Apache ActiveMQ Classic {{ page.version }} was released on {{ page.release_date | date_to_string: "ordinal", "US" }}.

It's a maintenance release on the ActiveMQ Classic 5.17.x series, bringing:
- fix Out Of Memory error reported on ActiveMQ client during openwire unmarshalling
- fix concurrent modification in ActiveMQServiceFactory
- fix websocket transport options do not get applied
- fix Jolokia throws exception during Windows service startup
- fix queue creation during browse in the WebConsole
- several dependency updates

You can find details on the [release notes]({{ page.release_notes }}).
