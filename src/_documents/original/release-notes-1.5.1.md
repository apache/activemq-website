       /\* <!\[CDATA\[ */ .download { font-size: 80%; } table.download { width: 100%;} table.download tr td { border: 1px solid #ccc; padding: .5em; } /* \]\]> */  ActiveMQ Artemis

*   [ActiveMQ Artemis](index.html)
*   [Documentation](docs.md)
*   [Download](OverviewOverview/Overview/download.md)

![ActiveMQ logo](/images/activemq-logo.png)

ActiveMQ Artemis
================

Release Notes - Apache ActiveMQ Artemis 1.5.1
---------------------------------------------

A complete list of JIRAs for the 1.5.1 release can be found at the [Apache ActiveMQ Artemis project JIRA](https://issues.apache.org/jira/secure/ReleaseNote.jspa?version=12338661&styleName=Html&projectId=12315920&Create=Create")

Bug Fixes:

*   \[[ARTEMIS-748](https://issues.apache.org/jira/browse/ARTEMIS-748)\] \- AddressSize show a negative number.
*   \[[ARTEMIS-823](https://issues.apache.org/jira/browse/ARTEMIS-823)\] \- Broker doesn't settle rejected messages
*   \[[ARTEMIS-827](https://issues.apache.org/jira/browse/ARTEMIS-827)\] \- AMQP test client validator classes not thread safe
*   \[[ARTEMIS-840](https://issues.apache.org/jira/browse/ARTEMIS-840)\] \- Passwords logged in plaintext
*   \[[ARTEMIS-842](https://issues.apache.org/jira/browse/ARTEMIS-842)\] \- JMSMessageID doesn't appear to work in selector
*   \[[ARTEMIS-849](https://issues.apache.org/jira/browse/ARTEMIS-849)\] \- CDI Integration doc missing
*   \[[ARTEMIS-852](https://issues.apache.org/jira/browse/ARTEMIS-852)\] \- Add indices to tables from JDBC backend to increase performance
*   \[[ARTEMIS-859](https://issues.apache.org/jira/browse/ARTEMIS-859)\] \- BACKLOG\_PROP\_NAME is not part of allowable properties on the acceptor
*   \[[ARTEMIS-860](https://issues.apache.org/jira/browse/ARTEMIS-860)\] \- openwire protocol not installed in artemis-osgi

Improvements:

*   \[[ARTEMIS-814](https://issues.apache.org/jira/browse/ARTEMIS-814)\] \- Support outgoing connections for AMQP
*   \[[ARTEMIS-841](https://issues.apache.org/jira/browse/ARTEMIS-841)\] \- Hash Processors lock free lazy singleton instantiation
*   \[[ARTEMIS-845](https://issues.apache.org/jira/browse/ARTEMIS-845)\] \- Making Default Acceptor Protocols a bit more clear
*   \[[ARTEMIS-846](https://issues.apache.org/jira/browse/ARTEMIS-846)\] \- Once the disk is full the blocked producer should log about disk full
*   \[[ARTEMIS-863](https://issues.apache.org/jira/browse/ARTEMIS-863)\] \- The broker should deal with Network Failures.

Tasks:

*   \[[ARTEMIS-865](https://issues.apache.org/jira/browse/ARTEMIS-865)\] \- Remove e.printStackTrace() from code