Apache ActiveMQ ™ -- Xml Configuration 

[Using ActiveMQ](../using-activemq.md) > [Xml Configuration](xml-Community/FAQ/configuration.md)


We support an XML deployment descriptor for configuring the ActiveMQ Message Broker. There are many things which can be configured such as

*   [transport connectors](../Using ActiveMQ 5/configuring-version-5-transports.md) which consist of transport channels and wire formats
*   [network connectors](../Features/Clustering/networks-of-brokers.md) using network channels or discovery agents
*   [persistence providers](../Features/persistence.md) & locations
*   custom message containers (such as last image caching etc)

So we decided that using XML would make this configuration much easier. From version 4.0 onwards we use [XBean](http://xbean.org/) to perform the XML configuration.

For details of the XML see the [Xml Reference](../Using ActiveMQ/xml-reference.md)

Be careful with broker names and URIs

Make sure you do not use any strange characters in the names of brokers as they are converted to URIs which [do not allow things like underscores](http://java.sun.com/j2se/1.4.2/docs/api/java/net/URI.html) in them etc.

Examples
--------

The default ActiveMQ configuration: [current default config](http://svn.apache.org/repos/asf/activemq/trunk/assembly/src/release/conf/activemq.xml).

xml<beans xmlns="http://www.springframework.org/schema/beans" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd http://activemq.apache.org/schema/core http://activemq.apache.org/schema/core/activemq-core.xsd"> <!-- Allows us to use system properties as variables in this configuration file --> <bean class="org.springframework.beans.factory.config.PropertyPlaceholderConfigurer"> <property name="locations"> <value>file:${activemq.conf}/credentials.properties</value> </property> </bean> <!-- Allows accessing the server log --> <bean id="logQuery" class="io.fabric8.insight.log.log4j.Log4jLogQuery" lazy-init="false" scope="singleton" init-method="start" destroy-method="stop"> </bean> <!-- The <broker> element is used to configure the ActiveMQ broker. --> <broker xmlns="http://activemq.apache.org/schema/core" brokerName="localhost" dataDirectory="${activemq.data}"> <destinationPolicy> <policyMap> <policyEntries> <policyEntry topic=">" > <!-- The constantPendingMessageLimitStrategy is used to prevent slow topic consumers to block producers and affect other consumers by limiting the number of messages that are retained For more information, see: http://activemq.apache.org/Features/Consumer Features/slow-consumer-handling.md --> <pendingMessageLimitStrategy> <constantPendingMessageLimitStrategy limit="1000"/> </pendingMessageLimitStrategy> </policyEntry> </policyEntries> </policyMap> </destinationPolicy> <!-- The managementContext is used to configure how ActiveMQ is exposed in JMX. By default, ActiveMQ uses the MBean server that is started by the JVM. For more information, see: http://activemq.apache.orgFeatures/jmx.md --> <managementContext> <managementContext createConnector="false"/> </managementContext> <!-- Configure message persistence for the broker. The default persistence mechanism is the KahaDB store (identified by the kahaDB tag). For more information, see: http://activemq.apache.orgFeatures/persistence.md --> <persistenceAdapter> <kahaDB directory="${activemq.data}/kahadb"/> </persistenceAdapter> <!-- The systemUsage controls the maximum amount of space the broker will use before disabling caching and/or slowing down producers. For more information, see: http://activemq.apache.orgFeatures/Message Dispatching FeaturesFeatures/Message Dispatching Features/Features/Message Dispatching Features/producer-flow-control.md --> <systemUsage> <systemUsage> <memoryUsage> <memoryUsage percentOfJvmHeap="70" /> </memoryUsage> <storeUsage> <storeUsage limit="100 gb"/> </storeUsage> <tempUsage> <tempUsage limit="50 gb"/> </tempUsage> </systemUsage> </systemUsage> <!-- The transport connectors expose ActiveMQ over a given protocol to clients and other brokers. For more information, see: http://activemq.apache.orgUsing ActiveMQ/configuring-transports.md --> <transportConnectors> <!-- DOS protection, limit concurrent connections to 1000 and frame size to 100MB --> <transportConnector name="openwire" uri="tcp://0.0.0.0:61616?maximumConnections=1000&amp;wireFormat.maxFrameSize=104857600"/> <transportConnector name="amqp" uri="amqp://0.0.0.0:5672?maximumConnections=1000&amp;wireFormat.maxFrameSize=104857600"/> <transportConnector name="stomp" uri="stomp://0.0.0.0:61613?maximumConnections=1000&amp;wireFormat.maxFrameSize=104857600"/> <transportConnector name="mqtt" uri="mqtt://0.0.0.0:1883?maximumConnections=1000&amp;wireFormat.maxFrameSize=104857600"/> <transportConnector name="ws" uri="ws://0.0.0.0:61614?maximumConnections=1000&amp;wireFormat.maxFrameSize=104857600"/> </transportConnectors> <!-- destroy the spring context on shutdown to stop jetty --> <shutdownHooks> <bean xmlns="http://www.springframework.org/schema/beans" class="org.apache.activemq.hooks.SpringContextHook" /> </shutdownHooks> </broker> <!-- Enable web consoles, REST and Ajax APIs and demos The web consoles requires by default login, you can disable this in the jetty.xml file Take a look at ${ACTIVEMQ_HOME}/conf/jetty.xml for more details --> <import resource="jetty.xml"/> </beans>

From a binary distribution, from version 1.1 onwards there is an _activemq_ script allowing you to run a Message Broker as a stand alone process from the command line easily providing the $ACTIVEMQ_HOME/bin directory is on your PATH.

**AMQ 4.x**

if myConfig.xml is in the classpath

activemq xbean:myConfig.xml

or to use the file path system

activemq xbean:file:../conf/myConfig.xml

**AMQ 3.x**

activemq myConfig.xml

Or to use the default config file its just

activemq

If you have a source distribution you can run a broker using Maven specifying one of these configuration files as follows  
under the assembly module run :

maven server -Dconfig=xbean:file:src/release/conf/activemq.xml

If your [classpath is set up correctly](Using ActiveMQ/initial-Community/FAQ/configuration.md) you can achieve the same thing from the command line

java org.apache.activemq.broker.Main xbean:file:src/release/conf/activemq.xml

Configuring embedded brokers
----------------------------

You can also use the XML Configuration to configure [embedded brokers](../FAQ/Using Apache ActiveMQ/how-do-i-embed-a-broker-inside-a-connection.md). For example using the JNDI configuration mechanism you can do the following  
[BrokerXmlConfigFromJNDITest](http://svn.apache.org/repos/asf/activemq/trunk/activemq-unit-tests/src/test/java/org/apache/activemq/config/BrokerXmlConfigFromJNDITest.java)  
Or of you want to explicitly configure the embedded broker via Java code you can do the following  
[BrokerXmlConfigStartTest](https://svn.apache.org/repos/asf/activemq/trunk/assembly/src/test/java/org/apache/activemq/config/BrokerXmlConfigStartTest.java)

User Submitted Configurations
-----------------------------

We have a page which allows users to submit details of their configurations.

*   [User Submitted Configurations](../Using ActiveMQ/user-submitted-configurations.md)

Background
----------

Since ActiveMQ has so many strategy pattern plugins for transports, wire formats, persistence and many other things, we wanted to leave the configuration format open so that you the developer can configure and extend ActiveMQ in any direction you wish.

So we use the [Spring XML](http://www.springframework.org/docs/reference/beans.html#beans-basics) configuration file format, which allows any beans / POJOs to be wired together and configured. However often Spring's XML can be kinda verbose at times, so we have implemented an ActiveMQ extension to the Spring XML which knows about the common, standard ActiveMQ things you're likely to do (e.g. tags like connector, wireFormat, serverTransport, persistence) - but at any time you can fall back to the normal Spring way of doing things (with tags like bean, property etc).

To see documentation of the XML file we use or to get access to the XSD/DTD see the [Xml Reference](../Using ActiveMQ/xml-reference.md)

