---
title: JMeter System Tests
layout: classic-doc
---

## JMeter System Tests

You can use JMeter to test your ActiveMQ Classic Server. Please refer to the [JMeter site](http://jmeter.apache.org/) for detailed instructions on using this software.

The test checks for duplicate messages and the order of messages received.

### Building a Test Plan

**For a Producer System Test Sampler:**
1. Add a Thread Group.
2. Add the producer sampler "Producer System Test Sampler" from the Sampler menu.
3. Go to the Thread Group element and set the Number of Threads, Ramp-Up Period and Loop Count to 1.

**For a Consumer Sampler:**
1. Add the consumer sampler "Consumer System Test Sampler" from the Sampler menu.
2. Highlight the Consumer Sampler then right click to add the consumer listener "View Producer System Test Results" from the Listener menu.

### The JMeter System Test Module

**1. JMeter Producer System Test Sampler**

A JMeter Sampler tells JMeter to send requests to the server. The Producer System Test Sampler will send messages to an ActiveMQ Classic Server.

Parameters:
- Server URL - defines the server url (e.g. `tcp://localhost:61616`)
- No. of Producer - The number of Producers that would be sending the message
- No. of Subject - The number of Subjects to create and send (must be ≤ No. of Producer)
- Number of Message - The number of messages to send
- Delivery Mode - Default is Non-Persistent
- Messaging Domain - Default is Topic

**2. JMeter Consumer System Test Sampler**

Parameters:
- Server URL - defines the server url (e.g. `tcp://localhost:61616`)
- No. of Consumer - The number of Consumers
- No. of Subject - The number of Subjects (must be ≤ No. of Consumer)
- Delivery Mode - Default is non-Durable
- Messaging Domain - Default is Topic

**3. JMeter Producer System Test Listener**

Provides the Consumer Identifier, Producer Name, Message, and Message Count for each received message.
