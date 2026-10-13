---
layout: default_md
title: Apache ActiveMQ Roadmap
title-class: page-title-main
type: main
---

_Compiled from GitHub Projects boards, Milestones, and Issues for [apache/activemq](https://github.com/apache/activemq)_
_Last updated: 2026-09-13_

Latest released version as of this writing: **6.3.2**. The items below reflect what's currently planned/in-progress on the public GitHub Projects boards, grouped by target version.

---

## At a Glance

| Version | Type | Theme |
|---|---|---|
| v5.19.12 | Patch/Maintenance | Bug fixes on the legacy 5.19.x line |
| v6.3.3 | Patch/Maintenance | Bug fixes on the 6.3.x line |
| v6.4.0 | Feature release | Security, observability, JMX/networking hardening |
| v6.5.0 | Feature release | Jakarta Messaging 3.1 (JMS 2.0) compliance work |
| _Unscheduled_ | Backlog | Cloud & Kubernetes Integration (not yet assigned to a version) |

---

### [Apache ActiveMQ v5.19.12](https://github.com/orgs/apache/projects/679) (5.x Maintenance)

- Fix MQTT wire format rejecting valid 4-byte remaining lengths (backport)
- Fix "Failed to remove consumer" NPE during broker shutdown (backport)
- Fix concurrent advisory message evaluation (backport)
- Routine dependency bumps (Surefire, Maven Compiler Plugin, Javassist, SLF4J, Ant, Jolokia, Maven Plugin Plugin)

### [Apache ActiveMQ v6.3.3](https://github.com/orgs/apache/projects/673) (Patch/Maintenance)

- **Virtual Thread support (Tech Preview)** — already shipped (merged as [AMQ-9394] in PR #1172) and available in the 6.3.x line. Opt-in via `virtualThreadTaskRunner`, requires JDK 21+. _(Note: the underlying commit first shipped back in 6.2.0 and has carried forward into every release since — it's not exclusive to 6.3.x, but it is present and still tech-preview-labeled here.)_
- Improve GC checkpoint algorithm for empty durables
- Fix NPE in `ConnectionView.getWireFormatInfo` (JMX)
- Fix MQTT wire format rejecting valid 4-byte remaining lengths
- Fix "Failed to remove consumer" NPE during broker shutdown (stale consumers left behind)
- Fix concurrent advisory message evaluation
- Routine dependency bumps (Maven bundle plugin, etc.)

### [Apache ActiveMQ v6.4.0](https://github.com/orgs/apache/projects/624) (Feature Release)

- Add SSL support for JMX connector in `ManagementContext`
- Add OpenTelemetry plugin support
- Add OAuth2 support
- Support Client IP address allowlist/denylist on Transport Connectors
- Feature: authorize `clientId` values based on `userId`
- Support for PageFile free page truncation
- Modernize `ActiveMQMessageAudit` to be lock-free
- Fix Jolokia/JMX queries failing with `IllegalStateException` on slave broker (`startAsync=true`)
- Fix `StartCommand` exiting with no logged error after 10-minute timeout on slave broker lock wait
- Optimize statistics timestamps to reuse relevant message timestamps
- Fix `BrokerView TotalProducerCount` reporting
- Docker image update to JDK 25 + README updates
- Clear stale network bridges on failure
- Flaky test cleanup following the v6.3.0 release

### [Apache ActiveMQ v6.5.0](https://github.com/orgs/apache/projects/680) (Feature Release)

Focused primarily on providing **Full Jakarta Messaging 3.1 / JMS 2.0 compliant** :

- Implement Async Send
- Implement `receiveBody()`
- Setup Jakarta Messaging 3.1 TCK (Technology Compatibility Kit)
- Enforce provider-only JMSX properties under strict compliance
- Improve queue consumer starvation under low configuration
- Improve `DestinationInterceptor` reapplication to respect Destination Filters
- Fix Network Connector dispatch usage of integer creating a race condition
- Fix race condition in async exception handling (combine JMS `ExceptionListener` and `TransportListener` notifications)

---

## Cross-Release Initiative 

These effort spans multiple releases rather than landing in a single version

### [Jakarta Messaging 3.1 / JMS 2.0 Support](https://github.com/apache/activemq/milestone/4)

#### Already completed:

- Fixed version metadata
- Exception types now honored
- Message property count fix
- `JMSProducer.getObjectProperty()` returns null instead of throwing NPE for missing properties
- Temporary Destination behavior fixes
- `setClientID()` on admin-configured connections throws `IllegalStateRuntimeException`
- Durable subscriber without `clientID` throws `IllegalStateException`

#### In progress (tracked in the 6.4.0/6.5.0 boards above):

- Pooling support for `JMSContext`
- Jakarta Messaging 3.1 Shared Topic Support
- Implement Delivery Delay
- Implement `receiveBody()`
- Implement Shared Subscriptions
- Implement Async Send
- Setup Jakarta Messaging 3.1 TCK

---

## Cloud & Kubernetes Integration

These items represent the **cloud-friendly** direction for Apache ActiveMQ and are tracked under the `kubernetes` label which would be assigned based on priority into current of future Apache ActiveMQ projects.

| k8s Components | Github issue# | Notes |
|---|---|---|
| Helm Charts | [1754](https://github.com/apache/activemq/issues/1754) | Provide an official Helm chart for deploying ActiveMQ on Kubernetes | 
| Kubernetes Operator | [1752](https://github.com/apache/activemq/issues/1752) | Bootstrap/manage brokers in a K8s cluster via custom resources | 
| Add Kubernetes discovery support in Network Connector | [1771](https://github.com/apache/activemq/issues/1771) | Provide a Kubernetes-native discovery agent for broker Network Connectors |

---

## Proposal under review or consideration

These are not confirmed, but proposed roadmap items that are still under review within the community

| Version | Type | Theme | Notes |
|---|---|---|---|
| v6.6 | Feature release | Authentication and Authorization | OAuth 2.0, IAM with [OPA](https://www.openpolicyagent.org/docs) |
| v6.7 | Beta release | Replicated KahaDB | Tech preview of rKahaDB(replication) on multiple nodes in a network of brokers |
| v7.0 | Feature release | Replicated KahaDB | Support rKahaDB(replication) with leader election using RAFT, optional removal of Spring dependencies |
| Unscheduled | Backlog | Metrics and Management | OpenTelemetry, native REST API for metrics, events and audit without Jolokia, Modern webconsole with ReactJS |
