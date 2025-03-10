---
version: 6.1.6
release_notes: https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12355554
release_date: 2025-03-7
title: ActiveMQ Classic 6.1.6 Release
java_version: 17+
shortDescription: ActiveMQ Classic 6.1.6 is a maintanance release on the 6.1.x series.
redirect_from:
- /../../../activemq-6000106-release
---
Apache ActiveMQ Classic {{ page.version }} was released on {{ page.release_date | date_to_string: "ordinal", "US" }}.

It's a maintenance release especially bringing:
- fix potential OutOfMemory error on client during OpenWire unmarshalling
- improvement on double slash issue in Unix script
- fix TcpTransport volatile receiveCounter (not increased automatically)
- improvement on WebConsole, checking if a queue exists before being
able to browse it
- several dependency updates

You can find details on the [release notes]({{ page.release_notes }}).

