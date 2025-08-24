---
layout: nms_amqp_release
version: 2.4.0
release_date: 2025-08-24
release_notes: https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12311201&version=12356027
title: Apache.NMS.AMQP 2.4.0 Release
# The shortDescription is used on front page news entry and news feed pages
shortDescription: New acknowledgment customization for expired messages, client-side redelivery delay, and security fix for binary serialization.
---

Apache NMS.AMQP {{ page.version }} was released on {{ page.release_date | date_to_string: "ordinal", "US" }}.  
For details of the changes see the [release notes]({{ page.release_notes }}).

## Highlights of this release

### New Features

- **Custom acknowledgment for expired messages**: Introduced an option in `IRedeliveryPolicy` to control acknowledgment behavior for expired messages ([AMQNET-846](https://issues.apache.org/jira/browse/AMQNET-846)).
- **Client-side redelivery delay**: Added support for configurable redelivery delays based on the number of redelivery attempts ([AMQNET-847](https://issues.apache.org/jira/browse/AMQNET-847)).

### Bug Fixes

- **Serialization security**: Fixed an issue where allow and deny lists of types for binary serialization could be circumvented ([AMQNET-849](https://issues.apache.org/jira/browse/AMQNET-849)).