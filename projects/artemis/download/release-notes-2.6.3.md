--- 
layout: default_md
title: ActiveMQ Artemis 2.6.3 Release Notes
title-class: page-title-artemis
type: artemis
---

A complete list of JIRAs for the 2.6.3 release can be found [here](https://issues.apache.org/jira/secure/ReleaseNote.jspa?version=12343472&projectId=12315920).

A list of commits can be found [here](commit-report-2.6.3).

#### Bug

* \[[ARTEMIS-1482](https://issues.apache.org/jira/browse/ARTEMIS-1482)\] - Catch malformed simple string
* \[[ARTEMIS-1732](https://issues.apache.org/jira/browse/ARTEMIS-1732)\] - AMQP anonymous producer not blocked on max-disk-usage
* \[[ARTEMIS-1923](https://issues.apache.org/jira/browse/ARTEMIS-1923)\] - Wrongly constructing binding journalimpl
* \[[ARTEMIS-1924](https://issues.apache.org/jira/browse/ARTEMIS-1924)\] - Adding the ability to configure the AMQP IdleTimeout
* \[[ARTEMIS-1928](https://issues.apache.org/jira/browse/ARTEMIS-1928)\] - Message conversion on certain body types will cause NPE
* \[[ARTEMIS-1936](https://issues.apache.org/jira/browse/ARTEMIS-1936)\] - getQueueNames(String routingType) method should be mark as Operation instead of Attribute
* \[[ARTEMIS-1944](https://issues.apache.org/jira/browse/ARTEMIS-1944)\] - Typo mistake in broker.xml at journal-buffer-timeout explanation
* \[[ARTEMIS-1958](https://issues.apache.org/jira/browse/ARTEMIS-1958)\] - Artemis may not be able to delete pages when there are some empty page files
* \[[ARTEMIS-1966](https://issues.apache.org/jira/browse/ARTEMIS-1966)\] - Replication channel closed but not connection if flow controlled during replication
* \[[ARTEMIS-1970](https://issues.apache.org/jira/browse/ARTEMIS-1970)\] - Clean up LDAP connection in JAAS login module
* \[[ARTEMIS-1978](https://issues.apache.org/jira/browse/ARTEMIS-1978)\] - AMQP sequencing errors can occur when multi-frame deliveries are multiplexed on a session
* \[[ARTEMIS-1985](https://issues.apache.org/jira/browse/ARTEMIS-1985)\] - Produced message via OpenWire does not get committed in XA transaction
* \[[ARTEMIS-1986](https://issues.apache.org/jira/browse/ARTEMIS-1986)\] - PagingTest\#testDeletePhysicalPages will fail if a record about deleting a page is not saved in journal
* \[[ARTEMIS-1988](https://issues.apache.org/jira/browse/ARTEMIS-1988)\] - Activate Callbacks should not be cleared on Server Stop
* \[[ARTEMIS-1989](https://issues.apache.org/jira/browse/ARTEMIS-1989)\] - Replication Catch up with file leakages on open
* \[[ARTEMIS-1990](https://issues.apache.org/jira/browse/ARTEMIS-1990)\] - Windows cannot start with its current script due to double quotes
* \[[ARTEMIS-1992](https://issues.apache.org/jira/browse/ARTEMIS-1992)\] - JDBC File Locks Map is not thread safe
* \[[ARTEMIS-1995](https://issues.apache.org/jira/browse/ARTEMIS-1995)\] - Client fail over fails when live shut down too soon
* \[[ARTEMIS-1997](https://issues.apache.org/jira/browse/ARTEMIS-1997)\] - Filters cause unneeded SimpleString creation on hotpath
* \[[ARTEMIS-2001](https://issues.apache.org/jira/browse/ARTEMIS-2001)\] - JMSXGroupID and JMSXUserID not returned in getPropertyNames when set
* \[[ARTEMIS-2010](https://issues.apache.org/jira/browse/ARTEMIS-2010)\] - LDAPLoginModule should actively detect unauthenticated Bind requests
* \[[ARTEMIS-2011](https://issues.apache.org/jira/browse/ARTEMIS-2011)\] - AddressSettings incompatibilities
* \[[ARTEMIS-2013](https://issues.apache.org/jira/browse/ARTEMIS-2013)\] - Can't create durable subscriber to a composite topic
* \[[ARTEMIS-2014](https://issues.apache.org/jira/browse/ARTEMIS-2014)\] - Treat inability to create directory for paging as critial
* \[[ARTEMIS-2017](https://issues.apache.org/jira/browse/ARTEMIS-2017)\] - Eliminate LRUCache from SelectorParser
* \[[ARTEMIS-2020](https://issues.apache.org/jira/browse/ARTEMIS-2020)\] - Use prefixes when useJNDI=false in RA
* \[[ARTEMIS-2021](https://issues.apache.org/jira/browse/ARTEMIS-2021)\] - NetworkHealthCheck should only restart a server when it had a network outage.
* \[[ARTEMIS-2023](https://issues.apache.org/jira/browse/ARTEMIS-2023)\] - Support 1x prefixes for JMS destinations instantiated using session
* \[[ARTEMIS-2025](https://issues.apache.org/jira/browse/ARTEMIS-2025)\] - JMS Client does not throw MessageFormatRuntimeException on malformed body
* \[[ARTEMIS-2027](https://issues.apache.org/jira/browse/ARTEMIS-2027)\] - handle arriving AMQP deliveries being aborted
* \[[ARTEMIS-2029](https://issues.apache.org/jira/browse/ARTEMIS-2029)\] - Reconnects will break version compatibility checks when reconnecting to older versions
* \[[ARTEMIS-2030](https://issues.apache.org/jira/browse/ARTEMIS-2030)\] - Interrupting Threads on the ResourceAdapter may lead to unexpected issues
* \[[ARTEMIS-2032](https://issues.apache.org/jira/browse/ARTEMIS-2032)\] - Artemis RA connections disconnected after failover
* \[[ARTEMIS-2046](https://issues.apache.org/jira/browse/ARTEMIS-2046)\] - Server stop may break rollback
* \[[ARTEMIS-2053](https://issues.apache.org/jira/browse/ARTEMIS-2053)\] - Compacting may mix up data files orders. Causing data loss.
* \[[ARTEMIS-2055](https://issues.apache.org/jira/browse/ARTEMIS-2055)\] - Race Condition in ServerSessionPacketHandler can result in lost data when using LargeMessages
* \[[ARTEMIS-2056](https://issues.apache.org/jira/browse/ARTEMIS-2056)\] - JDBC SequentialFile copy does not set the correct writer position
* \[[ARTEMIS-2065](https://issues.apache.org/jira/browse/ARTEMIS-2065)\] - Can't change queue routing-type between restarts

#### Improvement

* \[[ARTEMIS-1947](https://issues.apache.org/jira/browse/ARTEMIS-1947)\] - Return meta-data in JSON session management ops
* \[[ARTEMIS-1971](https://issues.apache.org/jira/browse/ARTEMIS-1971)\] - Support connection pooling in LDAPLoginModule
* \[[ARTEMIS-1994](https://issues.apache.org/jira/browse/ARTEMIS-1994)\] - Include global-size-bytes in WARN message AMQ222038/39 for paging
* \[[ARTEMIS-1999](https://issues.apache.org/jira/browse/ARTEMIS-1999)\] - Broker is using 100% core's CPU time if message grouping is used
* \[[ARTEMIS-2024](https://issues.apache.org/jira/browse/ARTEMIS-2024)\] - Enable backwards compatability of shared client ID across ConnectionFactories
* \[[ARTEMIS-2047](https://issues.apache.org/jira/browse/ARTEMIS-2047)\] - Provide compatible 1.x option into ActiveMQJMSClient
* \[[ARTEMIS-2051](https://issues.apache.org/jira/browse/ARTEMIS-2051)\] - Add trace logging for JDBC
* \[[ARTEMIS-2057](https://issues.apache.org/jira/browse/ARTEMIS-2057)\] - AMQP: Credit window can grow beyond max credit configuration
* \[[ARTEMIS-2062](https://issues.apache.org/jira/browse/ARTEMIS-2062)\] - AMQP: Reduce lock contention and allocations on message processing
* \[[ARTEMIS-2063](https://issues.apache.org/jira/browse/ARTEMIS-2063)\] - Improve logging around address & queue deployment
* \[[ARTEMIS-2064](https://issues.apache.org/jira/browse/ARTEMIS-2064)\] - Make address & queue deployment more robust

#### Test

* \[[ARTEMIS-2016](https://issues.apache.org/jira/browse/ARTEMIS-2016)\] - Wait.waitFor is sometimes called with zero timeout (durationMillis), or with durationMillis &lt; sleepMillis

#### Task

* \[[ARTEMIS-1918](https://issues.apache.org/jira/browse/ARTEMIS-1918)\] - RemotingConnectionImpl contains unused private clientID field used by toString()
* \[[ARTEMIS-1974](https://issues.apache.org/jira/browse/ARTEMIS-1974)\] - Document LDAP role expansion functionality
* \[[ARTEMIS-2006](https://issues.apache.org/jira/browse/ARTEMIS-2006)\] - Remove reference to setDeadLetterAddress & setExpiryAddress in management documentation
* \[[ARTEMIS-2036](https://issues.apache.org/jira/browse/ARTEMIS-2036)\] - Recompile libaio on an older kernel version for compatibility with older boxes.
* \[[ARTEMIS-2037](https://issues.apache.org/jira/browse/ARTEMIS-2037)\] - Provide libaio 32 bits back
