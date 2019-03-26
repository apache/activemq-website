Apache ActiveMQ ™ -- ActiveMQ-CPP Stomp 

[Index](index.html) > [ActiveMQ-CPP Stomp](IndexIndex/Index/activemq-cpp-stomp.md)

ActiveMQ-CPP Stomp Support
--------------------------

Stomp is a simple text-based protocol supported by the ActiveMQ Broker that allows communication from a variety of clients (e.g. C++, Java, .NET, Ruby, Python, etc). If you'd like to learn more about the stomp protocol, go [here](http://stomp.codehaus.org). Also, you can see ActiveMQ extensions [here](http://www.activemq.org/siteConnectivity/Protocols/stomp.md).

The implementation of the CMS API with stomp has some quirks, as it's a simple protocol and doesn't have the full capabilities of, say, openwire. The purpose of this page is to document these quirks so that users understand any strange behaviors that they may see occasionally.

### Message Properties in Stomp CMS

Since Stomp is strictly text-based, it does not support a way to specify the type of message properties (called "header" in stomp lingo). This means that a property sent as an integer could be read by a Stomp CMS client as any of: string, integer, short, long, etc.

When a Java client, for example, sends a message to the broker with an integer property ("myval"=1), the broker adapts the message from openwire to stomp and in the process converts the property "myval" to the string "1" and sends the message to the client. The client receives the string, but allows the user to read this value in any way that will work successfully with the std::istringstream >> operator.

The same goes for writing values to an outgoing message. You can call any of the methods (e.g. setIntProperty). The resulting value that goes out on the wire is still a string, however.

###  Temporary Topics and Queues

The Stomp Protocol does not support the concept of temporary topics or queues.  If you call the createTemporaryTopic or createTemporaryQueue methods of cms::Session an exception of type NotSupportedException is thrown.  To implement request / response type semantics you will need to use standard Topics and Queues.

### Usage notes on Selectors with Stomp

Stomp as a general rule only allows one session per connection.  In ActiveMQ-CPP we have created a sort of virtual session that allows more than one session to be created per connection.  The one caveat is that there still can only be one selector on the main Stomp Session that we create, so whatever the first session is that is created with a selector will be the only selector that will actually have any effect as none of the newly created sessions will apply a selector even if you pass one in the creation of that Session. 

