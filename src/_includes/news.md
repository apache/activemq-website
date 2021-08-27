{% assign releases = site.documents %}
{% assign releases = releases | sort: "release_date" | reverse %}

    <h3>Recent Releases</h3>
    <div class="row align-middle">

{% for release in releases %}
    <div class="col-lg-4 col-md-auto">
        <div class="card card-orange">
            <div class="card-body">
                {% if release.collection contains "artemis" %}
                    <h5 class="card-title text-blue">Artemis {{release.version}} Release</h5>
                    <a style="margin-top: 10px" href="./components/artemis/download/past_releases" class="btn btn-secondary float-right">Release<i class="fa-download fa btn-icon"></i></a>
                {% else %}
                    <h5 class="card-title text-blue">{{release.title}}</h5>
                    <a style="margin-top: 10px" href="{{release.url}}" class="btn btn-secondary float-right">Release<i class="fa-download fa btn-icon"></i></a>
                {% endif %}
                <p class="align-text-bottom text-left font-italic">{{release.release_date | date_to_string: "ordinal", "US" }}</p>
            </div>
        </div>
    </div>
    {% if forloop.index > 2 %}
        {% break %}
    {% endif %}
{% endfor %}
        
    </div>

