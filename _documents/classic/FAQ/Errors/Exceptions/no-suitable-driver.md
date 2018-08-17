Apache ActiveMQ ™ -- No suitable driver 

 [FAQ](/FAQ/index.md) > [Errors](../../../FAQ/errors.md) > [Exceptions](../../../FAQ/Errors/exceptions.md) > [No suitable driver](../../../FAQ/Errors/Exceptions/no-suitable-driver.md)


### Symptoms

I get an exception saying **No suitable driver** when initialising the JDBC driver.

### Reason

ActiveMQ tries to auto-detect the JDBC driver so that it can deduce the ultimate database's SQL dialect. Some JDBC drivers are not yet auto-recognised. Here's [how to configure the language adapater class to use or to provide us with details of your driver so we can add support for it to ActiveMQ](jdbc-CommunityCommunity/Community/support.md).

### See

*   [JDBC Support](jdbc-CommunityCommunity/Community/support.md)
*   [Persistence](../../../Features/persistence.md)
*   [How to configure a new database](../../../FAQ/Configuration/how-to-configure-a-new-database.md)

