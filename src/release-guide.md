---
layout: default_md
title: Release Guide 
title-class: page-title-activemq5
type: activemq5
---

[Developers](developers) > [Release Guide](release-guide)


How to create and announce an ActiveMQ release. This release is based on [General guide for releasing Maven-based project at Apache](http://maven.apache.org/developers/release/apache-release.html) , so be sure to check it out before continuing and meet all prerequisites.

Maven 2 Setup
-------------

Before you deploy anything to the maven repository using Maven 2, you should configure your ~/.m2/settings.xml file  
so that the file permissions of the deployed artifacts are group writeable. If you do not do this, other developers will not able to overwrite your SNAPSHOT releases with newer versions.
```
<settings>
  ...
  <servers>

    <server>
      <id>apache.snapshots.https</id>
      <username>dejanb</username>
    </server>
    <!\-\- To publish a website of some part of Maven -->
    <server>
      <id>apache.website</id>
      <username>dejanb</username>
      <filePermissions>664</filePermissions>
      <directoryPermissions>775</directoryPermissions>
    </server>
    <!\-\- To stage a release of some part of Maven -->
    <server>
      <id>apache.releases.https</id>
      <username>dejanb</username>
    </server>
    <!\-\- To stage a website of some part of Maven -->
    <server>
      <id>stagingSite</id> <!-- must match hard-coded repository identifier in site:stage-deploy -->
      <username>dejanb</username>
      <filePermissions>664</filePermissions>
      <directoryPermissions>775</directoryPermissions>
    </server>

  </servers>
  ...
</settings>
```
It is also essential that you configure your umask to 2 on people.apache.org for non-interactive login. If your shell is tcsh you can edit .cshrc to include

umask 2

Other shell initialization files may interfere with this setting but if this is the only umask setting it appears to work. Instructions for other shells would be welcome.

### Additional local configuration for using release and staging plugins.

To effectively use the release and staging plugins you need some information about where the staging will happen and signing information for gpg. Your ~/.m2/settings.xml should contain a profile like this:
```
<settings>
    <profiles>
        <profile>
          <id>apache-release</id>
          <properties>
             <gpg.passphrase>secretPhrase</gpg.passphrase>
         </properties>
        </profile>
    </profiles>
 ...
</settings>
```

Creating the ActiveMQ Release
-----------------------------

The release plugin will prompt for a release version, tag and next release version. Use a three digit release version of the form: 5.x.x and for the tag use a string of the form: activemq-5.x.x. The next version string should use the two digit from: 5.x-SNAPSHOT as this can be consistent for future SNAPSHOT releases.

1.  Verify the to-be-released version identifier exists in the [META-INF/spring.schemas](https://git-wip-us.apache.org/repos/asf?p=activemq.git;a=blob;f=activemq-spring/src/main/resources/META-INF/spring.schemas;hb=HEAD) mappings file AND [activemq-osgi/src/main/resources/META-INF/spring.schemas](https://git-wip-us.apache.org/repos/asf?p=activemq.git;a=blob;f=activemq-osgi/src/main/resources/META-INF/spring.schemas;hb=HEAD) file, if not add it and commit. It should contain:
    ```
    http://activemq.apache.org/schema/core/activemq-core-${pom.version}.xsd=activemq.xsd
    ```
2.  Verify headers with [rat](http://incubator.apache.org/rat/apache-rat-plugin/usage.html)
    ```
    mvn -e apache-rat:check
    grep -e ' !?????' target/rat.txt -- will show any files without licenses
    ```
3.  Do a release dry run to check for problems
    ```
    mvn release:prepare -DdryRun=true
    ```
    Check that you are happy with the results. The poms for the proposed tags will be in pom.xml.tag. When you like the results, clean up:
    ```
    mvn release:clean
    ```
4.  Prepare the release
    ```
    mvn release:prepare
    ```
    This will create the tag in git and leave various stuff around locally to direct the perform phase.
    
5.  Make a local copy of the release configuration in case something goes wrong
    ```
    cd ..
    cp -r activemq-release activemq-release-prepared
    cd activemq-release
    ```
6.  Perform the release to the staging repo
    ```
    mvn release:perform
    ```
    This uses both the activemq release profile which directs building source jars, javadoc jars, and signing everything, and also the settings release profile that says where to  
    put stuff and how to sign it.
    
7.  Close the staging repository  
    Quote from the [Maven release guide for Apache projects](http://maven.apache.org/developers/release/apache-release.html)
    
    > Login to [https://repository.apache.org](https://repository.apache.org) using your Apache LDAP credentials. Click on "Staging". Then click on "maven" in the list of repositories. In the panel below you should see an open repository that is linked to your username and ip. Right click on this repository and select "Close". This will close the repository from future deployments and make it available for others to view. If you are staging multiple releases together, skip this step until you have staged everything. Enter the name and version of the artifact being released in the "Description" field and then click "Close". This will make it easier to identify it later.
    
    See the image in the original guide for more info.
8.  Verify staged artifacts  
    Quote from the [original guide](http://maven.apache.org/developers/release/apache-release.html)
    
    > If you click on your repository, a tree view will appear below. You can then browse the contents to ensure the artifacts are as you expect them. Pay particular attention to the existence of *.asc (signature) files. If the you don't like the content of the repository, right click your repository and choose "Drop". You can then rollback your release and repeat the process.  
    > Note the repository URL, you will need this in your vote email.
    
9.  Build the site from the tag that release:perform checked out into target/checkout in the previous step.  
    Note that the -Prelease profile is needed to specify the profile in settings.xml that configures the staging location.
    ```
    cd target/checkout
    mvn site -Prelease
    ```
10.  Populate the Javadocs site in svn
    ```
    svn co https://svn.apache.org/repos/infra/websites/production/activemq/content
    cd content/maven
    mkdir <version>
    #copy over apidocs folder that was created by the site plugin to <version>/apidocs
    svn add <version>
    svn rm apidocs
    ln -s <version>/apidocs apidocs
    svn add apidocs
    # and commit once it looks good.
    ```
11.  Stage the official release artifacts in the SVN dist dev area for folks to test and vote on, using the helper script already in the repo:
    ```
    svn co https://dist.apache.org/repos/dist/dev/activemq/activemq/
    cd activemq
    ./prepare-release.sh <nexus-staging-repo-url> <version>
    # Example: ./prepare-release.sh https://repository.apache.org/content/repositories/orgapacheactivemq-1149 5.15.1
    svn add <version>
    ```
    and commit once it looks good.
    
12.  Call a vote on the dev list, listing the great new features of the release.

After the vote passes
---------------------

1.  Promote the release (i.e. release the staging repository): login to[https://repository.apache.org](https://repository.apache.org/), navigate to the staging repository and click the "release" button. 
2.  Copy the staged release files from the SVN dist dev folder to the SVN dist release folder: [https://dist.apache.org/repos/dist/release/activemq/](https://dist.apache.org/repos/dist/release/activemq/)
    ```
    svn cp -m "add files for activemq-<version>" https://dist.apache.org/repos/dist/dev/activemq/activemq/<version> https://dist.apache.org/repos/dist/release/activemq/<version>
    # Example: svn cp -m "add files for activemq-5.15.1" https://dist.apache.org/repos/dist/dev/activemq/activemq/5.15.1 https://dist.apache.org/repos/dist/release/activemq/5.15.1
    ```
3.  Populate the schema site in svn
    ```
    svn co https://svn.apache.org/repos/infra/websites/production/activemq/content
    cd content/schema/core
    curl --remote-name-all https://repository.apache.org/content/repositories/releases/org/apache/activemq/activemq-spring/<version>/activemq-spring-<version>{-schema.html,.xsd}{.asc,.asc.md5,.asc.sha1,.sha1,.md5,}
    for i in activemq-spring-5.9.0*; do mv -- "$i" "${i//spring/core}"; done;
    svn add activemq-core-5.9.0*
    svn rm activemq-core.xsd
    ln -s activemq-core-5.9.0.xsd activemq-core.xsd
    svn add activemq-core.xsd
    # and commit once it looks good.
    ```    
4.  Continue with the Announcing section below
5.  Created a in progress wiki page for the next release
6.  Remove any releases from the dist site that are no longer supported and update the wiki page for that release to point to the archives for downloads.

Announcing the ActiveMQ Release
-------------------------------

1.  Perform a release in JIRA and create a new release version in JIRA.
    1.  Move unresolved issues to the next release first, in a bulk (do not send email) update
    2.  You might also want to search for resolved/closed issues with no fix version just in case   
2.  Create a download page for the realease by adding a file in `src/_releases/` and name the file with its version converted to an integer - for example the file for 5.16.1 should be name `activemq-5016001-release.md`. The Front Matter must include `version`, `release_notes`, `release_date`, and `title`. For example, this might be an expected content based on the 5.16.1 release:
    ```
    ---
    version: 5.16.1
    release_notes: https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12347027
    release_date: Jan 20, 2021
    title: ActiveMQ 5.16.1 Release 
    ---
    Apache ActiveMQ {{ page.version }} was released on {{ page.release_date }}. It fully supports JDK 9+ at runtime and includes several resolved [issues]({{ page.release_notes }}) and bug fixes.
    ``` 
3. If necessary, update the current versions by editing the `5x` list in `src/_data/current_releases.yml`. The latest patch release published in `src/_releases/` for the major.minor versions in the list will automatically be included on the [download page](https://activemq.apache.org/components/classic/download/).
4.  Update the [Xml Reference](xml-reference) page with a link to the HTML and XSD
7.  Update [QuickLinks](quicklinks) and [JavaDocs](docs) pages
8.  Mail the [dev](mailto:dev@activemq.apache.org) & [user](mailto:user@activemq.apache.org) lists
9.  [Post](http://cwiki.apache.org/confluence/pages/viewrecentblogposts.action?key=ACTIVEMQ) a news entry on the WIKI
10.  tweet
11.  Have a beer!
