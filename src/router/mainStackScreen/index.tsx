import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import type {
  ArticleHomeScreenParams,
  ArticleDetailScreenParams,
} from '@/views/article';
import BottomTabScreen from '@/router/bottomTabScreen';
import {ArticleHomeScreen, ArticleDetailScreen} from '@/views/article';
import {MessageListScreen, MessageDetailScreen} from '@/views/message';

export type MainStackParamList = {
  BottomTabScreen: undefined;
  ArticleHome: ArticleHomeScreenParams;
  ArticleDetail: ArticleDetailScreenParams;
  MessageList: undefined;
  MessageDetail: undefined;
};

const MainStack = createStackNavigator<MainStackParamList>();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
      }}>
      <MainStack.Screen
        name="BottomTabScreen"
        component={BottomTabScreen}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen name="ArticleHome" component={ArticleHomeScreen} />
      <MainStack.Screen
        name="ArticleDetail"
        initialParams={{
          id: 233,
        }}
        options={({route}) => {
          return {
            title: `Detail-${route.params.id}`,
          };
        }}
        component={ArticleDetailScreen}
      />
      <MainStack.Screen name="MessageList" component={MessageListScreen} />
      <MainStack.Screen name="MessageDetail" component={MessageDetailScreen} />
    </MainStack.Navigator>
  );
};

export default MainStackScreen;
