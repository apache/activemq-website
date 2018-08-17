Apache ActiveMQ ™ -- How can I monitor the connection with the broker 

 [FAQ](/FAQ/index.md) > [Using Apache ActiveMQ](../../FAQ/using-apache-activemq.md) > [How can I monitor the connection with the broker](../../FAQ/Using Apache ActiveMQ/how-can-i-monitor-the-connection-with-the-broker.md)


How can I monitor the connection with the broker
------------------------------------------------

You can monitor the status of the connection with the broker via the [addTransportListener() method on the ActiveMQConnection](http://activemq.apache.org/maven/apidocs/org/apache/activemq/ActiveMQConnection.html#addTransportListener%28org.apache.activemq.transport.TransportListener).

This method takes a [TransportListener](http://activemq.apache.org/maven/apidocs/org/apache/activemq/transport/TransportListener.html) which is notified as the connection is established & dropped. It also allows you to work with the [Failover Transport](../../Using ActiveMQ/Configuring Transports/ActiveMQ Connection URIs/failover-transport-reference.md) yet still know the status of the connection.

### See Also

*   [How can I monitor ActiveMQ](../../FAQ/Using Apache ActiveMQ/how-can-i-monitor-activemq.md)

