---
layout: default_md
title: Xml Configuration 
title-class: page-title-classic
type: classic
---

 [Using ActiveMQ Classic](using-activemq-classic) > [Xml Configuration](xml-configuration)

We support an XML deployment descriptor for configuring the ActiveMQ Classic Message Broker. There are many things which can be configured such as

*   [transport connectors](configuring-version-5-transports) which consist of transport channels and wire formats
*   [network connectors](networks-of-brokers) using network channels or discovery agents
*   [persistence providers](persistence) & locations
*   custom message containers (such as last image caching etc)

So we decided that using XML would make this configuration much easier. From version 4.0 onwards we use [XBean](https://geronimo.apache.org/xbean/) to perform the XML configuration.

For details of the XML see the [Xml Reference](xml-reference)

Be careful with broker names and URIs

Make sure you do not use any strange characters in the names of brokers as they are converted to URIs which [do not allow things like underscores](http://java.sun.com/j2se/1.4.2/docs/api/java/net/URI.html) in them etc.

Examples
--------

The default ActiveMQ Classic configuration: [current default config](http://svn.apache.org/repos/asf/activemq/trunk/assembly/src/release/conf/activemq.xml).

```
<beans
  xmlns="http://www.springframework.org/schema/beans"
  xmlns:amq="http://activemq.apache.org/schema/core"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
  http://activemq.apache.org/schema/core http://activemq.apache.org/schema/core/activemq-core.xsd">

    <!-- Allows us to use system properties as variables in this configuration file -->
    <bean class="org.springframework.beans.factory.config.PropertyPlaceholderConfigurer">
        <property name="locations">
            <value>file:${activemq.conf}/credentials.properties</value>
        </property>
    </bean>

    <!--
        The <broker> element is used to configure the ActiveMQ Classic broker.
    -->
    <broker xmlns="http://activemq.apache.org/schema/core" brokerName="localhost" dataDirectory="${activemq.data}">

        <!--
            For better performances use VM cursor and small memory limit.
            For more information, see:

            http://activemq.apache.org/message-cursors.html

            Also, if your producer is "hanging", it's probably due to producer flow control.
            For more information, see:
            http://activemq.apache.org/producer-flow-control.html
        -->

        <destinationPolicy>
            <policyMap>
              <policyEntries>
                <policyEntry topic=">" producerFlowControl="true">
                    <!-- The constantPendingMessageLimitStrategy is used to prevent
                         slow topic consumers to block producers and affect other consumers
                         by limiting the number of messages that are retained
                         For more information, see:

                         http://activemq.apache.org/slow-consumer-handling.html

                    -->
                  <pendingMessageLimitStrategy>
                    <constantPendingMessageLimitStrategy limit="1000"/>
                  </pendingMessageLimitStrategy>
                </policyEntry>
                <policyEntry queue=">" producerFlowControl="true" memoryLimit="1mb">
                  <!-- Use VM cursor for better latency
                       For more information, see:

                       http://activemq.apache.org/message-cursors.html

                  <pendingQueuePolicy>
                    <vmQueueCursor/>
                  </pendingQueuePolicy>
                  -->
                </policyEntry>
              </policyEntries>
            </policyMap>
        </destinationPolicy>


        <!--
            The managementContext is used to configure how ActiveMQ Classic is exposed in
            JMX. By default, ActiveMQ Classic uses the MBean server that is started by
            the JVM. For more information, see:

            http://activemq.apache.org/jmx.html
        -->
        <managementContext>
            <managementContext createConnector="false"/>
        </managementContext>

        <!--
            Configure message persistence for the broker. The default persistence
            mechanism is the KahaDB store (identified by the kahaDB tag).
            For more information, see:

            http://activemq.apache.org/persistence.html
        -->
        <persistenceAdapter>
            <kahaDB directory="${activemq.data}/kahadb"/>
        </persistenceAdapter>


          <!--
            The systemUsage controls the maximum amount of space the broker will
            use before slowing down producers. For more information, see:
            http://activemq.apache.org/producer-flow-control.html
            If using ActiveMQ Classic embedded - the following limits could safely be used:

        <systemUsage>
            <systemUsage>
                <memoryUsage>
                    <memoryUsage limit="20 mb"/>
                </memoryUsage>
                <storeUsage>
                    <storeUsage limit="1 gb"/>
                </storeUsage>
                <tempUsage>
                    <tempUsage limit="100 mb"/>
                </tempUsage>
            </systemUsage>
        </systemUsage>
        -->
          <systemUsage>
            <systemUsage>
                <memoryUsage>
                    <memoryUsage limit="64 mb"/>
                </memoryUsage>
                <storeUsage>
                    <storeUsage limit="100 gb"/>
                </storeUsage>
                <tempUsage>
                    <tempUsage limit="50 gb"/>
                </tempUsage>
            </systemUsage>
        </systemUsage>

        <!--
            The transport connectors expose ActiveMQ Classic over a given protocol to
            clients and other brokers. For more information, see:

            http://activemq.apache.org/configuring-transports.html
        -->
        <transportConnectors>
            <!-- DOS protection, limit concurrent connections to 1000 and frame size to 100MB -->
            <transportConnector name="openwire" uri="tcp://0.0.0.0:61616?maximumConnections=1000&amp;wireFormat.maxFrameSize=104857600"/>
            <transportConnector name="amqp" uri="amqp://0.0.0.0:5672?maximumConnections=1000&amp;wireFormat.maxFrameSize=104857600"/>
        </transportConnectors>

        <!-- destroy the spring context on shutdown to stop jetty -->
        <shutdownHooks>
            <bean xmlns="http://www.springframework.org/schema/beans" class="org.apache.activemq.hooks.SpringContextHook" />
        </shutdownHooks>

    </broker>

    <!--
        Enable web consoles, REST and Ajax APIs and demos

        Take a look at ${ACTIVEMQ_HOME}/conf/jetty.xml for more details
    -->
    <import resource="jetty.xml"/>

</beans>
```

From a binary distribution, from version 1.1 onwards there is an _activemq_ script allowing you to run a Message Broker as a stand alone process from the command line easily providing the `$ACTIVEMQ_HOME/bin` directory is on your PATH.

**AMQ 4.x**
if `myConfig.xml` is in the classpath
```
activemq xbean:myConfig.xml
```
or to use the file path system
```
activemq xbean:file:../conf/myConfig.xml
```
**AMQ 3.x**
```
activemq myConfig.xml
```
Or to use the default config file its just
```
activemq
```
If you have a source distribution you can run a broker using Maven specifying one of these configuration files as follows  
under the assembly module run :
```
maven server -Dconfig=xbean:file:src/release/conf/activemq.xml
```
If your [classpath is set up correctly](initial-Community/FAQ/configuration) you can achieve the same thing from the command line
```
java org.apache.activemq.broker.Main xbean:file:src/release/conf/activemq.xml
```

Configuring embedded brokers
----------------------------

You can also use the XML Configuration to configure [embedded brokers](how-do-i-embed-a-broker-inside-a-connection). For example using the JNDI configuration mechanism you can do the following  
[BrokerXmlConfigFromJNDITest](http://svn.apache.org/repos/asf/activemq/trunk/activemq-unit-tests/src/test/java/org/apache/activemq/config/BrokerXmlConfigFromJNDITest.java)  
Or of you want to explicitly configure the embedded broker via Java code you can do the following  
[BrokerXmlConfigStartTest](https://github.com/apache/activemq/tree/main/assembly/src/test/java/org/apache/activemq/config/BrokerXmlConfigStartTest.java)

User Submitted Configurations
-----------------------------

We have a page which allows users to submit details of their configurations.

*   [User Submitted Configurations](user-submitted-configurations)

Background
----------

Since ActiveMQ Classic has so many strategy pattern plugins for transports, wire formats, persistence and many other things, we wanted to leave the configuration format open so that you the developer can configure and extend ActiveMQ Classic in any direction you wish.

So we use the [Spring XML](http://www.springframework.org/docs/reference/beans.html#beans-basics) configuration file format, which allows any beans / POJOs to be wired together and configured. However often Spring's XML can be kinda verbose at times, so we have implemented an ActiveMQ Classic extension to the Spring XML which knows about the common, standard ActiveMQ Classic things you're likely to do (e.g. tags like connector, wireFormat, serverTransport, persistence) - but at any time you can fall back to the normal Spring way of doing things (with tags like bean, property etc).

To see documentation of the XML file we use or to get access to the XSD/DTD see the [Xml Reference](xml-reference)

