Apache ActiveMQ ™ -- No suitable driver 

[Community](community.md) > [FAQ](CommunityCommunity/Community/faq.md) > [Errors](Community/FAQCommunity/FAQ/Community/FAQ/errors.md) > [Exceptions](Community/FAQ/Errors/exceptions.md) > [No suitable driver](Community/FAQ/Errors/ExceptionsCommunity/FAQ/Errors/Exceptions/Community/FAQ/Errors/Exceptions/no-suitable-driver.md)


### Symptoms

I get an exception saying **No suitable driver** when initialising the JDBC driver.

### Reason

ActiveMQ tries to auto-detect the JDBC driver so that it can deduce the ultimate database's SQL dialect. Some JDBC drivers are not yet auto-recognised. Here's [how to configure the language adapater class to use or to provide us with details of your driver so we can add support for it to ActiveMQ](jdbc-CommunityCommunity/Community/support.md).

### See

*   [JDBC Support](jdbc-CommunityCommunity/Community/support.md)
*   [Persistence](Features/persistence.md)
*   [How to configure a new database](Community/FAQ/Configuration/how-to-configure-a-new-database.md)

