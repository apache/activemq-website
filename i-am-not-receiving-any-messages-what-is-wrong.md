---
layout: default_md
title: I am not receiving any messages, what is wrong 
title-class: page-title-activemq5
type: activemq5
---

 [FAQ](faq) > [Errors](errors) > [I am not receiving any messages, what is wrong](i-am-not-receiving-any-messages-what-is-wrong)


### I am not receiving any messages - what is wrong?

A _very_ common gotcha when working with JMS is forgetting to start the JMS connection, creating a consumer and not having it receive any messages. I myself have tripped up over this one many many times! ![(smile)](https://cwiki.apache.org/confluence/s/en_GB/5997/6f42626d00e36f53fe51440403446ca61552e2a2.1/_/images/icons/emoticons/smile.png)

Make sure you call the [start()](http://java.sun.com/j2ee/1.4/docs/api/javax/jms/Connection.html#start()) method on the JMS connection, otherwise messages will not be dispatched to your consumer.

This is such a common gotcha that as of 4.2 onwards, ActiveMQ will now [log a warning if a message](https://issues.apache.org/activemq/browse/AMQ-1253) is received shortly after the connection was created if the connection was not started (as its so easy to forget to do this part ![(smile)](https://cwiki.apache.org/confluence/s/en_GB/5997/6f42626d00e36f53fe51440403446ca61552e2a2.1/_/images/icons/emoticons/smile.png).

For more details see the discussion of the **warnAboutUnstartedConnectionTimeout** property on the [Connection Configuration URI](connection-configuration-uri)

### If you are calling connection.start()

Another common gotcha is [due to another consumer grabbing the messages](i-do-not-receive-messages-in-my-second-consumer). If its not that then please look at [JMX](jmx) or the [Web Console](web-console) to determine what consumers are available and their status. Then get some [Support](support) to help you resolve your issue.

