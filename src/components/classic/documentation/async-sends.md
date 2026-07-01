---
layout: default_md
title: Async Sends 
title-class: page-title-classic
type: classic
---

[Features](features) > [Message Dispatching Features](message-dispatching-features) > [Async Sends](async-sends)


Background
----------

ActiveMQ Classic supports sending messages to a broker in sync or async mode. The mode used has a huge impact in the latency of the send call. Since latency is typically a huge factor in the throughput that can achieved by producer, using async sends can increase the performance of your system dramatically.

The good news is that ActiveMQ Classic sends message in async mode by default in several cases. It is only in cases where the JMS specification required the use of sync sending that we default to sync sending. The cases that we are forced to send in sync mode are when persistent messages are being sent outside of a transaction.

If you are not using transactions and are sending persistent messages, then each send is synch and blocks until the broker has sent back an acknowledgement to the producer that the message has been safely persisted to disk. This ack provides that guarantee that the message will not be lost but it also costs a huge latency penalty since the client is blocked.

Many high performance applications are designed to tolerate a small amount of message loss in failure scenarios. If your application has been designed in this fashion, you can enable the use of async sends to increase throughput even when using persistent messages.

### Configuring Async Send using a Connection URI

You can use the [Connection Configuration URI](connection-configuration-uri) to configure async sends as follows
```
cf = new ActiveMQConnectionFactory("tcp://locahost:61616?jms.useAsyncSend=true");
```

### Configuring Async Send at the ConnectionFactory Level

You can enable this feature on the [ActiveMQConnectionFactory](http://incubator.apache.org/activemq/maven/activemq-core/apidocs/org/apache/activemq/ActiveMQConnectionFactory.html) object using the property.
```
((ActiveMQConnectionFactory)connectionFactory).setUseAsyncSend(true);
```

### Configuring Async Send at the Connection Level

Configuring the dispatchAsync setting at this level overrides the settings at the connection factory level.

You can enable this feature on the [ActiveMQConnection](http://incubator.apache.org/activemq/maven/activemq-core/apidocs/org/apache/activemq/ActiveMQConnection.html) object using the property.
```
((ActiveMQConnection)connection).setUseAsyncSend(true);
```

### JMS 2.0 CompletionListener (since 6.2.0)

JMS 2.0 introduced a standard API for asynchronous sending via `CompletionListener`. 
When you call `send(message, completionListener)`, the provider notifies your `CompletionListener` once the send completes (or fails).

```java
producer.send(message, new CompletionListener() {
    @Override
    public void onCompletion(Message message) {
        // message was sent successfully
    }

    @Override
    public void onException(Message message, Exception exception) {
        // send failed
    }
});
```

**Implementation note:** the current ActiveMQ Classic implementation performs the send synchronously and then invokes the `CompletionListener` callback on a separate thread. 
This is explicitly permitted by the JMS 2.0 specification (section 7.3). 
Application code that follows the specification will remain compatible if a future version implements fully asynchronous sending.

For high-throughput asynchronous sending outside the JMS specification, the ActiveMQ-specific `useAsyncSend` flag described above remains available and provides true non-blocking behaviour.

See also the [JMS 2.0 implementation status](jms2) page for the full list of supported features.

### Also see

*   [Connection Configuration URI](connection-configuration-uri)
*   [Should I use transactions](should-i-use-transactions)
*   [Consumer Dispatch Async](consumer-dispatch-async)
*   [JMS 2.0 Support](jms2)

