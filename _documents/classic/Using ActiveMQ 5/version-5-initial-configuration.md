Apache ActiveMQ ™ -- Version 5 Initial Configuration 

[Using ActiveMQ 5](../using-activemq-5.md) > [Version 5 Initial Configuration](version-5-Using ActiveMQ/initial-Community/FAQ/configuration.md)


Document Organization
---------------------

/*<!\[CDATA\[*/ div.rbtoc1502137290450 {padding: 0px;} div.rbtoc1502137290450 ul {list-style: disc;margin-left: 0px;} div.rbtoc1502137290450 li {margin-left: 0px;padding-left: 0px;} /*\]\]>*/

*   [Required JARs](#Version5InitialConfiguration-RequiredJARs)
*   [Optional JARS](#Version5InitialConfiguration-OptionalJARS)
*   [Persistence support](#Version5InitialConfiguration-Persistencesupport)
*   [Next steps](#Version5InitialConfiguration-Nextsteps)
*   [Additional resources](#Version5InitialConfiguration-Additionalresources)
    *   [Related reading](#Version5InitialConfiguration-Relatedreading)
    *   [Specifications](#Version5InitialConfiguration-Specifications)
    *   [Related open source projects](#Version5InitialConfiguration-Relatedopensourceprojects)

Firstly you need to add the jars to your classpath.

Required JARs
-------------

To make ActiveMQ easy to use, the default **activemq-all.jar** comes complete with all the libraries required. If you prefer to have explicit control over all the jars used by ActiveMQ here is the full list of individual jars required

*   activemq-broker.jar
*   activemq-client.jar
*   activemq-kahadb-store.jar
*   activemq-spring.jar
*   hawtbuf-1.11.jar
*   slf4j-api.jar
*   slf4j-log4j12.jar
*   log4j-1.2.17.jar
*   J2EE APIs which could be the j2ee.jar from Sun or your J2EE container or you could use Geronimo's freely distributable geronimo-spec-j2ee.jar. If you are inside a servlet container and being dependent on the j2ee.jar causes you troubles, the parts of the J2EE jar we are dependent on are as follows...
    *   geronimo-spec-jms.jar
    *   geronimo-spec-jta.jar
    *   geronimo-spec-j2ee-management.jar

If you want to grab a J2EE specification jar we recommend the Apache [repository](http://cvs.apache.org/repository/geronimo-spec/jars/)

Optional JARS
-------------

*   spring.jar - if you wish to use the XML configuration file for configuring the Message Broker

*   if you wish to use message persistence then you need to add a persistent jar to your classpath (see below). If you just want a lightweight message bus with no durability you can leave this step out but we highly recommend persistence for production deployments.

Persistence support
-------------------

The default persistence is the [AMQ Message Store](../Features/Persistence/amq-message-store.md). We do still support persistence via [JDBC and a high performance journal](../Features/persistence.md). For full explict control over configuration check out the [Xml Configuration](xml-Community/FAQ/configuration.md).

If you're just doing some testing or in-VM SEDA based messaging you may wish to disable persistence. You can use the [Xml Configuration](xml-Community/FAQ/configuration.md) for this.

You can do this by setting the usePersistence property to false either in the [Xml Configuration](xml-Community/FAQ/configuration.md) or on the [broker URL](../Using ActiveMQ/configuring-transports.md).

Next steps
----------

One of the first things you might want to do is [start a broker](../Using ActiveMQ/run-broker.md). Once you have a broker running you could try using the [JNDI Support](Connectivity/Containers/jndi-Community/support.md) which shows how to run an example JMS program. Or there are some other [example programs](../Using ActiveMQ/examples.md)

If you don't want to use JNDI you can just instantiate an [ActiveMQConnectionFactory](http://activemq.codehaus.org/maven/apidocs/org/apache/activemq/ActiveMQConnectionFactory.html), configure its properties directly and then you're ready to use the standard JMS API to create Connections, Sessions, MessageProducer and MessageConsumer instances.

Additional resources
--------------------

### Related reading

*   Sun's [JMS Tutorial](http://java.sun.com/products/jms/tutorial/) is a handy place to start looking at how to use the JMS API directly
*   The ActiveMQ [Website](http://activemq.org) for specifics on how to use ActiveMQ
*   [ActiveMQ Topologies](../Using ActiveMQ/topologies.md)
*   [ActiveMQ Clustering](../Features/clustering.md)
*   [ActiveMQ Network of Brokers](../Features/Clustering/networks-of-brokers.md)
*   [Staged Event Driven Architecture (SEDA)](http://www.eecs.harvard.edu/~mdw/proj/seda/)

### Specifications

*   [Java Connector Architecture 1.5](http://java.sun.com/j2ee/connector/)
*   [Java Messaging Service](http://java.sun.com/products/jms/index.jsp)
*   [WSIF](http://ws.apache.org/wsif/)
*   [WS-Notification](http://www-128.ibm.com/developerworks/webservices/library/specification/ws-notification/)

### Related open source projects

*   [Apache Geronimo](http://geronimo.apache.org/)
*   [Hermes JMS](http://www.hermesjms.com/)
*   [Jencks](http://jencks.org/) is a Spring JCA container allowing you to use connection & thread & POJO pooling for consuming JMS in highly concurrent servers
*   [Lingo](http://lingo.codehaus.org/) is a Spring/POJO remoting layer for JMS. It allows you to reuse all the power of JMS from your POJOs without using any of the JMS APIs directly
*   [Spring](http://www.springframework.org/)
*   [Stomp](http://stomp.codehaus.org/) is an open wire protocol (similar to HTTP) for communicating with MOMs from different languages. It has clients for languages like C, C#, Python, Perl, Ruby etc.
*   [XBean](http://xbean.org/) is used as the default XML configuration mechanism for ActiveMQ

