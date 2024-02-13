---
version: 5.17.6
release_notes: https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12353377
release_date: 2023-10-25
title: ActiveMQ Classic 5.17.6 Release
java_version: 11+
shortDescription: Maintenance release on Classic 5.17.x series
---
Apache ActiveMQ Classic {{ page.version }} was released on {{ page.release_date | date_to_string: "ordinal", "US" }}. 

It's a maintenance release on the ActiveMQ Classic 5.17.x series, bringing:
- improvement on KahaDB memory consumption
- add additional fields on JMX Connection MBean
- improvement on OpenWire marshaller on Throwable class type
- a lot of dependency updates

You can find details on the [release notes]({{ page.release_notes }}).
