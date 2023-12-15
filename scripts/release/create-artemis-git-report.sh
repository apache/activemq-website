#!/bin/bash
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

# Setting the script to fail if anything goes wrong
set -e -u -o pipefail
shopt -s failglob

error () {
   echo ""
   echo "** ERROR: $@ **"
   echo ""
   echo "Usage: ./scripts/release/create-artemis-git-report.sh <path.to/activemq-artemis> <previous-release-version> <new-release-version>"
   echo ""
   echo "Must be run from within an activemq-website checkout root."
   echo ""
   echo "Example:"
   echo "cd <path.to>/activemq-website"
   echo "./scripts/release/create-artemis-git-report.sh ../release-work/activemq-artemis 2.30.0 2.31.0"
   echo ""
   exit 64
}

if [ ! -f serve.sh ] || [ ! -f _config.yml ]; then
    error "This script has to be run from inside the root of an activemq-website checkout"
    exit 1
fi
WEBSITE_DIR="$( pwd )"

if [ "$#" -lt 3 ]; then
  error "The Artemis checkout, prior Artemis release, and new Artemis release versions must all be specified"
  exit 1
fi

ARTEMIS_DIR="$( cd -- "$1" >/dev/null 2>&1 ; pwd -P )"
PRIOR_VERSION="$2"
NEW_VERSION="$3"

echo "The website dir: $WEBSITE_DIR"
echo "The artemis dir: $ARTEMIS_DIR"

if [ ! -d "$ARTEMIS_DIR" ] || [ ! -d "$ARTEMIS_DIR/artemis-server" ] || [ ! -f "$ARTEMIS_DIR/.asf.yaml" ]; then
    error "ERROR: The provided activemq-artemis checkout path does not point to an activemq-artemis checkout"
    exit 1
fi



rm -rf "$WEBSITE_DIR"/target/jira-git-report/

mkdir -p "$WEBSITE_DIR"/target/
cd "$WEBSITE_DIR"/target/
git clone https://github.com/rh-messaging/jira-git-report.git

cd jira-git-report
mvn compile assembly:single

cd target
java -jar jira-git-0.1.SNAPSHOT-jar-with-dependencies.jar artemis-web ${ARTEMIS_DIR} ${WEBSITE_DIR}/src/components/artemis/download/commit-report-${NEW_VERSION}.html ${PRIOR_VERSION} ${NEW_VERSION} true
