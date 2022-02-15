---
layout: default_md
title: How can I enable detailed logging 
title-class: page-title-activemq5
type: activemq5
---

 [FAQ](faq) > [Configuration](configuration) > [How can I enable detailed logging](how-can-i-enable-detailed-logging)


How can I enable detailed logging
---------------------------------

We use [slf4j](https://www.slf4j.org/) which allows the underlying logging implementation to be statically bound at startup. 
 
By default we ship with log4j but feel free to make your own choice.

If you've got log4j.jar on your classpath you can use a log4j.properties file to configure the logging levels. See the [log4j.properties example](https://github.com/apache/activemq/blob/main/activemq-broker/src/test/resources/log4j.properties) for the kind of thing you'll need.

e.g. adding the following to your log4j.properties will enable tracing of ActiveMQ code:

in 4.x
```
log4j.logger.org.apache.activemq=INFO
log4j.logger.org.apache.activemq.spring=WARN
```
in 3.x
```
log4j.logger.org.activemq=TRACE
```

### Getting help on log4j

If you are new to log4j please see the [log4j manual](https://logging.apache.org/log4j/1.2/manual.html)

