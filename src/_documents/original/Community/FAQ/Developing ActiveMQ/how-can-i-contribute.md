Apache ActiveMQ ™ -- How can I contribute 

[Community](community.md) > [FAQ](CommunityCommunity/Community/faq.md) > [Developing ActiveMQ](Community/FAQCommunity/FAQ/Community/FAQ/developing-activemq.md) > [How can I contribute](Community/FAQ/Developing ActiveMQ/how-can-i-contribute.md)


How can I contribute to Apache ActiveMQ?
----------------------------------------

There are many ways you can help make ActiveMQ a better piece of software - please dive in and help!

Try surf the documentation - if somethings confusing or not clear, let us know. Download the code & try it out and see what you think. Browse the source code. Got an itch to scratch, want to tune some operation or add some feature?

Want to do some hacking on ActiveMQ? Try surfing to our [issue tracker](http://issues.apache.org/jira/browse/AMQ) for open issues or features that need to be implemented, take ownership of an issue and try fix it.

Getting in touch
----------------

There are various ways of communicating with the ActiveMQ community.

*   join us on the [Discussion Forums](CommunityCommunity/Community/discussion-forums.md) or subscribe to the [Mailing Lists](Community/mailing-lists.md) and take part in any conversations
*   pop by on in [irc](Site/Navigation/irc.md) and say hi
    
*   add some comments to the [wiki](Site/navigation.md)

If you find a bug or problem
----------------------------

Please raise a new issue in our [issue tracker](https://issues.apache.org/jira/browse/AMQ)

If you can create a JUnit test case then your issue is more likely to be resolved quicker.  
e.g. take a look at some of the existing [unit tests cases](https://git-wip-us.apache.org/repos/asf?p=activemq.git;a=tree;f=activemq-unit-tests/src/test;h=185a655c5200ed30fd2964bc236c18c5bde534c4;hb=refs/heads/master)

Then we can add your issue to the test suite and then we'll know when its really fixed and we can ensure that the problem **stays fixed** in future releases.

If you want to help out with the documentation
----------------------------------------------

If you want to contribute to the ActiveMQ documentation you should first subscribe our [dev@](mailto:dev-subscribe@activemq.apache.org) where ActiveMQ developers interact with each other. If you want edit rights on the ActiveMQ site, create an account in the [ActiveMQ wiki](https://cwiki.apache.org/confluence/display/ACTIVEMQ) and fill in and submit an ICLA to the ASF (see the [Committer Guide](Developers/becoming-a-committer.md)). Then ask on the dev@ list to be granted edit rights and an admin will do so fairly quickly. If you want to just contribute the content, please submit the content on the dev@ list or create an issue and attach it there. **All** contributions are highly appreciated.

Working on the code
-------------------

Grab the [Source](Developers/source.md) from git

Build the project.

export MAVEN_OPTS="-Xmx512M -XX:MaxPermSize=128M"
mvn -Dtest=false install

PS: You might need to build multiple times (if you get a build error) because sometimes maven fails to download all the files.

Create a project in your IDE. e.g. if you are using Eclipse the following should do the trick.

mvn eclipse:eclipse

Then import the projects into your workspace.

Creating patches
----------------

We gladly accept patches if you can find ways to improve, tune or fix ActiveMQ in some way.

Most IDEs can create nice patches now very easily. e.g. in Eclipse just right click on a file/directory and select Team -> Create Patch. Then just save the patch as a file and then submit it. (You may have to click on Team -> Share... first to enable the Subversion options).

If you're a command line person try the following to create the patch

diff -u Main.java.orig Main.java >> patchfile.txt

or

git diff Main.java >> patchfile.txt

Submitting patches
------------------

The easiest way to submit a patch is to create a new JIRA issue, attach the patch and tick the ASF license grant check box, tick the Patch Attached button on the issue then fire off an email to the [Mailing Lists](Community/mailing-lists.md) or [Discussion Forums](CommunityCommunity/Community/discussion-forums.md).

Becoming a commmitter
---------------------

Once you've got involved as above, we may well invite you to be a committer. See [Becoming a committer](Developers/becoming-a-committer.md) for more details.

Using the issue tracker
-----------------------

Before you can raise an issue in the issue tracker you need to register with it. This is quick & painless.

If you want to have a go at fixing an issue you need to be in the list of activemq-developers on the issue tracker. To join the group, please mail the [dev@activemq.apache.org](mailto:dev@activemq.apache.org) mail list with the email address you used to register with the issue tracker and we'll add you to the group.

Why not dive in the [issue tracker](https://issues.apache.org/jira/browse/AMQ), and try tackle some of our outstanding issues?

Becoming a committer
--------------------

The first step is contributing to the project; if you want to take that a step forward and become a fellow committer on the project then see the [Committer Guide](Developers/becoming-a-committer.md)

