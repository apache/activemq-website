---
layout: default_md
title: How do I debug ActiveMQ from my IDE 
title-class: page-title-activemq5
type: activemq5
---

 [FAQ](faq) > [Developing ActiveMQ](developing-activemq) > [How do I debug ActiveMQ from my IDE](how-do-i-debug-activemq-from-my-ide)


One option is to run your broker in the same JVM as your application; see [How To Unit Test JMS Code](how-to-unit-test-jms-code).

Or you can try uncommenting ACTIVEMQ_DEBUG_OPTS in your activemq start script (bin/activemq or bin\activemq.bat) and start remote debugging in your IDE.

For IDEA, see this article [http://www.javaranch.com/journal/200408/DebuggingServer-sideCode.html](http://www.javaranch.com/journal/200408/DebuggingServer-sideCode.html)

