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

### Virtual Threads warning

JDK 21 support for Virtual Threads can lead to thread pinning in _synchronized_ code blocks, which negates the performance benefit from using virtual threads and may lead to other issues. 

Technical factors:

 * ActiveMQ uses virtual thread-friendly locking for key performance related ares in the Queue class
 * ActiveMQ uses virtual thread-unfriendly _synchronized_ code blocks in many areas
 * JDK 23 is slated to address the thread pinning in _synchrnoized_ code blocks
 * JDK 25 is the next planned LTS release after JDK 21
 * Areas of ActiveMQ source code will need to be modernized to be more virtual thread friendly
 * New virtual-thread first implementations may be added using extension points in the broker, vs refactoring the existing stable components 

JDK thread pinning improvement:
ref:  https://mail.openjdk.org/pipermail/loom-dev/2024-May/006632.html

### Configuration

To enable Virtual Threads in ActiveMQ Classic 6.x (and higher)

1. Checkout activemq source code from git
2. Build using JDK 21 (Virtual Thread support will be added automatically)
3. Copy the lib/jdk21/activemq-client-jdk21-_version.jar to lib/activemq-client-_version_.jar
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
[AMQ-9394](https://issues.apache.org/jira/browse/AMQ-9394) | PR [#1172](https://github.com/apache/activemq/pull/1172) | 6.2.0 | | Task Runner Factory | Tech Preview support to allow Virtual Thread Executor Service

