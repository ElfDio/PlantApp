import React, { createContext, useMemo, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ParamsList } from './ParamsList';
import { Diagnose, Garden, Home, Profile, Qr } from '../pages';

const Tab = createBottomTabNavigator<ParamsList>();

function Drawer() {

  return (
      <Tab.Navigator  screenOptions={({ route }) => ({
        tabBarIconStyle: { display: "none"},
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "black",
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
