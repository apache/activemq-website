---
version: 6.1.7
release_notes: https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12355749
release_date: 2025-06-22
title: ActiveMQ Classic 6.1.7 Release
java_version: 17+
shortDescription: ActiveMQ Classic 6.1.7 is a maintanance release on the 6.1.x series.
redirect_from:
- /../../../activemq-6000107-release
---
Apache ActiveMQ Classic {{ page.version }} was released on {{ page.release_date | date_to_string: "ordinal", "US" }}.

It's a maintenance release especially bringing:
- improvements on the HTTP connector working with XA
- fix deadlock in RA ServerSessionImpl
- fix empty virtualName from broken queue name
- fixes and improvements on Network of Broker durable sync TTL
- fix expiration of persistent messages on durable subscriptions
- fix maxMessageSize behavior changed for value -1
- fix performance issues with non-persistent message removal from
topic/durable subscriptions
- add Security Content Policy header to the Web Console
- add an wireFormat option on the HTTP transport to not send the full
stack trace to the client
- a bunch of dependencies updates

You can find details on the [release notes]({{ page.release_notes }}).

