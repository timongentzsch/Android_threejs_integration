# Android three.js integration

![Screenshot](screenshot.png)

An Android Studio project that allows end-to-end development of a [three.js](https://threejs.org) projects via the [nodejs](https://nodejs.org/en/) framework including efficient bundling of dependencies and assets via [webpack](https://webpack.js.org).
This sample app loads in a .gltf model via the [WebViewAssetLoader](https://developer.android.com/reference/androidx/webkit/WebViewAssetLoader) and opens a fullscreen webview Activity.

## Dependencies

Android Studio dependencies can be found in [build.gradle](app/build.gradle). In addition to that:
### Nodejs / NPM package manager

**Ubuntu 20.04:** `sudo apt install nodejs npm`
    
**MacOS via homebrew:** `brew install node`
### NPM modules

Located in [package.json](app/src/main/assets/nodejs_src/package.json) and automatically installed during android studios first build process.
- webpack
- babel
- threejs
- stats-js

## Instructions

1) Clone this repo: `https://github.com/timongentzsch/Android_threejs_integration.git`
2) Open in Android Studio and build

> **_NOTE:_**  Current implementation of example uses stats-js to benchmark the render loop
> 
## Going further

- The asset folder contains the src of the nodejs project as well as the optimized/bundled outputs of webpack in build. The src folder is excluded from the apk in the build process to keep the app size minimal.
In order to bundle the assets from webpack into the build folder, all assets have to be imported using the import command:

```
import MODEL from './assets/DamagedHelmet.gltf';
```

- HtmlWebpackPlugin takes care of creating the `index.html` landing page. To customize this [webpack.config.js](app/src/main/assets/nodejs_src/webpack.config.js) needs to be edited