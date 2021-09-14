---
layout: default_md
title: Apache.NMS.AMQP Past Releases
title-class: page-title-nms
type: nms
---

<div class="alert alert-warning">
  These are older releases. To get the current release, please see the <a href="{{site.baseurl}}/components/nms/providers/amqp/downloads" class="alert-link">download page</a>.
</div>

For any releases not shown here, check the [archive](https://archive.apache.org/dist/activemq/apache-nms-amqp/).

It is important to [verify the integrity]({{site.baseurl}}/components/nms/providers/amqp/downloads#verify-the-integrity-of-downloads) of the files you download.

{% assign reversed_releases = site["nms_amqp_releases"] | reverse %}
{% assign current_releases = "" | split: ',' %}

{% for current_release_prefix in site.data.current_releases["nms_amqp"] %}
    {% for release in reversed_releases %}
        {% if release.version contains current_release_prefix %}
            {% assign current_releases = current_releases | push: release.version %}
            {% break %}
        {% endif %}
    {% endfor %}
{% endfor %}

{% for release in reversed_releases %}
    {% unless current_releases contains release.version %}
#### NMS AMQP {{release.version}} ({{release.release_date | date_to_string: "ordinal", "US"}})
[Release Notes]({{ release.release_notes }}) | [Release Page]({{release.url}})

{% include nms_amqp_download_links.md release=release %}

<br/>
    {% endunless %}
{% endfor %}
