import React from 'react';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { withLayoutContext } from 'expo-router';
import { createNativeBottomTabNavigator } from 'react-native-bottom-tabs/react-navigation';

export const Tabs = withLayoutContext(
  createNativeBottomTabNavigator().Navigator,
);

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  return (
    <Tabs
      tabBarActiveTintColor={colors.tabIconSelected}
      tabBarInactiveTintColor={colors.tabIconDefault}
      rippleColor={colors.tint}
      labeled={true}
      barTintColor={colors.background}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: () => require('../../assets/images/react-logo.png'),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Two',
        }}
      />
      <Tabs.Screen
        name="tvdemo"
        options={{
          title: 'TV styling demo',
        }}
      />
    </Tabs>
  );
}
