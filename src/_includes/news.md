{% assign releases = site.documents %} {% assign releases = releases | sort: "release_date" | reverse %}

    <h3><a href="/news">News</a></h3>
    <div class="row align-middle">

{% assign i = 0 %}
<div class="card-group">
{% for release in releases %} {% if i > 2 %} {% break %} {% endif %}
<div class="card card-orange">
<div class="card-body" style="padding-top: 0; padding-bottom: 0;">
    <h5 class="card-title text-blue">{{release.title}}</h5>
    <p>{{release.shortDescription }}</p>
</div>
<div class="card-footer align-middle align-items-center">
    <a href="{{release.url}}" class="btn btn-secondary float-right">Read More</a>
    <small class="text-muted text-left font-italic align-middle">{{release.release_date | date_to_string: "ordinal", "US" }}</small>
</div>
</div>
{% assign i = i | plus:1 %}
{% endfor %}
</div>

