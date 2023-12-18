#
# Licensed to the Apache Software Foundation (ASF) under one
# or more contributor license agreements.  See the NOTICE file
# distributed with this work for additional information
# regarding copyright ownership.  The ASF licenses this file
# to you under the Apache License, Version 2.0 (the
# "License"); you may not use this file except in compliance
# with the License.  You may obtain a copy of the License at
#
#   http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing,
# software distributed under the License is distributed on an
# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
# KIND, either express or implied.  See the License for the
# specific language governing permissions and limitations
# under the License.
#

import urllib
import yaml
import codecs as _codecs

from xml.sax.saxutils import escape as escape_html

def write_utf8(file, string):
    with _codecs.open(file, encoding="utf-8", mode="w") as f:
        f.write(string)

    return file


def render_release_notes(project, release):
    issues = _fetch_issues(project, release)
    lines = list()

    bugs = _render_issues(issues, "Bug")
    new_features = _render_issues(issues, "New Feature")
    improvements = _render_issues(issues, "Improvement")
    tests = _render_issues(issues, "Test")
    tasks = _render_issues(issues, "Task")
    dependencies = _render_issues(issues, "Dependency upgrade")

    if bugs is not None:
        lines.append("\n## Bugs Fixed\n")
        lines.append(bugs)

    if new_features is not None:
        lines.append("\n## New Features\n")
        lines.append(new_features)

    if improvements is not None:
        lines.append("\n## Improvements\n")
        lines.append(improvements)

    if tests is not None:
        lines.append("\n## Tests\n")
        lines.append(tests)

    if tasks is not None:
        lines.append("\n## Tasks\n")
        lines.append(tasks)

    if dependencies is not None:
        lines.append("\n## Dependency Upgrades\n")
        lines.append(dependencies)

    return "\n".join(lines)

def _fetch_issues(project, release):
    query = list()

    query.append("project = '{}'".format(project))
    query.append("fixVersion = '{}'".format(release))
    query.append("resolution = 'fixed'")

    query = " and ".join(query)
    query = "{} order by key asc".format(query)

    page_size = 100

    params = {
        "jql": query,
        "fields": "summary,issuetype",
        "maxResults": page_size,
        }

    issues = list()

    for i in range(100):
        params["startAt"] = i * page_size

        url = "https://issues.apache.org/jira/rest/api/2/search?{}".format(urllib.parse.urlencode(params))
        filename, headers = urllib.request.urlretrieve(url)

        with open(filename) as f:
            data = yaml.load(f, Loader=yaml.Loader)

        issues.extend(data["issues"])

        if len(issues) >= int(data["total"]):
            break

    return issues

def _render_issues(issues, *types):
    filtered_issues = [x for x in issues
                       if x["fields"]["issuetype"]["name"] in types]

    if not filtered_issues:
        return None

    lines = list()

    for issue in filtered_issues:
        key = escape_html(issue["key"])
        url = "https://issues.apache.org/jira/browse/{}".format(key)
        summary = escape_html(issue["fields"]["summary"])

        lines.append("* [{}]({}) - {}".format(key, url, summary))

    return "\n".join(lines)

