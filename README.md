## react-app-loader-webpart

Permite cargar un css y varios scripts en una webpart  de Sharepoint online y Sharepoint onpremise.


### Building the code

```bash
git clone the repo
npm i
npm i -g gulp
gulp
```

This package produces the following:

* lib/* - intermediate-stage commonjs build artifacts
* dist/* - the bundled script, along with other resources
* deploy/* - all resources which should be uploaded to a CDN.


..