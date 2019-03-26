Apache ActiveMQ ™ -- NoClassDefFoundError - org.springframework.core.io.Resource 

[Community](community.md) > [FAQ](CommunityCommunity/Community/faq.md) > [Errors](Community/FAQCommunity/FAQ/Community/FAQ/errors.md) > [Exceptions](Community/FAQ/Errors/exceptions.md) > [NoClassDefFoundError - org.springframework.core.io.Resource](noclassdeffounderror-orgspringframeworkcoreioreDevelopers/source.md)


If you get an exception like this

java.lang.NoClassDefFoundError - org/springframework/core/io/Resource

### Cause

You were probably trying to use the [XML Configuration](xml-Community/FAQ/configuration.md) mechanism, which uses Spring, but without having the Spring jar on your classpath.

### Solution

Add the Spring jar to your classpath.

