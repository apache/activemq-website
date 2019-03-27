Apache ActiveMQ ™ -- Initial Configuration 

[Using ActiveMQ](../using-activemq.md) > [Initial Configuration](Using ActiveMQ/initial-Community/FAQ/configuration.md)


Initial Configuration
=====================

Document Organization
---------------------

*   [#Required JARs](Using ActiveMQ/initial-Community/FAQ/configuration.md)
*   [#Optional JARS](Using ActiveMQ/initial-Community/FAQ/configuration.md)
*   [#Persistence Support](Using ActiveMQ/initial-Community/FAQ/configuration.md)
*   [#Next steps](Using ActiveMQ/initial-Community/FAQ/configuration.md)
*   [#Additional Resources](Using ActiveMQ/initial-Community/FAQ/configuration.md)
    *   [#Related Reading](Using ActiveMQ/initial-Community/FAQ/configuration.md)
    *   [#Specifications](Using ActiveMQ/initial-Community/FAQ/configuration.md)
    *   [#Related open source projects](Using ActiveMQ/initial-Community/FAQ/configuration.md)

Firstly you need to add the jars to your classpath.

Required JARs
-------------

To make ActiveMQ easy to use, the default **activemq-all.jar** comes complete with all the libraries required. If you prefer to have explicit control over all the jars used by ActiveMQ here is the full list of individual jars required

*   activemq-broker.jar
*   activemq-client.jar
*   activeio-core.jar
*   activemq-kahadb-store.jar (if you wish to use persistence)
*   slf4j-api.jar
*   J2EE APIs which could be the j2ee.jar from Sun or your J2EE container or you could use Geronimo's freely distributable geronimo-spec-j2ee.jar. If you are inside a servlet container and being dependent on the j2ee.jar causes you troubles, the parts of the J2EE jar we are dependent on are as follows...
    *   geronimo-spec-jms.jar
    *   geronimo-spec-jta.jar
    *   geronimo-spec-j2ee-management.jar

If you want to grab a J2EE specification jar we recommend the Apache [repository](https://dist.apache.org/repos/dist/release/geronimo/)

Optional JARS
-------------

*   spring.jar - if you wish to use the XML configuration file for configuring the Message Broker

*   if you wish to use message persistence then you need to add a persistent jar to your classpath (see below). If you just want a lightweight message bus with no durability you can leave this step out but we highly recommend persistence for production deployments.

Persistence Support
-------------------

We support persistence via [Specialized KahaDB file system message store or JDBC](../Features/persistence.md). For full explict control over configuration check out the [Xml Configuration](xml-Community/FAQ/configuration.md). If you wish to use KahaDB, include kahadb.jar in your classpath. In case of JDBC you'll need to include appropriate database driver.

If you're just doing some testing or in-VM SEDA based messaging you may wish to disable persistence. You can use the [Xml Configuration](xml-Community/FAQ/configuration.md) for this.

In 5.x you can do this by setting the `persistent=false` property to false either in the [Xml Configuration](xml-Community/FAQ/configuration.md) or on the [broker URL](../Using ActiveMQ/configuring-transports.md).

Next steps
----------

One of the first things you might want to do is [start a broker](../Using ActiveMQ/run-broker.md). Once you have a broker running you could try some [example programs](../Using ActiveMQ/examples.md)

If you want to write your own application, you can just instantiate an [ActiveMQConnectionFactory](http://activemq.apache.org/maven/activemq-core/apidocs/org/apache/activemq/ActiveMQConnectionFactory.html), configure its properties directly and then you're ready to use the standard JMS API to create Connections, Sessions, MessageProducer and MessageConsumer instances.

You can also take a look at our [unit tests](https://svn.apache.org/repos/asf/activemq/trunk/activemq-core/src/test/java/org/apache/activemq/) for more examples on how to use ActiveMQ.

Additional Resources
--------------------

### Related Reading

*   Sun's [JMS Tutorial](http://java.sun.com/products/jms/tutorial/) is a handy place to start looking at how to use the JMS API directly
*   The ActiveMQ [Website](http://activemq.apache.org/) for specifics on how to use ActiveMQ
*   [ActiveMQ Topologies](../Using ActiveMQ/topologies.md)
*   [ActiveMQ Clustering](../Features/clustering.md)
*   [ActiveMQ Network of Brokers](../Features/Clustering/networks-of-brokers.md)
*   [Staged Event Driven Architecture (SEDA)](http://www.eecs.harvard.edu/~mdw/proj/seda/)

### Specifications

*   [Java Connector Architecture 1.5](http://java.sun.com/j2ee/connector/)
*   [Java Messaging Service](http://java.sun.com/products/jms/index.jsp)

### Related open source projects

*   [Apache Camel](http://camel.apache.org)
*   [Apache Geronimo](http://geronimo.apache.org/)
*   [Hermes JMS](http://www.hermesjms.com/)
*   [Stomp](http://stomp.github.com/) is an open wire protocol (similar to HTTP) for communicating with MOMs from different languages. It has clients for languages like C, C#, Python, Perl, Ruby etc.
*   [XBean](http://xbean.org/) is used as the default XML configuration mechanism for ActiveMQ

