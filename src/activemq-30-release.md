---
layout: default_md
title: ActiveMQ 3.0 Release 
title-class: page-title-activemq5
type: activemq5
---

[Overview](overview) > [Download](download) > [ActiveMQ 3.0 Release](activemq-30-release)

New and Noteworthy
------------------

This new release includes the following

*   a new 'discovery' transport [protocol](FeaturesFeatures/Features/uri-Connectivity/protocols) for a pure client-only peer network - a self discovering cluster which automatically finds the brokers available on the network (as opposed to the 'peer' protocol which is a complete peer based JMS network).
*   migrated from the org.activemq to org.activemq package name hierarchy
*   improved support for more JDBC databases for persistence
*   an optimised wire protocol (which is unfortunately not compatible with 2.x)
*   more test cases and fixes of the [JCA Container](jca-container)
*   various performance enhancements and bug fixes