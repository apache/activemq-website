Apache ActiveMQ ™ -- New Features in 5.2 

[Features](features.md) > [New Features](Features/new-features.md) > [New Features in 5.2](Features/New Features/new-features-in-52.md)


Apache ActiveMQ 5.2 is primarily a maintenance release which [resolves](https://issues.apache.org/activemq/secure/ReleaseNote.jspa?projectId=10520&styleName=Html&version=11841)

JIRA Issues Macro: Data cannot be retrieved due to an unexpected error

.

New Features in 5.2
-------------------

The new features and enhancements in this release include:

*   [Additional advisory messages](Features/Message FeaturesFeatures/Message Features/Features/Message Features/advisory-message.md) for messages delivered/consumed fast producers/slow consumers, Usage limits, Slaves become masters etc.
*   Enhanced ssl context configuration through spring/xbean
*   New individual acknowledge mode for message consumption
*   Ability to configure the automatic discarding of the items being sent to the dead letter queue
*   Ability to limit the maximum number of connections to a Broker
*   Ability to configure [separate lock](https://issues.apache.org/activemq/browse/AMQ-1244) Datasource for JDBC Master slave.
*   activemq-camel and activemq-connection-pool now have their own modules, no longer in activemq-core
*   The default [ActiveMQConnectionFactory](http://activemq.apache.org/maven/activemq-core/apidocs/org/apache/activemq/ActiveMQConnectionFactory.html) brokerUrl now uses the [failover transport](Using ActiveMQ/Configuring Transports/ActiveMQ Connection URIs/failover-transport-reference.md).
*   Uses Apache Camel [1.5](http://activemq.apache.org/camel/camel-150-release.html).

