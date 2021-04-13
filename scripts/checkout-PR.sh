#!/bin/sh
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
set -e

# this script is a helper that will checkout the PR Branch

ACTIVEMQWEB_USER_REMOTE_NAME=${ACTIVEMQWEB_USER_REMOTE_NAME:-origin}
ACTIVEMQWEB_APACHE_REMOTE_NAME=${ACTIVEMQWEB_APACHE_REMOTE_NAME:-apache}
ACTIVEMQWEB_GITHUB_REMOTE_NAME=${ACTIVEMQWEB_GITHUB_REMOTE_NAME:-upstream}

git fetch $ACTIVEMQWEB_USER_REMOTE_NAME
git fetch $ACTIVEMQWEB_APACHE_REMOTE_NAME
git fetch $ACTIVEMQWEB_GITHUB_REMOTE_NAME

git checkout $ACTIVEMQWEB_GITHUB_REMOTE_NAME/pr/$1 -B $1

echo "\ndo your own rebase by typing: git pull --rebase $ACTIVEMQWEB_APACHE_REMOTE_NAME main"
