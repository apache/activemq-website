---
layout: default_md
title: ActiveMQ Artemis 2.20.0 Release Notes
title-class: page-title-artemis
type: artemis
---

A complete list of JIRAs for the 2.20.0 release can be found  * [here](https://issues.apache.org/jira/secure/ReleaseNote.jspa?version=12350581&styleName=Html&projectId=12315920&Create=Create&atl_token=A5KQ-2QAV-T4JA-FDED_b2248fcb49e268ed7f1613cb3f74bf39daae3fab_lin)

A list of commits can be found  * [here](commit-report-2.20.0).

**Note**: This release requires use of Java 11 or above.

# Known issues:

 * [ARTEMIS-3616](https://issues.apache.org/jira/browse/ARTEMIS-3616) - Epoll not loading correctly.

Right after the release of 2.20.0 we discovered that epoll from Netty is not loading correctly which may affect performance for high throughput use cases. 
The work around is simple and it is described on on [ARTEMIS-3616](https://issues.apache.org/jira/browse/ARTEMIS-3616)


# Bug
 * [ARTEMIS-2293] - addPacket method in the org.apache.activemq.artemis.core.client.impl.LargeMessageControllerImpl doesn't notify threads in case of an Exception
 * [ARTEMIS-2922] - artemis-cli consumer on large message results in a ClassCastException
 * [ARTEMIS-3021] - OOM due to wrong CORE clustered message memory estimation
 * [ARTEMIS-3115] - Incorrect default call-failover-timeout on clusterConnection in broker.xml
 * [ARTEMIS-3140] - Support com.sun.jndi.ldap.tls.cbtype in LDAPLoginModule
 * [ARTEMIS-3308] - Federated queue will not move large messages
 * [ARTEMIS-3342] - large AMQP messages are not shown as such in GUI
 * [ARTEMIS-3363] - using parameter minLargeMessage on cluster connections results in stack traces
 * [ARTEMIS-3433] - AMQ224068 on stop due to No OpenSSLContextFactory registered
 * [ARTEMIS-3461] - Browse Queue fails when the queue contains AMQP highly structured messages
 * [ARTEMIS-3495] - Backup cluster controller connection loop after failover
 * [ARTEMIS-3496] - Replica connection to its live should fail fast
 * [ARTEMIS-3529] - Expire move should not reject duplicates from duplicateID
 * [ARTEMIS-3530] - Space in role list breaks user listing
 * [ARTEMIS-3535] - management-message-attribute-size-limit = -1 does not unlimit
 * [ARTEMIS-3541] - destroyQueue ignoring autoDeleteAddress flag
 * [ARTEMIS-3543] - Artemis client doesn't support encrypted passwords in composite urls
 * [ARTEMIS-3546] - ClassNotFoundException: javax.json.JsonValue when creating an ActiveMQConnectionFactory using artemis-jakarta-client-all
 * [ARTEMIS-3552] - NullPointerException on message expiration
 * [ARTEMIS-3553] - Expiry Fields AMQP Large Message are not translated on AmqpToCore conversion
 * [ARTEMIS-3554] - Prepared Transaction with Invalid Data may prevent a server start
 * [ARTEMIS-3555] - Invalid Journal Update Record could break compacting
 * [ARTEMIS-3566] - Stomp Embedded Interceptor Example throws NPE
 * [ARTEMIS-3567] - IllegalStateException on web console logout
 * [ARTEMIS-3568] - fixes/improvements on the "Send message" screens
 * [ARTEMIS-3571] - pluralization not always correct
 * [ARTEMIS-3575] - Wrong address size estimation on broker restart
 * [ARTEMIS-3576] - Fix toString methods throwing exceptions
 * [ARTEMIS-3577] - Save Core msg re-encoding due to msg copy
 * [ARTEMIS-3586] - ActiveMQActivationSpec equals method has switched singleConnection and useJNDI null pointer verification
 * [ARTEMIS-3587] - After upgrade: AMQ224107: The Critical Analyzer detected slow paths on the broker.
 * [ARTEMIS-3593] - OOM error on rogue message to Artemis Broker
 * [ARTEMIS-3596] - ServiceLoader.load causing issues in OSGi enviroments.
 * [ARTEMIS-3604] - Async sends could overflow server with messages in openwire

# New Feature
 * [ARTEMIS-2097] - Pause and Block Producers

# Improvement
 * [ARTEMIS-649] - Improve or deprecate the HTML based JMX reports.
 * [ARTEMIS-1925] - Allow message redistribution even with OFF message-load-balancing semantics
 * [ARTEMIS-3523] - Expose replay through AddressControl
 * [ARTEMIS-3525] - Empty Auto created queues should be removed right away
 * [ARTEMIS-3528] - Only enable JVM debug options for 'run' command
 * [ARTEMIS-3531] - adding documentation for management-message-attribute-size-limit
 * [ARTEMIS-3533] - Have federation configuration respect extra url parameters from the connector-ref
 * [ARTEMIS-3539] - Allow a shared single connection in the Resource Adaptor
 * [ARTEMIS-3542] - Avoid requesting the root attribute when binding a user to LDAP
 * [ARTEMIS-3547] - client load balance code can be improved
 * [ARTEMIS-3556] - Artemis console should show the message protocol
 * [ARTEMIS-3569] - Broker balancer based on authenticated user role assignment
 * [ARTEMIS-3570] - additional decoding of some known message header fields
 * [ARTEMIS-3574] - Allow multiple bindings for embedded webserver
 * [ARTEMIS-3578] - Save SimpleString duplication and long[] allocation while moving Core messages
 * [ARTEMIS-3581] - Allow setMaxSizeBytes(0) to indicate an address that will always page
 * [ARTEMIS-3594] - Broker balancer - allow a key transformer for a local-target-filter
 * [ARTEMIS-3595] - PrintData options to help with visualization
 * [ARTEMIS-3599] - Remove finalize() usage
 * [ARTEMIS-3601] - Expose acceptors via management


# Test
 * [ARTEMIS-3489] - JdbcLeaseLockTest fails sporadically in CI
 * [ARTEMIS-3600] - Add console index page test

# Task
 * [ARTEMIS-3420] - Target Java 11+ , i.e. drop support for Java 8
 * [ARTEMIS-3538] - Removing // --------- comments from the codebase
 * [ARTEMIS-3565] - Remove mvnw


# Dependency upgrade
 * [ARTEMIS-3537] - update to proton-j 0.33.10
 * [ARTEMIS-3559] - Update netty version to 4.1.72.Final
 * [ARTEMIS-3564] - update to Qpid JMS 1.3.0
 * [ARTEMIS-3605] - Upgrade jetty version to 9.4.44.v20210927
