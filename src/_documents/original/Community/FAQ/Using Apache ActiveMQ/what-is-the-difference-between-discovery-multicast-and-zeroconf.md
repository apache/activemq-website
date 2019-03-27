Apache ActiveMQ ™ -- What is the difference between discovery, multicast and zeroconf 

[Community](community.md) > [FAQ](CommunityCommunity/Community/faq.md) > [Using Apache ActiveMQ](Community/FAQCommunity/FAQ/Community/FAQ/using-apache-activemq.md) > [What is the difference between discovery, multicast and zeroconf](Community/FAQ/Using Apache ActiveMQCommunity/FAQ/Using Apache ActiveMQ/Community/FAQ/Using Apache ActiveMQ/what-is-the-difference-between-discovery-multicast-and-zeroconf.md)


Discovery refers to either a client (producer or consumer) establishing a 'transport connector' to the broker or a broker establishing 'network connector' to another broker without explicit static configuration of broker (IP or hostname).

The scheme 'multicast' refers to either listening for or advertising discovery events on a multicast address. zeroconf is similar to multicast, except for protocol specific to Apple's Rendezvous (bonjour).

### Broker

   <networkConnectors>
     <networkConnector name="default" uri="multicast://default"/>
   </networkConnectors>

The above configuration in the broker xml file will make it automatically establish network connectors to other brokers that advertise themselves on the multicast address: when this broker gets a discovery event from another broker, the event has information that enables it to establish network connector to that broker.

Self-advertisement is facilitated by the following config:

 
  <transportConnectors>
      <transportConnector name="default" uri="tcp://localhost:61616" discoveryUri="multicast://default"/>
   </transportConnectors>

### Client

An example usage of discovery on the client side (using the transport 'discovery' that uses discovery agent) ...

 <transportConnectors>
      <transportConnector name="default" uri="discovery:(multicast://default)"/>
   </transportConnectors>

ps: discovery (which is a confusing name) is just like a 'reliable' transport such as [failover](Using ActiveMQ/Configuring Transports/ActiveMQ Connection URIs/failover-transport-reference.md). If it is unable to connect to a broker, it will try another broker (assuming it  
heard its advertisement over multicast).

