Apache ActiveMQ ™ -- I am not receiving any messages, what is wrong 

[Community](community.md) > [FAQ](CommunityCommunity/Community/faq.md) > [Errors](Community/FAQCommunity/FAQ/Community/FAQ/errors.md) > [I am not receiving any messages, what is wrong](Community/FAQ/ErrorsCommunity/FAQ/Errors/Community/FAQ/Errors/i-am-not-receiving-any-messages-what-is-wrong.md)


### I am not receiving any messages - what is wrong?

A _very_ common gotcha when working with JMS is forgetting to start the JMS connection, creating a consumer and not having it receive any messages. I myself have tripped up over this one many many times! ![(smile)](https://cwiki.apache.org/confluence/s/en_GB/5997/6f42626d00e36f53fe51440403446ca61552e2a2.1/_/images/icons/emoticons/smile.png)

Make sure you call the [start()](http://java.sun.com/j2ee/1.4/docs/api/javax/jms/Connection.html#start()) method on the JMS connection, otherwise messages will not be dispatched to your consumer.

This is such a common gotcha that as of 4.2 onwards, ActiveMQ will now [log a warning if a message](https://issues.apache.org/activemq/browse/AMQ-1253) is received shortly after the connection was created if the connection was not started (as its so easy to forget to do this part ![(smile)](https://cwiki.apache.org/confluence/s/en_GB/5997/6f42626d00e36f53fe51440403446ca61552e2a2.1/_/images/icons/emoticons/smile.png).

For more details see the discussion of the **warnAboutUnstartedConnectionTimeout** property on the [Connection Configuration URI](Using ActiveMQ/Configuring Transports/ActiveMQ Connection URIs/connection-configuration-uri.md)

### If you are calling connection.start()

Another common gotcha is [due to another consumer grabbing the messages](Community/FAQ/Errors/i-do-not-receive-messages-in-my-second-consumer.md). If its not that then please look at [JMX](Features/jmx.md) or the [Web Console](ToolsTools/Tools/web-console.md) to determine what consumers are available and their status. Then get some [Support](CommunityCommunity/Community/support.md) to help you resolve your issue.

