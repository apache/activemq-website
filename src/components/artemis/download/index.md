---
layout: default_md
title: Download ActiveMQ Artemis
title-class: page-title-artemis
type: artemis
---

This is the current ActiveMQ Artemis release. For prior releases, please see the <a href="past_releases">past releases</a> page.

The keys file for verifying these releases can be obtained <a href="https://downloads.apache.org/activemq/KEYS">here</a>.

{% assign reversed_releases = site["artemis_releases"] | reverse %}

{% for current_release_prefix in site.data.current_releases["artemis"] %}
    {% for release in reversed_releases %}
        {% if release.version contains current_release_prefix %}
            {% include artemis_release.md release=release %}
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
