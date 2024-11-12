---
version: 6.1.4
release_notes: https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12354974
release_date: 2024-11-12
title: ActiveMQ Classic 6.1.4 Release
java_version: 17+
shortDescription: Classic 6.1.4 is a maintanance release for ActiveMQ Classic, on the 6.1.x series.
redirect_from:
- /../../../activemq-6000104-release
---
Apache ActiveMQ Classic {{ page.version }} was released on {{ page.release_date | date_to_string: "ordinal", "US" }}.

It's a maintenance release especially bringing:
- fix message corruption when using 4-bytes Unicode message from JMS to STOMP
- prevent ClassCastException in SelectorAwareVirtualTopicInterceptor if there is another interceptor
- fix KahaDB PageFile can call setLength() on the recovery file which always throws an exception
- fix Durable Subscriber receives acknowledge messages if they are farther than the maxBatchSize
- ... a bunch of dependency updates

You can find details on the [release notes]({{ page.release_notes }}).

