Apache ActiveMQ ™ -- Destination Options 

[Features](../../features.md) > [Destination Features](../../Features/destination-features.md) > [Destination Options](../../Features/Destination Features/destination-options.md)


### Background

Destination Options are a way to provide extended configuration options to a JMS consumer without having to extend the JMS API. The options are encoded using URL query syntax in the destination name that the consumer is created on.

### Consumer Options

Option Name

Default Value

Description

`consumer.dispatchAsync`

`true`

Should the broker [dispatch messages asynchronously](../../Features/Consumer Features/consumer-dispatch-async.md) to the consumer.

`consumer.exclusive`

`false`

Is this an [Exclusive Consumer](../../Features/Consumer Features/exclusive-consumer.md).

`consumer.maximumPendingMessageLimit`

`0`

Use to control if messages for non-durable topics are dropped if a [slow consumer](../../Features/Consumer Features/slow-consumer-handling.md) situation exists.

`consumer.noLocal`

`false`

Same as the **`noLocal`** flag on a Topic consumer. Exposed here so that it can be used with a queue.

`consumer.prefetchSize`

`n/a`

The number of message the consumer will [prefetch](../../FAQ/Using Apache ActiveMQ/what-is-the-prefetch-limit-for.md).

`consumer.priority`

`0`

Allows you to configure a [Consumer Priority](../../Features/Consumer Features/consumer-priority.md).

`consumer.retroactive`

`false`

Is this a [Retroactive Consumer](../../Features/Consumer Features/retroactive-consumer.md).

`consumer.selector`

`null`

JMS Selector used with the consumer.

### Example

queue = new ActiveMQQueue("TEST.QUEUE?consumer.dispatchAsync=false&consumer.prefetchSize=10");
consumer = session.createConsumer(queue);

