---
title: Integration Tests
layout: classic-doc
---

## Integration Tests

The Integration Tests validate that the ActiveMQ Classic Resource Adapter operates correctly when deployed with a J2EE application running in an Application Server such as Apache Geronimo.

### Getting Ready

The instructions on this page reference a few directories that you will need to substitute appropriate values for:

- `activemq-core` is where your ActiveMQ Classic source code is located.
- `geronimo-home` is where your Geronimo home directory is located.

### Building the ActiveMQ Classic Resource Adapter

The ActiveMQ Classic Resource Adapter allows a J2EE Application Server to provide transaction management, connection pooling and security to ActiveMQ Classic connections when used by EJBs.
```
cd activemq-ra
maven rar:install-snapshot
```

### Building the Integration Test EJB Module
```
cd systest/itests/ejb
maven
```

### Building and Deploying the Integration Test EAR Module
```
cd systest/itests/ear
maven -Dgeronimo.home=geronimo-home
```

### Starting Geronimo with the Integration Test EAR Configuration

In a separate console:
```
cd geronimo-home
java -jar bin/server.jar org/activemq/ear/itest
```

### Building and Running the Integration Tests
```
cd systest/itests/client
maven
```
