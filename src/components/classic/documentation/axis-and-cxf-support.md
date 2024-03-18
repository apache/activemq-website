---
layout: default_md
title: Axis and CXF Support 
title-class: page-title-classic
type: classic
---

[Connectivity](connectivity) > [Containers](containers) > [Axis and CXF Support](axis-and-cxf-support)


ActiveMQ Classic supports both [Apache Axis](http://ws.apache.org/axis/) and [Apache CXF](http://incubator.apache.org/cxf) out of the box.

Axis support is @deprecated

Support for Axis is deprecated, and will be removed from ActiveMQ Classic 5.8 onwards.

Just add the [required jars](initial-configuration) to your classpath and you should be able to use JMS transport support inside either web service framework to send and receive messages using ActiveMQ Classic queues or topics for reliable messaging.

For an example of using the JMS transport with Axis, consult [JMS Transport reference](http://ws.apache.org/axis2/1_2/jms-transport.html) or try looking at the [JMS example](http://svn.apache.org/viewvc/webservices/axis2/branches/java/1_4/modules/samples/jms/) that comes with bundled with Axis' binary and source downloads.

For examples of using JMS transport with CXF, please see its [JMS publish/subscriber sample](http://svn.apache.org/viewvc/cxf/trunk/distribution/src/main/release/samples/jms_pubsub/) and the [JMS queue sample](http://svn.apache.org/viewvc/cxf/trunk/distribution/src/main/release/samples/jms_queue/) available in the CXF source and binary downloads.

