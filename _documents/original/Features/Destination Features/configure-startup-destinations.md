Apache ActiveMQ ™ -- Configure Startup Destinations 

[Features](features.md) > [Destination Features](Features/destination-features.md) > [Configure Startup Destinations](Features/Destination Features/configure-startup-destinations.md)


Typically in Apache ActiveMQ we [create destinations on demand](Community/FAQ/Using Apache ActiveMQ/how-do-i-create-new-destinations.md) as clients start to use them. However sometimes users want to be able to configure which destinations are available on startup explicitly in the [Xml Configuration](xml-Community/FAQ/configuration.md).

4.1 Feature

Note this feature is available from 4.1 onwards. If you try this XML on older versions of ActiveMQ you will get an exception about the 'destinations' property not being writable.

### Example

The following [example](http://svn.apache.org/repos/asf/incubator/activemq/trunk/activemq-core/src/test/resources/org/apache/activemq/broker/destinations-on-start.xml) shows how you can configure a number of destinations to be available at startup. <broker xmlns="http://activemq.apache.org/schema/core"> <destinations> <queue physicalName="FOO.BAR" /> <topic physicalName="SOME.TOPIC" /> </destinations> </broker>

