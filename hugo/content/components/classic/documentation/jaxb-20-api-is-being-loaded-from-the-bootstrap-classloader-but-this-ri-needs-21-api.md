---
title: JAXB 2.0 API is being loaded from the bootstrap classloader, but this RI () needs 2.1 API.
layout: classic-doc
---



When using JDK 6 (up to JDK 6 Update 3) to run ActiveMQ Classic you can run into this exception. There are two solutions to this:

*   Upgrade to JDK to 1.6.0_04 or above, which includes JAXB 2.1
*   Copy JAXB 2.1 to <JAVA_HOME>/lib/endorsed to override the API jars that ship with the JDK

