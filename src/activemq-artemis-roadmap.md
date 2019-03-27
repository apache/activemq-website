---
layout: default_md
title: ActiveMQ Artemis Roadmap 
title-class: page-title-activemq5
type: activemq5
---

[ActiveMQ Artemis Roadmap](activemq-artemis-roadmap)


The goal of this page is to identify the outstanding issues that must be addressed by Artemis in order to achieve some level of feature parity with ActiveMQ 5.x. The overall objective for working toward feature parity between ActiveMQ 5.x and Artemis is for Artemis to eventually become ActiveMQ 6.x. This page exists so that we can work together as a group to achieve this goal.

> **Work in Progress**
> 
> This page is a work in progress and will be updated frequently.

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

*   Support full-duplex broker-to-broker cluster connections [ARTEMIS-838](https://issues.apache.org/jira/browse/ARTEMIS-838)

### ActiveMQ 5.x Client Compatibility

*    Full support of Openwire (TODO: specifically, which versions)
*    PooledConnectionFactory

### Destination Interceptors

*   Virtual Topic support [ARTEMIS-550](https://issues.apache.org/jira/browse/ARTEMIS-550)

### Destination Features

*   Destination Policy: Garbage collection and advisory support for that activity [ARTEMIS-1148](https://issues.apache.org/jira/browse/ARTEMIS-1148)
*   Exclusive consumer support [ARTEMIS-854](https://issues.apache.org/jira/browse/ARTEMIS-854)
*   Exclusive consumer features: consumersBeforeDispatchStarts, timeBeforeDispatchStarts [ARTEMIS-856](https://issues.apache.org/jira/browse/ARTEMIS-856)

### Plugin Support

*   Destination Policies (there is a slew of functionality in ActiveMQ 5.x dest policies that should be detailed out)

### Storage Backend

*   Support for multiple shared persistence stores similar to multi-kahadb (allow for storage across multiple disk volumes.. ie.  queue://ORDER.> on /mnt/order queue://BILLING.> on /mnt/billing, etc) [ARTEMIS-839](https://issues.apache.org/jira/browse/ARTEMIS-839)

Migration
=========

This section should help to answer the end user question, _'How do I migrate from ActiveMQ 5.x to Artemis?'_. This should include the identification of any tools that can help make this easier, as well as documenting information and procedures specific to migrating.

Wishlist
========

### Protocol features

*   Exclusive consumer support across all protocols STOMP, MQTT, AMQP, etc. [ARTEMIS-855](https://issues.apache.org/jira/browse/ARTEMIS-855)
    

### KahaDB Migration Tool

*   Support exporting messages from KahaDB format to Artemis

### Over-the-wire migration tool

*   Support a tool for migrating messages from ActiveMQ 5.x brokers to Artemis-based brokers (for non-standard backends)
    *   Goal: preserve messageId

