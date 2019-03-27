---
layout: default_md
title: How do I build but disable the unit tests 
title-class: page-title-activemq5
type: activemq5
---

 [FAQ](faq) > [General](general) > [How do I build but disable the unit tests](how-do-i-build-but-disable-the-unit-tests)


How do I build but disable the unit tests
-----------------------------------------

The test cases in ActiveMQ can take a very long time to run!

To disable this you can try the following
```
mvn install -Dmaven.test.skip=true
```