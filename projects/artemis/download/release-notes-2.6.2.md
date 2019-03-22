--- 
layout: default_md
title: ActiveMQ Artemis 2.6.2 Release Notes
title-class: page-title-artemis
type: artemis
---

A complete list of JIRAs for the 2.6.2 release can be found [here](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12315920&version=12343404).

A list of commits can be found [here](commit-report-2.6.2).

#### Bug

* \[[ARTEMIS-1893](https://issues.apache.org/jira/browse/ARTEMIS-1893)\] - subscription queues for non-durable subscriptions are not deleted when AMQP links are detached
* \[[ARTEMIS-1900](https://issues.apache.org/jira/browse/ARTEMIS-1900)\] - Race condition in STOMP auto-create causing errors (AMQ339016+AMQ119017)
* \[[ARTEMIS-1915](https://issues.apache.org/jira/browse/ARTEMIS-1915)\] - Expire Processing is holding a lock on the queue while scan is taking place
* \[[ARTEMIS-1920](https://issues.apache.org/jira/browse/ARTEMIS-1920)\] - AMQP throws NPE if connection happens after a cluster restart
* \[[ARTEMIS-1927](https://issues.apache.org/jira/browse/ARTEMIS-1927)\] - Server is not disconnecting clients on connection reset by peer
* \[[ARTEMIS-1934](https://issues.apache.org/jira/browse/ARTEMIS-1934)\] - the broker sends duplicate AMQP connection data in certain conditions
* \[[ARTEMIS-1935](https://issues.apache.org/jira/browse/ARTEMIS-1935)\] - Openwire connection logs failures on close for open sessions
* \[[ARTEMIS-1939](https://issues.apache.org/jira/browse/ARTEMIS-1939)\] - Remove space from parameter annotations name in ActiveMQServerControl
* \[[ARTEMIS-1940](https://issues.apache.org/jira/browse/ARTEMIS-1940)\] - premature release of pooled buffers during send can cause AMQP connection failures
* \[[ARTEMIS-1942](https://issues.apache.org/jira/browse/ARTEMIS-1942)\] - LDAP Configuration is missing
* \[[ARTEMIS-1943](https://issues.apache.org/jira/browse/ARTEMIS-1943)\] - Removing core specific attributes from broker

#### Task

* \[[ARTEMIS-1913](https://issues.apache.org/jira/browse/ARTEMIS-1913)\] - Dependency to tcpnative should be optional
* \[[ARTEMIS-1914](https://issues.apache.org/jira/browse/ARTEMIS-1914)\] - NPE on ConfigurationImpl if maskPassword=null
