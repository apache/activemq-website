Apache ActiveMQ ™ -- JMS Bridge With Remote Broker 

[Using ActiveMQ](../../using-activemq.md) > [User Submitted Configurations](../../Using ActiveMQ/user-submitted-configurations.md) > [JMS Bridge With Remote Broker](../../Using ActiveMQ/User Submitted Configurations/jms-bridge-with-remote-broker.md)


### Example of a configuration that shows how to use a BridgeConnector to make a connection to a remote ActiveMQ broker.

<beans>
    <!\-\- Allows us to use system properties as variables in this configuration file -->
    <bean class="org.springframework.beans.factory.config.PropertyPlaceholderConfigurer"/>

    <broker useJmx="true" persistent="false" xmlns="http://activemq.org/config/1.0"
            brokerName="localhost" dataDirectory="${activemq.base}/data">
        <jmsBridgeConnectors>
            <jmsQueueConnector outboundQueueConnectionFactory="#remoteBroker">
                <inboundQueueBridges>
                    <inboundQueueBridge
                            inboundQueueName = "queue.ping"
                            localQueueName   = "queue.incomingMsgs.ping"
                            selector         = "JMSType LIKE 'foo%'"/>
                </inboundQueueBridges>
                <outboundQueueBridges>
                    <outboundQueueBridge
                            outboundQueueName = "queue.pong"
                            localQueueName    = "queue.incomingMsgs.ping"
                            selector          = "JMSType LIKE 'foo%'"/>
                </outboundQueueBridges>
            </jmsQueueConnector>
        </jmsBridgeConnectors>
    </broker>

    <!\-\- JMS ConnectionFactory to use for remote bridging -->
    <bean id="remoteBroker" class="org.apache.activemq.ActiveMQConnectionFactory">
        <property name="brokerURL" value="failover:(tcp://remote_activemq:61616)" />
    </bean>
</beans>

