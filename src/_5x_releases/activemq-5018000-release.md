---
version: 5.18.0
release_notes: https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12351380
release_date: 2023-03-24
title: ActiveMQ 5.18.0 Release
java_version: 11+
shortDescription: 5.18.0 is an important milestone, starting the new 5.18.x series. It brings JMS2 clients (both javax and jakarta namespaces), Spring 5.3.x, a bunch of dependency updates, and a lot of fixes and improvements.
---
Apache ActiveMQ {{ page.version }} was released on {{ page.release_date | date_to_string: "ordinal", "US" }}. It's a major milestone for the ActiveMQ project.
ActiveMQ 5.18.x brings:
* JMS2 compliant clients, with one client using javax.jms namespacee and one clieent using jakarta.jms namespace (see [JMS v2.0 page](/jms2))
* Spring 5.3.x
* optimized LDAP use in LDAP JAAS login module
* improved REST API
* improved redelivery policy
* a lot of dependency updates
* and much more!

You can find details on the [release notes]({{ page.release_notes }}).

