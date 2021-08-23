set -e
bundle install
bundle exec jekyll serve --incremental --livereload
set +e

