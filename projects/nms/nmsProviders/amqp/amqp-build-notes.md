---
layout: default_md
title: Apache ActiveMQ ™ -- AMQP Build Notes 
---

[Index](index.html) > [Apache.NMS](Index/apacheIndex/Overview/nms.md) > [NMS Providers](Index/Apache.NMS/nms-providers.md) > [Apache.NMS.AMQP](Index/Apache.NMS/NMS Providers/apachenmsamqp.md) > [AMQP Build Notes](Index/Apache.NMS/NMS Providers/Apache.NMS.AMQP/amqp-build-notes.md)

Default build
=============

Executing **nant** in the project home directory will produce two builds:

*   Debug/Release .NET 2.0 x86 in the \\net-2.0 folder built with Visual Studio 2008
*   Debug/Release .NET 4.0 x86 in the \\net-4.0 folder built with Visual Studio 2010

Your build system must have Visual Studio 2008, Visual Studio 2010, or both to produce the desired build.

Dependencies and restrictions
=============================

The version dependencies on Visual Studio and the x86-only restrictions are artefacts of the delivery mechanism for the vendor\\QPid\\Apache.QPID support libraries. These restrictions are important to understand for using this provider and for packaging this provider for your application.

Support library components (x86 only)
-------------------------------------

The support libraries consist of two parts:

*   Native C++ Qpid Messaging (qpid*.dll, boost*.dll)
*   .NET interop binding between .NET and the native C++ code (org.apache.qpid.messaging.dll)

The C++ support libraries are compiled with specific versions of Visual Studio and linked to the corresponding MSVC runtime libraries. In this release of Apache.NMS.AMQP only the x86 versions of Apache.QPID are provided.

Running the Apache.NMS.AMQP provider in an x64 environment or in a .NET application choosing AnyCPU will not work correctly. Please choose **x86** for your application _Platform target_.

Run time library staging
------------------------

When your application runs make sure that all of the Apache.QPID support library dll files are copied to the final execution directory. When the support library files are not in same folder as _org.apache.qpid.messaging.dll_ then the Apache.NMS.AMQP provider may not load correctly. Having the support files on your application's PATH is not sufficient for successful loading.


