---
title: How do I build but disable the unit tests
layout: classic-doc
---



How do I build but disable the unit tests
-----------------------------------------

The test cases in ActiveMQ Classic can take a very long time to run!

To disable this you can try the following
```
mvn install -Dmaven.test.skip=true
```