Apache ActiveMQ ™ -- Logging a warning if you forget to start a Connection 

[Features](features.md) > [Logging a warning if you forget to start a Connection](FeaturesFeatures/Features/logging-a-warning-if-you-forget-to-start-a-connection.md)


Logging a warning if you forget to start a Connection
-----------------------------------------------------

A _very_ common gotcha when working with JMS is forgetting to start the JMS connection, creating a consumer and not having it receive any messages. I myself have tripped up over this one many many times! ![(smile)](https://cwiki.apache.org/confluence/s/en_GB/5997/6f42626d00e36f53fe51440403446ca61552e2a2.1/_/images/icons/emoticons/smile.png)

To try and help diagnose this mistake and give you an early warning by default ActiveMQ 4.2 detects this and generates a handy warning message telling you to call the [Connection.start() method](http://java.sun.com/j2ee/1.4/docs/api/javax/jms/Connection.html#start()) on the JMS connection.

For more details on [this feature](https://issues.apache.org/activemq/browse/AMQ-1253) see the discussion of the **warnAboutUnstartedConnectionTimeout** property on the [Connection Configuration URI](Using ActiveMQ/Configuring Transports/ActiveMQ Connection URIs/connection-configuration-uri.md)

