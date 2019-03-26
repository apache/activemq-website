Apache ActiveMQ ™ -- Version 5 Installation 

[Using ActiveMQ 5](../using-activemq-5.md) > [Version 5 Installation](version-5-Using ActiveMQ/installation.md)


*   [Download](OverviewOverview/Overview/download.md) a binary distribution of ActiveMQ and unpack it into some directory.

*   To run an ActiveMQ broker, type the following commands from the directory in which you have just unpacked the ActiveMQ distribution.

cd bin
activemq

The ActiveMQ broker should now run. You can configure the broker by specifying an [Xml Configuration](xml-Community/FAQ/configuration.md) file as a parameter to the _activemq_ command.

You can now run the [Examples](../Using ActiveMQ/examples.md) using Ant.

See the [getting started guide](Using ActiveMQ/initial-Community/FAQ/configuration.md) for details of which jars you need to add to your classpath to start using ActiveMQ in your Java code

If you want to use JNDI to connect to your JMS provider then please view the [JNDI Support](Connectivity/Containers/jndi-Community/support.md). If you are a Spring user you should read about [Spring Support](Connectivity/Containers/spring-Community/support.md)

