Apache ActiveMQ ™ -- Errors saying "no rule to make target" 

[Index](index.html) > [Community](../../../community.md) > [FAQ](../../../faq.md) > [Building FAQs](../../../FAQ/building-faqs.md) > [Solaris Platform](../../../FAQ/Building FAQs/solaris-platform.md) > [Errors saying "no rule to make target"](../../../FAQ/Building FAQs/Solaris Platform/errors-saying-no-rule-to-make-target.md)

If you get errors when building on solaris that indicate that there is no rule to make a target file one thing to check is if the file is really in your build tree. If you extracted the source archive with the sun Tar command then you may be missing files. Sun uses an old version of Tar that doesn't work well with the archives that we create using new versions of GNU Tar. If you don't have GNU Tar installed then another work around is to grab the .zip file and use the gunzip command to extract it.

