---
layout: default_md
title: ActiveMQ Download
title-class: page-title-activemq5
type: activemq5
---

These are the current releases. For prior releases, please see the [past releases](../../../download-archives) page.

It is important to [verify the integrity](#verify-the-integrity-of-downloads) of the files you download.

{% assign releases = site["5x_releases"] | reverse %}

#### ActiveMQ 6.0.0 (Nov 17th, 2023) 
[Release Notes](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12352570) | [Release Page](https://activemq.apache.org/activemq-6000000-release) | [Documentation](../documentation) | Java compatibility: **17/20/21**

Windows|[apache-activemq-6.0.0-bin.zip](https://www.apache.org/dyn/closer.cgi?filename=/activemq/6.0.0/apache-activemq-6.0.0-bin.zip&action=download)|[SHA512](https://downloads.apache.org/activemq/6.0.0/apache-activemq-6.0.0-bin.zip.sha512)|[GPG Signature](https://downloads.apache.org/activemq/6.0.0/apache-activemq-6.0.0-bin.zip.asc)
Unix/Linux/Cygwin|[apache-activemq-6.0.0-bin.tar.gz](https://www.apache.org/dyn/closer.cgi?filename=/activemq/6.0.0/apache-activemq-6.0.0-bin.tar.gz&action=download)|[SHA512](https://downloads.apache.org/activemq/6.0.0/apache-activemq-6.0.0-bin.tar.gz.sha512)|[GPG Signature](https://downloads.apache.org/activemq/6.0.0/apache-activemq-6.0.0-bin.tar.gz.asc)
Source Code Distribution:|[activemq-parent-6.0.0-source-release.zip](https://www.apache.org/dyn/closer.cgi?filename=/activemq/6.0.0/activemq-parent-6.0.0-source-release.zip&action=download)|[SHA512](https://downloads.apache.org/activemq/6.0.0/activemq-parent-6.0.0-source-release.zip.sha512)|[GPG Signature](https://downloads.apache.org/activemq/6.0.0/activemq-parent-6.0.0-source-release.zip.asc)

{% for current_release in site.data.current_releases["5x"] %}
    {% for release in releases %}
        {% if release.version contains current_release %}
#### ActiveMQ {{release.version}} ({{release.release_date | date_to_string: "ordinal", "US"}})
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
