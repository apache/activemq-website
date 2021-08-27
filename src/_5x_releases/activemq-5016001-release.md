---
version: 5.16.1
release_notes: https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12347027
release_date: 2021-01-20
title: ActiveMQ 5.16.1 Release 
redirect_from:
- /activemq-5161-release
---
Apache ActiveMQ {{ page.version }} was released on {{ page.release_date | date_to_string: "ordinal", "US" }}. It fully supports JDK 9+ at runtime and includes several resolved [issues]({{ page.release_notes }}) and bug fixes.

This release addresses the following CVEs:
- [CVE-2021-26117: LDAP-Authentication does not verify passwords on servers with anonymous bind.](../security-advisories.data/CVE-2021-26117-announcement.txt)
- [CVE-2020-13947: XSS in WebConsole.](../security-advisories.data/CVE-2020-13947-announcement.txt)
