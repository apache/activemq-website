Apache ActiveMQ ™ -- NoClassDefFoundError - org.springframework.core.io.Resource 

 [FAQ](/FAQ/index.md) > [Errors](../../../FAQ/errors.md) > [Exceptions](../../../FAQ/Errors/exceptions.md) > [NoClassDefFoundError - org.springframework.core.io.Resource](noclassdeffounderror-orgspringframeworkcoreioreDevelopers/source.md)


If you get an exception like this

java.lang.NoClassDefFoundError - org/springframework/core/io/Resource

### Cause

You were probably trying to use the [XML Configuration](xml-Community/FAQ/configuration.md) mechanism, which uses Spring, but without having the Spring jar on your classpath.

### Solution

Add the Spring jar to your classpath.

