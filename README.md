# NativeWind Example (modified for TV)

This project uses

- the [React Native TV fork](https://github.com/react-native-tvos/react-native-tvos), which supports both phone (Android and iOS) and TV (Android TV and Apple TV) targets
- the [React Native TV config plugin](https://github.com/react-native-tvos/config-tv/tree/main/packages/config-tv) to allow Expo prebuild to modify the project's native files for TV builds
- the [NativeWind](https://www.nativewind.dev/) package which lets you use Tailwind CSS in react-native.

## 🚀 How to use

- `cd` into the project

```sh
yarn
yarn prebuild # Executes Expo prebuild with TV modifications
yarn start:nativewind # Starts a Nativewind compiler to recompile the CSS whenever it changes
```

In a separate window:

```sh
yarn ios # Build and run for Apple TV
yarn android # Build and run for Android TV, requires a running Android TV emulator
```

## 📝 Notes

The UI is derived from [this Tailwind CSS example](https://tailwindcomponents.com/component/premium-banner-around-button). It includes custom CSS (`ribbon.css`). The `yarn start:nativewind` script has been modified to automatically run the command below to convert the custom CSS into a React Native stylesheet:

```sh
npx tailwindcss -i ribbon.css --postcss postcss.config.js
```

See the [NativeWind CLI doc](https://www.nativewind.dev/guides/cli-native) for more information on this.

In `App.tsx`, note that the button style includes `focus:bg-blue-300`. On TV, the `focus` prefix causes the style to be applied to controls when `onFocus()` is invoked, and the style is removed when `onBlur()` is invoked.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/learn): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.
- [Building Expo apps for TV](https://docs.expo.dev/guides/building-for-tv/)

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
