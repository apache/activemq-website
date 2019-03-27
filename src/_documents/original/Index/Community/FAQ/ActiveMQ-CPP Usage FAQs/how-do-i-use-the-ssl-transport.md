Apache ActiveMQ ™ -- How do I use the SSL Transport 

[Index](index.html) > [Community](community.md) > [FAQ](CommunityCommunity/Community/faq.md) > [ActiveMQ-CPP Usage FAQs](Index/Community/FAQ/activemq-cpp-usage-faqs.md) > [How do I use the SSL Transport](Index/Community/FAQ/ActiveMQ-CPP Usage FAQsIndex/Community/FAQ/ActiveMQ-CPP Usage FAQs/Index/Community/FAQ/ActiveMQ-CPP Usage FAQs/how-do-i-use-the-ssl-transport.md)

The first thing you need to do in order to use the SSL Transport in ActiveMQ-CPP is to build the library with SSL support enabled, for that see the [Build FAQs](Index/Community/FAQ/building-faqs.md).

Once you have a build that supports the SSL protocol then its pretty simple, just replace the use of the _TCP_ Transport in your connection URI with SSL, for example:

tcp://broker1:61616

becomes:

ssl://broker1:61616

You should note that in order to validate that the certificate that the broker sends is the one we want we must validate the "Common Name (CN)" field from the certificate against the host-name in the URI. If you have trouble connecting to the broker one of the first things to check it if your host-name matches the broker certificate common name.

That's almost it, there's just a couple other things you need might need to do. The SSL transport needs to know whether or not to trust the certificate that the Broker sends to it, for this you need to set a property in the Decaf library (this is the native library ActiveMQ-CPP uses for cross platform support). The property you set tells the library where to find either the Broker's Certificate or the Certificate of the Authority that signed the broker's certificate. If you are using the Failover Transport (which you should be) in conjunction with the SSL Transport then its best to set the property to point to the certificate that signed all your broker's certificates. Here's what the code looks like:

#include <decaf/lang/System.h>

...

decaf::lang::System::setProperty( "decaf.net.ssl.trustStore", "<path to Certificate file>/certificate.pem" );

One thing to note here is that since we are using OpenSSL as our SSL Engine the Certificate needs to be in PEM format.

