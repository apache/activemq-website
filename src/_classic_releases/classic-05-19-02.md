---
version: 5.19.2
release_notes: https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12356326
release_date: 2026-02-13
title: ActiveMQ Classic 5.19.2 Release
java_version: 11+
shortDescription: Maintenance release on the 5.19.x series.
redirect_from:
- /../../../activemq-5019002-release
---
Apache ActiveMQ Classic {{ page.version }} was released on {{ page.release_date | date_to_string: "ordinal", "US" }}.

This is a maintenance release on the 5.19.x series, including:
- the Docker container now runs with non root user
- fix on the Docker container using ACTIVEMQ_OPTS and ACTIVEMQ_OPTS_MEMORY environment variables
- fix on the Runtime Configuration Plugin keeping the network connectors definition in the right order
- add additional validation for MQTT control packets
- fix incorrect QueueSize if non persistent messages with TTL are used
- fix closed connections leaked in the connection pool
- fix on KahaDBStore ackAndPreparedMap not properly cleared when recovered acks are removed
- several dependencies updates

You can find details on the [release notes]({{ page.release_notes }}).

