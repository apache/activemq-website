---
layout: default_md
title: ActiveMQ Artemis Console 1.4.0 Release Notes
title-class: page-title-artemis
type: artemis
---


## Bugs Fixed

* [ARTEMIS-5548](https://issues.apache.org/jira/browse/ARTEMIS-5548) - retry button/action not showing for DLQ messages in console
* [ARTEMIS-5630](https://issues.apache.org/jira/browse/ARTEMIS-5630) - Webpack watch/hot reload does not work anymore
* [ARTEMIS-5647](https://issues.apache.org/jira/browse/ARTEMIS-5647) - Fix branding in webpack dev server
* [ARTEMIS-5658](https://issues.apache.org/jira/browse/ARTEMIS-5658) - Filter no longer fully persist between tabs
* [ARTEMIS-5660](https://issues.apache.org/jira/browse/ARTEMIS-5660) - Console status page no longer refreshes
* [ARTEMIS-5676](https://issues.apache.org/jira/browse/ARTEMIS-5676) - Reduce padding in left web console column
* [ARTEMIS-5726](https://issues.apache.org/jira/browse/ARTEMIS-5726) - Console log level should not be reset to ERROR/INFO

## Improvements

* [ARTEMIS-5424](https://issues.apache.org/jira/browse/ARTEMIS-5424) - Allow listing all items in tables
* [ARTEMIS-5629](https://issues.apache.org/jira/browse/ARTEMIS-5629) - Update table after a queue is deleted
* [ARTEMIS-5641](https://issues.apache.org/jira/browse/ARTEMIS-5641) - Separate filters and search from the ArtemisTable component
* [ARTEMIS-5667](https://issues.apache.org/jira/browse/ARTEMIS-5667) - buttons on message browsing should disable
* [ARTEMIS-5737](https://issues.apache.org/jira/browse/ARTEMIS-5737) - Duplicated jolokia calls on web console's status page

## Tasks

* [ARTEMIS-5427](https://issues.apache.org/jira/browse/ARTEMIS-5427) - Integrate Jolokia's MBeanInfo cache
* [ARTEMIS-5648](https://issues.apache.org/jira/browse/ARTEMIS-5648) - Remove deprecated HPKP http header
* [ARTEMIS-5657](https://issues.apache.org/jira/browse/ARTEMIS-5657) - Invoke all HTTP header filters in loop
* [ARTEMIS-5720](https://issues.apache.org/jira/browse/ARTEMIS-5720) - Resolve issues reported by sonarqube analysis

## Dependency Upgrades

* [ARTEMIS-5631](https://issues.apache.org/jira/browse/ARTEMIS-5631) - Update hawtio to v4.5
* [ARTEMIS-5740](https://issues.apache.org/jira/browse/ARTEMIS-5740) - Upgrade to @hawtio/react 1.11.2 and hawtio-system 4.6.1