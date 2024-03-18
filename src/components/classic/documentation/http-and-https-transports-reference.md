---
layout: default_md
title: HTTP and HTTPs Transports Reference 
title-class: page-title-classic
type: classic
---

[Using ActiveMQ Classic](using-activemq-classic) > [Configuring Transports](configuring-transports) > [ActiveMQ Classic Connection URIs](activemq-classic-connection-uris) > [HTTP and HTTPs Transports Reference](http-and-https-transports-reference)


### HTTP and HTTPS Transports

The HTTP and HTTPS transports are used to tunnel over HTTP or HTTPS using XML payloads. This allows the ActiveMQ Classic client and broker to tunnel over HTTP avoiding any firewall issues.

If the client is not JMS you might want to look at [REST](rest) or [Ajax](ajax) support instead.

Note that the HTTP Transport is located in the activemq-optional jar.

ActiveMQ Classic uses a combination of Jetty's Server and SslSocketConnector objects to communicate via the HTTPS transport. When using HTTPS, improper configuration of the corresponding SSL certificates and/or keys may very well lead to the Jetty infinite loop problem described in this [nabble thread](http://www.nabble.com/SslSocketConnector-loops-forever-during-initialization-to14621825.html#a17535467). A good reference on creating and configuring keys and certificates can be found [here](http://docs.codehaus.org/display/JETTY/How+to+configure+SSL).

#### Configuration Syntax

[http://host:port](http://host:port) [https://host:port](https://host:port)

#### Example URI

http://localhost
https://localhost:8080

#### Dependencies

Clients that use http(s) transport have some additional dependencies, over tcp ones. Those are

*   [HttpClient](http://hc.apache.org/httpclient-3.x/)
*   and [XStream](http://xstream.codehaus.org/)

Make sure you have them in your classpath if you use this transport. Also, if you're configuring networks of brokers with http(s) transport make sure you have them in broker's classpath (somewhere under `lib/` directory) as the broker will act as a client in that case.

