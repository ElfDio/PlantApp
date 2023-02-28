import React, { createContext, useMemo, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ParamsList } from './ParamsList';
import { Diagnose, Garden, Home, Profile, Qr } from '../pages';
import { colors } from '../config/color';

const Tab = createBottomTabNavigator<ParamsList>();

function Drawer() {

  return (
      <Tab.Navigator  screenOptions={({ route }) => ({
        tabBarIconStyle: { display: "none"},
        tabBarActiveTintColor: colors.main,
        tabBarInactiveTintColor: colors.b,
        tabBarLabelPosition: 'beside-icon',
        headerShown: false
      })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Diagnose" component={Diagnose} />
        <Tab.Screen name="Qr" component={Qr} />
        <Tab.Screen name="Garden" component={Garden} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
  );
}

export default Drawer;
