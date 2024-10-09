---
layout: default_md
title: ActiveMQ Artemis Console Documentation
title-class: page-title-artemis
type: artemis
---
[Documentation](index) > [Deploying](deploying)

## Deploying embedded in ActiveMQ Artemis

Currently not supported. This will arrive in ActiveMQ Artemis 3.0. This is because the new console requires changes to use Jakarta APIs for the embedded
web server and other possible breaking changes not suited to make in Artemis 2.x releases.

Prior to Artemis 3.0 the new console is aimed at deployment in standalone server, e.g as outlined below for Jetty and Tomcat.

## Deploying in Jetty

Install [Jetty Version 12](https://jetty.org/download.html)  and make sure to add the modules http and ee10-deploy. See the 
[Jetty Deploy Guide](https://jetty.org/docs/jetty/12/operations-guide/deploy/index.html) for more info

You will need to create a Jetty Context XML file in the webapps directory, name it *artemis-console.xml* and add the following:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE Configure PUBLIC "-//Jetty//Configure//EN" "https://jetty.org/configure_10_0.dtd">

<Configure class="org.eclipse.jetty.ee10.webapp.WebAppContext"> 
  <Set name="contextPath">/console</Set> 
  <Set name="war">/myapps/artemis-console-war.war</Set> 
</Configure>
```

You can then start Jetty using the following command:

```shell
java -Dhawtio.authenticationEnabled=false -jar $JETTY_HOME/start.jar
```

> **_NOTE:_**  Since this is only running the Connect plugin Hawtio authentication is disabled. Authentication will take place on connection to the Artemis Broker. 

Connect a browser to [http://localhost:8080/console](http://localhost:8080/console) or the URL you configured for Jetty.

The [connecting](console.html#connecting-to-the-broker) chapter explains how to connect to a running broker.

For full information on deploying Applications in Jetty see [The Operations Guide](https://jetty.org/docs/jetty/12/operations-guide/index.html)

<a id="deploying-in-tomcat"></a>
## Deploying in Tomcat

Firstly you will need to install [Tomcat Version 10](https://tomcat.apache.org/download-10.cgi).

There are many ways to deploy a *WAR* file using Tomcat. The [Tomcat Documentation](https://tomcat.apache.org/tomcat-10.1-doc) explains this in detail.

You will need to make sure  that the context path for the console is configured to be */console*, if the war were configured in 
the tomcat *server.xml* this would look like:

```xml
<Context path="/console" docBase="/myapps/artemis-console-war.war"/>
```

Since the console only deploys the *connect* plugin authentication by hawtio is done on connecting to the Artemis Broker 
you can disable authentication by setting the property:

```shell
export CATALINA_OPTS="-Dhawtio.authenticationEnabled=false"
```

Once Tomcat is started connect a browser to [http://localhost:8080/console](http://localhost:8080/console) or the URL you configured for tomcat.

The [connecting](console.html#connecting-to-the-broker) chapter explains how to connect to a running broker
