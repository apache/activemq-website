---
layout: default_md
title: How to enable SSL support on Windows 
title-class: page-title-classic
type: classic
---

[Index](index) > [Community](community) > [FAQ](faq) > [Building FAQs](building-faqs) > [OpenSSL Support](openssl-support) > [How to enable SSL support on Windows](how-to-enable-ssl-support-on-windows)

To enable support for SSL on Windows you first need to obtain a build of the OpenSSL libraries for Windows (See the OpenSSL site for details). Once you have the OpenSSL package for Windows installed you need to add the `HAVE_OPENSSL` preprocessor directive to the ActiveMQ-CPP library build's project file and set the include and library paths there as well. When you link the library to your app and run you will need to have the location of the OpenSSL libraries on your PATH or copy the libraries to the System folder.

