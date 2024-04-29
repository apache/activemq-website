---
layout: default_md
title: Download ActiveMQ Classic
title-class: page-title-classic
type: classic
---

These are the current ActiveMQ Classic releases. For prior releases, please see the [past releases](../documentation/download-archives) page.

It is important to [verify the integrity](#verify-the-integrity-of-downloads) of the files you download.

#### Schedule & Status

| Series | Broker JMS API Support      | Client JMS API Client       | Java Version | Spring Version | Logging Support              | Web Support            | Status       | Last    | Next   | ETA     |
|--------|-----------------------------|-----------------------------|--------------|----------------|------------------------------|------------------------|--------------|---------|--------|---------|
| 6.2.x  | Jakarta JMS 2/3.1 (partial) | Jakarta JMS 2/3.1           | 17+          | 6.1.5          | Log4j 2.23.1/Slf4j 2.0.12    | Jetty 11.0.20          | In dev       |         |        | July 24 |
| 6.1.x  | Jakarta JMS 2/3.1 (partial) | Jakarta JMS 2/3.1           | 17+          | 6.1.5          | Log4j 2.23.1/Slf4j 2.0.12    | Jetty 11.0.20          | **Stable**   | 6.1.2   | 6.1.3  | June 24 |
| 6.0.x  | Jakarta JMS 2/3.1 (partial) | Jakarta JMS 2/3.1           | 17+          | 6.0.17         | Log4j 2.22.0/Slf4j 2.0.9     | Jetty 11.0.18          | _Not Active_ | 6.0.1   |        |         |
| 5.18.x | Javax JMS 1.1               | Javax JMS 1.1/Jakarta JMS 2 | 11+          | 5.3.33         | Log4j 2.23.1/Slf4j 2.0.12    | Jetty 9.4.54.v20240208 | **Stable**   | 5.18.4  | 5.18.5 | June 24 |
| 5.17.x | Javax JMS 1.1               | Javax JMS 1.1               | 11+          | 5.3.30         | Log4j 2.20.0/Slf4j 1.7.36    | Jetty 9.4.53.v20231009 | _Not Active_ | 5.17.6  |        |         |
| 5.16.x | Javax JMS 1.1               | Javax JMS 1.1               | 1.8          | 4.3.30.RELEASE | Reload4j 1.2.24/Slf4j 1.7.26 | Jetty 9.4.50.v20221201 | _Not Active_ | 5.16.7  |        |         |
| 5.15.x | Javax JMS 1.1               | Javax JMS 1.1               | 1.8          | 4.3.30.RELEASE | Log4j 1.2.17/Slf4j 1.7.32    | Jetty 9.4.39.v20210325 | _Not Active_ | 5.15.16 |        |         |
| 5.14.x | Javax JMS 1.1               | Javax JMS 1.1               | 1.7          | 4.1.9.RELEASE  | Log4j 1.2.17/Slf4j 1.7.13    | Jetty 9.2.13.v20150730 | _Not Active_ | 5.14.5  |        |         |
| 5.13.x | Javax JMS 1.1               | Javax JMS 1.1               | 1.7          | 4.1.9.RELEASE  | Log4j 1.2.17/Slf4j 1.7.13    | Jetty 9.2.13.v20150730 | _Not Active_ | 5.13.5  |        |         |
| 5.12.x | Javax JMS 1.1               | Javax JMS 1.1               | 1.7          | 3.2.16.RELEASE | Log4j 1.2.17/Slf4j 1.7.10    | Jetty 9.2.6.v20141205  | _Not Active_ | 5.12.3  |        |         |
| 5.11.x | Javax JMS 1.1               | Javax JMS 1.1               | 1.7          | 3.2.16.RELEASE | Log4j 1.2.17/Slf4j 1.7.10    | Jetty 9.2.6.v20141205  | _Not Active_ | 5.11.4  |        |         |
| 5.10.x | Javax JMS 1.1               | Javax JMS 1.1               | 1.6          | 3.2.8.RELEASE  | Log4j 1.2.17/Slf4j 1.7.5     | Jetty 7.6.9.v20130131  | _Not Active_ | 5.10.2  |        |         |

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
