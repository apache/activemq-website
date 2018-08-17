Apache ActiveMQ ™ -- Static Transport Reference 

[Using ActiveMQ](../../../using-activemq.md) > [Configuring Transports](../../../Using ActiveMQ/configuring-transports.md) > [ActiveMQ Connection URIs](../../../Using ActiveMQ/Configuring Transports/activemq-connection-uris.md) > [Static Transport Reference](../../../Using ActiveMQ/Configuring Transports/ActiveMQ Connection URIs/static-transport-reference.md)


### The Static Transport

The static transport provides a hard coded mechanism to discover other connections using a list of URIs. A connection using this discovery mechanism will attempt to connect to all URIs in the list until it is succesful.

#### Configuration Syntax

**static:(uri1,uri2,uri3,...)?options**

#### Example URI

static:(tcp://localhost:61616,tcp://remotehost:61617?trace=false,vm://localbroker)?initialReconnectDelay=100

##### Options

Option Name

Default Value

Description

initialReconnectDelay

10

How long to wait before the first reconnect attempt (in ms)

maxReconnectDelay

30000

The maximum amount of time we ever wait between reconnect attempts (in ms)

useExponentialBackOff

true

Should an exponential backoff be used btween reconnect attempts

backOffMultiplier

2

The exponent used in the exponential backoff attempts

maxReconnectAttempts

0

If not 0, then this is the maximum number of reconnect attempts before an error is sent back to the client

minConnectTime

500

If a connaction fails faster than this amount of time then it is considered a connection failure

##### Notes

As the static transport protocol is for broker discovery, it should not be used by client programs. Clients wishing to failover to a static list of broker instances, should use the [failover://](http://activemq.apache.orgUsing ActiveMQ/Configuring Transports/ActiveMQ Connection URIs/failover-transport-reference.md) transport instead.

