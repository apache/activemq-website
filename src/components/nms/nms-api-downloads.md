---
layout: default_md
title: NMS API Downloads 
title-class: page-title-nms
type: nms
---

This is the current NMS.API release. For prior releases, please see the <a href="nms-api-past-releases">past releases</a> page.

It is important to [verify the integrity](#verify-the-integrity-of-downloads) of the files you download.


{% assign reversed_releases = site["nms_api_releases"] | reverse %}

{% for current_release_prefix in site.data.current_releases["nms_api"] %}
    {% for release in reversed_releases %}
        {% if release.version contains current_release_prefix %}
#### NMS API {{release.version}} ({{release.release_date | date_to_string: "ordinal", "US"}})
{{ release.shortDescription }}

            {% include nms_api_download_links.md release=release is_current_release=true %}
###### Changelog

For a detailed view of new features and bug fixes, see the [Release Notes]({{ release.release_notes }})

<br/>
            {% break %}
        {% endif %}
    {% endfor %}
{% endfor %}
--------------------------------------
#### Verify the Integrity of Downloads

{% include verify_download.md %}

