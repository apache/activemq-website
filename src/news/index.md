---
layout: default_md
title: News 
title-class: page-title-main
type: main
---

[Home](/) > [News](/news)

{% assign documents = site.documents %}
{% assign documents = documents | sort: "release_date" | reverse %}
{% for document in documents %}
{% if document.release_date == nil or document.release_date == "" %}
{% continue %}
{% endif %}
### {{ document.title }} 
<span class="text-secondary"> {{ document.release_date | date_to_string: "ordinal", "US"}}</span>

{{document.shortDescription}}

{% if document.collection contains "artemis_console" %}
[Read More]({{site.baseurl}}/components/artemis-console/download/)
{% elsif document.collection contains "artemis" %}
[Read More]({{site.baseurl}}/components/artemis/download/)
{% elsif document.collection contains "nms_api" %}
[Read More]({{site.baseurl}}/components/nms/nms-api-downloads)
{% elsif document.collection contains "nms_amqp" %}
[Read More]({{site.baseurl}}/components/nms/providers/amqp/downloads/)
{% elsif document.collection contains "classic" %}
[Read More]({{site.baseurl}}/components/classic/download/)
{% else %}
[Read More]({{document.url}})
{% endif %}
{% endfor %}
