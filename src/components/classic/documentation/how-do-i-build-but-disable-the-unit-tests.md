---
layout: default_md
title: How do I build but disable the unit tests 
title-class: page-title-classic
type: classic
---

 [FAQ](faq) > [General](general) > [How do I build but disable the unit tests](how-do-i-build-but-disable-the-unit-tests)


How do I build but disable the unit tests
-----------------------------------------

The test cases in ActiveMQ Classic can take a very long time to run!

To disable this you can try the following
```
mvn install -Dmaven.test.skip=true
```