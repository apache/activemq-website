---
layout: default_md
title: ActiveMQ Classic Download Archives 
title-class: page-title-classic
type: classic
---

You can use the Apache Archives to download previous Apache ActiveMQ Classic releases.

*   [http://archive.apache.org/dist/activemq/](http://archive.apache.org/dist/activemq/)
*   [http://archive.apache.org/dist/activemq/apache-activemq/](http://archive.apache.org/dist/activemq/apache-activemq/)

Previous Apache ActiveMQ Classic release pages:

{% for release in site["classic_releases"] reversed %}
*   [{{release.title}}]({{release.url}}){% endfor %}
