import { Platform } from 'react-native';
import { withLayoutContext } from 'expo-router';
import { createNativeBottomTabNavigator } from 'react-native-bottom-tabs/react-navigation';

const { Navigator } = createNativeBottomTabNavigator();

export const Tabs = withLayoutContext<any, typeof Navigator, any, any>(
  Navigator,
);

export default function TabLayout() {
  return (
    <Tabs sidebarAdaptable>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: () =>
            Platform.OS === 'ios' ? { sfSymbol: 'house' } : null,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Two',
          tabBarIcon: () =>
            Platform.OS === 'ios' ? { sfSymbol: 'alt' } : null,
        }}
      />
      <Tabs.Screen
        name="tvdemo"
        options={{
          title: 'TV Demo',
          tabBarIcon: () => (Platform.OS === 'ios' ? { sfSymbol: 'tv' } : null),
        }}
      />
    </Tabs>
  );
}
