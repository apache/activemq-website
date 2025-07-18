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
   echo "Usage: ./scripts/release/update-artemis-docs.sh <path.to/activemq-artemis> <previous-release-version> <new-release-version>"
   echo ""
   echo "Must be run from within an activemq-website checkout root."
   echo ""
   echo "Example:"
   echo "cd <path.to>/activemq-website"
   echo "./scripts/release/update-artemis-docs.sh ../release-work/activemq-artemis 2.30.0 2.31.0"
   echo ""
   exit 64
}

if [ ! -f serve.sh ] || [ ! -f _config.yml ]; then
    error "This script has to be run from inside the root of an activemq-website checkout"
    exit 1
fi
WEBSITE_DIR="$( pwd )"

if [ "$#" -lt 3 ]; then
  error "The Artemis release process checkout, prior Artemis release, and new Artemis release versions must all be specified"
  exit 1
fi

ARTEMIS_DIR="$( cd -- "$1" >/dev/null 2>&1 ; pwd -P )"
PRIOR_VERSION="$2"
NEW_VERSION="$3"

if [ ! -d "$ARTEMIS_DIR" ] || [ ! -d "$ARTEMIS_DIR/artemis-server" ] || [ ! -f "$ARTEMIS_DIR/.asf.yaml" ]; then
    error "ERROR: The provided activemq-artemis release process path does not point to an activemq-artemis checkout"
    exit 1
fi

if [ ! -d "$ARTEMIS_DIR/target" ] || [ ! -d "$ARTEMIS_DIR/target/checkout" ]; then
    error "ERROR: The provided activemq-artemis release path does not contain the release process target checkout: $ARTEMIS_DIR/target/checkout"
    exit 1
fi

RELEASE_DIR="$ARTEMIS_DIR/target/checkout"

LATEST_DOCS=$WEBSITE_DIR/src/components/artemis/documentation/latest/
PRIOR_DOCS=$WEBSITE_DIR/src/components/artemis/documentation/$PRIOR_VERSION/

LATEST_JAVADOCS=$WEBSITE_DIR/src/components/artemis/documentation/javadocs/javadoc-latest/
NEW_DOCS=$RELEASE_DIR/artemis-website/target/classes/user-manual/
NEW_JAVADOCS=$RELEASE_DIR/artemis-website/target/reports/apidocs/



echo "Moving previous release docs, from $LATEST_DOCS to $PRIOR_DOCS"
mv $LATEST_DOCS $PRIOR_DOCS

echo "Copying new release docs, from $NEW_DOCS to $LATEST_DOCS"
cp -aR $NEW_DOCS. $LATEST_DOCS

echo "Clearing previous release javadocs, from $LATEST_JAVADOCS"
rm -rf $LATEST_JAVADOCS

echo "Copying new release javadocs, from $NEW_JAVADOCS to $LATEST_JAVADOCS"
cp -aR $NEW_JAVADOCS. $LATEST_JAVADOCS

git add $LATEST_DOCS $PRIOR_DOCS $LATEST_JAVADOCS

echo "Doc updates complete, check over git status"
