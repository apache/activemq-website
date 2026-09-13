---
title: Configuring ActiveMQ-CPP
layout: cms-page
---

All configuration is achieved via URI-encoded parameters, either on the connection or destinations.

### Connection URI Parameters

##### Example Configuration

```
cf = new ActiveMQConnectionFactory(
    "tcp://localhost:61616?wireFormat=openwire&wireFormat.tightEncodingEnabled=true");
```

For a more reliable connection use the Failover Transport:

```
cf = new ActiveMQConnectionFactory(
    "failover://(tcp://localhost:61616,tcp://anotherhost:61616)?connection.useAsyncSend=true");
```

### Protocol Options

| Option | Description |
|---|---|
|tcp|Uses TCP/IP Sockets to connect to the broker.|
|ssl|Uses OpenSSL to secure TCP/IP sockets. (Since v3.2.0)|
|failover|Composite transport; reconnects to the next URI on failure.|

#### Socket Options

| Option | Default | Description |
|---|---|---|
|inputBufferSize|10000|Bytes in the buffered input stream's buffer|
|outputBufferSize|10000|Bytes in the buffered output stream's buffer|
|soLinger|0|Socket SOLinger value|
|soKeepAlive|false|Socket SOKeepAlive value|
|soReceiveBufferSize|-1|Socket receive buffer (-1 = OS default)|
|soSendBufferSize|-1|Socket send buffer (-1 = OS default)|
|soConnectTimeout|-1|Connection timeout in microseconds (-1 = OS default)|
|tcpNoDelay|true|Sets TCP_NODELAY|

#### Failover Transport Options

| Option | Default | Description |
|---|---|---|
|initialReconnectDelay|10|Wait time (ms) before first reconnect attempt|
|maxReconnectDelay|30000|Maximum wait between reconnect attempts|
|useExponentialBackOff|true|Grow delay on each retry up to maxReconnectDelay|
|maxReconnectAttempts|0|Max reconnect attempts (0 = forever)|
|randomize|true|Connect to broker URIs in random order|
|timeout|-1|How long a blocked send waits before failing (-1 = forever)|

#### Connection Options

| Option | Default | Description |
|---|---|---|
|connection.sendTimeout|0|Time to wait on sends for a response (0 = forever)|
|connection.useAsyncSend|false|Force async sends (may lose messages on crash)|
|connection.alwaysSyncSend|false|Force all sends to be synchronous|
|connection.useCompression|false|Compress message bodies with ZLib (Since v3.2.0)|
|connection.dispatchAsync|true|Broker dispatches messages asynchronously (Since v3.2.0)|

#### Wire Format Options

| Option | Default | Description |
|---|---|---|
|wireFormat|openwire|Wire format: `stomp` or `openwire`|
|wireFormat.tightEncodingEnabled|false|Optimize wire size over CPU|
|wireFormat.maxInactivityDuration|30000|Max inactivity before socket considered dead (ms)|

### Destination URI Parameters

##### Example Configuration

```
d = session->createTopic("com.foo?consumer.prefetchSize=2000&consumer.noLocal=true");
```

#### General Options

| Option | Default | Description |
|---|---|---|
|consumer.prefetchSize|1000|Number of messages to prefetch|
|consumer.noLocal|false|Suppress messages from this connection|
|consumer.dispatchAsync|false|Broker dispatches asynchronously to this consumer|
|consumer.selector|null|JMS Selector|
|consumer.exclusive|false|Exclusive consumer|
