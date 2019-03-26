Apache ActiveMQ Webiste
=======================

This is the repository for the Apache ActiveMQ website, hosted at [activemq.apache.org](http://activemq.apache.org/).

How it works
------------
The master branch of this repo contains the source files that are used to generate the HTML that ultimately gets pushed to the site.
The `asf-site` branch is where the actual generated files are stored. Note that this branch must contain exactly one folder called `content`,
and so has been checked out as an orphan branch with its own commit history apart from the master branch. See the *Contributing* section below.

Through a [gitpubsub](http://www.apache.org/dev/gitpubsub.html) mechanism on the apache.org server,
files are taken from the `asf-site` branch and pushed to the live server.

To Build the site
-----------------

Before building the site you will need to install [Jekyll](https://jekyllrb.com/).  The Jekyll site has [installation isntructions](https://jekyllrb.com/docs/installation/) shuold help get you started.

3. run the build script ./build.sh

Alternately you can build the site and test it using Jekyll to serve the site locally

1. Run the command: jekyll serve -s ./src

Contributing to the site
------------------------
If you would like to make a change to the ActiveMQ site:

1. Fork the [Apache ActiveMQ site repository](https://github.com/apache/activemq-website) to your github account.
2. Create a new branch from `master`
3. Add commit(s) to your branch
4. Test your changes locally
5. Open a pull request on the github mirror
6. An ActiveMQ committer will review and merge your changes

If you are a committer, do the following:

1. Update the master branch with your (or a Pull Request's) change.
2. Merge the pull request to the [Apache ActiveMQ site repository](https://github.com/apache/activemq-website) 
2. Run `build.sh` from the master branch directory. This will:
  - checks out and updates the `asf-site` branch with a new commit of the build from the current branch
3. At this point, you should be on the `asf-site` branch. Simply push this branch to the asf remote and the site will automatically be updated within seconds.

