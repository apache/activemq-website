---
version: 6.1.0
release_notes: https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12353745
release_date: 2024-03-15
title: ActiveMQ Classic 6.1.0 Release
java_version: 17+
shortDescription: Classic 6.1.0 is a major release for ActiveMQ Classic, starting the 6.x series.
redirect_from:
- /../../../activemq-6000100-release
---
Apache ActiveMQ Classic {{ page.version }} was released on {{ page.release_date | date_to_string: "ordinal", "US" }}.

It's a major release for the project, especially bringing:
- New JMS 2/3 operations support
- Mapping javax / jakarta exception in openwire protocol
- Add destination field on the job scheduler
- Add org.apache.activemq.broker.BouncyCastleNotAdded property to control the bouncycastle addition in BrokerService classloader
- A lot of dependency upgrades (Spring 6.1.4, log4j 2.23.0, Jetty 11.0.20, ...)
- and much more !

You can find details on the [release notes]({{ page.release_notes }}).

