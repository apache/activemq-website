Apache ActiveMQ ™ -- Hermes Jms 

[Tools](../tools.md) > [Hermes Jms](ToolsTools/Tools/hermes-Community/FAQ/jms.md)


You can use ActiveMQ with [Hermes JMS](http://hermesjms.sourceforge.net/) which is a graphical user interface for working with JMS queues. Please refer to the [Hermes JMS](http://hermesjms.sourceforge.net/) site for detailed instructions on using this software.

### Demo

Mark Bucayan kindly submitted a [Flash demo](http://activemq.codehaus.org/HermesAndActiveMQ.html) showing how to use ActiveMQ inside Hermes.

Here are a few steps to get you started with ActiveMQ when using HermesJMS.

### Add ActiveMQ as a Provider

You need to register the jars required to run ActiveMQ inside HermesJMS. To do this click on Options -> Preferences. Then on the Providers tab add the following jars:

*   [activemq-all.jar](http://repo1.maven.org/maven2/org/apache/activemq/) Choose the version that matches your projects needs.

*   [geronimo-j2ee-management\_1.0\_spec-1.0.jar](http://repo2.maven.org/maven2/org/apache/geronimo/specs/geronimo-j2ee-management_1.0_spec/1.0/geronimo-j2ee-management_1.0_spec-1.0.jar)

### Configure an ActiveMQ Session

On the Preferences dialog, the Sessions tab, create a new session using the org.activemq.ActiveMQConnectionFactory connection factory.

You can use the properties table to configure the various factory properties, like the brokerURL to connect to the server, if you wish to connect to a remote ActiveMQ message broker.

Finally you can add some Destinations to the dialog on this page. (Right click to add). Add the destination FOO.BAR for the default test programs.

### Viewing messages on queues

Use the tree control to open your session and the FOO.BAR destination. Try browse the queue. Then run the ActiveMQ sample producer via

mvn producer

And hitting refresh in HermesJMS and you should see the messages that have just been published.

