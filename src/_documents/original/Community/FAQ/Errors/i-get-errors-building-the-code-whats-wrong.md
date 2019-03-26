Apache ActiveMQ ™ -- I get errors building the code whats wrong 

[Community](community.md) > [FAQ](CommunityCommunity/Community/faq.md) > [Errors](Community/FAQCommunity/FAQ/Community/FAQ/errors.md) > [I get errors building the code whats wrong](Community/FAQ/ErrorsCommunity/FAQ/Errors/Community/FAQ/Errors/i-get-errors-building-the-code-whats-wrong.md)


We currently use a multi-project maven build system, which can be a little fragile. If you are ever having problems building we suggest you try the following in the root _activemq_ directory

mvn clean
rm -rf ~/.m2/repository
mvn

You may also want to [disable the unit tests](Community/FAQ/GeneralCommunity/FAQ/General/Community/FAQ/General/how-do-i-build-but-disable-the-unit-tests.md)

