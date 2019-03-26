       Apollo 1.0

*   [Apollo 1.7.1](../../index.html)
*   [Developers](../../communitydevelopers.md)
*   [Community](../../community/index.html)
*   [Download](../..OverviewOverview/Overview/download.md)

The [Apache ActiveMQ Project](http://activemq.apache.org) is pleased to announce the availability of Apollo 1.0. ActiveMQ Apollo is a faster, more reliable, easier to maintain messaging broker built from the foundations of the original ActiveMQ. Apollo is the fastest and most robust STOMP server.

Apollo Features:

*   [Stomp 1.0](http://stomp.github.com/stomp-specification-1.0.html) Protocol Support
*   [Stomp 1.1](http://stomp.github.com/stomp-specification-1.1.html) Protocol Support
*   [Topics and Queues](http://activemq.apache.org/apollo/documentationuser-manual.md#Destination_Types)
*   [Queue Browsers](http://activemq.apache.org/apollo/documentationuser-manual.md#Browsing_Subscriptions)
*   [Durable Subscriptions on Topics](http://activemq.apache.org/apollo/documentationuser-manual.md#Topic_Durable_Subscriptions)
*   [Mirrored Queues](http://activemq.apache.org/apollo/documentationuser-manual.md#Mirrored_Queues)
*   [Reliable Messaging](http://activemq.apache.org/apollo/documentationuser-manual.md#Reliable_Messaging)
*   [Message Expiration](http://activemq.apache.org/apollo/documentationuser-manual.md#Message_Expiration)
*   [Message Swapping](http://activemq.apache.org/apollo/documentationarchitecture.md#Message_Swapping)
*   [Message Selectors](http://activemq.apache.org/apollo/documentationuser-manual.md#Message_Selectors)
*   [JAAS Authentication](http://activemq.apache.org/apollo/documentationuser-manual.md#Authentication)
*   [ACL based Authorization](http://activemq.apache.org/apollo/documentationuser-manual.md#Authorization)
*   [SSL/TLS Support](http://activemq.apache.org/apollo/documentationuser-manual.md#Using_SSL_TLS) and Certificate based Authentication
*   [REST Management API](http://activemq.apache.org/apollo/documentation/management-Index/Site/NavigationIndex/Site/Navigation/Index/Site/Navigation/api.md)

Noteworthy changes since the last beta include:

*   \[APLO-120\] - Add a —with-ssl option to the apollo create command to control if an SSL enabled configuration is created.
*   \[APLO-134\] - LevelDB store should use a file lock so a broker instance get exclusive access to the store data.
*   \[APLO-135\] - Add example to the distro that shows how you can boot up an embedded broker in a Java app.
*   \[APLO-109\] - Apollo should run with assertions enabled by default unless APOLLO_ASSERTIONS=false is set in the env.
*   \[APLO-110\] - Provide more information in case of authentication failure
*   \[APLO-112\] - Support for TLS 1.2
*   \[APLO-118\] - All configuration attributes which configure memory/disk usage sizes should support values like “1k” “2G” etc.
*   \[APLO-124\] - call the LoginModule.logout method
*   \[APLO-125\] - Client authentication error message
*   \[APLO-128\] - Simplify the leveldb-store's log record format so that every record has a checksum which can be used to quickly validate all read data in case your paranoid about data corruption in your FS
*   \[APLO-130\] - Allow acquired queue entries to get swapped. This is especially handy if the entry was already persisted anyways.
*   \[APLO-131\] - Stores should track “storage schema version number” to detect when the store is incompatible with a new broker version.
*   \[APLO-136\] - Support dots in a dsub name
*   \[APLO-141\] - The connection screen displays 'transport: tcp' even though the connection came in over the tls port.
*   \[APLO-139\] - Simplify the JSON encoding of the @class field

Further information:

*   [Download](http://activemq.apache.org/apolloOverviewOverview/Overview/download.md)
*   [Issues Fixed](https://issues.apache.org/jira/secure/ReleaseNote.jspa?version=12316435&styleName=Text&projectId=12311310&Create=Create)
*   [Documentation](http://activemq.apache.org/apollo/versions/1.0/website/documentation)

[Feedback](http://activemq.apache.org/community/index.html) is always welcome!