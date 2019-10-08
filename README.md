Apache ActiveMQ Website
=======================

This is the repository for the Apache ActiveMQ website, hosted at [activemq.apache.org](http://activemq.apache.org/).

How it works
------------
The `master` branch of this repo contains the source files that are used to generate the HTML that ultimately gets pushed to the site, along with
a copy of the generated site output located within the `content` directory, which is published to the live server using
[gitpubsub](http://www.apache.org/dev/gitpubsub.html) whenever changes are pushed to it.

See the *Contributing* section below for more.


To Build the site
-----------------

Before building the site you will need to install [Jekyll](https://jekyllrb.com/).  The Jekyll site has [installation instructions](https://jekyllrb.com/docs/installation/) to help get you started.

To build the site from the `src` directory and store the output in the `content` directory, run the build script:

    ./build.sh

Alternatively, you can build and serve the site locally using Jekyll to test changes you have made or are making:

    jekyll serve -s ./src

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

1. Update the `master` branch with your (or a Pull Request's) changes.
2. Run `build.sh` and ensure that all updates made are reflected in the `content` directory, commit any that are not.
3. Push this branch to the ASF remote and the site will automatically be updated within seconds.

