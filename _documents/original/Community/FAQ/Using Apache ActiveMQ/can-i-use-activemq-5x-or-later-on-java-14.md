Apache ActiveMQ ™ -- Can I use ActiveMQ 5.x or later on Java 1.4 

[Community](community.md) > [FAQ](CommunityCommunity/Community/faq.md) > [Using Apache ActiveMQ](Community/FAQCommunity/FAQ/Community/FAQ/using-apache-activemq.md) > [Can I use ActiveMQ 5.x or later on Java 1.4](Community/FAQ/Using Apache ActiveMQCommunity/FAQ/Using Apache ActiveMQ/Community/FAQ/Using Apache ActiveMQ/can-i-use-activemq-5x-or-later-on-java-14.md)


Can I use ActiveMQ 5.0 or later on Java 1.4?
--------------------------------------------

Apache ActiveMQ 5.x or later is developed to run on Java 5 or later to take advantage of the new language features together with the major fact that on Java 5 the new concurrency code is faster & less buggy and requires less dependencies.

We may get around to creating a sepate distro of retrotranslated jars for 1.4 [particularly if someone helps](CommunityCommunity/Community/contributing.md).

Until then you can just [install the retrotranslator JIT in your JVM](http://retrotranslator.sourceforge.net/#jit) which will auto-swizzle all Java 5 bytecode to be complaint Java 1.4 bytecode using backport-util-concurrent instead of Java 5 concurrency code.

See Also
--------

*   [What platforms does ActiveMQ support](Community/FAQ/GeneralCommunity/FAQ/General/Community/FAQ/General/what-platforms-does-activemq-Community/support.md)

