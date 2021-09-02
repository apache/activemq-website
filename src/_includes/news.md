{% assign releases = site.documents %} {% assign releases = releases | sort: "release_date" | reverse %}
 <div class="row align-middle">
{% assign i = 0 %}
<div class="card-group">
{% for release in releases %} {% if i > 2 %} {% break %} {% endif %}
<div class="card card-grey-small">
<div class="card-body ml-0 p-2">
{% if release.collection contains "artemis" %}
    <h6 class="card-title"><a class="text-blue" href="{{site.baseurl}}/components/artemis/download/">{{release.title}}</a></h6>
{% else %}
    <h6 class="card-title"><a class="text-blue" href="{{release.url}}">{{release.title}}</a></h6>
{% endif %}

{% if release.collection contains "artemis" %}
    {{release.shortDescription }}<a style="display: unset;" class="nav-link pl-0 ml-0" href="{{site.baseurl}}/components/artemis/download/">...more</a>
{% else %}
    {{release.shortDescription }}<a style="display: unset;" class="nav-link pl-0 ml-0" href="{{release.url}}">...more</a>
{% endif %}
    <p class="small text-muted text-right font-italic mb-0">{{release.release_date | date_to_string: "ordinal", "US" }}</p>
</div>
</div>
{% assign i = i | plus:1 %}
{% endfor %}
</div>
</div>
