import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {SignInScreen, SignUpScreen} from '@/views/user';

export type AuthStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  AutoSignIn: undefined;
};

const AuthStack = createStackNavigator<AuthStackParamList>();

const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="SignIn" component={SignInScreen} />
      <AuthStack.Screen name="SignUp" component={SignUpScreen} />
    </AuthStack.Navigator>
  );
};
export default AuthStackScreen;
