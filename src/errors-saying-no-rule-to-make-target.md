---
layout: default_md
title: Errors saying "no rule to make target" 
title-class: page-title-activemq5
type: activemq5
---

[Index](index.html) > [Community](community) > [FAQ](faq) > [Building FAQs](building-faqs) > [Solaris Platform](solaris-platform) > [Errors saying "no rule to make target"](errors-saying-no-rule-to-make-target)

If you get errors when building on solaris that indicate that there is no rule to make a target file one thing to check is if the file is really in your build tree. If you extracted the source archive with the sun Tar command then you may be missing files. Sun uses an old version of Tar that doesn't work well with the archives that we create using new versions of GNU Tar. If you don't have GNU Tar installed then another work around is to grab the .zip file and use the gunzip command to extract it.

