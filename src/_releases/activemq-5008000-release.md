---
layout: default_md
title: ActiveMQ 5.8.0 Release 
title-class: page-title-activemq5
type: activemq5
redirect_from:
- /activemq-580-release
---

[Overview](overview) > [Download](download) > [ActiveMQ 5.8.0 Release](activemq-580-release)

Apache ActiveMQ 5.8.0 resolves [160 issues](https://issues.apache.org/jira/secure/IssueNavigator.jspa?reset=true&jqlQuery=project+%3D+AMQ+AND+fixVersion+%3D+%225.8.0%22+AND+status+%3D+Resolved+ORDER+BY+priority+DESC&mode=hide), mostly bug fixes and improvements. It has the following new features:

*   [AMQP](amqp)
*   new feature modules and activemq-client module allowing smaller foorprint
*   management via [REST](ProtocolsConnectivity/Protocols/Connectivity/Protocols/rest) with [jolokia](http://www.jolokia.org/) jmx to http bridge
*   Includes [Apache Camel 2.10.3](http://camel.apache.org/camel-2103-release.html)
*   Java 7 support (compiled with jdk6 and validated with jdk7)
*   [Pure Master Slave](pure-master-slave) no longer supported

There are some changes in 5.8 that may require some code change

1.  New modules may effect your maven pom dependencies `activemq-core` has been replaced with `activemq-client` and `activemq-broker`. The various message stores have their own activemq-xx-store module. The uber module `activemq-all` remains.
2.  Changed JMX Mbean ObjectNames will effect scripts or tools that directly reference Mbean names. All mbeans now share the type=Broker attribute, which gives them containment. In this way, consumers hang off of destinations, which hang off the broker. The different Mbean types are identified by the presence of specific identifiers in their ObjectNames. The mapping from old to new ObjectName is as follows:
    
    Type|Old Name|New Name
    ---|---|---
    Broker|Type=Broker|type=Broker
    Destination|Type=Queue\|Topic,Destination=&lt;destination identifier>|type=Broker,destinationType=Queue\|Topic,destinationName=&lt;destination identifier>
    Connector|Type=Connector|type=Broker,connector=clientConnectors
    NetworkConnector|Type=NetworkConnector|type=Broker,connector=networkConnectors
    Connection|Type=Connection|type=Broker,connector=*,connectionViewType=remoteAddress\|clientId
    
3.  OSGi integration has changed. The full details are at [OSGi Integration](osgi-integration). In summary:
    1.  There is a single uber OSGI bundle
    2.  The broker and webconsole are now configured via config admin pid files through an OSGi managed service factory.
4.  The ActiveMQ binary file `bin/run.jar` has been renamed to `bin/activemq.jar`.

Getting the Binary Distributions
--------------------------------

Description|Download Link|PGP Signature file of download
Windows Distribution|[apache-activemq-5.8.0-bin.zip](http://archive.apache.org/dist/activemq/apache-activemq/5.8.0/apache-activemq-5.8.0-bin.zip)|[apache-activemq-5.8.0-bin.zip.asc](http://archive.apache.org/dist/activemq/apache-activemq/5.8.0/apache-activemq-5.8.0-bin.zip.asc)
Unix/Linux/Cygwin Distribution|[apache-activemq-5.8.0-bin.tar.gz](http://archive.apache.org/dist/activemq/apache-activemq/5.8.0/apache-activemq-5.8.0-bin.tar.gz)|[apache-activemq-5.8.0-bin.tar.gz.asc](http://archive.apache.org/dist/activemq/apache-activemq/5.8.0/apache-activemq-5.8.0-bin.tar.gz.asc)

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
  <artifactId>activemq-all</artifactId>
  <version>5.8.0</version>
</dependency>
```

Getting the Source Code
-----------------------

### Source Distributions

Description|Download Link|PGP Signature file of download
---|---|---
Source Release|[activemq-parent-5.8.0-source-release.zip](http://archive.apache.org/dist/activemq/apache-activemq/5.8.0/activemq-parent-5.8.0-source-release.zip)|[activemq-parent-5.8.0-source-release.zip.asc](http://archive.apache.org/dist/activemq/apache-activemq/5.8.0/activemq-parent-5.8.0-source-release.zip.asc)

### SVN Tag Checkout

svn co http://svn.apache.org/repos/asf/activemq/tags/activemq-5.8.0

Changelog
---------

For a more detailed view of new features and bug fixes, see the [release notes](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12323282)

Also see the previous [ActiveMQ 5.7.0 Release](activemq-570-release)

