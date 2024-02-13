---
layout: default_md
title: Virtual Threads
title-class: page-title-classic
type: classic
---

[Using ActiveMQ Classic](using-activemq-classic-5) > [Configure version 6 Virtual Threads](virtual-threads)

### Virtual Threads support 

ActiveMQ Classic support for Virtual Threads is in Technology Preview stage.

### Virtual Threads benefits

 * Performance on-par with reactive coding approaches
 * JDK-based option for peak concurrency performance
 * Automatically scales based on need and detected CPU cores
 * Less configuration tuning required for administrators
 * Easier to code extensions

### Configuration

To enable Virtual Threads in ActiveMQ Classic 6.x (and higher)

1. Checkout activemq source code from git
2. Build using JDK 21 (Virtual Thread support will be added automatically)
3. Edit conf/activemq.xml

    <broker ... virtualThreadTeaskRunner="true" .. >

4. Run ActiveMQ Classic and confirm with the following log message:

    INFO | VirtualThreadExecutor initialized name:ActiveMQ BrokerService[localhost] Task

NOTE: The log message may be removed in the future

### ActiveMQ Classic Virtual Thread Implementation Progress 

The implementation approach is subject to change. Be sure to verify features in Release notes. 

User feedback is welcome! Please comment on the JIRAs with questions and comments.

JIRA|Status|Target Version|Completed Version|Feature|Notes
---|---|---
[AMQ-9394](https://issues.apache.org/jira/browse/AMQ-9394) | PR [#1121](https://github.com/apache/activemq/pull/1121) | 6.1.0 | | Task Runner Factory | Optional support to configure Virtual Thread Executor Service

