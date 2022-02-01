import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Toast, { DURATION } from 'react-native-easy-toast';

import SignInScreen from '../screens/SignInScreen';
import BottomNavigation from './BottomNavigation';
import AuthSignIn from '../auth/AuthSignIn';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SignIn' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='SignIn' component={SignInScreen} />
        <Stack.Screen name='BottomNavigation' component={BottomNavigation} />
        <Stack.Screen name='AuthSignIn' component={AuthSignIn} />
      </Stack.Navigator>
      <Toast ref={toast => (this.toast = toast)} />
    </NavigationContainer>
  );
};

export default MainStack;
