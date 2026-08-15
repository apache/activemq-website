---
title: Handling Advisory Messages
layout: cms-page
---

ActiveMQ supports advisory messages that let you watch the system using regular CMS messages:

- See consumers, producers and connections starting and stopping
- See temporary destinations being created and destroyed
- Get notified when messages expire on topics and queues
- Observe brokers sending messages to destinations with no consumers

### Subscribing to Advisory Topics

Subscribe to an advisory topic the same way as any other destination. Use the correct topic name for the advisory you want:

| Advisory Topic | Description |
|---|---|
|ActiveMQ.Advisory.Connection|Connection start & stop|
|ActiveMQ.Advisory.Producer.Queue|Producer start & stop on a Queue|
|ActiveMQ.Advisory.Producer.Topic|Producer start & stop on a Topic|
|ActiveMQ.Advisory.Consumer.Queue|Consumer start & stop on a Queue|
|ActiveMQ.Advisory.Consumer.Topic|Consumer start & stop on a Topic|

For example, to watch for producers on `TOPIC.FOO`:

```cpp
auto_ptr<cms::Topic> advisories(
    session->createTopic("ActiveMQ.Advisory.Producer.Topic.TOPIC.FOO"));
auto_ptr<cms::MessageConsumer> consumer(session->createConsumer(advisories.get()));
consumer->setMessageListener(this);
```

### Processing Advisory Messages

All advisory messages have CMS type `"Advisory"`. Check `getCMSType()` and then inspect message properties:

```cpp
void onMessage(const cms::Message* message) {
    if (message->getCMSType() == "Advisory") {
        if (message->propertyExists("consumerCount")) {
            string count = message->getStringProperty("consumerCount");
            cout << "Consumers: " << count << endl;
        }
    }
}
```

### Composite Advisory Subscriptions

Subscribe to multiple advisory topics in one consumer using a comma-separated name:

```cpp
auto_ptr<cms::Topic> advisories(session->createTopic(
    "ActiveMQ.Advisory.TempTopic,ActiveMQ.Advisory.TempQueue"));
auto_ptr<cms::MessageConsumer> consumer(session->createConsumer(advisories.get()));
consumer->setMessageListener(this);
```

### Accessing Embedded Command Objects

Some advisories carry an embedded command object accessible via `ActiveMQMessage::getDataStructure()`:

```cpp
const ActiveMQMessage* amqMsg = dynamic_cast<const ActiveMQMessage*>(message);
if (amqMsg && amqMsg->getDataStructure() != NULL) {
    Pointer<DestinationInfo> info =
        amqMsg->getDataStructure().dynamicCast<DestinationInfo>();
    if (info->getOperationType() == ActiveMQConstants::DESTINATION_ADD_OPERATION) {
        cout << "Created: " << info->getDestination()->getPhysicalName() << endl;
    }
}
```
