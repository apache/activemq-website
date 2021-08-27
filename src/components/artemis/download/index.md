---
layout: default_md
title: Download ActiveMQ Artemis
title-class: page-title-artemis
type: artemis
---

This is the current ActiveMQ Artemis release. For prior releases, please see the <a href="past_releases">past releases</a> page.

The keys file for verifying these releases can be obtained <a href="https://downloads.apache.org/activemq/KEYS">here</a>.

{% assign reversed_releases = site["artemis_releases"] | reverse %}

{% for current_release_prefix in site.current_artemis_releases %}
    {% for release in reversed_releases %}
        {% if release.version contains current_release_prefix %}
#### ActiveMQ Artemis {{release.version}}  ({{release.release_date | date_to_string: "ordinal", "US"}})
[Release Notes](release-notes-{{release.version}}) | [Git Report](commit-report-{{release.version}}) | [Documentation](../documentation/latest)

tar.gz:|[apache-artemis-{{release.version}}-bin.tar.gz](https://www.apache.org/dyn/closer.cgi?filename=activemq/activemq-artemis/{{release.version}}/apache-artemis-{{release.version}}-bin.tar.gz&action=download)|[SHA512](https://downloads.apache.org/activemq/activemq-artemis/{{release.version}}/apache-artemis-{{release.version}}-bin.tar.gz.sha512)|[GPG Signature](https://downloads.apache.org/activemq/activemq-artemis/{{release.version}}/apache-artemis-{{release.version}}-bin.tar.gz.asc)
ZIP:|[apache-artemis-{{release.version}}-bin.zip](https://www.apache.org/dyn/closer.cgi?filename=activemq/activemq-artemis/{{release.version}}/apache-artemis-{{release.version}}-bin.zip&action=download)|[SHA512](https://downloads.apache.org/activemq/activemq-artemis/{{release.version}}/apache-artemis-{{release.version}}-bin.zip.sha512)|[GPG Signature](https://downloads.apache.org/activemq/activemq-artemis/{{release.version}}/apache-artemis-{{release.version}}-bin.zip.asc)
Source Distribution:|[apache-artemis-{{release.version}}-source-release.tar.gz](https://www.apache.org/dyn/closer.cgi?filename=activemq/activemq-artemis/{{release.version}}/apache-artemis-{{release.version}}-source-release.tar.gz&action=download)|[SHA512](https://downloads.apache.org/activemq/activemq-artemis/{{release.version}}/apache-artemis-{{release.version}}-source-release.tar.gz.sha512)|[GPG Signature](https://downloads.apache.org/activemq/activemq-artemis/{{release.version}}/apache-artemis-{{release.version}}-source-release.tar.gz.asc)|
            {% break %}
        {% endif %}
    {% endfor %}
{% endfor %}

<br/>


This is the current release of ActiveMQ Artemis Native, which is a sub component used within the broker. For prior releases, please see the <a href="past_native_releases">past native releases</a> page.

#### ActiveMQ Artemis Native Layer 1.0.2  (June  22, 2020)

[Release Notes](release-notes-native-1.0.2)

Source Distribution:|[apache-artemis-native-1.0.2-source-release.zip](https://www.apache.org/dyn/closer.cgi?filename=activemq/activemq-artemis-native/1.0.2/activemq-artemis-native-1.0.2-source-release.zip&action=download)|[SHA512](https://downloads.apache.org/activemq/activemq-artemis-native/1.0.2/activemq-artemis-native-1.0.2-source-release.zip.sha512)|[GPG Signature](https://downloads.apache.org/activemq/activemq-artemis-native/1.0.2/activemq-artemis-native-1.0.2-source-release.zip.asc)|

This is the native layer used by ActiveMQ Artemis for storage. The broker binary archives above already include a pre-compiled version of this component.
