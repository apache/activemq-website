---
layout: default_md
title: How does ActiveMQ Classic compare to Mantaray 
title-class: page-title-classic
type: classic
---

 [FAQ](faq) > [General](general) > [How does ActiveMQ Classic compare to Mantaray](how-does-activemq-classic-compare-to-mantaray)


We are obviously biased, and will tell you "just use ActiveMQ Classic!" ![(smile)](https://cwiki.apache.org/confluence/s/en_GB/5997/6f42626d00e36f53fe51440403446ca61552e2a2.1/_/images/icons/emoticons/smile.png) But Mantaray is an OK JMS provider. The interesting thing about MantaRay is it can support a peer-based network, just as ActiveMQ Classic does with its [peer transport](peer-transport-reference).

We [benchmark](performance) against Mantaray and other open source JMS providers and in our tests (in which we try to be as objective as possible) ActiveMQ Classic exhibits higher performance in most scenarios.

A peer transport can be useful when using non-persistent messaging. But if you want persistent messaging you often want to use a federated network with certain brokers on the network being the persistence brokers (so you can backup the file systems etc).

The ideal topology often depends on your requirements and how you want to manage persistence and deal with hardware failures such as with [MasterSlave](masterslave).

