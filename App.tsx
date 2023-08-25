/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  Pressable,
  View,
} from 'react-native';

import {
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {styled} from 'nativewind';

const StyledPressable = styled(Pressable);

const Section = ({children, title}): Node => {
  return (
    <View className="mt-8 px-2">
      <Text className="text-2xl text-black dark:text-white">{title}</Text>
      <Text className="mt-2 text-lg text-black dark:text-white">
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = 'bg-neutral-300 dark:bg-slate-900';

  return (
    <SafeAreaView className={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        className={backgroundStyle}>
        <Header />
        <View className="bg-white dark:bg-black">
          <StyledPressable
            onPress={() => {}}
            className={`
              flex-1
              justify-center
              items-center
              text-2xl
              text-black
              dark:text-white
              focus:bg-blue-200
            `}>
            <Text className="font-bold">Test button</Text>
          </StyledPressable>
          <Section title="Step One">
            Edit <Text className="font-bold">App.js</Text> to change this screen
            and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
