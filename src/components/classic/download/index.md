---
layout: default_md
title: Download ActiveMQ Classic
title-class: page-title-classic
type: classic
---

These are the current ActiveMQ Classic releases. For prior releases, please see the [past releases](../documentation/download-archives) page.

It is important to [verify the integrity](#verify-the-integrity-of-downloads) of the files you download.

{% assign reversed_releases = site["classic_releases"] | reverse %}

{% for current_release_prefix in site.data.current_releases["classic"] %}
    {% for release in reversed_releases %}
        {% if release.version contains current_release_prefix %}
#### ActiveMQ Classic {{release.version}} ({{release.release_date | date_to_string: "ordinal", "US"}})
[Release Notes]({{ release.release_notes }}) | [Release Page]({{release.url}}) | [Documentation](../documentation) | Java compatibility: **{{release.java_version}}**

Windows|[apache-activemq-{{release.version}}-bin.zip](https://www.apache.org/dyn/closer.cgi?filename=/activemq/{{release.version}}/apache-activemq-{{release.version}}-bin.zip&action=download)|[SHA512](https://downloads.apache.org/activemq/{{release.version}}/apache-activemq-{{release.version}}-bin.zip.sha512)|[GPG Signature](https://downloads.apache.org/activemq/{{release.version}}/apache-activemq-{{release.version}}-bin.zip.asc)
Unix/Linux/Cygwin|[apache-activemq-{{release.version}}-bin.tar.gz](https://www.apache.org/dyn/closer.cgi?filename=/activemq/{{release.version}}/apache-activemq-{{release.version}}-bin.tar.gz&action=download)|[SHA512](https://downloads.apache.org/activemq/{{release.version}}/apache-activemq-{{release.version}}-bin.tar.gz.sha512)|[GPG Signature](https://downloads.apache.org/activemq/{{release.version}}/apache-activemq-{{release.version}}-bin.tar.gz.asc)
Source Code Distribution:|[activemq-parent-{{release.version}}-source-release.zip](https://www.apache.org/dyn/closer.cgi?filename=/activemq/{{release.version}}/activemq-parent-{{release.version}}-source-release.zip&action=download)|[SHA512](https://downloads.apache.org/activemq/{{release.version}}/activemq-parent-{{release.version}}-source-release.zip.sha512)|[GPG Signature](https://downloads.apache.org/activemq/{{release.version}}/activemq-parent-{{release.version}}-source-release.zip.asc)
            {% break %}
        {% endif %}
    {% endfor %}
{% endfor %}

<br/>

--------------------------------------
#### Verify the Integrity of Downloads

{% include verify_download.md %}
