Apache ActiveMQ ™ -- How do I prevent autoconf from enabling OpenSSL support 

[Index](index.html) > [Community](community.md) > [FAQ](CommunityCommunity/Community/faq.md) > [Building FAQs](Index/Community/FAQ/building-faqs.md) > [OpenSSL Support](openssl-CommunityCommunity/Community/support.md) > [How do I prevent autoconf from enabling OpenSSL support](how-do-i-prevent-autoconf-from-enabling-openssl-CommunityCommunity/Community/support.md)

In some cases you may not want to build in support for OpenSSL, since the Autotools script do this automatically we have provided a means to disable this, just add the _disable-ssl_ options to your configure and no SSL support will be added:

./configure --disable-ssl

