---
layout: default_md
title: Apache ActiveMQ ™ -- NMS API Downloads 
title-class: page-title-nms
type: nms
---

1.7.1 (09/04/2015)
-----

##### New and Noteworthy

This is a minor release of the NMS API which adds a few minor fixes for NMS Providers operating in MSDTC Transactions.

##### API Documentation

Refer to the API for this release [here](nms-Index/Site/NavigationIndex/Site/Navigation/Index/Site/Navigation/api.md)

##### Download Here

|Description|Download Link|PGP Signature File|Version|
|---|---|---|---|
|Apache.NMS Source code|[Apache.NMS-1.7.1-src.zip](http://www.apache.org/dyn/closer.lua/activemq/apache-nms/1.7.0/Apache.NMS-1.7.1-src.zip)|[Apache.NMS-1.7.1-src.zip.asc](http://www.apache.org/dist/activemq/apache-nms/1.7.0/Apache.NMS-1.7.1-src.zip.asc)|1.7.1.3894|
|Apache.NMS Binary Assemblies|[Apache.NMS-1.7.1-bin.zip](http://www.apache.org/dyn/closer.lua/activemq/apache-nms/1.7.0/Apache.NMS-1.7.1-bin.zip)|[Apache.NMS-1.7.1-bin.zip.asc](http://www.apache.org/dist/activemq/apache-nms/1.7.0/Apache.NMS-1.7.1-bin.zip.asc)|1.7.1.3894|

##### SVN Tag Checkout
```
svn co https://svn.apache.org/repos/asf/activemq/activemq-dotnet/Apache.NMS/tags/1.7.1/
```
##### Changelog

For a more detailed view of new features and bug fixes, see the [release notes](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311201&styleName=Html&version=12329541)  
  
---

1.7.0 (01/08/2015)
-----

##### New and Noteworthy

This is a major release of the NMS API which adds some new APIs and fixes some minor bugs in the NMS API libraries common code.

*   Added IDisposable as a base of IDestination.
*   Added some improvements to the Unit tests framework.
*   Added some new provider names (AMQP and MQTT) to allow for future clients.

##### API Documentation

Refer to the API for this release [here](nms-Index/Site/NavigationIndex/Site/Navigation/Index/Site/Navigation/api.md)

##### Download Here

|Description|Download Link|PGP Signature File|Version|
|---|---|---|---|
|Apache.NMS Source code|[Apache.NMS-1.7.0-src.zip](https://archive.apache.org/dist/activemq/apache-nms/1.7.0/Apache.NMS-1.7.0-src.zip)|[Apache.NMS-1.7.0-src.zip.asc](https://archive.apache.org/dist/activemq/apache-nms/1.7.0/Apache.NMS-1.7.0-src.zip.asc)|1.7.0.3635|
|Apache.NMS Binary Assemblies|[Apache.NMS-1.7.0-bin.zip](https://archive.apache.org/dist/activemq/apache-nms/1.7.0/Apache.NMS-1.7.0-bin.zip)|[Apache.NMS-1.7.0-bin.zip.asc](https://archive.apache.org/dist/activemq/apache-nms/1.7.0/Apache.NMS-1.7.0-bin.zip.asc)|1.7.0.3635|

##### SVN Tag Checkout
```
svn co https://svn.apache.org/repos/asf/activemq/activemq-dotnet/Apache.NMS/tags/1.7.0/
```
##### Changelog

For a more detailed view of new features and bug fixes, see the [release notes](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311201&styleName=Html&version=12325350)

---

1.6.0 (05/24/2013)
-----

##### New and Noteworthy

This is a major release of the NMS API which adds some new APIs and fixes some minor bugs in the NMS API libraries common code.

*   Added Recover method to ISession.
*   Added new events to ISession for Transaction begin, commit and rollback.
*   Added method in IConnection to purge created Temp Destinations.

##### API Documentation

Refer to the API for this release [here](nms-Index/Site/NavigationIndex/Site/Navigation/Index/Site/Navigation/api.md)

##### Download Here

|Description|Download Link|PGP Signature File|Version|
|---|---|---|---|
|Apache.NMS Source code|[Apache.NMS-1.6.0-src.zip](https://archive.apache.org/dist/activemq/apache-nms/1.6.0/Apache.NMS-1.6.0-src.zip)|[Apache.NMS-1.6.0-src.zip.asc](https://archive.apache.org/dist/activemq/apache-nms/1.6.0/Apache.NMS-1.6.0-src.zip.asc)|1.6.0.3061|
|Apache.NMS Binary Assemblies|[Apache.NMS-1.6.0-bin.zip](https://archive.apache.org/dist/activemq/apache-nms/1.6.0/Apache.NMS-1.6.0-bin.zip)|[Apache.NMS-1.6.0-bin.zip.asc](https://archive.apache.org/dist/activemq/apache-nms/1.6.0/Apache.NMS-1.6.0-bin.zip.asc)|1.6.0.3061|

##### SVN Tag Checkout
```
svn co https://svn.apache.org/repos/asf/activemq/activemq-dotnet/Apache.NMS/tags/1.6.0/
```
##### Changelog

For a more detailed view of new features and bug fixes, see the [release notes](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311201&styleName=Html&version=12315987)

---

1.5.1 (07/06/2012)
-----

##### New and Noteworthy

This is a bugfix release of the NMS API there are no API changes in this release.

##### NMS fixes

*   Fixes a bug that can cause the Message properties object to marshal to a byte array that is much larger than needed which adds unwanted overhead on the wire for marshaled Messages.

##### API Documentation

Refer to the API for this release [here](nms-Index/Site/NavigationIndex/Site/Navigation/Index/Site/Navigation/api.md)

##### Download Here

|Description|Download Link|PGP Signature File|Version|
|---|---|---|---|
|Apache.NMS Source code|[Apache.NMS-1.5.1-src.zip](http://www.apache.org/dyn/closer.cgi/activemq/apache-nms/1.5.0/Apache.NMS-1.5.1-src.zip)|[Apache.NMS-1.5.1-src.zip.asc](http://www.apache.org/dyn/closer.cgi/activemq/apache-nms/1.5.0/Apache.NMS-1.5.1-src.zip.asc)|1.5.1.2739|
|Apache.NMS Binary Assemblies|[Apache.NMS-1.5.1-bin.zip](http://www.apache.org/dyn/closer.cgi/activemq/apache-nms/1.5.0/Apache.NMS-1.5.1-bin.zip)|[Apache.NMS-1.5.1-bin.zip.asc](http://www.apache.org/dyn/closer.cgi/activemq/apache-nms/1.5.0/Apache.NMS-1.5.1-bin.zip.asc)|1.5.1.2739|

##### SVN Tag Checkout
```
svn co https://svn.apache.org/repos/asf/activemq/activemq-dotnet/Apache.NMS/tags/1.5.1/
```
##### Changelog

For a more detailed view of new features and bug fixes, see the [release notes](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311201&styleName=Html&version=12315640)

---

1.5.0 (01/10/2011)
-----

##### New and Noteworthy

This release adds some great new features to the NMS API.

##### NMS API Updates

*   New Optional .NET Transaction Specific Connection classes that allow a client to offer support for operations within MS .NET Distributed Transactions.

##### API Documentation

Refer to the API for this release [here](nms-Index/Site/NavigationIndex/Site/Navigation/Index/Site/Navigation/api.md)

##### Download Here

|Description|Download Link|PGP Signature File|Version|
|---|---|---|---|
|Apache.NMS Source code|[Apache.NMS-1.5.0-src.zip](http://www.apache.org/dyn/closer.cgi/activemq/apache-nms/1.5.0/Apache.NMS-1.5.0-src.zip)|[Apache.NMS-1.5.0-src.zip.asc](http://www.apache.org/dyn/closer.cgi/activemq/apache-nms/1.5.0/Apache.NMS-1.5.0-src.zip.asc)|1.5.0.2194|
|Apache.NMS Binary Assemblies|[Apache.NMS-1.5.0-bin.zip](http://www.apache.org/dyn/closer.cgi/activemq/apache-nms/1.5.0/Apache.NMS-1.5.0-bin.zip)|[Apache.NMS-1.5.0-bin.zip.asc](http://www.apache.org/dyn/closer.cgi/activemq/apache-nms/1.5.0/Apache.NMS-1.5.0-bin.zip.asc)|1.5.0.2194|

##### SVN Tag Checkout
```
svn co https://svn.apache.org/repos/asf/activemq/activemq-dotnet/Apache.NMS/tags/1.5.0/
```
##### Changelog

For a more detailed view of new features and bug fixes, see the [release notes](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311201&styleName=Html&version=12315640)

---

1.4.0 (09/10/2010)
-----

##### New and Noteworthy

This release adds some great new features to the NMS API and fixes several bugs found in the 1.3.0 release.  Some highlights for this release.

*   Improved URI handling in all NMS clients.
*   Added a new SetBytes method to IMapMessage.
*   Added a new MessageTransformer API.
*   Many new Unit Tests added to the Test Suite.
*   Many bug fixes.

##### API

Refer to the API for this release [here](nms-Index/Site/NavigationIndex/Site/Navigation/Index/Site/Navigation/api.md)

##### Download Here

|Description|Download Link|PGP Signature File|Version|
|---|---|---|---|
|Apache.NMS Source code|[Apache.NMS-1.4.0-src.zip](http://www.apache.org/dyn/closer.cgi/activemq/apache-nms/1.4.0/Apache.NMS-1.4.0-src.zip)|[Apache.NMS-1.4.0-src.zip.asc](http://www.apache.org/dyn/closer.cgi/activemq/apache-nms/1.4.0/Apache.NMS-1.4.0-src.zip.asc)|1.4.0.2075|
|Apache.NMS Binary Assemblies|[Apache.NMS-1.4.0-bin.zip](http://www.apache.org/dyn/closer.cgi/activemq/apache-nms/1.4.0/Apache.NMS-1.4.0-bin.zip)|[Apache.NMS-1.4.0-bin.zip.asc](http://www.apache.org/dyn/closer.cgi/activemq/apache-nms/1.4.0/Apache.NMS-1.4.0-bin.zip.asc)|1.4.0.2075|

##### SVN Tag Checkout
```
svn co https://svn.apache.org/repos/asf/activemq/activemq-dotnet/Apache.NMS/tags/1.4.0/
```
##### Changelog

For a more detailed view of new features and bug fixes, see the [release notes](https://issues.apache.org/activemq/secure/ReleaseNote.jspa?projectId=11010&styleName=Html&version=12188)

---

1.3.0 (05/14/2010)
-----

##### New and Noteworthy

This release adds some great new features to the NMS API and fixes several bugs found in the 1.2.0 release.  Some highlights for this release.

*   Improved API Documentation.
*   Many new Unit Tests added to the Test Suite.
*   Many bug fixes.

##### API

Refer to the API for this release [here](nms-Index/Site/NavigationIndex/Site/Navigation/Index/Site/Navigation/api.md)

##### Download Here

|Description|Download Link|PGP Signature File|Version|
|---|---|---|---|
|Apache.NMS Source code|[Apache.NMS-1.3.0-src.zip](http://archive.apache.org/dist/activemq/apache-nms/1.3.0/Apache.NMS-1.3.0-src.zip)|[Apache.NMS-1.3.0-src.zip.asc](http://archive.apache.org/dist/activemq/apache-nms/1.3.0/Apache.NMS-1.3.0-src.zip.asc)|1.3.0.1959|
|Apache.NMS Binary Assemblies|[Apache.NMS-1.3.0-bin.zip](http://archive.apache.org/dist/activemq/apache-nms/1.3.0/Apache.NMS-1.3.0-bin.zip)|[Apache.NMS-1.3.0-bin.zip.asc](http://archive.apache.org/dist/activemq/apache-nms/1.3.0/Apache.NMS-1.3.0-bin.zip.asc)|1.3.0.1959|

##### SVN Tag Checkout
```
svn co https://svn.apache.org/repos/asf/activemq/activemq-dotnet/Apache.NMS/tags/1.3.0/
```
##### Changelog

For a more detailed view of new features and bug fixes, see the [release notes](https://issues.apache.org/activemq/secure/ReleaseNote.jspa?projectId=11010&styleName=Html&version=12150)

---

1.2.0 (01/15/2010)
-----

##### New and Noteworthy

This release adds some great new features to the NMS API and fixes several bugs found in the 1.1.0 release.  Some highlights for this release.

*   Addition of IConnectionMeteData to the Connection API.
*   Addition of IQueueBrowser to the Session API.
*   Improved API Documentation.
*   New IStreamMessage interface.
*   New IRedeliveryPolicy interface.
*   Expanded IByteMessage interface to read/write primitive types.
*   Many new Unit Tests added to the Test Suite.
*   Many bug fixes.

##### API

Refer to the API for this release [here](nms-Index/Site/NavigationIndex/Site/Navigation/Index/Site/Navigation/api.md)

##### Download Here

|Description|Download Link|PGP Signature File|Version|
|---|---|---|---|
|Apache.NMS Source code|[Apache.NMS-1.2.0-src.zip](http://www.apache.org/dyn/closer.cgi/activemq/apache-nms/1.2.0/Apache.NMS-1.2.0-src.zip)|[Apache.NMS-1.2.0-src.zip.asc](http://www.apache.org/dyn/closer.cgi/activemq/apache-nms/1.2.0/Apache.NMS-1.2.0-src.zip.asc)|1.2.0.1836|
|Apache.NMS Binary Assemblies|[Apache.NMS-1.2.0-bin.zip](http://www.apache.org/dyn/closer.cgi/activemq/apache-nms/1.2.0/Apache.NMS-1.2.0-bin.zip)|[Apache.NMS-1.2.0-bin.zip.asc](http://www.apache.org/dyn/closer.cgi/activemq/apache-nms/1.2.0/Apache.NMS-1.2.0-bin.zip.asc)|1.2.0.1836|

##### SVN Tag Checkout
```
svn co https://svn.apache.org/repos/asf/activemq/activemq-dotnet/Apache.NMS/tags/1.2.0/
```
##### Changelog

For a more detailed view of new features and bug fixes, see the [release notes](https://issues.apache.org/activemq/secure/ReleaseNote.jspa?projectId=11010&styleName=Html&version=11815)

---

1.1.0 (07/12/2009)
-----

##### New and Noteworthy

The 1.1.0 release is a major milestone for the Apache NMS project. It is the first official release of the main Apache.NMS project, and all provider implementation projects. Following are some highlights of this release:

*   Improved API Documentation.
*   Many bug fixes.

##### API

Refer to the API for this release [here](nms-Index/Site/NavigationIndex/Site/Navigation/Index/Site/Navigation/api.md)

##### Download Here

|Description|Download Link|PGP Signature File|Version|
|---|---|---|---|
|Apache.NMS Source code|[Apache.NMS-1.1.0-src.zip](http://www.apache.org/dyn/closer.cgi/activemq/apache-nms/1.1.0/Apache.NMS-1.1.0-src.zip)|[Apache.NMS-1.1.0-src.zip.asc](http://www.apache.org/dyn/closer.cgi/activemq/apache-nms/1.1.0/Apache.NMS-1.1.0-src.zip.asc)|1.1.0.1642|
|Apache.NMS Binary Assemblies|[Apache.NMS-1.1.0-bin.zip](http://www.apache.org/dyn/closer.cgi/activemq/apache-nms/1.1.0/Apache.NMS-1.1.0-bin.zip)|[Apache.NMS-1.1.0-bin.zip.asc](http://www.apache.org/dyn/closer.cgi/activemq/apache-nms/1.1.0/Apache.NMS-1.1.0-bin.zip.asc)|1.1.0.1642|

##### SVN Tag Checkout
```
svn co https://svn.apache.org/repos/asf/activemq/activemq-net/Apache.NMS/tags/1.1.0/
```
##### Changelog

For a more detailed view of new features and bug fixes, see the [release notes](https://issues.apache.org/activemq/secure/ReleaseNote.jspa?projectId=11010&styleName=Html&version=11814)


