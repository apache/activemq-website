---
layout: default_md
title: Group Membership 
title-class: page-title-activemq5
type: activemq5
---

[Features](features) > [ActiveMQ Real Time](activemq-real-time) > [Group Membership](group-membership)


ActiveBlaze supports group membership using a GroupChannel - which can be created from a GroupChannelFactory. You have to explicitly say which group you want to join/leave - and you can join multiple groups. Each GroupChannel has both a globally unique id and a name.
```
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
```
