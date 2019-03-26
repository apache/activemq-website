Apache ActiveMQ ™ -- General Build Issues 

[Index](index.html) > [Community](community.md) > [FAQ](CommunityCommunity/Community/faq.md) > [Building FAQs](Index/Community/FAQ/building-faqs.md) > [General Build Issues](Index/Community/FAQ/Building FAQs/general-build-issues.md)

###### Error during configure: "error: libpthread not found!"

Getting an error about libpthread not found even though its installed, in many cases indicates that the tool chain required to build the library isn't fully installed.  One good place to start checking is to ensure that both 'gcc' and 'g+' are installed as the M4 configure macros that check for pthread related features uses 'g+'.  

