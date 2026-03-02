---
title: NMS API Downloads
layout: nms-download
---

This is the current NMS API release. It is important to verify the integrity of the files you download.

#### NMS API 2.2.0 (Jul 5th, 2025)

Adds configurable acknowledgment handling for expired messages via IRedeliveryPolicy.

| | Package | SHA512 | Signature |
|---|---|---|---|
|Source|[Apache.NMS-2.2.0-src.zip](https://www.apache.org/dyn/closer.lua?filename=/activemq/apache-nms-api/2.2.0/Apache.NMS-2.2.0-src.zip&action=download)|[SHA512](https://downloads.apache.org/activemq/apache-nms-api/2.2.0/Apache.NMS-2.2.0-src.zip.sha512)|[ASC](https://downloads.apache.org/activemq/apache-nms-api/2.2.0/Apache.NMS-2.2.0-src.zip.asc)|
|Binary|[Apache.NMS-2.2.0-bin.zip](https://www.apache.org/dyn/closer.lua?filename=/activemq/apache-nms-api/2.2.0/Apache.NMS-2.2.0-bin.zip&action=download)|[SHA512](https://downloads.apache.org/activemq/apache-nms-api/2.2.0/Apache.NMS-2.2.0-bin.zip.sha512)|[ASC](https://downloads.apache.org/activemq/apache-nms-api/2.2.0/Apache.NMS-2.2.0-bin.zip.asc)|
|NuGet|[Apache.NMS.2.2.0.nupkg](https://www.apache.org/dyn/closer.lua?filename=/activemq/apache-nms-api/2.2.0/Apache.NMS.2.2.0.nupkg&action=download)|[SHA512](https://downloads.apache.org/activemq/apache-nms-api/2.2.0/Apache.NMS.2.2.0.nupkg.sha512)|[ASC](https://downloads.apache.org/activemq/apache-nms-api/2.2.0/Apache.NMS.2.2.0.nupkg.asc)|
|Docs|[Apache.NMS-2.2.0-docs.zip](https://www.apache.org/dyn/closer.lua?filename=/activemq/apache-nms-api/2.2.0/Apache.NMS-2.2.0-docs.zip&action=download)|[SHA512](https://downloads.apache.org/activemq/apache-nms-api/2.2.0/Apache.NMS-2.2.0-docs.zip.sha512)|[ASC](https://downloads.apache.org/activemq/apache-nms-api/2.2.0/Apache.NMS-2.2.0-docs.zip.asc)|

[Release Notes](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311201&version=12351670)

---

#### Verify the Integrity of Downloads

Verify downloaded files using the PGP signature or SHA512 checksums. See the [Apache verification guide](https://www.apache.org/info/verification.html).

Download the [KEYS](https://downloads.apache.org/activemq/KEYS) file and the `.asc` signature for your download, then run:

```
gpg --import KEYS
gpg --verify Apache.NMS-*.asc
```
