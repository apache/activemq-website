---
layout: default_md
---

[Overview](overview) > [Download](download) > [ActiveMQ {{page.version}} Release](activemq-51513-release)

ActiveMQ {{page.version}} Release
-----------------------

{{content}}

### Getting the Binary Distributions

Description|Download Link|_Verify_
---|---|---
Windows Distribution|[apache-activemq-{{page.version}}-bin.zip](https://archive.apache.org/dist/activemq/{{page.version}}/apache-activemq-{{page.version}}-bin.zip)|[ASC](https://archive.apache.org/dist/activemq/{{page.version}}/apache-activemq-{{page.version}}-bin.zip.asc), [SHA512](https://archive.apache.org/dist/activemq/{{page.version}}/apache-activemq-{{page.version}}-bin.zip.sha512)
Unix/Linux/Cygwin Distribution|[apache-activemq-{{page.version}}-bin.tar.gz](https://archive.apache.org/dist/activemq/{{page.version}}/apache-activemq-{{page.version}}-bin.tar.gz)|[ASC](https://archive.apache.org/dist/activemq/{{page.version}}/apache-activemq-{{page.version}}-bin.tar.gz.asc), [SHA512](https://archive.apache.org/dist/activemq/{{page.version}}/apache-activemq-{{page.version}}-bin.tar.gz.sha512)

Verify the Integrity of Downloads
---------------------------------

It is essential that you verify the integrity of the downloaded files using the PGP or MD5 signatures. The PGP signatures can be verified using PGP or GPG. Begin by following these steps:

1.  Download the [KEYS](http://www.apache.org/dist/activemq/KEYS)
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
    $ gpg --verify apache-activemq-<version>-bin.tar.gz.asc
    ```

(Where <version> is replaced with the actual version, e.g., 5.1.0, 5.2.0, etc.).

Alternatively, you can verify the MD5 signature on the files. A Unix program called `md5` or `md5sum` is included in most Linux and Unix distributions. It is also available as part of [GNU Textutils](http://www.gnu.org/software/textutils/textutils.html). Windows users can utilize any of the following md5 programs:

*   [md5](http://www.fourmilab.ch/md5/)
*   [md5sums](http://www.pc-tools.net/win32/md5sums/)
*   [SlavaSoft FSUM](http://www.slavasoft.com/fsum/)

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
---|---|---
Source Release|[activemq-parent-{{page.version}}-source-release.zip](https://archive.apache.org/dist/activemq/{{page.version}}/activemq-parent-{{page.version}}-source-release.zip)|[ASC](https://archive.apache.org/dist/activemq/{{page.version}}/activemq-parent-{{page.version}}-source-release.zip.asc), [SHA512](https://archive.apache.org/dist/activemq/{{page.version}}/activemq-parent-{{page.version}}-source-release.zip.sha512)

### Git Tag

[https://gitbox.apache.org/repos/asf?p=activemq.git;a=tag;h=refs/tags/activemq-{{page.version}}](https://gitbox.apache.org/repos/asf?p=activemq.git;a=tag;h=refs/tags/activemq-{{page.version}})

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