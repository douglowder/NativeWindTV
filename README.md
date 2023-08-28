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

The UI is derived from [this Tailwind CSS example](https://tailwindcomponents.com/component/premium-banner-around-button). It includes custom CSS (`ribbon.css`). The `yarn start` script has been modified to automatically run the command below to convert the custom CSS into a React Native stylesheet (requires that the NPM package `concurrently` is installed):

```sh
npx tailwindcss -i ribbon.css --postcss postcss.config.js
```

See the [NativeWind CLI doc](https://www.nativewind.dev/guides/cli-native) for more information on this.

In `App.tsx`, note that the button style includes `focus:bg-blue-300`. On TV, the `focus` prefix causes the style to be applied to controls when `onFocus()` is invoked, and the style is removed when `onBlur()` is invoked.
