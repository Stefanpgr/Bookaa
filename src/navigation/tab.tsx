import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../screens';
import {hp, padding, wp} from '../styles/global';
import HomeSvg from '../assets/svg/home.svg';
import Bookmark from '../assets/svg/bookmark.svg';
import CartSvg from '../assets/svg/shopping-cart.svg';
import SettingsSvg from '../assets/svg/settings.svg';
const Tab = createBottomTabNavigator();

export function HomeTab() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#06070D',
        inactiveTintColor: '#9C9EA8',
        showLabel: false,
        // activeBackgroundColor: 'red',
        style: {
          //   backgroundColor: '#FFFFFF',
          paddingBottom: 5,
          alignItems: 'center',
          justifyContent: 'center',
          height: hp(70),
          position: 'absolute',
          marginBottom: 30,
          backgroundColor: '#fff',
          marginHorizontal: padding,
          borderRadius: 22,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => <HomeSvg fill={color} />,
        }}
      />
      <Tab.Screen
        name="wishlist"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => <Bookmark fill={color} />,
        }}
      />
      <Tab.Screen
        name="cart"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => <CartSvg fill={color} />,
        }}
      />
      <Tab.Screen
        name="settings"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => <SettingsSvg fill={color} />,
        }}
      />
    </Tab.Navigator>
  );
}
