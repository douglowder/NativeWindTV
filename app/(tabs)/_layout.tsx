import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link } from 'expo-router';
import { Platform, Pressable } from 'react-native';
import { withLayoutContext } from 'expo-router';
import { createNativeBottomTabNavigator } from 'react-native-bottom-tabs/react-navigation';

export const Tabs = withLayoutContext(
  createNativeBottomTabNavigator().Navigator,
);

const scale = Platform.OS === 'ios' ? 2 : 1;

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        headerRight: () => (
          <Link href="/modal" asChild>
            <Pressable>
              {({ pressed, focused }) => (
                <FontAwesome
                  name="info-circle"
                  size={25 * scale}
                  style={{
                    marginRight: 15 * scale,
                    backgroundColor: focused ? '#ddddff' : undefined,
                    opacity: pressed ? 0.5 : 1,
                  }}
                />
              )}
            </Pressable>
          </Link>
        ),
        tabBarPosition: 'top',
        tabBarLabelStyle: {
          fontSize: 20 * scale,
          lineHeight: 40 * scale,
        },
        tabBarIcon: () => null,
        tabBarIconStyle: {
          width: 50 * scale,
          height: 50 * scale,
        },
        tabBarStyle: {
          height: 100 * scale,
        },
        tabBarItemStyle: {
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: -10 * scale,
        },
        tabBarActiveBackgroundColor: '#ccccff',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
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
          title: 'TV Demo',
        }}
      />
    </Tabs>
  );
}
