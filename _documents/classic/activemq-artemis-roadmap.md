Apache ActiveMQ ™ -- ActiveMQ Artemis Roadmap 

[ActiveMQ Artemis Roadmap](activemq-artemis-roadmap.md)


The goal of this page is to identify the outstanding issues that must be addressed by Artemis in order to achieve some level of feature parity with ActiveMQ 5.x. The overall objective for working toward feature parity between ActiveMQ 5.x and Artemis is for Artemis to eventually become ActiveMQ 6.x. This page exists so that we can work together as a group to achieve this goal.

/*<!\[CDATA\[*/ div.rbtoc1512602476746 {padding: 0px;} div.rbtoc1512602476746 ul {list-style: disc;margin-left: 0px;} div.rbtoc1512602476746 li {margin-left: 0px;padding-left: 0px;} /*\]\]>*/

*   [Using this page](#ActiveMQArtemisRoadmap-Usingthispage)
*   [Features/Scenarios](#ActiveMQArtemisRoadmap-Features/Scenarios)
    *   [Advisory Support](#ActiveMQArtemisRoadmap-AdvisorySupport)
    *   [Broker Clustering](#ActiveMQArtemisRoadmap-BrokerClustering)
    *   [Destination Interceptors](#ActiveMQArtemisRoadmap-DestinationInterceptors)
    *   [Destination Features](#ActiveMQArtemisRoadmap-DestinationFeatures)
    *   [Plugin Support](#ActiveMQArtemisRoadmap-PluginSupport)
    *   [Storage Backend](#ActiveMQArtemisRoadmap-StorageBackend)
*   [Migration](#ActiveMQArtemisRoadmap-Migration)
*   [Wishlist](#ActiveMQArtemisRoadmap-Wishlist)
    *   [Protocol features](#ActiveMQArtemisRoadmap-Protocolfeatures)
    *   [KahaDB Migration Tool](#ActiveMQArtemisRoadmap-KahaDBMigrationTool)
    *   [Over-the-wire migration tool](#ActiveMQArtemisRoadmap-Over-the-wiremigrationtool)

Work in Progress

This page is a work in progress and will be updated frequently.

Using this page
===============

Feature items can be listed, with links to JIRA tickets for longer conversation and hashing out specific feature details

Features/Scenarios
==================

This section should be used to identify all the ActiveMQ 5.x features that Artemis needs. This should include **all** Artemis features that we can identify, including those from ActiveMQ that Artemis has already implemented. This will help us to more clearly track everything that Artemis needs.

### Advisory Support

*   Support for broker state change advisories (master -> slave, slave -> master)
*   Support for connection advisories (connect, disconnect, unclean disconnect, authn fail, authz fail)
*   Support for consumer advisories (new consumer, closed, slow consumer)
*   Support for producer advisories (new producer, closed, fast producer, message size exceeded, memoryLimit reached, storage limit reached)
*   Support for destination advisories (new dest, deleted)

### Broker Clustering

*   Support full-duplex broker-to-broker cluster connections \[ .jira-issue { padding: 0 0 0 2px; line-height: 20px; } .jira-issue img { padding-right: 5px; } .jira-issue .aui-lozenge { line-height: 18px; vertical-align: top; } .jira-issue .icon { background-position: left center; background-repeat: no-repeat; display: inline-block; font-size: 0; max-height: 16px; text-align: left; text-indent: -9999em; vertical-align: text-bottom; } [ARTEMIS-838](https://issues.apache.org/jira/browse/ARTEMIS-838?src=confmacro) \]

### Destination Interceptors

*   Virtual Topic support \[ .jira-issue { padding: 0 0 0 2px; line-height: 20px; } .jira-issue img { padding-right: 5px; } .jira-issue .aui-lozenge { line-height: 18px; vertical-align: top; } .jira-issue .icon { background-position: left center; background-repeat: no-repeat; display: inline-block; font-size: 0; max-height: 16px; text-align: left; text-indent: -9999em; vertical-align: text-bottom; } [ARTEMIS-550](https://issues.apache.org/jira/browse/ARTEMIS-550?src=confmacro) \]

### Destination Features

*   Destination Policy: Garbage collection and advisory support for that activity \[ .jira-issue { padding: 0 0 0 2px; line-height: 20px; } .jira-issue img { padding-right: 5px; } .jira-issue .aui-lozenge { line-height: 18px; vertical-align: top; } .jira-issue .icon { background-position: left center; background-repeat: no-repeat; display: inline-block; font-size: 0; max-height: 16px; text-align: left; text-indent: -9999em; vertical-align: text-bottom; } [ARTEMIS-1148](https://issues.apache.org/jira/browse/ARTEMIS-1148?src=confmacro) \]
*   Exclusive consumer support \[ .jira-issue { padding: 0 0 0 2px; line-height: 20px; } .jira-issue img { padding-right: 5px; } .jira-issue .aui-lozenge { line-height: 18px; vertical-align: top; } .jira-issue .icon { background-position: left center; background-repeat: no-repeat; display: inline-block; font-size: 0; max-height: 16px; text-align: left; text-indent: -9999em; vertical-align: text-bottom; } [ARTEMIS-854](https://issues.apache.org/jira/browse/ARTEMIS-854?src=confmacro) \]
*   Exclusive consumer features: consumersBeforeDispatchStarts, timeBeforeDispatchStarts \[ .jira-issue { padding: 0 0 0 2px; line-height: 20px; } .jira-issue img { padding-right: 5px; } .jira-issue .aui-lozenge { line-height: 18px; vertical-align: top; } .jira-issue .icon { background-position: left center; background-repeat: no-repeat; display: inline-block; font-size: 0; max-height: 16px; text-align: left; text-indent: -9999em; vertical-align: text-bottom; } [ARTEMIS-856](https://issues.apache.org/jira/browse/ARTEMIS-856?src=confmacro) \]

### Plugin Support

*   Destination Policies (there is a slew of functionality in ActiveMQ 5.x dest policies that should be detailed out)

### Storage Backend

*   Support for multiple shared persistence stores similar to multi-kahadb (allow for storage across multiple disk volumes.. ie.  queue://ORDER.> on /mnt/order queue://BILLING.> on /mnt/billing, etc) \[ .jira-issue { padding: 0 0 0 2px; line-height: 20px; } .jira-issue img { padding-right: 5px; } .jira-issue .aui-lozenge { line-height: 18px; vertical-align: top; } .jira-issue .icon { background-position: left center; background-repeat: no-repeat; display: inline-block; font-size: 0; max-height: 16px; text-align: left; text-indent: -9999em; vertical-align: text-bottom; } [ARTEMIS-839](https://issues.apache.org/jira/browse/ARTEMIS-839?src=confmacro) \]

Migration
=========

This section should help to answer the end user question, _'How do I migrate from ActiveMQ 5.x to Artemis?'_. This should include the identification of any tools that can help make this easier, as well as documenting information and procedures specific to migrating.

Wishlist
========

### Protocol features

*   Exclusive consumer support across all protocols STOMP, MQTT, AMQP, etc. \[ .jira-issue { padding: 0 0 0 2px; line-height: 20px; } .jira-issue img { padding-right: 5px; } .jira-issue .aui-lozenge { line-height: 18px; vertical-align: top; } .jira-issue .icon { background-position: left center; background-repeat: no-repeat; display: inline-block; font-size: 0; max-height: 16px; text-align: left; text-indent: -9999em; vertical-align: text-bottom; } [ARTEMIS-855](https://issues.apache.org/jira/browse/ARTEMIS-855?src=confmacro) \]
    

### KahaDB Migration Tool

*   Support exporting messages from KahaDB format to Artemis

### Over-the-wire migration tool

*   Support a tool for migrating messages from ActiveMQ 5.x brokers to Artemis-based brokers (for non-standard backends)
    *   Goal: preserve messageId

