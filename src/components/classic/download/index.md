---
layout: default_md
title: Download ActiveMQ Classic
title-class: page-title-classic
type: classic
---

These are the current ActiveMQ Classic releases. For prior releases, please see the [past releases](../documentation/download-archives) page.

It is important to [verify the integrity](#verify-the-integrity-of-downloads) of the files you download.

#### Summary Table of ActiveMQ Series Status


<table>
  <thead>
    <tr>
      <th>Series</th>
      <th>Status</th>
      <th>Latest Patch Version</th>
      <th>Date of Release</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background-color: #dff0d8;">
      <td>6.2.x</td>
      <td>In Dev</td>
      <td>-</td>
      <td></td>
    </tr>
    <tr style="background-color: #dff0d8;">
      <td>6.1.x</td>
      <td><strong>Stable - Supported</strong></td>
      <td>6.1.6</td>
      <td>Mar 10th, 2025</td>
    </tr>
    <tr style="background-color: #f0f0f0;">
      <td>6.0.x</td>
      <td><em>Deprecated</em></td>
      <td>6.0.1</td>
      <td>Dec 3rd, 2023</td>
    </tr>
    <tr style="background-color: #dff0d8;">
      <td>5.19.x</td>
      <td><strong>Stable - Supported</strong></td>
      <td>5.19.0</td>
      <td>Mar 11th, 2025</td>
    </tr>
    <tr style="background-color: #dff0d8;">
      <td>5.18.x</td>
      <td><em>Deprecated</em></td>
      <td>5.18.7</td>
      <td>Mar 19nd, 2025</td>
    </tr>
    <tr style="background-color: #f0f0f0;">
      <td>5.17.x</td>
      <td><em>Deprecated</em></td>
      <td>5.17.7</td>
      <td>Mar 20th, 2025</td>
    </tr>
    <tr style="background-color: #f0f0f0;">
      <td>5.16.x</td>
      <td><em>Deprecated</em></td>
      <td>5.16.8</td>
      <td>Mar 22nd, 2025</td>
    </tr>
    <tr style="background-color: #f0f0f0;">
      <td>5.15.x</td>
      <td><em>Deprecated</em></td>
      <td>5.15.16</td>
      <td>Oct 26th, 2023</td>
    </tr>
    <tr style="background-color: #f0f0f0;">
      <td>5.14.x</td>
      <td><em>Deprecated</em></td>
      <td>5.14.5</td>
      <td>Apr 25th, 2017</td>
    </tr>
    <tr style="background-color: #f0f0f0;">
      <td>5.13.x</td>
      <td><em>Deprecated</em></td>
      <td>5.13.5</td>
      <td>Dec 16th, 2016</td>
    </tr>
    <tr style="background-color: #f0f0f0;">
      <td>5.12.x</td>
      <td><em>Deprecated</em></td>
      <td>5.12.3</td>
      <td>Feb 3rd, 2016</td>
    </tr>
    <tr style="background-color: #f0f0f0;">
      <td>5.11.x</td>
      <td><em>Deprecated</em></td>
      <td>5.11.4</td>
      <td>Feb 3rd, 2016</td>
    </tr>
  </tbody>
</table>



##### Status Descriptions

<div style="margin-top: 15px;">
  <strong>In Dev</strong>: Actively in development with new features and improvements in progress. This version may not yet be fully stable for production environments.
</div>

<div style="margin-top: 10px;">
  <strong>Stable - Supported</strong>: Actively supported and recommended for production use. This version receives regular updates, including new features, security patches, and bug fixes.
</div>

<div style="margin-top: 10px;">
  <strong>Deprecated</strong>: Reached end-of-life and is no longer maintained. Deprecated versions do not receive updates. Not recommended for new deployments; users are encouraged to upgrade to a stable version for ongoing support.
</div>



#### Schedule & Status

| Series | Broker JMS API Support      | Client JMS API Client       | Java Version | Spring Version | Logging Support              | Web Support            | Status       | Last    | Next   | ETA     |
|--------|-----------------------------|-----------------------------|--------------|----------------|------------------------------|------------------------|--------------|---------|--------|---------|
| 6.2.x  | Jakarta JMS 2/3.1 (partial) | Jakarta JMS 2/3.1           | 17+          | 6.2.3          | Log4j 2.24.3/Slf4j 2.0.16    | Jetty 11.0.24          | In dev       |         |        | Dec  24 |
| 6.1.x  | Jakarta JMS 2/3.1 (partial) | Jakarta JMS 2/3.1           | 17+          | 6.1.16         | Log4j 2.24.3/Slf4j 2.0.16    | Jetty 11.0.24          | **Stable - Supported**   | 6.1.6   | 6.1.7  | Jun  25 |
| 6.0.x  | Jakarta JMS 2/3.1 (partial) | Jakarta JMS 2/3.1           | 17+          | 6.0.17         | Log4j 2.22.0/Slf4j 2.0.9     | Jetty 11.0.18          | _Deprecated_ | 6.0.1   |        |         |
| 5.19.x | Javax JMS 1.1               | Javax JMS 1.1/Jakarta JMS 2 | 11+          | 5.3.39         | Log4j 2.24.3/Slf4j 2.0.16    | Jetty 9.4.57.v20241219 | **Stable - Supported**   | 5.19.0  | 5.19.1 | Jun  25 |
| 5.18.x | Javax JMS 1.1               | Javax JMS 1.1/Jakarta JMS 2 | 11+          | 5.3.39         | Log4j 2.24.1/Slf4j 2.0.13    | Jetty 9.4.57.v20241219 | _Deprecated_   | 5.18.7  |         |        |
| 5.17.x | Javax JMS 1.1               | Javax JMS 1.1               | 11+          | 5.3.33         | Log4j 2.23.1/Slf4j 1.7.36    | Jetty 9.4.54.v20240208 | _Deprecated_ | 5.17.7  |        |         |
| 5.16.x | Javax JMS 1.1               | Javax JMS 1.1               | 1.8          | 4.3.30.RELEASE | Reload4j 1.2.24/Slf4j 1.7.36 | Jetty 9.4.53.v20231009 | _Deprecated_ | 5.16.8  |        |         |
| 5.15.x | Javax JMS 1.1               | Javax JMS 1.1               | 1.8          | 4.3.30.RELEASE | Log4j 1.2.17/Slf4j 1.7.32    | Jetty 9.4.39.v20210325 | _Deprecated_ | 5.15.16 |        |         |
| 5.14.x | Javax JMS 1.1               | Javax JMS 1.1               | 1.7          | 4.1.9.RELEASE  | Log4j 1.2.17/Slf4j 1.7.13    | Jetty 9.2.13.v20150730 | _Deprecated_ | 5.14.5  |        |         |
| 5.13.x | Javax JMS 1.1               | Javax JMS 1.1               | 1.7          | 4.1.9.RELEASE  | Log4j 1.2.17/Slf4j 1.7.13    | Jetty 9.2.13.v20150730 | _Deprecated_ | 5.13.5  |        |         |
| 5.12.x | Javax JMS 1.1               | Javax JMS 1.1               | 1.7          | 3.2.16.RELEASE | Log4j 1.2.17/Slf4j 1.7.10    | Jetty 9.2.6.v20141205  | _Deprecated_ | 5.12.3  |        |         |
| 5.11.x | Javax JMS 1.1               | Javax JMS 1.1               | 1.7          | 3.2.16.RELEASE | Log4j 1.2.17/Slf4j 1.7.10    | Jetty 9.2.6.v20141205  | _Deprecated_ | 5.11.4  |        |         |
| 5.10.x | Javax JMS 1.1               | Javax JMS 1.1               | 1.6          | 3.2.8.RELEASE  | Log4j 1.2.17/Slf4j 1.7.5     | Jetty 7.6.9.v20130131  | _Deprecated_ | 5.10.2  |        |         |

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
