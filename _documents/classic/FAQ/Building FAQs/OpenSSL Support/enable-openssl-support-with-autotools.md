Apache ActiveMQ ™ -- Enable OpenSSL support with autotools 

[Index](index.html) > [Community](../../../community.md) > [FAQ](../../../faq.md) > [Building FAQs](../../../FAQ/building-faqs.md) > [OpenSSL Support](openssl-CommunityCommunity/Community/support.md) > [Enable OpenSSL support with autotools](../../../FAQ/Building FAQs/OpenSSL Support/enable-openssl-support-with-autotools.md)

When you build the ActiveMQ-CPP library using the GNU AutoTools the Configure script will automatically search for OpenSSL on your system and enable support for it in the code if its found. The search might fail if you have installed OpenSSL in a non-standard location in which case you can tell the configure script where to look using the _with-openssl_ option, see below for an example.

./configure --with-openssl=/opt/special/openssl

