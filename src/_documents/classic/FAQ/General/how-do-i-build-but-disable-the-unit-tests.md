Apache ActiveMQ ™ -- How do I build but disable the unit tests 

 [FAQ](/FAQ/index.md) > [General](../../FAQ/general.md) > [How do I build but disable the unit tests](../../FAQ/General/how-do-i-build-but-disable-the-unit-tests.md)


How do I build but disable the unit tests
-----------------------------------------

The test cases in ActiveMQ can take a very long time to run! ![(smile)](https://cwiki.apache.org/confluence/s/en_GB/5997/6f42626d00e36f53fe51440403446ca61552e2a2.1/_/images/icons/emoticons/smile.png)

To disable this you can try the following

mvn install -Dmaven.test.skip=true

