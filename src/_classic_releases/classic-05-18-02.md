---
version: 5.18.2
release_notes: https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12353099
release_date: 2023-07-02
title: ActiveMQ Classic 5.18.2 Release
java_version: 11+
shortDescription: Maintenance release on Classic 5.18.x series. It fixes an issue on the activemq-client-jakarta artifact.
redirect_from:
- /../../../activemq-5018002-release
---
Apache ActiveMQ Classic {{ page.version }} was released on {{ page.release_date | date_to_string: "ordinal", "US" }}.

It's a maintenance release on the ActiveMQ Classic 5.18.x series, bringing:
- fix potential NPE when removing consumer with selector
- fix composite consumers in a Network of Brokers
- fix memory leak on the STOMP transport when client unsubscribe
- a bunch of dependency updates

You can find details on the [release notes]({{ page.release_notes }}).

