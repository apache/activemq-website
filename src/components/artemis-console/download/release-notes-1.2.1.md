---
layout: default_md
title: ActiveMQ Artemis Console 1.2.1 Release Notes
title-class: page-title-artemis
type: artemis
---


## Bugs Fixed

* [ARTEMIS-5217](https://issues.apache.org/jira/browse/ARTEMIS-5217) - "yarn start" does not work
* [ARTEMIS-5307](https://issues.apache.org/jira/browse/ARTEMIS-5307) - Attributes/Operations close does not work
* [ARTEMIS-5311](https://issues.apache.org/jira/browse/ARTEMIS-5311) - Page gets skewed when per page is changed
* [ARTEMIS-5408](https://issues.apache.org/jira/browse/ARTEMIS-5408) - Search by "name" field and search using "contains" instead of "equals" by default.
* [ARTEMIS-5419](https://issues.apache.org/jira/browse/ARTEMIS-5419) - wide tables dont fit into pane and no scroll bar is added
* [ARTEMIS-5433](https://issues.apache.org/jira/browse/ARTEMIS-5433) - Filter ignored for queues created via web console
* [ARTEMIS-5440](https://issues.apache.org/jira/browse/ARTEMIS-5440) - New Artemis Management Console not working under custom context path
* [ARTEMIS-5449](https://issues.apache.org/jira/browse/ARTEMIS-5449) - Console searches should reset page in tables
* [ARTEMIS-5510](https://issues.apache.org/jira/browse/ARTEMIS-5510) - Add scrollbar to tree

## New Features

* [ARTEMIS-5490](https://issues.apache.org/jira/browse/ARTEMIS-5490) - Adds the version to the About Box of any hawtio client containing the plugin

## Improvements

* [ARTEMIS-5196](https://issues.apache.org/jira/browse/ARTEMIS-5196) - Decrease web console table row height
* [ARTEMIS-5361](https://issues.apache.org/jira/browse/ARTEMIS-5361) - fix the broker diagram to use only css
* [ARTEMIS-5362](https://issues.apache.org/jira/browse/ARTEMIS-5362) - Manage Columns tab doesnt allow unselect all
* [ARTEMIS-5367](https://issues.apache.org/jira/browse/ARTEMIS-5367) - broker Diagram can only handle so many addresses
* [ARTEMIS-5389](https://issues.apache.org/jira/browse/ARTEMIS-5389) - Pressing &lt;enter&gt; in search text box should execute search
* [ARTEMIS-5391](https://issues.apache.org/jira/browse/ARTEMIS-5391) - Remember sorting values for each tab
* [ARTEMIS-5392](https://issues.apache.org/jira/browse/ARTEMIS-5392) - Only display visible columns for sorting &amp; searching
* [ARTEMIS-5393](https://issues.apache.org/jira/browse/ARTEMIS-5393) - Provide meaningful feedback w/invalid filter when browsing messages
* [ARTEMIS-5394](https://issues.apache.org/jira/browse/ARTEMIS-5394) - Use "Filter" instead of "Search" when browsing messages
* [ARTEMIS-5395](https://issues.apache.org/jira/browse/ARTEMIS-5395) - Provide documentation for filtering when browsing messages
* [ARTEMIS-5396](https://issues.apache.org/jira/browse/ARTEMIS-5396) - Don't display internal ID by default
* [ARTEMIS-5407](https://issues.apache.org/jira/browse/ARTEMIS-5407) -  Search and sorting options should be remembered at least for the duration of the web session.
* [ARTEMIS-5410](https://issues.apache.org/jira/browse/ARTEMIS-5410) - Sorting by clicking on the column name would be nice.
* [ARTEMIS-5416](https://issues.apache.org/jira/browse/ARTEMIS-5416) -  The "Broker: ..." text takes up vertical space. If it really must be there, then maybe the header bar would be a good place to put it.
* [ARTEMIS-5425](https://issues.apache.org/jira/browse/ARTEMIS-5425) - Compile console with java 17
* [ARTEMIS-5432](https://issues.apache.org/jira/browse/ARTEMIS-5432) - Change console log level to ERROR for production environment
* [ARTEMIS-5435](https://issues.apache.org/jira/browse/ARTEMIS-5435) - Clicking outside of sort dropdown menus should close them
* [ARTEMIS-5447](https://issues.apache.org/jira/browse/ARTEMIS-5447) - Split JavaScript activemq-artemis-extension into a reusable library and an app
* [ARTEMIS-5459](https://issues.apache.org/jira/browse/ARTEMIS-5459) - Browse messages by clicking on a queue name
* [ARTEMIS-5471](https://issues.apache.org/jira/browse/ARTEMIS-5471) - Simplify base URL logic
* [ARTEMIS-5472](https://issues.apache.org/jira/browse/ARTEMIS-5472) - Update webpack config
* [ARTEMIS-5473](https://issues.apache.org/jira/browse/ARTEMIS-5473) - Add webpack maxAsset and maxEntrypoint size config
* [ARTEMIS-5474](https://issues.apache.org/jira/browse/ARTEMIS-5474) - RAT exclusions cleanup
* [ARTEMIS-5475](https://issues.apache.org/jira/browse/ARTEMIS-5475) - Cache Maven dependencies
* [ARTEMIS-5511](https://issues.apache.org/jira/browse/ARTEMIS-5511) - Improve rendering logic
* [ARTEMIS-5515](https://issues.apache.org/jira/browse/ARTEMIS-5515) - Expose persisted status of queue's paused attribute on the web console
* [ARTEMIS-5516](https://issues.apache.org/jira/browse/ARTEMIS-5516) - Add attributes to web console addresses tab

## Tasks

* [ARTEMIS-5450](https://issues.apache.org/jira/browse/ARTEMIS-5450) - Fix issues with favicon
* [ARTEMIS-5451](https://issues.apache.org/jira/browse/ARTEMIS-5451) - Compress images and remove unused ones

## Dependency Upgrades

* [ARTEMIS-5343](https://issues.apache.org/jira/browse/ARTEMIS-5343) - Upgrade serialize-javascript to 6.0.2
* [ARTEMIS-5344](https://issues.apache.org/jira/browse/ARTEMIS-5344) - upgrade axios to 1.8.2
* [ARTEMIS-5442](https://issues.apache.org/jira/browse/ARTEMIS-5442) - Upgrade caniuse-lite
* [ARTEMIS-5495](https://issues.apache.org/jira/browse/ARTEMIS-5495) - Bump HawtIO version
* [ARTEMIS-5544](https://issues.apache.org/jira/browse/ARTEMIS-5544) - Upgrade webpack-dev-server to ^5.2.1
* [ARTEMIS-5545](https://issues.apache.org/jira/browse/ARTEMIS-5545) - http-proxy-middleware to 2.0.9
* [ARTEMIS-5547](https://issues.apache.org/jira/browse/ARTEMIS-5547) -  upgrade @babel/runtime to 7.26.10