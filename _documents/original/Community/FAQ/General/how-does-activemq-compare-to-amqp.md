Apache ActiveMQ ™ -- How does ActiveMQ compare to AMQP 

[Community](community.md) > [FAQ](CommunityCommunity/Community/faq.md) > [General](Community/FAQ/general.md) > [How does ActiveMQ compare to AMQP](how-does-activemq-compare-to-Connectivity/Protocols/amqp.md)


[AMQP](Connectivity/Protocols/amqp.md) stands for the _Advanced Message Queue Protocol_ and is a specification for how messaging clients and brokers can interoperate. AMQP is a specification of a wire-level protocol for client to message broker communication. It is not a messaging system like ActiveMQ, but just a messaging protocol.

ActiveMQ now implements AMQP 1.0!

ActiveMQ also supports other open wire protocols:

*   [OpenWire](Connectivity/Protocols/openwire.md), a fast binary format
*   [Stomp](Connectivity/Protocols/stomp.md), a simple and easily implemented text based-protocol
*   [MQTT](Connectivity/ProtocolsConnectivity/Protocols/Connectivity/Protocols/mqtt.md), a compact binary format for limited devices on an unreliable network

Through these protocols, ActiveMQ can support clients in C, C++, C#, Ruby, Python, Perl, PHP, Pike etc. AMQP is most similar to OpenWire, because both OpenWire and AMQP are designed for high performance messaging, through a binary (rather than text-based) format. As a text-based format, STOMP is much easier to implement, but gives somewhat slower performance.

