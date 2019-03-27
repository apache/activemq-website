Apache ActiveMQ ™ -- 5.9 Migration Guide 

[Overview](overview.md) > [Download](OverviewOverview/Overview/download.md) > [ActiveMQ 5.9.0 Release](Overview/DownloadOverview/Download/Overview/Download/activemq-590-release.md) > [5.9 Migration Guide](Overview/Download/ActiveMQ 5.9.0 ReleaseOverview/Download/ActiveMQ 5.9.0 Release/Overview/Download/ActiveMQ 5.9.0 Release/59-migration-guide.md)


There are some changes in 5.9 that may require user intervention

1.  Schema change to JDBC Persistence Adapter. XID column type change.

*   If you use XA transactions you need to ensure there are no XA transactions pending completion before you upgrade. Some mode detail in [AMQ-4628](https://issues.apache.org/jira/browse/AMQ-4628)

