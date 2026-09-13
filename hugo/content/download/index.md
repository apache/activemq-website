---
title: "Download ActiveMQ"
---

These are the current ActiveMQ releases. For prior releases, please see the [past releases](../components/classic/documentation/download-archives) page.

It is important to [verify the integrity](#verify) of the files you download.

#### Summary Table of ActiveMQ Series Status

<table class="dl-table">
  <thead>
    <tr><th>Series</th><th>Status</th><th>Latest Patch Version</th><th>Date of Release</th></tr>
  </thead>
  <tbody>
    <tr class="row-stable"><td>6.2.x</td><td><strong>Stable - Supported</strong></td><td>6.2.1</td><td>Feb 18th, 2026</td></tr>
    <tr><td>6.1.x</td><td><em>Deprecated</em></td><td>6.1.8</td><td>Oct 22nd, 2025</td></tr>
    <tr><td>6.0.x</td><td><em>Deprecated</em></td><td>6.0.1</td><td>Dec 3rd, 2023</td></tr>
    <tr class="row-stable"><td>5.19.x</td><td><strong>Stable - Supported</strong></td><td>5.19.2</td><td>Feb 13th, 2026</td></tr>
    <tr><td>5.18.x</td><td><em>Deprecated</em></td><td>5.18.7</td><td>Mar 19th, 2025</td></tr>
    <tr><td>5.17.x</td><td><em>Deprecated</em></td><td>5.17.7</td><td>Mar 20th, 2025</td></tr>
    <tr><td>5.16.x</td><td><em>Deprecated</em></td><td>5.16.8</td><td>Mar 22nd, 2025</td></tr>
    <tr><td>5.15.x</td><td><em>Deprecated</em></td><td>5.15.16</td><td>Oct 26th, 2023</td></tr>
    <tr><td>5.14.x</td><td><em>Deprecated</em></td><td>5.14.5</td><td>Apr 25th, 2017</td></tr>
    <tr><td>5.13.x</td><td><em>Deprecated</em></td><td>5.13.5</td><td>Dec 16th, 2016</td></tr>
    <tr><td>5.12.x</td><td><em>Deprecated</em></td><td>5.12.3</td><td>Feb 3rd, 2016</td></tr>
    <tr><td>5.11.x</td><td><em>Deprecated</em></td><td>5.11.4</td><td>Feb 3rd, 2016</td></tr>
  </tbody>
</table>

##### Status Descriptions

**In Dev**: Actively in development. May not yet be fully stable for production.

**Stable - Supported**: Actively supported and recommended for production use. Receives regular updates, security patches, and bug fixes.

**Deprecated**: End-of-life and no longer maintained. Users are encouraged to upgrade to a stable version.

#### Schedule & Status

<div style="overflow-x:auto">

| Series | Broker JMS API | Client JMS API | Java | Spring | Logging | Web | Status | Last | Next | ETA |
|--------|---------------|----------------|------|--------|---------|-----|--------|------|------|-----|
| 6.2.x | Jakarta JMS 2/3.1 (partial) | Jakarta JMS 2/3.1 | [17,23) | 6.2.16 | Log4j 2.25.3/Slf4j 2.0.17 | Jetty 11.0.26 | **Stable** | 6.2.1 | 6.2.2 | Apr 26 |
| 6.1.x | Jakarta JMS 2/3.1 (partial) | Jakarta JMS 2/3.1 | [17,23) | 6.1.21 | Log4j 2.25.2/Slf4j 2.0.17 | Jetty 11.0.26 | _Deprecated_ | 6.1.8 | | |
| 6.0.x | Jakarta JMS 2/3.1 (partial) | Jakarta JMS 2/3.1 | [17,23) | 6.0.17 | Log4j 2.22.0/Slf4j 2.0.9 | Jetty 11.0.18 | _Deprecated_ | 6.0.1 | | |
| 5.19.x | Javax JMS 1.1 | Javax JMS 1.1/Jakarta JMS 2 | [11,23) | 5.3.39 | Log4j 2.25.3/Slf4j 2.0.17 | Jetty 9.4.58 | **Stable** | 5.19.2 | | |
| 5.18.x | Javax JMS 1.1 | Javax JMS 1.1/Jakarta JMS 2 | [11,23) | 5.3.39 | Log4j 2.24.1/Slf4j 2.0.13 | Jetty 9.4.57 | _Deprecated_ | 5.18.7 | | |
| 5.17.x | Javax JMS 1.1 | Javax JMS 1.1 | [11,23) | 5.3.33 | Log4j 2.23.1/Slf4j 1.7.36 | Jetty 9.4.54 | _Deprecated_ | 5.17.7 | | |
| 5.16.x | Javax JMS 1.1 | Javax JMS 1.1 | 1.8 | 4.3.30 | Reload4j 1.2.24/Slf4j 1.7.36 | Jetty 9.4.53 | _Deprecated_ | 5.16.8 | | |
| 5.15.x | Javax JMS 1.1 | Javax JMS 1.1 | 1.8 | 4.3.30 | Log4j 1.2.17/Slf4j 1.7.32 | Jetty 9.4.39 | _Deprecated_ | 5.15.16 | | |
| 5.14.x | Javax JMS 1.1 | Javax JMS 1.1 | 1.7 | 4.1.9 | Log4j 1.2.17/Slf4j 1.7.13 | Jetty 9.2.13 | _Deprecated_ | 5.14.5 | | |
| 5.13.x | Javax JMS 1.1 | Javax JMS 1.1 | 1.7 | 4.1.9 | Log4j 1.2.17/Slf4j 1.7.13 | Jetty 9.2.13 | _Deprecated_ | 5.13.5 | | |
| 5.12.x | Javax JMS 1.1 | Javax JMS 1.1 | 1.7 | 3.2.16 | Log4j 1.2.17/Slf4j 1.7.10 | Jetty 9.2.6 | _Deprecated_ | 5.12.3 | | |
| 5.11.x | Javax JMS 1.1 | Javax JMS 1.1 | 1.7 | 3.2.16 | Log4j 1.2.17/Slf4j 1.7.10 | Jetty 9.2.6 | _Deprecated_ | 5.11.4 | | |

</div>

#### ActiveMQ Classic 6.2.1 (Feb 18th, 2026)

[Release Notes](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12356338) | [Documentation](../components/classic/documentation) | Java: **17+**

| Platform | Package | SHA512 | Signature |
|----------|---------|--------|-----------|
| Windows | [apache-activemq-6.2.1-bin.zip](https://www.apache.org/dyn/closer.cgi?filename=/activemq/6.2.1/apache-activemq-6.2.1-bin.zip&action=download) | [SHA512](https://downloads.apache.org/activemq/6.2.1/apache-activemq-6.2.1-bin.zip.sha512) | [ASC](https://downloads.apache.org/activemq/6.2.1/apache-activemq-6.2.1-bin.zip.asc) |
| Unix/Linux | [apache-activemq-6.2.1-bin.tar.gz](https://www.apache.org/dyn/closer.cgi?filename=/activemq/6.2.1/apache-activemq-6.2.1-bin.tar.gz&action=download) | [SHA512](https://downloads.apache.org/activemq/6.2.1/apache-activemq-6.2.1-bin.tar.gz.sha512) | [ASC](https://downloads.apache.org/activemq/6.2.1/apache-activemq-6.2.1-bin.tar.gz.asc) |
| Source | [activemq-parent-6.2.1-source-release.zip](https://www.apache.org/dyn/closer.cgi?filename=/activemq/6.2.1/activemq-parent-6.2.1-source-release.zip&action=download) | [SHA512](https://downloads.apache.org/activemq/6.2.1/activemq-parent-6.2.1-source-release.zip.sha512) | [ASC](https://downloads.apache.org/activemq/6.2.1/activemq-parent-6.2.1-source-release.zip.asc) |

#### ActiveMQ Classic 5.19.2 (Feb 13th, 2026)

[Release Notes](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311210&version=12355593) | [Documentation](../components/classic/documentation) | Java: **11+**

| Platform | Package | SHA512 | Signature |
|----------|---------|--------|-----------|
| Windows | [apache-activemq-5.19.2-bin.zip](https://www.apache.org/dyn/closer.cgi?filename=/activemq/5.19.2/apache-activemq-5.19.2-bin.zip&action=download) | [SHA512](https://downloads.apache.org/activemq/5.19.2/apache-activemq-5.19.2-bin.zip.sha512) | [ASC](https://downloads.apache.org/activemq/5.19.2/apache-activemq-5.19.2-bin.zip.asc) |
| Unix/Linux | [apache-activemq-5.19.2-bin.tar.gz](https://www.apache.org/dyn/closer.cgi?filename=/activemq/5.19.2/apache-activemq-5.19.2-bin.tar.gz&action=download) | [SHA512](https://downloads.apache.org/activemq/5.19.2/apache-activemq-5.19.2-bin.tar.gz.sha512) | [ASC](https://downloads.apache.org/activemq/5.19.2/apache-activemq-5.19.2-bin.tar.gz.asc) |
| Source | [activemq-parent-5.19.2-source-release.zip](https://www.apache.org/dyn/closer.cgi?filename=/activemq/5.19.2/activemq-parent-5.19.2-source-release.zip&action=download) | [SHA512](https://downloads.apache.org/activemq/5.19.2/activemq-parent-5.19.2-source-release.zip.sha512) | [ASC](https://downloads.apache.org/activemq/5.19.2/activemq-parent-5.19.2-source-release.zip.asc) |

---

#### Verify the Integrity of Downloads {#verify}

Verify downloaded files using the PGP signature or SHA512 checksums. See the [Apache verification guide](https://www.apache.org/info/verification.html).

Download the [KEYS](https://downloads.apache.org/activemq/KEYS) file and the `.asc` signature for your download, then run:

```
gpg --import KEYS
gpg --verify apache-activemq-*.asc
```
