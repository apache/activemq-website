---
layout: default_md
title: ActiveMQ Artemis 2.17.0 Release Notes
title-class: page-title-artemis
type: artemis
---

A complete list of JIRAs for the 2.17.0 release can be found     * [here](https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12315920&version=12349326)

A list of commits can be found     * [here](commit-report-2.17.0).


Release Notes - ActiveMQ Artemis - Version 2.17.0


## Bug
    * [ARTEMIS-2620] - Avoid Exception on client when large message file corrupted
    * [ARTEMIS-2898] - Outdated dependency: micrometer-core 1.1.4
    * [ARTEMIS-2943] - Multicast Static filter for topics not working
    * [ARTEMIS-2961] - Configuration SSL/TLS - no way to "reset" password with forceSSLParameters
    * [ARTEMIS-2971] - outgoing 'server-connection' doesnt support ANONYMOUS or EXTERNAL SASL mechanisms
    * [ARTEMIS-2974] - Audit logger can print wrong user info
    * [ARTEMIS-2976] - Remove password before creating server locator
    * [ARTEMIS-2978] - Errors switching tabs after selecting a filter
    * [ARTEMIS-2983] - AMQPMessages won't show message inner data with print-data
    * [ARTEMIS-2985] - MQTT should not block netty thread
    * [ARTEMIS-2986] - Deleting scheduled messages not permanent
    * [ARTEMIS-2989] - Remove random client-side debug log in Web console
    * [ARTEMIS-2991] - Leak of HttpAcceptorHandler instances when using websocket connections
    * [ARTEMIS-2993] - Artemis plugin console components raise syntax error
    * [ARTEMIS-2996] - Provide JMH Benchmarks for Artemis
    * [ARTEMIS-2997] - artemis-jms-client: NPE on toString(), ActiveMQQueue/ActiveMQTopic
    * [ARTEMIS-3000] - Console browse message filter broken
    * [ARTEMIS-3003] - NPE when reloading persisted security-setting
    * [ARTEMIS-3004] - ActiveMQXAResourceWrapper doesn't propagate ServerLocatorConfig on connect
    * [ARTEMIS-3005] - Scaling down AMQP messages create MULTICAST queues
    * [ARTEMIS-3007] - DLQ can crash the server if message almost large
    * [ARTEMIS-3012] - Incorrect fallback consumer authorization
    * [ARTEMIS-3014] - Console Jolokia isn't guarded by JMX RBAC
    * [ARTEMIS-3017] - ArtemisJMXSecurity bulk canInvoke operation always returns true
    * [ARTEMIS-3018] - Console dlq pref doesn work with multiple dlq's
    * [ARTEMIS-3019] - AMQP Large Messages Expiration is broken
    * [ARTEMIS-3024] - DLQ or Expiry retry is not working with AMQP messages
    * [ARTEMIS-3025] - JsonReader char[] leak
    * [ARTEMIS-3026] - Allow "reencoding" of application properties on AMQP Large Messages
    * [ARTEMIS-3029] - wrong heading on producers tab in console
    * [ARTEMIS-3037] - JournalImpl#checkKnownRecordID() implementation can leave a thread hanging in WAITING state
    * [ARTEMIS-3040] - Artemis cannot reload large messages paged before 2.12
    * [ARTEMIS-3051] - Fix MessageReferenceImpl::getMemoryEstimate
    * [ARTEMIS-3058] - Improper AddressSettings merge
    * [ARTEMIS-3065] - AMQP Anonymous Producer will block on global max page when using only paged messages
    * [ARTEMIS-3067] - AMQP applicationProperties are not part of the memoryEstimate
    * [ARTEMIS-3068] - Comparator implementation of HierarchicalObjectRepository issue
    * [ARTEMIS-3072] - Management methods check for null and not for empty strings
    * [ARTEMIS-3075] - Scale down of activemq.notifications causes issues
    * [ARTEMIS-3079] - QueueControl fails on serializing AMQP messages with binary application properties
    * [ARTEMIS-3081] - Cannot override the default Java key/truststore system properties
    * [ARTEMIS-3082] - Fix non-destructive + rollback
    * [ARTEMIS-3086] - refresh on diagram forgets to draw internal objects
    * [ARTEMIS-3089] - Direct delivery can break LVQ + non-destructive
    * [ARTEMIS-3091] - Artemis CLI cannot export AMQP message headers from the journal
    * [ARTEMIS-3092] - Inconsistent JDBC config logging
    * [ARTEMIS-3096] - Bridge config using wrong default confirmation window size
    * [ARTEMIS-3099] - Incorrect default producer-window-size on bridge in broker.xml
    * [ARTEMIS-3105] - Large message file not closed on backup side
    * [ARTEMIS-3108] - Bridge XML config doesn't allow -1
    * [ARTEMIS-3109] - Unsetting expiry-address results in excessive logging
   
## New Feature
    * [ARTEMIS-33] - Generic integration with SASL Frameworks
    * [ARTEMIS-1884] - ActiveMQ5-like message-level authorization
    * [ARTEMIS-3001] - Provide address and queue count via ActiveMQServerControl
    * [ARTEMIS-3008] - Configuration reload triggered by Management API
    * [ARTEMIS-3031] - Add new callback for broker deactivation
    * [ARTEMIS-3034] - CLI Option to Transfer Messages
    * [ARTEMIS-3107] - Extension of the artemis-docker module
   
## Improvement
    * [ARTEMIS-2026] - Allow location of $ARTEMIS_INSTANCE/tmp location to be overridden
    * [ARTEMIS-2343] - "Illegal reflective access" warning with OpenJDK 11
    * [ARTEMIS-2932] - Configuration of SSL/TLS
    * [ARTEMIS-2938] - Update to latest Apache ActiveMQ Client to resolve CVEs
    * [ARTEMIS-2965] - Allow mirror to stop capture events and delete inner queue
    * [ARTEMIS-2982] - Improve "Browse Queues" view in web console
    * [ARTEMIS-2987] - Management Console -> Queue -> Message: view with text only
    * [ARTEMIS-2990] - optimise performance of wildcard address manager
    * [ARTEMIS-3009] - Reference cluster connection message loadbalancing type from the remote binding
    * [ARTEMIS-3011] - Use X-Forwarded-Proto header for Hawtio 2
    * [ARTEMIS-3016] - Reduce DuplicateIDCache memory footprint
    * [ARTEMIS-3022] - add original queue to dlq/expiry queue
    * [ARTEMIS-3023] - Avoid opening AMQP Large Message File for final parsing
    * [ARTEMIS-3033] - use a structured tree with visitors for wildcard addresses to avoid duplicate cross linking in address impl
    * [ARTEMIS-3035] - Log.info on Broker Connection Reconnection Success
    * [ARTEMIS-3039] - Replication initialization failure should only retry on network isolation
    * [ARTEMIS-3041] - Allow encrypted data source property values
    * [ARTEMIS-3043] - improvements on new console
    * [ARTEMIS-3049] - Reduce live page lookup cost
    * [ARTEMIS-3052] - Do not block on Bindings Operation
    * [ARTEMIS-3054] - Clashes between start/stop paging and replication catch up
    * [ARTEMIS-3059] - AMQP message reencoding should save creating Netty heap arenas
    * [ARTEMIS-3061] - AMQPMessage::getDuplicateProperty can save key comparisons and class checks
    * [ARTEMIS-3063] - AMQPMessage get property can use a String switch
    * [ARTEMIS-3064] - Disable useTopologyForLoadBalancing for non HA federation connections between clusters
    * [ARTEMIS-3069] - Add option to mask using the configured password-codec
    * [ARTEMIS-3073] - Improve replication manger NPE logs
    * [ARTEMIS-3074] - Add ActiveMQServerControl#createBridge() method variant which accepts the callTimeout attribute
    * [ARTEMIS-3080] - Provide JakartaEE 9 artefacts
    * [ARTEMIS-3084] - Eliminate block when moving to a next file on libaio and journal
    * [ARTEMIS-3095] - add some spacing between checkboxes for Broker Diagram
    * [ARTEMIS-3113] - Artemis AMQP shouldn't depend on JMS
   
## Task
    * [ARTEMIS-2970] - Implement a test validating Connection timeout with broker connection that does not depend on qpid-dispatch
    * [ARTEMIS-2994] - Update jetty version to 9.4.34.v20201102
    * [ARTEMIS-3006] - Upgrade to Qpid Proton 0.33.8
    * [ARTEMIS-3013] - update to Qpid JMS 0.55.0
    * [ARTEMIS-3028] - Update jetty version to 9.4.35.v20201120
    * [ARTEMIS-3060] - Upgrade to Guava 30.1
