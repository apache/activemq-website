Apache ActiveMQ ™ -- How do I avoid Maven downloading latest jars 

 [FAQ](/FAQ/index.md) > [General](../../FAQ/general.md) > [How do I avoid Maven downloading latest jars](../../FAQ/General/how-do-i-avoid-maven-downloading-latest-jars.md)


You can use the -o switch (for offline mode) to avoid maven auto-downloading new snapshot jars (e.g. the Geronimo jars at the time of writing).

maven -o

or to run a server go to the \\assembly module and run

maven -o server

