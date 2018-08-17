Apache ActiveMQ ™ -- Group Membership 

[Features](features.md) > [ActiveMQ Real Time](FeaturesFeatures/Features/activemq-real-time.md) > [Group Membership](Features/ActiveMQ Real TimeFeatures/ActiveMQ Real Time/Features/ActiveMQ Real Time/group-membership.md)


ActiveBlaze supports group membership using a GroupChannel - which can be created from a GroupChannelFactory.  
You have to explicitly say which group you want to join/leave - and you can join multiple groups.  
Each GroupChannel has both a globally unique id and a name.

import org.apache.activeblaze.group.*;

...
BlazeGroupChannelFactory factory = new BlazeGroupChannelFactory();

BlazeGroupChannel channel = factory.createGroupChannel("My Channel");
//join a group
channel.addToGroup("test");
channel.start();

//listen for other members

channel.addMemberChangedListener(new MemberChangedListener(){

     public void memberStarted(Member member) {
         System.out.println("Member started");
     }

     public void memberStopped(Member member) {
         System.out.println("Member stopped");
     }
            
 });

