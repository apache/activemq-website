---
title: STOMP Support
layout: cms-page
---

[STOMP](https://stomp.github.io/) is a simple text-based protocol supported by the ActiveMQ broker that allows communication from a variety of clients (C++, Java, .NET, Ruby, Python, etc).

### Message Properties in STOMP CMS

Since STOMP is strictly text-based, it does not support typed message properties. A property sent as an integer may be read as a string, integer, short, long, etc. The underlying wire value is always a string.

### Temporary Topics and Queues

The STOMP protocol does not support temporary topics or queues. Calling `createTemporaryTopic` or `createTemporaryQueue` on a `cms::Session` throws a `NotSupportedException`. Use standard Topics and Queues for request/reply semantics instead.

### Selectors with STOMP

STOMP allows only one session per connection. ActiveMQ-CPP creates virtual sessions, but only the first session's selector has any effect — subsequent sessions ignore any selector passed at creation time.

### STOMP and Failover

STOMP v1.0 lacks the protocol features needed for reliable Failover. Until STOMP v1.1 support is added, combining the STOMP transport with the Failover transport is not recommended.
