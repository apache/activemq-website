---
version: 5.19.0
release_notes: https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12355096
release_date: 2025-03-11
title: ActiveMQ Classic 5.19.0 Release
java_version: 11+
shortDescription: First release on the 5.19.x series.
redirect_from:
- /../../../activemq-5019000-release
---
Apache ActiveMQ Classic {{ page.version }} was released on {{ page.release_date | date_to_string: "ordinal", "US" }}.

This is the first release on the 5.19.x series. It's based on 5.18.x with additional features.

This release includes:
- fix potential OutOfMemory error on client during OpenWire unmarshalling
- improvement on double slashes in Unix scripts
- fix ClassCastException in SelectorAwareVirtualTopicInterceptor if
there is another interceptor
- fix on WebConsole, checking if a queue exists before being able to browse it
- fix durable subscriber receives acknowledge messages if they are
farther than the maxBatchSize
- update ConnectionView to include WireFormatInfo
- add the ability to disable connector startup on boot
- add advancedMessageStatistics to destinations
- several dependency updates

You can find details on the [release notes]({{ page.release_notes }}).

