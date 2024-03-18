---
layout: default_md
title: ActiveMQ Classic 5.11.3 Release
title-class: page-title-classic
type: classic
redirect_from:
- /../../../activemq-5113-release
- /../../../activemq-5011003-release
---

<div class="alert alert-warning">
  This is an older release. To get the current release, please see the <a href="{{site.baseurl}}/components/classic/download" class="alert-link">download page</a>.
</div>

Apache ActiveMQ Classic 5.11.3 resolves several [issues](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12329669), mostly bug fixes.

### Getting the Binary Distributions

Description|Download Link|PGP Signature file of download
Windows Distribution|[apache-activemq-5.11.3-bin.zip](https://archive.apache.org/dist/activemq/5.11.3/apache-activemq-5.11.3-bin.zip)|[apache-activemq-5.11.3-bin.zip.asc](https://archive.apache.org/dist/activemq/5.11.3/apache-activemq-5.11.3-bin.zip.asc)
Unix/Linux/Cygwin Distribution|[apache-activemq-5.11.3-bin.tar.gz](https://archive.apache.org/dist/activemq/5.11.3/apache-activemq-5.11.3-bin.tar.gz)|[apache-activemq-5.11.3-bin.tar.gz.asc](https://archive.apache.org/dist/activemq/5.11.3/apache-activemq-5.11.3-bin.tar.gz.asc)

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
  <version>5.11.3</version>
</dependency>
```
If you need more fine grained control of your dependencies (activemq-all is an uber jar) pick and choose from the various components activemq-client, activemq-broker, activemq-xx-store etc.

Getting the Source Code
-----------------------

### Source Distributions

Description|Download Link|PGP Signature file of download
---|---|---
Source Release|[activemq-parent-5.11.3-source-release.zip](http://www.apache.org/dyn/closer.cgi?path=/activemq/5.11.3/activemq-parent-5.11.3-source-release.zip)|[activemq-parent-5.11.3-source-release.zip.asc](https://www.apache.org/dist/activemq/5.11.3/activemq-parent-5.11.3-source-release.zip.asc)

### Git Tag

[https://git-wip-us.apache.org/repos/asf?p=activemq.git;a=tag;h=refs/tags/activemq-5.11.3](https://git-wip-us.apache.org/repos/asf?p=activemq.git;a=tag;h=refs/tags/activemq-5.11.3)

Changelog
---------

For a more detailed view of new features and bug fixes, see the [release notes](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12333254)

Also see the previous [ActiveMQ Classic 5.11.2 Release](classic-05-11-02)

