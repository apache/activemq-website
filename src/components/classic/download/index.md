---
layout: default_md
title: ActiveMQ 5 Download
title-class: page-title-activemq5
type: activemq5
---

These are the current releases. For prior releases, please see the [past releases](../../../download-archives) page.


{% assign releases = site["5x_releases"] | reverse %}

{% for current_release in site.current_5x_releases %}
    {% for release in releases %}
        {% if release.version contains current_release %}
#### ActiveMQ {{release.version}} ({{release.release_date}})
[Release Notes]({{ release.release_notes }}) | [Release Page]({{release.url}}) | [Documentation](../documentation)

Windows|[apache-activemq-{{release.version}}-bin.zip](http://www.apache.org/dyn/closer.cgi?filename=/activemq/{{release.version}}/apache-activemq-{{release.version}}-bin.zip&action=download)|[SHA512](https://www.apache.org/dist/activemq/{{release.version}}/apache-activemq-{{release.version}}-bin.zip.sha512)|[GPG Signature](https://www.apache.org/dist/activemq/{{release.version}}/apache-activemq-{{release.version}}-bin.zip.asc)
Unix/Linux/Cygwin|[apache-activemq-{{release.version}}-bin.tar.gz](http://www.apache.org/dyn/closer.cgi?filename=/activemq/{{release.version}}/apache-activemq-{{release.version}}-bin.tar.gz&action=download)|[SHA512](https://www.apache.org/dist/activemq/{{release.version}}/apache-activemq-{{release.version}}-bin.tar.gz.sha512)|[GPG Signature](https://www.apache.org/dist/activemq/{{release.version}}/apache-activemq-{{release.version}}-bin.tar.gz.asc)
Source Code Distribution:|[activemq-parent-{{release.version}}-source-release.zip](http://www.apache.org/dyn/closer.cgi?filename=/activemq/{{release.version}}/activemq-parent-{{release.version}}-source-release.zip&action=download)|[SHA512](https://www.apache.org/dist/activemq/{{release.version}}/activemq-parent-{{release.version}}-source-release.zip.sha512)|[GPG Signature](https://www.apache.org/dist/activemq/{{release.version}}/activemq-parent-{{release.version}}-source-release.zip.asc)
            {% break %}
        {% endif %}
    {% endfor %}
{% endfor %}

The keys file for verifying the release can be obtained [here](https://www.apache.org/dist/activemq/KEYS)
