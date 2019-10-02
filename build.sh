set -e
echo "Building ActiveMQ site (output is in ./site-content) ..."
jekyll build -s ./src/ -d ./site-content
COMMIT_HASH=`git rev-parse HEAD`
COMMIT_MESSAGE=`git show -s --format=%s HEAD`

git remote add github-upstream https://github.com/apache/activemq-website.git

echo "Build of ActiveMQ site successful."
git fetch github-upstream
git checkout github-upstream/asf-site -B asf-site
rm -rf content
mv site-content content
git add content
git remote remove github-upstream

echo "Commiting changes to asf-site branch from master branch."
git commit --author "ActiveMQ Dev <dev@activemq.apache.org>" -m "$COMMIT_MESSAGE / built from commit $COMMIT_HASH"

echo "-----------------------------------------------------"
echo "SITE BUILD SUCCESSFUL. You are now on the asf-site branch."
echo "Run git push origin asf-site to update the live site."
set +e

