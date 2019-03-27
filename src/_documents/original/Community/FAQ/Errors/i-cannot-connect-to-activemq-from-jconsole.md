Apache ActiveMQ ™ -- I cannot connect to ActiveMQ from JConsole 

[Community](community.md) > [FAQ](CommunityCommunity/Community/faq.md) > [Errors](Community/FAQCommunity/FAQ/Community/FAQ/errors.md) > [I cannot connect to ActiveMQ from JConsole](Community/FAQ/ErrorsCommunity/FAQ/Errors/Community/FAQ/Errors/i-cannot-connect-to-activemq-from-jconsole.md)


Make sure that the machine you are talking to has a valid **java.rmi.server.hostname-property** value

e.g. on unix (OS X, Linux, Solaris)

export ACTIVEMQ\_OPTS=$ACTIVEMQ\_OPTS -Djava.rmi.server.hostname=<hostname> 
activemq

or on Windows

SET ACTIVEMQ\_OPTS=%ACTIVEMQ\_OPTS% -Djava.rmi.server.hostname=<hostname> 
activemq

