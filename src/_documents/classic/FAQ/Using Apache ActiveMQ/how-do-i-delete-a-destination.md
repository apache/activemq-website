Apache ActiveMQ ™ -- How do I delete a destination 

 [FAQ](/FAQ/index.md) > [Using Apache ActiveMQ](../../FAQ/using-apache-activemq.md) > [How do I delete a destination](../../FAQ/Using Apache ActiveMQ/how-do-i-delete-a-destination.md)


How do I delete a destination
-----------------------------

via Java code or [JMX](../../Features/jmx.md) you can grab the [BrokerViewMBean](http://activemq.apache.org/maven/activemq-core/apidocs/org/apache/activemq/broker/jmx/BrokerViewMBean.html) and call one of the following methods

*   [removeQueue(String)](http://activemq.apache.org/maven/activemq-core/apidocs/org/apache/activemq/broker/jmx/BrokerViewMBean.html#removeQueue(java.lang.String))
*   [removeTopic(String)](http://activemq.apache.org/maven/activemq-core/apidocs/org/apache/activemq/broker/jmx/BrokerViewMBean.html#removeTopic(java.lang.String))

### See also

*   [How do I create new destinations](../../FAQ/Using Apache ActiveMQ/how-do-i-create-new-destinations.md)
*   [How can I monitor ActiveMQ](../../FAQ/Using Apache ActiveMQ/how-can-i-monitor-activemq.md)
*   [JMX](../../Features/jmx.md)
*   [Web Console](../../Tools/web-console.md)

