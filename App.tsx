import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  Pressable,
  View,
} from "react-native";

import "./global.css";

const App: () => React.JSX.Element = () => {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = "bg-neutral-300 dark:bg-slate-900 flex-1";

  const buttonStyleAndroid = `relative m-1.5 bg-blue-500 w-[800px] h-[125px] text-white p-6 font-bold overflow-hidden focus:bg-blue-300 active:bg-green-600`;
  const buttonStyleTVOS = `relative m-3 bg-blue-500 w-[1600px] h-[250px] text-white p-12 font-bold overflow-hidden focus:bg-blue-300 active:bg-green-600`;
  const buttonStyle =
    Platform.OS === "ios" ? buttonStyleTVOS : buttonStyleAndroid;

  const buttonTextStyleTVOS = "text-white text-5xl";
  const buttonTextStyleAndroid = "text-white text-xl";
  const buttonTextStyle =
    Platform.OS === "ios" ? buttonTextStyleTVOS : buttonTextStyleAndroid;

  const ribbonStyleTVOS = "ribbonstyletvos ribbontransformtvos";
  const ribbonStyleAndroid = "ribbonstyleandroid ribbontransformandroid";
  const ribbonStyle =
    Platform.OS === "ios" ? ribbonStyleTVOS : ribbonStyleAndroid;

  const ribbonTextStyleTVOS = "text-white text-base text-4xl";
  const ribbonTextStyleAndroid = "text-white text-base text-l";
  const ribbonTextStyle =
    Platform.OS === "ios" ? ribbonTextStyleTVOS : ribbonTextStyleAndroid;

  return (
    <SafeAreaView className={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
        className={backgroundStyle}
      >
        <View>
          <Pressable
            onPress={() => console.log("onPress")}
            className={buttonStyle}
          >
            <Text className={buttonTextStyle}>Example button 1</Text>
            <View className={ribbonStyle}>
              <Text className={ribbonTextStyle}>premium</Text>
            </View>
          </Pressable>
          <Pressable className={buttonStyle}>
            <Text className={buttonTextStyle}>Example button 2</Text>
            <View className={ribbonStyle}>
              <Text className={ribbonTextStyle}>on sale</Text>
            </View>
          </Pressable>
          <Pressable className={buttonStyle}>
            <Text className={buttonTextStyle}>Example button 3</Text>
            <View className={ribbonStyle}>
              <Text className={ribbonTextStyle}>ABC</Text>
            </View>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
