---
layout: default_md
title: ActiveMQ 5.15.6 Release 
title-class: page-title-activemq5
type: activemq5
---

[Overview](overview) > [Download](download) > [ActiveMQ 5.15.6 Release](activemq-5156-release)

> This release enables ActiveMQ client TLS hostname validation by default which can cause a client connection failure for server certificates that do not match the server hostname. Please refer to SSL Transport Reference for configuration and [AMQ-7047](https://issues.apache.org/jira/browse/AMQ-7047?src=confmacro) for more information.

ActiveMQ 5.15.6 Release
-----------------------

Apache ActiveMQ 5.15.6 includes several resolved[ issues](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12344049) and bug fixes.

### Getting the Binary Distributions

Description|Download Link|_Verify_
---|---|---
Windows Distribution|[apache-activemq-5.15.6-bin.zip](http://archive.apache.org/dist/activemq/5.15.6/apache-activemq-5.15.6-bin.zip)|[ASC](https://archive.apache.org/dist/activemq/5.15.6/apache-activemq-5.15.6-bin.zip.asc), [SHA512](https://archive.apache.org/dist/activemq/5.15.6/apache-activemq-5.15.6-bin.zip.sha512)
Unix/Linux/Cygwin Distribution|[apache-activemq-5.15.6-bin.tar.gz](http://archive.apache.org/dist/activemq/5.15.6/apache-activemq-5.15.6-bin.tar.gz)|[ASC](https://archive.apache.org/dist/activemq/5.15.6/apache-activemq-5.15.6-bin.tar.gz.asc), [SHA512](https://archive.apache.org/dist/activemq/5.15.6/apache-activemq-5.15.6-bin.tar.gz.sha512)

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

Getting the Binaries using Maven 3
----------------------------------

To use this release in your maven project, the simplest dependency that you can use in your [Maven POM](http://maven.apache.org/guides/introduction/introduction-to-the-pom.html) is:
```
<dependency>
  <groupId>org.apache.activemq</groupId>
  <artifactId>activemq-all</artifactId>
  <version>5.15.6</version>
</dependency>
```
If you need more fine grained control of your dependencies (activemq-all is an uber jar) pick and choose from the various components activemq-client, activemq-broker, activemq-xx-store etc.

Getting the Source Code
-----------------------

### Source Distributions

Description|Download Link|Verify
---|---|---
Source Release|[activemq-parent-5.15.6-source-release.zip](http://www.apache.org/dyn/closer.cgi?path=/activemq/5.15.6/activemq-parent-5.15.6-source-release.zip)|[ASC](https://www.apache.org/dist/activemq/5.15.6/activemq-parent-5.15.6-source-release.zip.asc), [SHA512](https://www.apache.org/dist/activemq/5.15.6/activemq-parent-5.15.6-source-release.zip.sha512)

### Git Tag

[https://git-wip-us.apache.org/repos/asf?p=activemq.git;a=tag;h=refs/tags/activemq-5.15.6](https://git-wip-us.apache.org/repos/asf?p=activemq.git;a=tag;h=refs/tags/activemq-5.15.6)

Change Log
----------

For a more detailed view of new features and bug fixes, see the [release notes](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12341669)

> **Java 8 Required**
> 
> The minimum Java version has been upgraded to Java 8.

> This release affects applications using ObjectMessages. Please refer to [objectmessage](objectmessage) and jira-issue [AMQ-6013](https://issues.apache.org/jira/browse/AMQ-6013) for more information.

Also see the previous [ActiveMQ 5.15.0 Release](activemq-5150-release)
