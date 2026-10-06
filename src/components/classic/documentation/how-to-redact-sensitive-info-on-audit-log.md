---
layout: default_md
title: How to redact sensitive info on audit log
title-class: page-title-classic
type: classic
---

 [FAQ](faq) > [Configuration](configuration) > [How to redact sensitive info on audit log](how-to-redact-sensitive-info-on-audit-log)

To reduce sensitive information on audit log, such as hiding JMSText (which shows the message you sent to the destination if you do it via the web console), you can change the audit log pattern. For instance, if you want to hide JMSText, you change this line of the log4j2.properties of broker configuration

Replace
```
appender.auditlog.layout.type=PatternLayout
appender.auditlog.layout.pattern=%-5p | %m | %t%n
```

With
```
appender.auditlog.layout.type=PatternLayout
appender.auditlog.layout.pattern=%-5p | %replace{%m}{JMSText='(.*)'}{<redacted>} | %t%n
```