{% if include.latest_docs %}
  {% assign docs_version = "latest" %}
{% else %}
  {% assign docs_version = include.release.docs_version %}
{% endif %}
#### ActiveMQ Artemis {{include.release.version}}  ({{include.release.release_date | date_to_string: "ordinal", "US"}})
[Release Notes](release-notes-{{include.release.version}}) | [Git Report](commit-report-{{include.release.version}}) | [Documentation:](../documentation/{{docs_version}}) [HTML](../documentation/{{docs_version}}) / [PDF](../documentation/{{docs_version}}/book.pdf) |{% if include.examples_link %} [Examples](https://github.com/apache/activemq-artemis-examples/) |{% endif %} [Docker](https://hub.docker.com/r/apache/activemq-artemis/tags) | Java compatibility: **{{include.release.java_version}}**

{% if include.is_current_release %}
  {% capture distro_url_base %}https://www.apache.org/dyn/closer.lua?filename=activemq/activemq-artemis/{{include.release.version}}{% endcapture %}
  {% capture verify_url_base %}https://downloads.apache.org/activemq/activemq-artemis/{{include.release.version}}{% endcapture %}
  {% assign distro_url_suffix = "&action=download" %}
{% else %}
  {% capture distro_url_base %}https://archive.apache.org/dist/activemq/activemq-artemis/{{include.release.version}}{% endcapture %}
  {% assign verify_url_base = distro_url_base %}
  {% assign distro_url_suffix = "" %}
{% endif %}

tar.gz:|[apache-artemis-{{include.release.version}}-bin.tar.gz]({{distro_url_base}}/apache-artemis-{{include.release.version}}-bin.tar.gz{{distro_url_suffix}})|[SHA512]({{verify_url_base}}/apache-artemis-{{include.release.version}}-bin.tar.gz.sha512)|[ASC Signature]({{verify_url_base}}/apache-artemis-{{include.release.version}}-bin.tar.gz.asc)
ZIP:|[apache-artemis-{{include.release.version}}-bin.zip]({{distro_url_base}}/apache-artemis-{{include.release.version}}-bin.zip{{distro_url_suffix}})|[SHA512]({{verify_url_base}}/apache-artemis-{{include.release.version}}-bin.zip.sha512)|[ASC Signature]({{verify_url_base}}/apache-artemis-{{include.release.version}}-bin.zip.asc)
Source Distribution:|[apache-artemis-{{include.release.version}}-source-release.tar.gz]({{distro_url_base}}/apache-artemis-{{include.release.version}}-source-release.tar.gz{{distro_url_suffix}})|[SHA512]({{verify_url_base}}/apache-artemis-{{include.release.version}}-source-release.tar.gz.sha512)|[ASC Signature]({{verify_url_base}}/apache-artemis-{{include.release.version}}-source-release.tar.gz.asc)
