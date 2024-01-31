---
layout: default_md
title: ActivePassive
title-class: page-title-activemq5
type: activemq5
redirect_from:
- /masterslave
---
 [Features](features) > [Clustering](clustering) > [ActivePassic](activepassive)

{% include inclusive-terminology-notice.html %}

Introduction to Active / Passive
------------------------------

The following are the different kinds of Active/Passive configurations available:

Active Passive Type|Requirements|Pros|Cons
---|---|---|---
[Shared File System Active Passive](shared-file-system-active-passive)|A shared file system such as a SAN|Run as many passive brokers as required. Automatic recovery of old active brokers|Requires shared file system
[JDBC Active Passive](jdbc-active-passive)|A Shared database|Run as many passive brokers as required. Automatic recovery of old active brokers|Requires a shared database. Also relatively slow as it cannot use the high performance journal

If you are using a shared network file system such as a SAN we recommend a [Shared File System Active Passive](shared-file-system-active-passive). If you are happy to dispense with the high performance journal and are using pure JDBC as your persistence engine then you should use [JDBC Active Passive](jdbc-active-passive) instead.

