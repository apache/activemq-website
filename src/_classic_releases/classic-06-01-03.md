---
version: 6.1.3
release_notes: https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12354559
release_date: 2024-08-08
title: ActiveMQ Classic 6.1.3 Release
java_version: 17+
shortDescription: Classic 6.1.3 is a maintanance release for ActiveMQ Classic, on the 6.1.x series.
redirect_from:
- /../../../activemq-6000103-release
---
Apache ActiveMQ Classic {{ page.version }} was released on {{ page.release_date | date_to_string: "ordinal", "US" }}.

It's a maintenance release especially bringing:
- add a BoM
- fixes on the Message REST API, especially concurrent access
- Spring 6.1.11 update
- fix NoClassDefFound on bin/activemq export command line
- several dependency updates 

You can find details on the [release notes]({{ page.release_notes }}).

