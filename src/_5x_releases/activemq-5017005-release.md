---
version: 5.17.5
release_notes: https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12352888
release_date: 2023-07-02
title: ActiveMQ 5.17.5 Release
java_version: 11+
shortDescription: Maintenance release on 5.17.x series
---
Apache ActiveMQ {{ page.version }} was released on {{ page.release_date | date_to_string: "ordinal", "US" }}. 

It's a maintenance release on the ActiveMQ 5.17.x series, bringing:
- fix on stale queues when a connection is long to shutdown
- fix on KahaDB where the db files may be larger than the maxLength configuration
- fix on composite consumers on a Network of Brokers
- fix memory leak on STOMP transport when client unsubscribe
- a bunch of dependency updates

You can find details on the [release notes]({{ page.release_notes }}).
