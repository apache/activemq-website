---
layout: default_md
title: ActiveMQ 5.4.2 Release 
title-class: page-title-activemq5
type: activemq5
redirect_from:
- /activemq-542-release
---

[Overview](overview) > [Download](download) > [ActiveMQ 5.4.2 Release](activemq-542-release)

Warning

This release has been retracted due to bug [AMQ-3491](https://issues.apache.org/jira/browse/AMQ-3491). It is no longer downloadable from ASF servers. Please use the [ActiveMQ 5.4.3 Release](activemq-543-release) instead.

Apache ActiveMQ 5.4.2 is primarily a maintenance release which resolves  
[61 issues](https://issues.apache.org/jira/secure/IssueNavigator.jspa?reset=true&&pid=12311210&status=5&status=6&fixfor=12315625&sorter/field=priority&sorter/order=DESC) mostly bug fixes and improvements

Getting the Binary Distributions
--------------------------------

Description|Download Link|PGP Signature file of download
Windows Distribution|[apache-activemq-5.4.2-bin.zip](http://archive.apache.org/dist/activemq/apache-activemq/5.4.2/apache-activemq-5.4.2-bin.zip)|[apache-activemq-5.4.2-bin.zip.asc](http://archive.apache.org/dist/activemq/apache-activemq/5.4.2/apache-activemq-5.4.2-bin.zip.asc)
Unix/Linux/Cygwin Distribution|[apache-activemq-5.4.2-bin.tar.gz](http://archive.apache.org/dist/activemq/apache-activemq/5.4.2/apache-activemq-5.4.2-bin.tar.gz)|[apache-activemq-5.4.2-bin.tar.gz.asc](http://archive.apache.org/dist/activemq/apache-activemq/5.4.2/apache-activemq-5.4.2-bin.tar.gz.asc)

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
  <version>5.4.2</version>
</dependency>
```
Getting the Source Code
-----------------------

### Source Distributions

Description|Download Link|PGP Signature file of download
---|---|---
Source for Windows|[activemq-parent-5.4.2-source-release.zip](http://archive.apache.org/dist/activemq/apache-activemq/5.4.2/activemq-parent-5.4.2-source-release.zip)|[activemq-parent-5.4.2-source-release.zip.asc](http://archive.apache.org/dist/activemq/apache-activemq/5.4.2/activemq-parent-5.4.2-source-release.zip.asc)
Source for Unix/Linux/Cygwin|[activemq-parent-5.4.2-source-release.tar.gz](http://archive.apache.org/dist/activemq/apache-activemq/5.4.2/activemq-parent-5.4.2-source-release.tar.gz)|[activemq-parent-5.4.2-source-release.tar.gz.asc](http://archive.apache.org/dist/activemq/apache-activemq/5.4.2/activemq-parent-5.4.2-source-release.tar.gz.asc)

### SVN Tag Checkout

svn co http://svn.apache.org/repos/asf/activemq/tags/activemq-5.4.2

Changelog
---------

For a more detailed view of new features and bug fixes, see the [release notes](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&styleName=Html&version=12315625)

Also see the previous [ActiveMQ 5.4.1 Release](activemq-541-release)

