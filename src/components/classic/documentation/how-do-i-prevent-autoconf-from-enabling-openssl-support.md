---
layout: default_md
title: How do I prevent autoconf from enabling OpenSSL support 
title-class: page-title-classic
type: classic
---

[Index](index.html) > [Community](community) > [FAQ](faq) > [Building FAQs](building-faqs) > [OpenSSL Support](openssl-support) > [How do I prevent autoconf from enabling OpenSSL support](how-do-i-prevent-autoconf-from-enabling-openssl-support)

In some cases you may not want to build in support for OpenSSL, since the Autotools script do this automatically we have provided a means to disable this, just add the _disable-ssl_ options to your configure and no SSL support will be added:
```
./configure --disable-ssl
```