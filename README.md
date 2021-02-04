Apache ActiveMQ Website
=======================

This is the repository for the Apache ActiveMQ website, hosted at [activemq.apache.org](http://activemq.apache.org/).

How it works
------------
This branch of the repo contains the source files that are used to generate the HTML that ultimately gets pushed to the site. When a commit is made to the branch, a Jekyll build is automatically performed in CI and the generated site output committed back to the `asf-site` branch within the `output` directory. The generated content on `asf-site` is then automatically published to the live web server at https://activemq.apache.org/.

See the *Contributing* section below for more.


To Build the site locally
-------------------------

Before building the site you will need to install [Jekyll](https://jekyllrb.com/) (and Bundler).  The Jekyll site has [installation instructions](https://jekyllrb.com/docs/installation/) to help get you started.

You can build (from the `src` directory, to the `_site` output directory) and serve the site locally using Jekyll to test changes you have made or are making:

    ./serve.sh

Alternatively, to just build the site, run:

    ./build.sh

Note that these helper scripts perform incremental builds. If for some reason you need to clear the metadata/cache used to support the build process, you can run:

    rm -rf src/.jekyll-metadata src/.jekyll-cache/


Contributing to the site
------------------------
If you would like to make a change to the ActiveMQ site:

1. Fork the [Apache ActiveMQ site repository](https://github.com/apache/activemq-website) to your github account.
2. Create a new branch from `master`
3. Test your changes locally
4. Add commit(s) to your branch
5. Open a pull request on the github mirror
6. An ActiveMQ committer will review and merge your changes

If you are a committer, do the following:

1. Update the `master` branch with your (or a Pull Request's) changes.
2. Run `serve.sh`/ `build.sh`and very the updates made look appropriate.
3. Push the changes to the ASF remote.
4. The CI build will run and commit the generated site to the `asf-site` branch automatically within a few minutes, from where it will also be published. CI build status mails go to the commits list.
4. Verify the updated website works as expected by browsing it.

Add a new ActiveMQ Classic Release
----------------------------------
To add a new version simply add a new file in `src/_releases/` and name the file with its version converted to an integer - for example the file for 5.16.1 should be name `activemq-5016001-release.md`. The Front Matter must include `version`, `release_notes`, `release_date`, and `title`. 

For example, this is the content for the 5.16.1 release. 

    ---
    version: 5.16.1
    release_notes: https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12341032
    release_date: Jan 20, 2021
    title: ActiveMQ 5.16.1 Release 
    ---
    Apache ActiveMQ 5.16.1 fully supports JDK 9+ at runtime and includes several resolved[ issues](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12347027) and bug fixes.
    
    This release addresses [CVE-2021-26117: LDAP-Authentication does not verify passwords on servers with anonymous bind.](../security-advisories.data/CVE-2021-26117-announcement.txt) 

Update the current versions of ActiveMQ Classic
----------------------------------------------
To update the current versions of ActiveMQ classic edit the `current_releases` list in `_config.yml`. The latest patch release published in `src/_releases/` for the major.minor versions in the list will automatically be included on the [download page](https://activemq.apache.org/components/classic/download/). 