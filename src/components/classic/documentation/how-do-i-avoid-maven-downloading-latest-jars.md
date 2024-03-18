---
layout: default_md
title: How do I avoid Maven downloading latest jars 
title-class: page-title-classic
type: classic
---

 [FAQ](faq) > [General](general) > [How do I avoid Maven downloading latest jars](how-do-i-avoid-maven-downloading-latest-jars)


You can use the -o switch (for offline mode) to avoid maven auto-downloading new snapshot jars (e.g. the Geronimo jars at the time of writing).
```
maven -o
```
or to run a server go to the \\assembly module and run
```
maven -o server
```