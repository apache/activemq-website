       Apollo 1.7

*   [Apollo 1.7.1](../../index.html)
*   [Developers](../../communitydevelopers.md)
*   [Community](../../community/index.html)
*   [Download](../..OverviewOverview/Overview/download.md)

The [Apache ActiveMQ Project](http://activemq.apache.org) is pleased to announce the availability of Apollo 1.7. ActiveMQ Apollo is a faster, more reliable, easier to maintain messaging broker built from the foundations of the original ActiveMQ.

This release fixes several bugs:

*   \[APLO-287\] - SSL errors with Java 7 (Diffie-Hellman cypher suite sessions)
*   \[APLO-305\] - Wrong exist status codes in the init scripts!
*   \[APLO-308\] - Filesystem permissions in released package are broken..
*   \[APLO-310\] - Wildcard durable subs do not receive messages from topics created after the durable sub is created.
*   \[APLO-315\] - Apollo should protect itself against clients that send many frames with receipt requests, but which do not read the socket for those receipts.
*   \[APLO-319\] - Don't auto delete Topics if it's holding retained messages
*   \[APLO-320\] - Occasionally on restart 'Invalid log position:' warning messages get logged
*   \[APLO-328\] - cors_origin configuration attribute of the the web connectors not properly setting the Access-Control-Allow-Headers
*   \[APLO-330\] - Support using a different Authorizer Authenticator implementations.
*   \[APLO-338\] - PeriodStat buffer in Broker grows infinitely
*   \[APLO-339\] - java.nio.channels.CancelledKeyException
*   \[APLO-346\] - Debug log doesn't log a deleting queue
*   \[APLO-347\] - Action not Authorized Errors when viewing admin interface over HTTPS
*   \[APLO-349\] - Empty STOMP Header Name is Allowed

And introduces improvements like:

*   \[APLO-296\] - Support configuring the LevelDB auto compaction frequency
*   \[APLO-312\] - Apollo fails to bumb up the ulimit!
*   \[APLO-325\] - Allow larger text messages on websocket connection
*   \[APLO-348\] - Decouple cli argument parsing from the Karaf version used using Airline to parse the args
*   \[APLO-213\] - Support an option to set the JMSXUserID openwire header based on the authenticated user.
*   \[APLO-313\] - Avoid blocking producers if consumers are not likely to catch up within a few seconds.
*   \[APLO-314\] - If the leveldb paranoid_checks option is enabled, verify the integrity of index when it's copied/checkpointed
    *   \[APLO-301\] - Add a “ttl” header to control message expiration

For further information see:

*   [Download](http://activemq.apache.org/apolloOverviewOverview/Overview/download.md)
*   [Issues Fixed](https://issues.apache.org/jira/secure/ReleaseNote.jspa?version=12322515&styleName=Text&projectId=12311310&Create=Create)
*   [Documentation](http://activemq.apache.org/apollo/versions/1.7/website/documentation)

[Feedback](http://activemq.apache.org/community/index.html) is always welcomed!