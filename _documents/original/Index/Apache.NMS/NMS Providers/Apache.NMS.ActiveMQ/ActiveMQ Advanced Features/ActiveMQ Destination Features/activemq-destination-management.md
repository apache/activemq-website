Apache ActiveMQ ™ -- ActiveMQ Destination Management 

[Index](index.html) > [Apache.NMS](Index/apacheIndex/Overview/nms.md) > [NMS Providers](Index/Apache.NMS/nms-providers.md) > [Apache.NMS.ActiveMQ](Index/Apache.NMS/NMS Providers/apachenmsactivemq.md) > [ActiveMQ Advanced Features](activemq-advanced-features.md) > [ActiveMQ Destination Features](Index/Apache.NMS/NMS Providers/Apache.NMS.ActiveMQ/ActiveMQ Advanced Features/activemq-Features/destination-features.md) > [ActiveMQ Destination Management](Index/Apache.NMS/NMS Providers/Apache.NMS.ActiveMQ/ActiveMQ Advanced Features/ActiveMQ Destination Features/activemq-destination-management.md)

The Apache.NMS.ActiveMQ client provides some additional features beyond the standard NMS API.  One such feature is the ability to delete a given destination on the Broker.  This can be useful during testing when you want to start the test with a destination in a known state, empty or otherwise.  You can delete the destination and then the next send to that destination would recreate it at the Broker side.  Deleting a destination is as simple as the following:

**Delete a destination**

protected static void DeleteDestination() 
{ 
    IConnectionFactory factory = new ConnectionFactory(ReplaceEnvVar(connectionURI)); 
    using (Connection connection = factory.CreateConnection() as Connection) 
    { 
        using (ISession session = connection.CreateSession()) 
        { 
            IQueue queue = session.GetQueue(testQueueName); 
            try 
            { 
                connection.DeleteDestination(queue); 
            } 
            catch 
            { 
            } 
        } 
    } 
} 


