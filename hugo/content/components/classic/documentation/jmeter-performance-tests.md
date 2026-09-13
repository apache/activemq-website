---
title: JMeter Performance Tests
layout: classic-doc
---

## JMeter Performance Tests

You can use JMeter to test the performance of your ActiveMQ Classic Server. Please refer to the [JMeter site](http://jmeter.apache.org/) for detailed instructions on using this software.

### Building a Test Plan

**For a Producer Sampler:**
1. Add a Thread Group.
2. Add the producer sampler "Producer Sampler" from the Sampler menu.
3. Highlight the Producer Sampler then right click to add the producer listener "View Producer Results" from the Listener menu.
4. Go to the Thread Group element and set the Number of Threads, Ramp-Up Period and Loop Count to 1.

**For a Consumer Sampler:**
1. Add a Thread Group.
2. Add the consumer sampler "Consumer Sampler" from the Sampler menu.
3. Highlight the Consumer Sampler then right click to add the consumer listener "View Consumer Results" from the Listener menu.
4. Go to the Thread Group element and set the Number of Threads, Ramp-Up Period and Loop Count to 1.

### The JMeter Performance Test Module

**1. JMeter Producer Sampler**

The Producer Sampler sends messages to an ActiveMQ Classic Server. Parameters:
- Server URL (e.g. `tcp://localhost:61616`)
- Duration (min)
- Ramp Up (min)
- No. of Producer
- No. of Subject (must be ≤ No. of Producer)
- Message Size (bytes)
- Delivery Mode - Default is Non-Persistent
- Messaging Domain - Default is Topic
- Message Interval - Default/Custom

**2. JMeter Producer Listener**

Provides statistics with the number of messages sent and average messages per second.

**3. JMeter Consumer Sampler**

Parameters:
- Server URL (e.g. `tcp://localhost:61616`)
- Duration (min)
- Ramp Up (min)
- No. of Consumer
- No. of Subject (must be ≤ No. of Consumer)
- Delivery Mode - Default is non-Durable
- Messaging Domain - Default is Topic

**4. JMeter Consumer Listener**

Provides statistics with the number of messages received and average messages per second.
