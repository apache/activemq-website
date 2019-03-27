Apache ActiveMQ ™ -- Broker URI 

[Using ActiveMQ](../../../../using-activemq.md) > [Configuring Transports](../../../../Using ActiveMQ/configuring-transports.md) > [ActiveMQ Connection URIs](../../../../Using ActiveMQ/Configuring Transports/activemq-connection-uris.md) > [Broker Configuration URI](../../../../Using ActiveMQ/Configuring Transports/ActiveMQ Connection URIs/broker-configuration-uri.md) > [Broker URI](../../../../Using ActiveMQ/Configuring Transports/ActiveMQ Connection URIs/Broker Configuration URI/broker-uri.md)


Broker URI
----------

The Broker URI allows you to [run a configured broker](../../../../Using ActiveMQ/run-broker.md) using a single URI for all the configuration.

#### Syntax

The URI is assumed to be a composite uri with multiple uris that are used to bind the connectors of the broker.

**broker:(transportURI,network:networkURI)/brokerName?brokerOptions**

If a composite URI use the network: scheme, then the rest of the URI is bound as a network connector.

##### Broker Options

Option Name

Default Value

Description

useJmx

true

Should the broker be exposed to JMX?

persistent

true

Should the broker use persistent storage

populateJMSXUserID

false

Should the broker populate the [JMSXUserID](../../../../Features/jmsxuserid.md) property of messages to indicate the authenticated sender username who sent the message

useShutdownHook

true

should the broker install a shutdown hook so that it can properly shut itself down on a JVM kill

brokerName

localhost

The name of the broker

deleteAllMessagesOnStartup

false

Should all the messages in the persistent store be deleted on broker startup

enableStatistics

true

Should statistics gathering be enabled

##### Example URI

The following example starts up a broker accepting connections on port 61616, and establishes a network connection to remotehost:61616 and disables persistence.

broker:(tcp://localhost:61616,network:static:tcp://remotehost:61616)?persistent=false&useJmx=true

You can use the Broker URI on other transports

If you are using another transport - such as the [VM Transport Reference](../../../../Using ActiveMQ/Configuring Transports/ActiveMQ Connection URIs/vm-transport-reference.md) then you can refer to the above broker URI properties inside that URL. e.g. using the URL

vm://localhost?broker.persistent=false

