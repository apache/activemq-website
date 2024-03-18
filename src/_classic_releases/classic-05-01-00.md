---
layout: default_md
title: ActiveMQ Classic 5.1.0 Release
title-class: page-title-classic
type: classic
redirect_from:
- /../../../activemq-510-release
- /../../../activemq-5001000-release
---

<div class="alert alert-warning">
  This is an older release. To get the current release, please see the <a href="{{site.baseurl}}/components/classic/download" class="alert-link">download page</a>.
</div>

New Features in 5.1
-------------------

In the 5.1.x release of Apache ActiveMQ Classic there are the following new features:

*   You can use the new [DestinationSource](http://activemq.apache.org/maven/activemq-core/apidocs/org/apache/activemq/advisory/DestinationSource.html) on an ActiveMQConnection to access the available queues or topics or listen to queues/topics being created or deleted.
*   Support for more graceful handling of [timeouts within MessageProducer.send](http://issues.apache.org/activemq/browse/AMQ-1517)
*   Add the option for a [backup channel that is already connected for the Failover transport](http://issues.apache.org/activemq/browse/AMQ-1572)
*   ActiveMQ Classic configuration can now validate against an XSD which means that it can be embedded in a spring configuration file.
*   Stomp can now handle delivering Map and Object messages.

Getting the Binary Distributions
--------------------------------

Description|Download Link|PGP Signature file of download
Windows Distribution|[apache-activemq-5.1.0-bin.zip](http://archive.apache.org/dist/activemq/apache-activemq/5.1.0/apache-activemq-5.1.0-bin.zip)|[apache-activemq-5.1.0-bin.zip.asc](http://archive.apache.org/dist/activemq/apache-activemq/apache-activemq-5.1.0-bin.zip.asc)
Unix/Linux/Cygwin Distribution|[apache-activemq-5.1.0-bin.tar.gz](http://archive.apache.org/dist/activemq/apache-activemq/5.1.0/apache-activemq-5.1.0-bin.tar.gz)|[apache-activemq-5.1.0-bin.tar.gz.asc](http://archive.apache.org/dist/activemq/apache-activemq/5.1.0/apache-activemq-5.1.0-bin.tar.gz.asc)

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

Error When Expanding Tarballs

When expanding the binary tarballs you might wind up experiencing the following:


$ tar zxvf /path/to/apache-activemq-5.1.0-bin.tar.gz
apache-activemq-5.1.0/bin/run.jar
apache-activemq-5.1.0/activemq-all-5.1.0.jar
...
apache-activemq-5.1.0/webapps/fileserver/WEB-INF/web.xml
apache-activemq-5.1.0/webapps/fileserver/WEB-INF/classes/org/apache/activemq/util/FilenameGuardFilter.class
apache-activemq-5.1.0/webapps/fileserver/WEB-INF/classes/org/apache/activemq/util/FilenameGuardFilter$GuardedHttpServletRequest.class
apache-activemq-5.1.0/webapps/fileserver/WEB-INF/classes/org/apache/activemq/util/RestFilter.class
tar: Unexpected EOF in archive
tar: A lone zero block at 61740
tar: Error exit delayed from previous errors

These errors are a product of an open [bug in Maven](http://jira.codehaus.org/browse/MASSEMBLY-302) and are innocuous and won't affect anything.

Getting the Binaries using Maven 2
----------------------------------

To use this release in your maven project, the proper dependency configuration that you should use in your [Maven POM](http://maven.apache.org/guides/introduction/introduction-to-the-pom.html) is:
```
<dependency>
  <groupId>org.apache.activemq</groupId>
  <artifactId>activemq-core</artifactId>
  <version>5.1.0</version>
</dependency>
```

Getting the Source Code
-----------------------

### Source Distributions

Description|Download Link|PGP Signature file of download
---|---|---
Source for Windows|[apache-activemq-5.1.0-src.zip](http://archive.apache.org/dist/activemq/apache-activemq/5.1.0/apache-activemq-5.1.0-src.zip)|[apache-activemq-5.1.0-src.zip.asc](http://archive.apache.org/dist/activemq/apache-activemq/5.1.0/apache-activemq-5.1.0-src.zip.asc)
Source for Unix/Linux/Cygwin|[apache-activemq-5.1.0-src.tar.gz](http://archive.apache.org/dist/activemq/apache-activemq/5.1.0/apache-activemq-5.1.0-src.tar.gz)|[apache-activemq-5.1.0-src.tar.gz.asc](http://archive.apache.org/dist/activemq/apache-activemq/5.1.0/apache-activemq-5.1.0-src.tar.gz.asc)

### SVN Tag Checkout

```
svn co http://svn.apache.org/repos/asf/activemq/tags/activemq-5.1.0
```

Changelog
---------

For a more detailed view of new features and bug fixes, see the [release notes](http://issues.apache.org/activemq/secure/ReleaseNote.jspa?version=11802&styleName=Html&projectId=10520&Create=Create)

JIRA Issues Macro: Data cannot be retrieved due to an unexpected error

Also see the previous [ActiveMQ Classic 5.0.0 Release](classic-05-00-00)

