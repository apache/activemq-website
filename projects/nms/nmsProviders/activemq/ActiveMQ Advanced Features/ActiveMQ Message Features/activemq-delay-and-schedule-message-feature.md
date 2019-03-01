Apache ActiveMQ ™ -- ActiveMQ Delay and Schedule Message Feature 

[Index](index.html) > [Apache.NMS](Index/apacheIndex/Overview/nms.md) > [NMS Providers](Index/Apache.NMS/nms-providers.md) > [Apache.NMS.ActiveMQ](Index/Apache.NMS/NMS Providers/apachenmsactivemq.md) > [ActiveMQ Advanced Features](activemq-advanced-features.md) > [ActiveMQ Message Features](activemq-FeaturesFeatures/Features/message-features.md) > [ActiveMQ Delay and Schedule Message Feature](Index/Apache.NMS/NMS Providers/Apache.NMS.ActiveMQ/ActiveMQ Advanced Features/ActiveMQ Message Features/activemq-delay-and-schedule-message-feature.md)

ActiveMQ from version **5.4** has an optional persistent scheduler built into the ActiveMQ message broker. It is enabled by setting the broker **schedulerSupport** attribute to true in the [xml configuration](#).  
An ActiveMQ client can take advantage of a delayed delivery by using the following message properties:

Property name

type

description

AMQ\_SCHEDULED\_DELAY

long

The time in milliseconds that a message will wait before being scheduled to be delivered by the broker

AMQ\_SCHEDULED\_PERIOD

long

The time in milliseconds to wait after the start time to wait before scheduling the message again

AMQ\_SCHEDULED\_REPEAT

int

The number of times to repeat scheduling a message for delivery

AMQ\_SCHEDULED\_CRON

String

Use a Cron entry to set the schedule

For example, to have a message scheduled for delivery in 60 seconds - you would need to set the _AMQ\_SCHEDULED\_DELAY_ property:

        IMessageProducer producer = session.CreateProducer(destination);
        ITextMessage message = session.CreateTextMessage("test msg");
        long time = 60 * 1000;
        message.Properties\["AMQ\_SCHEDULED\_DELAY"\] = time;
        producer.Send(message);

You can set a message to wait with an initial delay, and the repeat delivery 10 times, waiting 10 seconds between each re-delivery:

        IMessageProducer producer = session.CreateProducer(destination);
        ITextMessage message = session.CreateTextMessage("test msg");
        long delay = 30 * 1000;
        long period = 10 * 1000;
        int repeat = 9;
        message.Properties\["AMQ\_SCHEDULED\_DELAY"\] = delay;
        message.Properties\["AMQ\_SCHEDULED\_PERIOD"\] = period;
        message.Properties\["AMQ\_SCHEDULED\_REPEAT"\] = repeat;
        producer.Send(message);

You can also use [CRON](http://en.wikipedia.org/wiki/Cron) to schedule a message, for example, if you want a message scheduled to be delivered every hour, you would need to set the CRON entry to be - _0 * * * *_ \- e.g.

        IMessageProducer producer = session.CreateProducer(destination);
        ITextMessage message = session.CreateTextMessage("test msg");
        message.Properties\["AMQ\_SCHEDULED\_CRON"\] = "0 * * * *";
        producer.Send(message);

CRON scheduling takes priority over using message delay - however, if a repeat and period is set with a CRON entry, the ActiveMQ scheduler will schedule delivery of the message for every time the CRON entry fires. Easier to explain with an example. Supposing that you want a message to be delivered 10 times, with a one second delay between each message - and you wanted this to happen every hour - you'd do this:

        IMessageProducer producer = session.CreateProducer(destination);
        ITextMessage message = session.CreateTextMessage("test msg");
        message.Properties\["AMQ\_SCHEDULED\_CRON"\] = "0 * * * *";
        message.Properties\["AMQ\_SCHEDULED\_DELAY"\] = 1000;
        message.Properties\["AMQ\_SCHEDULED\_PERIOD"\] = 1000;
        message.Properties\["AMQ\_SCHEDULED\_REPEAT"\] = 9;
        producer.Send(message);


