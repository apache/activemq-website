Apache ActiveMQ ™ -- How do I purge a queue 

[Community](community.md) > [FAQ](CommunityCommunity/Community/faq.md) > [Using Apache ActiveMQ](Community/FAQCommunity/FAQ/Community/FAQ/using-apache-activemq.md) > [How do I purge a queue](Community/FAQ/Using Apache ActiveMQCommunity/FAQ/Using Apache ActiveMQ/Community/FAQ/Using Apache ActiveMQ/how-do-i-purge-a-queue.md)


A frequent requirement is to purge a queue (i.e. delete all the messages on it).

### Solution

You can use the [Web Console](ToolsTools/Tools/web-console.md) to view queues, add/remove queues, purge queues or delete/forward individual messages.

Another option is to use [JMX](Features/jmx.md) to browse the queues and call the **purge()** method on the [QueueViewMBean](http://activemq.apache.org/maven/apidocs/org/apache/activemq/broker/jmx/QueueViewMBean.html).

You could also delete the queue via removeQueue(String) or removeTopic(String) methods on the [BrokerViewMBean](http://activemq.apache.org/maven/apidocs/org/apache/activemq/broker/jmx/BrokerViewMBean.html)

You can also do it [programmatically](Community/FAQ/Using Apache ActiveMQ/how-can-i-see-what-destinations-are-used.md)

### Also See

*   [Web Console](ToolsTools/Tools/web-console.md)
*   [JMX](Features/jmx.md)
*   [How do I find the Size of a Queue](Community/FAQ/Using Apache ActiveMQ/how-do-i-find-the-size-of-a-queue.md)
*   [How can I see what destinations are used](Community/FAQ/Using Apache ActiveMQ/how-can-i-see-what-destinations-are-used.md)

