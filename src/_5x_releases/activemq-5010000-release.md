---
layout: default_md
title: ActiveMQ 5.10.0 Release 
title-class: page-title-activemq5
type: activemq5
redirect_from:
- /activemq-5100-release
---

[Overview](overview) > [Download](download) > [ActiveMQ 5.10.0 Release](activemq-5100-release)

ActiveMQ 5.10.0 Release
-----------------------

Apache ActiveMQ 5.10.0 resolves [more than 234 issues](https://issues.apache.org/jira/browse/AMQ-5061?jql=project%20%3D%20AMQ%20AND%20fixVersion%20%3D%205.10.0%20ORDER%20BY%20status%20DESC%2C%20priority%20DESC), mostly bug fixes and improvements. It has the following new features:

### New Features and noteworthy improvements and fixes

*   Java 8 support
*   Apache Shiro Security Plugin - [http://activemq.apache.orgFeatures/SecurityFeatures/Security/Features/Security/shiro.md](http://activemq.apache.orgFeatures/SecurityFeatures/Security/Features/Security/shiro)
*   Hardened MQTT support
*   Hardened AMQP support
*   Hardened LevelDB store
*   Improved RAR/JCA adapter
*   Improved Runtime configuration plugin
*   Improved Web console

### Migration Guide

*   Removed `org.apache.activemq.camel.converter.IdentityMessageReuseConverter` class from the `activemq-camel` component.

Getting the Binary Distributions
--------------------------------
|escription|Download Link
PGP Signature file of download|Windows Distribution|[apache-activemq-5.10.0-bin.zip](http://archive.apache.org/dist/activemq/5.10.0/apache-activemq-5.10.0-bin.zip)
[apache-activemq-5.10.0-bin.zip.asc](http://archive.apache.org/dist/activemq/5.10.0/apache-activemq-5.10.0-bin.zip.asc)|Unix/Linux/Cygwin Distribution|[apache-activemq-5.10.0-bin.tar.gz](http://archive.apache.org/dist/activemq/5.10.0/apache-activemq-5.10.0-bin.tar.gz)

[apache-activemq-5.10.0-bin.tar.gz.asc](http://archive.apache.org/dist/activemq/5.10.0/apache-activemq-5.10.0-bin.tar.gz.asc)

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

To use this release in your maven project, the simplest dependency that you can use in your [Maven POM](http://maven.apache.org/guides/introduction/introduction-to-the-pom.html) is:
```
<dependency>
  <groupId>org.apache.activemq</groupId>
  <artifactId>activemq-all</artifactId>
  <version>5.10.0</version>
</dependency>
```
If you need more fine grained control of your dependencies (activemq-all is an uber jar) pick and choose from the various components activemq-client, activemq-broker, activemq-xx-store etc.

Getting the Source Code
-----------------------

### Source Distributions

Description|Download Link|PGP Signature file of download
---|---|---
Source Release|[activemq-parent-5.10.0-source-release.zip](http://www.apache.org/dyn/closer.cgi?path=/activemq/5.10.0/activemq-parent-5.10.0-source-release.zip)|[activemq-parent-5.10.0-source-release.zip.asc](https://www.apache.org/dist/activemq/5.10.0/activemq-parent-5.10.0-source-release.zip.asc)

### Git Tag

[https://git-wip-us.apache.org/repos/asf?p=activemq.git;a=tag;h=refs/tags/activemq-5.10.0](https://git-wip-us.apache.org/repos/asf?p=activemq.git;a=tag;h=refs/tags/activemq-5.10.0)

Changelog
---------

For a more detailed view of new features and bug fixes, see the [release notes](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12324950)

Also see the previous [ActiveMQ 5.9.0 Release](activemq-590-release)

