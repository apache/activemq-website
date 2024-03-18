---
layout: default_md
title: Apollo 1.7.1 Extending Guide
title-class: page-title-classic
type: classic
---

       

*   [Apollo 1.7.1](index.html)
*   [Developers](communitydevelopers)
*   [Community](community/index.html)
*   [Download](..OverviewOverview/Overview/download)

Apollo 1.7.1 Extending Guide
============================

*   [Overview](#Overview)
*   *   [Adding your Extensions to the Apollo Class Path](#Adding_your_Extensions_to_the_Apollo_Class_Path)
    *   [Extension Discovery](#Extension_Discovery)
    *   [Extending the Data Model](#Extending_the_Data_Model)
    *   *   [Polymorphic Data/Configuraiton objects Objects](#Polymorphic_Data_Configuraiton_objects_Objects)
    *   [Using a custom `VirtualHost` implementation](#Using_a_custom__code_VirtualHost__code__implementation)
    *   [Plugging into the Broker Lifecycle](#Plugging_into_the_Broker_Lifecycle)

Overview
--------

Apollo support being extended in several ways. This guide documents all the supported extension points.

### Adding your Extensions to the Apollo Class Path

Just create a `.jar` out of out code and add it to the `${apollo.home}/lib` directory. When Apollo restarts it will add the new jar to it's class path.

### Extension Discovery

Apollo discovers your extensions by looking for extension resource files in all the jar files in it's classpath. For example, the `apollo-broker` jar file contains the following a resource file `META-INF/services/org.apache.activemq.apollo/protocol-codec-factory.index` It contains the class names of the protocol codec factories that are implemented in the `broker-core` module. It's contents are:

    org.apache.activemq.apollo.broker.protocol.AnyProtocolFactory
    org.apache.activemq.apollo.broker.protocol.UdpProtocolFactory
    org.apache.activemq.apollo.broker.protocol.RawProtocolFactory

All three of the the listed classes implement the [`ProtocolFactory`](api/apollo-broker/index.html#org.apache.activemq.apollo.broker.protocol.ProtocolFactory) interface. Here's a list of extension points supported by Apollo:

*   Data Model: `META-INF/services/org.apache.activemq.apollo/dto-module.index` → [`org.apache.activemq.apollo.util.DtoModule`](api/apollo-util/index.html#org.apache.activemq.apollo.util.DtoModule)
    
*   Transports: `META-INF/services/org.apache.activemq.apollo/transport-factory.index` → [`org.apache.activemq.apollo.broker.transport.TransportFactory.Provider`](api/apollo-broker/index.html#org.apache.activemq.apollo.broker.transport.TransportFactory$$Provider)
    
*   Protocols: `META-INF/services/org.apache.activemq.apollo/protocol-factory.index` → [`org.apache.activemq.apollo.broker.protocol.ProtocolFactory`](api/apollo-broker/index.html#org.apache.activemq.apollo.broker.protocol.ProtocolFactory)
    
*   Broker Factories: `META-INF/services/org.apache.activemq.apollo/broker-factory.index` → [`org.apache.activemq.apollo.broker.BrokerFactoryTrait`](api/apollo-broker/index.html#org.apache.activemq.apollo.broker.BrokerFactoryTrait)
    
*   Connectors: `META-INF/services/org.apache.activemq.apollo/connector-factory.index` → [`org.apache.activemq.apollo.broker.ConnectorFactory`](api/apollo-broker/index.html#org.apache.activemq.apollo.broker.ConnectorFactory)
    
*   Virtual Hosts: `META-INF/services/org.apache.activemq.apollo/virtual-host-factory.index` → [`org.apache.activemq.apollo.broker.VirtualHostFactory`](api/apollo-broker/index.html#org.apache.activemq.apollo.broker.VirtualHostFactory)
    
*   Route Listeners: `META-INF/services/org.apache.activemq.apollo/router-listener-factory.index` → [`org.apache.activemq.apollo.broker.RouterListenerFactory`](api/apollo-broker/index.html#org.apache.activemq.apollo.broker.RouterListenerFactory)
    
*   Stores: `META-INF/services/org.apache.activemq.apollo/store-factory.index` → [`org.apache.activemq.apollo.broker.store.StoreFactory`](api/apollo-broker/index.html#org.apache.activemq.apollo.broker.store.StoreFactory)
    
*   Web Admin Components: `META-INF/services/org.apache.activemq.apollo/web-module.index` → `org.apache.activemq.apollo.web.WebModule`
    
*   Web Servers → `META-INF/services/org.apache.activemq.apollo/web-server-factory.index`→ [`org.apache.activemq.apollo.broker.web.WebServerFactory`](api/apollo-broker/index.html#org.apache.activemq.apollo.broker.web.WebServerFactory)
    

### Extending the Data Model

If you want to extend the Apollo xml configuration model to understand some custom JAXB object you have defined in your own packages, then you need to implement a `Module` class and then create a `META-INF/services/org.apache.activemq.apollo/dto-module.index` resource file in which you list it's class name.

Example module class:

    
    package org.example
    import org.apache.activemq.apollo.util.DtoModule
    
    class Module extends DtoModule {
    
      def dto_package = "org.apache.activemq.apollo.broker.store.leveldb.dto"
      def extension_classes = Array(classOf[LevelDBStoreDTO], classOf[LevelDBStoreStatusDTO])
    
    }
    

Example `META-INF/services/org.apache.activemq.apollo/dto-module.index` resource:

    org.example.Module

#### Polymorphic Data/Configuraiton objects Objects

The following objects in the Apollo data model can be extended:

*   [`VirtualHostDTO`](api/apollo-dto/org/apache/activemq/apollo/dto/VirtualHostDTO.html)
*   [`ConnectorTypeDTO`](api/apollo-dto/org/apache/activemq/apollo/dto/ConnectorTypeDTO.html)
*   [`ConnectionStatusDTO`](api/apollo-dto/org/apache/activemq/apollo/dto/ConnectionStatusDTO.html)
*   [`ProtocolDTO`](api/apollo-dto/org/apache/activemq/apollo/dto/ProtocolDTO.html)
*   [`StoreDTO`](api/apollo-dto/org/apache/activemq/apollo/dto/StoreDTO.html)
*   [`StoreStatusDTO`](api/apollo-dto/org/apache/activemq/apollo/dto/StoreStatusDTO.html)

### Using a custom `VirtualHost` implementation

Virtual hosts control the lifescycle of destinations and how producers and consumers are connected to those destinations. You can subclass the default virtual host implemenation to override the default behaviour that Apollo provides.

To create your own VirtualHost extension, you first extend the [`org.apache.activemq.apollo.broker.VirtualHost`](api/apollo-broker/index.html#org.apache.activemq.apollo.broker.VirtualHost) class and override it's implemenation suite your needs. Example:

    package example;
    class MyVirtualHost(broker: Broker, id:String) extends VirtualHost(broker, id) {
      // ... todo: override
    }

Then, to allow an `apollo.xml` configration file you your extended version of the virtual host you need to extend the [`VirtualHostDTO`](api/apollo-dto/org/apache/activemq/apollo/dto/VirtualHostDTO.html) class to define a new XML emlement for your new virtual host type.

    package example;
    @XmlRootElement(name = "my_virtual_host")
    @XmlAccessorType(XmlAccessType.FIELD)
    class MyVirtualHostDTO extends VirtualHostDTO {
      // example config attribute
      @XmlAttribute(name="trace")
      public Boolean trace;
    }

Since this is extending the data model, we follow the direction in the ['Extending the Data Model'](#Extending_the_Data_Model) section of this guide and add a `Module` class:

    package example;
    class Module extends DtoModule {
      def dto_package = "example"
      def extension_classes = Array(classOf[MyVirtualHostDTO])
    }

and a `META-INF/services/org.apache.activemq.apollo/dto-module.index` resource file containing:

    example.Module

Now that we can define an XML element to configure the custom virtual host and create it, lets define a factory class which will be used to create a `MyVirtualHost` when a `<my_virtual_host>` xml element is used in the configuration file:

    package example;
    object MyVirtualHostFactory extends VirtualHostFactory {
    
      def create(broker: Broker, dto: VirtualHostDTO): VirtualHost = dto match {
        case dto:MyVirtualHostDTO =>
          val rc = new MyVirtualHostDTO(broker, dto.id)
          rc.config = dto
          rc
        case _ => null
      }
    }

and a `META-INF/services/org.apache.activemq.apollo/virtual-host-factory.index` resource file containing:

    example.MyVirtualHostFactory

### Plugging into the Broker Lifecycle

You can implement custom [Service](api/apollo-util/index.html#org.apache.activemq.apollo.util.Service) objects which get started / stopped when the broker starts and stops. Once you have packaged your custom service, and added it to the Apollo class path, you can update the `apollo.xml` to add the service so it gets started when apollo starts:

    
    <service id='myservice' kind='org.example.MyService'/>
    

The `id` attribute is a unique service name of your service, and the `kind` attribute is the class name of your service.

If your service needs a reference to the Broker object which is running in, add the following field definition to your class:

    
    var broker:Broker = null
    

The broker instance will be injected into your class instance before it gets started.

Your service can also get reference to to the configuration element used to define it if it defines the following field.

    
    var config: CustomServiceDTO
    

This field will also get injected before getting started. The `CustomServiceDTO.other` field will contain any additional configuration elements defined within service element. For example, if you configured the service as follows:

    
    <service id='myservice' kind='org.example.MyService'/>
      <options xmlns="http://example.org/myservice">
        <search>google.com</search>
      </options>
    </service>
    

Then you could access the options DOM element using:

    
        val options = config.other.get(1).asInstanceOf[Element]
    

If you had defined JAXB object mappings for the `<options>` class then `config` will hold that object instead of generic DOM `Element`.