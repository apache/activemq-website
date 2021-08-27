---
layout: default_md
title: ActiveMQ 5 Download
title-class: page-title-activemq5
type: activemq5
---

These are the current releases. For prior releases, please see the [past releases](../../../download-archives) page.


{% assign releases = site["5x_releases"] | reverse %}

{% for current_release in site.data.current_releases["5x"] %}
    {% for release in releases %}
        {% if release.version contains current_release %}
#### ActiveMQ {{release.version}} ({{release.release_date}})
[Release Notes]({{ release.release_notes }}) | [Release Page]({{release.url}}) | [Documentation](../documentation)
{% if release.version contains "5.15." %}

**NOTE**: This is the last planned 5.15.x release. Users should upgrade to the current 5.16.x stream for ongoing releases.
{% endif %}

Windows|[apache-activemq-{{release.version}}-bin.zip](https://www.apache.org/dyn/closer.cgi?filename=/activemq/{{release.version}}/apache-activemq-{{release.version}}-bin.zip&action=download)|[SHA512](https://downloads.apache.org/activemq/{{release.version}}/apache-activemq-{{release.version}}-bin.zip.sha512)|[GPG Signature](https://downloads.apache.org/activemq/{{release.version}}/apache-activemq-{{release.version}}-bin.zip.asc)
Unix/Linux/Cygwin|[apache-activemq-{{release.version}}-bin.tar.gz](https://www.apache.org/dyn/closer.cgi?filename=/activemq/{{release.version}}/apache-activemq-{{release.version}}-bin.tar.gz&action=download)|[SHA512](https://downloads.apache.org/activemq/{{release.version}}/apache-activemq-{{release.version}}-bin.tar.gz.sha512)|[GPG Signature](https://downloads.apache.org/activemq/{{release.version}}/apache-activemq-{{release.version}}-bin.tar.gz.asc)
Source Code Distribution:|[activemq-parent-{{release.version}}-source-release.zip](https://www.apache.org/dyn/closer.cgi?filename=/activemq/{{release.version}}/activemq-parent-{{release.version}}-source-release.zip&action=download)|[SHA512](https://downloads.apache.org/activemq/{{release.version}}/activemq-parent-{{release.version}}-source-release.zip.sha512)|[GPG Signature](https://downloads.apache.org/activemq/{{release.version}}/activemq-parent-{{release.version}}-source-release.zip.asc)
            {% break %}
        {% endif %}
    {% endfor %}
{% endfor %}

The keys file for verifying the release can be obtained [here](https://downloads.apache.org/activemq/KEYS)
