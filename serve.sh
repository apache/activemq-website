set -e
bundle install
# Not using --incremental as it doesnt interact well with the
# metadata based generation used in release process updates
# and isnt dramatically faster regardless.
bundle exec jekyll serve --livereload
set +e

