import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Platform, Pressable } from 'react-native';
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';

const scale = Platform.OS === 'ios' ? 2 : 1;

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
/*
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return (
    <FontAwesome size={30 * scale} style={{ marginBottom: -3 }} {...props} />
  );
}
 */

const tabBarButton = (props: BottomTabBarButtonProps) => {
  const style: any = props.style ?? {};
  return (
    <Pressable
      {...props}
      style={({ pressed, focused }) => [
        style,
        {
          opacity: pressed || focused ? 0.6 : 1.0,
          color: focused ? 'green' : undefined,
        },
      ]}
    />
  );
};

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
        tabBarButton,
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
          // tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <Tabs.Screen
        name="tvdemo"
        options={{
          title: 'TV Demo',
          // tabBarIcon: ({ color }) => <TabBarIcon name="tv" color={color} />,
        }}
      />
    </Tabs>
  );
}
