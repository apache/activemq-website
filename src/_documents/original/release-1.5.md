       Apollo 1.5

*   [Apollo 1.7.1](../../index.html)
*   [Developers](../../communitydevelopers.md)
*   [Community](../../community/index.html)
*   [Download](../..OverviewOverview/Overview/download.md)

The [Apache ActiveMQ Project](http://activemq.apache.org) is pleased to announce the availability of Apollo 1.5. ActiveMQ Apollo is a faster, more reliable, easier to maintain messaging broker built from the foundations of the original ActiveMQ.

This release fixes several bugs especially around Openwire and WebSockets and introduces a few improvements like:

*   \[APLO-30\] - Support the Openwire Protocol
*   \[APLO-177\] - Add a UDP based protocol support to Apollo
*   \[APLO-232\] - Add support for enforcing a message count based quota on queues
*   \[APLO-239\] - Aggregate connection-level messages (and bytes) metrics at connector and broker level
*   \[APLO-242\] - Support STOMP frames over UDP
*   \[APLO-260\] - Contribute the FuseSource MQTT impl to Apache and included as part of the default Apollo distribution.
*   \[APLO-261\] - Support the 1.2 STOMP spec.
*   \[APLO-163\] - Auto tune the per-connection buffers (receive_buffer_size and send_buffer_size)
*   \[APLO-179\] - Remove the list of connections from the toplevel REST URI
*   \[APLO-200\] - Support configuring protocol filters
*   \[APLO-243\] - Do not lower the maximum number of open files
*   \[APLO-250\] - add_user_header should prevent forging
*   \[APLO-251\] - Share a single queue for all consumers on topic configured with slow_consumer_policy="queue”
*   \[APLO-259\] - Support Telnet clients that send '\\r\\n' character to terminate a line
*   \[APLO-262\] - Documented OpenWire features
*   \[APLO-263\] - Remove slf4j from openwire examples

For further information see:

*   [Download](http://activemq.apache.org/apolloOverviewOverview/Overview/download.md)
*   [Issues Fixed](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311310&version=12321266)
*   [Documentation](http://activemq.apache.org/apollo/versions/1.5/website/documentation)

[Feedback](http://activemq.apache.org/community/index.html) is always welcomed!