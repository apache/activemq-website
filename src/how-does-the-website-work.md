---
layout: default_md
title: How does the website work 
title-class: page-title-activemq5
type: activemq5
---

 [FAQ](faq) > [General](general) > [How does the website work](how-does-the-website-work)

Apache ActiveMQ Website
=======================

The repository for the Apache ActiveMQ website is hosted at [https://github.com/apache/activemq-website](https://github.com/apache/activemq-website).

How it works
------------
The [master branch](https://github.com/apache/activemq-website/tree/master/) of the repo contains the source files that are used to generate the HTML that ultimately gets pushed to the site. When a commit is made to the branch, a Jekyll build is automatically performed in CI and the generated site output committed back to the `asf-site` branch within the `output` directory. The generated content on `asf-site` is then automatically published to the live web server at https://activemq.apache.org/.

See [How do I edit the website](how-do-i-edit-the-website) for more information.