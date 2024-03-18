---
layout: default_md
title: No suitable driver 
title-class: page-title-classic
type: classic
---

 [FAQ](faq) > [Errors](errors) > [Exceptions](exceptions) > [No suitable driver](no-suitable-driver)


### Symptoms

I get an exception saying **No suitable driver** when initialising the JDBC driver.

### Reason

ActiveMQ Classic tries to auto-detect the JDBC driver so that it can deduce the ultimate database's SQL dialect. Some JDBC drivers are not yet auto-recognised. Here's [how to configure the language adapater class to use or to provide us with details of your driver so we can add support for it to ActiveMQ Classic](jdbc-support).

### See

*   [JDBC Support](jdbc-support)
*   [Persistence](persistence)
*   [How to configure a new database](how-to-configure-a-new-database)

