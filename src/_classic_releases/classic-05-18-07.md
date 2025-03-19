---
version: 5.18.7
release_notes: https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12355706
release_date: 2025-03-19
title: ActiveMQ Classic 5.18.7 Release
java_version: 11+
shortDescription: Maintenance release on Classic 5.18.x series.
redirect_from:
- /../../../activemq-5018007-release
---
Apache ActiveMQ Classic {{ page.version }} was released on {{ page.release_date | date_to_string: "ordinal", "US" }}.

It's a maintenance release on the ActiveMQ Classic 5.18.x series, bringing:
- fix potential OutOfMemory error on client during OpenWire unmarshalling
- fix ClassCastException in SelectorAwareVirtualTopicInterceptor if
there is another interceptor
- fix durable subscriber receives acknowledge messages if they are
farther than the maxBatchSize
- fix potential issue with messages can become stuck on Queues
- fix potential issue in WebConsole where a queue can be created with
browse page
- several dependencies updates

You can find details on the [release notes]({{ page.release_notes }}).

