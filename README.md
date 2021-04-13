Apache ActiveMQ Website
=======================

This is the repository for the Apache ActiveMQ website, hosted at [activemq.apache.org](https://activemq.apache.org/).

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

If for some reason you need to clear the metadata/cache used to support the build process, and the build output, you can run:
    rm -rf src/.jekyll-*
    rm -rf _site


Contributing to the site
------------------------
If you would like to make a change to the ActiveMQ site:

1. Fork the [Apache ActiveMQ site repository](https://github.com/apache/activemq-website) to your github account.
2. Create a new branch from `main`
3. Test your changes locally
4. Add commit(s) to your branch
5. Open a pull request on the github mirror
6. An ActiveMQ committer will review and merge your changes

If you are a committer, do the following:

1. Clone `https://gitbox.apache.org/repos/asf/activemq-website.git`.
2. Update the `main` branch with your (or a Pull Request's) changes.
3. Run `serve.sh` or `build.sh`and verify the updates look appropriate.
4. Push the changes to the ASF remote.
5. The CI build will run and commit the generated site to the `asf-site` branch automatically within a few minutes, from where it will also be published. CI build status mails go to the commits list.
6. Verify the updated website works as expected by browsing it.
