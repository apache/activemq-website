---
layout: iniframe_md
title: Previous ActiveMQ Artemis Documentation
type: artemis
---

{% assign reversed_releases = site["artemis_releases"] | reverse %}
{% assign current_releases = "" | split: ',' %}

{% for current_release_prefix in site.data.current_releases["artemis"] %}
    {% for release in reversed_releases %}
        {% if release.version contains current_release_prefix %}
            {% assign current_releases = current_releases | push: release.version %}
            {% break %}
        {% endif %}
    {% endfor %}
{% endfor %}

<div class="alert alert-warning">
  These are older version docs. To see the current release docs, please see the <a href="{{site.baseurl}}/components/artemis/documentation" target="_parent" class="alert-link">documentation page</a>.
</div>

Version|User Manual|
---|---|
{% for release in reversed_releases %}{% unless current_releases contains release.version %}{{release.version}}|[HTML]({{release.docs_version}}), [PDF]({{release.docs_version}}/book.pdf), [Mobi]({{release.docs_version}}/book.mobi), [ePub]({{release.docs_version}}/book.epub)|
{% endunless %}{% endfor %}2.13.0|[HTML](2.13.0), [PDF](2.13.0/book.pdf), [Mobi](2.13.0/book.mobi), [ePub](2.13.0/book.epub)|
2.12.0|[HTML](2.12.0), [PDF](2.12.0/book.pdf), [Mobi](2.12.0/book.mobi), [ePub](2.12.0/book.epub)|
2.11.0|[HTML](2.11.0), [PDF](2.11.0/book.pdf), [Mobi](2.11.0/book.mobi), [ePub](2.11.0/book.epub)|
2.10.1|[HTML](2.10.1), [PDF](2.10.1/book.pdf), [Mobi](2.10.1/book.mobi), [ePub](2.10.1/book.epub)|
2.10.0|[HTML](2.10.0), [PDF](2.10.0/book.pdf), [Mobi](2.10.0/book.mobi), [ePub](2.10.0/book.epub)|
2.9.0|[HTML](2.9.0), [PDF](2.9.0/book.pdf), [Mobi](2.9.0/book.mobi), [ePub](2.9.0/book.epub)|
2.8.0|[HTML](2.8.0), [PDF](2.8.0/book.pdf), [Mobi](2.8.0/book.mobi), [ePub](2.8.0/book.epub)|
2.7.0|[HTML](2.7.0), [PDF](2.7.0/book.pdf), [Mobi](2.7.0/book.mobi), [ePub](2.7.0/book.epub)|
2.6.0|[HTML](2.6.0), [PDF](2.6.0/book.pdf), [Mobi](2.6.0/book.mobi), [ePub](2.6.0/book.epub)|
2.5.0|[HTML](2.5.0), [PDF](2.5.0/book.pdf), [Mobi](2.5.0/book.mobi), [ePub](2.5.0/book.epub)|
2.4.0|[HTML](2.4.0), [PDF](2.4.0/book.pdf), [Mobi](2.4.0/book.mobi), [ePub](2.4.0/book.epub)|
2.3.0|[HTML](2.3.0), [PDF](2.3.0/book.pdf), [Mobi](2.3.0/book.mobi), [ePub](2.3.0/book.epub)|
2.2.0|[HTML](2.2.0), [PDF](2.2.0/book.pdf), [Mobi](2.2.0/book.mobi), [ePub](2.2.0/book.epub)|
2.1.0|[HTML](2.1.0), [PDF](2.1.0/book.pdf), [Mobi](2.1.0/book.mobi), [ePub](2.1.0/book.epub)|
2.0.0|[HTML](2.0.0), [PDF](2.0.0/book.pdf), [Mobi](2.0.0/book.mobi), [ePub](2.0.0/book.epub)|
1.5.5|[HTML](1.5.5), [PDF](1.5.5/book.pdf), [Mobi](1.5.5/book.mobi), [ePub](1.5.5/book.epub)|
1.5.4|[HTML](1.5.4), [PDF](1.5.4/book.pdf), [Mobi](1.5.4/book.mobi), [ePub](1.5.4/book.epub)|
1.5.3|[HTML](1.5.3), [PDF](1.5.3/book.pdf), [Mobi](1.5.3/book.mobi), [ePub](1.5.3/book.epub)|
1.5.2|[HTML](1.5.2), [PDF](1.5.2/book.pdf), [Mobi](1.5.2/book.mobi), [ePub](1.5.2/book.epub)|
1.5.1|[HTML](1.5.1), [PDF](1.5.1/book.pdf), [Mobi](1.5.1/book.mobi), [ePub](1.5.1/book.epub)|
1.5.0|[HTML](1.5.0), [PDF](1.5.0/book.pdf), [Mobi](1.5.0/book.mobi), [ePub](1.5.0/book.epub)|
1.4.0|[HTML](1.4.0), [PDF](1.4.0/activemq-artemis-1.4.0.pdf), [Mobi](1.4.0/activemq-artemis-1.4.0.mobi), [ePub](1.4.0/activemq-artemis-1.4.0.epub)|
1.3.0|[HTML](1.3.0), [PDF](1.3.0/activemq-artemis-1.3.0.pdf), [Mobi](1.3.0/activemq-artemis-1.3.0.mobi), [ePub](1.3.0/activemq-artemis-1.3.0.epub)|
1.2.0|[HTML](1.2.0), [PDF](1.2.0/activemq-artemis-1.2.0.pdf), [Mobi](1.2.0/activemq-artemis-1.2.0.mobi), [ePub](1.2.0/activemq-artemis-1.2.0.epub)|
1.1.0|[HTML](1.1.0), [PDF](1.1.0/activemq-artemis-1.1.0.pdf), [Mobi](1.1.0/activemq-artemis-1.1.0.mobi), [ePub](1.1.0/activemq-artemis-1.1.0.epub)|
1.0.0|[HTML](1.0.0), [PDF](1.0.0/activemq-artemis-1.0.0.pdf), [Mobi](1.0.0/activemq-artemis-1.0.0.mobi), [ePub](1.0.0/activemq-artemis-1.0.0.epub)|
