---
version: 5.18.0
release_notes: https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12351380
release_date: 2023-03-24
title: ActiveMQ 5.18.0 Release
java_version: 11+
shortDescription: 5.18.0 is an important milestone. It brings initial JMS 2.0 (javax.jms API namespace) and Jakarta Messaging 3.1 (jakarta.jms API namespace) client support, Spring 5.3.x, a bunch of dependency updates, and a lot of fixes and improvements.
---
Apache ActiveMQ {{ page.version }} was released on {{ page.release_date | date_to_string: "ordinal", "US" }}. It's a major milestone for the ActiveMQ project.
ActiveMQ 5.18.x brings:
* It brings initial JMS 2.0 (javax.jms API namespace) and Jakarta Messaging 3.1 (jakarta.jms API namespace) client support. See the [JMS 2.0 page](/jms2) for more details on the available functionality and how to use the Jakarta Messaging support.
* Spring 5.3.x
* optimized LDAP use in LDAP JAAS login module
* improved REST API
* improved redelivery policy
* a lot of dependency updates
* and much more!

You can find details on the [release notes]({{ page.release_notes }}).

