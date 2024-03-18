---
version: 6.0.1
release_notes: https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12353594
release_date: 2023-12-03
title: ActiveMQ Classic 6.0.1 Release
java_version: 17+
shortDescription: Maintenance release on Classic 6.x series.
redirect_from:
- /../../../activemq-6000001-release
---
Apache ActiveMQ Classic {{ page.version }} was released on {{ page.release_date | date_to_string: "ordinal", "US" }}.

It's a maintenance release on the 6.x series, especially bringing:
- Fix Jakarta support in ActiveMQ RA
- Fix OSGi headers in activemq-jms-pool and activemq-cf
- Fix provided jetty.xml example on the SSL connector
- Fix jolokia conf loading when using Windows service wrapper
- Several dependency updates

You can find details on the [release notes]({{ page.release_notes }}).

