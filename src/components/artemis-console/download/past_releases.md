---
layout: default_md
title: ActiveMQ Artemis Console Past Releases
title-class: page-title-artemis
type: artemis
---

<div class="alert alert-warning">
  These are older releases. To get the current release, please see the <a href="{{site.baseurl}}/components/artemis-console/download" class="alert-link">download page</a>.
</div>

It is important to [verify the integrity]({{site.baseurl}}/components/artemis-console/download#verify-the-integrity-of-downloads) of the files you download.

{% assign reversed_releases = site["artemis_console_releases"] | reverse %}
{% assign current_releases = "" | split: ',' %}
{% assign no_past_releases = true %}

{% for current_release_prefix in site.data.current_releases["artemis_console"] %}
    {% for release in reversed_releases %}
        {% if release.version contains current_release_prefix %}
            {% assign current_releases = current_releases | push: release.version %}
            {% break %}
        {% endif %}
    {% endfor %}
{% endfor %}

{% for release in reversed_releases %}
    {% unless current_releases contains release.version %}
{% assign no_past_releases = false %}
{% include artemis_console_release.md release=release is_current_release=false %}
<br/>
    {% endunless %}
{% endfor %}

{% if no_past_releases == true %}
At present there are no non-current releases. Please find the current release on the <a href="{{site.baseurl}}/components/artemis-console/download">download page</a>
{% endif %}
