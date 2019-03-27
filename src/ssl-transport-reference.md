---
layout: default_md
title: SSL Transport Reference 
title-class: page-title-activemq5
type: activemq5
---

[Using ActiveMQ](using-activemq) > [Configuring Transports](configuring-transports) > [ActiveMQ Connection URIs](activemq-connection-uris) > [SSL Transport Reference](ssl-transport-reference)


### The SSL Transport

The SSL transport allows clients to connect to a remote ActiveMQ broker using SSL over a TCP socket.

#### Configuration Syntax

`ssl://hostname:port?transportOptions**

#### Transport Options

The configuration options from [TCP](tcp-transport-reference) are relevant.

#### Example URI

ssl://localhost:61616?trace=false

#### SSLServerSocket options

From version 5.4 any [SSLServerSocket](http://java.sun.com/j2se/1.4.2/docs/api/javax/net/ssl/SSLServerSocket.html) option may be set on a TransportConnection via **?transport.XXX**, for example:

ssl://localhost:61616?transport.enabledCipherSuites=SSL\_RSA\_WITH\_RC4\_128\_SHA,SSL\_DH\_anon\_WITH\_3DES\_EDE\_CBC\_SHA
ssl://localhost:61616?transport.needClientAuth=true

#### Client configuration

JMS clients can simply use the [ActiveMQSslConnectionFactory](http://activemq.apache.org/maven/5.9.0/apidocs/org/apache/activemq/ActiveMQSslConnectionFactory.html) together with an ssl:// broker url as the following Spring configuration illustrates

 
<bean id="AMQJMSConnectionFactory" class="org.apache.activemq.ActiveMQSslConnectionFactory">
  <property name="trustStore" value="/path/to/truststore.ts" />
  <property name="trustStorePassword" value="password" />
  <property name="keyStore" value="/path/to/keystore.ks" />
  <property name="keyStorePassword" value="password" />
  <property name="brokerURL" value="ssl://localhost:61616" />
  <property name="userName" value="admin" /> 
  <property name="password" value="admin" />
</bean> 

Unless the broker's SSL transport is configured for transport.needClientAuth=true, the client won't need a keystore but requires a truststore in order to validate the broker's certificate.

Similar to the broker transport configuration you can pass on SSL transport options using **?socket.XXX**, such as

ssl://localhost:61616?socket.enabledCipherSuites=SSL\_RSA\_WITH\_RC4\_128\_SHA,SSL\_DH\_anon\_WITH\_3DES\_EDE\_CBC\_SHA

#### Other Links

*   [How do I use SSL](how-do-i-use-ssl)

You can also turn on SSL debug informations this way by adding:

-Djavax.net.debug=ssl

this way you can see what goes wrong and why you get connections closed.

"Be careful with multicast discovery"

If your XML configuration file contains the following and you wish to use SSL

       <networkConnector uri="multicast://default"/>

Then you will currently need to comment that out.  
The reason is to prevent ActiveMQ atempting to connect to itself - if you do this with a self-signed  
certificate, you will get a constant spam of certificate_unknown  
stacktraces to the console, as the broker is not configured with the  
truststore,

