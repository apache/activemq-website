---
layout: default_md
title: Why do I not get all of the messages I sent 
title-class: page-title-classic
type: classic
---

 [FAQ](faq) > [Errors](errors) > [Why do I not get all of the messages I sent](why-do-i-not-get-all-of-the-messages-i-sent)


### **For ActiveMQ Classic 3.x/4.x**

As [Matt reported](http://forums.logicblaze.com/posts/list/0/14.page#37) its possible that there is a race condition in your application; are you sure you had created your consumer and called start() on the JMS Connection before the producer started publishing messages?

Another option if startup race conditions are a problem is to use durable messaging.

