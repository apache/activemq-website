---
layout: default_md
title: Reporting Issues
title-class: page-title-main
type: main
---
If you find a bug please raise a new issue in the appropriate tracker. If you're not quite sure you're hitting a bug consider [contacting us](contact) to get some clarity.

Whenever you are reporting a problem please be sure to include as much information as possible; the more we know the more chance of a quicker resolution. Here's a few items to consider:

* Which version of the component are you using on which Java platform?
* Any particular application/web server or container being used? If so what version?
* Stack traces generally really help! If in doubt include the whole thing. Fften exceptions get wrapped in other exceptions and the exception right near the bottom explains the actual error, not the first few lines at the top. It's very easy for us to skim-read past unnecessary parts of a stack trace.
* Log output can be useful too; sometimes enabling `DEBUG` logging can help.
* Your code & configuration files are often useful.

We can help you much quicker if you try the following:

* Provide us with a JUnit test case that demonstrates your issue. For example, if you think you've found a bug can you create a test case to demonstrate the bug?
* [Send a PR](contributing) to fix the bug!
* For memory leaks or performance related issues, if you can run a profiler on your test case and attach the output as a file (or zipped file if it's huge) to the issue we can normally fix things much faster. e.g. you could run [jmap](https://docs.oracle.com/javase/7/docs/technotes/tools/share/jmap.html)/[jhat](https://docs.oracle.com/javase/7/docs/technotes/tools/share/jhat.html), JProfiler or YourKit on your code and send us the output. To find memory leaks it's quicker to resolve if you can tell us what classes are taking up all of the RAM; we can normally figure out what's wrong from that.

|Component|Issue Tracker|
|---|---|
|Classic|[https://issues.apache.org/jira/projects/AMQ](https://issues.apache.org/jira/projects/AMQ)|
|Artemis|[https://issues.apache.org/jira/projects/ARTEMIS](https://issues.apache.org/jira/projects/ARTEMIS)|
|NMS|[https://issues.apache.org/jira/projects/AMQNET](https://issues.apache.org/jira/projects/AMQNET)|
|CMS|[https://issues.apache.org/jira/projects/AMQCPP](https://issues.apache.org/jira/projects/AMQCPP)|

#### Using the issue tracker

Before you can raise an issue in the issue tracker you need to [create an account](https://issues.apache.org/jira/secure/Signup!default.jspa).

If you want to be the "assignee" of an issue you need to be in the list of `activemq-developers` on the issue tracker. To join the group please mail the [dev mailing list](mailto:dev@activemq.apache.org) with the email address you used to register with the issue tracker and we'll add you to the group.

#### Contributing Your Own Fixes

Want to do some hacking on ActiveMQ? Try surfing to our issue trackers for open issues or features that need to be implemented. Take ownership of an issue and try fix it. See the article on [contributing](contributing) for more details on how to get the code.

If you can create a JUnit test case then your issue is more likely to be resolved quicker. Then we can add your issue to the test suite and then we'll know when its really fixed and we can ensure that the problem **stays fixed** in future releases.

#### ActiveMQ Issues Mailing List

This mailing list is automatically notified when JIRA issues are created and updated.

Subscribe|[issues-subscribe@activemq.apache.org](mailto:issues-subscribe@activemq.apache.org)
Unsubscribe|[issues-unsubscribe@activemq.apache.org](mailto:issues-unsubscribe@activemq.apache.org)
Apache Archive|[http://mail-archives.apache.org/mod_mbox/activemq-issues/](http://mail-archives.apache.org/mod_mbox/activemq-issues/)
Mark Mail Archive|[http://activemq.markmail.org/search/list:org.apache.activemq.issues](http://activemq.markmail.org/search/list:org.apache.activemq.issues)

#### Commercial Support <a class="anchor" name="commercial-support"></a>

This is an open source project, so the amount of time we have available to help resolve your issue is often limited as all help is provided on a volunteer basis. If you want to get priority help, need to get up to speed quickly, require some training or mentoring, or need full 24 x 7 production support you should contact a commercial company specializing in ActiveMQ support such as...

* [apifocal](https://apifocal.com) is a Professional Services company. Headquartered near Washington, DC, USA, APIfocal provides consulting and training for leveraging the Apache Integration stack and commercial ESBs at large scale, adding automation and devops capabilities.
* [Amazon Web Services](https://aws.amazon.com/) provides [Amazon MQ](https://aws.amazon.com/amazon-mq/), a managed message broker service for Apache ActiveMQ "Classic" in the cloud. Amazon MQ manages the work involved in setting up an ActiveMQ message broker, from provisioning the infrastructure capacity you request–including server instances and storage–to installing the broker software itself. Once your broker is up and running, Amazon MQ automates common administrative tasks such as patching the operating system and ActiveMQ software
* [Media Driver](http://mediadriver.com) provides consulting services and management tools for Apache ActiveMQ and the Apache Integration stack for both the commercial and public sector.  We bring a full suite of project delivery services including business and technical analysis, proof of concepts, architectural guidance, best practice integration, and project management.  Media Driver offers training classes for developers and administrators, as well as middleware management software.
* [HYTE](https://hyte.io/activemq-support/) Under the Apache License, HYTE offers HYTE MQ, an Open Source package of Apache ActiveMQ which provides enterprises a single distribution to support all DevOps pipelines and allows deployment in any environment: containers, cloud and on-premise. HYTE MQ is pre-configured with deployment and consulting best practices to ensure stability and ease of maintenance.  HYTE’s commercial offerings include: HYTE Console which provides a self-service, multi-tenant management capability across ActiveMQ and IBM MQ deployments, numerous production support packages, multi-platform message bridging, and consulting services.
* [OpenLogic](http://www.openlogic.com/) by Perforce has a team of ActiveMQ experts ready to help you, providing  24/7 support for troubleshooting issues and outages, consulting on architecture and design, instructor-led hands-on training. In addition to supporting many Apache packages OpenLogic’s enterprise architects have expertise in over 400 open source packages.
* [Red Hat](https://www.redhat.com/en/technologies/jboss-middleware/amq) offers AMQ, a supported distribution of Apache ActiveMQ that includes enterprise developer and production support as well as training and consultancy for enterprise deployments.
* [Savoir Technologies, Inc](http://www.savoirtech.com) provides enterprise consulting, training and support for ActiveMQ "Classic", ActiveMQ Artemis, and a host of other Apache service containers. Savoir can provide best practice mentoring for developing with ActiveMQ and ActiveMQ Artemis, as well as architectural/design reviews, troubleshooting and SOA infrastructure implementations. Savoir's staff includes some of the contributors of ActiveMQ and ActiveMQ Artemis who are on the ground consulting and are familiar with real world implementations and issues.
* [Total Transaction Management (TTM)](http://www.ttmsolutions.com/) provides ActiveMQ consulting and support, as well as security and [monitoring](http://www.ttmsolutions.com/Transactional_Software_Solutions/Active_Monitor_AMon.php/) add-on products and [reference guide](http://www.ttmsolutions.com/Apache_Software/ActiveMQ_Reference_Guide.php) for ActiveMQ.
* [Tomitribe](http://tomitribe.com) are experts in Tomcat and ActiveMQ integration, champions of Open Source and Java EE.  Tomitribe offers consulting, training and support for TomEE, Tomcat, ActiveMQ, CXF and more.
* [TytoEASE](http://www.tytoease.com/activemq) offers support, consulting and training on enterprise ready open source projects including ActiveMQ.   Support offerings are at three levels with guaranteed SLA's. The company's consulting work is short term to help troubleshoot, fine-tune, do architectural reviews or help with initial design.  TytoEASE's focus is on the Enterprise with how customers integrate open source with their current technologies.
* [Yupiik](https://www.yupiik.com) contributes and commits to the Apache ActiveMQ project. Provides consulting, training and support for Apache ActiveMQ and related projects like Apache Karaf, Apache Camel, Apache Kafka, Apache Unomi.
