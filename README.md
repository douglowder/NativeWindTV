# NativeWindTV

```sh
create-react-native-app NativeWindTV --template https://github.com/react-native-tvos/react-native-template-typescript-tv/tree/tv-release-0.72.0 --template-path template
cd NativeWindTV
yarn add nativewind
yarn add --dev tailwindcss@3.3.2
# Configure NativeWind as per instructions in https://www.nativewind.dev/quick-starts/react-native-cli
yarn tvos
```

The app is a modified version of the new app screen, with an added test button that has a blue background when focused on TV.