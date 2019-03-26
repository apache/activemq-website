Apache ActiveMQ ™ -- Building 

[Developers](../developers.md) > [Building](../Developers/building.md)


Building ActiveMQ from Source
-----------------------------

ActiveMQ uses [Maven](http://maven.apache.org/) as its build and management tool. If you don't fancy using Maven you can use your IDE directly or [Download](OverviewOverview/Overview/download.md) a distribution or JAR.

### Prequisites

**Required:**

*   Download and [install Maven](http://maven.apache.orgOverviewOverview/Overview/download.md).
*   Get the latest [Source](../Developers/source.md)
*   JDK (1.6 for version <= 5.10, 1.7 for version > 5.10)

Using Maven 2 (ActiveMQ 4.1.x and Up)
-------------------------------------

ActiveMQ 4.1.x and up use Maven 2 to Build. We recommend you download and install [Maven 2.0.4](http://maven.apache.orgOverviewOverview/Overview/download.md).

You should set the MAVEN_OPTS environment variable to -Xmx800m. There are portions of the ActiveMQ build that are very memory intensive. Increase the maven memory limit so that the build does not fail for you.

### Doing a Quick Build

mvn -Dtest=false -DfailIfNoTests=false clean install 

### Using an IDE

If you prefer to use an IDE then you can auto-generate the IDE's project files using maven plugins. e.g.

mvn eclipse:eclipse

or

mvn idea:idea

Importing into Eclipse

If you have not already done so, you will need to make Eclipse aware of the Maven repository so that it can build everything. In the preferences, go to Java->Build Path->Classpath and define a new Classpath Variable named M2_REPO that points to your local Maven repository (i.e., `~/.m2/repository` on Unix and `c:\Documents and Settings\<user>\.m2\repository` on Windows).

### Other Maven 2 Goals

For more details try the [Examples](../Using ActiveMQ/examples.md) or [Benchmark Tests](../Developers/benchmark-tests.md)  
Please refer to the [plugin reference](http://maven.apache.org/plugins/index.html) for more details on using them.

Using Maven 1 (ActiveMQ 4.0.x and Down)
---------------------------------------

ActiveMQ 4.0.x and down use Maven 1 to Build. We recommend you download and install [Maven 1.0.2](http://maven.apache.org/maven-1.x/startOverviewOverview/Overview/download.md).

### Doing a Quick Build

maven -Dmaven.test.skip.exec=true

### Using an IDE

If you prefer to use an IDE then you can autogenerate the IDE's project files using maven plugins. e.g.

maven eclipse

or

maven idea

etc.

### Other Maven 1 Goals

For more details try the [Examples](../Using ActiveMQ/examples.md) or [Benchmark Tests](../Developers/benchmark-tests.md)  
Please refer to the [plugin reference](http://maven.apache.org/maven-1.x/plugins/bundled/) for more details on using them.

