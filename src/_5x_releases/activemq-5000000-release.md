---
layout: default_md
title: ActiveMQ 5.0.0 Release 
title-class: page-title-activemq5
type: activemq5
redirect_from:
- /activemq-500-release
---

[Overview](overview) > [Download](download) > [ActiveMQ 5.0.0 Release](activemq-500-release)

<div class="alert alert-warning">
  This is an older release. To get the current release, please see the <a href="{{site.baseurl}}/components/classic/download" class="alert-link">download page</a>.
</div>

New Features in 5.0
-------------------

In the 5.0 release of Apache ActiveMQ there are the following new features:

*   [AMQ Message Store](Persistence/amq-message-store) (Faster Persistence!)
*   [Message Cursors](Message Dispatching FeaturesFeatures/Message Dispatching Features/Features/Message Dispatching Features/message-cursors) (To handle very large number of stored messages)
*   [Blob Messages](blob-messages)
*   [Command Agent](command-agent)
*   [Enterprise Integration Patterns](enterprise-integration-patterns) via [Camel Integration](http://activemq.apache.org/camel/)
*   [Logging a warning if you forget to start a Connection](FeaturesFeatures/Features/logging-a-warning-if-you-forget-to-start-a-connection)
*   [Message Transformation](Message FeaturesFeatures/Message Features/Features/Message Features/message-transformation)
*   [Mirrored Queues](Destination FeaturesFeatures/Destination Features/Features/Destination Features/mirrored-queues)
*   [Producer Flow Control](Message Dispatching FeaturesFeatures/Message Dispatching Features/Features/Message Dispatching Features/producer-flow-control)

Getting the Binary Distributions
--------------------------------

Description|Download Link|PGP Signature file of download
Windows Distribution|[apache-activemq-5.0.0.zip](http://archive.apache.org/dist/activemq/apache-activemq/5.0.0/apache-activemq-5.0.0.zip)|[apache-activemq-5.0.0.zip.asc](http://archive.apache.org/dist/activemq/apache-activemq/5.0.0/apache-activemq-5.0.0.zip.asc)
Unix/Linux/Cygwin Distribution|[apache-activemq-5.0.0.tar.gz](http://archive.apache.org/dist/activemq/apache-activemq/5.0.0/apache-activemq-5.0.0.tar.gz)|[apache-activemq-5.0.0.tar.gz.asc](http://archive.apache.org/dist/activemq/apache-activemq/5.0.0/apache-activemq-5.0.0.tar.gz.asc)

Do not use Safari to download, the above URLs use redirection

The above URLs use the Apache Mirror system to redirect you to a suitable mirror for your download. Some users have experienced issues with some versions of browsers (e.g. some Safari browsers). If the download doesn't seem to work for you from the above URL then try using [FireFox](http://www.mozilla.com/en-US/firefox/)

Getting the Binaries using Maven 2
----------------------------------

To use this release in your maven project, the proper dependency configuration that you should use in your [Maven POM](http://maven.apache.org/guides/introduction/introduction-to-the-pom.html) is:
```
<dependency>
  <groupId>org.apache.activemq</groupId>
  <artifactId>activemq-core</artifactId>
  <version>5.0.0</version>
</dependency>
```
Getting the Source Code
-----------------------

### Source Distributions

Description|Download Link|PGP Signature file of download
---|---|---
Source for Windows|[apache-activemq-5.0.0-src.zip](http://archive.apache.org/dist/activemq/apache-activemq/5.0.0/apache-activemq-5.0.0-src.zip)|[apache-activemq-5.0.0-src.zip.asc](http://archive.apache.org/dist/activemq/apache-activemq/5.0.0/apache-activemq-5.0.0-src.zip.asc)
Source for Unix/Linux/Cygwin|[apache-activemq-5.0.0-src.tar.gz](http://archive.apache.org/dist/activemq/apache-activemq/5.0.0/apache-activemq-5.0.0-src.tar.gz)|[apache-activemq-5.0.0-src.tar.gz.asc](http://archive.apache.org/dist/activemq/apache-activemq/5.0.0/apache-activemq-5.0.0-src.tar.gz.asc)

### SVN Tag Checkout

svn co http://svn.apache.org/repos/asf/activemq/tags/activemq-5.0.0

Changelog
---------

For a more detailed view of new features and bug fixes, see the [release notes](http://issues.apache.org/activemq/secure/ReleaseNote.jspa?version=11712&styleName=Html&projectId=10520&Create=Create)

JIRA Issues Macro: Data cannot be retrieved due to an unexpected error

Also see the previous [ActiveMQ 4.1.1 Release](activemq-411-release)

