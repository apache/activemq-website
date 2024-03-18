---
layout: default_md
title: Why do I not receive messages on my durable topic subscription 
title-class: page-title-classic
type: classic
---

 [FAQ](faq) > [Errors](errors) > [Why do I not receive messages on my durable topic subscription](why-do-i-not-receive-messages-on-my-durable-topic-subscription)


You follow these steps

1.  Create a durable topic subscription
2.  Kill the consumer
3.  Publish some messages to the topic
4.  Restart the subscriber

But you don't receive the messages?

### Fix

To be able to deliver messages to offline durable topic subscribers you must mark the message as being persistent. To do this set the PERSISTENT_DELIVERY mode on the MessageProducer as described [here](how-do-i-make-messages-durable).

