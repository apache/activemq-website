set -e
bundle install
# Not using --incremental as it doesnt interact well with the
# metadata based generation used in release process updates
# and isnt dramatically faster regardless.
echo "=========================== WARNING ==============================="
echo "Various content excluded for perf, see _config_subset_excludes.yml."
echo "Run the full serve/build process to test changes in those areas."
echo "==================================================================="
bundle exec jekyll serve --config _config.yml,_config_subset_excludes.yml --livereload
set +e

