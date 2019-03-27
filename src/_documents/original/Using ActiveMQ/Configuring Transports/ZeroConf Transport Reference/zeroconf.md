Apache ActiveMQ ™ -- ZeroConf 

[Using ActiveMQ](using-activemq.md) > [Configuring Transports](Using ActiveMQ/configuring-transports.md) > [ZeroConf Transport Reference](Using ActiveMQ/Configuring TransportsUsing ActiveMQ/Configuring Transports/Using ActiveMQ/Configuring Transports/zeroconf-transport-reference.md) > [ZeroConf](Using ActiveMQ/Configuring Transports/ZeroConf Transport Reference/zeroconf.md)


ZeroConf
--------

[ZeroConf](http://www.zeroconf.org/) is a standard service discovery mechanism. ZeroConf is used on Apple's OS X; which used to call it Rendezvous but now calls it Bonjour.

Support for [ZeroConf](Using ActiveMQ/Configuring Transports/ZeroConf Transport Reference/zeroconf.md) is **deprecated** and scheduled to be removed from ActiveMQ 5.8 onwards.

We use the [jmDNS](http://jmdns.sf.net/) project to implement the Zeroconf specification to detect services. This means other Zeroconf  
based tools can be used in conjunction with this discovery agent.

You can use ZeroConf with ActiveMQ's [Discovery](Features/discovery.md) mechanism. For more details see

*   [Discovery](Features/discovery.md)
*   [ZeroConf Transport Reference](Using ActiveMQ/Configuring TransportsUsing ActiveMQ/Configuring Transports/Using ActiveMQ/Configuring Transports/zeroconf-transport-reference.md)

