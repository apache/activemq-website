---
version: 5.18.5
release_notes: https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12354398
release_date: 2024-07-24
title: ActiveMQ Classic 5.18.5 Release
java_version: 11+
shortDescription: Maintenance release on Classic 5.18.x series.
redirect_from:
- /../../../activemq-5018005-release
---
Apache ActiveMQ Classic {{ page.version }} was released on {{ page.release_date | date_to_string: "ordinal", "US" }}.

It's a maintenance release on the ActiveMQ Classic 5.18.x series, bringing:
- Fix 500 Server Error while polling empty destination via Message REST
- Fix ClassNotFoundException when using runtimeConfigurationPlugin with Java 17
- Spring 5.3.37 update 
- Jetty 9.4.55.v20240627 update
- Jackson 2.17.2 update
- several bug fixes/improvements

You can find details on the [release notes]({{ page.release_notes }}).

