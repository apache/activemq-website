---
layout: default_md
---
{% assign releases = site["5x_releases"] | reverse %}
{% assign isCurrentRelease = false %}

{% for current_release in site.data.current_releases["5x"] %}
    {% for release in releases %}
        {% if release.version contains current_release %}
                    {% if release.version == page.version %}
                        {% assign isCurrentRelease = true %}
                    {% endif %}          
            {% break %}
        {% endif %}          
    {% endfor %}
    {% if isCurrentRelease %} {% break %} {% endif %} 
{% endfor %}

[Overview](overview) > [Download](download) > [ActiveMQ {{page.version}} Release]({{page.url}})

ActiveMQ {{page.version}} Release
-----------------------
{% unless isCurrentRelease %}
<div class="alert alert-warning">
  This is an older release. To get the current release, please see the <a href="{{site.baseurl}}/components/classic/download" class="alert-link">download page</a>.
</div>
{% endunless %}
{% if isCurrentRelease and page.version == "5.16.5" %}
<div class="alert alert-warning">
  NOTE: This is the last planned 5.16.x release. Users should upgrade to the current 5.17.x stream for ongoing releases. See the <a href="{{site.baseurl}}/components/classic/download" class="alert-link">download page</a>.
</div>
{% endif %}

{{content}}

### Getting the Binary Distributions

Description|Download Link|_Verify_
---|---|---{% if isCurrentRelease %}
Windows Distribution|[apache-activemq-{{page.version}}-bin.zip](https://www.apache.org/dyn/closer.cgi?filename=/activemq/{{page.version}}/apache-activemq-{{page.version}}-bin.zip&action=download)|[ASC](https://downloads.apache.org/activemq/{{page.version}}/apache-activemq-{{page.version}}-bin.zip.asc), [SHA512](https://downloads.apache.org/activemq/{{page.version}}/apache-activemq-{{page.version}}-bin.zip.sha512)
Unix/Linux/Cygwin Distribution|[apache-activemq-{{page.version}}-bin.tar.gz](https://www.apache.org/dyn/closer.cgi?filename=/activemq/{{page.version}}/apache-activemq-{{page.version}}-bin.tar.gz&action=download)|[ASC](https://downloads.apache.org/activemq/{{page.version}}/apache-activemq-{{page.version}}-bin.tar.gz.asc), [SHA512](https://downloads.apache.org/activemq/{{page.version}}/apache-activemq-{{page.version}}-bin.tar.gz.sha512){% else %}
Windows Distribution|[apache-activemq-{{page.version}}-bin.zip](https://archive.apache.org/dist/activemq/{{page.version}}/apache-activemq-{{page.version}}-bin.zip)|[ASC](https://archive.apache.org/dist/activemq/{{page.version}}/apache-activemq-{{page.version}}-bin.zip.asc), [SHA512](https://archive.apache.org/dist/activemq/{{page.version}}/apache-activemq-{{page.version}}-bin.zip.sha512)
Unix/Linux/Cygwin Distribution|[apache-activemq-{{page.version}}-bin.tar.gz](https://archive.apache.org/dist/activemq/{{page.version}}/apache-activemq-{{page.version}}-bin.tar.gz)|[ASC](https://archive.apache.org/dist/activemq/{{page.version}}/apache-activemq-{{page.version}}-bin.tar.gz.asc), [SHA512](https://archive.apache.org/dist/activemq/{{page.version}}/apache-activemq-{{page.version}}-bin.tar.gz.sha512)
{% endif %}          

Java compatibility: **{{page.java_version}}**

Verify the Integrity of Downloads
---------------------------------

{% include verify_download.md %}


Getting the Binaries using Maven 3
----------------------------------

To use this release in your maven project, the simplest dependency that you can use in your [Maven POM](http://maven.apache.org/guides/introduction/introduction-to-the-pom.html) is:
```
<dependency>
  <groupId>org.apache.activemq</groupId>
  <artifactId>activemq-all</artifactId>
  <version>{{page.version}}</version>
</dependency>
```
If you need more fine grained control of your dependencies (activemq-all is an uber jar) pick and choose from the various components activemq-client, activemq-broker, activemq-xx-store etc.

Getting the Source Code
-----------------------

### Source Distributions

Description|Download Link|Verify
---|---|---{% if isCurrentRelease %}
Source Release:|[activemq-parent-{{page.version}}-source-release.zip](https://www.apache.org/dyn/closer.cgi?filename=/activemq/{{page.version}}/activemq-parent-{{page.version}}-source-release.zip&action=download)|[ASC](https://downloads.apache.org/activemq/{{page.version}}/activemq-parent-{{page.version}}-source-release.zip.asc), [SHA512](https://downloads.apache.org/activemq/{{page.version}}/activemq-parent-{{page.version}}-source-release.zip.sha512)|{% else %}
Source Release|[activemq-parent-{{page.version}}-source-release.zip](https://archive.apache.org/dist/activemq/{{page.version}}/activemq-parent-{{page.version}}-source-release.zip)|[ASC](https://archive.apache.org/dist/activemq/{{page.version}}/activemq-parent-{{page.version}}-source-release.zip.asc), [SHA512](https://archive.apache.org/dist/activemq/{{page.version}}/activemq-parent-{{page.version}}-source-release.zip.sha512)
{% endif %}     

Change Log
----------

For a more detailed view of new features and bug fixes, see the [release notes]({{page.release_notes}})

{% assign releases = site["5x_releases"]  %}

{% for release in releases %}
    {% if release.title == page.title %}
        {% unless forloop.first %}
            {% assign prevurl = prev.url %}
            {% assign prevtitle = prev.title %}
        {% endunless %}
    {% endif %}

    {% assign prev = release %}
{% endfor %}

{% if prevurl %}
Also see the previous [{{prevtitle}}]({{prevurl}})
{% endif %}
