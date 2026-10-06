---
title: Creating ActiveMQ-CPP Distributions
layout: cms-page
---

### Background

Apache mirrors everything under `/www/www.apache.org/dist`. Release archives go under `activemq/activemq-cpp/source/`. Allow ~24 hours for mirrors to sync before announcing.

Download links use the Apache CGI mirror script:

```
http://www.apache.org/dyn/closer.cgi/activemq/activemq-cpp/source/activemq-cpp-X.Y-src.zip
```

### Creating a Distribution (step-by-step)

1. Create a pre-release download page with a disclaimer and temporary link.
2. Call a vote on the dev list (`[VOTE]` in subject). Wait 3 days; proceed with ≥3 +1s and no -1s.
3. Create source archives (`.zip`, `.tar.gz`). Remove `.svn` directories first:
   ```bash
   rm -rf `find . -type d -name .svn`
   ```
4. Sign the archives:
   ```bash
   gpg --armor --output foo.tar.gz.asc --detach-sig foo.tar.gz
   gpg --armor --output foo.zip.asc --detach-sig foo.zip
   ```
5. Copy archives to `/www/www.apache.org/dist/activemq/activemq-cpp/source/` on the Apache server.
6. Wait 24 hours for mirrors to sync.
7. Update download page links to use the CGI mirror script path.
8. Generate Doxygen API docs and place under `/www/activemq.apache.org/cms/api_docs/`.
9. Announce on the `dev` and `users` mailing lists.
