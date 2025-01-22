---
layout: default_md
title: ActiveMQ Artemis Console 1.1.0 Release Notes
title-class: page-title-artemis
type: artemis
---


## Bugs Fixed

* [ARTEMIS-5095](https://issues.apache.org/jira/browse/ARTEMIS-5095) - Resend Dialog broken
* [ARTEMIS-5131](https://issues.apache.org/jira/browse/ARTEMIS-5131) - Add A Copy message button to console
* [ARTEMIS-5160](https://issues.apache.org/jira/browse/ARTEMIS-5160) - Migrate console to PF 5 and latest hawtio
* [ARTEMIS-5185](https://issues.apache.org/jira/browse/ARTEMIS-5185) - Move from craco server to webpack server for console
* [ARTEMIS-5204](https://issues.apache.org/jira/browse/ARTEMIS-5204) - Backups not showing in console
* [ARTEMIS-5213](https://issues.apache.org/jira/browse/ARTEMIS-5213) - Selecting only "show internal addresses" in the new console never shows these addresses
* [ARTEMIS-5216](https://issues.apache.org/jira/browse/ARTEMIS-5216) - broker diagram used 'wrong'color for internal queues

## Improvements

* [ARTEMIS-5175](https://issues.apache.org/jira/browse/ARTEMIS-5175) - Fix up text in console
* [ARTEMIS-5186](https://issues.apache.org/jira/browse/ARTEMIS-5186) - UI Consistency Improvements
* [ARTEMIS-5192](https://issues.apache.org/jira/browse/ARTEMIS-5192) - Reset selected items when changing page size in web console
* [ARTEMIS-5193](https://issues.apache.org/jira/browse/ARTEMIS-5193) - Remember page size settings in web console
* [ARTEMIS-5194](https://issues.apache.org/jira/browse/ARTEMIS-5194) - Remember columns when browsing queue in web console
* [ARTEMIS-5195](https://issues.apache.org/jira/browse/ARTEMIS-5195) - Row hover color too dark
* [ARTEMIS-5197](https://issues.apache.org/jira/browse/ARTEMIS-5197) - List broker name prominently in web console
* [ARTEMIS-5198](https://issues.apache.org/jira/browse/ARTEMIS-5198) - Make the default page size configurable on the web console
* [ARTEMIS-5240](https://issues.apache.org/jira/browse/ARTEMIS-5240) - Broker Diagram options all prefix with show

## Dependency Upgrades

* [ARTEMIS-5176](https://issues.apache.org/jira/browse/ARTEMIS-5176) - Upgrade cookie to 0.7.0, micromatch to 4.0.8, rollup to 2.79.2, http-proxy-middleware to 2.0.7 and cross-spawn to 7.0.5
* [ARTEMIS-5238](https://issues.apache.org/jira/browse/ARTEMIS-5238) - upgrade nanoid to 3.3.8
* [ARTEMIS-5239](https://issues.apache.org/jira/browse/ARTEMIS-5239) - upgrade path-to-regexp to 0.1.12
* [ARTEMIS-5242](https://issues.apache.org/jira/browse/ARTEMIS-5242) - Upgrade Jolokia.js to 2.1.9