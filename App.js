import React from 'react';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Run from './pages/Run';
import Powerlifting from './pages/Powerlifting';
import Pushups from './pages/Pushups';

import { NavigationContainer } from '@react-navigation/native';
// npm install @react-navigation/native
// npx expo install react-native-screens react-native-safe-area-context

import { createNativeStackNavigator } from '@react-navigation/native-stack';
//npm install @react-navigation/native-stack

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
        <Stack.Screen name="Run" component={Run} options={{ headerShown: false }} />
        <Stack.Screen name="Powerlifting" component={Powerlifting} options={{ headerShown: false }} />
        <Stack.Screen name="Pushups" component={Pushups} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}