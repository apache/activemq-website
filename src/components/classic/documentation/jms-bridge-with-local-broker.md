---
layout: default_md
title: JMS Bridge With Local Broker 
title-class: page-title-classic
type: classic
---

[Using ActiveMQ Classic](using-activemq-classic) > [User Submitted Configurations](user-submitted-configurations) > [JMS Bridge With Local Broker](jms-bridge-with-local-broker)


### Example of a configuration that shows how to use a BridgeConnector to make a connection to the local ActiveMQ Classic broker.
```
<beans>
    <!-- Allows us to use system properties as variables in this configuration file -->
    <bean class="org.springframework.beans.factory.config.PropertyPlaceholderConfigurer"/>

    <broker useJmx="true" persistent="false" xmlns="http://activemq.org/config/1.0"
            brokerName="localhost" dataDirectory="${activemq.base}/data">
        <jmsBridgeConnectors>
            <jmsQueueConnector outboundQueueConnectionFactory="#localBroker">
                <inboundQueueBridges>
                    <inboundQueueBridge
                            inboundQueueName = "queue.ping"
                            localQueueName   = "queue.incomingMsgs.ping"
                            selector         = "JMSType LIKE 'foo%'"/>
                </inboundQueueBridges>
                <outboundQueueBridges>
                    <outboundQueueBridge
                            localQueueName    = "queue.incomingMsgs.ping"
                            outboundQueueName = "queue.pong"
                            selector          = "JMSType LIKE 'foo%'"/>
                </outboundQueueBridges>
            </jmsQueueConnector>
        </jmsBridgeConnectors>
    </broker>

    <!-- JMS ConnectionFactory to use for local bridging -->
    <bean id="localBroker" class="org.apache.activemq.ActiveMQConnectionFactory">
        <property name="brokerURL" value="vm://localhost:61616" />
    </bean>
</beans>
```
