---
layout: default_md
---
{% assign releases = site["nms_amqp_releases"] | reverse %}
{% assign isCurrentRelease = false %}

{% for current_release in site.data.current_releases["nms_amqp"] %}
    {% for release in releases %}
        {% if release.version contains current_release %}
                    {% if release.version == page.version %}
                        {% assign isCurrentRelease = true %}
                    {% endif %}
            {% break %}
        {% endif %}
    {% endfor %}
    {% if isCurrentRelease %} {% break %} {% endif %}
{% endfor %}

{% unless isCurrentRelease %}
<div class="alert alert-warning">
  This is an older release. To get the current release, please see the <a href="{{site.baseurl}}/components/nms/providers/amqp/downloads" class="alert-link">download page</a>.
</div>
{% endunless %}

{{content}}

Download
--------

{% include nms_amqp_download_links.md release=page is_current_release=isCurrentRelease %}

Change Log
----------

For a more detailed view of new features and bug fixes, see the [release notes]({{page.release_notes}})

Verify the Integrity of Downloads
---------------------------------

{% include verify_download.md %}

