Apache ActiveMQ ™ -- How do I debug ActiveMQ from my IDE 

 [FAQ](/FAQ/index.md) > [Developing ActiveMQ](../../FAQ/developing-activemq.md) > [How do I debug ActiveMQ from my IDE](../../FAQ/Developing ActiveMQ/how-do-i-debug-activemq-from-my-ide.md)


One option is to run your broker in the same JVM as your application; see [How To Unit Test JMS Code](../../FAQ/JMS/how-to-unit-test-jms-code.md).

Or you can try uncommenting ACTIVEMQ\_DEBUG\_OPTS in your activemq start script (bin/activemq or bin\\activemq.bat) and start remote debugging in your IDE.

For IDEA, see this article [http://www.javaranch.com/journal/200408/DebuggingServer-sideCode.html](http://www.javaranch.com/journal/200408/DebuggingServer-sideCode.html)

