---
layout: default_md
title: Using ActiveMQ Classic with EJB3 (JBoss Example) 
title-class: page-title-classic
type: classic
---  

[Index](index) > [Using ActiveMQ Classic with EJB3 (JBoss Example)](using-activemq-with-ejb3-jboss-example)

I've seen numerous postings regarding ActiveMQ Classic with EJB3, and variations of a datasource XML file for use with JBoss integration.

However, they don't quite work. Here is what worked for me, it is actually quite simple:

1. Don't use any datasource file - only the RA file is required. Put it in the `deploy' directory. The file is called activemq-rar-4.1.1.rar and it is in the ActiveMQ Classic distribution (lib/optional/)
2. In JBoss, the @ResourceAdapter annotation must be placed on the Message Driven Bean (MDB). This may vary for other application servers.
3. Examples I've seen elsewhere show an activationConfig with destination=<a JNDI name for the queue>. This doesn't work. Put the ActiveMQ Classic destination name in the activationConfig. There is no need to put the queue in the JNDI.

Here is a working example - for EJB3 on JBoss, no XML descriptors are needed, just the RA file and the MDB.

```
import org.jboss.annotation.ejb.ResourceAdapter;

@MessageDriven(activationConfig = {  
   @ActivationConfigProperty(propertyName="destinationType", propertyValue="javax.jms.Queue"),  
   @ActivationConfigProperty(propertyName="destination", propertyValue="FOO.TEST"),  
   @ActivationConfigProperty(propertyName="acknowledgeMode", propertyValue="Auto-acknowledge")  
})  
@ResourceAdapter("activemq-rar-4.1.1.rar")  
public class TestBean implements MessageListener {

   public TestBean() {  
   }

   public void onMessage(Message message) {  
   }
}
```
