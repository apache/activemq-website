---
layout: default_md
title: ActiveMQ 5.2.0 Release 
title-class: page-title-activemq5
type: activemq5
redirect_from:
- /activemq-520-release
---

[Overview](overview) > [Download](download) > [ActiveMQ 5.2.0 Release](activemq-520-release)

Apache ActiveMQ 5.2 is primarily a maintenance release which [resolves](https://issues.apache.org/activemq/secure/ReleaseNote.jspa?projectId=10520&styleName=Html&version=11841)

JIRA Issues Macro: Data cannot be retrieved due to an unexpected error

.

New Features in 5.2
-------------------

The new features and enhancements in this release include:

*   [Additional advisory messages](Message FeaturesFeatures/Message Features/Features/Message Features/advisory-message) for messages delivered/consumed fast producers/slow consumers, Usage limits, Slaves become masters etc.
*   Enhanced ssl context configuration through spring/xbean
*   New individual acknowledge mode for message consumption
*   Ability to configure the automatic discarding of the items being sent to the dead letter queue
*   Ability to limit the maximum number of connections to a Broker
*   Ability to configure [separate lock](https://issues.apache.org/activemq/browse/AMQ-1244) Datasource for JDBC Master slave.
*   activemq-camel and activemq-connection-pool now have their own modules, no longer in activemq-core
*   The default [ActiveMQConnectionFactory](http://activemq.apache.org/maven/activemq-core/apidocs/org/apache/activemq/ActiveMQConnectionFactory.html) brokerUrl now uses the [failover transport](failover-transport-reference).
*   Uses Apache Camel [1.5](http://activemq.apache.org/camel/camel-150-release.html).

Getting the Binary Distributions
--------------------------------

Description|Download Link|PGP Signature file of download
Windows Distribution|[apache-activemq-5.2.0-bin.zip](http://archive.apache.org/dist/activemq/apache-activemq/5.2.0/apache-activemq-5.2.0-bin.zip)|[apache-activemq-5.2.0-bin.zip.asc](http://archive.apache.org/dist/activemq/apache-activemq/5.2.0/apache-activemq-5.2.0-bin.zip.asc)
Unix/Linux/Cygwin Distribution|[apache-activemq-5.2.0-bin.tar.gz](http://archive.apache.org/dist/activemq/apache-activemq/5.2.0/apache-activemq-5.2.0-bin.tar.gz)|[apache-activemq-5.2.0-bin.tar.gz.asc](http://archive.apache.org/dist/activemq/apache-activemq/5.2.0/apache-activemq-5.2.0-bin.tar.gz.asc)

Do not use Safari to download, the above URLs use redirection

The above URLs use the Apache Mirror system to redirect you to a suitable mirror for your download. Some users have experienced issues with some versions of browsers (e.g. some Safari browsers). If the download doesn't seem to work for you from the above URL then try using [FireFox](http://www.mozilla.com/en-US/firefox/)

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
  <version>5.2.0</version>
</dependency>
```
Getting the Source Code
-----------------------

### Source Distributions

Description|Download Link|PGP Signature file of download
---|---|---
Source for Windows|[apache-activemq-5.2.0-src.zip](http://archive.apache.org/dist/activemq/apache-activemq/5.2.0/apache-activemq-5.2.0-src.zip)|[apache-activemq-5.2.0-src.zip.asc](http://archive.apache.org/dist/activemq/apache-activemq/5.2.0/apache-activemq-5.2.0-src.zip.asc)
Source for Unix/Linux/Cygwin|[apache-activemq-5.2.0-src.tar.gz](http://archive.apache.org/dist/activemq/apache-activemq/5.2.0/apache-activemq-5.2.0-src.tar.gz)|[apache-activemq-5.2.0-src.tar.gz.asc](http://archive.apache.org/dist/activemq/apache-activemq/5.2.0/apache-activemq-5.2.0-src.tar.gz.asc)

### SVN Tag Checkout

svn co http://svn.apache.org/repos/asf/activemq/tags/activemq-5.2.0

Changelog
---------

For a more detailed view of new features and bug fixes, see the [release notes](https://issues.apache.org/activemq/secure/ReleaseNote.jspa?projectId=10520&styleName=Html&version=11841)

JIRA Issues Macro: Data cannot be retrieved due to an unexpected error

Also see the previous [ActiveMQ 5.1.0 Release](activemq-510-release)

