# CryptoDemo
Ionic app used to demonstrate ways to store private keys.

## Installation
Install the app by running (remember to set files at the end of this document):
```
git clone https://github.com/thomaslian/cryptoDemo.git
cd cryptoDemo
npm install -g @ionic/cli native-run cordova-res
npm i
```
## Live Demo
*Insert live demo*

## Try app
### In browser
```bash
ionic serve -l
```

### On a device
```bash
ionic capacitor run android
```

### Create a APK file
```bash
ionic capacitor build android --prod
```

### On an emulator

```bash
ionic capacitor emulate ios --target="iPhone-8"
ionic capacitor emulate android --target="Pixel_3a_API_30"
```

## Android Play store Deployment
### Generate release build
```bash
ionic capacitor build android --prod --release
```

## File setup
### /src/environments/environment.ts
```js
export const environment = {
  production: false,
  firebase: {
    apiKey: 'FIREBASE API KEY',
    authDomain: 'FIREBASE AUTH DOMAIN',
    projectId: 'FIREBASE PROJECT ID',
    storageBucket: 'FIREBASE STORAGE BUCKET',
    messagingSenderId: 'FIREBASE MESSAGING SENDER ID',
    appId: 'FIREBASE APP ID'
  }
};
```

###  /src/environments/environment.prod.ts
```js
export const environment = {
  production: true,
};
```