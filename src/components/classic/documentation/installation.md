---
layout: default_md
title: Installation 
title-class: page-title-classic
type: classic
---

[Using ActiveMQ Classic](using-activemq-classic) > [Installation](installation)


*   [Download](download) a binary distribution of ActiveMQ Classic and unpack it into some directory.

*   To run an ActiveMQ Classic broker, type the following commands from the directory in which you have just unpacked the ActiveMQ Classic distribution.
```
cd bin
activemq
```
The ActiveMQ Classic broker should now run. You can configure the broker by specifying an [Xml Configuration](xml-configuration) file as a parameter to the _activemq_ command.

You can now run the [Examples](examples) using Ant.

See the [getting started guide](initial-configuration) for details of which jars you need to add to your classpath to start using ActiveMQ Classic in your Java code

If you want to use JNDI to connect to your JMS provider then please view the [JNDI Support](jndi-support). If you are a Spring user you should read about [Spring Support](spring-support)

