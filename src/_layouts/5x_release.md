---
layout: default_md
---

[Overview](overview) > [Download](download) > [ActiveMQ {{page.version}} Release]({{page.url}})

ActiveMQ {{page.version}} Release
-----------------------

{{content}}

### Getting the Binary Distributions

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

Description|Download Link|_Verify_
---|---|---{% if isCurrentRelease %}
Windows Distribution|[apache-activemq-{{page.version}}-bin.zip](https://www.apache.org/dyn/closer.cgi?filename=/activemq/{{page.version}}/apache-activemq-{{page.version}}-bin.zip&action=download)|[ASC](https://downloads.apache.org/activemq/{{page.version}}/apache-activemq-{{page.version}}-bin.zip.asc), [SHA512](https://downloads.apache.org/activemq/{{page.version}}/apache-activemq-{{page.version}}-bin.zip.sha512)
Unix/Linux/Cygwin Distribution|[apache-activemq-{{page.version}}-bin.tar.gz](https://www.apache.org/dyn/closer.cgi?filename=/activemq/{{page.version}}/apache-activemq-{{page.version}}-bin.tar.gz&action=download)|[ASC](https://downloads.apache.org/activemq/{{page.version}}/apache-activemq-{{page.version}}-bin.tar.gz.asc), [SHA512](https://downloads.apache.org/activemq/{{page.version}}/apache-activemq-{{page.version}}-bin.tar.gz.sha512){% else %}
Windows Distribution|[apache-activemq-{{page.version}}-bin.zip](https://archive.apache.org/dist/activemq/{{page.version}}/apache-activemq-{{page.version}}-bin.zip)|[ASC](https://archive.apache.org/dist/activemq/{{page.version}}/apache-activemq-{{page.version}}-bin.zip.asc), [SHA512](https://archive.apache.org/dist/activemq/{{page.version}}/apache-activemq-{{page.version}}-bin.zip.sha512)
Unix/Linux/Cygwin Distribution|[apache-activemq-{{page.version}}-bin.tar.gz](https://archive.apache.org/dist/activemq/{{page.version}}/apache-activemq-{{page.version}}-bin.tar.gz)|[ASC](https://archive.apache.org/dist/activemq/{{page.version}}/apache-activemq-{{page.version}}-bin.tar.gz.asc), [SHA512](https://archive.apache.org/dist/activemq/{{page.version}}/apache-activemq-{{page.version}}-bin.tar.gz.sha512)
{% endif %}          

Verify the Integrity of Downloads
---------------------------------

It is essential that you verify the integrity of the downloaded files using the PGP. The PGP signatures can be verified using PGP or GPG. Begin by following these steps:

1.  Download the [KEYS](https://downloads.apache.org/activemq/KEYS)
2.  Download the asc signature file for the relevant distribution
3.  Verify the signatures using the following commands, depending on your use of PGP or GPG:
    ```
    $ pgpk -a KEYS
    $ pgpv apache-activemq-<version>-bin.tar.gz.asc
    ```
    or
    ```
    $ pgp -ka KEYS
    $ pgp apache-activemq-<version>-bin.tar.gz.asc
    ```
    or
    ```
    $ gpg --import KEYS
    $ gpg --verify apache-activemq-<version>-bin.tar.gz.asc apache-activemq-<version>-bin.tar.gz
    ```

(Where <version> is replaced with the actual version, e.g., 5.1.0, 5.2.0, etc.).

You can also verify SHA512 hash using `sha512sum` command:

```
$ sha512sum -c apache-activemq-<version>-bin.tar.gz.sha512
apache-activemq-<version>-bin.tar.gz: OK
```

(Where <version> is replaced with the actual version, e.g., 5.1.0, 5.2.0, etc.).

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

{% assign releases = site["releases"]  %}

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
