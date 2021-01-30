---
layout: default_md
title: ActiveMQ 4.0 Release 
title-class: page-title-activemq5
type: activemq5
---

[Overview](overview) > [Download](download) > [ActiveMQ 4.0 Release](activemq-40-release)

New and Noteworthy
------------------

This is the 4.0 release of Apache ActiveMQ. This release of Apache ActiveMQ includes a large number of [new features](New FeaturesFeatures/New Features/Features/New Features/changes-in-40) such as [MasterSlave](ClusteringFeatures/Clustering/Features/Clustering/masterslave) and [Message Groups](Consumer FeaturesFeatures/Consumer Features/Features/Consumer Features/message-groups) together with numerous bug fixes.

### Warnings

When upgrading from a previous release you are advised to clear down the journal files and persistent database first before upgrading to this jar as the binary format of messages is not compatible with 3.x or earlier 4.0 milestone releases.

### Known issues

Some folks have found issues with acknowledgements, particularly when using auto-ack mode. This has been fixed in 4.0.1 which will be released shortly. Until then we recommend you disable [optimizeAcknowledge](connection-configuration-uri). e.g. connect via
```
tcp://localhost:61616?jms.optimizeAcknowledge=false
```

The source distributions do not build as is anymore due to changes in the way the maven repo is now setup at Apache. You must first apply the following [patch](activemq-40-release.data/amq4-build.patch?version=1&modificationDate=1150318678000&api=v2) before doing the build. You will need to download the patch and apply it using the patch command.
```
cd ${path-to-activemq-source-distro}
patch -p 0 < ${path-to-amq4-build.patch}
```

### What has changed

The 4.x branch of Apache ActiveMQ has now moved to the Apache Incubator so the package names have changed from org.activemq to org.apache.activemq. For a full list see the [Changes in 4.0](New FeaturesFeatures/New Features/Features/New Features/changes-in-40).

SVN Tag Checkout
----------------
```
svn co https://svn.apache.org/repos/asf/incubator/activemq/tags/activemq-4.0
```