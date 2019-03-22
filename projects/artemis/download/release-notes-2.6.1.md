--- 
layout: default_md
title: ActiveMQ Artemis 2.6.1 Release Notes
title-class: page-title-artemis
type: artemis
---

A complete list of JIRAs for the 2.6.1 release can be found [here](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12315920&version=12343356).

A list of commits can be found [here](commit-report-2.6.1).

#### Bug

* \[[ARTEMIS-1568](https://issues.apache.org/jira/browse/ARTEMIS-1568)\] - Unsettled AMQP messages are lost when Receiver Link is opened on remote cluster member
* \[[ARTEMIS-1858](https://issues.apache.org/jira/browse/ARTEMIS-1858)\] - Expired messages are not traversing bridge with AMQP
* \[[ARTEMIS-1860](https://issues.apache.org/jira/browse/ARTEMIS-1860)\] - Bug on documentation of spring integration
* \[[ARTEMIS-1870](https://issues.apache.org/jira/browse/ARTEMIS-1870)\] - Document Bug: Missing documentation for new parameter "jdbc-journal-sync-period" added for JDBC Persistence
* \[[ARTEMIS-1872](https://issues.apache.org/jira/browse/ARTEMIS-1872)\] - Correctly check for queue exists before creating shared queue
* \[[ARTEMIS-1873](https://issues.apache.org/jira/browse/ARTEMIS-1873)\] - AMQ222068: STOMP heartbeat handler is not stopped after StompConnection.destroy()
* \[[ARTEMIS-1874](https://issues.apache.org/jira/browse/ARTEMIS-1874)\] - NPE in ActiveMQMessage.setObjectProperty
* \[[ARTEMIS-1875](https://issues.apache.org/jira/browse/ARTEMIS-1875)\] - Redistribution of messages sometimes does not occur if original message sent using link routing via AMQP
* \[[ARTEMIS-1876](https://issues.apache.org/jira/browse/ARTEMIS-1876)\] - InVMNodeManager shouldn't be used if no JDBC HA is configured
* \[[ARTEMIS-1885](https://issues.apache.org/jira/browse/ARTEMIS-1885)\] - max-consumers attribute in queue definition does not work for AMQP client.
* \[[ARTEMIS-1887](https://issues.apache.org/jira/browse/ARTEMIS-1887)\] - Setting default-max-consumers in addressing setting has no effect on the max-consumers property on matching address queues
* \[[ARTEMIS-1891](https://issues.apache.org/jira/browse/ARTEMIS-1891)\] - Sending synchronization finished packet starves when thread pool is full
* \[[ARTEMIS-1902](https://issues.apache.org/jira/browse/ARTEMIS-1902)\] - Message redistribution is not stopped when consumers count on remote node reaches 0 (AMQP)
* \[[ARTEMIS-1907](https://issues.apache.org/jira/browse/ARTEMIS-1907)\] - Confusion between AIO and ASYNCIO
* \[[ARTEMIS-1911](https://issues.apache.org/jira/browse/ARTEMIS-1911)\] - Incorrect documented default for message-counter-max-day-history

#### Improvement

* \[[ARTEMIS-1908](https://issues.apache.org/jira/browse/ARTEMIS-1908)\] - The Configuration Reference page should document all available settings
* \[[ARTEMIS-1909](https://issues.apache.org/jira/browse/ARTEMIS-1909)\] - artemis-configuration.xsd should not contain dummy documentation

#### Test

* \[[ARTEMIS-1853](https://issues.apache.org/jira/browse/ARTEMIS-1853)\] - Adding Netty OpenSSL provider test
* \[[ARTEMIS-1868](https://issues.apache.org/jira/browse/ARTEMIS-1868)\] - Openwire doesn't add delivery count in client ack mode

#### Task

* \[[ARTEMIS-1882](https://issues.apache.org/jira/browse/ARTEMIS-1882)\] - Verify PKCS12 keystores work
* \[[ARTEMIS-1912](https://issues.apache.org/jira/browse/ARTEMIS-1912)\] - Review Documentation
