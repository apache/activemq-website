---
layout: default_md
title: How does JMS compare with email 
title-class: page-title-classic
type: classic
---

 [FAQ](faq) > [JMS](jms) > [How does JMS compare with email](how-does-jms-compare-with-email)


Certainly they both do similar things. The main difference between them is their history and design criteria.

JMS has a bunch of different qualities of service (durable v non-durable, queue v topic) designed for very high performance messaging with low latency together with reliability. Email is designed for connectivitiy on the web. So they have different design trade offs. e.g. its not a big deal to get multiple copies of an email (which I get fairly often if I loose a connection with an email server over POP for example). It would be a major disaster to get 2 copies of the "remove $1000 from my bank account" messages ![(smile)](https://cwiki.apache.org/confluence/s/en_GB/5997/6f42626d00e36f53fe51440403446ca61552e2a2.1/_/images/icons/emoticons/smile.png)

The main reasons for using JMS is performance (throughput & latency), together with support for transactions & XA together with avoiding duplicates and message loss.

