import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  Pressable,
  View,
} from 'react-native';
import { styled } from 'nativewind';

import './nativewind-output';

const StyledPressable = styled(Pressable);
const StyledText = styled(Text);
const StyledView = styled(View);

const App: () => React.JSX.Element = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = 'bg-neutral-300 dark:bg-slate-900 flex-1';

  const buttonStyleAndroid = `relative m-1.5 bg-blue-500 w-[800px] h-[125px] text-white p-6 font-bold overflow-hidden focus:bg-blue-300`;
  const buttonStyleTVOS = `relative m-3 bg-blue-500 w-[1600px] h-[250px] text-white p-12 font-bold overflow-hidden focus:bg-blue-300`;
  const buttonStyle =
    Platform.OS === 'ios' ? buttonStyleTVOS : buttonStyleAndroid;

  const buttonTextStyleTVOS = 'text-white text-5xl';
  const buttonTextStyleAndroid = 'text-white text-xl';
  const buttonTextStyle =
    Platform.OS === 'ios' ? buttonTextStyleTVOS : buttonTextStyleAndroid;

  const ribbonStyleTVOS = 'ribbonstyletvos ribbontransformtvos';
  const ribbonStyleAndroid = 'ribbonstyleandroid ribbontransformandroid';
  const ribbonStyle =
    Platform.OS === 'ios' ? ribbonStyleTVOS : ribbonStyleAndroid;

  const ribbonTextStyleTVOS = 'text-white text-base text-4xl';
  const ribbonTextStyleAndroid = 'text-white text-base text-l';
  const ribbonTextStyle =
    Platform.OS === 'ios' ? ribbonTextStyleTVOS : ribbonTextStyleAndroid;

  return (
    <SafeAreaView className={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
        className={backgroundStyle}
      >
        <StyledView>
          <StyledPressable
            onPress={() => console.log('onPress')}
            className={buttonStyle}
          >
            <StyledText className={buttonTextStyle}>
              Example button 1
            </StyledText>
            <StyledView className={ribbonStyle}>
              <StyledText className={ribbonTextStyle}>premium</StyledText>
            </StyledView>
          </StyledPressable>
          <StyledPressable className={buttonStyle}>
            <StyledText className={buttonTextStyle}>
              Example button 2
            </StyledText>
            <StyledView className={ribbonStyle}>
              <StyledText className={ribbonTextStyle}>on sale</StyledText>
            </StyledView>
          </StyledPressable>
          <StyledPressable className={buttonStyle}>
            <StyledText className={buttonTextStyle}>
              Example button 3
            </StyledText>
            <StyledView className={ribbonStyle}>
              <StyledText className={ribbonTextStyle}>ABC</StyledText>
            </StyledView>
          </StyledPressable>
        </StyledView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
