---
title: How does ConnectionFactory relate to the Broker
layout: classic-doc
---



How does ConnectionFactory relate to the Broker?
------------------------------------------------

The ConnectionFactory is a JMS specification client side interface for creating connections to a JMS broker. The Broker is a service on the network or [embedded in the same JVM](how-do-i-embed-a-broker-inside-a-connection) which provides the message provider. So think of the ConnectionFactory as the client API for sending and receiving messages and the broker is a server side implementation.

### See Also

*   [How do I create new destinations](how-do-i-create-new-destinations)
*   [How do I embed a Broker inside a Connection](how-do-i-embed-a-broker-inside-a-connection)
*   [What are administered objects](what-are-administered-objects)

