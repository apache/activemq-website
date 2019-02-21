---
layout: default_md
title: Load Testing with Camel 
title-class: page-title-activemq5
type: activemq5
---

[Features](features) > [Performance](performance) > [Load Testing with Camel](load-testing-with-camel)


Load Testing with Camel
-----------------------

It is preferable at the time of writing to check out the source of ActiveMQ and Camel and perform local builds first.

Then run a broker either via the **bin/activemq** script or you could be untar/unzip the **assembly/target/apache-activemq**.tar.gz* file first then run its **bin/activemq** script.

Now to run a load test type
```
activemq/activemq-camel-loadtest> mvn test -Dtest=LocalBrokerParallelProducerLoadTest
```
If you want to tinker with the configuration of ActiveMQ and Camel then edit the LocalBrokerParallelProducerLoadTest-context.xml file.

