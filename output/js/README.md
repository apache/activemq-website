The following are symbolic links:

 - `fontawesome-all.min.js`
 - `jquery.slim.min.js`

These files are referenced from the HTML, and they point to specific versions. To upgrade you simply need to add a new version and updated the symbolic link.

Where necessary (e.g. in `_includes/head.html`) you'll also need to update the `integrity` attribute. Generate a new hash using this command:
```shell
openssl dgst -sha384 -binary FILE.js | openssl base64 -A
```