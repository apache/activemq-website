---
title: Xml Reference
layout: classic-doc
---

## ActiveMQ Classic Xml Reference

This page contains links to the XML reference guides and XML schema documents for [Xml Configuration](xml-configuration) with ActiveMQ Classic releases.

### Released Schemas

| Version | Reference | XML Schema | XML Schema Namespace |
|---|---|---|---|
| ActiveMQ v5.17.2 | [Reference](http://activemq.apache.org/schema/core/activemq-core-5.17.2-schema.html) | [activemq-core-5.17.2.xsd](http://activemq.apache.org/schema/core/activemq-core-5.17.2.xsd) | [http://activemq.apache.org/schema/core](http://activemq.apache.org/schema/core) |
| ActiveMQ v5.16.5 | [Reference](http://activemq.apache.org/schema/core/activemq-core-5.16.5-schema.html) | [activemq-core-5.16.5.xsd](http://activemq.apache.org/schema/core/activemq-core-5.16.5.xsd) | [http://activemq.apache.org/schema/core](http://activemq.apache.org/schema/core) |

Browse all versions: [Schema listing](http://activemq.apache.org/schema/core/)

### Using the XSDs in Configuration Files

If you are using XBean to parse the XML configurations, XML validation is optional so you do not need to specify the XML Schema Locations. However if you are using Spring's 2.0 XML handling you need to refer to the XSD locations because Spring uses schema namespace or schema location to resolve namespace handlers.

Refer to a specific version:
```xml
<beans xmlns="http://www.springframework.org/schema/beans"
    xmlns:amq="http://activemq.org/config/1.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="
        http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans-2.0.xsd
        http://activemq.org/config/1.0 http://activemq.apache.org/schema/core/activemq-core-4.1.2.xsd">
```

Or use a generic XSD without a version number:
```xml
<beans xmlns="http://www.springframework.org/schema/beans"
    xmlns:amq="http://activemq.org/config/1.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="
        http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans-2.0.xsd
        http://activemq.org/config/1.0 http://activemq.apache.org/schema/activemq-core.xsd">
```

### Pay Attention to the Namespace

- ActiveMQ Classic 5.0 or earlier: use `http://activemq.org/config/1.0`
- ActiveMQ Classic 5.1 or later: use `http://activemq.apache.org/schema/core`

**ActiveMQ Classic 5.2+ example:**
```xml
<beans xmlns="http://www.springframework.org/schema/beans"
    xmlns:amq="http://activemq.apache.org/schema/core"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="
        http://www.springframework.org/schema/beans
        http://www.springframework.org/schema/beans/spring-beans.xsd
        http://activemq.apache.org/schema/core
        http://activemq.apache.org/schema/core/activemq-core-5.2.0.xsd
    ">
</beans>
```

### Schema Validation

> **Note:** The XML configuration ordering constraint is removed in [5.6](https://issues.apache.org/jira/browse/AMQ-3570).

Beginning in ActiveMQ Classic 5.4, the XML elements inside the `<broker>` element must be ordered alphabetically. You can disable validation from the command line:
```
bin/activemq console xbean:conf/activemq.xml?validate=false
```
