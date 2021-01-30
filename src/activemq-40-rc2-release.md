---
layout: default_md
title: ActiveMQ 4.0 RC2 Release 
title-class: page-title-activemq5
type: activemq5
---

[Overview](overview) > [Download](download) > [ActiveMQ 4.0-rc2 Release](activemq-40-rc2-release)

New and Noteworthy
------------------

This is the second release candiate release of 4.0.

This release of ActiveMQ includes a large number of [new features](New FeaturesFeatures/New Features/Features/New Features/changes-in-40) such as [MasterSlave](ClusteringFeatures/Clustering/Features/Clustering/masterslave) and [Message Groups](Consumer FeaturesFeatures/Consumer Features/Features/Consumer Features/message-groups) together with numerous bug fixes.

### Warnings

When upgrading from a previous release you are advised to clear down the journal files and persistent database first before upgrading to this jar as the binary format of messages is not compatible with 3.x or earlier 4.x releases.

### What has changed

The 4.x branch of ActiveMQ has now moved to the Apache Incubator so the package names have changed from org.activemq to org.apache.activemq. For a full list see the [Changes in 4.0](New FeaturesFeatures/New Features/Features/New Features/changes-in-40).