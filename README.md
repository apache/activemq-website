Apache ActiveMQ Website
=======================

This is the repository for the Apache ActiveMQ website, hosted at [activemq.apache.org](https://activemq.apache.org/).

How it works
------------
This branch of the repo contains the source files that are used to generate the HTML that ultimately gets pushed to the site. When a commit is made to the branch, a Jekyll build is automatically performed in CI and the generated site output committed back to the `asf-site` branch within the `output` directory. The generated content on `asf-site` is then automatically published to the live web server at https://activemq.apache.org/.

See the *Contributing* section below for more.


To Build the site locally
-------------------------

The site is built using [Jekyll](https://jekyllrb.com/). Before building the site you will need to install a Ruby development environment, and GCC. The Jekyll site has [guides](https://jekyllrb.com/docs/installation/#guides) that may help get you started with these pre-requisites.

You need to install the [Bundler](https://bundler.io/) tool with:

    gem install bundler

Then ensure you are within a checkout directory of the website repo for instructions/commands that follow.

You can optionally isolate the ActiveMQ website dependencies from your general environment by configuring Bundler to use a local install path
with `bundle config set path --local vendor/bundle` from within the site checkout. This sets the _./.bundle/config_ file to have Bundle install
items in the _./vendor/bundle_ directory. Both are ignored in _.gitignore_ to help prevent showing or checking in changes to them.

You can then use Bundler to install the required dependencies:

    bundle install

You can now build (from the `src` directory, to the `_site` output directory) and serve + reload the site locally using Jekyll to test changes as you make them:

    bundle exec jekyll serve --livereload

You can view the site by navigating to the printed `Sever Address`, e.g http://127.0.0.1:4000.

Alternatively, rather than serving the site, to just build the site simply run:

    bundle exec jekyll build

Helper scripts `./serve.sh` and `./build.sh` are provided which do an inline bundle install followed by jekyll serve or build.

If for some reason you need to clear the metadata/cache used to support the build process, and the build output, you can run:

    rm -rf src/.jekyll-*
    rm -rf _site

There is a `./clean.sh` helper script provided that does the above.

Note there is also a `./serve_subset.sh` helper script. This uses additional configuration from `_config_subset_excludes.yml` to omit building
older release content that doesnt typically change, significantly improving responsiveness while working on additions not affecting those areas.
It works best when starting without existing full _site output, which can be cleaned out as noted above.

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

