---
version: 6.2.1
release_notes: https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12356338
release_date: 2026-02-18
title: ActiveMQ Classic 6.2.1 Release
java_version: 17+
shortDescription: ActiveMQ Classic 6.2.1 is a new milestone for the project, starting the 6.2.x series.
redirect_from:
- /../../../activemq-6000201-release
---
Apache ActiveMQ Classic {{ page.version }} was released on {{ page.release_date | date_to_string: "ordinal", "US" }}.

This is a new milestone for the project, starting the 6.2.x series.
This release especially includes:
- running Docker container with non root user
- fix on environment variables propagation in the Docker container
- additional validation on MQTT control packets
- fix incorrect QueueSize if Non-Persistent messages with TTL is used
- fix KahaDBStore ackAndPreparedMap is not properly cleared when recovered acks are removed
- fix ManagementContext unregister race condition
- a lot of dependencies updates

You can find details on the [release notes]({{ page.release_notes }}).

