# NativeWindTV

Demo app using [NativeWind](https://nativewind.dev) for styling.

Created with these steps:

```sh
create-react-native-app NativeWindTV --template https://github.com/react-native-tvos/react-native-template-typescript-tv/tree/tv-release-0.72.0 --template-path template
cd NativeWindTV
yarn add nativewind
yarn add --dev tailwindcss@3.3.2
# Configure NativeWind as per instructions in https://www.nativewind.dev/quick-starts/react-native-cli
```

To run the app, clone the repo, change to the app directory, and

```sh
yarn
# Apple TV
yarn tvos
# Android TV
yarn android
```

The UI is derived from [this Tailwind CSS example](https://tailwindcomponents.com/component/premium-banner-around-button). It includes custom CSS (`ribbon.css`). If you make changes to the CSS, you must execute

```sh
npx tailwindcss -i input.css --postcss postcss.config.js
```

to regenerate the `nativewind-output.js` file with the StyleSheets used by the app.  See the [NativeWind CLI doc](https://www.nativewind.dev/guides/cli-native) for more information on this. 
