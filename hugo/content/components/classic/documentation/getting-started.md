---
title: Getting Started with ActiveMQ
layout: classic-doc
---

This document describes how to install and configure ActiveMQ Classic 5.x for both Unix and Windows platforms.

### Pre-Installation Requirements

**Hardware:** ~60 MB disk space for binary distribution; ~300 MB for source distribution.

**Java:** JRE 1.8 or greater (1.7 for ≤5.15.0, 1.6 for ≤5.10.0). `JAVA_HOME` must be set.

### Installation on Windows

1. Download the latest release from the [Download](../../download/) page (`apache-activemq-x.x.x-bin.zip`).
2. Extract the ZIP to a directory of your choice.
3. Start the broker:
   ```
   cd [activemq_install_dir]
   bin\activemq start
   ```

### Installation on Unix

1. Download the tarball from the [Download](../../download/) page.
2. Extract:
   ```
   tar zxvf apache-activemq-x.x.x-bin.tar.gz
   ```
3. Start the broker:
   ```
   cd [activemq_install_dir]/bin
   ./activemq start
   ```

On macOS with Homebrew:
```
brew install apache-activemq
```

### Testing the Installation

- Open the admin console at [http://127.0.0.1:8161/admin/](http://127.0.0.1:8161/admin/) (login: admin/admin).
- Check the default port: `netstat -nl | grep 61616`

### Stopping ActiveMQ Classic

Press `CTRL-C` in the console, or on Unix:
```
cd [activemq_install_dir]/bin
./activemq stop
```

### Configuring ActiveMQ Classic

Configure the broker via an [XML Configuration](xml-configuration) file or the [Broker Configuration URI](broker-configuration-uri). See [Configuring Transports](configuring-transports) for connection options.
