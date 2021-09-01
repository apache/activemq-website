---
layout: default_md
title: New Features in 5.17 (Work in Progress)
title-class: page-title-activemq5
type: activemq5
---

[Features](/features) > [New Features](/new-features) > [New Features in 5.17](components/classic/releases/new-features-in-517)

__*This release is still a work in progress.*__

New Features in 5.17
----------------------

*   Spring 5 Support (AMQ-8026)[https://issues.apache.org/jira/browse/AMQ-8026]
*   Partial JMS 2.0 implementations [AMQ-7309](https://issues.apache.org/jira/browse/AMQ-7309)
    *    Only a high-level spec implementation is included. Most operations that rely on server-side implementation will throw an [`UnsupportedOperationException`](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/UnsupportedOperationException.html)
    *    For further details and to track JMS 2.0 implementation progress, visit [JMS 2.0 Support](jms2)

Removed Features in 5.17
----------------------

*   LevelDB was removed [AMQ-7502](https://issues.apache.org/jira/browse/AMQ-7502)

Planned Features in 5.17
----------------------

*   Move towards inclusive terminology [AMQ-7514](https://issues.apache.org/jira/browse/AMQ-7514)
*   Migration to Log4j2 [AMQ-7426](https://issues.apache.org/jira/browse/AMQ-7426)
*   Upgrade to JUnit 5 [AMQ-8082](https://issues.apache.org/jira/browse/AMQ-8082)

## Upgrading

While 5.17 has some significant changes, upgrading should not be a big task provided you are not using the deprecated LevelDB store.

## Configuration

### Additions

_none yet_

### Removals
      
| Config parameter | XML element/section | Jira | Notes
|-------|-------|-------|-------|
| `levelDB` | `<persistenceAdapter> <levelDB>` | [AMQ-7502](https://issues.apache.org/jira/browse/AMQ-7502) | Removed LevelDB persistence apdapter
| `passiveSlave` | `<broker>` | [AMQ-8316](https://issues.apache.org/jira/browse/AMQ-8316) | Unused field from deprecated LevelDB replication
| `waitForSlave` | `<broker>` | [AMQ-8316](https://issues.apache.org/jira/browse/AMQ-8316) | Unused field from deprecated LevelDB replication
| `waitForSlaveTimeout` | `<broker>` | [AMQ-8316](https://issues.apache.org/jira/browse/AMQ-8316) | Unused field from deprecated LevelDB replication

