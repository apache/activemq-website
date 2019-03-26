set -e
echo "Building ActiveMQ site (output is in ./site-content) ..."
jekyll build -s ./src/ -d ./site-content
COMMIT_HASH=`git rev-parse HEAD`

echo "Build of ActiveMQ site successful."
git checkout asf-site
rm -rf content
mv site-content content
git add content

echo "Commiting changes to asf-site branch from master branch."
git commit --author "ActiveMQ Dev <dev@activemq.apache.org>" -m "from $COMMIT_HASH"

echo "-----------------------------------------------------"
echo "SITE BUILD SUCCESSFUL. You are now on the asf-site branch."
echo "Run git push origin asf-site to update the live site."
set +e

