---
layout: default_md
title: ActiveMQ 5.15.10 Release 
title-class: page-title-activemq5
type: activemq5
redirect_from:
- /activemq-51510-release
---

[Overview](overview) > [Download](download) > [ActiveMQ 5.15.10 Release](activemq-51510-release)

ActiveMQ 5.15.10 Release
-----------------------

Apache ActiveMQ 5.15.10 includes several resolved[ issues](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12345171) and bug fixes.

### Getting the Binary Distributions

Description|Download Link|_Verify_
---|---|---
Windows Distribution|[apache-activemq-5.15.10-bin.zip](https://archive.apache.org/dist/activemq/5.15.10/apache-activemq-5.15.10-bin.zip)|[ASC](https://archive.apache.org/dist/activemq/5.15.10/apache-activemq-5.15.10-bin.zip.asc), [SHA512](https://archive.apache.org/dist/activemq/5.15.10/apache-activemq-5.15.10-bin.zip.sha512)
Unix/Linux/Cygwin Distribution|[apache-activemq-5.15.10-bin.tar.gz](https://archive.apache.org/dist/activemq/5.15.10/apache-activemq-5.15.10-bin.tar.gz)|[ASC](https://archive.apache.org/dist/activemq/5.15.10/apache-activemq-5.15.10-bin.tar.gz.asc), [SHA512](https://archive.apache.org/dist/activemq/5.15.10/apache-activemq-5.15.10-bin.tar.gz.sha512)

Verify the Integrity of Downloads
---------------------------------

It is essential that you verify the integrity of the downloaded files using the PGP or MD5 signatures. The PGP signatures can be verified using PGP or GPG. Begin by following these steps:

1.  Download the [KEYS](https://downloads.apache.org/activemq/KEYS)
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

Getting the Binaries using Maven 3
----------------------------------

To use this release in your maven project, the simplest dependency that you can use in your [Maven POM](http://maven.apache.org/guides/introduction/introduction-to-the-pom.html) is:
```
<dependency>
  <groupId>org.apache.activemq</groupId>
  <artifactId>activemq-all</artifactId>
  <version>5.15.10</version>
</dependency>
```
If you need more fine grained control of your dependencies (activemq-all is an uber jar) pick and choose from the various components activemq-client, activemq-broker, activemq-xx-store etc.

Getting the Source Code
-----------------------

### Source Distributions

Description|Download Link|Verify
---|---|---
Source Release|[activemq-parent-5.15.10-source-release.zip](https://archive.apache.org/dist/activemq/5.15.10/activemq-parent-5.15.10-source-release.zip)|[ASC](https://archive.apache.org/dist/activemq/5.15.10/activemq-parent-5.15.10-source-release.zip.asc), [SHA512](https://archive.apache.org/dist/activemq/5.15.10/activemq-parent-5.15.10-source-release.zip.sha512)

### Git Tag

[https://gitbox.apache.org/repos/asf?p=activemq.git;a=tag;h=refs/tags/activemq-5.15.10](https://gitbox.apache.org/repos/asf?p=activemq.git;a=tag;h=refs/tags/activemq-5.15.10)

Change Log
----------

For a more detailed view of new features and bug fixes, see the [release notes](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12345171)

> **Java 8 Required**
> 
> The minimum Java version has been upgraded to Java 8.

Also see the previous [ActiveMQ 5.15.9 Release](activemq-5159-release)
