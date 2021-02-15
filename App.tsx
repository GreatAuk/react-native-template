import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './src/views/home';
import Detail from './src/views/detail';

export type RootStackParamList = {
  Home:
    | {
        /** 从 detail 获取的 id */
        id?: number;
      }
    | undefined;
  Detail: {
    /** 文章的 id */
    id: number;
  };
};

const Stack = createStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{
            title: 'Home_',
          }}
          component={Home}
        />
        <Stack.Screen
          name="Detail"
          initialParams={{
            id: 233,
          }}
          options={({route}) => {
            return {
              title: `Detail-${route.params.id}`,
            };
          }}
          component={Detail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
