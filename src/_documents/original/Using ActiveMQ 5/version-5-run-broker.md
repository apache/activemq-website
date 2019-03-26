Apache ActiveMQ ™ -- Version 5 Run Broker 

[Using ActiveMQ 5](using-activemq-5.md) > [Version 5 Run Broker](Using ActiveMQ 5/version-5-Using ActiveMQ/run-broker.md)


Running an ActiveMQ Broker
==========================

Note if you want to use an **embedded broker** then see [How do I embed a Broker inside a Connection](Community/FAQ/Using Apache ActiveMQ/how-do-i-embed-a-broker-inside-a-connection.md)

The [binary distribution](OverviewOverview/Overview/download.md) of ActiveMQ comes with a script called 'activemq' which allows you to run a broker.  
For details regarding the activemq init script file review  [Unix Shell Script](Features/Unix/unix-shell-script.md)  and  [ActiveMQ Command Line Tools Reference](Community/FAQ/Using Apache ActiveMQ/activemq-command-line-tools-reference.md)

Typing the following will run an ActiveMQ Broker using the out of the box configuration in the foreground

bin/activemq console

You can then use a [Broker Configuration URI](Using ActiveMQ/Configuring Transports/ActiveMQ Connection URIs/broker-configuration-uri.md) to specify how to start and configure your broker using a single URI. For example

bin/activemq console broker:(tcp://localhost:61616,network:static:tcp://remotehost:61616)?persistent=false&useJmx=true

Or you can a [Broker XBean URI](Using ActiveMQ/Configuring Transports/ActiveMQ Connection URIs/Broker Configuration URIUsing ActiveMQ/Configuring Transports/ActiveMQ Connection URIs/Broker Configuration URI/Using ActiveMQ/Configuring Transports/ActiveMQ Connection URIs/Broker Configuration URI/broker-xbean-uri.md) to customize the Message Broker using the [Xml Configuration](xml-Community/FAQ/configuration.md) to suit your needs. You can run a broker with a specific XML configuration as

bin/activemq console xbean:foo.xml

Or you can use a [Broker Properties URI](Using ActiveMQ/Configuring Transports/ActiveMQ Connection URIs/Broker Configuration URIUsing ActiveMQ/Configuring Transports/ActiveMQ Connection URIs/Broker Configuration URI/Using ActiveMQ/Configuring Transports/ActiveMQ Connection URIs/Broker Configuration URI/broker-properties-uri.md) to customize the Message Broker using a properties file; which avoids the dependency on Spring, xbean-spring and XML.

bin/activemq console properties:foo.properties

### Monitoring the broker

You can monitor ActiveMQ using the [Web Console](ToolsTools/Tools/web-console.md) by pointing your browser at

[http://localhost:8161/admin](http://localhost:8161/admin)

From ActiveMQ 5.8 onwards the web apps is secured out of the box.  
The default username and password is admin/admin. You can configure this in the conf/jetty-real.properties file.

Or you can use the [JMX](Features/jmx.md) support to view the running state of ActiveMQ.

For more information see the file `docs/WebConsole-README.txt` in the distribution.

### Running the broker inside a Servlet Engine

See the source code (or WAR) of the [Web Console](ToolsTools/Tools/web-console.md) for an example of how to run the broker inside a web application using Spring.

### Running the broker inside your J2EE Application Server

Whether its Apache Geronmio, JBoss, WebLogic or some other J2EE container you should be able to just reconfigure and then deploy the activemq-*.rar which is included in the binary distribution as a deployment unit in your app server. By default the rar is not configured to start an embedded broker. But by setting the brokerXmlConfig on the resource adapter configuration, the resource adapter will start an embedded broker.

For more details see [J2EE](Connectivity/Containers/j2ee.md)

### Running the broker from the source code

From the latest [checkout](Developers/source.md) of the code you can run a broker using the [ActiveMQ Performance Plugin](Features/Performance/activemq-performance-module-users-manual.md)

### Running the broker from maven

You can download and install the ActiveMQ Startup Maven Plugin via the following command if you are in a directory with a pom.xml. More detailed usage [here](ToolsTools/Tools/maven2-activemq-broker-plugin.md)

mvn org.apache.activemq.tooling:maven-activemq-plugin:5.0-SNAPSHOT:run    

You can also include it the pom and run it using:

mvn activemq:run          

Handling JMS brokers going down
-------------------------------

A common requirement is that if the JMS broker goes down you want to automatically detect the failure and try to reconnect under the covers so that your application does not have to worry about reconnection.

There is detailed documentation on this in [Configuring Version 5 Transports](Using ActiveMQ 5/configuring-version-5-transports.md); briefly...

Just change your connection URI i to

failover:tcp://host:port

And the JMS client will auto-reconnect to the broker if it is shutdown and restarted later on.

