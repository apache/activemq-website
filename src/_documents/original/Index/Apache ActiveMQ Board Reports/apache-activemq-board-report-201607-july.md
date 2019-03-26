Apache ActiveMQ ™ -- Apache ActiveMQ Board Report - 2016.07 (July) 

[Index](index.html) > [Apache ActiveMQ Board Reports](apache-activemq-Developers/board-reports.md) > [Apache ActiveMQ Board Report - 2016.07 (July)](Index/Apache ActiveMQ Board ReportsIndex/Apache ActiveMQ Board Reports/Index/Apache ActiveMQ Board Reports/apache-activemq-board-report-201607-july.md)


**Description**

Apache ActiveMQ is a popular and powerful open source messaging server. Apache ActiveMQ is fast, supports many cross language clients and protocols, comes with easy to use enterprise integration patterns and many advanced features while fully supporting JMS 1.1, J2EE 1.4, AMQP 1.0.

**Activity**

*   The ActiveMQ Broker continues to see continued bug fixes and feature additions
    *   Support added for AMQP over WebSockets added for inclusion in 5.14.0
    *   Improvements to the KahaDB message store allowing for better store clean up.
    *   Important fixes continue to be ported to the 5.13.x branch and a new 5.13.4 release is nearing release readiness.

*   ActiveMQ Artemis continues working towards adding ActiveMQ 5.x equivalent features, client compatibility and improvements:

*   The OpenWire protocol implementation is now feature complete
    
*   The Database journal has been improved and support added for:
    
    *   MySQL
        
    *   PostgreSQL
        
*   Database storage for large messages has been added
    
*   HA using replication has been heavily tested and had several improvements
    
*   The AMQP protocol has had a lot of attention including many fixes and support for AMQP link drain and subscription addresses
    
*   MQTT protocol has been updated to support interceptors and cross protocol communication
    
*   Dual-authentication is now supported so SSL and non-SSL connections can be authenticated by different JAAS login modules.
    
*   The broker's SSL keystores can now be reloaded on demand without stopping the broker.
    
*   JMS topics are now auto-created by default when a producer sends a message or a client subscribes.
    
*   The name of the authenticated user can now be automatically added to the messages it sends.
    
*   STOMP clients can now have their authentication and authorization based on their SSL certificate.
    
*   Lots of smaller bug fixes and performance improvements  
    

  

**PMC changes**

*   Currently 23 PMC members
*   Martyn Taylor was added to the PMC on Sun Jul 10 2016
*   Last PMC addition: Sun Jul 10 2016 (Martyn Taylor)

  
**Committer base changes**

*   Currently 56 committers
*   No new committers added in the last 3 months
*   Last committer addition was Matt Richard Hogstrom at Thu Jan 28 2016

  
**Releases**

*   5.13.3 was released on Sun May 01 2016
*   ActiveMQ Artemis 1.3.0 was released on Tue Jun 14 2016
*   Apache.NMS.ActiveMQ v1.7.2 was released on Wed Apr 06 2016

**Mailing list activity**

*   [users@activemq.apache.org](mailto:users@activemq.apache.org)
    *   741 subscribers (up 14 in the last 3 months)
    *   638 emails sent to list (837 in previous quarter)

*   [dev@activemq.apache.org](mailto:dev@activemq.apache.org)
    *   367 subscribers (up 14 in the last 3 months)
    *   909 emails sent to list (653 in previous quarter)

*   [announce@activemq.apache.org](mailto:announce@activemq.apache.org)
    *   [](mailto:announce@activemq.apache.org)9 subscribers (up 0 in the last 3 months)

*   [issues@activemq.apache.org](mailto:issues@activemq.apache.org)
    *   43 subscribers (up 3 in the last 3 months)
    *   2159 emails sent to list (1698 in previous quarter)

**JIRA activity**

*   261 JIRA tickets created in the last 3 months
*   262 JIRA tickets closed/resolved in the last 3 months

(Most of this information is pulled from [reporter.apache.org](https://reporter.apache.org/))

