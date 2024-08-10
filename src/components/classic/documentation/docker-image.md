---
layout: default_md
title: Using ActiveMQ Classic with Docker
title-class: page-title-classic
type: classic
---

You can also get started with ActiveMQ Classic Docker image in no time. The image is hosted [here](https://hub.docker.com/r/apache/activemq-classic/tags)

Step 1. Pull the image
```
docker pull apache/activemq-classic:latest
```

Step 2. Run the image
```
docker run -p 61616:61616 -p 8161:8161 apache/activemq-classic:latest 
```
Note: Make sure you expose the correct port using `-p`. The command above only expose port 8161 for the web console and port 61616 for the Openwire connection