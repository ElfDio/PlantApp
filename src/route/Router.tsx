
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AccountChoose, Guides, Identify, Started} from '../pages';
import { ParamsList } from './ParamsList';
import Drawer from './Drawer';


const Stack = createNativeStackNavigator<ParamsList>();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Started">
        <Stack.Screen name="Started" component={Started} options={{
          headerShown: false
        }} />
         <Stack.Screen name="Identify" component={Identify} options={{
          headerShown: false
        }} />
         <Stack.Screen name="Guides" component={Guides} options={{
          headerShown: false
        }} />
         <Stack.Screen name="AccountChoose" component={AccountChoose} options={{
          headerShown: false
        }} />
          <Stack.Screen name="Drawer" component={Drawer} options={{
          headerShown: false
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;