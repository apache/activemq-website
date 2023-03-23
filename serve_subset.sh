set -e
bundle install
# Not using --incremental as it doesnt interact well with the
# metadata based generation used in release process updates
# and isnt dramatically faster regardless.
echo "=========================== WARNING ==============================="
echo "Various content excluded for perf, *including the javadocs*."
echo "See _config_subset_excludes.yml for the full list."
echo ""
echo "Run a full serve.sh/build.sh process to test changes in those areas."
echo "==================================================================="
bundle exec jekyll serve --config _config.yml,_config_subset_excludes.yml --livereload
set +e

