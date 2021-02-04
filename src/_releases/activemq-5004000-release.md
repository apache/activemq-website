---
layout: default_md
title: ActiveMQ 5.4.0 Release 
title-class: page-title-activemq5
type: activemq5
redirect_from:
- /activemq-540-release
---

[Overview](overview) > [Download](download) > [ActiveMQ 5.4.0 Release](activemq-540-release)

Warning

This release has been retracted due to bug [AMQ-3491](https://issues.apache.org/jira/browse/AMQ-3491). It is no longer downloadable from ASF servers. Please use the [ActiveMQ 5.4.3 Release](activemq-543-release) instead.

Apache ActiveMQ 5.4.0 is primarily a maintenance release which [resolves](https://issues.apache.org/activemq/secure/IssueNavigator.jspa?reset=true&&pid=10520&fixfor=12110&sorter/field=priority&sorter/order=DESC) 283 issues.

New Features in 5.4.1
---------------------

*   [Encrypted passwords](encrypted-passwords)
*   Added selector support in [Ajax](ajax)

New Features in 5.4
-------------------

*   [Delay and Schedule Message Delivery](delay-and-schedule-message-delivery)
*   Message Priority
*   [WebSockets](ConnectivityConnectivity/Connectivity/websockets)
*   [Better OSGi support](osgi-integration)
*   Broker side options for updating failover clients automatically of new brokers joining and leaving the cluster - see [Failover Transport Reference](failover-transport-reference)
*   [Enhanced Shell Script](unix-shell-script) \- for starting, stopping and managing the broker in a Unix environment
*   [Easy way to configure Web Console](ToolsTools/Tools/web-console)
*   [Selectors for Ajax and REST consumers](ProtocolsConnectivity/Protocols/Connectivity/Protocols/rest)
*   JaasDualAuthentcationPlugin
*   [Anonymous users](FeaturesFeatures/Features/security)
*   Ajax Adapters
*   ... and much more

Note: XML configuration is now validated against the schema

The XML configuration syntax is now validated. The broker schema element is an alphabetically ordered sequence. Validation can now cause existing xml configuration files, with out of order elements, to fail to load with XML parse errors, halting the broker start. Fix any ordering issues to continue.

Note: New jetty XML configuration

The jetty XML configuration now uses direct jetty bean syntax in the absence of xbean support. This renders existing (pre 5.4) jetty xml configuration invalid. It will be necessary to reapply custom changes using the default jetty.xml as a template.

Getting the Binary Distributions
--------------------------------

Description|Download Link|PGP Signature file of download
Windows Distribution|[apache-activemq-5.4.0-bin.zip](http://archive.apache.org/dist/activemq/apache-activemq/5.4.0/apache-activemq-5.4.0-bin.zip)|[apache-activemq-5.4.0-bin.zip.asc](http://archive.apache.org/dist/activemq/apache-activemq/5.4.0/apache-activemq-5.4.0-bin.zip.asc)
Unix/Linux/Cygwin Distribution|[apache-activemq-5.4.0-bin.tar.gz](http://archive.apache.org/dist/activemq/apache-activemq/5.4.0/apache-activemq-5.4.0-bin.tar.gz)|[apache-activemq-5.4.0-bin.tar.gz.asc](http://archive.apache.org/dist/activemq/apache-activemq/5.4.0/apache-activemq-5.4.0-bin.tar.gz.asc)

Verify the Integrity of Downloads
---------------------------------

It is essential that you verify the integrity of the downloaded files using the PGP or MD5 signatures. The PGP signatures can be verified using PGP or GPG. Begin by following these steps:

1.  Download the [KEYS](http://www.apache.org/dist/activemq/KEYS)
2.  Download the asc signature file for the relevant distribution
3.  Verify the signatures using the following commands, depending on your use of PGP or GPG:
    ```
    $ pgpk -a KEYS
    $ pgpv apache-activemq-<version>-bin.tar.gz.asc
    ```
    or
    ```
    $ pgp -ka KEYS
    $ pgp apache-activemq-<version>-bin.tar.gz.asc
    ```
    or
    ```
    $ gpg --import KEYS
    $ gpg --verify apache-activemq-<version>-bin.tar.gz.asc
    ```

(Where <version> is replaced with the actual version, e.g., 5.1.0, 5.2.0, etc.).

Alternatively, you can verify the MD5 signature on the files. A Unix program called `md5` or `md5sum` is included in most Linux and Unix distributions. It is also available as part of [GNU Textutils](http://www.gnu.org/software/textutils/textutils.html). Windows users can utilize any of the following md5 programs:

*   [md5](http://www.fourmilab.ch/md5/)
*   [md5sums](http://www.pc-tools.net/win32/md5sums/)
*   [SlavaSoft FSUM](http://www.slavasoft.com/fsum/)

Getting the Binaries using Maven 2
----------------------------------

To use this release in your maven project, the proper dependency configuration that you should use in your [Maven POM](http://maven.apache.org/guides/introduction/introduction-to-the-pom.html) is:
```
<dependency>
  <groupId>org.apache.activemq</groupId>
  <artifactId>activemq-core</artifactId>
  <version>5.4.0</version>
</dependency>
```
Getting the Source Code
-----------------------

### Source Distributions

Description|Download Link|PGP Signature file of download
---|---|---
Source for Windows|[activemq-parent-5.4.0-source-release.zip](http://archive.apache.org/dist/activemq/apache-activemq/5.4.0/activemq-parent-5.4.0-source-release.zip)|[activemq-parent-5.4.0-source-release.zip.asc](http://archive.apache.org/dist/activemq/apache-activemq/5.4.0/activemq-parent-5.4.0-source-release.zip.asc)
Source for Unix/Linux/Cygwin|[activemq-parent-5.4.0-source-release.tar.gz](http://archive.apache.org/dist/activemq/apache-activemq/5.4.0/activemq-parent-5.4.0-source-release.tar.gz)|[activemq-parent-5.4.0-source-release.tar.gz.asc](http://archive.apache.org/dist/activemq/apache-activemq/5.4.0/activemq-parent-5.4.0-source-release.tar.gz.asc)

### SVN Tag Checkout

svn co http://svn.apache.org/repos/asf/activemq/tags/activemq-5.4.0

Changelog
---------

For a more detailed view of new features and bug fixes, see the [release notes](https://issues.apache.org/activemq/secure/ReleaseNote.jspa?projectId=10520&styleName=Html&version=12110)

Also see the previous [ActiveMQ 5.3.2 Release](activemq-532-release)

