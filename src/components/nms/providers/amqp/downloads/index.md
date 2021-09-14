---
layout: default_md
title: Apache.NMS.AMQP Downloads 
title-class: page-title-nms
type: nms
---

This is the current NMS.AMQP release. For prior releases, please see the <a href="past_releases">past releases</a> page.

It is important to [verify the integrity](#verify-the-integrity-of-downloads) of the files you download.

{% assign reversed_releases = site["nms_amqp_releases"] | reverse %}

{% for current_release_prefix in site.data.current_releases["nms_amqp"] %}
    {% for release in reversed_releases %}
        {% if release.version contains current_release_prefix %}
#### NMS AMQP {{release.version}} ({{release.release_date | date_to_string: "ordinal", "US"}})
[Release Notes]({{ release.release_notes }}) | [Release Page]({{release.url}})

            {% include nms_amqp_download_links.md release=release is_current_release=true %}
            {% break %}
        {% endif %}
    {% endfor %}
{% endfor %}

<br/>

--------------------------------------
#### Verify the Integrity of Downloads

{% include verify_download.md %}
