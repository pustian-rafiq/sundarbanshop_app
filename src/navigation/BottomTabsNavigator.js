import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet} from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import CartScreen from '../screens/cart/CartScreen';
import HomeScreen from '../screens/home/HomeScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';

const Tab = createBottomTabNavigator();

const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarLabelStyle: {color: '#008E97'},
          headerShow: false,
          tabBarIcon: ({focused, color, size}) =>
            focused ? (
              <AntDesignIcon name="home" size={size} color="#008E97" />
            ) : (
              <AntDesignIcon name="home" size={size} color={color} />
            ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarLabel: 'Cart',
          tabBarLabelStyle: {color: '#008E97'},
          headerShow: false,
          tabBarIcon: ({focused, color, size}) =>
            focused ? (
              <MaterialIcon name="shopping-cart" size={size} color="#008E97" />
            ) : (
              <MaterialIcon name="shopping-cart" size={size} color={color} />
            ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarLabelStyle: {color: '#008E97'},
          headerShow: false,
          tabBarIcon: ({focused, color, size}) =>
            focused ? (
              <MaterialIcon name="person" size={size} color="#008E97" />
            ) : (
              <MaterialIcon name="person" size={size} color={color} />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigator;

const styles = StyleSheet.create({});
