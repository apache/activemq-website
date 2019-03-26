Apache ActiveMQ ™ -- Getting Started 3.x 

[Site](site.md) > [Old Links](SiteSite/Site/old-links.md) > [Previous Versions](Site/Old LinksSite/Old Links/Site/Old Links/previous-versions.md) > [Getting Started 3.x](Site/Old Links/Previous Versions/getting-started-3x.md)

Introduction
------------

This document describes how to install and configure ActiveMQ 3.x for both Unix and Windows' platforms.

Document Organization
---------------------

The Getting Started Guide for ActiveMQ 3.x document contains the following sections:

*   [Introduction](#GettingStarted3.x-Introduction)
*   [Document Organization](#GettingStarted3.x-DocumentOrganization)
*   [Pre-Installation Requirements](#GettingStarted3.x-PreInstallationRequirements)
*   [Installation Procedure for Windows](#GettingStarted3.x-InstallationProcedureforWindows)
    *   [Windows Binary Installation](#GettingStarted3.x-WindowsBinaryInstallation)
    *   [Windows Source Installation](#GettingStarted3.x-WindowsSourceInstallation)
    *   [Windows Developers' Release](#GettingStarted3.x-WindowsDevelopers%27Release)
*   [Installation Procedure for Unix](#GettingStarted3.x-InstallationProcedureforUnix)
    *   [Unix Binary Installation](#GettingStarted3.x-UnixBinaryInstallation)
    *   [Unix Source Installation](#GettingStarted3.x-UnixSourceInstallation)
    *   [Unix Developers' Release](#GettingStarted3.x-UnixDevelopers%27Release)
*   [Starting ActiveMQ](#GettingStarted3.x-StartingActiveMQ)
*   [Testing the Installation](#GettingStarted3.x-TestingtheInstallation)
*   [Stopping ActiveMQ](#GettingStarted3.x-StoppingActiveMQ)
*   [Configuring ActiveMQ](#GettingStarted3.x-ConfiguringActiveMQ)

Pre-Installation Requirements
-----------------------------

**Hardware:**

*   33 MB of free disk space for the ActiveMQ 3.x binary distribution.
*   18 MB of free disk space for the ActiveMQ 3.x source or developer's distributions.

**Operating Systems:**

*   Windows: Windows XP SP2, Windows 2000.
*   Unix: Ubuntu Linux, Powerdog Linux, MacOS, AIX, HP-UX, Solaris, or any Unix platform that supports Java.

**Environment:**

*   Java Developer Kit (JDK) 1.4.x or greater for deployment and 1.5.x (Java 5) for compiling/building.
*   The JAVA_HOME environment variable must be set to the directory where the JDK is installed, e.g., c:\\Program Files\\jsdk.1.4.2-09.
*   Maven 1.0.2 or greater (required when installing source or developer's releases).
*   [JARs](http://cvs.apache.org/repository/geronimo-spec/jars/) that will be used must be added to the classpath.

Installation Procedure for Windows
----------------------------------

This section of the Getting Started Guide explains how to install binary and source distributions of ActiveMQ on a Windows system.

#### Windows Binary Installation

This procedure explains how to download and install the binary distribution on a Windows system.

1.  From a browser, navigate to [www.ActiveMQ.org](http://www.ActiveMQ.org).
2.  Click the [Download](#GettingStarted3.x-Download) link in the navigation pane (the left pane).
3.  Click the [ActiveMQ 3.x Release](#GettingStarted3.x-ActiveMQ3.xRelease) link under the "Latest Releases" section. This brings up a new page.
4.  Under the [Download Here](#GettingStarted3.x-DownloadHere) section, select the desired distribution (you may have to scroll down to see the "Download Here" section).  
    For a binary distribution, the filename will be similar to: activemq-x.x.x.zip.
5.  Extract the files from the ZIP file into a directory of your choice.
6.  Proceed to the [Starting ActiveMQ](#GettingStarted3.x-StartingActiveMQ) section of this document.
7.  Following start-up, go to the [Testing the Installation](#GettingStarted3.x-TestingtheInstallation) section of this document.

#### Windows Source Installation

This procedure explains how to download and install the source distribution on a Windows system.

**NOTE:** ActiveMQ can be run on a Java 1.4.x system, however, Java 1.5 is required to compile/build ActiveMQ.

1.  From a browser, navigate to [www.ActiveMQ.org](http://www.ActiveMQ.org).
2.  Click the [Download](#GettingStarted3.x-Download) link in the navigation pane (the left pane).
3.  Click the [ActiveMQ 3.x Release](#GettingStarted3.x-ActiveMQ3.xRelease) link under the "Latest Releases" section. This brings up another page.
4.  Under the [Download Here](#GettingStarted3.x-DownloadHere) section, select the desired distribution (if necessary, scroll down to see the "Download Here" section).  
    For a source distribution, the filename will be similar to: activemq-x.x-src.zip.
5.  Extract ActiveMQ from the ZIP file into a directory of your choice.
6.  Build ActiveMQ using Maven 1.0.2 or greater and Java 1.5.
    
    <!\[CDATA\[ The recommended method of building ActiveMQ is the following: cd \[activemq\_install\_dir\] where \[activemq\_install\_dir\] is the directory in which ActiveMQ was installed. maven clean test If the above build fails on some tests, type the following: cd \[activemq\_install\_dir\] maven -Dmaven.test.skip=true \]\]>
    
7.  If you prefer to use an IDE, then you can auto-generate the IDE's project file using maven plugins:
    
    <!\[CDATA\[ maven eclipse or maven idea \]\]>
    
    Feel free to use any other applicable IDE. Please refer to the [plugin reference](http://maven.apache.org/reference/plugins/plugins.html) for more details.
    
8.  Start ActiveMQ from the target directory, for example:
    
    <!\[CDATA\[ cd \[activemq\_install\_dir\]\\activemq-assembly\\target\\activemq-x.x-SNAPSHOT\ bin\\activemq \]\]>
    
    **NOTE:** Working directories get created relative to the current directory. To create the working directories in the proper place, ActiveMQ must be launched from its home/installation directory.
    
9.  Proceed to the [Testing the Installation](#GettingStarted3.x-TestingtheInstallation) section.

**NOTE:** Working directories get created relative to the current directory. To create the working directories in the proper place, ActiveMQ must be launched from its home/installation directory.

![](https://cwiki.apache.org/confluence/images/icons/emoticons/forbidden.gif)

**Warning**  
If you are building ActiveMQ 3.x under Windows using Cygwin there is a path name length limitation. If the path name length is exceeded, you may see build errors. To correct this, move the ActiveMQ source directory higher in the file system tree, e.g., /cygdrive/c/d/sm.

#### Windows Developer's Release

This procedure explains how to download and install the latest developer's snapshot.

**NOTE:** ActiveMQ can be run on a Java 1.4.x system, however, Java 1.5 is required to compile/build ActiveMQ.

1.  From a browser, navigate to [www.ActiveMQ.org](http://www.ActiveMQ.org).
2.  Click the [Download](#GettingStarted3.x-Download) link in the navigation pane (the left pane).
3.  Click the [Current development SNAPSHOT release](#GettingStarted3.x-CurrentdevelopmentSNAPSHOTrelease) link.
4.  Select the version of ActiveMQ to download (if necessary, scroll down to see the ActiveMQ snapshots).
5.  Extract the files from the ZIP file into a directory of your choice.
6.  If a binary snapshot was downloaded, proceed to the [Starting ActiveMQ](#GettingStarted3.x-StartingActiveMQ) section of this document.  
    If a source snapshot was downloaded, perform step 6 and step 7 of the [Windows Source Installation](#GettingStarted3.x-WindowsSourceInstallation) procedure.
7.  Following start-up, proceed to the [Testing the Installation](#GettingStarted3.x-TestingtheInstallation) section.

Installation Procedure for Unix
-------------------------------

#### Unix Binary Installation

This procedure explains how to download and install the binary distribution on a Unix system.

1.  Download the activemq gzip file to the Unix machine, using either a browser or a tool, i.e., wget, scp, ftp, etc.
    
    <!\[CDATA\[ If the Unix machine has a browser: a. Navigate to www.ActiveMQ.org. b. Click the "Download" link in the navigation pane (the left pane). c. Click the "ActiveMQ 3.x Release" link under the &amp;quot;Latest Releases&amp;quot; section. This brings up a new page. d. Under the "Download Here" section, select the desired distribution (if necessary, scroll down to see the "Download Here" section). For a binary Unix distribution, the filename will be similar to: activemq-x.x.x.tar.gz. OR If the Unix machine does NOT have a browser, tools such as wget, scp, or ftp can be used to download the ActiveMQ distribution. It is beyond the scope of this document to explain the use of those tools. For convenience an example is provided below using a Windows machine (that has a browser) and a Unix machine with &amp;quot;wget&amp;quot; installed on it. \*NOTE:\* There are several alternative ways to perform this type of installation. a. Obtain the link to the ActiveMQ distribution file. On the Windows machine with a browser, navigate to www.ActiveMQ.org. b. Click the "Download" link in the left navigation pane. c. Click the "ActiveMQ 3.x Release" link under the &amp;quot;Latest Releases&amp;quot; section. This brings up a new page. d. Under the "Download Here" section, roll-over the desired distribution (if necessary, scroll down to see the "Download Here" section). For a binary Unix distribution the filename will be similar to: activemq-x.x.x.tar.gz. e. Right-click on the distribution name and Copy Shortcut f. On the Unix machine, change to the directory in which ActiveMQ will be installed, e.g., /usr/local. f. Download the ActiveMQ distribution to the Unix machine using the "wget" tool. For example, type "wget" followed by the saved shortcut: wget http://cvs.apache.org/repository/incubator-activemq/distributions/activemq-x.x.x.tar.gz \]\]>
    
2.  Extract the files from the gzip file into a directory of your choice. For example:
    
    <!\[CDATA\[ tar zxvf activemq-x.x.x.tar.gz \]\]>
    
3.  If the ActiveMQ start-up script is not executable, change its permisssions. The ActiveMQ script is located in the bin directory. For example:
    
    <!\[CDATA\[ cd \[activemq\_install\_dir\]/bin where \[activemq\_install\_dir\] is the directory in which ActiveMQ was installed. chmod 755 activemq \]\]>
    
4.  Proceed to the [Starting ActiveMQ](#GettingStarted3.x-StartingActiveMQ) section of this document.
5.  Following start-up, go to the [Testing the Installation](#GettingStarted3.x-TestingtheInstallation) section.

#### Unix Source Installation

This procedure explains how to download and install the source distribution on a Unix system. This procedure assumes the Unix machine has a browser. Please see the previous [Unix Binary Installation](#GettingStarted3.x-UnixBinaryInstallation) section for details on how to install ActiveMQ without a browser.

**NOTE:** ActiveMQ can be run on a Java 1.4.x system, however, Java 1.5 is required to compile/build ActiveMQ.

1.  From a browser, navigate to [www.ActiveMQ.org](http://www.ActiveMQ.org).
2.  Click the [Download](#GettingStarted3.x-Download) link in the navigation pane (the left pane).
3.  Click the [ActiveMQ 3.x Release](#GettingStarted3.x-ActiveMQ3.xRelease) link under the "Latest Releases" section. This brings up a new page.
4.  Under the [Download Here](#GettingStarted3.x-DownloadHere) section, select the desired distribution (if necessary, scroll down to see the "Download Here" section).  
    For a source distribution, the filename will be similar to: activemq-x.x-src.tar.gz.
5.  Extract the files from the ZIP file into a directory of your choice. For example:
    
    <!\[CDATA\[ tar zxvf activemq.x.x-src.tar.gz \]\]>
    
6.  Build ActiveMQ using Maven 1.0.2 or greater and Java 5:
    
    <!\[CDATA\[ The preferred method of building ActiveMQ is the following: cd \[activemq\_install\_dir\] where \[activemq\_install\_dir\] is the directory in which ActiveMQ was installed. maven clean test If the above build fails on some tests, do the following: cd \[activemq\_install\_dir\] maven m:clean maven -Dmaven.test.skip=true \]\]>
    
7.  If you prefer to use an IDE then you can auto-generate the IDE's project file using maven plugins:
    
    <!\[CDATA\[ maven eclipse or maven idea \]\]>
    
    Feel free to use any other applicable IDE. Please refer to the [plugin reference](http://maven.apache.org/reference/plugins/plugins.html) for more details.  
    **NOTE:** Working directories get created relative to the current directory. To create working directories in the proper place, ActiveMQ must be launched from its home/installation directory.
    
8.  Proceed to the [Starting ActiveMQ](#GettingStarted3.x-StartingActiveMQ) section of this document.
9.  Proceed to [Testing the Installation](#GettingStarted3.x-TestingtheInstallation) section.

#### Unix Developer's Release

This procedure explains how to download and install the latest developer's snapshot.

**NOTE:** ActiveMQ can be run on a Java 1.4.x system, however, Java 5 is required to compile/build ActiveMQ.

1.  From a browser, navigate to [www.ActiveMQ.org](http://www.ActiveMQ.org).
2.  Click the [Download](#GettingStarted3.x-Download) link in the navigation pane (the left pane).
3.  Click the [Current development SNAPSHOT release](#GettingStarted3.x-CurrentdevelopmentSNAPSHOTrelease) link.
4.  Select the version of ActiveMQ to download (you may have to scroll down to see the ActiveMQ snapshots). The filename will be similar to: activemq-x.x.x-tar.gz or activemq-x.x.x-src.tar.gz.
5.  Extract the files from the gzip file into a directory of your choice. For example:
    
    <!\[CDATA\[ For a binary developer's snapshot: tar zxvf activemq-x.x.x.tar.gz For a source developer's snapshot: tar zxvf activemq-x.x.x-src.tar.gz \]\]>
    
6.  If a binary snapshot was downloaded, to make it executable, the ActiveMQ script may need its permissions changed:
    
    <!\[CDATA\[ cd \[activemq\_install\_dir\]/bin where \[activemq\_install\_dir\] is the directory in which ActiveMQ was installed. chmod 755 activemq \]\]>
    
    #For a binary snapshot, proceed to the [Starting ActiveMQ](#GettingStarted3.x-StartingActiveMQ) section of this document.  
    #If a source snapshot was downloaded perform steps 6 - 8 of the [Unix Source Installation](#GettingStarted3.x-UnixSourceInstallation) procedure.
    
7.  Proceed to the [Testing the Installation](#GettingStarted3.x-TestingtheInstallation) section.

Starting ActiveMQ
-----------------

#### On Windows:

From a console window, change to the installation directory and run ActiveMQ:

<!\[CDATA\[ cd \[activemq\_install\_dir\] \]\]>

where activemq\_install\_dir is the directory in which ActiveMQ was installed, e.g., c:\\Program Files\\ActiveMQ-3.x.  
Then type:

<!\[CDATA\[ bin\\activemq \]\]>

**NOTE:** Working directories get created relative to the current directory. To create working directories in the proper place, ActiveMQ must be launched from its home/installation directory.

#### On Unix:

From a command shell, change to the installation directory and run ActiveMQ:

<!\[CDATA\[ cd \[activemq\_install\_dir\] \]\]>

where activemq\_install\_dir is the directory in which ActiveMQ was installed, e.g., /usr/local/activemq-3.x.  
Then type:

<!\[CDATA\[ bin/activemq OR bin/activemq &gt; /tmp/smlog 2&gt;&amp;1 &amp;; Note: /tmp/smlog may be changed to another file name. \]\]>

**NOTE:** Working directories get created relative to the current directory. To create working directories in the proper place, ActiveMQ must be launched from its home/installation directory.

![](https://cwiki.apache.org/confluence/images/icons/emoticons/forbidden.gif)

**Warning**  
Do NOT close the console or shell in which ActiveMQ was started, as that will terminate ActiveMQ (unless ActiveMQ was started with nohup).

<!\[CDATA\[ nohup bin/activemq &gt; /tmp/smlog 2&gt;&amp;1 &amp; \]\]>

Testing the Installation
------------------------

If ActiveMQ is up and running without problems, the Window's console window or the Unix command shell will display information similar to the following log line:

<!\[CDATA\[ INFO ActiveMQ JMS Message Broker (ID:apple-s-Computer.local-51222-1140729837569-0:0) has started \]\]>

  
ActiveMQ's default port is 61616. From another window run netstat and search for port 61616.

From a Windows console, type:

<!\[CDATA\[ netstat -an|find &amp;quot;61616&amp;quot; \]\]>

**OR**

From a Unix command shell, type:

<!\[CDATA\[ netstat -an|grep 61616 \]\]>

Stopping ActiveMQ
-----------------

For both Windows and Unix installations, terminate ActiveMQ by typing "CTRL-C" in the console or command shell in which it is running.

If ActiveMQ was started in the background on Unix, the process can be killed, with the following:

<!\[CDATA\[ ps -ef|grep activemq kill \[PID\] where \[PID\] is the process id of the ActiveMQ process. \]\]>

Configuring ActiveMQ
--------------------

The ActiveMQ broker should now run. You can configure the broker by specifying an [Xml Configuration](xml-Community/FAQ/configuration.md "Xml Configuration") file as a parameter to the _activemq_ command.

See the [Initial Configuration](Using ActiveMQ/initial-Community/FAQ/configuration.md "Initial Configuration") for details of which jars you need to add to your classpath to start using ActiveMQ in your Java code

If you want to use JNDI to connect to your JMS provider then please view the [JNDI Support](Connectivity/Containers/jndi-Community/support.md "JNDI Support"). If you are a Spring user you should read about [Spring Support](Connectivity/Containers/spring-Community/support.md "Spring Support")

After the installation, ActiveMQ is running with a basic configuration. For details on configuring options, please see refer to the [Configuration](Community/FAQ/configuration.md "Configuration") section.

Additional Resources
--------------------

If you are new to using ActiveMQ, running the [Examples](Using ActiveMQ/examples.md "Examples") is a good next step to learn more about ActiveMQ.

### [Overview](overview.md "Overview")

*   [Index](index.html "Index")
*   [News](Overview/news.md "News")
*   [New Features](Features/new-features.md "New Features")
*   [Getting Started](Using ActiveMQUsing ActiveMQ/Using ActiveMQ/getting-started.md "Getting Started")
*   [FAQ](CommunityCommunity/Community/faq.md "FAQ")
*   [Articles](Community/articles.md "Articles")
*   [Books](CommunityCommunity/Community/books.md "Books")
*   [Download](OverviewOverview/Overview/download.md "Download")
*   [License](http://www.apache.org/licenses/)

### Search

    
  

### Sub Projects

*   [Apollo](http://activemq.apache.org/apollo "ActiveMQ Apollo")
*   [CMS](http://activemq.apache.org/cms/ "The C++ API for Messaging")
*   [NMS](http://activemq.apache.org/nms/ "NMS is the .Net Messaging API")
*   [Camel](http://camel.apache.org/ "POJO based Enterprise Integration Patterns with a typesafe Java DSL")

### [Community](community.md "Community")

*   [Support](CommunityCommunity/Community/support.md "Support")
*   [Contributing](CommunityCommunity/Community/contributing.md "Contributing")
*   [Discussion Forums](CommunityCommunity/Community/discussion-forums.md "Discussion Forums")
*   [Mailing Lists](Community/mailing-lists.md "Mailing Lists")
*   [IRC](irc://irc.codehaus.org/activemq)
*   [IRC Log](http://servlet.uwyn.com/drone/log/hausbot/activemq)
*   [Site](site.md "Site")
*   [Sponsorship](http://www.apache.org/foundationCommunity/sponsorship.md)
*   [Projects Using ActiveMQ](CommunityCommunity/Community/projects-using-activemq.md "Projects Using ActiveMQ")
*   [Users](CommunityCommunity/Community/users.md "Users")
*   [Team](CommunityCommunity/Community/team.md "Team")
*   [Thanks](http://www.apache.org/foundationIndexIndex/Index/thanks.md)

### [Features](features.md "Features")

*   [Advisory Message](Features/Message FeaturesFeatures/Message Features/Features/Message Features/advisory-message.md "Advisory Message")
*   [Clustering](FeaturesFeatures/Features/clustering.md "Clustering")
*   [Cross Language Clients](Connectivity/cross-language-clients.md "Cross Language Clients")
*   [Enterprise Integration Patterns](Features/enterprise-integration-patterns.md "Enterprise Integration Patterns")
*   [JMX](Features/jmx.md "JMX")
*   [JMS to JMS Bridge](ConnectivityConnectivity/Connectivity/jms-to-jms-bridge.md "JMS to JMS Bridge")
*   [MasterSlave](Features/ClusteringFeatures/Clustering/Features/Clustering/masterslave.md "MasterSlave")
*   [Message Groups](Features/Consumer FeaturesFeatures/Consumer Features/Features/Consumer Features/message-groups.md "Message Groups")
*   [Networks of Brokers](Features/Clustering/networks-of-brokers.md "Networks of Brokers")
*   [Performance](FeaturesFeatures/Features/performance.md "Performance")
*   [Persistence](Features/persistence.md "Persistence")
*   [Security](FeaturesFeatures/Features/security.md "Security")
*   [Virtual Destinations](Features/Destination Features/virtual-destinations.md "Virtual Destinations")
*   [Visualisation](FeaturesFeatures/Features/visualisation.md "Visualisation")
*   [More ...](features.md "Features")

### [Connectivity](connectivity.md "Connectivity")

*   [Ajax](Connectivity/ajax.md "Ajax")
*   [AMQP](Connectivity/Protocols/amqp.md "AMQP")
*   [Axis and CXF Support](axis-and-cxf-CommunityCommunity/Community/support.md "Axis and CXF Support")
*   [C Integration](Connectivity/Cross Language ClientsConnectivity/Cross Language Clients/Connectivity/Cross Language Clients/c-integration.md "C Integration")
*   [C++](Connectivity/Cross Language ClientsConnectivity/Cross Language Clients/Connectivity/Cross Language Clients/activemq-c-clients.md "ActiveMQ C++ Clients")
*   [C# and .Net Integration](http://activemq.apache.org/nms/)
*   [CMS](http://activemq.apache.org/cms/)
*   [J2EE](Connectivity/Containers/j2ee.md "J2EE")
*   [JBoss Integration](Connectivity/ContainersConnectivity/Containers/Connectivity/Containers/jboss-integration.md "JBoss Integration")
*   [Jetty](http://docs.codehaus.org/display/JETTY/Integrating+with+ActiveMQ)
*   [JNDI Support](Connectivity/Containers/jndi-Community/support.md "JNDI Support")
*   [NMS](http://activemq.apache.org/nms/ "NMS is the .Net Messaging API")
*   [REST](Connectivity/ProtocolsConnectivity/Protocols/Connectivity/Protocols/rest.md "REST")
*   [RSS and Atom](Connectivity/ProtocolsConnectivity/Protocols/Connectivity/Protocols/rss-and-atom.md "RSS and Atom")
*   [Spring Support](Connectivity/Containers/spring-Community/support.md "Spring Support")
*   [Stomp](Connectivity/Protocols/stomp.md "Stomp")
*   [Tomcat](Connectivity/Containers/tomcat.md "Tomcat")
*   [Unix Service](Features/Unix/unix-service.md "Unix Service")
*   [WebLogic Integration](weblogiConnectivity/Cross Language ClientsConnectivity/Cross Language Clients/Connectivity/Cross Language Clients/c-integration.md "WebLogic Integration")
*   [XMPP](Connectivity/Protocols/xmpp.md "XMPP")
*   [More ...](connectivity.md "Connectivity")

### [Using ActiveMQ 5](using-activemq-5.md "Using ActiveMQ 5")

*   [Getting Started](version-5-Using ActiveMQUsing ActiveMQ/Using ActiveMQ/getting-started.md "Version 5 Getting Started")
*   [Initial Configuration](version-5-Using ActiveMQ/initial-Community/FAQ/configuration.md "Version 5 Initial Configuration")
*   [Running a Broker](Using ActiveMQ 5/version-5-Using ActiveMQ/run-broker.md "Version 5 Run Broker")
*   [Embedded Brokers](Community/FAQ/Using Apache ActiveMQ/how-do-i-embed-a-broker-inside-a-connection.md "How do I embed a Broker inside a Connection")
*   [Command Line Tools](Community/FAQ/Using Apache ActiveMQ/activemq-command-line-tools-reference.md "ActiveMQ Command Line Tools Reference")
*   [Configuring Transports](Using ActiveMQ 5/configuring-version-5-transports.md "Configuring Version 5 Transports")
*   [Examples](version-5-Using ActiveMQ/examples.md "Version 5 Examples")
*   [Web Samples](Using ActiveMQ 5Using ActiveMQ 5/Using ActiveMQ 5/version-5-Using ActiveMQ/web-samples.md "Version 5 Web Samples")
*   [Monitoring the Broker](Community/FAQ/Using Apache ActiveMQCommunity/FAQ/Using Apache ActiveMQ/Community/FAQ/Using Apache ActiveMQ/how-can-i-monitor-activemq.md "How can I monitor ActiveMQ")
*   [Xml Configuration](Using ActiveMQ 5/version-5-xml-Community/FAQ/configuration.md "Version 5 XML Configuration")
*   [Xml Reference](Using ActiveMQ/xml-reference.md "Xml Reference")
*   [More ...](using-activemq-5.md "Using ActiveMQ 5")

### [Using ActiveMQ 4](using-activemq.md "Using ActiveMQ")

*   [Getting Started](Using ActiveMQUsing ActiveMQ/Using ActiveMQ/getting-started.md "Getting Started")
*   [Initial Configuration](Using ActiveMQ/initial-Community/FAQ/configuration.md "Initial Configuration")
*   [Running a Broker](Using ActiveMQ/run-broker.md "Run Broker")
*   [Embedded Brokers](Community/FAQ/Using Apache ActiveMQ/how-do-i-embed-a-broker-inside-a-connection.md "How do I embed a Broker inside a Connection")
*   [Command Line Tools](Community/FAQ/Using Apache ActiveMQ/activemq-command-line-tools-reference.md "ActiveMQ Command Line Tools Reference")
*   [Configuring Transports](Using ActiveMQ/configuring-transports.md "Configuring Transports")
*   [Examples](Using ActiveMQ/examples.md "Examples")
*   [Web Samples](Using ActiveMQ/web-samples.md "Web Samples")
*   [Monitoring the Broker](Community/FAQ/Using Apache ActiveMQCommunity/FAQ/Using Apache ActiveMQ/Community/FAQ/Using Apache ActiveMQ/how-can-i-monitor-activemq.md "How can I monitor ActiveMQ")
*   [Xml Configuration](xml-Community/FAQ/configuration.md "Xml Configuration")
*   [Xml Reference](Using ActiveMQ/xml-reference.md "Xml Reference")
*   [More ...](using-activemq.md "Using ActiveMQ")

### [Tools](tools.md "Tools")

*   [Web Console](ToolsTools/Tools/web-console.md "Web Console")
*   [Maven2 Performance Plugin](Features/Performance/activemq-performance-module-users-manual.md "ActiveMQ Performance Module Users Manual")

### [External Tools](tools.md "Tools")

*   [hawtio](http://hawt.io "HTML5 console for monitoring Apache ActiveMQ and Apache Camel")
*   [Hermes Jms](ToolsTools/Tools/hermes-Community/FAQ/jms.md "Hermes Jms")
*   [JMeter](http://jakarta.apache.org/jmeter)

### [Support](CommunityCommunity/Community/support.md "Support")

*   [Issues](http://issues.apache.org/jira/browse/AMQ)
*   [Roadmap](http://issues.apache.org/activemq/browse/AMQ?report=com.atlassian.jira.plugin.system.project:roadmap-panel)
*   [Change log](http://issues.apache.org/activemq/browse/AMQ?report=com.atlassian.jira.plugin.system.project:changelog-panel)

### Related Projects

*   [Apache ServiceMix](http://incubator.apache.org/servicemix/ "Distributed Enterprise Service Bus based on JBI")
*   [Lingo](http://lingo.codehaus.org/ "POJO Remoting using JMS")
*   [Jencks](http://jencks.codehaus.org/ "Message Driven POJOs and pooling for JMS and JDBC")
*   [Stomp](http://stomp.codehaus.org/ "A simple protocol for messaging middleware interop and the easy development of custom clients")
*   [Spring](http://www.springframework.org/)
*   [OpenEJB](http://openejb.apache.org)
*   [Geronimo](http://geronimo.apache.org/)

### [Developers](developers.md "Developers")

*   [Source](Developers/source.md "Source")
*   [Building](Developers/building.md "Building")
*   [Developer Guide](DevelopersDevelopers/Developers/developer-guide.md "Developer Guide")
*   [Becoming a committer](Developers/becoming-a-committer.md "Becoming a committer")
*   [Code Overview](code-overview.md "Code Overview")
*   [Wire Protocol](Developers/wire-protocol.md "Wire Protocol")
*   [Release Guide](DevelopersDevelopers/Developers/release-guide.md "Release Guide")

### Tests

*   [Maven2 Performance Plugin](Features/Performance/activemq-performance-module-users-manual.md "ActiveMQ Performance Module Users Manual")
*   [Benchmark Tests](Developers/benchmark-tests.md "Benchmark Tests")
*   [JMeter System Tests](Developers/jmeter-system-tests.md "JMeter System Tests")
*   [JMeter Performance Tests](Developers/jmeter-performance-tests.md "JMeter Performance Tests")
*   [Integration Tests](Developers/integration-tests.md "Integration Tests")

### Project Reports

*   [JUnit Reports](DevelopersDevelopers/Developers/junit-reports.md "JUnit Reports")
*   [Source XRef](Developers/source-xref.md "Source XRef")
*   [Test Source XRef](Developers/test-Developers/source-xref.md "Test Source XRef")
*   [Xml Reference](Using ActiveMQ/xml-reference.md "Xml Reference")
