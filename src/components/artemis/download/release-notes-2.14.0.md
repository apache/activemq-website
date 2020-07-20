---
layout: default_md
title: ActiveMQ Artemis 2.14.0 Release Notes
title-class: page-title-artemis
type: artemis
---

A complete list of JIRAs for the 2.14.0 release can be found [here](https://issues.apache.org/jira/secure/ReleaseNote.jspa?version=12348290&styleName=Text&projectId=12315920&Create=Create&atl_token=A5KQ-2QAV-T4JA-FDED_f0dbbf05ba0e3df7a6122e3d23621f40044dcb87_lin)

A list of commits can be found [here](commit-report-2.14.0).


Release Notes - ActiveMQ Artemis - Version 2.14.0




## Bug
    * [ARTEMIS-2596] - (kill -9) AMQ causes tmp web dir space usage to increase
    * [ARTEMIS-2769] - NumberFormatException  
    * [ARTEMIS-2774] - Remove the divert transformer on divert destroying
    * [ARTEMIS-2778] - AcceptorControl returns only transport parameters
    * [ARTEMIS-2781] - Return only local queue names for AddressControl.getQueueNames()
    * [ARTEMIS-2783] - User not set on shared queue
    * [ARTEMIS-2785] - io.netty.util.internal.OutOfDirectMemoryError during uncompress
    * [ARTEMIS-2788] - OpenWire producerId leak in session state
    * [ARTEMIS-2789] - Fix memory estimage for AMQP Large Message
    * [ARTEMIS-2790] - No examples documentation in the bin archive
    * [ARTEMIS-2791] - ArrayIndexOutOfBoundsException in SSLContextFactoryProvider
    * [ARTEMIS-2792] - Wrong default network pinger command for linux
    * [ARTEMIS-2793] - quorum logging implies it happens when single pair
    * [ARTEMIS-2798] - Expiration for AMQP messages not properly reloaded
    * [ARTEMIS-2799] - sniHost property not allowed
    * [ARTEMIS-2800] - Artemis Native / libaio crashing under certain kernel versions
    * [ARTEMIS-2801] - Fix ByteUtil.getHumanReadableByteCount() giving inconsistent results
    * [ARTEMIS-2803] - NPE when trying to configure clustering
    * [ARTEMIS-2804] - Human readable timestamp is incorrectly parsed in web console
    * [ARTEMIS-2805] - Wrong day-of-month in web console
    * [ARTEMIS-2806] - deployQueue missing address argument
    * [ARTEMIS-2809] - Retain public access to api's used by activemq-cli-tools around xml import/export
    * [ARTEMIS-2810] - Support all address-settings via management
    * [ARTEMIS-2814] - java.sql.SQLException: Couldn't access org.postgresql.largeobject.LargeObject
    * [ARTEMIS-2815] - Null pointer exception on queue update
    * [ARTEMIS-2817] - Support Stomp subscription with FQQN+multicast
    * [ARTEMIS-2819] - Removal of address setting (exact match) ineffective
    * [ARTEMIS-2821] - AWS load balancer health check causes log entries 224088 with every check
    * [ARTEMIS-2825] - Wrong calculation for DiskStoreUsagePercentage 
    * [ARTEMIS-2829] - Wrong return type for getDiskStoreUsage
    * [ARTEMIS-2830] - NPE in XML exporter
    * [ARTEMIS-2833] - Fix metrics configuration backwards compatibility
    * [ARTEMIS-2834] - Leaking meters
    * [ARTEMIS-2835] - Porting HORNETQ-1575 and HORNETQ-1578
    * [ARTEMIS-2836] - Console diagram view contains broken destination links and raw tool tips



## New Feature
    * [ARTEMIS-2770] - Update diverts using the management API

## Improvement
    * [ARTEMIS-2109] - enable building Artemis with JDK 11+
    * [ARTEMIS-2771] - Support JVM GC & thread metrics
    * [ARTEMIS-2776] - Dockerfile improvements to startup arguments
    * [ARTEMIS-2786] - Timestamp in console is incorrect
    * [ARTEMIS-2787] - Allow a queue to be disabled, so that messages are not routed to it.
    * [ARTEMIS-2797] - Reset queue properties by unsetting them in broker.xml
    * [ARTEMIS-2807] - Avoid notifications on critical IO error
    * [ARTEMIS-2820] - Undeploy diverts by removing them from broker.xml
    * [ARTEMIS-2827] - Add addressMemoryUsagePercentage as metric
    * [ARTEMIS-2828] - Add addressSize as metric

## Test
    * [ARTEMIS-2775] - Cleanup Tests


## Task
    * [ARTEMIS-2795] - update to proton-j 0.33.5 and qpid-jms 0.52.0
    * [ARTEMIS-2818] - Upgrade Activemq Artemis native as 1.0.2
    * [ARTEMIS-2831] - Possible StackOverFlow when setSendDLAOnNoRoute
    * [ARTEMIS-2837] - Bursts of open files under high load






































