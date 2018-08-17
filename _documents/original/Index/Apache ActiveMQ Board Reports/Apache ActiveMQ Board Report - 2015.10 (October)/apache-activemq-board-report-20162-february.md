Apache ActiveMQ ™ -- Apache ActiveMQ Board Report - 2016.2 (February) 

[Index](index.html) > [Apache ActiveMQ Board Reports](apache-activemq-Developers/board-reports.md) > [Apache ActiveMQ Board Report - 2015.10 (October)](Index/Apache ActiveMQ Board ReportsIndex/Apache ActiveMQ Board Reports/Index/Apache ActiveMQ Board Reports/apache-activemq-board-report-201510-october.md) > [Apache ActiveMQ Board Report - 2016.2 (February)](Index/Apache ActiveMQ Board Reports/Apache ActiveMQ Board Report - 2015.10 (October)/apache-activemq-board-report-20162-february.md)


**Description**

Apache ActiveMQ is a popular and powerful open source messaging server. Apache ActiveMQ is fast, supports many cross language clients and protocols, comes with easy to use enterprise integration patterns and many advanced features while fully supporting JMS 1.1, J2EE 1.4, AMQP 1.0.

**Activity**

*   Apache.NMS added a new provider implementation **Apache.NMS.XMS** for connecting to IBM WebSphere MQSeries.  This was contributed by the user community, and based on the existing Apache.NMS provider implementation for TIBCO EMS.  There are now eight NMS provider implementations.
    
*   ActiveMQ 5.x added several new features in version 5.13.0
    *   There is now support for automatic wire protocol detection (OpenWire, STOMP, MQTT, and AMQP) using the new [auto transport](Connectivity/Protocols/auto.md).
    *   Improved metrics as the broker now keeps track of the memory size of pending messages.
    *   A pure Java API for runtime configuration changes to the broker.  Previously only changes could be done in XML.
    *   There is now support for [dynamic network demand](Features/Clustering/networks-of-brokers.md) based on the existence of Virtual Consumers.
    *   Support was added for sending scheduled message using message annotations when using AMQP.
    *   The ability to dynamically shrink and regrow the store size at runtime based on available disk space.

**PMC changes**

*   Currently 20 PMC members
    
*   New PMC members 
    
    *   Christopher Shannon was added to the PMC on Sun Jan 24 2016
        
    *   Jeff Genender was added to the PMC on Sun Jan 24 2016
        

**Committer base changes**

*   Currently 56 committers
    
*   New commmitters
    
    *   Matt Richard Hogstrom was added as a committer on Thu Jan 28 2016 (not sure why he was added, got this info from [reporter.apache.org](http://reporter.apache.org))
        
    *   John Robert Sisson was added as a committer on Thu Jan 28 2016 (not sure why he was added, got this info from [reporter.apache.org](http://reporter.apache.org/))
        

**Releases**

*   Activemq-CPP v3.9.1 was released on Thu Dec 03 2015
    
*   Activemq-CPP v3.9.2 was released on Thu Feb 08 2016
    
*   5.11.3 was released on Sun Nov 01 2015
    
*   5.12.1 was released on Wed Oct 14 2015
    
*   5.12.2 was released on Sun Jan 10 2016
    
*   5.13.0 was released on Wed Dec 02 2015
    
*   5.13.1 was released on Fri Feb 05 2016
*   ActiveMQ Artemis 1.2.0 was released on Thu Jan 07 2016
    

**Mailing list activity**

*   [users@activemq.apache.org](mailto:users@activemq.apache.org)
    
    *   716 subscribers (down -5 in the last 3 months)
    *   816 emails sent to list (712 in previous quarter)
*   [dev@activemq.apache.org](mailto:dev@activemq.apache.org)
    
    *   344 subscribers (up 7 in the last 3 months)
    *   837 emails sent to list (765 in previous quarter)
*   [issues@activemq.apache.org](mailto:issues@activemq.apache.org)
    
    *   35 subscribers (up 4 in the last 3 months)
    *   2045 emails sent to list (1763 in previous quarter)
*   [announce@activemq.apache.org](mailto:announce@activemq.apache.org)
    
    *   9 subscribers (up 1 in the last 3 months)

**JIRA activity**

*   233 JIRA tickets created in the last 3 months
    
*   257 JIRA tickets closed/resolved in the last 3 months
    

(Most of this information is pulled from [reporter.apache.org](https://reporter.apache.org/))

