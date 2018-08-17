Apache ActiveMQ ™ -- Apache ActiveMQ Board Report - 2015.08 (August) 

[Index](index.html) > [Apache ActiveMQ Board Reports](apache-activemq-Developers/board-reports.md) > [Apache ActiveMQ Board Report - 2015.08 (August)](Index/Apache ActiveMQ Board Reports/apache-activemq-board-report-201508-august.md)


**TLP Description:**

Apache ActiveMQ is a popular and powerful open source messaging server. Apache ActiveMQ is fast, supports many cross language clients and protocols, comes with easy to use enterprise integration patterns and many advanced features while fully supporting JMS 1.1, J2EE 1.4, AMQP 1.0.

**Report: **

*   HornetQ IP clearance has been completed 100% 
    *   HornetQ code base migrated to ActiveMQ Artemis  
        *   Eliminated all HornetQ references 
        *   The code base is now 100% an ActiveMQ project
*   Discussion around development methodology differences between the 5.x code base and the ActiveMQ Artemis  
    *   Garnered fairly active participation from many committers
    *   It did result in a good description of the commit then review process that was agreed upon on the mailing list which was then documented at **[http://s.apache.org/zD7](http://s.apache.org/zD7)**
    *   There were also good discussions around code formatting setups to make working on the various codebases within ActiveMQ more consistent and easier to pull ideas and code back and forth
*   ActiveMQ Artemis code base is now receiving contributions from a wider scope of people (beyond just the original HornetQ contributors)
    *   Long standing committers from the 5.x project are starting to contribute to ActiveMQ Artemis
*   Active collaboration between 5.x development and ActiveMQ Artemis development is now taking place 
    *   ActiveMQ 5.x features actively being migrated to Artemis 
        *   Test framework from 5.x migrated ActiveMQ Artemis 
        *   Migration of the MQTT protocol from 5.x to ActiveMQ Artemis 
    *   Also discussion is taking place to improve the the 5.x code base with regard multi-protocol detection on a single socket based on ideas from Artemis and Apollo
*   PMC is actively working toward diversifying the community by inviting more committers to the project
    *   Christopher Shannon was added this month
    *   Three others added since May 2015
*   Artemis 1.0 was successfully released 
    *   Work is on-going for the 1.0.1 release
*   Back in the April report, one PMC member voiced the following concern:  
    _"At least one member of the PMC, as well as several members of the community, feels strongly that disagreements and concerns are not getting addressed in a manner that will move the community toward consensus." _
    *   While this comment is true, the community member who was raising these concerns has gone silent
*   Initiated discussion to address past issues from some community members as instructed by the board
    *   Result so far is zero replies

