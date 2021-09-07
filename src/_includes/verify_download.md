It is essential that you verify the integrity of the downloaded files using the PGP signature or SHA checksum.

The PGP signatures can be verified using PGP or GPG. Begin by following these steps:

1.  Download the [KEYS](https://downloads.apache.org/activemq/KEYS) file.
2.  Download the .asc signature for the relevant distribution file.
3.  Verify the signature using one the following sets of commands, depending on your use of PGP or GPG:
    ```
    $ gpg --import KEYS
    $ gpg --verify <file-name>.asc <file-name>

    $ pgpk -a KEYS
    $ pgpv <file-name>.asc

    $ pgp -ka KEYS
    $ pgp <file-name>.asc
    ```

Alternatively you can \[also\] verify the SHA-512 checksum of the file. For example, using the `sha512sum` command:

```
$ sha512sum -c <file-name>.sha512
```
