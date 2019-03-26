Apache ActiveMQ ™ -- Support 

[Community](community.md) > [Support](CommunityCommunity/Community/support.md)


Getting Help
------------

If you are experiencing problems using ActiveMQ then please report your problem to our [Issue Tracker](http://issues.apache.org/activemq/browse/AMQ). You may also find it useful to discuss your issues with the community on the [Discussion Forums](CommunityCommunity/Community/discussion-forums.md) or join one of our [Mailing Lists](Community/mailing-lists.md).

*   [Issue Tracker](https://issues.apache.org/jira/browse/AMQ)
*   [Discussion Forums](CommunityCommunity/Community/discussion-forums.md)
*   [Mailing Lists](Community/mailing-lists.md)
*   [FAQ](CommunityCommunity/Community/faq.md)

### How to get help

Before you report a problem you might want to read the [FAQ](CommunityCommunity/Community/faq.md).  
Whenever you are reporting a problem please be sure to include as much information as possible; the more we know the more chance of a quicker resolution.

*   Which [version](http://activemq.apache.orgOverviewOverview/Overview/download.md) of ActiveMQ
*   What platform of Java (e.g., Java SE 6 with JRE/[JDK](#) 1.6.0 or J2SE 5 with JRE/[JDK](#) 1.5.0)
*   Any particular application/web server or container being used - if so what version?
*   Stack traces generally really help! If in doubt include the whole thing; often exceptions get wrapped in other exceptions and the exception right near the bottom explains the actual error, not the first few lines at the top. It's very easy for us to skim-read past unnecessary parts of a stack trace.
*   Log output (e.g., `data/activemq.log`) can be useful too; sometimes [enabling DEBUG logging](Community/FAQ/Using Apache ActiveMQCommunity/FAQ/Using Apache ActiveMQ/Community/FAQ/Using Apache ActiveMQ/how-do-i-change-the-logging.md) can help
*   Your code & configuration files are often useful

### How to get help faster

We can help you much quicker if you try the following

*   Provide us with a JUnit test case that demonstrates your issue. e.g. if you think you've found a bug, can you create a test case to demonstrate the bug?
*   [Submit a patch](CommunityCommunity/Community/contributing.md) fixing the bug! (We also buy you beer when we meet you if you submit bug fixes ![(smile)](https://cwiki.apache.org/confluence/s/en_GB/5997/6f42626d00e36f53fe51440403446ca61552e2a2.1/_/images/icons/emoticons/smile.png) )
*   For memory leaks or performance related issues, if you can run a profiler on your test case and attach the output as a file (or zipped file if it's huge) to the JIRA we can normally fix things much faster. e.g. you could run [jmap](http://java.sun.com/j2se/1.5.0/docs/tooldocs/share/jmap.html)/[jhat](http://java.sun.com/javase/6/docs/technotes/tools/share/jhat.html), JProfiler or YourKit on your code and send us the output. To find memory leaks it's quicker to resolve if you can tell us what classes are taking up all of the RAM; we can normally figure out what's wrong from that.

Commercial Support
------------------

This is an open source project, so the amount of time we have available to help resolve your issue is often limited as all help is provided on a volunteer basis. If you want to get priority help, need to get up to speed quickly, require some training or mentoring, or need full 24 x 7 production support you should contact a commercial company specializing in ActiveMQ support such as...

*   [apifocal](https://apifocal.com) is a Professional Services company. Headquartered near Washington, DC, USA, APIfocal provides consulting and training for leveraging the Apache Integration stack and commercial ESBs at large scale, adding automation and devops capabilities.
*   [Media Driver](http://mediadriver.com) provides consulting services and management tools for Apache ActiveMQ and the Apache Integration stack for both the commercial and public sector.  We bring a full suite of project delivery services including business and technical analysis, proof of concepts, architectural guidance, best practice integration, and project management.  Media Driver offers training classes for developers and administrators, as well as middleware management software.
*   [Rogue Wave / OpenLogic](http://www.openlogic.com/) has a dedicated team of OSS experts offering round-the-clock Production Support with competitive SLAs for troubleshooting ActiveMQ issues and outages. Rogue Wave offers a comprehensive week-long instructor-led training program for developers and admins. Rogue Wave OpenLogic also provides Architecture and Design Consulting, and a Developer Support contract to assist in the development of messaging applications.
*   [Red Hat](http://www.redhat.com/products/jbossenterprisemiddleware/amq/) offers JBoss A-MQ, a supported distribution of Apache ActiveMQ, that include Enterprise Developer and Production Support, and offer training and consultancy for enterprise deployments.
*   [Savoir Technologies, Inc](http://www.savoirtech.com) provides enterprise consulting, training and support for ActiveMQ and a host of other Apache service containers. Savoir can provide best practice mentoring for developing with ActiveMQ, as well as architectural/design reviews, troubleshooting and SOA infrastructure implementations. Savoir's staff includes some of the contributors of ActiveMQ who are on the ground consulting and are familiar with real world implementations and issues.
*   [Total Transaction Management (TTM)](http://www.ttmsolutions.com/) provides ActiveMQ consulting and support, as well as security and [monitoring](http://www.ttmsolutions.com/Transactional_Software_Solutions/Active_Monitor_AMon.php/) add-on products and [reference guide](http://www.ttmsolutions.com/Apache_Software/ActiveMQ_Reference_Guide.php) for ActiveMQ.
*   [Tomitribe](http://tomitribe.com) are experts in Tomcat and ActiveMQ integration, champions of Open Source and Java EE.  Tomitribe offers consulting, training and support for TomEE, Tomcat, ActiveMQ, CXF and more.
*   [TytoEASE](http://www.tytoease.com/activemq) offers support, consulting and training on enterprise ready open source projects including ActiveMQ.   Support offerings are at three levels with guaranteed SLA's. The company's consulting work is short term to help troubleshoot, fine-tune, do architectural reviews or help with initial design.  TytoEASE's focus is on the Enterprise with how customers integrate open source with their current technologies.

