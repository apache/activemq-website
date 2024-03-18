---
layout: default_md
title: Periodically checking disk limits 
title-class: page-title-classic
type: classic
---

[Features](features) > [Persistence](persistence) > [Periodically checking disk limits](periodically-checking-disk-limits)


Store and temporary disk limits are set for the Broker on startup based on configuration and available space. Sometimes other processes (such as logs) can grow and reduce the available disk space enough that the limits detected at start up no longer have any effect. Since ActiveMQ Classic version **5.12.0**, it's possible to configure the Broker to periodically check disk space and reconfigure the limits accordingly using the broker attribute schedulePeriodForDiskUsageCheck > 0.

For example a configuration like
```
<broker xmlns="http://activemq.apache.org/schema/core" schedulePeriodForDiskUsageCheck="60000">
  ...
</broker>
```
will check the store and temporary disk limits every 60 seconds (`schedulePeriodForDiskUsageCheck` option, default value is 0 which disables this check).

