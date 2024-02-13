---
layout: default_md
title: What happens when the journal size is exceeded 
title-class: page-title-classic
type: classic
---

 [FAQ](faq) > [Persistence Questions](persistence-questions) > [What happens when the journal size is exceeded](what-happens-when-the-journal-size-is-exceeded)


If the "preferred" size is exceeded then the last log files keeps growing until the first log files can be overwritten. When a log file is overwritten, it's size is reset to the "preferred" size.

