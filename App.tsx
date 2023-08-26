/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  Pressable,
  View,
} from 'react-native';

import './nativewind-output';
import {styled} from 'nativewind';

const StyledPressable = styled(Pressable);
const StyledText = styled(Text);
const StyledView = styled(View);

const App: () => React.JSX.Element = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = 'bg-neutral-300 dark:bg-slate-900 flex-1';
  const buttonStyle =
    'relative m-1.5 bg-blue-500 w-[500px] text-white text-xl p-6 text-2xl font-bold overflow-hidden focus:bg-blue-300';
  const buttonTextStyle = 'text-white text-xl';
  const ribbonStyle =
    'ribbon bg-red-500 p-base h-[30px] align-center items-center';
  const ribbonTextStyle = 'text-white text-base';

  return (
    <SafeAreaView className={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
        className={backgroundStyle}>
        <StyledView>
          <StyledPressable
            onPress={() => console.log('onPress')}
            className={buttonStyle}>
            <StyledText className={buttonTextStyle}>Example button</StyledText>
            <StyledView className={ribbonStyle}>
              <StyledText className={ribbonTextStyle}>premium</StyledText>
            </StyledView>
          </StyledPressable>
          <StyledPressable className={buttonStyle}>
            <StyledText className={buttonTextStyle}>Example button</StyledText>
            <StyledView className={ribbonStyle}>
              <StyledText className={ribbonTextStyle}>on sale</StyledText>
            </StyledView>
          </StyledPressable>
          <StyledPressable className={buttonStyle}>
            <StyledText className={buttonTextStyle}>Example button</StyledText>
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
