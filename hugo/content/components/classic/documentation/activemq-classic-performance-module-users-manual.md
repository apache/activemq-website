---
title: ActiveMQ Classic Performance Module Users Manual
layout: classic-doc
---

## Running Maven 2 Performance Test

This [Maven 2](http://maven.apache.org) plugin allows you to run performance tests easily using the Maven command line or run tests automatically in [Continuum](http://maven.apache.org/continuum/).

### Prerequisites

Starting with ActiveMQ Classic 5.5 and above the plugin can be obtained from maven or if you download the src from GIT you can build it yourself. Start with a complete build of Apache ActiveMQ Classic and then do:
```
cd activemq-tooling
mvn clean install
```
To run the following Maven goals make sure you are inside a Maven2 project directory where its POM is enabled with the Maven2 plugin.

### Getting Started

To get started, switch to the [activemq-perftest directory from the sandbox repo](http://svn.apache.org/repos/asf/activemq/sandbox/activemq-perftest/), or to a directory containing your own Maven POM with the following plugin defined:
```xml
<plugin>
  <groupId>org.apache.activemq.tooling</groupId>
  <artifactId>activemq-perf-maven-plugin</artifactId>
  <version>${activemq-version}</version>
</plugin>
```
In ActiveMQ Classic versions prior to 5.8, the artifactId was `maven-activemq-perf-plugin`.

Type the following commands into separate shells (the broker line here is optional if you have a preconfigured one running):
```
mvn activemq-perf:broker -Durl=broker:tcp://localhost:61616
mvn activemq-perf:consumer
mvn activemq-perf:producer
```
If you run the broker on a different machine then change the producer and consumer commands to:
```
mvn activemq-perf:consumer -Dfactory.brokerURL=tcp://host:port
mvn activemq-perf:producer -Dfactory.brokerURL=tcp://host:port
```

When you run the producer & consumer, it generates an XML performance report in the current directory.

### Maven Goals

| Goal | Description |
|------|-------------|
| `activemq-perf:broker` | Starts broker using the activemq configuration file located in `src/main/resources/broker-conf`. Parameters: `-DconfigType` specifies the config type; `-DconfigFile` path to an alternate config file. |
| `activemq-perf:consumer` | Starts the consumer's performance testing. Report saved to `sysTest.reportDir`. |
| `activemq-perf:producer` | Starts the producer's performance testing. Report saved to `sysTest.reportDir`. |

### Configuration for Running a System of JMS Clients

| Configuration Key | Default Value | Description |
|---|---|---|
| `sysTest.propsConfigFile` | null | Use properties specified externally in a key=value properties file |
| `sysTest.clientPrefix` | JmsConsumer or JmsProducer | Client name prefix |
| `sysTest.numClients` | 1 | Number of JMS Clients to start |
| `sysTest.totalDests` | 1 | Total number of destinations |
| `sysTest.destDistro` | all | How to distribute destinations: `all`, `equal`, or `divide` |
| `sysTest.reportDir` | ./ | Directory where the sampler report will be saved |
| `sysTest.reportType` | xml | Report format: `xml` or `verbose` |
| `sysTest.samplers` | tp,cpu | Samplers to start: `tp` (throughput) and/or `cpu` |

### Configuration for Running a JMS Producer

| Configuration Key | Default Value | Description |
|---|---|---|
| `producer.sessTransacted` | false | Whether the session is transacted |
| `producer.sessAckMode` | autoAck | Acknowledge mode: `autoAck`, `clientAck`, `dupsAck`, `transacted` |
| `producer.destName` | TEST.FOO | Destination name prefix (prefix with `queue://` or `topic://`) |
| `producer.deliveryMode` | nonpersistent | `nonpersistent` or `persistent` |
| `producer.messageSize` | 1024 bytes | Size of each text message |
| `producer.sendType` | time | `time` or `count` based sending |
| `producer.sendCount` | 1000000 | Messages to send if `sendType=count` |
| `producer.sendDuration` | 300000 ms | Duration to send if `sendType=time` |

### Configuration for Running a JMS Consumer

| Configuration Key | Default Value | Description |
|---|---|---|
| `consumer.sessTransacted` | false | Whether the session is transacted |
| `consumer.sessAckMode` | autoAck | Acknowledge mode |
| `consumer.destName` | TEST.FOO | Destination name prefix |
| `consumer.durable` | false | If true, create a durable subscriber |
| `consumer.asyncRecv` | true | If true, receive messages asynchronously via `onMessage()` |
| `consumer.recvType` | time | `time` or `count` based receiving |
| `consumer.recvCount` | 1000000 | Messages to receive if `recvType=count` |
| `consumer.recvDuration` | 300000 ms | Duration to receive if `recvType=time` |

### Sampler Configuration

| Configuration Key | Default Value | Description |
|---|---|---|
| `<samplerName>.duration` | 300000 | Total duration (ms) the sampler will run |
| `<samplerName>.rampUpTime` | 30000 | Ramp up time (ms) before sampling starts |
| `<samplerName>.rampDownTime` | 30000 | Ramp down time (ms) |
| `<samplerName>.interval` | 1000 | Sampling interval (ms) |

Sampler names: `tpSampler` (throughput) and `cpuSampler` (CPU usage).
