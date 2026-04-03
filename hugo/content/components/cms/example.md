---
title: ActiveMQ-CPP Example
layout: cms-page
---

The example below creates two classes — `HelloWorldConsumer` and `HelloWorldProducer` — each running in its own thread. The Producer sends `TextMessage` objects to the broker; the Consumer receives them asynchronously.

```cpp
#include <activemq/library/ActiveMQCPP.h>
#include <activemq/core/ActiveMQConnectionFactory.h>
#include <cms/Connection.h>
#include <cms/Session.h>
#include <cms/TextMessage.h>
#include <cms/MessageListener.h>
#include <decaf/lang/Thread.h>
#include <decaf/lang/Runnable.h>
#include <decaf/util/concurrent/CountDownLatch.h>
#include <iostream>
#include <memory>

using namespace activemq::core;
using namespace decaf::util::concurrent;
using namespace decaf::lang;
using namespace cms;
using namespace std;

class HelloWorldProducer : public Runnable {
    string brokerURI;
    int numMessages;
    bool useTopic;
public:
    HelloWorldProducer(const string& uri, int n, bool topic = false)
        : brokerURI(uri), numMessages(n), useTopic(topic) {}

    virtual void run() {
        auto_ptr<ConnectionFactory> cf(
            ConnectionFactory::createCMSConnectionFactory(brokerURI));
        auto_ptr<Connection> connection(cf->createConnection());
        connection->start();
        auto_ptr<Session> session(connection->createSession(Session::AUTO_ACKNOWLEDGE));
        auto_ptr<Destination> dest(useTopic
            ? session->createTopic("TEST.FOO")
            : session->createQueue("TEST.FOO"));
        auto_ptr<MessageProducer> producer(session->createProducer(dest.get()));
        producer->setDeliveryMode(DeliveryMode::NON_PERSISTENT);
        for (int i = 0; i < numMessages; ++i) {
            auto_ptr<TextMessage> msg(session->createTextMessage("Hello world!"));
            producer->send(msg.get());
        }
        connection->close();
    }
};

class HelloWorldConsumer : public MessageListener, public Runnable {
    string brokerURI;
    int numMessages;
    bool useTopic;
    CountDownLatch latch;
    CountDownLatch doneLatch;
public:
    HelloWorldConsumer(const string& uri, int n, bool topic = false)
        : brokerURI(uri), numMessages(n), useTopic(topic), latch(1), doneLatch(n) {}

    void waitUntilReady() { latch.await(); }

    virtual void run() {
        auto_ptr<ConnectionFactory> cf(
            ConnectionFactory::createCMSConnectionFactory(brokerURI));
        auto_ptr<Connection> connection(cf->createConnection());
        connection->start();
        auto_ptr<Session> session(connection->createSession(Session::AUTO_ACKNOWLEDGE));
        auto_ptr<Destination> dest(useTopic
            ? session->createTopic("TEST.FOO")
            : session->createQueue("TEST.FOO"));
        auto_ptr<MessageConsumer> consumer(session->createConsumer(dest.get()));
        consumer->setMessageListener(this);
        latch.countDown();
        doneLatch.await(30000);
        connection->close();
    }

    virtual void onMessage(const Message* message) {
        const TextMessage* tm = dynamic_cast<const TextMessage*>(message);
        if (tm) cout << "Received: " << tm->getText() << endl;
        doneLatch.countDown();
    }
};

int main() {
    activemq::library::ActiveMQCPP::initializeLibrary();
    string brokerURI = "failover:(tcp://localhost:61616)";
    HelloWorldProducer producer(brokerURI, 2000, true);
    HelloWorldConsumer consumer(brokerURI, 2000, true);
    Thread consumerThread(&consumer);
    consumerThread.start();
    consumer.waitUntilReady();
    Thread producerThread(&producer);
    producerThread.start();
    producerThread.join();
    consumerThread.join();
    activemq::library::ActiveMQCPP::shutdownLibrary();
}
```
