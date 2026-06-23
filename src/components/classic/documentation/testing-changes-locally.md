---
layout: default_md
title: Testing changes locally 
title-class: page-title-classic
type: classic
---

[Developers](developers) > [Testing changes locally](testing-changes-locally)

Testing changes locally
-----------------------------

### Broker
After running existing or newly added unit tests, if you want to do integration testing on your change, you can [build](building) the repo locally to generate the release bundle and then unzip the bundle to test broker behaviour. 
```
# At root directory
$ mvn -Dtest=false -DfailIfNoTests=false clean install 
```
If the build was successful. You will see a message similar to the one below
```
[INFO] Installing /Users/xxx/amzn/personal_workspace/activemq/assembly/target/apache-activemq-6.2.0-SNAPSHOT-bin.zip to /Users/xxx/.m2/repository/org/apache/activemq/apache-activemq/6.2.0-SNAPSHOT/apache-activemq-6.2.0-SNAPSHOT-bin.zip
```
Unzip that target and start the ActiveMQ broker which contains your change
```
$ cd /Users/xxx/.m2/repository/org/apache/activemq/apache-activemq/6.2.0-SNAPSHOT
$ unzip apache-activemq-6.2.0-SNAPSHOT-bin.zip
$ cd apache-activemq-6.2.0-SNAPSHOT
$ ./bin/activemq console
```

### ActiveMQ client

Testing the client library is a bit trickier because you will need a test client (that imports your newly built client library). There are many ways to do it, overall the idea is:

- Build the activemq-client pakcage
- Copy the output jar into your test client or local mvn repository
- Run your test client

You can take a look at this [sample test client](https://github.com/kenliao94/activemq-client-test) and follow its README.