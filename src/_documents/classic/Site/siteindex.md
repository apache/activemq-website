Apache ActiveMQ ™ -- SiteIndex 

[Site](../site.md) > [SiteIndex](../Site/siteindex.md)


Space Index
-----------

[0-9](#index-0-9) ... 4

[A](#index-A) ... 127

[B](#index-B) ... 15

[C](#index-C) ... 39

[D](#index-D) ... 23

[E](#index-E) ... 7

[F](#index-F) ... 5

[G](#index-G) ... 4

[H](#index-H) ... 102

[I](#index-I) ... 19

[J](#index-J) ... 32

[K](#index-K) ... 4

[L](#index-L) ... 8

[M](#index-M) ... 21

[N](#index-N) ... 21

[O](#index-O) ... 12

[P](#index-P) ... 16

[Q](#index-Q) ... 2

[R](#index-R) ... 16

[S](#index-S) ... 40

[T](#index-T) ... 18

[U](#index-U) ... 13

[V](#index-V) ... 16

[W](#index-W) ... 26

[X](#index-X) ... 5

[Y](#index-Y) ... 0

[Z](#index-Z) ... 3

[!@#$](#index-%21@%23%24) ... 0

 

 

#### 0-9

Page: [2007 April](https://cwiki.apache.org/confluence/display/ACTIVEMQ/2007+April)  

April 2007 Report ActiveMQ 4.1.1 Released voted in a new committer, John Heitmann the developer and user lists continue to be very active

Page: [4.0 RC 1 Guide](https://cwiki.apache.org/confluence/display/ACTIVEMQ/4.0+RC+1+Guide)  

ActiveMQ 4.0-RC-1 Release Guide Release Info Release Manager Hiram Chirino Special issues We are still in the Incubator so need to ensure that all the proper disclaimers are in place and that the artifacts are all properly named incubator-activemq. Open I

Page: [5.8 Migration Guide](https://cwiki.apache.org/confluence/display/ACTIVEMQ/5.8+Migration+Guide)  

There are some changes in 5.8 that may require some code change New modules may effect your maven pom dependencies activemq-core has been replaced with activemq-client and activemq-broker. The various message stores have their own activemq-xx-store module

Page: [5.9 Migration Guide](https://cwiki.apache.org/confluence/display/ACTIVEMQ/5.9+Migration+Guide)  

There are some changes in 5.9 that may require user intervention Schema change to JDBC Persistence Adapter. XID column type change. If you use XA transactions you need to ensure there are no XA transactions pending completion before you upgrade. Some mode

#### A

Page: [Activation Spec Properties](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Activation+Spec+Properties)  

An Activation Spec is used to configure the message delivery to an MDB. The ejb-jar.xml deployment descriptor needs to include a <activation-config> element inside the <message-driven> element like: <activation-config> <activation-config-property> <activa

Page: [Active Groups](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Active+Groups)  

Active Groups is a dynamic collaboration framework so simplify message passing and shared state between members of the group. It is available in ActiveMQ 6.0 Active Groups includes the following: Dynamic membership information broadcast messaging point-to

Page: [ActiveMQ 1.1 Release](https://cwiki.apache.org/confluence/display/ACTIVEMQ/ActiveMQ+1.1+Release)  

New and Noteworthy This release represents a major increase in functionality; the new features in this release are:- distributed queues and topics and clusters of message brokers auto-reconnection of clients across a cluster of brokers support for high pe

Page: [ActiveMQ 1.2 Release](https://cwiki.apache.org/confluence/display/ACTIVEMQ/ActiveMQ+1.2+Release)  

New and Noteworthy This release represents a major increase in functionality; the new features in this release are:- heaps of bug fixes and new test cases Download Here Download Description activemq-release-1.2.zip http://dist.codehaus.org/activemq/distri

Page: [ActiveMQ 1.3 Release](https://cwiki.apache.org/confluence/display/ACTIVEMQ/ActiveMQ+1.3+Release)  

New and Noteworthy This release represents a major increase in functionality; the new features in this release are:- heaps of bug fixes and new test cases Download Here Download Description activemq-release-1.3.zip http://dist.codehaus.org/activemq/distri

Page: [ActiveMQ 1.4 Release](https://cwiki.apache.org/confluence/display/ACTIVEMQ/ActiveMQ+1.4+Release)  

New and Noteworthy This release represents a major increase in functionality; the new features in this release are:- heaps of bug fixes and new test cases Download Here Download Description activemq-release-1.4.zip http://dist.codehaus.org/activemq/distri

Page: [ActiveMQ 1.5 Release](https://cwiki.apache.org/confluence/display/ACTIVEMQ/ActiveMQ+1.5+Release)  

New and Noteworthy This release is mostly a bug fix release:- A few bug fixes for J2EE compliance Download Here Download Description activemq-release-1.5.zip http://dist.codehaus.org/activemq/distributions/activemq-release-1.5.zip Binary Distribution in z

Page: [ActiveMQ 2.0 Release](https://cwiki.apache.org/confluence/display/ACTIVEMQ/ActiveMQ+2.0+Release)  

New and Noteworthy This is a major release including lots of new functionality and performance improvements: This release includes advisory messages so you can listen to the state of the message fabric optimised wire format for higher throughput improved

Page: [ActiveMQ 2.1 Release](https://cwiki.apache.org/confluence/display/ACTIVEMQ/ActiveMQ+2.1+Release)  

New and Noteworthy This release includes full support for the high performance journal. Our default persistence mechanism is now the journal for short term persistence and then JDBC (via Apache Derby by default) for long term storage. The journal is regul

Page: [ActiveMQ 3.0 Release](https://cwiki.apache.org/confluence/display/ACTIVEMQ/ActiveMQ+3.0+Release)  

New and Noteworthy This new release includes the following a new 'discovery' transport protocol for a pure client-only peer network - a self discovering cluster which automatically finds the brokers available on the network (as opposed to the 'peer' proto

Page: [ActiveMQ 3.1 Release](https://cwiki.apache.org/confluence/display/ACTIVEMQ/ActiveMQ+3.1+Release)  

New and Noteworthy This new release includes the following New Stomp http://stomp.codehaus.org/ support to make it easy to create cross language clients such as for Ruby or Perl etc. (Python, C and .Net coming soon) XPath based selectors and demand based

Page: [ActiveMQ 3.2 Release](https://cwiki.apache.org/confluence/display/ACTIVEMQ/ActiveMQ+3.2+Release)  

New and Noteworthy This new release includes the following Improved Stomp http://stomp.codehaus.org/ 1.0 support to make it easy to create cross language clients such as for C, C#, Python, Ruby, Perl and Pike. Ajax support now uses OpenRico as the default

Page: [ActiveMQ 3.2.1 Release](https://cwiki.apache.org/confluence/display/ACTIVEMQ/ActiveMQ+3.2.1+Release)  

New and Noteworthy This release is a bug fix release and users of previous versions of 3.2 are encouraged to upgrade to this version. Download Here Download Description activemq-3.2.1.zip http://dist.codehaus.org/activemq/distributions/activemq-3.2.1.zip

Page: [ActiveMQ 3.2.2 Release](https://cwiki.apache.org/confluence/display/ACTIVEMQ/ActiveMQ+3.2.2+Release)  

New and Noteworthy This release is a bug fix release and users of previous versions of 3.2 are encouraged to upgrade to this version. Download Here Download Description activemq-3.2.2.zip http://dist.codehaus.org/activemq/distributions/activemq-3.2.2.zip

Page: [ActiveMQ 4.0 M4 Release](https://cwiki.apache.org/confluence/display/ACTIVEMQ/ActiveMQ+4.0+M4+Release)  

New and Noteworthy This is the first milestone release of 4.x since the move to Apache so the package names have changed from org.activemq to org.apache.activemq. For a full list see the Changes in 4.0. This release of ActiveMQ includes a large number of

Page: [ActiveMQ 4.0 RC2 Release](https://cwiki.apache.org/confluence/display/ACTIVEMQ/ActiveMQ+4.0+RC2+Release)  

New and Noteworthy This is the second release candiate release of 4.0. This release of ActiveMQ includes a large number of new features such as MasterSlave and Message Groups together with numerous bug fixes. Warnings When upgrading from a previous releas

Page: [ActiveMQ 4.0 Release](https://cwiki.apache.org/confluence/display/ACTIVEMQ/ActiveMQ+4.0+Release)  

New and Noteworthy This is the 4.0 release of Apache ActiveMQ. This release of Apache ActiveMQ includes a large number of new features such as MasterSlave and Message Groups together with numerous bug fixes. Warnings When upgrading from a previous release

Page: [ActiveMQ 4.0.1 Release](https://cwiki.apache.org/confluence/display/ACTIVEMQ/ActiveMQ+4.0.1+Release)  

<!\-\- {warning:title=The Release is still in progress} You are previewing the release page for unreleased version of ActiveMQ. The download links on the page below will not work until it is offically released. Until the release is approved you could try th

Page: [ActiveMQ 4.0.2 Release](https://cwiki.apache.org/confluence/display/ACTIVEMQ/ActiveMQ+4.0.2+Release)  

New and Noteworthy This is a minor bug fix release. All previous installations of Apache ActiveMQ 4.0.1 are recommended to upgrade to this release. Download Here Description Download Link PGP Signature file of download Binary for Windows incubator-activem

Page: [ActiveMQ 4.1.0 Release](https://cwiki.apache.org/confluence/display/ACTIVEMQ/ActiveMQ+4.1.0+Release)  

http://activemq.apache.org/activemq-410-release.data/activemq-4.1-box-reflection.png New and Noteworthy This is release contains several major enhancements such as: Virtual Destinations JDBC based Master/Slave locking XMPP/Jabber Support - ActiveMQ can no

Page: [ActiveMQ 4.1.1 Release](https://cwiki.apache.org/confluence/display/ACTIVEMQ/ActiveMQ+4.1.1+Release)  

http://activemq.apache.org/activemq-410-release.data/activemq-4.1-box-reflection.png New and Noteworthy Contains slew of bug fixes that are tracked in the change log. Getting the Binary Distributions Description Download Link PGP Signature file of downloa

Page: [ActiveMQ 4.1.2 Release](https://cwiki.apache.org/confluence/display/ACTIVEMQ/ActiveMQ+4.1.2+Release)  

http://activemq.apache.org/activemq-410-release.data/activemq-4.1-box-reflection.png New and Noteworthy Contains slew of bug fixes that are tracked in the change log. Getting the Binary Distributions Description Download Link PGP Signature file of downloa

Page: [ActiveMQ 5.0.0 Release](https://cwiki.apache.org/confluence/display/ACTIVEMQ/ActiveMQ+5.0.0+Release)  

activemq-5.x-box-reflection.png New Features in 5.0 Getting the Binary Distributions Description Download Link PGP Signature file of download Windows Distribution apache-activemq-5.0.0.zip http://archive.apache.org/dist/activemq/apache-activemq/5.0.0/apac

Page: [ActiveMQ 5.1.0 Release](https://cwiki.apache.org/confluence/display/ACTIVEMQ/ActiveMQ+5.1.0+Release)  

http://activemq.apache.org/activemq-500-release.data/activemq-5.x-box-reflection.png New Features in 5.1 Getting the Binary Distributions Description Download Link PGP Signature file of download Windows Distribution apache-activemq-5.1.0-bin.zip http://ar

Page: [ActiveMQ 5.10.0 Release](https://cwiki.apache.org/confluence/display/ACTIVEMQ/ActiveMQ+5.10.0+Release)  

http://activemq.apache.org/activemq-500-release.data/activemq-5.x-box-reflection.png ActiveMQ 5.10.0 Release Apache ActiveMQ 5.10.0 resolves more than 234 issues https://issues.apache.org/jira/browse/AMQ-5061?jql=project%20%3D%20AMQ%20AND%20fixVersion%2

Page: [ActiveMQ 5.10.1 Release](https://cwiki.apache.org/confluence/display/ACTIVEMQ/ActiveMQ+5.10.1+Release)  

http://activemq.apache.org/activemq-500-release.data/activemq-5.x-box-reflection.png ActiveMQ 5.10.1 Release Apache ActiveMQ 5.10.1 resolves 33 issues https://issues.apache.org/jira/browse/AMQ-5514?jql=fixVersion%20%3D%205.10.1%20AND%20project%20%3D%20A

Page: [ActiveMQ 5.10.2 Release](https://cwiki.apache.org/confluence/display/ACTIVEMQ/ActiveMQ+5.10.2+Release)  

http://activemq.apache.org/activemq-500-release.data/activemq-5.x-box-reflection.png ActiveMQ 5.10.2 Release Apache ActiveMQ 5.10.2 resolves 2 issues https://issues.apache.org/jira/issues/?jql=project%20%3D%20AMQ%20AND%20fixVersion%20%3D%205.10.2, both

Page: [ActiveMQ 5.11.0 Release](https://cwiki.apache.org/confluence/display/ACTIVEMQ/ActiveMQ+5.11.0+Release)  

ActiveMQ 5.11.0 Release Apache ActiveMQ 5.11.0 resolves more than 130 issues https://issues.apache.org/jira/issues/?jql=fixVersion%20%3D%205.11.0%20AND%20project%20%3D%20AMQ, mostly bug fixes and improvements. It is build with and requires jdk 1.7 New Fea

Page: [ActiveMQ 5.11.1 Release](https://cwiki.apache.org/confluence/display/ACTIVEMQ/ActiveMQ+5.11.1+Release)  

http://activemq.apache.org/activemq-500-release.data/activemq-5.x-box-reflection.png ActiveMQ 5.11.1 Release Apache ActiveMQ 5.11.1 resolves 6 issues https://issues.apache.org/jira/issues/?jql=project%20%3D%20AMQ%20AND%20fixVersion%20%3D%205.11.1, mostl

Page: [ActiveMQ 5.11.2 Release](https://cwiki.apache.org/confluence/display/ACTIVEMQ/ActiveMQ+5.11.2+Release)  

http://activemq.apache.org/activemq-500-release.data/activemq-5.x-box-reflection.png ActiveMQ 5.11.2 Release Apache ActiveMQ 5.11.2 resolves several issues https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12329669, mostl

Page: [ActiveMQ 5.11.3 Release](https://cwiki.apache.org/confluence/display/ACTIVEMQ/ActiveMQ+5.11.3+Release)  

http://activemq.apache.org/activemq-500-release.data/activemq-5.x-box-reflection.png ActiveMQ 5.11.3 Release Apache ActiveMQ 5.11.3 resolves several issues https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12329669, mostl

Page: [ActiveMQ 5.12.0 Release](https://cwiki.apache.org/confluence/display/ACTIVEMQ/ActiveMQ+5.12.0+Release)  

http://activemq.apache.org/activemq-500-release.data/activemq-5.x-box-reflection.png ActiveMQ 5.12.0 Release Apache ActiveMQ 5.12.0 resolves several issues https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12329258, and p

Page: [ActiveMQ 5.12.1 Release](https://cwiki.apache.org/confluence/display/ACTIVEMQ/ActiveMQ+5.12.1+Release)  

http://activemq.apache.org/activemq-500-release.data/activemq-5.x-box-reflection.png ActiveMQ 5.12.1 Release Apache ActiveMQ 5.12.1 includes several improvements and resolved issues https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=123112

Page: [ActiveMQ 5.12.2 Release](https://cwiki.apache.org/confluence/display/ACTIVEMQ/ActiveMQ+5.12.2+Release)  

http://activemq.apache.org/activemq-500-release.data/activemq-5.x-box-reflection.png ActiveMQ 5.12.2 Release Apache ActiveMQ 5.12.2 includes several improvements and resolved issues https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=123112

Page: [ActiveMQ 5.13.0 Release](https://cwiki.apache.org/confluence/display/ACTIVEMQ/ActiveMQ+5.13.0+Release)  

http://activemq.apache.org/activemq-500-release.data/activemq-5.x-box-reflection.png ActiveMQ 5.13.0 Release Apache ActiveMQ 5.13.0 includes several resolved issues https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=123298

Page: [ActiveMQ 5.13.1 Release](https://cwiki.apache.org/confluence/display/ACTIVEMQ/ActiveMQ+5.13.1+Release)  

http://activemq.apache.org/activemq-500-release.data/activemq-5.x-box-reflection.png ActiveMQ 5.13.1 Release Apache ActiveMQ 5.13.1 includes over 40 resolved issues https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=123342

Page: [ActiveMQ 5.13.2 Release](https://cwiki.apache.org/confluence/display/ACTIVEMQ/ActiveMQ+5.13.2+Release)  

http://activemq.apache.org/activemq-500-release.data/activemq-5.x-box-reflection.png ActiveMQ 5.13.2 Release Apache ActiveMQ 5.13.2 includes over 15 resolved issues https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=123347

Page: [ActiveMQ 5.13.3 Release](https://cwiki.apache.org/confluence/display/ACTIVEMQ/ActiveMQ+5.13.3+Release)  

http://activemq.apache.org/activemq-500-release.data/activemq-5.x-box-reflection.png ActiveMQ 5.13.3 Release Apache ActiveMQ 5.13.3 includes over 25 resolved issues https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=123350

Page: [ActiveMQ 5.13.4 Release](https://cwiki.apache.org/confluence/display/ACTIVEMQ/ActiveMQ+5.13.4+Release)  

http://activemq.apache.org/activemq-500-release.data/activemq-5.x-box-reflection.png ActiveMQ 5.13.4 Release Apache ActiveMQ 5.13.4 includes 30 resolved issues https://issues.apache.org/jira/secure/ReleaseNote.jspa?version=12335661&projectId=12311210 an

Page: [ActiveMQ 5.14.0 Release](https://cwiki.apache.org/confluence/display/ACTIVEMQ/ActiveMQ+5.14.0+Release)  

http://activemq.apache.org/activemq-500-release.data/activemq-5.x-box-reflection.png ActiveMQ 5.14.0 Release Apache ActiveMQ 5.14.0 includes many resolved issues https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12334188,

Page: [ActiveMQ 5.14.1 Release](https://cwiki.apache.org/confluence/display/ACTIVEMQ/ActiveMQ+5.14.1+Release)  

http://activemq.apache.org/activemq-500-release.data/activemq-5.x-box-reflection.png ActiveMQ 5.14.1 Release Apache ActiveMQ 5.14.1 includes many resolved issues https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12338124

Page: [ActiveMQ 5.14.2 Release](https://cwiki.apache.org/confluence/display/ACTIVEMQ/ActiveMQ+5.14.2+Release)  

http://activemq.apache.org/activemq-500-release.data/activemq-5.x-box-reflection.png ActiveMQ 5.14.2 Release Apache ActiveMQ 5.14.2 includes many resolved issues https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12338329

Page: [ActiveMQ 5.14.3 Release](https://cwiki.apache.org/confluence/display/ACTIVEMQ/ActiveMQ+5.14.3+Release)  

http://activemq.apache.org/activemq-500-release.data/activemq-5.x-box-reflection.png ActiveMQ 5.14.3 Release Apache ActiveMQ 5.14.3 includes several resolved issues https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=123388

Page: [ActiveMQ 5.14.4 Release](https://cwiki.apache.org/confluence/display/ACTIVEMQ/ActiveMQ+5.14.4+Release)  

http://activemq.apache.org/activemq-500-release.data/activemq-5.x-box-reflection.png ActiveMQ 5.14.4 Release Apache ActiveMQ 5.14.4 includes several resolved issues https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=123389

Page: [ActiveMQ 5.14.5 Release](https://cwiki.apache.org/confluence/display/ACTIVEMQ/ActiveMQ+5.14.5+Release)  

http://activemq.apache.org/activemq-500-release.data/activemq-5.x-box-reflection.png ActiveMQ 5.14.5 Release Apache ActiveMQ 5.14.5 includes several resolved issues https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=123389

Page: [ActiveMQ 5.15.0 Release](https://cwiki.apache.org/confluence/display/ACTIVEMQ/ActiveMQ+5.15.0+Release)  

http://activemq.apache.org/activemq-500-release.data/activemq-5.x-box-reflection.png ActiveMQ 5.15.0 Release Apache ActiveMQ 5.15.0 includes several resolved issues https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=123380

Page: [ActiveMQ 5.2.0 Release](https://cwiki.apache.org/confluence/display/ACTIVEMQ/ActiveMQ+5.2.0+Release)  

http://activemq.apache.org/activemq-500-release.data/activemq-5.x-box-reflection.png New Features in 5.2 Getting the Binary Distributions Description Download Link PGP Signature file of download Windows Distribution apache-activemq-5.2.0-bin.zip http://ar

Page: [ActiveMQ 5.3.0 Release](https://cwiki.apache.org/confluence/display/ACTIVEMQ/ActiveMQ+5.3.0+Release)  

http://activemq.apache.org/activemq-500-release.data/activemq-5.x-box-reflection.png New Features in 5.3 Getting the Binary Distributions Description Download Link PGP Signature file of download Windows Distribution apache-activemq-5.3.0-bin.zip http://ar

Page: [ActiveMQ 5.3.1 Release](https://cwiki.apache.org/confluence/display/ACTIVEMQ/ActiveMQ+5.3.1+Release)  

http://activemq.apache.org/activemq-500-release.data/activemq-5.x-box-reflection.png Apache ActiveMQ 5.3 is primarily a maintenance release which resolves https://issues.apache.org/activemq/secure/ReleaseNote.jspa?projectId=10520&styleName=Html&version=12

Page: [ActiveMQ 5.3.2 Release](https://cwiki.apache.org/confluence/display/ACTIVEMQ/ActiveMQ+5.3.2+Release)  

http://activemq.apache.org/activemq-500-release.data/activemq-5.x-box-reflection.png Apache ActiveMQ 5.3.2 is primarily a maintenance release which resolves https://issues.apache.org/activemq/secure/IssueNavigator.jspa?reset=true&&pid=10520&fixfor=12310&s

Page: [ActiveMQ 5.4.0 Release](https://cwiki.apache.org/confluence/display/ACTIVEMQ/ActiveMQ+5.4.0+Release)  

http://activemq.apache.org/activemq-500-release.data/activemq-5.x-box-reflection.png This release has been retracted due to bug AMQ-3491 https://issues.apache.org/jira/browse/AMQ-3491. It is no longer downloadable from ASF servers. Please use the ActiveMQ

Page: [ActiveMQ 5.4.1 Release](https://cwiki.apache.org/confluence/display/ACTIVEMQ/ActiveMQ+5.4.1+Release)  

http://activemq.apache.org/activemq-500-release.data/activemq-5.x-box-reflection.png This release has been retracted due to bug AMQ-3491 https://issues.apache.org/jira/browse/AMQ-3491. It is no longer downloadable from ASF servers. Please use the ActiveMQ

Page: [ActiveMQ 5.4.2 Release](https://cwiki.apache.org/confluence/display/ACTIVEMQ/ActiveMQ+5.4.2+Release)  

http://activemq.apache.org/activemq-500-release.data/activemq-5.x-box-reflection.png This release has been retracted due to bug AMQ-3491 https://issues.apache.org/jira/browse/AMQ-3491. It is no longer downloadable from ASF servers. Please use the ActiveMQ

Page: [ActiveMQ 5.4.3 Release](https://cwiki.apache.org/confluence/display/ACTIVEMQ/ActiveMQ+5.4.3+Release)  

http://activemq.apache.org/activemq-500-release.data/activemq-5.x-box-reflection.png Apache ActiveMQ 5.4.3 is a maintenance release which resolves AMQ-3491 https://issues.apache.org/jira/browse/AMQ-3491, a critical bug which caused the 5.4.0, 5.4.1, and 5

Page: [ActiveMQ 5.5.0 Release](https://cwiki.apache.org/confluence/display/ACTIVEMQ/ActiveMQ+5.5.0+Release)  

http://activemq.apache.org/activemq-500-release.data/activemq-5.x-box-reflection.png This release has been retracted due to bug AMQ-3491 https://issues.apache.org/jira/browse/AMQ-3491. It is no longer downloadable from ASF servers. Please use the ActiveMQ

Page: [ActiveMQ 5.5.1 Release](https://cwiki.apache.org/confluence/display/ACTIVEMQ/ActiveMQ+5.5.1+Release)  

http://activemq.apache.org/activemq-500-release.data/activemq-5.x-box-reflection.png Apache ActiveMQ 5.5.1 is a maintenance release which resolves AMQ-3491 https://issues.apache.org/jira/browse/AMQ-3491, a critical bug which caused the 5.5.0 release to be

Page: [ActiveMQ 5.6.0 Release](https://cwiki.apache.org/confluence/display/ACTIVEMQ/ActiveMQ+5.6.0+Release)  

http://activemq.apache.org/activemq-500-release.data/activemq-5.x-box-reflection.png Apache ActiveMQ 5.6.0 is primarily a maintenance release which resolves over 435 issues https://issues.apache.org/jira/secure/IssueNavigator.jspa?reset=true&jqlQuery=proj

Page: [ActiveMQ 5.7.0 Release](https://cwiki.apache.org/confluence/display/ACTIVEMQ/ActiveMQ+5.7.0+Release)  

http://activemq.apache.org/activemq-500-release.data/activemq-5.x-box-reflection.png Apache ActiveMQ 5.7.0 is primarily a maintenance release which resolves nearly 200 issues https://issues.apache.org/jira/secure/IssueNavigator.jspa?reset=true&jqlQuery=pr

Page: [ActiveMQ 5.8.0 Release](https://cwiki.apache.org/confluence/display/ACTIVEMQ/ActiveMQ+5.8.0+Release)  

http://activemq.apache.org/activemq-500-release.data/activemq-5.x-box-reflection.png Apache ActiveMQ 5.8.0 resolves 160 issues https://issues.apache.org/jira/secure/IssueNavigator.jspa?reset=true&jqlQuery=project+%3D+AMQ+AND+fixVersion+%3D+%225.8.0%22+AND

Page: [ActiveMQ 5.9.0 Release](https://cwiki.apache.org/confluence/display/ACTIVEMQ/ActiveMQ+5.9.0+Release)  

http://activemq.apache.org/activemq-500-release.data/activemq-5.x-box-reflection.png Apache ActiveMQ 5.9.0 resolves more than 200 issues https://issues.apache.org/jira/secure/IssueNavigator.jspa?reset=true&jqlQuery=project+%3D+AMQ+AND+fixVersion+%3D+%225.

Page: [ActiveMQ 5.9.1 Release](https://cwiki.apache.org/confluence/display/ACTIVEMQ/ActiveMQ+5.9.1+Release)  

http://activemq.apache.org/activemq-500-release.data/activemq-5.x-box-reflection.png Apache ActiveMQ 5.9.1 resolves more than 120 issues https://issues.apache.org/jira/secure/IssueNavigator.jspa?reset=true&jqlQuery=project+%3D+AMQ+AND+fixVersion+%3D+%225.

Page: [ActiveMQ C Development](https://cwiki.apache.org/confluence/display/ACTIVEMQ/ActiveMQ+C+++Development)  

ActiveMQ CPP Development Page This page documents current and planned development of ActiveMQ CPP. The table below lists development tasks and their current status Development Activeity Status Openwire Support in-progress Openwire Support This task adds

Page: [ActiveMQ C++ Clients](../Connectivity/Cross Language Clients/activemq-c-clients.md)  

ActiveMQ C++ Integration CMS http://activemq.apache.org/cms/ is an easy-to-use JMS 1.1-like API. Our implementation of CMS is called ActiveMQ-CPP, the architecture for which supports pluggable transport protocols, very much like the ActiveMQ broker itself

Page: [ActiveMQ Command Line Tools Reference](https://cwiki.apache.org/confluence/display/ACTIVEMQ/ActiveMQ+Command+Line+Tools+Reference)  

Command Line Tools The current script contains the entire functionality to manage activemq. ActiveMQ Command Line Tools Reference - runs an activemq broker (see Unix Shell Script) In versions prior 5.4.1 some management functionalities beyond controlling

Page: [ActiveMQ Connection URIs](https://cwiki.apache.org/confluence/display/ACTIVEMQ/ActiveMQ+Connection+URIs)  

Configuring Transports

Page: [ActiveMQ InactivityMonitor](https://cwiki.apache.org/confluence/display/ACTIVEMQ/ActiveMQ+InactivityMonitor)  

ActiveMQ InactivityMonitor The ActiveMQ InactivityMonitor is an active thread that checks the connection is still active and if it suspects the connection is not functioning correctly, it closes the connection. Connections are monitored by: Ensuring data

Page: [ActiveMQ Message Properties](https://cwiki.apache.org/confluence/display/ACTIVEMQ/ActiveMQ+Message+Properties)  

ActiveMQ Messages support the following default message properties: Message Attributes Accessed as Properties: Property Name Type Default Value Description JMSDestination javax.jms.Destination Set by the producer Destination used by the producer. JMSReply

Page: [ActiveMQ Performance Module Users Manual](https://cwiki.apache.org/confluence/display/ACTIVEMQ/ActiveMQ+Performance+Module+Users+Manual)  

Running Maven 2 Performance Test This Maven 2 http://maven.apache.org plugin allows you to run performance tests easily using the Maven command line or run tests automatically in Continuum http://maven.apache.org/continuum/ Prerequisites Starting with Act

Page: [ActiveMQ Real Time](https://cwiki.apache.org/confluence/display/ACTIVEMQ/ActiveMQ+Real+Time)  

ActiveMQ Real Time is a sub-project of the popular Apache ActiveMQ messaging system but is designed specifically to meet the needs for low latency high throughput collaborative real-time applications. It is designed to be used by multiple languages on mul

Page: [ActiveMQ6](https://cwiki.apache.org/confluence/display/ACTIVEMQ/ActiveMQ6)  

ActiveMQ6 is next Generation ActiveMQ.

Page: [Advisory Message](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Advisory+Message)  

ActiveMQ supports advisory messages which allows you to watch the system using regular JMS messages. Currently we have advisory messages that support: consumers, producers and connections starting and stopping temporary destinations being created and dest

Page: [Ajax](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Ajax)  

Introduction ActiveMQ supports Ajax http://en.wikipedia.org/wiki/Ajax_%28programming%29 which is an Asychronous Javascript And Xml mechanism for real time web applications. This means you can create highly real time web applications taking full advantage

Page: [All Forums](https://cwiki.apache.org/confluence/display/ACTIVEMQ/All+Forums)  

<a id="nabblelink" href="http://www.nabble.com/ActiveMQ-f2354.html">ActiveMQ</a> <script src="http://www.nabble.com/embed/f2354"></script>

Page: [AMQ Message Store](https://cwiki.apache.org/confluence/display/ACTIVEMQ/AMQ+Message+Store)  

The Basics This is the default storage for AcitveMQ 5 and above. The AMQ Message Store is an embeddable transactional message storage solution that is extremely fast and reliable. message commands are written to a transactional journal - which consists of

Page: [AMQP](https://cwiki.apache.org/confluence/display/ACTIVEMQ/AMQP)  

ActiveMQ supports the AMQP 1.0 https://www.oasis-open.org/committees/tc\_home.php?wg\_abbrev=amqp protocol which is an OASIS standard. Available from ActiveMQ version 5.8 onward. Enabling the ActiveMQ Broker for AMQP To enable AMQP protocol support on the b

Page: [Apache ActiveMQ Board Report - 2007.08 (August)](Index/Apache ActiveMQ Board ReportsIndex/Apache ActiveMQ Board Reports/Index/Apache ActiveMQ Board Reports/apache-activemq-board-report-200708-august.md)  

Status report for the Apache ActiveMQ Project July board report was missed in part due to a change in PMC chair. Community: * The developer and user communities remain very active. * New committer added: Albert Strasheim Development: The CMS API has been

Page: [Apache ActiveMQ Board Report - 2007.10 (October)](Index/Apache ActiveMQ Board ReportsIndex/Apache ActiveMQ Board Reports/Index/Apache ActiveMQ Board Reports/apache-activemq-board-report-200710-october.md)  

Status report for the Apache ActiveMQ Project Community: * The developer and user communities remain very active. * The Camel project, NMS project, and recent release candidate for ActiveMQ 5.0 have generated much mailing list activity. * A code grant has

Page: [Apache ActiveMQ Board Report - 2008.01 (January)](Index/Apache ActiveMQ Board ReportsIndex/Apache ActiveMQ Board Reports/Index/Apache ActiveMQ Board Reports/apache-activemq-board-report-200801-january.md)  

Status report for the Apache ActiveMQ Project Community: * Nicky Sandhu and Hadrian Zbarcea were voted in and accepted becoming ActiveMQ committers * A code grant was accepted for an NMS implementation that access Tibco EMS. * The development and user lis

Page: [Apache ActiveMQ Board Report - 2008.07 (July)](Index/Apache ActiveMQ Board Reports/apache-activemq-board-report-200807-july.md)  

Status report for the Apache ActiveMQ Project Community: * The ActiveMQ project has had another very busy quarter. Seven new contributors were voted in and accepted becoming ActiveMQ committers: * Gary Tully * Gert Vanthienen * Dejan Bosanac * Claus Ibsen

Page: [Apache ActiveMQ Board Report - 2008.10 (October)](Index/Apache ActiveMQ Board Reports/apache-activemq-board-report-200810-october.md)  

Status report for the Apache ActiveMQ Project Community: * The ActiveMQ project has had another very busy quarter. Jonathan Anstey was voted in as an ActiveMQ committer. * The development and user lists continue to stay vibrant. Development: * Lots of dev

Page: [Apache ActiveMQ Board Report - 2009.01 (January)](Index/Apache ActiveMQ Board ReportsIndex/Apache ActiveMQ Board Reports/Index/Apache ActiveMQ Board Reports/apache-activemq-board-report-200901-january.md)  

Status report for the Apache ActiveMQ Project Community: * The ActiveMQ project has had another very busy quarter. William Tam has been added as an ActiveMQ committer. * The development and user lists continue to stay vibrant. * The Camel sub project has

Page: [Apache ActiveMQ Board Report - 2009.04 (April)](Index/Apache ActiveMQ Board ReportsIndex/Apache ActiveMQ Board Reports/Index/Apache ActiveMQ Board Reports/apache-activemq-board-report-200904-april.md)  

Status report for the Apache ActiveMQ Project Community: * The ActiveMQ project has had another very busy but quiet quarter. * The development and user lists continue to stay vibrant. * The Camel sub project has completed moving to a TLP. Development: * A

Page: [Apache ActiveMQ Board Report - 2009.07 (July)](Index/Apache ActiveMQ Board ReportsIndex/Apache ActiveMQ Board Reports/Index/Apache ActiveMQ Board Reports/apache-activemq-board-report-200907-july.md)  

Community: * The ActiveMQ project has had another very busy but quiet quarter. * The development and user lists continue to stay vibrant. * New PMC members: Dejan Bosanac * New Committers: Colin MacNaughton, Bruce Snyder Development: * The first release o

Page: [Apache ActiveMQ Board Report - 2009.10 (October)](Index/Apache ActiveMQ Board ReportsIndex/Apache ActiveMQ Board Reports/Index/Apache ActiveMQ Board Reports/apache-activemq-board-report-200910-october.md)  

Community: * The ActiveMQ project has had another very busy but quiet quarter. * The development and user lists continue to stay vibrant. Development: * It was a busy an fruitful quarter which produced several new releases. Releases: * Apache.NMS 1.1.0 *

Page: [Apache ActiveMQ Board Report - 2010.01 (January)](Index/Apache ActiveMQ Board ReportsIndex/Apache ActiveMQ Board Reports/Index/Apache ActiveMQ Board Reports/apache-activemq-board-report-201001-january.md)  

Community: * The ActiveMQ project has had another very busy but quiet quarter. * The development and user lists continue to stay vibrant. * Tim Bish has joined the ActiveMQ PMC Development: * The Apache.NMS.Stomp project has begun development of its first

Page: [Apache ActiveMQ Board Report - 2010.05 (May)](Index/Apache ActiveMQ Board ReportsIndex/Apache ActiveMQ Board Reports/Index/Apache ActiveMQ Board Reports/apache-activemq-board-report-201005-may.md)  

Status report for the Apache ActiveMQ Project Apologies for missing the April board report deadline. Community: * The ActiveMQ project has had another very busy but quiet quarter. * The development and user lists continue to stay vibrant. Development: * W

Page: [Apache ActiveMQ Board Report - 2010.07 (July)](Index/Apache ActiveMQ Board ReportsIndex/Apache ActiveMQ Board Reports/Index/Apache ActiveMQ Board Reports/apache-activemq-board-report-201007-july.md)  

Community: The development and user lists continue to stay active and vibrant. No new committers or PMC members added Development: Working towards an ActiveMQ 5.4 release. Prototype broker core for ActiveMQ 6.x is showing promise Releases: ActiveMQ-CPP 3.

Page: [Apache ActiveMQ Board Report - 2010.10 (October)](Index/Apache ActiveMQ Board ReportsIndex/Apache ActiveMQ Board Reports/Index/Apache ActiveMQ Board Reports/apache-activemq-board-report-201010-october.md)  

Community: The development and user lists continue to stay active and vibrant. No new committers or PMC members added Development: Development has started on the next ActiveMQ 5.5 release. Prototype broker core slated for ActiveMQ 6.x is still under devel

Page: [Apache ActiveMQ Board Report - 2011.01 (January)](Index/Apache ActiveMQ Board ReportsIndex/Apache ActiveMQ Board Reports/Index/Apache ActiveMQ Board Reports/apache-activemq-board-report-201101-january.md)  

Community: The development and user lists continue to stay active. No new committers or PMC members added. Development: Development has started on the next ActiveMQ 5.5 release. Prototype broker core slated for ActiveMQ 6.x is still under development. Apa

Page: [Apache ActiveMQ Board Report - 2011.04 (April)](Index/Apache ActiveMQ Board Reports/apache-activemq-board-report-201104-april.md)  

Community: The development and user lists continue to stay active. Alex Dean (alexd) added as a committer to the project Development: Development has started on the next ActiveMQ 5.6 release. Development continues on the ActiveMQ Apollo 1.0 release. Devel

Page: [Apache ActiveMQ Board Report - 2011.07 (July)](Index/Apache ActiveMQ Board ReportsIndex/Apache ActiveMQ Board Reports/Index/Apache ActiveMQ Board Reports/apache-activemq-board-report-201107-july.md)  

Community: The development and user lists continue to stay active. No new committers or PMC members added. Development: Development has started on the next ActiveMQ 5.6 release. Apollo 1.0 is approaching completion. Several betas have been released and it

Page: [Apache ActiveMQ Board Report - 2011.10 (October)](Index/Apache ActiveMQ Board ReportsIndex/Apache ActiveMQ Board Reports/Index/Apache ActiveMQ Board Reports/apache-activemq-board-report-201110-october.md)  

Community: The development and user lists continue to stay active. No new committers or PMC members added. Development: A LGPL licensed artifact was discovered to be in a Apache Camel dependency which was included in the ActiveMQ 5.4.0, 5.4.1, 5.4.2 and 5

Page: [Apache ActiveMQ Board Report - 2012.01 (January)](Index/Apache ActiveMQ Board Reports/apache-activemq-board-report-201201-january.md)  

TLP Description: Apache ActiveMQ is a popular and powerful open source messaging server. Apache ActiveMQ is fast, supports many Cross Language Clients and Protocols, comes with easy to use Enterprise Integration Patterns and many advanced features while f

Page: [Apache ActiveMQ Board Report - 2012.04 (April)](Index/Apache ActiveMQ Board ReportsIndex/Apache ActiveMQ Board Reports/Index/Apache ActiveMQ Board Reports/apache-activemq-board-report-201204-april.md)  

TLP Description: Apache ActiveMQ is a popular and powerful open source messaging server. Apache ActiveMQ is fast, supports many Cross Language Clients and Protocols, comes with easy to use Enterprise Integration Patterns and many advanced features while f

Page: [Apache ActiveMQ Board Report - 2012.07 (July)](Index/Apache ActiveMQ Board ReportsIndex/Apache ActiveMQ Board Reports/Index/Apache ActiveMQ Board Reports/apache-activemq-board-report-201207-july.md)  

TLP Description: Apache ActiveMQ is a popular and powerful open source messaging server. Apache ActiveMQ is fast, supports many Cross Language Clients and Protocols, comes with easy to use Enterprise Integration Patterns and many advanced features while f

Page: [Apache ActiveMQ Board Report - 2012.10 (October)](Index/Apache ActiveMQ Board ReportsIndex/Apache ActiveMQ Board Reports/Index/Apache ActiveMQ Board Reports/apache-activemq-board-report-201210-october.md)  

TLP Description: Apache ActiveMQ is a popular and powerful open source messaging server. Apache ActiveMQ is fast, supports many Cross Language Clients and Protocols, comes with easy to use Enterprise Integration Patterns and many advanced features while f

Page: [Apache ActiveMQ Board Report - 2013.01 (January)](Index/Apache ActiveMQ Board ReportsIndex/Apache ActiveMQ Board Reports/Index/Apache ActiveMQ Board Reports/apache-activemq-board-report-201301-january.md)  

TLP Description: Apache ActiveMQ is a popular and powerful open source messaging server. Apache ActiveMQ is fast, supports many Cross Language Clients and Protocols, comes with easy to use Enterprise Integration Patterns and many advanced features while f

Page: [Apache ActiveMQ Board Report - 2013.04 (April)](Index/Apache ActiveMQ Board Reports/apache-activemq-board-report-201304-april.md)  

TLP Description: Apache ActiveMQ is a popular and powerful open source messaging server. Apache ActiveMQ is fast, supports many Cross Language Clients and Protocols, comes with easy to use Enterprise Integration Patterns and many advanced features while f

Page: [Apache ActiveMQ Board Report - 2013.07 (July)](Index/Apache ActiveMQ Board Reports/apache-activemq-board-report-201307-july.md)  

TLP Description: Apache ActiveMQ is a popular and powerful open source messaging server. Apache ActiveMQ is fast, supports many Cross Language Clients and Protocols, comes with easy to use Enterprise Integration Patterns and many advanced features while f

Page: [Apache ActiveMQ Board Report - 2013.10 (October)](Index/Apache ActiveMQ Board ReportsIndex/Apache ActiveMQ Board Reports/Index/Apache ActiveMQ Board Reports/apache-activemq-board-report-201310-october.md)  

TLP Description: Apache ActiveMQ is a popular and powerful open source messaging server. Apache ActiveMQ is fast, supports many Cross Language Clients and Protocols, comes with easy to use Enterprise Integration Patterns and many advanced features while f

Page: [Apache ActiveMQ Board Report - 2014.01 (January)](Index/Apache ActiveMQ Board Reports/apache-activemq-board-report-201401-january.md)  

TLP Description: Apache ActiveMQ is a popular and powerful open source messaging server. Apache ActiveMQ is fast, supports many Cross Language Clients and Protocols, comes with easy to use Enterprise Integration Patterns and many advanced features while f

Page: [Apache ActiveMQ Board Report - 2014.04 (April)](Index/Apache ActiveMQ Board ReportsIndex/Apache ActiveMQ Board Reports/Index/Apache ActiveMQ Board Reports/apache-activemq-board-report-201404-april.md)  

TLP Description: Apache ActiveMQ is a popular and powerful open source messaging server. Apache ActiveMQ is fast, supports many Cross Language Clients and Protocols, comes with easy to use Enterprise Integration Patterns and many advanced features while f

Page: [Apache ActiveMQ Board Report - 2014.07 (July)](Index/Apache ActiveMQ Board ReportsIndex/Apache ActiveMQ Board Reports/Index/Apache ActiveMQ Board Reports/apache-activemq-board-report-201407-july.md)  

TLP Description: Apache ActiveMQ is a popular and powerful open source messaging server. Apache ActiveMQ is fast, supports many Cross Language Clients and Protocols, comes with easy to use Enterprise Integration Patterns and many advanced features while f

Page: [Apache ActiveMQ Board Report - 2014.10 (October)](Index/Apache ActiveMQ Board Reports/apache-activemq-board-report-201410-october.md)  

TLP Description: Apache ActiveMQ is a popular and powerful open source messaging server. Apache ActiveMQ is fast, supports many Cross Language Clients and Protocols, comes with easy to use Enterprise Integration Patterns and many advanced features while f

Page: [Apache ActiveMQ Board Report - 2015.02 (February)](Index/Apache ActiveMQ Board Reports/apache-activemq-board-report-201502-february.md)  

TLP Description: Apache ActiveMQ is a popular and powerful open source messaging server. Apache ActiveMQ is fast, supports many Cross Language Clients and Protocols, comes with easy to use Enterprise Integration Patterns and many advanced features while f

Page: [Apache ActiveMQ Board Report - 2015.04 (April)](Index/Apache ActiveMQ Board ReportsIndex/Apache ActiveMQ Board Reports/Index/Apache ActiveMQ Board Reports/apache-activemq-board-report-201504-april.md)  

TLP Description: Apache ActiveMQ is a popular and powerful open source messaging server. Apache ActiveMQ is fast, supports many Cross Language Clients and Protocols, comes with easy to use Enterprise Integration Patterns and many advanced features while f

Page: [Apache ActiveMQ Board Report - 2015.06 (June)](Index/Apache ActiveMQ Board ReportsIndex/Apache ActiveMQ Board Reports/Index/Apache ActiveMQ Board Reports/apache-activemq-board-report-201506-june.md)  

The May ASF board meeting already took place this week, so we will need to publish this report in time for next month's meeting. TLP Description: Apache ActiveMQ is a popular and powerful open source messaging server. Apache ActiveMQ is fast, supports ma

Page: [Apache ActiveMQ Board Report - 2015.07 (July)](Index/Apache ActiveMQ Board ReportsIndex/Apache ActiveMQ Board Reports/Index/Apache ActiveMQ Board Reports/apache-activemq-board-report-201507-july.md)  

TLP Description: Apache ActiveMQ is a popular and powerful open source messaging server. Apache ActiveMQ is fast, supports many cross language clients and protocols, comes with easy to use enterprise integration patterns and many advanced features while f

Page: [Apache ActiveMQ Board Report - 2015.08 (August)](Index/Apache ActiveMQ Board Reports/apache-activemq-board-report-201508-august.md)  

TLP Description: Apache ActiveMQ is a popular and powerful open source messaging server. Apache ActiveMQ is fast, supports many cross language clients and protocols, comes with easy to use enterprise integration patterns and many advanced features while f

Page: [Apache ActiveMQ Board Report - 2015.10 (October)](Index/Apache ActiveMQ Board ReportsIndex/Apache ActiveMQ Board Reports/Index/Apache ActiveMQ Board Reports/apache-activemq-board-report-201510-october.md)  

TLP Description: Apache ActiveMQ is a popular and powerful open source messaging server. Apache ActiveMQ is fast, supports many cross language clients and protocols, comes with easy to use enterprise integration patterns and many advanced features while f

Page: [Apache ActiveMQ Board Report - 2016.02 (February)](Index/Apache ActiveMQ Board Reports/apache-activemq-board-report-201602-february.md)  

Description Apache ActiveMQ is a popular and powerful open source messaging server. Apache ActiveMQ is fast, supports many cross language clients and protocols, comes with easy to use enterprise integration patterns and many advanced features while fully

Page: [Apache ActiveMQ Board Report - 2016.04 (April)](Index/Apache ActiveMQ Board ReportsIndex/Apache ActiveMQ Board Reports/Index/Apache ActiveMQ Board Reports/apache-activemq-board-report-201604-april.md)  

Description Apache ActiveMQ is a popular and powerful open source messaging server. Apache ActiveMQ is fast, supports many cross language clients and protocols, comes with easy to use enterprise integration patterns and many advanced features while fully

Page: [Apache ActiveMQ Board Report - 2016.05 (May)](Index/Apache ActiveMQ Board ReportsIndex/Apache ActiveMQ Board Reports/Index/Apache ActiveMQ Board Reports/apache-activemq-board-report-201605-may.md)  

Apache ActiveMQ is a popular and powerful open source messaging server. Apache ActiveMQ is fast, supports many cross language clients and protocols, comes with easy to use enterprise integration patterns and many advanced features while fully supporting J

Page: [Apache ActiveMQ Board Report - 2016.07 (July)](Index/Apache ActiveMQ Board ReportsIndex/Apache ActiveMQ Board Reports/Index/Apache ActiveMQ Board Reports/apache-activemq-board-report-201607-july.md)  

Description Apache ActiveMQ is a popular and powerful open source messaging server. Apache ActiveMQ is fast, supports many cross language clients and protocols, comes with easy to use enterprise integration patterns and many advanced features while fully

Page: [Apache ActiveMQ Board Report - 2016.10 (October)](Index/Apache ActiveMQ Board Reports/apache-activemq-board-report-201610-october.md)  

Description Apache ActiveMQ is a popular and powerful open source message-oriented middleware. Apache ActiveMQ is fast, supports many cross language clients and protocols, comes with easy to use enterprise integration patterns and many advanced features w

Page: [Apache ActiveMQ Board Report - 2017.01 (January)](Index/Apache ActiveMQ Board ReportsIndex/Apache ActiveMQ Board Reports/Index/Apache ActiveMQ Board Reports/apache-activemq-board-report-201701-january.md)  

Description Apache ActiveMQ is a popular and powerful open source message-oriented middleware. Apache ActiveMQ is fast, supports many cross language clients and protocols, comes with easy to use enterprise integration patterns and many advanced features w

Page: [Apache ActiveMQ Board Report - 2017.04 (April)](Index/Apache ActiveMQ Board Reports/apache-activemq-board-report-201704-april.md)  

Description Apache ActiveMQ is a popular and powerful open source message-oriented middleware. Apache ActiveMQ is fast, supports many cross language clients and protocols, comes with easy to use enterprise integration patterns and many advanced features w

Page: [Apache ActiveMQ Board Report - 2017.07 (July)](Index/Apache ActiveMQ Board Reports/apache-activemq-board-report-201707-july.md)  

Description Apache ActiveMQ is a popular and powerful open source message-oriented middleware. Apache ActiveMQ is fast, supports many cross language clients and protocols, comes with easy to use enterprise integration patterns and many advanced features w

Page: [Apache ActiveMQ Board Report - April 2008](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Apache+ActiveMQ+Board+Report+-+April+2008)  

Status report for the Apache ActiveMQ Project Community: The ActiveMQ community continues to stay vibrant with a very healthy amount of email traffic flowing through it's email lists. It has also added several new committers to it's ranks. New Committers:

Page: [Apache ActiveMQ Board Reports](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Apache+ActiveMQ+Board+Reports)  

The current ActiveMQ reporting schedule is: January, April, July, October

Page: [Are destinations case sensitive](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Are+destinations+case+sensitive)  

There seems to be no consensus on whether JMS providers should use case insensitive destination names. Since most names in Java & J2EE are case sensitive (class names, JNDi names, file names (on many unix operating systems), URIs and URLs - we've followed

Page: [Are messages read directly from the journal](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Are+messages+read+directly+from+the+journal)  

Kind of. A message can be loaded directly from the journal if it was swapped out of memory. The journal cannot be used, however, to recover a durable subscription as it does not keep an ordered index of messages per durable sub. So when a durable sub is a

Page: [Articles](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Articles)  

This page captures resources and articles outside the ActiveMQ project which may assist your development. Please add any new resources that you come across by clicking the edit link at the bottom of the page. If you do this, please make sure to attach a d

Page: [Async Sends](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Async+Sends)  

Background ActiveMQ supports sending messages to a broker in sync or async mode. The mode used has a huge impact in the latency of the send call. Since latency is typically a huge factor in the throughput that can achieved by producer, using async sends c

Page: [Audit Logging](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Audit+Logging)  

For many secured environments there's a requirement to log every user management action. For that ActiveMQ implements audit logging, which means that every management action made through JMX or Web Console management interface will be logged and available

Page: [AUTO](https://cwiki.apache.org/confluence/display/ACTIVEMQ/AUTO)  

Starting with version 5.13.0, ActiveMQ supports wire format protocol detection. OpenWire, STOMP, AMQP, and MQTT can be automatically detected. This allows one transport to be shared for all 4 types of clients. Enabling AUTO over TCP To configure Active

Page: [Axis and CXF Support](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Axis+and+CXF+Support)  

ActiveMQ supports both Apache Axis http://ws.apache.org/axis/ and Apache CXF http://incubator.apache.org/cxf out of the box. Support for Axis is deprecated, and will be removed from ActiveMQ 5.8 onwards. Just add the required jars to your classpath and yo

#### B

Page: [Banner](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Banner)  

<div id="asf\_logo"> <div id="activemq\_logo"> <a style="float:left; width:280px;display:block;text-indent:-5000px;text-decoration:none;line-height:60px; margin-top:10px; margin-left:100px;" href="http://activemq.apache.org" title="The most popular and powe

Page: [Becoming a committer](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Becoming+a+committer)  

This page details how to become a committer. How to become a committer First of all you need to get involved and Contribute via the mail list, forums, edit the documention, work on the issue tracker and submit patches. Once you're contributing and your wo

Page: [Benchmark Tests](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Benchmark+Tests)  

ActiveMQ Maven Performance test plugin. Starting with ActiveMQ 5.5 and above the plugin can be obtained from maven or if you download the src from SVN you can build it yourself. To run the following Maven goals make sure you are inside a Maven2 project di

Page: [BlazeDS](https://cwiki.apache.org/confluence/display/ACTIVEMQ/BlazeDS)  

BlazeDS You may also want to check out the Simplified BlazeDS and JMS article http://mmartinsoftware.blogspot.com/2008/05/simplified-blazeds-and-/FAQ/jms.md by Michael Martin http://mmartinsoftware.blogspot.com/. Using the dynamicQueues feature of the JNDI S

Page: [Blob Messages](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Blob+Messages)  

Blob Messages A common requirement these days is to send around massive files for processing by consumers. Folks want to take advantage of the message broker's features such as reliable, transactional load balancing of queues with smart routing but still

Page: [Board Reports](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Board+Reports)  

Board Reports The following are the Apache Software Foundation Board Reports.

Page: [Books](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Books)  

Books This page lists the known books about Apache ActiveMQ. If you happen to know a book which is not listed then please contact us, for example using the Mailing Lists. ActiveMQ in Action http://bit.ly/2je6cQ Instant Apache ActiveMQ Messaging Applicatio

Page: [Broadcasting](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Broadcasting)  

ActiveBlaze provides infrastructure for fast, reliable peer to peer messaging to meet the demands of high performance and collaborative applications. Using the basic building block of a Channel, there exists a functional hierarchy used for different probl

Page: [Broker Camel Component](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Broker+Camel+Component)  

Broker Camel Component Available as of ActiveMQ 5.9 Embedding Apache Camel inside the ActiveMQ broker provides great flexibility for extending the message broker with the integration power of Camel. Apache Camel routes also benefit in that you can avoid t

Page: [Broker Configuration URI](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Broker+Configuration+URI)  

Overview An ActiveMQ broker can be extensivly configured using a single configuration URI. The following URI schemes are supported Scheme Link Description xbean: Broker XBean URI Configures the broker using an Xml Configuration from an XML file which is o

Page: [Broker Properties URI](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Broker+Properties+URI)  

Broker Properties URI From version 4.2 of ActiveMQ onwards the Broker Properties URI allows you to run a configured broker by referencing a properties file which could be on the classpath, a local file or a remote URL. Syntax properties:name Where name is

Page: [Broker URI](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Broker+URI)  

Broker URI The Broker URI allows you to run a configured broker using a single URI for all the configuration. Syntax The URI is assumed to be a composite uri with multiple uris that are used to bind the connectors of the broker. broker:(transportURI,netwo

Page: [Broker XBean URI](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Broker+XBean+URI)  

Broker XBean URI The Broker XBean URI allows you to run a configured broker by referencing an Xml Configuration on the classpath. The URI points to an XML document which can be parsed via XBean or Spring. This URI is typically on the classpath; though in

Page: [Building](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Building)  

Building ActiveMQ from Source ActiveMQ uses Maven http://maven.apache.org/ as its build and management tool. If you don't fancy using Maven you can use your IDE directly or Download a distribution or JAR. Prequisites Required: Download and install Maven h

Page: [Building ActiveMQ CPP](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Building+ActiveMQ+CPP)  

Dependencies libuuid The build requires the libuuid library that is part of the e2fsprogs package and is available from http://e2fsprogs.sourceforge.net/ http://e2fsprogs.sourceforge.net/ which is not always installed by default. cppunit The package conta

#### C

Page: [C Integration](https://cwiki.apache.org/confluence/display/ACTIVEMQ/C+Integration)  

It is very common for an organisation to have lots of legacy C code which needs integration into the message bus. The current available solutions are CMS is an easy-to-use JMS 1.1-like API for C++. Our implementation of CMS is called ActiveMQ-CPP, the arc

Page: [C integration scenarios](https://cwiki.apache.org/confluence/display/ACTIVEMQ/C+integration+scenarios)  

One way and RPC with C services Its common for the C services to be the back end services. The 2 common use cases are we send a message one-way to a C service we send a message to a C-service and wait for the result, then reply back to the originator the

Page: [Cached LDAP Authorization Module](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Cached+LDAP+Authorization+Module)  

Available since 5.6 Cached LDAP authorization module is an implementation of an default authorization module that initializes and updates data from LDAP. It supports all standard features like defining wildcard policy entries and entry for temporary desti

Page: [Can I get commercial support](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Can+I+get+commercial+support)  

Can I get commercial support? Absolutely, see our Support page for more details

Page: [Can I modify messages on a queue](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Can+I+modify+messages+on+a+queue)  

Can I modify messages on a queue? The short answer is no. In JMS messages are immutable once they have been sent. If you find you need to modify messages its recommended that you create a consumer with some selector which matches the messages you wish to

Page: [Can I send and receive messages concurrently on one JMS Connection](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Can+I+send+and+receive+messages+concurrently+on+one+JMS+Connection)  

Absolutely! Strictly speaking each producer being used concurrently should be using a separate session (though in ActiveMQ it'll probably work fine if you just use one session for all publishers). For concurrent consumption create a session per consumer -

Page: [Can I send really large files over ActiveMQ](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Can+I+send+really+large+files+over+ActiveMQ)  

Can I send really large files over ActiveMQ The answer is yes. If you are using ActiveMQ 4.2 or later we highly recommend you use Blob Messages which implements an out of band transport of the messages; it allows the files to be hosted on external http/ft

Page: [Can I use ActiveMQ 5.x or later on Java 1.4](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Can+I+use+ActiveMQ+5.x+or+later+on+Java+1.4)  

Can I use ActiveMQ 5.0 or later on Java 1.4? Apache ActiveMQ 5.x or later is developed to run on Java 5 or later to take advantage of the new language features together with the major fact that on Java 5 the new concurrency code is faster & less buggy and

Page: [Can two brokers share the same database](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Can+two+brokers+share+the+same+database)  

Can two brokers share the same database The short answer is no; 2 brokers cannot operate on the same sets of database tables concurrently. ActiveMQ is designed for high performance so we want to minimise the amount of pessimistic locking; each broker is d

Page: [Can you browse a topic](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Can+you+browse+a+topic)  

You can browse queues, can you browse a topic? No. But then consuming messages on a topic does not affect any other consumers, so you don't need to 'browse' per se, just subscribe. i.e. browsing is necessary on queues as you wanna see what messages there

Page: [certificate_unknown](https://cwiki.apache.org/confluence/display/ACTIVEMQ/certificate_unknown)  

If you get an error something like this... javax.jms.JMSException: start failed: Received fatal alert: certificate_unknown at org.activemq.transport.tcp.TcpTransportChannel.start(TcpTransportChannel.java:200) at org.activemq.broker.impl.BrokerConnectorImp

Page: [Changes in 4.0](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Changes+in+4.0)  

New Features in 4.0 MasterSlave provides support for continuous availability and fault tolerance of brokers to be able to handle catastrophic hardware failure and not loose a message (or get duplicates). A new Exclusive Consumer feature allows you to pin

Page: [Class Diagrams for activemq-4.0-M4 source code](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Class+Diagrams+for+activemq-4.0-M4+source+code)  

Class Diagrams for activemq-4.0-M4 source code. These diagrams cover the bulk of the source code and are in EMF format. http://docs.codehaus.org/download/attachments/50288/Class+Diagrams+activemq-4.0-M4.zip http://docs.codehaus.org/download/attachments/5

Page: [Clustering](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Clustering)  

Clustering is a large topic and often means different things to different people. We'll try to list the various aspects of clustering and how they relate to ActiveMQ Queue consumer clusters ActiveMQ supports reliable high performance load balancing of mes

Page: [Code Overview](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Code+Overview)  

Architecture The following section walks through the main parts of Apache ActiveMQ and links to the code to help you understand the layout http://activemq.apache.org/images/BrokerDiagram.png JMS Client The org.apache.activemq http://incubator.apache.org/a

Page: [Command Agent](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Command+Agent)  

https://issues.apache.org/jira/browse/AMQ-4406 https://issues.apache.org/jira/browse/AMQ-4406 Command Agent From 4.2 onwards Apache ActiveMQ allows you to communicate with a broker Command Agent to be able to perform administration queries and commands. T

Page: [Community](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Community)  

Page: [Compile ActiveMQ with GCJ](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Compile+ActiveMQ+with+GCJ)  

You can use GCJ http://gcc.gnu.org/java/ to build ActiveMQ as a shared library you can reuse from C++. Native compile ActiveMQ HOWTO Abstract This document describes how to native compile ActiveMQ for use in a C++ environment. The version of ActiveMQ used

Page: [Complex Single Broker Configuration (STOMP only)](../Using ActiveMQ/User Submitted Configurations/complex-single-broker-configuration-stomp-only.md)  

Example of an ActiveMQ configuration with predefined queues, simple destination security (could easily update it to JAAS), complex Web Console security with Jetty JAAS, and JMX security too. While this is a fairly detailed configuration, it locks down eve

Page: [Composite Destinations](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Composite+Destinations)  

As of version 1.1, ActiveMQ supports a technology we call composite destinations. This allows a single virtual JMS Destination to be used to represent a collection of JMS Destinations. For example you can use composite destinations to send a message to 12

Page: [Configurable IOException Handling](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Configurable+IOException+Handling)  

Starting with 5.3.1, ActiveMQ provides configurable IOException handling for its file-based message stores. From version 5.5 the handler is also invoked when the JDBC persistence adapter gets a failure on getConnection(). Default IOException handler Activ

Page: [Configuration](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Configuration)  

Questions on configuring ActiveMQ's JMS client or the Message Broker

Page: [Configure Startup Destinations](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Configure+Startup+Destinations)  

Typically in Apache ActiveMQ we create destinations on demand as clients start to use them. However sometimes users want to be able to configure which destinations are available on startup explicitly in the Xml Configuration. Note this feature is availabl

Page: [Configure version 5 Brokers](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Configure+version+5+Brokers)  

Overview There is an updates XML syntax for configuring message brokers - see here http://activemq.apache.org/schema/core/activemq-core-5.0-SNAPSHOT.xsd So we decided that using XML would make this configuration much easier. we use XBean http://xbean.org/

Page: [Configuring ActiveMQ CPP](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Configuring+ActiveMQ+CPP)  

The configuration of ActiveMQ is so slick, we decided to take a similar approach with ActiveMQ-CPP. All configuration is achieved via URI-encoded parameters, either on the connection or destinations. Through the URIs, you can configure virtually every fac

Page: [Configuring Brokers](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Configuring+Brokers)  

Overview In ActiveMQ 4, we are using a new xml format to configure the broker. Syntax The following xsd describes the syntax of the broker configuration file. activemq-4.0.xsd And here is the reference documentation for that xsd file. activemq-4.0.xsd.htm

Page: [Configuring Transports](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Configuring+Transports)  

Transport configuration options One of the first kinds of URI you are likely to use is a transport URI to connect to a broker using a kind of transport. Generally TCP or VM are the first transports you'll use. All of the following URI configurations are b

Page: [Configuring Version 5 Transports](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Configuring+Version+5+Transports)  

Configuring Transports

Page: [Configuring Wire Formats](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Configuring+Wire+Formats)  

The OpenWire Wire Format OpenWire is the default wire format used by ActiveMQ. It provides a highly efficient binary format for high speed messaging. OpenWire options can be configured on a JMS client's connection URI or on a broker's transport bind URI

Page: [Connection Configuration URI](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Connection+Configuration+URI)  

Connection Configuration URI An Apache ActiveMQ connection can be configured by explicitly setting properties on the ActiveMQConnection http://activemq.apache.org/maven/apidocs/org/apache/activemq/ActiveMQConnection.html or ActiveMQConnectionFactory http:

Page: [Connection Factory Properties](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Connection+Factory+Properties)  

The 'outbound' Connection Factory objects used to send messages by default use the connection configuration properties of the Resource Adapter deployment, but those properties can be overridden per connection factory. The Connection Factory properties tha

Page: [Connectivity](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Connectivity)  

Apache ActiveMQ is designed to support a large number if Cross Language Clients, speak a wide range of Protocols and be usable in a wide variety of Containers in addition to being usable in a stand alone Java SE platform.

Page: [Consumer Dispatch Async](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Consumer+Dispatch+Async)  

Overview From ActiveMQ v4: the choice of a broker performing synchronous or asynchronous dispatch to a consumer has become more configurable. It is now configured as a default value on the connection URI, Connection and ConnectionFactory as well as with b

Page: [Consumer Features](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Consumer+Features)  

Page: [Consumer Priority](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Consumer+Priority)  

Background As well as having a pluggable dispatch policy e.g. round robin, ActiveMQ also supports consumer priorities. This allows us to weight consumers to optimize network hops. For example, you typically want a broker to send messages to regular JMS co

Page: [Containers](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Containers)  

This page lists the various containers that Apache ActiveMQ works inside

Page: [Contributing](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Contributing)  

There are many ways you can help make ActiveMQ a better piece of software - please dive in and help! Try surf the documentation - if somethings confusing or not clear, let us know. Download the code & try it out and see what you think. Browse the source c

Page: [Could not find PacketReader for packet type - UNKNOWN PACKET TYPE](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Could+not+find+PacketReader+for+packet+type+-+UNKNOWN+PACKET+TYPE)  

Error Could not find PacketReader for packet type: UNKNOWN PACKET TYPE: -102 Reason You are probably using different versions of ActiveMQ jars on the client and the broker. Try using the same jars on each node and the problem should go away. Once 4.0 is G

Page: [Cross Language Clients](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Cross+Language+Clients)  

Apache ActiveMQ is a message broker written in Java with JMS, REST and WebSocket interfaces, however it supports protocols like AMQP, MQTT, OpenWire and STOMP that can be used by applications in different languages. Libraries .NET http://activemq.apache.o

#### D

Page: [Delay and Schedule Message Delivery](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Delay+and+Schedule+Message+Delivery)  

ActiveMQ from version 5.4 has an optional persistent scheduler built into the ActiveMQ message broker. It is enabled by setting the broker schedulerSupport attribute to true in the Xml Configuration. An ActiveMQ client can take advantage of a delayed deli

Page: [Delete Inactive Destinations](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Delete+Inactive+Destinations)  

An 'inactive' destination is one that has had no messages pending and no consumers connected for some configured period of time.By default the broker does not check for inactive destinations. This as governed by the default values for the following option

Page: [Delphi and FreePascal](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Delphi+and+FreePascal)  

Delphi and FreePascal Client Habari ActiveMQ Client is a library for Delphi(tm) and Free Pascal. With Habari, applications can connect to Apache ActiveMQ servers, subscribe to queues and topics, send and receive messages and objects, and work with transac

Page: [Design Documents](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Design+Documents)  

Slow Consumers Durable Queue Memory Management Supporting IO Streams Message Redelivery and DLQ Handling Multicast Transport Proposed C Client Architecture REST protocols

Page: [Destination Features](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Destination+Features)  

Page: [Destination Options](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Destination+Options)  

Background Destination Options are a way to provide extended configuration options to a JMS consumer without having to extend the JMS API. The options are encoded using URL query syntax in the destination name that the consumer is created on. Consumer Opt

Page: [Destinations Plugin](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Destinations+Plugin)  

In some environments clients can't create destinations and only administrators are allowed to do that using management consoles or APIs. This plugin allows users to export destinations created during the runtime of the broker and replicate that state on a

Page: [Developer Forum](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Developer+Forum)  

<a id="nabblelink" href="http://activemq.2283324.n4.nabble.com/ActiveMQ-Dev-f2368404.html">ActiveMQ - Dev</a> <script src="http://activemq.2283324.n4.nabble.com/embed/f2368404"></script>

Page: [Developer Guide](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Developer+Guide)  

The following documents might be interesting Building Release Plans Release Guide Design Documents Changes in 4.0 Apache ActiveMQ Board Reports Maven SNAPSHOT Repository in your POM Code walkthrough Code Overview Wire Protocol Developing Plugins

Page: [Developers](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Developers)  

Page: [Developing ActiveMQ](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Developing+ActiveMQ)  

Questions for developers wishing to extend or enhance Apache ActiveMQ

Page: [Developing Plugins](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Developing+Plugins)  

Apache ActiveMQ is based on the model of POJOs and Dependency Injection. If you are developing Interceptors or additional components or plugins for ActiveMQ then the first thing you should do is develop the code as if you are writing any other Spring comp

Page: [Discovery](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Discovery)  

Discovery Agents ActiveMQ uses an abstraction called a Discovery Agent http://actievmq.apache.org/maven/activemq-core/apidocs/org/apache/activemq/transport/discovery/DiscoveryAgent.html to detect remote services such as remote brokers. We can use discover

Page: [Discovery Transport Reference](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Discovery+Transport+Reference)  

The Discovery Transport The Discovery transport works just like the Failover transport, except that it uses a discovery agent to locate the list of uri to connect to. The Discovery transport is also used by the Fanout transport for discovering brokers to

Page: [Discussion Forums](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Discussion+Forums)  

Before posting you might want to read the Tips for getting help. Many users prefer to use online forums rather than joining a mail list which can lead to lots more email traffic so we use the online forums at Nabble forums http://activemq.2283324.n4.nabbl

Page: [Dispatch Policies](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Dispatch+Policies)  

Dispatch Policies Dispatch policies for queues Plug-able dispatch policies only apply to topics. For Queues, dispatch is more static, you can choose round robin (the default) or strict order. Before discussing dispatch policies its worth first understandi

Page: [Does ActiveMQ support clustering](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Does+ActiveMQ+support+clustering)  

Yes, though there are various kinds of clustering. See this page on details

Page: [Does ActiveMQ support my SQL database](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Does+ActiveMQ+support+my+SQL+database)  

Quite possibly . See the JDBC Support page for details of how to configure for your database or how to let us know of a database which does not work. Also see Persistence

Page: [Download](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Download)  

Latest Releases The latest stable release is the ActiveMQ 5.15.0 Release Getting past releases See the Download Archives for all time releases. In Progress Maven Repositories All ActiveMQ releases are available from the Maven central repository https://

Page: [Download Archives](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Download+Archives)  

Download archives You can use the Apache Archives to download all the ActiveMQ releases. http://archive.apache.org/dist/activemq/ http://archive.apache.org/dist/activemq/ - ActiveMQ releases http://archive.apache.org/dist/activemq/apache-activemq/ http://

Page: [Downloading ActiveMQ CPP](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Downloading+ActiveMQ+CPP)  

ActiveMQ CPP distributions are source-only. To get the source bundle for a particular release, go here. Follow the instructions here only if you want the bleeding edge from trunk. Web Browsing of SVN To browse via the web use the ViewVC interface: http://

Page: [DR](https://cwiki.apache.org/confluence/display/ACTIVEMQ/DR)  

Disaster Recovery. Typically this means having multiple data centres configured such that if there is a major catastrophy and an entire data centre is lost, messages are replicated to another location so the systems can continue running.

Page: [Durable Queue Memory Management](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Durable+Queue+Memory+Management)  

The current 3.x code can have issues with massive queues with un-acknowledged messages; its complex due to consumption from multiple points in the queue, consumers coming & going, selectors matching only certain points in the queue etc. This page outlines

#### E

Page: [Encrypted passwords](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Encrypted+passwords)  

As of ActiveMQ 5.4.1 you can encrypt your passwords and safely store them in configuration files. To encrypt the password, you can use the newly added encrypt command like: $ bin/activemq encrypt --password activemq --input mypassword ... Encrypted text:

Page: [Enterprise Integration Patterns](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Enterprise+Integration+Patterns)  

Enterprise Integration Patterns Version 5.0 onwards of Apache ActiveMQ comes complete with full support for the Enterprise Integration Patterns http://www.enterpriseintegrationpatterns.com/toc.html (from the excellent book by Gregor Hohpe http://www.amazo

Page: [Errors](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Errors)  

Questions on specific kinds of errors. If you have seen a specific exception then check the Exceptions

Page: [Example Testing Scenario](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Example+Testing+Scenario)  

ActiveMQ Performance Module Users Manual Example Testing Scenario This page gives a simple example of the kinds of thing we wanna do. Assuming that all the test code is within a single Maven POM for now (e.g. activemq-integration-test version 4.0) which w

Page: [Examples](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Examples)  

Version 5 Examples

Page: [Exceptions](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Exceptions)  

Questions Java Exceptions (when you get a nasty stack trace while working with ActiveMQ)

Page: [Exclusive Consumer](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Exclusive+Consumer)  

Background We maintain the order of messages in queues and dispatch them to consumers in order. However if you have multiple JMS Sessions and MessageConsumer instances consuming from the same queue (whether in the same JVM or not), you will loose the guar

#### F

Page: [Failover Transport Reference](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Failover+Transport+Reference)  

The Failover Transport The Failover transport layers reconnect logic on top of any of the other transports. The configuration syntax allows you to specify any number of composite URIs. The Failover transport randomly chooses one of the composite URIs and

Page: [Fanout Transport Reference](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Fanout+Transport+Reference)  

The Fanout Transport The Fanout transport layers reconnect and replication logic on top of any of the other transports. It utilizes the Discovery transport to discover brokers and replicates commands to those brokers. Configuration Syntax fanout:(discover

Page: [FAQ](https://cwiki.apache.org/confluence/display/ACTIVEMQ/FAQ)  

FAQ Here are a list of commonly asked questions and answers. If you have any questions which are not on this list, please talk to us on the forums. We welcome contributions and this entire website is a wiki that you can edit so please join in and help us

Page: [Features](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Features)  

Apache ActiveMQ Features Apache ActiveMQ is packed with features; to get an idea you might want to look at the Features Overview otherwise here is the list of all of the main features...

Page: [Features Overview](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Features+Overview)  

Supports a variety of Cross Language Clients and Protocols from Java, C, C++, C#, Ruby, Perl, Python, PHP OpenWire for high performance clients in Java, C, C++, C# Stomp support so that clients can be written easily in C, Ruby, Perl, Python, PHP, ActionSc

#### G

Page: [General](https://cwiki.apache.org/confluence/display/ACTIVEMQ/General)  

General questions about ActiveMQ

Page: [Geronimo](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Geronimo)  

ActiveMQ is the default JMS provider in Apache Geronimo http://geronimo.apache.org. ActiveMQ can be used both as JMS Client and a JMS Broker. This short article explains how to use it on a standalone client to access the topics/queues setup on a remote Ge

Page: [Getting Started](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Getting+Started)  

Introduction This document describes how to install and configure ActiveMQ 4.x/5.x for both Unix and Windows' platforms. Document Organization The Getting Started Guide for ActiveMQ 4.x document contains the following sections: Pre-Installation Requiremen

Page: [Group Membership](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Group+Membership)  

ActiveBlaze supports group membership using a GroupChannel - which can be created from a GroupChannelFactory. You have to explicitly say which group you want to join/leave - and you can join multiple groups. Each GroupChannel has both a globally unique id

#### H

Page: [HA](https://cwiki.apache.org/confluence/display/ACTIVEMQ/HA)  

High Availability. This typically refers to having a number of available instances of a service (such as a Message Broker) such that if the instance you're connected to fails, you can failover quickly to another instance providing high availabliity and re

Page: [Hello World](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Hello+World)  

The following is a very simple JMS application with multiple, concurrent, consumers and producers. See the Initial Configuration guide for details on how to setup your classpath correctly. Things you might do after running this example: Setup a broker ins

Page: [Hermes Jms](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Hermes+Jms)  

You can use ActiveMQ with Hermes JMS http://hermesjms.sourceforge.net/ which is a graphical user interface for working with JMS queues. Please refer to the Hermes JMS http://hermesjms.sourceforge.net/ site for detailed instructions on using this software.

Page: [Hermes Screenshot](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Hermes+Screenshot)  

The following is an example of running HermesJms with ActiveMQ on OS X http://activemq.codehaus.org/hermes.png

Page: [Horizontal Scaling](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Horizontal+Scaling)  

Page: [How can I add a new type of transport](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+can+I+add+a+new+type+of+transport)  

ActiveMQ is specifically designed to allow custom transports to be plugged in. You can programatically create TransportConnector instances and add them to the BrokerService in Java code using the BrokerService.addConnector() method http://activemq.codehau

Page: [How can I avoid serialization of Objects in ObjectMessage](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+can+I+avoid+serialization+of+Objects+in+ObjectMessage)  

Use the VM transport and see details on how to disable serialization to pass by value

Page: [How can I contribute](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+can+I+contribute)  

How can I contribute to Apache ActiveMQ? Contributing

Page: [How can I enable detailed logging](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+can+I+enable+detailed+logging)  

How can I enable detailed logging We use slf4j which allows the underlying logging implementation to be statically bound at startup. By default we ship with log4j but feel free to make your own choice. If you've got log4j.jar on your classpath you can use

Page: [How can I get a list of the topics and queues in a broker](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+can+I+get+a+list+of+the+topics+and+queues+in+a+broker)  

How can I get a list of the topics and queues in a broker? As of 5.1.0 you can use the new DestinationSource http://activemq.apache.org/maven/activemq-core/apidocs/org/apache/activemq/advisory/DestinationSource.html on an ActiveMQConnection to access the

Page: [How can I get help](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+can+I+get+help)  

Support

Page: [How can I get the source code from subversion](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+can+I+get+the+source+code+from+subversion)  

Source

Page: [How can I make ActiveMQ faster](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+can+I+make+ActiveMQ+faster)  

See the Performance page for information about the performance of ActiveMQ and it's tuning parameters.

Page: [How can I monitor ActiveMQ](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+can+I+monitor+ActiveMQ)  

How can I monitor ActiveMQ Starting with ActiveMQ 5.8.0 Jolokia http://www.jolokia.org/ is bundled which provides a RESTful interface to ActiveMQ's JMX capabilities. An open source third party tool that connects via Jolokia is hawt.io http://hawt.io/, an

Page: [How can I monitor the connection with the broker](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+can+I+monitor+the+connection+with+the+broker)  

How can I monitor the connection with the broker You can monitor the status of the connection with the broker via the addTransportListener() method on the ActiveMQConnection http://activemq.apache.org/maven/apidocs/org/apache/activemq/ActiveMQConnection.h

Page: [How can I see what destinations are used](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+can+I+see+what+destinations+are+used)  

The easiest way is to use JMX by pointing your JMX console or JConsole at the broker JVM. You can also get all of the active destinations from the broker using Java code via getDestinations() http://activemq.apache.org/maven/5.8.0/apidocs/org/apache/activ

Page: [How can I support auto reconnection](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+can+I+support+auto+reconnection)  

How can I support auto reconnection? Networks are unreliable and sockets do get dropped from time to time (it could be a network glitch, dodgy router, firewall, or someone could even just restart a broker). You often want a JMS client to automatically han

Page: [How can I support priority queues](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+can+I+support+priority+queues)  

How can I support priority queues? Use Message Priority A common requirement is to support priority consumption; so high priority messages are consumed before low priority. In version 5.4 priority queues are supported. Both the message cursors and the mes

Page: [How can I use different network protocols](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+can+I+use+different+network+protocols)  

For easy configuration, ActiveMQ supports a configurable URL to denote the connection mechanism to other clients. There is an example of how to do this along with a description of the available protocols in the Protocols overview

Page: [How do distributed queues work](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+do+distributed+queues+work)  

There are various Topologies that you can employ with ActiveMQ, where clients are connected to message brokers in various ways like peer based client server hub and spoke Each client communicates with a broker using some kind of client library and network

Page: [How do durable queues and topics work](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+do+durable+queues+and+topics+work)  

Durable queues keep messages around persistently for any suitable consumer to consume them. Durable queues do not need to concern themselves with which consumer is going to consume the messages at some point in the future. There is just one copy of a mess

Page: [How do I access ActiveMQ from C](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+do+I+access+ActiveMQ+from+C)  

See the C Integration page for the available options.

Page: [How do I access ActiveMQ from CSharp or dotNet](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+do+I+access+ActiveMQ+from+CSharp+or+dotNet)  

dot Net

Page: [How do I access ActiveMQ from Ruby, Perl, Python, PHP](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+do+I+access+ActiveMQ+from+Ruby%2C+Perl%2C+Python%2C+PHP)  

Use Stomp http://stomp.codehaus.org/ which is a simple to implement client protocol for working with ActiveMQ and other messaging systems.

Page: [How do I add my own plugins](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+do+I+add+my+own+plugins)  

See Developing Plugins for how to add your own functionality into Apache ActiveMQ

Page: [How do I avoid Maven downloading latest jars](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+do+I+avoid+Maven+downloading+latest+jars)  

You can use the -o switch (for offline mode) to avoid maven auto-downloading new snapshot jars (e.g. the Geronimo jars at the time of writing). maven -o or to run a server go to the \\assembly module and run maven -o server

Page: [How do I back-up KahaDB](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+do+I+back-up+KahaDB)  

In creating a backup, there may be an issue with the lock file, or with an inuse journal file. The lock file is not important but you would want the latest journal files. Freeze the filesystem containing the database to ensure that you get a consistent sn

Page: [How do I bridge different JMS providers](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+do+I+bridge+different+JMS+providers)  

To bridge from ActiveMQ to another JMS provider use the JMS bridge. To bridge to another kind of transport completely, use Camel http://camel.apache.org or ServiceMix http://servicemix.apache.org

Page: [How do I build but disable the unit tests](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+do+I+build+but+disable+the+unit+tests)  

How do I build but disable the unit tests The test cases in ActiveMQ can take a very long time to run! To disable this you can try the following mvn install -Dmaven.test.skip=true

Page: [How do I change dispatch policy](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+do+I+change+dispatch+policy)  

This is much simpler and more powerful in ActiveMQ 4.0 - you can configure different Dispatch Policies directly. For now in ActiveMQ 3.x we have a PrefetchPolicy configuration. This allows a certain number of messages to be dispatched to a consumer before

Page: [How do I change the logging](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+do+I+change+the+logging)  

How do I change the logging We use slf4j to log information in the broker client and the broker itself so you can fully configure which logging levels are used and whether to log to files or the console etc. For more information see the log4j manual. http

Page: [How do I change the message store directory for an embedded broker](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+do+I+change+the+message+store+directory+for+an+embedded+broker)  

Embedded brokers create an ActiveMQ directory under the current working directory to store it's persistent message data. To change the location of the directory used by the message store, set the activemq.store.dir system property to the directory you wan

Page: [How do I compile from the source](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+do+I+compile+from+the+source)  

How do I compile from the source code? See the Building page

Page: [How do I configure 10s of 1000s of Queues in a single broker](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+do+I+configure+10s+of+1000s+of+Queues+in+a+single+broker)  

Scaling Queues

Page: [How do I configure ActiveMQ to hold 100s of millions of Queue Messages](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+do+I+configure+ActiveMQ+to+hold+100s+of+millions+of+Queue+Messages)  

Scaling the Depth of a Queue

Page: [How do I configure ActiveMQ to use AIO server transport](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+do+I+configure+ActiveMQ+to+use+AIO+server+transport)  

For Windows XP: 1. Download AIO (Asynchronous IO for Java) from IBM (http://www.alphaworks.ibm.com/tech/aio4j http://www.alphaworks.ibm.com/tech/aio4j). 2. Unzip the downloaded file and copy the following files: ibmaio.dll ibmaio-1.0.jar 3. Place ibmaio.d

Page: [How do I configure automatic reconnection](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+do+I+configure+automatic+reconnection)  

If a JMS broker goes down, ActiveMQ can automatically reconnect to an available JMS broker using the failover: protocol. Not only does this automatically reconnect, it will also resume any temporary destinations, sessions, producers and most importantly c

Page: [How do I configure distributed queues or topics](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+do+I+configure+distributed+queues+or+topics)  

How do I configure distributed queues or topics You don't need to explicitly configure distributed queues or topics as any queue or topic is automatically distributed across other brokers when the brokers are configured in either a store and forward netwo

Page: [How do I configure the queues I want](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+do+I+configure+the+queues+I+want)  

How do I create new destinations With ActiveMQ there is no real resaon to explicitly setup/configure the queues you are gonna need. If you try to publish or subscribe from any queue or topic it will be silently created on the fly. Sometimes people put des

Page: [How do I connect to one of a number of message brokers](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+do+I+connect+to+one+of+a+number+of+message+brokers)  

You can specify a list of URLs to connect to (for example if you have message brokers running on a number of machines). To specify a list of URLs, use a comma separated list of URLs with a prefix of list:. e.g. list:tcp://localhost:61699,tcp://localhost:6

Page: [How do I consume a specific message](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+do+I+consume+a+specific+message)  

If you want to consume messages in a different order, or consume specific messages at the head, middle or tail of the queue, you can browse the messages using the QueueBrowser to find the JMSMessageID's of the messages you want to consume create a new con

Page: [How do I create new destinations](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+do+I+create+new+destinations)  

In ActiveMQ you do not have to create destinations up front before you can use them. The ActiveMQ broker auto-creates the physical resources associated with a destination on demand (i.e. when messages are sent to a new destination on a broker). This means

Page: [How do I debug ActiveMQ from my IDE](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+do+I+debug+ActiveMQ+from+my+IDE)  

One option is to run your broker in the same JVM as your application; see How To Unit Test JMS Code. Or you can try uncommenting ACTIVEMQ\_DEBUG\_OPTS in your activemq start script (bin/activemq or bin\\activemq.bat) and start remote debugging in your IDE. F

Page: [How do I define a local address and local port for TCP or SSL](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+do+I+define+a+local+address+and+local+port+for+TCP+or+SSL)  

TCP based transport protocols (including SSL) allow you to define the local address and local port for Socket to use when it's created. This can be useful for clients that reside on multi-homed machines or for clients operating in a DMZ, where only pre-de

Page: [How do I delete a destination](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+do+I+delete+a+destination)  

How do I delete a destination via Java code or JMX you can grab the BrokerViewMBean http://activemq.apache.org/maven/activemq-core/apidocs/org/apache/activemq/broker/jmx/BrokerViewMBean.html and call one of the following methods removeQueue(String) http:/

Page: [How do I disable logging](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+do+I+disable+logging)  

How do I disable logging? See How do I change the logging

Page: [How do I disable persistence](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+do+I+disable+persistence)  

There are three main ways to disable persistence, such as for unit testing JMS code Set the NON_PERSISTENT message delivery flag on your MessageProducer Set the persistent=false flag in the <broker/> element of the Xml Configuration or on the property Bro

Page: [How do I edit the website](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+do+I+edit+the+website)  

The website is all contained on a Wiki so that anyone can contribute How to edit You can also click the edit button when viewing the website which is located on the bottom of each page. We have been attacked by spammers so we are running a spam-avoiding s

Page: [How do I embed a Broker inside a Connection](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+do+I+embed+a+Broker+inside+a+Connection)  

In many messaging topologies there are JMS Brokers (server side) and a JMS client side. Often it makes sense to deploy a broker within your JVM. This allows you to optimise away a network hop; making the networking of JMS as efficient as pure RMI, but wit

Page: [How do I enable asynchronous sending](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+do+I+enable+asynchronous+sending)  

The default setting for ActiveMQ is that all persistent messages outside of a transaction are sent to a broker are synchronous. This means that the send method is blocked until the message is received by the broker, its then written to disk - then a respo

Page: [How do I enable debug logging](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+do+I+enable+debug+logging)  

How do I enable debug logging? For background see How do I change the logging. You can enable debug logging in ActiveMQ by adding the following line to the conf/log4j.properties file log4j.logger.org.apache.activemq=DEBUG

Page: [How do I find the Size of a Queue](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+do+I+find+the+Size+of+a+Queue)  

How do I check on the size of the queue? I know it's not JMS standard, but most JMS implementations have a way to do this. You can view the queue depth using the MBeans in ActiveMQ 5.x. Use any JMX management console to see the statistics. See How can I m

Page: [How do I get started with JMS](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+do+I+get+started+with+JMS)  

How do I get started with JMS Your best way to get started understanding the JMS API is Sun's JMS tutorial http://java.sun.com/j2ee/1.4/docs/tutorial/doc/JMS.html#wp84181. Alternatively you could stick to writing business level POJOs and hide the middlewa

Page: [How do I make messages durable](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+do+I+make+messages+durable)  

Durability of messages is defined by the MessagerProducer http://java.sun.com/j2ee/1.4/docs/api/javax/jms/MessageProducer.html. You can explicitly configure the durability via the setDeliveryMode() method http://java.sun.com/j2ee/1.4/docs/api/javax/jms/Me

Page: [How do I preserve order of messages](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+do+I+preserve+order+of+messages)  

ActiveMQ will preserve the order of messages sent by a single producer to all consumers on a topic. If there is a single consumer on a queue then the order of messages sent by a single producer will be preserved as well. If you have multiple consumers on

Page: [How do I purge a queue](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+do+I+purge+a+queue)  

A frequent requirement is to purge a queue (i.e. delete all the messages on it). Solution You can use the Web Console to view queues, add/remove queues, purge queues or delete/forward individual messages. Another option is to use JMX to browse the queues

Page: [How do I restart embedded broker](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+do+I+restart+embedded+broker)  

Pure restart of the embedded broker is not advisable, since it's state could be corrupted. Therefore, you're advised to instantiate the broker again before restarting it. BrokerService service = BrokerFactory.createBroker("xbean:activemq.xml"); service.st

Page: [How do I restrict connections from creating new queues or topics](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+do+I+restrict+connections+from+creating+new+queues+or+topics)  

How do I restrict connections from creating new queues or topics? As is described in How do I create new destinations there is no need to create all the destinations up front, you can let the broker create them on the fly. However if you don't want this b

Page: [How do I run a broker](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+do+I+run+a+broker)  

For ActiveMQ 3.x/4.x Please see the running a broker page

Page: [How do I run ActiveMQ under the Kaffe JVM](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+do+I+run+ActiveMQ+under+the+Kaffe+JVM)  

ActiveMQ will run under Kaffe with a few adjustments to the default configuration. We have found the Kaffe does not properly implement: File based NIO Multicast Sockets JMX connector JNDI handling Therefore, the default ActiveMQ configuration must be adju

Page: [How do I send messages to different Destinations from a single MessageProducer](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+do+I+send+messages+to+different+Destinations+from+a+single+MessageProducer)  

How do I send messages to different Destinations from a single MessageProducer? Create the MessageProducer using a null destination; then specify the destination each time you send... MessageProducer producer = session.createProducer(null); ... producer.s

Page: [How do I set the message expiration](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+do+I+set+the+message+expiration)  

JMSExpiration on a message is set by the MessageProducer in JMS - either via producer.setTimeToLive() http://java.sun.com/j2ee/1.4/docs/api/javax/jms/MessageProducer.html#setTimeToLive(long) producer.send(Destination, Message, int, int, long) http://java.

Page: [How do I turn off creating an embedded ActiveMQ broker when using the VM transport](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+do+I+turn+off+creating+an+embedded+ActiveMQ+broker+when+using+the+VM+transport)  

You can turn off auto creation by setting the create property on the VM Transport to false: ActiveMQConnectionFactory cf = new ActiveMQConnectionFactory("vm://localhost?create=false");

Page: [How do I unack the message with Stomp](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+do+I+unack+the+message+with+Stomp)  

There is no explicit "unack" command in Stomp. Once the client receives the message it cannot be marked as "unconsumed" and sent to another subscriber (or redelivered to the same subscriber again). It's up to your application (or Stomp client) to handle f

Page: [How do I use ActiveMQ using in JVM messaging](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+do+I+use+ActiveMQ+using+in+JVM+messaging)  

For ActiveMQ 3.x/4.x To use pure in-memory messaging you just need to set the broker URL to be vm://localhost Actually you can use any text after vm:// so that you can segment multiple logical JMS brokers within the same JVM and classloader, using the n

Page: [How do I use durable subscribers in a network of brokers](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+do+I+use+durable+subscribers+in+a+network+of+brokers)  

Durable subscribers behave a little differently across a cluster of ActiveMQ brokers. The two main issues surround messages getting stuck on other brokers in the network after a durable subscriber has disconnected and reconnected to a different broker in

Page: [How do I use Ivy with ActiveMQ](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+do+I+use+Ivy+with+ActiveMQ)  

<ivyconf> <!--loads properties file as ivy variables, 0..n--> <properties file="${ivy.conf.dir}/ivyconf-file.properties" /> <!--configures ivy with some defaults, 0..1--> <conf defaultResolver="localChain" checkUpToDate="false" /> <!--typedef:defines new

Page: [How do I use JMS efficiently](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+do+I+use+JMS+efficiently)  

How do I use JMS efficiently? JMS is designed for high performance. In particular its design is such that you are meant to create a number of objects up front on the startup of your application and then resuse them throughout your application. e.g. its a

Page: [How do I use log4j JMS appender with ActiveMQ](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+do+I+use+log4j+JMS+appender+with+ActiveMQ)  

Log4j JMS appender http://logging.apache.org/log4j/1.2/apidocs/org/apache/log4j/net/JMSAppender.html can be used to send your log messages to JMS broker. To use ActiveMQ as a destination of your messages, you need to configure JMS appender properly. The c

Page: [How do I use SSL](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+do+I+use+SSL)  

Setting up the Key and Trust Stores Also see Tomcat's SSL instructions http://jakarta.apache.org/tomcat/tomcat-5.5-doc/ssl-howto.html for more info. The following was provided by Colin Kilburn. Thanks Colin! ActiveMQ includes key and trust stores that ref

Page: [How do Message Groups compare to Selectors](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+do+Message+Groups+compare+to+Selectors)  

Selectors are just filters. Message Groups are a way of grouping messages together to the same consumer to partition your application or insure ordering is maintained. Now you could implement message groups by hand, by having each consumer use its own sel

Page: [How do multiple transports work](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+do+multiple+transports+work)  

For ActiveMQ 3.x/4.x The transport a client uses to connect to the broker is just the transport your client uses. So messages the broker sends to your client will be sent over that transport. However the broker can support many transports. So client A cou

Page: [How Do Transactions Work](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+Do+Transactions+Work)  

There are two levels of transaction support in ActiveMQ: JMS Transactions - the commit()/rollback() methods on a Session (which is like doing commit()/rollback() on a JDBC connection) XA Transactions - where the XASession http://activemq.apache.org/maven/

Page: [How does a Queue compare to a Topic](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+does+a+Queue+compare+to+a+Topic)  

Topics In JMS a Topic implements publish and subscribe semantics. When you publish a message it goes to all the subscribers who are interested - so zero to many subscribers will receive a copy of the message. Only subscribers who had an active subscriptio

Page: [How does ActiveMQ compare to AMQP](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+does+ActiveMQ+compare+to+AMQP)  

AMQP stands for the Advanced Message Queue Protocol and is a specification for how messaging clients and brokers can interoperate. AMQP is a specification of a wire-level protocol for client to message broker communication. It is not a messaging system li

Page: [How does ActiveMQ compare to Artemis](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+does+ActiveMQ+compare+to+Artemis)  

Artemis https://activemq.apache.org/artemis/ is the codename used for the HornetQ code that was donated to the Apache Foundation. It is possible that Artemis will eventually become the successor to ActiveMQ 5.x (and that it might eventually be branded as

Page: [How does ActiveMQ compare to Fuse Message Broker](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+does+ActiveMQ+compare+to+Fuse+Message+Broker)  

Fuse Message Broker http://fusesource.com/products/enterprise-activemq/ is a certified distribution of Apache ActiveMQ provided by FuseSource. FuseSource http://fusesource.com does all of its development and bug fixes as part of the Apache ActiveMQ commun

Page: [How does ActiveMQ compare to JBossMQ](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+does+ActiveMQ+compare+to+JBossMQ)  

There are some similarities between the two; they both support JMS 1.1 and run inside JBoss 4.x. However ActiveMQ does offer some specific differences and advantages (at least from our perspective) ActiveMQ works great in any JVM not just inside the JBoss

Page: [How does ActiveMQ compare to Mantaray](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+does+ActiveMQ+compare+to+Mantaray)  

We are obviously biased, and will tell you "just use ActiveMQ!" But Mantaray is an OK JMS provider. The interesting thing about MantaRay is it can support a peer-based network, just as ActiveMQ does with its peer transport. We benchmark against Mantaray a

Page: [How does ActiveMQ compare to Mule](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+does+ActiveMQ+compare+to+Mule)  

Apache ActiveMQ is a messaging provider, with extensive capabilities for message brokering. Mule is described as an ESB, in that it defines and executes the brokering of message exchanges among integrated software components. Architecture Mule provides an

Page: [How does ActiveMQ compare to Spread Toolkit](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+does+ActiveMQ+compare+to+Spread+Toolkit)  

Spread Toolkit is a C++ library for messaging and only has partial support for JMS http://www.spread.org/JMS4Spread/docs/. It doesn't support durable messaging, transactions, XA or full JMS 1.1. It is also dependent on a native code Spread daemon running

Page: [How does ConnectionFactory relate to the Broker](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+does+ConnectionFactory+relate+to+the+Broker)  

How does ConnectionFactory relate to the Broker? The ConnectionFactory is a JMS specification client side interface for creating connections to a JMS broker. The Broker is a service on the network or embedded in the same JVM which provides the message pro

Page: [How does JMS compare with email](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+does+JMS+compare+with+email)  

Certainly they both do similar things. The main difference between them is their history and design criteria. JMS has a bunch of different qualities of service (durable v non-durable, queue v topic) designed for very high performance messaging with low la

Page: [How does journaling work with multiple brokers](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+does+journaling+work+with+multiple+brokers)  

Brokers cannot share a journal. Each must be configured with it's own journal.

Page: [How does OpenWire compare to Stomp](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+does+OpenWire+compare+to+Stomp)  

OpenWire is the native protocol that Apache ActiveMQ uses. It is designed for performance and size on the wire - sacrificing some ease of implementation with higher performance and reduced network bandwidth as a priority. OpenWire was first released in Ap

Page: [How does the journal work](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+does+the+journal+work)  

See the description here

Page: [How does the website work](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+does+the+website+work)  

This website is actually rendered from the Wiki contents that you can edit. When viewing a page on the static HTML website you can click on the edit link (bottom of the page) and you can edit the page. Other useful Site links are Site Note that it takes a

Page: [How does XBean compare to Spring 2](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+does+XBean+compare+to+Spring+2)  

Spring 2.0 has introduced the ability to handle custom XML languages inside the spring.xml. This is something we developed XBean http://geronimo.apache.org/xbean/ for way back in the Spring 1.x days. The Spring hook requires component developers to write

Page: [How fast is ActiveMQ](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+fast+is+ActiveMQ)  

How fast is ActiveMQ? It all depends on the configuration, the operating system, hardware, JVM, JVM configuration and what you're doing. For more details see Performance Performance report

Page: [How lightweight is sending a message](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+lightweight+is+sending+a+message)  

For ActiveMQ 3.x/4.x It depends If you are in a JMS transaction, are using non-durable messaging then its fairly lightweight and fast - typically just blocking until the message has got onto the socket buffer. Though if you are using durable messaging and

Page: [How should I implement request response with JMS](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+should+I+implement+request+response+with+JMS)  

How should I implement request response with JMS? The simplest solution is to use Camel as a Spring Remoting provider http://activemq.apache.org/camel/spring-remoting.html which allows you to hide all the JMS API from your business logic and letting Camel

Page: [How should I package applications using Camel and ActiveMQ](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+should+I+package+applications+using+Camel+and+ActiveMQ)  

How should I package applications using Camel and ActiveMQ So you may wish to use Camel's Enterprise Integration Patterns inside the ActiveMQ Broker. In which case the stand alone broker is already packaged to work with Camel out of the box; just add your

Page: [How should I use the VM transport](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+should+I+use+the+VM+transport)  

For ActiveMQ 3.x/4.x Using the VM transport to connect to an in-JVM broker is the fastest and most efficient transport you can use. This is because by default there is no serialization to a socket or operating system socket resources used up; its purely a

Page: [How to Become a Committer on the ActiveMQ Project](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+to+Become+a+Committer+on+the+ActiveMQ+Project)  

How to Become a Committer on the ActiveMQ Project This page is under active development so the ideas here are very fluid right now. As outlined on How It Works document http://www.apache.org/foundation/how-it-works.html and the ASF roles https://www.apach

Page: [How to configure a new database](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+to+configure+a+new+database)  

ActiveMQ explicity supports Derby, Axion, HSQL, Oracle, and SQLServer. Below are the steps on how to configure a new database. 1. Modify activemq.xml found in the directory "activemq_home/conf" by editing or adding a JDBC DataSource Configuration. e.g. <b

Page: [How to deal with large number of threads in clients](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+to+deal+with+large+number+of+threads+in+clients)  

If you study thread allocation in ActiveMQ clients, you'll notice that by default there is one thread allocated by every session. This basically means that session will use its ThreadPoolExecutor http://docs.oracle.com/javase/6/docs/api/java/util/concurre

Page: [How to deploy activemq-ra-version.rar to weblogic](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+to+deploy+activemq-ra-version.rar+to+weblogic)  

This is a guide on how to deploy ActiveMQ's resouce adapter to weblogic 9.1. Create a new domain in weblogic using the configuration wizard (Start menu BEA Products -> Tools -> configuration Wizard ). Add the jar dependencies (these are the jars inside th

Page: [How to disable auto destination creation](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+to+disable+auto+destination+creation)  

see How do I restrict connections from creating new queues or topics

Page: [How to disable multicast discovery](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+to+disable+multicast+discovery)  

By default, the ActiveMQ xml configuration includes the multicast discovery mechanism. The tcp transport connector advertises its self using multicast and a multicast network connector is configured to listen to the same address. In this way, all brokers

Page: [How To Unit Test JMS Code](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+To+Unit+Test+JMS+Code)  

When unit testing code with JMS you'll typically want to avoid the overhead of running separate proceses; plus you'll want to increase startup time as fast as possible as you tend to run unit tests often and want immediate feedback. Also persistence can o

Page: [How you can help release](https://cwiki.apache.org/confluence/display/ACTIVEMQ/How+you+can+help+release)  

How to Help Everyone in the ActiveMQ community can help with releases; users, developers, commmiters are all encouraged to test out a release and post any comments to the activemq-dev@ mailing list or create a JIRA https://issues.apache.org/activemq/brows

Page: [HTTP and HTTPs Transports Reference](https://cwiki.apache.org/confluence/display/ACTIVEMQ/HTTP+and+HTTPs+Transports+Reference)  

HTTP and HTTPS Transports The HTTP and HTTPS transports are used to tunnel over HTTP or HTTPS using XML payloads. This allows the ActiveMQ client and broker to tunnel over HTTP avoiding any firewall issues. If the client is not JMS you might want to look

#### I

Page: [I am having problems with the Spring JmsTemplate](https://cwiki.apache.org/confluence/display/ACTIVEMQ/I+am+having+problems+with+the+Spring+JmsTemplate)  

I am having problems with the Spring JmsTemplate For more detail see the JmsTemplate Gotchas page along with the Spring Support

Page: [I am not receiving any messages, what is wrong](https://cwiki.apache.org/confluence/display/ACTIVEMQ/I+am+not+receiving+any+messages%2C+what+is+wrong)  

I am not receiving any messages - what is wrong? A very common gotcha when working with JMS is forgetting to start the JMS connection, creating a consumer and not having it receive any messages. I myself have tripped up over this one many many times! Make

Page: [I cannot connect to ActiveMQ from JConsole](https://cwiki.apache.org/confluence/display/ACTIVEMQ/I+cannot+connect+to+ActiveMQ+from+JConsole)  

Make sure that the machine you are talking to has a valid java.rmi.server.hostname-property value e.g. on unix (OS X, Linux, Solaris) export ACTIVEMQ\_OPTS=$ACTIVEMQ\_OPTS -Djava.rmi.server.hostname=<hostname> activemq or on Windows SET ACTIVEMQ_OPTS=%ACTIV

Page: [I do not receive messages in my second consumer](https://cwiki.apache.org/confluence/display/ACTIVEMQ/I+do+not+receive+messages+in+my+second+consumer)  

Scenario You send 100 messages to a queue. Start consumer A, it receives the message You start another consumer B, it doesn't receive any messages. You kill A. Consumer B receives messages now, why? Answer This is to do with prefetch buffers. ActiveMQ wil

Page: [I get errors building the code whats wrong](https://cwiki.apache.org/confluence/display/ACTIVEMQ/I+get+errors+building+the+code+whats+wrong)  

We currently use a multi-project maven build system, which can be a little fragile. If you are ever having problems building we suggest you try the following in the root activemq directory mvn clean rm -rf ~/.m2/repository mvn You may also want to disable

Page: [I see NC_ client-ids, what does that mean](https://cwiki.apache.org/confluence/display/ACTIVEMQ/I+see+NC_+client-ids%2C+what+does+that+mean)  

Durable subscription ClientIds and SubscriptionNames using the NC prefix are the result of durable subscriptions in a Networks of Brokers. When a durable subscription is being forwarded by a network connector (or demand forwarding bridge), the network dur

Page: [Ideas](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Ideas)  

This page hosts various ideas and thoughts...

Page: [In Progress](https://cwiki.apache.org/confluence/display/ACTIVEMQ/In+Progress)  

Releases In Progress The following releases are currently in progress

Page: [Inbound Communication](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Inbound+Communication)  

Configuring an MDB to receive messages from ActiveMQ There are three MDBs declared in the ejb-jar.xml deployment descriptor. For this example, I will be explaining how to configure the TopicDurableMDB to be invoked by JBoss when a message is received on a

Home page: [Index](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Index)  

Download ActiveMQ 5.15.0 Today! Apache ActiveMQ http://activemq.apache.org/ ™ is the most popular and powerful open source messaging and Integration Patterns server. Apache ActiveMQ is fast, supports many Cross Language Clients and Protocols, comes with e

Page: [Initial Configuration](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Initial+Configuration)  

Initial Configuration Document Organization #Required JARs #Optional JARS #Persistence Support #Next steps #Additional Resources #Related Reading #Specifications #Related open source projects Firstly you need to add the jars to your classpath. Required JA

Page: [Installation](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Installation)  

Download a binary distribution of ActiveMQ and unpack it into some directory. To run an ActiveMQ broker, type the following commands from the directory in which you have just unpacked the ActiveMQ distribution. cd bin activemq The ActiveMQ broker should n

Page: [Integrating Apache ActiveMQ with Glassfish](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Integrating+Apache+ActiveMQ+with+Glassfish)  

General See this article for a description of how to connect Glassfish 3 to an ActiveMQ 5 broker, and consume messages using a Message Driven Bean: http://geertschuring.wordpress.com/2012/04/20/how-to-connect-glassfish-3-to-activemq-5/ http://geertschurin

Page: [Integrating Apache ActiveMQ with JBoss](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Integrating+Apache+ActiveMQ+with+JBoss)  

Integrating Apache ActiveMQ with JBoss Integration with application servers is a common scenario in the enterprise Java world, especially when it comes to messaging. ActiveMQ http://activemq.org/ is a JMS 1.1 compliant, open source, Apache Licensed, messa

Page: [Integration Tests](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Integration+Tests)  

The Integration Tests validate that ActiveMQ Resource Adapter operate correctly when deployed with a J2EE application running in an Application Server such as Apache Geronimo. Getting Ready The instructions on this page reference a few directories that yo

Page: [Interceptors](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Interceptors)  

ActiveMQ has a sophisticated interceptor stack so that you can attach whatever functionality you require into the broker in an easy way without complicating all of the other broker code. This has really helped us keep the code clean and modular while offe

Page: [IOException - could not find class for resource](https://cwiki.apache.org/confluence/display/ACTIVEMQ/IOException+-+could+not+find+class+for+resource)  

If you get an exception looking like this Reason: java.io.exception : could not find class for resource: META-INF/services/org/apache/activemq/transport/tcp Cause You are probably using the ActiveMQ source code without using the resources Quick fix Try

Page: [IRC](https://cwiki.apache.org/confluence/display/ACTIVEMQ/IRC)  

Committers and contributors can often be found hanging out in IRC. Below is the information about the channel that we use: Server: irc.freenode.net Channel: #apache-activemq There are many IRC clients https://en.wikipedia.org/wiki/Comparison\_of\_Internet_

Page: [Is there a specified size of the journal](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Is+there+a+specified+size+of+the+journal)  

There is a "preferred" size for each log file of the journal. By default there are 2 20 meg log files.

#### J

Page: [J2EE](https://cwiki.apache.org/confluence/display/ACTIVEMQ/J2EE)  

In J2EE 1.4 or later the standard way to integrate with a JMS provider is via JCA 1.5 and a Resource Adapter. Resource Adapter

Page: [Java Service Wrapper](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Java+Service+Wrapper)  

This page provides some useful information on running the ActiveMQ broker as a windows-NT service or a daemon thread in Linux or Unix systems. The ActiveMQ distribution uses an older and free community release of the service wrapper library. This wrapper

Page: [java.io.InterruptedIOException](https://cwiki.apache.org/confluence/display/ACTIVEMQ/java.io.InterruptedIOException)  

The activemq client will throw an java.io http://java.io.InterruptedIOException if the calling thread has been interrupted while the transport (ResponseCorrelator) is waiting for a response. Thread interruption while waiting for a response is treated a

Page: [java.io.IOException Failed to create database 'derbydb', see the next exception for details](https://cwiki.apache.org/confluence/display/ACTIVEMQ/java.io.IOException+Failed+to+create+database+%27derbydb%27%2C+see+the+next+exception+for+details)  

If you get an error like this Jun 19, 2006 10:35:27 PM org.apache.activemq.broker.BrokerService getBroker INFO: ActiveMQ 4.0 JMS Message Broker (localhost) is starting Jun 19, 2006 10:35:27 PM org.apache.activemq.broker.BrokerService getBroker INFO: For h

Page: [java.lang.NoSuchMethodError](https://cwiki.apache.org/confluence/display/ACTIVEMQ/java.lang.NoSuchMethodError)  

If you get an error like java.lang.NoSuchMethodError: javax.jms.Session.createConsumer(Ljavax/jms/Destination;)Ljavax/jms/MessageConsumer; or java.lang.AbstractMethodError: javax.jms.ConnectionFactory.createConnection()Ljavax/jms/Connection; Fix You proba

Page: [java.lang.NoSuchMethodException org.activemq.ra.ActiveMQResourceAdapter.setUseEmbeddedBroker](https://cwiki.apache.org/confluence/display/ACTIVEMQ/java.lang.NoSuchMethodException+org.activemq.ra.ActiveMQResourceAdapter.setUseEmbeddedBroker)  

If you get an error like this 2005-08-14 17:18:45,618 ERROR \[org.jboss.resource.deployment.RARDeployment\] Starting failed jboss.jca:service=RARDeployment,name='activemq-ra-3.0.rar' org.jboss.deployment.DeploymentException: Error for resource adapter class

Page: [java.lang.OutOfMemory](https://cwiki.apache.org/confluence/display/ACTIVEMQ/java.lang.OutOfMemory)  

Ok, this is manageable. It is possible to configure just about all of the memory utilisation of ActiveMQ. The first thing to determine is what part of the system is running out of memory. Is it the JVM, the broker, the consumers or the producers? This ent

Page: [JavaDocs](https://cwiki.apache.org/confluence/display/ACTIVEMQ/JavaDocs)  

JavaDocs for Apache ActiveMQ Versioned JavaDocs for Apache ActiveMQ could be found at http://activemq.apache.org/maven/ http://activemq.apache.org/maven/x.y.z/apidocs/index.html kind of url, where x.y.z is broker version you're looking for. For example ht

Page: [javax.jms.JMSException - Wire format negociation timeout - peer did not send his wire format.](../FAQ/Errors/Exceptions/javaxjmsjmsexception-wire-format-negociation-timeout-peer-did-not-send-his-wire-format.md)  

If you get exception like this: javax.jms.JMSException: Wire format negociation timeout: peer did not send his wire format. at org.apache.activemq.util.JMSExceptionSupport.create(JMSExceptionSupport.java:58) at org.apache.activemq.ActiveMQConnection.syncS

Page: [JAXB 2.0 API is being loaded from the bootstrap classloader, but this RI () needs 2.1 API.](jaxb-20-api-is-being-loaded-from-the-bootstrap-classloader-but-this-ri-needs-21-Index/Site/NavigationIndex/Site/Navigation/Index/Site/Navigation/api.md)  

When using JDK 6 (up to JDK 6 Update 3) to run ActiveMQ you can run into this exception. There are two solutions to this: Upgrade to JDK to 1.6.0\_04 or above, which includes JAXB 2.1 Copy JAXB 2.1 to <JAVA\_HOME>/lib/endorsed to override the API jars that

Page: [JAXB 2.0 API is being loaded from the bootstrap classloader, but this RI (xxx) needs 2.1 API](https://cwiki.apache.org/confluence/display/ACTIVEMQ/JAXB+2.0+API+is+being+loaded+from+the+bootstrap+classloader%2C+but+this+RI+%28xxx%29+needs+2.1+API)  

When using JDK 6 (up to JDK 6 Update 3) to run ActiveMQ you can run into this exception. There are two solutions to this: Upgrade to JDK to 1.6.0\_04 or above, which includes JAXB 2.1 Copy JAXB 2.1 to <JAVA\_HOME>/lib/endorsed to override the API jars that

Page: [JBoss Integration](https://cwiki.apache.org/confluence/display/ACTIVEMQ/JBoss+Integration)  

Integrating Apache ActiveMQ with JBoss

Page: [JCA Container](https://cwiki.apache.org/confluence/display/ACTIVEMQ/JCA+Container)  

We will continune to support the ActiveMQ JCA Container up until ActiveMQ 3.1. After that point we will be moving to Jencks http://jencks.codehaus.org/ which is a migration of the ActiveMQ codebase together with code Geronimo http://geronimo.apache.org an

Page: [JDBC Master Slave](https://cwiki.apache.org/confluence/display/ACTIVEMQ/JDBC+Master+Slave)  

JDBC Master Slave First supported in ActiveMQ version 4.1 If you are using pure JDBC and not using the high performance journal then you are generally relying on your database as your single point of failure and persistence engine. If you do not have real

Page: [JDBC Support](https://cwiki.apache.org/confluence/display/ACTIVEMQ/JDBC+Support)  

We support a range of SQL databases for message persistence such as Apache Derby Axion DB2 HSQL Informix MaxDB MySQL Oracle Postgresql SQLServer Sybase as well as a number of generic JDBC providers. Auto-discovery of your JDBC provider We try to auto-dete

Page: [JMeter Performance Tests](https://cwiki.apache.org/confluence/display/ACTIVEMQ/JMeter+Performance+Tests)  

JMeter performance test You can use JMeter to test the performance of your ActiveMQ Server. Please refer to the JMeter site http://jakarta.apache.org/jmeter/ for detailed instructions on using this software. Downloading the JMeter Performance Test Binary

Page: [JMeter System Tests](https://cwiki.apache.org/confluence/display/ACTIVEMQ/JMeter+System+Tests)  

JMeter System Tests You can use JMeter to test your ActiveMQ Server. Please refer to the JMeter site for detailed instructions on using this software. The Test would check for duplicate messages and the order of messages received. Building a Test Plan For

Page: [JMS](https://cwiki.apache.org/confluence/display/ACTIVEMQ/JMS)  

Questions on using the JMS API and MOM in general

Page: [JMS and JDBC operations in one transaction](https://cwiki.apache.org/confluence/display/ACTIVEMQ/JMS+and+JDBC+operations+in+one+transaction)  

JMS and JDBC operations in one transaction with Spring/Jencks/ActiveMQ Spring beans: <beans> <!-- ActiveMQ Broker --> <bean id="broker" class="org.apache.activemq.broker.BrokerService" init-method="start" destroy-method="stop"> <property name="persistent"

Page: [JMS Bridge With Local Broker](https://cwiki.apache.org/confluence/display/ACTIVEMQ/JMS+Bridge+With+Local+Broker)  

Example of a configuration that shows how to use a BridgeConnector to make a connection to the local ActiveMQ broker. <beans> <!-- Allows us to use system properties as variables in this configuration file --> <bean class="org.springframework.beans.factor

Page: [JMS Bridge With Oracle AQ](https://cwiki.apache.org/confluence/display/ACTIVEMQ/JMS+Bridge+With+Oracle+AQ)  

Example of a configuration that shows how to connect to Oracle AQ queues and topics. <beans> <!-- Allows us to use system properties as variables in this configuration file --> <bean class="org.springframework.beans.factory.config.PropertyPlaceholderConfi

Page: [JMS Bridge With Remote Broker](https://cwiki.apache.org/confluence/display/ACTIVEMQ/JMS+Bridge+With+Remote+Broker)  

Example of a configuration that shows how to use a BridgeConnector to make a connection to a remote ActiveMQ broker. <beans> <!-- Allows us to use system properties as variables in this configuration file --> <bean class="org.springframework.beans.factory

Page: [JMS Bridge With Remote TIBCO Broker](https://cwiki.apache.org/confluence/display/ACTIVEMQ/JMS+Bridge+With+Remote+TIBCO+Broker)  

Example of a configuration that shows how to use a BridgeConnector to make a connection to a remote TIBCO EMS broker. <beans> <!-- Allows us to use system properties as variables in this configuration file --> <bean class="org.springframework.beans.factor

Page: [JMS Streams](https://cwiki.apache.org/confluence/display/ACTIVEMQ/JMS+Streams)  

deprecated This feature is deprecated, and end users is encouraged to not use it. This feature will be removed in a later ActiveMQ release. Sometimes you need to send truly massive files (many Gb) around the network in a reliable manner. The JMS API expec

Page: [JMS to JMS Bridge](https://cwiki.apache.org/confluence/display/ACTIVEMQ/JMS+to+JMS+Bridge)  

Introduction Note that we recommend you look at using Apache Camel http://camel.apache.org/ for bridging ActiveMQ to or from any message broker (or indeed any other technology, protocol or middleware http://camel.apache.org/components.html) as its much ea

Page: [JmsTemplate Gotchas](https://cwiki.apache.org/confluence/display/ACTIVEMQ/JmsTemplate+Gotchas)  

The thing to remember is JmsTemplate is designed for use in EJBs using the EJB containers JMS pooling abstraction. So every method will typically create a connection, session, producer or consumer, do something, then close them all down again. The idea be

Page: [JMSXUserID](https://cwiki.apache.org/confluence/display/ACTIVEMQ/JMSXUserID)  

JMSXUserID support It is sometimes useful to know the authenticated username of the sender of a message. This is not added by default but you can enable it by setting the populateJMSXUserID property on the broker via Java code BrokerService broker = new B

Page: [JMX](https://cwiki.apache.org/confluence/display/ACTIVEMQ/JMX)  

JMX Apache ActiveMQ has extensive support for JMX to allow you to monitor and control the behavior of the broker via the JMX MBeans http://apache.apache.org/maven/activemq-core/apidocs/org/apache/activemq/broker/jmx/package-summary.html. AMQ Version >= 5

Page: [JMX Support](https://cwiki.apache.org/confluence/display/ACTIVEMQ/JMX+Support)  

This page describes the JMX management requirements. Required MBeans Broker MBeans We need MBeans for the core Broker types in the activemq.broker package to allow folks to see a broker's configuration, its connectors, currently connected clients & discon

Page: [JNDI Support](https://cwiki.apache.org/confluence/display/ACTIVEMQ/JNDI+Support)  

ActiveMQ will work with any JNDI provider capable of storing Java objects. However it is common to require a JNDI initial context to be able to run many JMS example programs, like Sun's JMS tutorial. http://java.sun.com/products/jms/tutorial/1\_3\_1-fcs/doc

Page: [Journal is already opened by this application](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Journal+is+already+opened+by+this+application)  

Error You get something like this java.io.IOException: Journal is already opened by this application. at org.apache.activeio.journal.active.ControlFile.lock(ControlFile.java:71) at org.apache.activeio.journal.active.LogFileManager.initialize(LogFileManage

Page: [JUnit Reports](https://cwiki.apache.org/confluence/display/ACTIVEMQ/JUnit+Reports)  

The latest test reports are visible via the Hudson ActiveMQ continuous integration builds https://hudson.apache.org/hudson/job/ActiveMQ/

#### K

Page: [Kaha Persistence](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Kaha+Persistence)  

Kaha Persistence Kaha Peristence is a storage solution written especially for message persistence and is part of the ActiveMQ project. It's tuned to provide optimal performance for typical message usage patterns, which involves writing/reading and discard

Page: [KahaDB](https://cwiki.apache.org/confluence/display/ACTIVEMQ/KahaDB)  

KahaDB is a file based persistence database that is local to the message broker that is using it. It has been optimized for fast persistence. It is the the default storage mechanism since ActiveMQ 5.4. KahaDB uses less file descriptors and provides faster

Page: [KahaDB Replication (Experimental)](../Features/Clustering/MasterSlave/kahadb-replication-experimental.md)  

This is under review - and not currently supported. Overview The new KahaDB store supports a very fast and flexible replication system. It features: Journal level replication (The translates into lower overhead to the master to replicate records). Support

Page: [Known Bad OS and JVM Combinations](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Known+Bad+OS+and+JVM+Combinations)  

Operating System Java Virtual Machine Problem description Red Hat Linux Advanced Server release 2.1AS (Pensacola) kernel 2.4.9-e.62smp j2sdk1.4.0_01 Broker could not start up due to error with journal

#### L

Page: [Latency](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Latency)  

Latency We typically use this term when talking about the elapsed time it takes to process a single message. When using Request-Response message topologies its often means the round trip time for a message to flow to a service and for the reply to be reci

Page: [LDAP Broker Discovery Mechanism](https://cwiki.apache.org/confluence/display/ACTIVEMQ/LDAP+Broker+Discovery+Mechanism)  

Configuring network topologies can be quite tedious when the number of brokers in the system is large. To help ease the configuration overhead for these types of situations, a broker can be configured to look up its broker connections using a LDAP v3 dire

Page: [LevelDB Store](https://cwiki.apache.org/confluence/display/ACTIVEMQ/LevelDB+Store)  

The LevelDB store has been deprecated and is no longer supported or recommended for use. The recommended store is KahaDB Available in ActiveMQ 5.8.0 and newer The LevelDB Store is a file based persistence database that is local to the message broker that

Page: [Life Cycle](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Life+Cycle)  

Life cycle of Channels Blaze Channels are in one of five states: Constructed - the Channel isn't initialized or has been shutDown initialized - you can explicitly initialize a Channel by invoking its init() method. At this point its Configuration is set B

Page: [Load Testing with Camel](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Load+Testing+with+Camel)  

Load Testing with Camel It is preferable at the time of writing to check out the source of ActiveMQ and Camel and perform local builds first. Then run a broker either via the bin/activemq script or you could be untar/unzip the assembly/target/apache-activ

Page: [log4j-WARN No appenders could be found for logger](https://cwiki.apache.org/confluence/display/ACTIVEMQ/log4j-WARN+No+appenders+could+be+found+for+logger)  

Error log4j:WARN No appenders could be found for logger (org.activemq.transport.tcp.TcpTransportChannel). log4j:WARN Please initialize the log4j system properly. Solution You have not initialised log4j properly. Try reading the online log4j manual http://

Page: [Logging a warning if you forget to start a Connection](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Logging+a+warning+if+you+forget+to+start+a+Connection)  

Logging a warning if you forget to start a Connection A very common gotcha when working with JMS is forgetting to start the JMS connection, creating a consumer and not having it receive any messages. I myself have tripped up over this one many many times!

Page: [Logging Interceptor](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Logging+Interceptor)  

Logging Interceptor The Logging Interceptor is a pretty trivial Interceptor which just logs to Jakarta Commons Logging http://jakarta.apache.org/commons/logging/ or log4j http://logging.apache.org/log4j/docs/ as messages are sent or acknowledged on a brok

#### M

Page: [Mailing Lists](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Mailing+Lists)  

The following mailing lists are available. Before posting you might want to read the Tips for getting help. Apache Mailing Lists List Name Subscribe Unsubscribe Archive Nabble (Online Forums) MarkMail (searchable via UI) ActiveMQ User List Subscribe mailt

Page: [Manage Durable Subscribers](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Manage+Durable+Subscribers)  

Durable topic subscribers that are offline for a long period of time are usually not desired in the system. The reason for that is that broker needs to keep all the messages sent to those topics for the said subscribers. And this message piling can over t

Page: [MasterSlave](https://cwiki.apache.org/confluence/display/ACTIVEMQ/MasterSlave)  

Introduction to Master / Slave The following are the different kinds of Master/Slave configurations available: Master Slave Type Requirements Pros Cons Shared File System Master Slave A shared file system such as a SAN Run as many slaves as required. Auto

Page: [Maven SNAPSHOT Repository in your POM](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Maven+SNAPSHOT+Repository+in+your+POM)  

ActiveMQ In your pom.xml file you can add the Maven 2 snapshot repository if you want to try out the SNAPSHOT versions: <repository> <id>apache.snapshots</id> <name>Apache Development Snapshot Repository</name> <url>https://repository.apache.org/content/r

Page: [Maven2 ActiveMQ Broker Plugin](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Maven2+ActiveMQ+Broker+Plugin)  

ActiveMQ provides a Maven2 plugin to easily startup a JMS broker. It is useful to quickly boot up a message broker in your Maven2 project for debugging or for doing integration tests. How to Use The maven plugins in ActiveMQ have been renamed in version

Page: [MDC Logging](https://cwiki.apache.org/confluence/display/ACTIVEMQ/MDC+Logging)  

ActiveMQ uses slf4j http://www.slf4j.org/ as its logging framework. This allows ActiveMQ to support MDC logging http://www.slf4j.org/api/org/slf4j/MDC.html. For more information about about MDC logging see the logback manual http://logback.qos.ch/manual/m

Page: [Message Cursors](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Message+Cursors)  

Message Cursors A common problem in previous versions of ActiveMQ was running out of RAM buffer when using non-persistent messaging. Beginning with ActiveMQ 5.0.0, there is a new memory model that allows messages to be paged in from storage when space is

Page: [Message Dispatching Features](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Message+Dispatching+Features)  

Page: [Message Features](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Message+Features)  

Page: [Message Groups](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Message+Groups)  

Message Groups Message Groups are an enhancement to the Exclusive Consumer feature. They provide: Guaranteed ordering of the processing of related messages across a single queue. Load balancing of the processing of messages across multiple consumers. High

Page: [Message Redelivery and DLQ Handling](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Message+Redelivery+and+DLQ+Handling)  

Overview Messages are redelivered to a client when any of the following occurs: A transacted session is used and rollback() is called. A transacted session is closed before commit() is called. A session is using CLIENT_ACKNOWLEDGE and Session.recover() is

Page: [Message Transformation](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Message+Transformation)  

Message Transformation It is sometimes useful to transform a message inside the JMS provider. For example you may have an application that has been live for some time that uses ObjectMessage messages, but that you wish to convert to use XML payloads (to p

Page: [Mirrored Queues](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Mirrored+Queues)  

Mirrored Queues Queues provide an excellent reliable and high performance load balancing mechanism. Each message placed on a queue can only be successfully processed by a single consumer. This is a good thing! . However sometimes you want to monitor what

Page: [MOM](https://cwiki.apache.org/confluence/display/ACTIVEMQ/MOM)  

Message Orientated Middleware. The art of building distributed systems using mostly asynchronous message passing with loosely coupled services consuming and emitting messages. So this includes JMS providers and message brokers. Typically MOMs can handle a

Page: [Monitoring ActiveMQ](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Monitoring+ActiveMQ)  

You can monitor ActiveMQ using the Web Console by pointing your browser at http://localhost:8161/admin http://localhost:8161/admin From ActiveMQ 5.8 onwards the web apps is secured out of the box. The default username and password is admin/admin. You can

Page: [MQTT](https://cwiki.apache.org/confluence/display/ACTIVEMQ/MQTT)  

ActiveMQ supports the MQTT http://mqtt.org/ protocol and will automatically map between JMS/NMS and MQTT clients. MQTT is a machine-to-machine (M2M) publish/subscribe messaging transport. Please see the MQTT site http://mqtt.org/ for more details Enabling

Page: [Multicast - Watch out for IPV6 vs IPV4 support on your operating system or distribution or network](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Multicast+-+Watch+out+for+IPV6+vs+IPV4+support+on+your+operating+system+or+distribution+or+network)  

You may wonder why you are not receiving any message at all during multicast, maybe you have just tried everything, and even on some other OS or distributions and JDK and realize that it works in some place and not on other... you may have tried a small C

Page: [Multicast Transport](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Multicast+Transport)  

We could support a reliable multicast protocol and use that to distribute messages across. This page braindumps how that could fit in with ActiveMQ 4.x's architecture. each VM would have its own embedded broker; JMS connections would talk VM protocol to t

Page: [Multicast Transport Reference](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Multicast+Transport+Reference)  

The Multicast Transport The Multicast transport allows clients to connect to a remote ActiveMQ broker using multicast Note that by default Multicast is not reliable; datagrams can be lost so you should add a reliability layer to ensure the JMS contract ca

Page: [Multiple consumers on a queue](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Multiple+consumers+on+a+queue)  

If you want to consume concurrently from a queue, then you must use a different session for each consumer. This is because you must have a session per thread. The JMS contract is that only 1 session is used by one thread at once - which if you're using co

Page: [My producer blocks](https://cwiki.apache.org/confluence/display/ACTIVEMQ/My+producer+blocks)  

What can I do if my producer blocks sending a message? This relates to Producer Flow Control. Active 4.x In ActiveMQ 4.x, all in transit messages are held in memory. If you have a slow consumer, to avoid exausting the JVM memory and getting an out of memo

#### N

Page: [Navigation](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Navigation)  

Overview Index News New Features Getting Started FAQ Articles Books Download License http://www.apache.org/licenses/ Search <DIV> <FORM action="http://www.google.com/search" method="get" style="font-size: 10px;"> <INPUT name="ie" type="hidden" value="UTF-

Page: [Networks of Brokers](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Networks+of+Brokers)  

To provide massive scalability of a large messaging fabric you typically want to allow many brokers to be connected together into a network so that you can have as many clients as you wish all logically connected together - and running as many message bro

Page: [New Features](https://cwiki.apache.org/confluence/display/ACTIVEMQ/New+Features)  

New Features This page documents the various new features we add in each major release New Features in 6.0 New Features in 5.13 New Features in 5.11 New Features in 5.6 New Features in 5.5 New Features in 5.4 New Features in 5.2 New Features in 5.1 New Fe

Page: [New Features in 4.1](https://cwiki.apache.org/confluence/display/ACTIVEMQ/New+Features+in+4.1)  

New Features in Apache ActiveMQ 4.1 Shared File System Master Slave JDBC Master Slave Virtual Destinations Configure Startup Destinations Structured Message Properties and MapMessages

Page: [New Features in 5.0](https://cwiki.apache.org/confluence/display/ACTIVEMQ/New+Features+in+5.0)  

New Features in 5.0 In the 5.0 release of Apache ActiveMQ there are the following new features: AMQ Message Store (Faster Persistence!) Message Cursors (To handle very large number of stored messages) Blob Messages Command Agent Enterprise Integration Pat

Page: [New Features in 5.1](https://cwiki.apache.org/confluence/display/ACTIVEMQ/New+Features+in+5.1)  

New Features in 5.1 In the 5.1.x release of Apache ActiveMQ there are the following new features: You can use the new DestinationSource http://activemq.apache.org/maven/activemq-core/apidocs/org/apache/activemq/advisory/DestinationSource.html on an Active

Page: [New Features in 5.11](https://cwiki.apache.org/confluence/display/ACTIVEMQ/New+Features+in+5.11)  

New Features in 5.11.0 Destination import/export for lock down mode AMQ-5218 https://issues.apache.org/jira/browse/AMQ-5218 Dynamic camel root loading AMQ-5351 https://issues.apache.org/jira/browse/AMQ-5351 MQTT - QOS2 mapped to virtual topics AMQ-5290 ht

Page: [New Features in 5.13](https://cwiki.apache.org/confluence/display/ACTIVEMQ/New+Features+in+5.13)  

New Features in 5.13.0 New transport protocol, AUTO AMQ-5889 https://issues.apache.org/jira/browse/AMQ-5889 Dynamic network support for virtual consumers, Networks of Brokers AMQ-6027 https://issues.apache.org/jira/browse/AMQ-6027 Pending message size met

Page: [New Features in 5.2](https://cwiki.apache.org/confluence/display/ACTIVEMQ/New+Features+in+5.2)  

Apache ActiveMQ 5.2 is primarily a maintenance release which resolves https://issues.apache.org/activemq/secure/ReleaseNote.jspa?projectId=10520&styleName=Html&version=11841 . New Features in 5.2 The new features and enhancements in this release include:

Page: [New Features in 5.3](https://cwiki.apache.org/confluence/display/ACTIVEMQ/New+Features+in+5.3)  

Apache ActiveMQ 5.3 is primarily a maintenance release which resolves https://issues.apache.org/activemq/secure/ReleaseNote.jspa?version=11914&styleName=Html&projectId=10520 334 issues. New Features in 5.3 The new features and enhancements in this release

Page: [New Features in 5.4](https://cwiki.apache.org/confluence/display/ACTIVEMQ/New+Features+in+5.4)  

New Features in 5.4.1 Encrypted passwords Added selector support in Ajax New Features in 5.4 Delay and Schedule Message Delivery Message Priority WebSockets Better OSGi support Broker side options for updating failover clients automatically of new brokers

Page: [New Features in 5.5](https://cwiki.apache.org/confluence/display/ACTIVEMQ/New+Features+in+5.5)  

New Features in 5.5.0 Dependency on Java 1.6 (java 1.5 is no longer supported) MDC logging (SLF4J http://slf4j.org/) Upgrade to camel 2.7.0 DLQ processing per durable subscription New network connector MBeans IOExceptionHandler http://activemq.apache.org/

Page: [New Features in 5.6](https://cwiki.apache.org/confluence/display/ACTIVEMQ/New+Features+in+5.6)  

New Features in 5.6.0 LevelDB Store MQTT transport New LDAP security module Stomp 1.1 support stomp+nio+ssl transport Multi KahaDB persistence Priority Failover URIs Automatic client rebalance in broker cluster

Page: [New Features in 5.7](https://cwiki.apache.org/confluence/display/ACTIVEMQ/New+Features+in+5.7)  

Java 7 support (compiled with jdk6 and validated with jdk7) Secure WebSockets (wss) transport http://activemq.apache.orgConnectivityConnectivity/Connectivity/websockets.md#WebSockets-SecureWebSockets Broker Based Redelivery http://activemq.apache.org/message-redelivery-and-dlq-handling.htm

Page: [New Features in 5.8](https://cwiki.apache.org/confluence/display/ACTIVEMQ/New+Features+in+5.8)  

AMQP new feature modules and activemq-client module allowing smaller foorprint management via REST with jolokia http://www.jolokia.org/ jmx to http bridge Includes Apache Camel 2.10.3 http://camel.apache.org/camel-2103-release.html Java 7 support (compile

Page: [New Features in 5.9](https://cwiki.apache.org/confluence/display/ACTIVEMQ/New+Features+in+5.9)  

Replicated LevelDB Store for shared nothing Master/Slave. Runtime Configuration Generic JMS XA connection pool in activemq-jms-pool module (has no ActiveMQ dependency) MQTT over WebSockets support broker Apache Camel component Broker auto-restart upon los

Page: [New Features in 6.0](https://cwiki.apache.org/confluence/display/ACTIVEMQ/New+Features+in+6.0)  

At one point, if you were interested in Version 6, you could take a look at Apollo subproject http://activemq.apache.org/apollo/ as it was expected to be the core of the 6.0 broker. However, as of July 2015, Apollo is being unofficially declared dead. T

Page: [News](https://cwiki.apache.org/confluence/display/ACTIVEMQ/News)  

Page: [NIO Transport Reference](https://cwiki.apache.org/confluence/display/ACTIVEMQ/NIO+Transport+Reference)  

NIO Transport is very similar to the regular TCP transport. The difference is that it is implemented using NIO API which can help with performance and scalability. NIO is a server side transport option only. Trying to use it on the client side will instan

Page: [No suitable driver](https://cwiki.apache.org/confluence/display/ACTIVEMQ/No+suitable+driver)  

Symptoms I get an exception saying No suitable driver when initialising the JDBC driver. Reason ActiveMQ tries to auto-detect the JDBC driver so that it can deduce the ultimate database's SQL dialect. Some JDBC drivers are not yet auto-recognised. Here's

Page: [NoClassDefFoundError - org.springframework.core.io.Resource](https://cwiki.apache.org/confluence/display/ACTIVEMQ/NoClassDefFoundError+-+org.springframework.core.io.Resource)  

If you get an exception like this java.lang.NoClassDefFoundError - org/springframework/core/io/Resource Cause You were probably trying to use the XML Configuration mechanism, which uses Spring, but without having the Spring jar on your classpath. Solution

#### O

Page: [ObjectMessage](https://cwiki.apache.org/confluence/display/ACTIVEMQ/ObjectMessage)  

Although ObjectMessage usage is generally discouraged, as it introduces coupling of class paths between producers and consumers, ActiveMQ supports them as part of the JMS specification. Security ObjectMessage objects depend on Java serialization of marsha

Page: [Old OSGi Integration](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Old+OSGi+Integration)  

This article applies to versions of ActiveMQ prior to 5.4.0. If you use version 5.4.0 or newer proceed to the following article. Introduction All ActiveMQ modules are packaged as OSGi bundles and can be used in any OSGi container. This article will provid

Page: [onMessage method of MessageListener is never called](https://cwiki.apache.org/confluence/display/ACTIVEMQ/onMessage+method+of+MessageListener+is+never+called)  

See I am not receiving any messages, what is wrong

Page: [OpenWire](https://cwiki.apache.org/confluence/display/ACTIVEMQ/OpenWire)  

OpenWire is our cross language Wire Protocol to allow native access to ActiveMQ from a number of different languages and platforms. The Java OpenWire transport is the default transport in ActiveMQ 4.x or later. For other languages see the following... NMS

Page: [OpenWire C Client](https://cwiki.apache.org/confluence/display/ACTIVEMQ/OpenWire+C+Client)  

This is the C library which is based on the OpenWire protocol. You can browse the code here http://svn.apache.org/repos/asf/activemq/sandbox/openwire-c/ http://svn.apache.org/repos/asf/activemq/sandbox/openwire-c/ e.g. here's an example of it in use... ht

Page: [OpenWire CPP Client](https://cwiki.apache.org/confluence/display/ACTIVEMQ/OpenWire+CPP+Client)  

OpenWire C++ Client Goals We want to be able to provide a C++ API to ActiveMQ that retains rough feature-parity with the Java API while at the same time allowing for more flexibility in application design by opening up lower levels of the event system. We

Page: [OpenWire Version 2 Specification](https://cwiki.apache.org/confluence/display/ACTIVEMQ/OpenWire+Version+2+Specification)  

This article references OpenWire V2 which is no longer the latest version. The formatting and encoding rules in this article are still valid for later OpenWire versions, but later versions define additional fields in the OpenWire commands. The default set

Page: [Optimized Acknowledgement](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Optimized+Acknowledgement)  

Overview ActiveMQ supports acknowledging a range of messages in a single batch operations. This option is disabled by default but can be used to improve throughput in some circumstances as it decreases load on the broker. Consider enabling it for your per

Page: [OSGi Integration](https://cwiki.apache.org/confluence/display/ACTIVEMQ/OSGi+Integration)  

Introduction This article will provide more details on how to use ActiveMQ in Apache Karaf http://karaf.apache.org/, small OSGi based runtime. Apache Karaf was previously know as ServiceMix kernel, so informations found here are applicable to Apache Servi

Page: [OSGi support (in development)](../osgi-support-in-development.md)  

Split packages (2015-11-17) Package Modules org/apache/activemq/artemis/uri artemis-core-client artemis-jms-client artemis-server org/apache/activemq/artemis/core/protocol/core/impl/wireformat artemis-core-client artemis-server org/apache/activemq/artemis

Page: [Outbound Communication](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Outbound+Communication)  

Configuring a Session Bean to send messages to ActiveMQ In the attached example application, the three MDBs use the SenderEJB to send JMS messages to an ActiveMQ queue. In this example, I will be explaining how to: Configure and deploy an ActiveMQ Queue t

Page: [Overview](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Overview)  

#### P

Page: [Peer Transport Reference](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Peer+Transport+Reference)  

The Peer Transport The Peer transport provides a peer-to-peer network with ActiveMQ. What actually happens is the peer transport uses the VM transport to create and connect to a local embedded broker but which configures the embedded broker to establish n

Page: [Per Destination Policies](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Per+Destination+Policies)  

We support a number of different policies which can be attached to individual destinations (queues, topics) or to wildcards of queue/topic hierarchies. This makes it easy to configure how different regions of the JMS destination space are handled. The pro

Page: [Performance](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Performance)  

Performance Performance differs greatly depending on many different factors the network topology transport protocols used quality of service hardware, network, JVM and operating system number of producers, number of consumers distribution of messages acro

Page: [Performance report](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Performance+report)  

Performance guides If you're not convinced by performance reports then please do try running performance tests yourself. You might wanna check out our overview of Performance or try using out the ActiveMQ Performance Module Users Manual The Commercial Pro

Page: [Performance Tuning](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Performance+Tuning)  

For a more complete overview see Performance. There are trade-offs between performance and reliability. By default, ActiveMQ strikes a balance between the two, so there are some things you can change to increase throughput. Async Publishing First some bac

Page: [Periodically checking disk limits](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Periodically+checking+disk+limits)  

Store and temporary disk limits are set for the Broker on startup based on configuration and available space. Sometimes other processes (such as logs) can grow and reduce the available disk space enough that the limits detected at start up no longer have

Page: [Persistence](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Persistence)  

ActiveMQ V5.9 In ActiveMQ 5.9, the Replicated LevelDB Store is introduced. It handles using Apache ZooKeeper http://zookeeper.apache.org/ to pick a master from a set of broker nodes configured to replicate single LevelDB Store. Then synchronizes all slave

Page: [Persistence Questions](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Persistence+Questions)  

Questions relating to long term persistence of messages.

Page: [Pluggable storage lockers](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Pluggable+storage+lockers)  

As of the 5.7.0 release of ActiveMQ the choice of storage locking mechanism, as used by a persistence adapter, has been made pluggable. This feature is only meaningful to brokers configured in a shared storage master/slave topology. Prior to release 5.7.0

Page: [PMC Templates](https://cwiki.apache.org/confluence/display/ACTIVEMQ/PMC+Templates)  

The following email templates are for use by the ActiveMQ PMC: Committer Discussion To: private@activemq.apache.org mailto:private@activemq.apache.orgSubject: \[DISCUSS\] Invite <CANDIDATE> to become an ActiveMQ committer Considering <CANDIDATE>’s contribu

Page: [Privacy Policy](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Privacy+Policy)  

Information about your use of this website is collected using server access logs and a tracking cookie. The collected information consists of the following: The IP address from which you access the website; The type of browser and operating system you use

Page: [Producer Flow Control](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Producer+Flow+Control)  

Producer Flow Control In ActiveMQ 4.x flow control was implemented using TCP flow control. The underlying network connection of throttled consumers was suspended to enforce flow control limits. This strategy is very efficient but can lead to deadlocks if

Page: [Projects Using ActiveMQ](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Projects+Using+ActiveMQ)  

Apache Camel http://activemq.apache.org/camel/ is a POJO based routing and mediation framework Apache CXF http://incubator.apache.org/cxf/ is a JAX-WS client and web services framework Apache Geronimo http://geronimo.apache.org/ is the J2EE server project

Page: [Proposed C Client Architecture](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Proposed+C+Client+Architecture)  

4/16/06 - Attaching wire_formats.pdf - a first cut at defining all of the commands for both openwire an stomp. Working toward an architecture that will support both. /////////////////////////////////////////////// Given that there are several separate

Page: [Protocols](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Protocols)  

Apache ActiveMQ is a message broker which supports multiple wire level protocols for maximum interoperability.

Page: [Pure Master Slave](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Pure+Master+Slave)  

Pure Master Slave This feature will be removed in 5.8 as it has not evolved to be production ready. You are advised to use shared storage master/slave or the Replicated LevelDB Store. See AMQ-4165 https://issues.apache.org/jira/browse/AMQ-4165 A Pure Mast

#### Q

Page: [QoS](https://cwiki.apache.org/confluence/display/ACTIVEMQ/QoS)  

QoS is a MOM abbreviation of the term Quality of Service. There are many different kinds of messaging with different qualities of service such as topics versus queues durable messaging versus reliable (some buffering takes place but if a consumer is down

Page: [QuickLinks](https://cwiki.apache.org/confluence/display/ACTIVEMQ/QuickLinks)  

Download | JavaDocs http://activemq.apache.org/maven/apidocs/index.html More... | Source | Forums | Support

#### R

Page: [Redelivery Policy](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Redelivery+Policy)  

Redelivery Policy Detail on when messages are redelivered to a client can be found in the Message Redelivery and DLQ Handling section. You can configure the RedeliveryPolicy http://svn.apache.org/viewvc/activemq/trunk/activemq-client/src/main/java/org/apa

Page: [Release Guide](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Release+Guide)  

How to create and announce an ActiveMQ release. This release is based on General guide for releasing Maven-based project at Apache http://maven.apache.org/developers/release/apache-release.html, so be sure to check it out before continuing and meet all pr

Page: [Release Info](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Release+Info)  

General Release Information Current RoadMap http://jira.activemq.org/jira/browse/AMQ?report=com.atlassian.jira.plugin.system.project:roadmap-panel Release Guide Signing Releases http://wiki.apache.org/incubator/SigningReleases Apache Mirror Guidelines htt

Page: [Release Plans](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Release+Plans)  

Information Release Info How you can help release Release Plans 4.0 RC 1 Guide

Page: [Replicated LevelDB Store](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Replicated+LevelDB+Store)  

The LevelDB store has been deprecated and is no longer supported or recommended for use. The recommended store is KahaDB Synopsis The Replicated LevelDB Store uses Apache ZooKeeper to pick a master from a set of broker nodes configured to replicate a Leve

Page: [Replicated Message Store](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Replicated+Message+Store)  

If messages are stored on the hard drive of a broker or inside a single database; then you have a single point of failure with respect to the message persistence. If you lose the entire machine, disk or database, you have lost messages. For some high end

Page: [Resource Adapter](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Resource+Adapter)  

Introduction ActiveMQ includes a Java Connector Architecture (JCA) 1.5 Resource Adapter. JCA 1.5 defines the contract between an J2EE application server and external resources such as databases and messaging middleware. It allows the application server to

Page: [Resource Adapter does not seem to pool connections](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Resource+Adapter+does+not+seem+to+pool+connections)  

It may seem like the resource adapter when used in an app server like geronimo or jboss is not pooling connections. Looking the the ActiveMQ broker logs, it will show multiple message for each use of a pooled conntion simlilar to: 16:43:07 INFO Adding new

Page: [Resource Adapter Properties](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Resource+Adapter+Properties)  

The ActiveMQ Resource Adapter allows you to configure several properties that: sets the options used for connection used for inbound message delivery sets the default options used for the outbound connection factory objects. The properties that can be con

Page: [REST](https://cwiki.apache.org/confluence/display/ACTIVEMQ/REST)  

ActiveMQ implements a RESTful API to messaging which allows any web capable device to publish or consume messages using a regular HTTP POST or GET. If you are interested in messaging directly from web browsers you might wanna check out our Ajax or WebSock

Page: [REST protocols](https://cwiki.apache.org/confluence/display/ACTIVEMQ/REST+protocols)  

There are many ways to map JMS to REST... Crappy non-REST Send via POST /queue/Destination Consume GET /queue/Destination This is bad as the GET is not idempotent. We can add a user ID or use a cookie GET /queue/Destination?jsessionId=.... though a cachin

Page: [RESTful Queue](https://cwiki.apache.org/confluence/display/ACTIVEMQ/RESTful+Queue)  

RESTful Queue This document is intended to document the ideal RESTful interface to message queues in light of the discussion on rest-discuss http://tech.groups.yahoo.com/group/rest-discuss/message/8955 Atom Publishing Protocol http://bitworking.org/projec

Page: [Retroactive Consumer](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Retroactive+Consumer)  

Background A retroactive consumer is just a regular JMS Topic consumer who indicates that at the start of a subscription every attempt should be used to go back in time and send any old messages (or the last message sent on that topic) that the consumer m

Page: [RSS and Atom](https://cwiki.apache.org/confluence/display/ACTIVEMQ/RSS+and+Atom)  

We have added support for the RESTful browsing of message queues in the activemq-web module. To try out this feature try the Web Samples. Browsing of queues is implemented by a servlet, QueueBrowseServlet which allows queues to be browsed using pluggable

Page: [Run Broker](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Run+Broker)  

Running an ActiveMQ Broker Note if you want to use an embedded broker then see How do I embed a Broker inside a Connection This page describes how to run a broker using 4.x or later of ActiveMQ. Running the broker as a Unix Service See the Unix Shell Scr

Page: [Runtime Configuration](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Runtime+Configuration)  

From version 5.9.0 a new broker plugin will allow selective changes to a broker xml configuration to take effect without broker restart. Consider a retail environment where there are central processors (hubs) and stores(spokes). It is advantageous to be a

#### S

Page: [Sample Camel Routes](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Sample+Camel+Routes)  

Example of a configuration that show how to use Camel routes with Juel and Xpath. <beans> <!-- Allows us to use system properties as variables in this configuration file --> <bean class="org.springframework.beans.factory.config.PropertyPlaceholderConfigur

Page: [sample report](https://cwiki.apache.org/confluence/display/ACTIVEMQ/sample+report)  

Performance Test Report Template <testResult> <property name='systemSettings'> <props> <prop key='java.runtime.name'>Java(TM) 2 Runtime Environment, Standard Edition</prop> <prop key='java.vm.version'>1.4.2_10-b03</prop> . . . <prop key='os.arch'>x86</pro

Page: [Sandbox](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Sandbox)  

Page: [Scaling Queues](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Scaling+Queues)  

Scaling to tens of thousands of Queues in a single broker is relatively straightforward - but requires some configuration changes from the default. Reducing Threads With the default configuration, ActiveMQ is configured to use a dispatch thread per Queue

Page: [Scaling the Depth of a Queue](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Scaling+the+Depth+of+a+Queue)  

Nearly all messaging systems (certainly open source ones) hold either a copy of a persistent message or a reference to a persisted message in memory. This is primarily to try and improve performance, but it also can significantly decrease the complexity o

Page: [Security](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Security)  

ActiveMQ 4.x and greater provides pluggable security through various different providers. The most common providers are JAAS http://java.sun.com/products/jaas/ for authentication a default authorization mechanism using a simple XML configuration file. Aut

Page: [Security Advisories](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Security+Advisories)  

Apache ActiveMQ 2017 CVE-2015-7559 - DoS in client via shutdown command 2016 CVE-2016-6810 - ActiveMQ Web Console - Cross-Site Scripting CVE-2016-0734 - ActiveMQ Web Console - Clickjacking CVE-2016-0782 - ActiveMQ Web Console - Cross-Site Scripting CVE-20

Page: [SEDA](https://cwiki.apache.org/confluence/display/ACTIVEMQ/SEDA)  

Staged Event Driven Architecture which is a design pattern for building high performance and scalable distributed systems. See this paper http://www.eecs.harvard.edu/~mdw/proj/seda/ for more details.

Page: [Selectors](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Selectors)  

JMS Selectors Selectors are a way of attaching a filter to a subscription to perform content based routing. Selectors are defined using SQL 92 syntax and typically apply to message headers; whether the standard properties available on a JMS message or cus

Page: [Setting up ActiveMQ with Tomcat 5.5.9](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Setting+up+ActiveMQ+with+Tomcat+5.5.9)  

Create the file <webapp-root>/META-INF/context.xml. Here is an example: <Context antiJARLocking="true"> <Resource name="jms/ConnectionFactory" auth="Container" type="org.apache.activemq.ActiveMQConnectionFactory" description="JMS Connection Factory" facto

Page: [Shared File System Master Slave](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Shared+File+System+Master+Slave)  

Shared File System Master Slave If you have a SAN or shared file system it can be used to provide high availability such that if a broker is killed, another broker can take over immediately. Note that the requirements of this failover system are a distrib

Page: [Shiro](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Shiro)  

ActiveMQ 5.10 and later provides a fully customizable security experience using Apache Shiro http://shiro.apache.org. The ActiveMQ Shiro plugin can secure the ActiveMQ broker, from authenticating transport connections to authorizing behavior with topics

Page: [Should I deploy Enterprise Integration Patterns in the broker or another application](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Should+I+deploy+Enterprise+Integration+Patterns+in+the+broker+or+another+application)  

Should I deploy Enterprise Integration Patterns in the broker or another application Whether you deploy the Enterprise Integration Patterns inside the ActiveMQ Broker or in a separate application depends on your requirements. Advantages of deploying EIP i

Page: [Should I deploy the broker inside my JVM or AppServer](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Should+I+deploy+the+broker+inside+my+JVM+or+AppServer)  

You can deploy the ActiveMQ Broker inside your JVM or Application Server. Whether you do or not has pros and cons depending on how many JVMs you have and what your backup & recovery policy is. Advantages of embedding the broker embedding a broker means yo

Page: [Should I run ActiveMQ on Windows in a directory with spaces](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Should+I+run+ActiveMQ+on+Windows+in+a+directory+with+spaces)  

Should I run ActiveMQ on Windows in a directory with spaces No. Its not a good idea to install and run application in paths on Windows which have spaces.

Page: [Should I use transactions](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Should+I+use+transactions)  

There are four main approaches as to a client can consume messages. They are: Auto-acknowledgement Explicit acknowledgement via Message.acknowledge() JMS Transactions XA For a discussion on XA see: Should I use XA The main difference between 1 & 2 and 3 &

Page: [Should I use XA](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Should+I+use+XA)  

Should I use XA transactions (two phase commit?) A common use of JMS is to consume messages from a queue or topic, process them using a database or EJB, then acknowledge / commit the message. If you are using more than one resource; e.g. reading a JMS mes

Page: [Site](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Site)  

Page: [SiteIndex](https://cwiki.apache.org/confluence/display/ACTIVEMQ/SiteIndex)  

{index}{index}

Page: [SiteMap](https://cwiki.apache.org/confluence/display/ACTIVEMQ/SiteMap)  

Using ActiveMQ Using ActiveMQ Community Community Overview Overview Features Features Connectivity Connectivity Tools Tools Developers Developers Site Site

Page: [SJSAS with GenericJMSRA](https://cwiki.apache.org/confluence/display/ACTIVEMQ/SJSAS+with+GenericJMSRA)  

Using ActiveMQ, Generic JMS RA and SJSAS (Glassfish) This document is my notes on making ActiveMQ and SJSAS work together using GenericJMSRA. The objectives is to make ActiveMQ as the JMS provider and MDB can be deployed in SJSAS, listening messages from

Page: [Slow Consumer Handling](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Slow+Consumer+Handling)  

Slow Consumers can cause problems on non-durable topics since they can force the broker to keep old messages in RAM which once it fills up, forces the broker to slow down producers, causing the fast consumers to be slowed down. One option we could impleme

Page: [Slow Consumers](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Slow+Consumers)  

Blocked Transport when using TCP there can be occasions when a network outage can result in a blocked write. This can cause the entire broker to freeze - and the socket may never be unblocked. Currently we have a Thread that checks for blocked sockets - u

Page: [Slow networks drop large messages](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Slow+networks+drop+large+messages)  

This article only applies to older versions of ActiveMQ, i.e. 5.3 and 5.4.0. From 5.4.2 onwards this issue has been adressed in the bugs AMQ-2511 https://issues.apache.org/jira/browse/AMQ-2511 and AMQ-2088 https://issues.apache.org/jira/browse/AMQ-2088. Y

Page: [Source](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Source)  

ActiveMQ 5 Web Browsing of the git Repo To browse via the web: https://git-wip-us.apache.org/repos/asf?p=activemq.git https://git-wip-us.apache.org/repos/asf?p=activemq.git Checking out from the git Repo git clone https://git-wip-us.apache.org/repos/asf/a

Page: [Source XRef](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Source+XRef)  

ActiveMQ Core http://activemq.apache.org/maven/activemq-core/xref/ ActiveMQ Resource Adapter http://activemq.apache.org/maven/activemq-ra/xref/ ActiveMQ Web http://activemq.apache.org/maven/activemq-web/xref/

Page: [Sponsorship](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Sponsorship)  

Thank you to all the folks http://www.apache.org/foundationIndexIndex/Index/thanks.md who have sponsored http://www.apache.org/foundationCommunity/sponsorship.md the Apache Software Foundation. Want to help sponsor the foundation? Click here for more info http://www.apache.or

Page: [Spring Support](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Spring+Support)  

We fully support Spring for configuration of the JMS client side as well as for configuring the JMS Message Broker. There is a great article http://codedependents.com/2009/10/16/efficient-lightweight-jms-with-spring-and-activemq/ on using Spring with Acti

Page: [SQLServer](https://cwiki.apache.org/confluence/display/ACTIVEMQ/SQLServer)  

SQL Server SQL Server 2000 Drivers Here is an example of a configuration for SQLServer kindly supplied by Ning Li <persistenceAdapter> <journaledJDBC journalLogFiles="5" dataDirectory="../activemq-data" dataSource="#mssql-ds"> <adapter><imageBasedJDBCAda

Page: [SSL Transport Reference](https://cwiki.apache.org/confluence/display/ACTIVEMQ/SSL+Transport+Reference)  

The SSL Transport The SSL transport allows clients to connect to a remote ActiveMQ broker using SSL over a TCP socket. Configuration Syntax ssl://hostname:port?transportOptions Transport Options The configuration options from TCP are relevant. Example URI

Page: [Static Transport Reference](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Static+Transport+Reference)  

The Static Transport The static transport provides a hard coded mechanism to discover other connections using a list of URIs. A connection using this discovery mechanism will attempt to connect to all URIs in the list until it is succesful. Configuration

Page: [StatisticsPlugin](https://cwiki.apache.org/confluence/display/ACTIVEMQ/StatisticsPlugin)  

Beginning in ActiveMQ 5.3, a statistics plugin is included that can be used to retrieve statistics from the broker or its destinations. Note that the message must contain a replyTo header (the jmsReplyTo header if you're using JMS) else the message will b

Page: [Stomp](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Stomp)  

ActiveMQ supports the Stomp http://stomp.github.com/ protocol and the Stomp - JMS mapping. This makes it easy to write a client in pure Ruby, Perl, Python or PHP for working with ActiveMQ. Please see the Stomp site http://stomp.github.io/ for more details

Page: [Structured Message Properties and MapMessages](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Structured+Message+Properties+and+MapMessages)  

Structured Message Properties and MapMessages This JMS extension feature allows you to attach Map and List properties to any JMS Message or to use nested Maps and Lists inside a MapMessage. This allows you to efficiently send typesafe structured informati

Page: [Subscription Recovery Policy](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Subscription+Recovery+Policy)  

The subscription recovery policy allows you to go back in time when you subscribe to a topic. For example imagine you are processing a price feed; you're using a federated network and either a network glitch occurs or someone kills the broker you're talki

Page: [Sun JNDI](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Sun+JNDI)  

here's an example jndi.properties file: java.naming.factory.initial = com.sun.jndi.fscontext.RefFSContextFactory Here's an example .bindind file: For ActiveMQ 4.x its Archive/ClassName=org.apache.activemq.command.ActiveMQQueue Archive/FactoryName=org.apac

Page: [Support](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Support)  

Getting Help If you are experiencing problems using ActiveMQ then please report your problem to our Issue Tracker http://issues.apache.org/activemq/browse/AMQ. You may also find it useful to discuss your issues with the community on the Discussion Forums

Page: [Supporting IO Streams](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Supporting+IO+Streams)  

It'd be great to offer kick ass support for streaming files over ActiveMQ of any arbitrary size. The basic idea is to fragment the stream into multiple messages and send/receive those over JMS. There are a few issues to consider... Use casess many produce

Page: [SVN](https://cwiki.apache.org/confluence/display/ACTIVEMQ/SVN)  

Source

Page: [Sybase](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Sybase)  

Sybase A dataSource targetting a Sybase ASE database can be configured as follows: <bean id="sybase-ds" class="org.apache.commons.dbcp.BasicDataSource" destroy-method="close"> <!-- using jConnect --> <property name="driverClassName" value="com.sybase.jdbc

#### T

Page: [TCP Transport Reference](https://cwiki.apache.org/confluence/display/ACTIVEMQ/TCP+Transport+Reference)  

The TCP Transport The TCP transport allows clients to connect to a remote ActiveMQ broker using a TCP socket. These configuration options can be used to tune the underlying TCP transport on either the client-side using the JMS client's connection URI stri

Page: [Team](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Team)  

ActiveMQ Community This page lists who we are. By all means add yourself to the list - lets sort it in alphabetical order Committers "A committer is a developer that was given write access to the code repository and has a signed Contributor License Agreem

Page: [Terminology](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Terminology)  

Questions on Message Orientated Middleware and ActiveMQ terminology Store and Forward brokers receive messages, store them locally and forwards the message to a recipient (in this case another broker) when it is able to do so. The message is only deleted

Page: [Test Source XRef](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Test+Source+XRef)  

ActiveMQ Resource Adapter http://activemq.codehaus.org/maven/activemq-ra/xref-test/ ActiveMQ Web http://activemq.codehaus.org/maven/activemq-web/xref-test/

Page: [Thanks](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Thanks)  

ActiveMQ is a successful project because of the large and diverse community that contributes to it. There are a handful of tools that developers in the community use; some are open-source and some are commercial. We'd like to extend a special thanks to t

Page: [The ActiveBlaze Message type](https://cwiki.apache.org/confluence/display/ACTIVEMQ/The+ActiveBlaze+Message+type)  

The foundation of message and event parsing in ActiveBlaze is the BlazeMessage. A BlazeMessage is a a Map of key value pairs, where the keys are strings and the values are primitive objects. The values supported are: byte bytes\[\] char short int long float

Page: [The Broker will not start](https://cwiki.apache.org/confluence/display/ACTIVEMQ/The+Broker+will+not+start)  

It's been reported that during broker start some users get a message similar to: 15:26:29 INFO Opening journal. Caught: javax.jms.JMSException: Failed to open transaction journal: java.io.IOException: Invalid argument It could be this problem or the probl

Page: [The JMS Connector](https://cwiki.apache.org/confluence/display/ACTIVEMQ/The+JMS+Connector)  

JMS to JMS Bridge

Page: [The Proxy Connector](https://cwiki.apache.org/confluence/display/ACTIVEMQ/The+Proxy+Connector)  

The Proxy Connector Many of the more advanced ActiveMQ features are implemented in the transports. Sometimes it's desirable to accept one kind of ActiveMQ connection and establish a different kind of connection to another broker. The Proxy Connector allow

Page: [The vm transport starts a broker before my configured broker starts](https://cwiki.apache.org/confluence/display/ACTIVEMQ/The+vm+transport+starts+a+broker+before+my+configured+broker+starts)  

Scenario You are using the vm: transport and a broker is auto-started for you so that your configured embedded broker doesn't start. Solution Its most likely a dependency issue; your JMS connection is starting before your embedded broker. So just make sur

Page: [Throughput](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Throughput)  

How many messages can we process per second. Normally MOM style applications focus on asynchronous messaging and SEDA style architectures which aim for massive throughput numbers at the cost of some Latency

Page: [TimeStampPlugin](https://cwiki.apache.org/confluence/display/ACTIVEMQ/TimeStampPlugin)  

The TimeStampPlugin is a Broker interceptor which updates a JMS Client's time stamp on the message with a broker time stamp. This can be useful when the clocks on client machines are known to not be correct and you can only trust the time set on the broke

Page: [Tips for getting help](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Tips+for+getting+help)  

We are a community based open source project and we really welcome and value your Contributions. We have various ways of getting help via the Discussion Forums or Mailing Lists. Here are a few tips to help us to help you which version of ActiveMQ are you

Page: [Tomcat](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Tomcat)  

Configuration issues for Tomcat 7 and later Tomcat needs to be configured to ignore Jetty SCI annotations so that the Jetty WebSocket ServerContainerInitializer class is not inadvertently picked up by Tomcat. For more information on this problem see AMQ-6

Page: [TomEE](https://cwiki.apache.org/confluence/display/ACTIVEMQ/TomEE)  

Apache TomEE is a distribution of Tomcat with fully integrated ActiveMQ offering full JMS support to plain war files, Servlets and more. No setup is required and code like the following will work out of the box. import javax.annotation.Resource; import ja

Page: [Tools](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Tools)  

Page: [Topologies](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Topologies)  

ActiveMQ supports a wide range of different deployment topologies as well as protocols & wire formats. The following diagram shows a federated network of brokers with a few different kinds of topology. BrokerTopology-1.png http://activemq.org/BrokerTopolo

Page: [Total Ordering](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Total+Ordering)  

Sometimes it can be useful to ensure that every topic consumer sees messages arriving on the topic in exactly the same order. Normally the broker will guarantee the order of all messages sent by the same producer. However, owing to the broker's use of mul

#### U

Page: [UDP Transport Reference](https://cwiki.apache.org/confluence/display/ACTIVEMQ/UDP+Transport+Reference)  

The UDP Transport The UDP transport allows clients to connect to a remote ActiveMQ broker using raw UDP Note that by default UDP is not reliable; datagrams can be lost so you should add a reliability layer to ensure the JMS contract can be implemented on

Page: [Unix](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Unix)  

This page contains resources that will make you adapt ActiveMQ to your Unix-based operating system.

Page: [Unix Service](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Unix+Service)  

This page contained a very basic procedure to create a unix service for activemq. Due to the fact that ActiveMQ contains a very functional init script - this is not needed anymore. Review the documentation of the init script: Unix Shell Script

Page: [Unix Shell Script](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Unix+Shell+Script)  

Functional overview From version 5.4.0 onwards, ActiveMQ comes with a enhanced shell script for starting, stopping and managing the broker in Unix environment. For basic activemq and activemq-admin scripts functionality take a look at ActiveMQ Command Lin

Page: [URI Protocols](https://cwiki.apache.org/confluence/display/ACTIVEMQ/URI+Protocols)  

ActiveMQ is designed to support mutliple different topologies and protocols. Which one you use depends on your messaging requirements, quality of service and network topology. The following table describes the different network protocols available for JMS

Page: [Use Cases](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Use+Cases)  

Messaging is a diverse and wide ranging subject - there are many different use cases, requirements and deployment options. This is one of the reasons why its so interesting to work on This document tries to highlight some of the main use cases we are tryi

Page: [User Forum](https://cwiki.apache.org/confluence/display/ACTIVEMQ/User+Forum)  

<a id="nabblelink" href="http://activemq.2283324.n4.nabble.com/ActiveMQ-User-f2341805.html">ActiveMQ - User</a> <script src="http://activemq.2283324.n4.nabble.com/embed/f2341805"></script>

Page: [User Submitted Configurations](https://cwiki.apache.org/confluence/display/ACTIVEMQ/User+Submitted+Configurations)  

Please add any configurations of ActiveMQ you wish to share with other users here... Complex Single Broker Configuration (STOMP only) - Example of an ActiveMQ configuration with predefined queues, simple destination security. JMS and JDBC operations in on

Page: [Users](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Users)  

This page contains a list of some of our users and gives a brief overview of how they are using ActiveMQ. The purpose of this page is to help the ActiveMQ community get to know each other & find out what we're all doing with ActiveMQ and for the developer

Page: [Using ActiveMQ](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Using+ActiveMQ)  

Using Apache ActiveMQ To help you get started using Apache ActiveMQ you may wish to start off with the Getting Started guide or the Configuring Transports. Otherwise here is a complete list of the guides.

Page: [Using ActiveMQ 5](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Using+ActiveMQ+5)  

Using Apache ActiveMQ To help you get started using Apache ActiveMQ version 5 you may wish to start off with the Version 5 Getting Started guide or the Configuring version 5 Transports. Otherwise here is a complete list of the guides. Commercial Documenta

Page: [Using ActiveMQ with EJB3 (JBoss Example)](using-activemq-with-ejb3-jboss-Index/example.md)  

I've seen numerous postings regarding ActiveMQ with EJB3, and variations of a datasource XML file for use with JBoss integration. However, they don't quite work. Here is what worked for me, it is actually quite simple: 1. Don't use any datasource file - o

Page: [Using Apache ActiveMQ](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Using+Apache+ActiveMQ)  

Questions on using Apache ActiveMQ

#### V

Page: [Verify Downloads](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Verify+Downloads)  

Verify the Integrity of Downloads It is essential that you verify the integrity of the downloaded files using the PGP or MD5 signatures. The PGP signatures can be verified using PGP or GPG. Begin by following these steps: Download the KEYS http://www.apac

Page: [Version 5 Examples](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Version+5+Examples)  

Since version 5.12.0, Apache ActiveMQ comes with the new tool that can be used to produce and consume messages from the broker. Prerequisites Before running the examples you should try running a JMS broker on your machine. Follow the Installation instru

Page: [Version 5 Getting Started](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Version+5+Getting+Started)  

Introduction This document describes how to install and configure ActiveMQ for both Unix and Windows' platforms. Document Organization The Getting Started Guide for ActiveMQ contains the following sections: Pre-Installation Requirements Hardware: 60 MB of

Page: [Version 5 Hello World](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Version+5+Hello+World)  

Hello World

Page: [Version 5 Initial Configuration](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Version+5+Initial+Configuration)  

Document Organization Firstly you need to add the jars to your classpath. Required JARs To make ActiveMQ easy to use, the default activemq-all.jar comes complete with all the libraries required. If you prefer to have explicit control over all the jars use

Page: [Version 5 Installation](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Version+5+Installation)  

Installation

Page: [Version 5 Performance Tuning](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Version+5+Performance+Tuning)  

For a more complete overview see Performance. There are trade-offs between performance and reliabilty. By default, activemq strikes a balance between the two, so there are some things you can change to increase throughput. Async publishing First some back

Page: [Version 5 Run Broker](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Version+5+Run+Broker)  

Running an ActiveMQ Broker Note if you want to use an embedded broker then see How do I embed a Broker inside a Connection The binary distribution of ActiveMQ comes with a script called 'activemq' which allows you to run a broker. For details regarding th

Page: [Version 5 Topologies](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Version+5+Topologies)  

Topologies

Page: [Version 5 Web Samples](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Version+5+Web+Samples)  

There are a few example programs demonstrating the REST messaging or Ajax in the activemq/activemq-web-demo https://svn.apache.org/repos/asf/activemq/trunk/activemq-web-demo/ module. Running the Web Samples We have integrated the Web Samples into the bina

Page: [Version 5 XML Configuration](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Version+5+XML+Configuration)  

transport connectors which consist of transport channels and wire formats TODO: add a link to a page explaining what transport connectors are how to configure and use them. network connectors using network channels or discovery TODO: add a link to a page

Page: [Virtual Destinations](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Virtual+Destinations)  

Virtual Destinations allow us to create logical destinations that clients can use to produce and consume from but which map onto one or more physical destinations. It allows us to provide more flexible loosely coupled messaging configurations. Virtual Top

Page: [Visualisation](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Visualisation)  

Inspired greatly by Gregor and Erik's great talk at TSSJS 2006 http://www.enterpriseintegrationpatterns.com/talks.html we've started to add some visualisation plugins into Apache ActiveMQ. Connection visualisation There is a <connectionDotFilePlugin/> bro

Page: [Visualisation Wish List](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Visualisation+Wish+List)  

There are a zillion different things we could do to visualise the system. Lets use this page to braindump ideas for what kinds of visualisations we could do show visually the popularity of certain destinations; using size/color/position/stats to indicate

Page: [VM Protocol](https://cwiki.apache.org/confluence/display/ACTIVEMQ/VM+Protocol)  

Protocol syntax : vm://logicalname Javadocs : org.codehaus.activemq.transport.vm http://activemq.codehaus.org/maven/apidocs/org/codehaus/activemq/transport/vm/package-frame.html The VM protocol allows clients to connect to each other inside the VM without

Page: [VM Transport Reference](https://cwiki.apache.org/confluence/display/ACTIVEMQ/VM+Transport+Reference)  

The VM Transport The VM transport allows clients to connect to each other inside the VM without the overhead of the network communication. The connection used is not a socket connection but use direct method invocations which enables a high performance em

#### W

Page: [Web Console](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Web+Console)  

The ActiveMQ Web Console is a web based administration tool for working with ActiveMQ. When used with the JMX support it can be an invaluable tool for working with ActiveMQ Running the Web Console on ActiveMQ 5.0 or later We have integrated the Web Consol

Page: [Web Samples](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Web+Samples)  

There are a few example programs demonstrating the REST, Ajax and WebSockets messaging that comes with the ActiveMQ distribution. Up until version 5.8 web demos were included in the default configuration and could be accessed directly using http://localho

Page: [WebLogic Integration](https://cwiki.apache.org/confluence/display/ACTIVEMQ/WebLogic+Integration)  

ActiveMQ WebLogic Integration ActiveMQ clients and brokers can be run in WebLogic Server or WebLogic Express. This is usually done for licensing reasons: WebLogic Server includes JMS client and server features, but it may cost extra to use these JMS featu

Page: [WebSockets](https://cwiki.apache.org/confluence/display/ACTIVEMQ/WebSockets)  

Introduction Besides Ajax API, starting with version 5.4.0 onwards, you can use HTML5 WebSockets http://dev.w3.org/html5/websockets/ to exchange messages with the broker from your browser. HTML 5 introduced web sockets, as a standardized way to communicat

Page: [What are administered objects](https://cwiki.apache.org/confluence/display/ACTIVEMQ/What+are+administered+objects)  

What are administered objects? Administered objects refers to objects that are configured in JNDI and then accessed by a JMS client. So they are simply client-side objects typically either a ConnectionFactory or a Destination (such as a Queue or Topic). N

Page: [What are those topics ActiveMQ.Advisory](https://cwiki.apache.org/confluence/display/ACTIVEMQ/What+are+those+topics+ActiveMQ.Advisory)  

When you look at a broker using JMX you will see a number of topics starting with ActiveMQ.Advisory.. These are the destinations used by the Advisory Message feature of ActiveMQ which allows you to listen to the behaviour of the system.

Page: [What happens when the journal size is exceeded](https://cwiki.apache.org/confluence/display/ACTIVEMQ/What+happens+when+the+journal+size+is+exceeded)  

If the "preferred" size is exceeded then the last log files keeps growing until the first log files can be overwritten. When a log file is overwritten, it's size is reset to the "preferred" size.

Page: [What happens with a fast producer and slow consumer](https://cwiki.apache.org/confluence/display/ACTIVEMQ/What+happens+with+a+fast+producer+and+slow+consumer)  

It depends a little on the QoS but in general we implement flow control which means that when we have a very fast producer and a slow consumer, when we get to a high water mark of outstanding messages we will start to tell the producer to slow down (which

Page: [What is ActiveMQ](https://cwiki.apache.org/confluence/display/ACTIVEMQ/What+is+ActiveMQ)  

ActiveMQ is an open sourced implementation of JMS 1.1 as part of the J2EE 1.4 specification.

Page: [What is the difference between a Virtual Topic and a Composite Destination](https://cwiki.apache.org/confluence/display/ACTIVEMQ/What+is+the+difference+between+a+Virtual+Topic+and+a+Composite+Destination)  

What is the difference between a Virtual Topic and a Composite Destination Both kinds of Virtual Destinations offer similar capabilities, namely that the producer sees a single Destination to send to and the consumer sees a different Destination to consum

Page: [What is the difference between discovery, multicast and zeroconf](https://cwiki.apache.org/confluence/display/ACTIVEMQ/What+is+the+difference+between+discovery%2C+multicast+and+zeroconf)  

Discovery refers to either a client (producer or consumer) establishing a 'transport connector' to the broker or a broker establishing 'network connector' to another broker without explicit static configuration of broker (IP or hostname). The scheme 'mult

Page: [What is the difference between persistent and non-persistent delivery](https://cwiki.apache.org/confluence/display/ACTIVEMQ/What+is+the+difference+between+persistent+and+non-persistent+delivery)  

What is the difference between persistent and non-persistent delivery? ActiveMQ supports both persistent and non-persistent delivery. As per the JMS specification, the default delivery mode is persistent. The persistence flag is set on the MessageProducer

Page: [What is the license](https://cwiki.apache.org/confluence/display/ACTIVEMQ/What+is+the+license)  

What is the license? This software is open source using the Apache 2.0 licence http://www.apache.org/licenses/LICENSE-2.0.html (a liberal BSD style license which is very commercial friendly)

Page: [What is the Prefetch Limit For?](../FAQ/Using Apache ActiveMQ/what-is-the-prefetch-limit-for.md)  

One of the design goals of ActiveMQ is to be a highly performant message bus. This means using a SEDA architecture to perform as much work as possible asynchronously. To make efficient use of network resources the broker utilizes a 'push' model to dispatc

Page: [What jars do I need](https://cwiki.apache.org/confluence/display/ACTIVEMQ/What+jars+do+I+need)  

What jars do I need The basic jars you need to use are described on the Initial Configuration page.

Page: [What open source integration solution works best with ActiveMQ](https://cwiki.apache.org/confluence/display/ACTIVEMQ/What+open+source+integration+solution+works+best+with+ActiveMQ)  

The Apache Camel http://camel.apache.org project has been designed to work easily with ActiveMQ - and comes embedded http://activemq.apache.org/camel/how-does-camel-work-with-activemq.html in both the clients and the broker from ActiveMQ 5.0 onwards. Apac

Page: [What platforms does ActiveMQ support](https://cwiki.apache.org/confluence/display/ACTIVEMQ/What+platforms+does+ActiveMQ+support)  

What platforms does ActiveMQ Support? ActiveMQ 5.0-5.7 supports any Java platform of Java 5.0 or later. To run on 1.4 see these instructions. ActiveMQ 5.8-5.10 require Java 6 or higher and the releases from 5.11 onwards require Java 7 or later. ActiveMQ

Page: [What version should I use](https://cwiki.apache.org/confluence/display/ACTIVEMQ/What+version+should+I+use)  

ActiveMQ version numbers follow the MAJOR.MINOR.PATCH convention used by many software projects. In general, patch releases are done only when there are significant enough bugs found in the current minor version to justify a release sooner than the next

Page: [While posting large binary file to activeMQ, is there a way to measure its progress](https://cwiki.apache.org/confluence/display/ACTIVEMQ/While+posting+large+binary+file+to+activeMQ%2C+is+there+a+way+to+measure+its+progress)  

If you are using the JMS Streams feature with 4.x of ActiveMQ http://activemq.org/JMS+Streams http://activemq.org/JMS+Streams you'd be able to watch the progress in a JMX console or HermesJMS by looking at the queue depths; each large 1Gb file is split in

Page: [Why do I not get all of the messages I sent](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Why+do+I+not+get+all+of+the+messages+I+sent)  

For ActiveMQ 3.x/4.x As Matt reported http://forums.logicblaze.com/posts/list/0/14.page#37 its possible that there is a race condition in your application; are you sure you had created your consumer and called start() on the JMS Connection before the prod

Page: [Why do I not receive messages on my durable topic subscription](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Why+do+I+not+receive+messages+on+my+durable+topic+subscription)  

You follow these steps Create a durable topic subscription Kill the consumer Publish some messages to the topic Restart the subscriber But you don't receive the messages? Fix To be able to deliver messages to offline durable topic subscribers you must mar

Page: [Why do KahaDB log files remain after cleanup](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Why+do+KahaDB+log+files+remain+after+cleanup)  

Clean-up of unreferenced KahaDB journal log files data-<id>.log will occur every 30 seconds by default. If a data file is in-use it will not be cleaned up. A data file may be in-use because: It contains a pending message for a destination or durable topic

Page: [Wildcards](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Wildcards)  

We support destination wildcards to provide easy support for federated name hierarchies. This concept has been popular in financial market data for some time as a way of organizing events (such as price changes) into hierarchies and to use wildcards for e

Page: [Wire Protocol](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Wire+Protocol)  

This page describes the logical OpenWire protocol for users developing clients in other languages than Java such as C# or C native clients. Note that OpenWire is designed for maximum performance and features; its the protocol used inside ActiveMQ. If you

Page: [WS Notification](https://cwiki.apache.org/confluence/display/ACTIVEMQ/WS+Notification)  

WS-Notification This page has now moved to the ServiceMix site http://servicemix.apache.org/. You can read about WS-Notification support here http://incubator.apache.org/servicemixConnectivity/ProtocolsConnectivity/Protocols/Connectivity/Protocols/ws-notification.md

Page: [WSIF](https://cwiki.apache.org/confluence/display/ACTIVEMQ/WSIF)  

The Apache Web Service Invocation Framework (WSIF) http://ws.apache.org/wsif/ allows you to perform web service invocations using a number of different implementation protocols like Axis, local Java, EJB, JMS, JCA CCI etc. For more information on how to u

#### X

Page: [XBean XML Reference 4.1](https://cwiki.apache.org/confluence/display/ACTIVEMQ/XBean+XML+Reference+4.1)  

Elements By Type The org.apache.activemq.network.jms.InboundQueueBridge Type Implementations <inboundQueueBridge> Create an Inbound Queue Bridge The org.apache.activemq.broker.BrokerService Type Implementations <broker> An ActiveMQ Message Broker which co

Page: [XBean XML Reference 5.0](https://cwiki.apache.org/confluence/display/ACTIVEMQ/XBean+XML+Reference+5.0)  

Elements By Type The org.apache.activemq.broker.TransportConnector Type Implementations <transportConnector> The org.apache.activemq.network.jms.InboundQueueBridge Type Implementations <inboundQueueBridge> Create an Inbound Queue Bridge The org.apache.act

Page: [Xml Configuration](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Xml+Configuration)  

We support an XML deployment descriptor for configuring the ActiveMQ Message Broker. There are many things which can be configured such as transport connectors which consist of transport channels and wire formats network connectors using network channels

Page: [Xml Reference](https://cwiki.apache.org/confluence/display/ACTIVEMQ/Xml+Reference)  

ActiveMQ Xml Reference This page contains a link to the XML reference guides and XML schema documents for Xml Configuration with ActiveMQ releases Released Schemas Reference Document Reference XML Schema XML Schema namespace XBean XML Reference 4.1 Refere

Page: [XMPP](https://cwiki.apache.org/confluence/display/ACTIVEMQ/XMPP)  

XMPP Protocol Support (Jabber!) This transport was deprecated in 5.8.0 and has been removed in a 5.9.0! We have support for XMPP http://www.xmpp.org/ (Jabber) as a transport in ActiveMQ. To use just add a connector as follows <broker xmlns="http://activem

#### Y

#### Z

Page: [ZeroConf](https://cwiki.apache.org/confluence/display/ACTIVEMQ/ZeroConf)  

ZeroConf ZeroConf http://www.zeroconf.org/ is a standard service discovery mechanism. ZeroConf is used on Apple's OS X; which used to call it Rendezvous but now calls it Bonjour. Support for ZeroConf is deprecated and scheduled to be removed from ActiveMQ

Page: [ZeroConf Transport Reference](https://cwiki.apache.org/confluence/display/ACTIVEMQ/ZeroConf+Transport+Reference)  

The ZeroConf Transport The ZeroConf transport works just like Discovery Transport, except that it uses a ZeroConf based discovery agent to locate the list of broker uris to connect to. Configuration Syntax zeroconf:serviceName?transportOptions or zeroconf

Page: [zOS](https://cwiki.apache.org/confluence/display/ACTIVEMQ/zOS)  

Running ActiveMQ on z/OS It is relatively straightforward to run the ActiveMQ broker on z/OS. There are a couple of steps: 1. Copy ActiveMQ to z/OS 2. Modify the configuration 3. Run using JZOS 4. Test Copy ActiveMQ to z/OS Ensure that the 1.5 JVM is avai

#### !@#$

