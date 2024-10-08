
This allows the user to view a paginated list of the messages on the queue selected as well as being able
to view, send and delete messages. Although the results size may be very large the console only fetches a single page
anytime from the broker. The console will retrieve each page of messages afresh when the list is iterated over or the order or filters are changed.

<img src= "browse.png" width="1200" alt="Connection Image" style="border: 2px solid grey;">

##### Filtering Messages

The **Browse** tab can also filter messages using the JMS Message Selector Syntax as described in the [Artemis Filter Expression Documentation](https://activemq.apache.org/components/artemis/documentation/latest/filter-expressions.html).  For instance if you wanted to filter on messages
that contained the Message Header myheader which was set to octopus, you would enter **myheader='octopus'** in the text box
in the top left hand side of the tab and click search.

##### Deleting Messages

Messages can be deleted in bulk by selecting the relevant checkbox of each message on the left hand side and clicking the
*Delete* button. This will open up a dialog box to confirm deletion. Note that this operation cannot be undone.

> NOTE: Messages can also be individually deleted by clickin on the 3 dots to the right of each message and clicking delete.

##### Moving Messages

Messages can be moved in bulk to another queue by selecting the relevant checkbox of each message on the left hand side and clicking the
*Move* button. This will open up a dialog box that has a searchable drop down box for easy searching of available queues,
simply start typing the name of the queue you want to move the messages too. Note that this operation cannot be undone.

##### Resending Messages

Messages can be resent to a different queue by clicking on the 3 dots to the right of the message and clicking *resend*.
This will open up a dialog that allows you to send a copy of the message to a specific queue.
