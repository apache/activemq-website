---
title: Building ActiveMQ-CPP
layout: cms-page
---

### Dependencies

**libuuid** — Required on \*nix. Part of the `e2fsprogs` package.
- Fedora/RHEL: `e2fsprogs`, `e2fsprogs-devel`
- Debian/Ubuntu: `uuid`, `uuid-dev`

**CppUnit** — Required to build and run tests. See [cppunit.sourceforge.net](http://cppunit.sourceforge.net/cppunit-wiki).

**APR** — Required for ActiveMQ-CPP 2.2+. See [apr.apache.org](http://apr.apache.org).

### Building on \*nix

Required tools: `autoconf >= 2.59`, `automake >= 1.9.6`, `libtool >= 1.5.22`.

```bash
./autogen.sh
./configure
make
```

For build options: `./configure --help`

#### Running Tests

```bash
make check
```

#### Integration Tests (requires a running broker)

```bash
cd src/test-integration
./activemq-test-integration
```

### Building on Windows (MSVC)

The project supports MSVC. Ensure APR and CppUnit are installed and their paths are referenced in the project settings. For MSVC < 2008, install the Platform SDK and set `INCLUDE` and `LIB` environment variables accordingly.
