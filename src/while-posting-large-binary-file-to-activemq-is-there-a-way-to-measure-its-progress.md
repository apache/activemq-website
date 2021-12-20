---
layout: default_md
title: While posting large binary file to activeMQ, is there a way to measure its progress 
title-class: page-title-activemq5
type: activemq5
---

 [FAQ](faq) > [Using Apache ActiveMQ](using-apache-activemq) > [While posting large binary file to activeMQ, is there a way to measure its progress](while-posting-large-binary-file-to-activemq-is-there-a-way-to-measure-its-progress)


If you are using the [JMS Streams](jms-streams) feature with 4.x of ActiveMQ you'd be able to watch the progress in a JMX console or HermesJMS by looking at the queue depths; each large 1Gb file is split into individual JMS messages so you can monitor queue depth etc to track progress

