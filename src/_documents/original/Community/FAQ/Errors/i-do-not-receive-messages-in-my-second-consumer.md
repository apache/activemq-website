Apache ActiveMQ ™ -- I do not receive messages in my second consumer 

[Community](community.md) > [FAQ](CommunityCommunity/Community/faq.md) > [Errors](Community/FAQCommunity/FAQ/Community/FAQ/errors.md) > [I do not receive messages in my second consumer](Community/FAQ/Errors/i-do-not-receive-messages-in-my-second-consumer.md)


### Scenario

*   You send 100 messages to a queue.
*   Start consumer A, it receives the message
*   You start another consumer B, it doesn't receive any messages.
*   You kill A.
*   Consumer B receives messages now, why?

### Answer

This is to do with [prefetch buffers](Community/FAQ/Using Apache ActiveMQCommunity/FAQ/Using Apache ActiveMQ/Community/FAQ/Using Apache ActiveMQ/what-is-the-prefetch-limit-for.md).

ActiveMQ will try and deliver a number of messages to each consumer as soon as possible to achieve maximum throughput. That means that each consumer typically has 100-1000 messages in RAM ready to be processed so that there is no latency waiting for another message to arrive under periods of high throughput of messages.

The problem is, if consumer A is set with a prefetch value of >= 100 then it will receive all of the messages before consumer B starts. Then when B starts there are actually no messages available to be dispatched to B (since they are all dispatched to A) until either

*   new messages are sent to the queue
*   consumer A stops or its JVM dies

The solution to this problem is to configure the pre-fetch value to something smaller - such as 1, start the consumers together or publish the messages after the consumers have started.

You can also [change the dispatch policy](Community/FAQ/Using Apache ActiveMQCommunity/FAQ/Using Apache ActiveMQ/Community/FAQ/Using Apache ActiveMQ/how-do-i-change-dispatch-policy.md) to ensure round robin dispatch.

To help diagnose these kinds of issues, try [JMX](Features/jmx.md) or the [Web Console](ToolsTools/Tools/web-console.md)

### See also

*   [How do I change dispatch policy](Community/FAQ/Using Apache ActiveMQCommunity/FAQ/Using Apache ActiveMQ/Community/FAQ/Using Apache ActiveMQ/how-do-i-change-dispatch-policy.md)
*   [JMX](Features/jmx.md)
*   [Web Console](ToolsTools/Tools/web-console.md)

