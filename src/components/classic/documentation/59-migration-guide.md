---
layout: default_md
title: 5.9 Migration Guide 
title-class: page-title-classic
type: classic
---

 [Overview](overview) > [Download](download) > [ActiveMQ Classic 5.9.0 Release](activemq-590-release) > [5.9 Migration Guide](59-migration-guide)

There are some changes in 5.9 that may require user intervention

1.  Schema change to JDBC Persistence Adapter. XID column type change.
    *   If you use XA transactions you need to ensure there are no XA transactions pending completion before you upgrade. Some mode detail in [AMQ-4628](https://issues.apache.org/jira/browse/AMQ-4628)