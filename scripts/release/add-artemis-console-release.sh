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
   echo "Usage: ./scripts/release/add-artemis-console-release.sh <new-release-version>"
   echo ""
   echo "Must be run from within an activemq-website checkout root."
   echo ""
   echo "Example:"
   echo "cd <path.to>/activemq-website"
   echo "./scripts/release/add-artemis-console-release.sh 1.0.0"
   echo ""
   exit 64
}

if [ ! -f serve.sh ] || [ ! -f _config.yml ]; then
    error "This script has to be run from inside the root of an activemq-website checkout"
    exit 1
fi
WEBSITE_DIR="$( pwd )"

if [ "$#" -lt 1 ]; then
  error "The new Artemis Console release version must be specified"
  exit 1
fi

NEW_VERSION="$1"

./scripts/release/create-artemis-console-release-file $NEW_VERSION

./scripts/release/create-artemis-console-release-notes $NEW_VERSION

echo ""
echo "Files created for adding release. See output above for details."
echo "Update the artemis_console list within the src/_data/current_releases.yml file if needed."
echo "Check over git status, add remaining files, commit and push."
