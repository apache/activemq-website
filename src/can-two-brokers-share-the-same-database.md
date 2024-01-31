---
layout: default_md
title: Can two brokers share the same database 
title-class: page-title-activemq5
type: activemq5
---

 [FAQ](faq) > [Using Apache ActiveMQ](using-apache-activemq) > [Can two brokers share the same database](can-two-brokers-share-the-same-database)

{% include inclusive-terminology-notice.html %}

Can two brokers share the same database
---------------------------------------

The short answer is no; 2 brokers cannot operate on the same sets of database tables concurrently. ActiveMQ is designed for high performance so we want to minimise the amount of pessimistic locking; each broker is designed to work with its own persistent database.

If you want to share the same physical database server across two brokers to simplify your installation & backup procedures then just create 2 different logins for each broker so that they get their own sets of database tables within the same physical database. (i.e. each broker gets its own logical database within the same physical database server).

Also if you want to only have one database but many possible brokers (for HA) then just use [JDBC Active Passive](jdbc-active-passive)

