import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import type {ArticleDetailScreenParams} from '@/views/article';
import BottomTabScreen, {TabParamList} from '@/router/bottomTabScreen';
import {ArticleDetailScreen} from '@/views/article';
import {MobxTest1, MobxTest2} from '@/views/mobx';
import {MessageDetailScreen} from '@/views/message';
import {
  TabViewBasic,
  TabViewScrollable,
  TabViewCustomTabbar,
} from '@/views/tabView';

export type MainStackParamList = {
  BottomTabScreen: undefined;
  ArticleDetail: ArticleDetailScreenParams;
  MessageList: undefined;
  MessageDetail: undefined;
  MobxTest1: undefined;
  MobxTest2: undefined;
  TabViewBasic: undefined;
  TabViewScrollable: undefined;
  TabViewCustomTabbar: undefined;
} & TabParamList;

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
      <MainStack.Screen name="MessageDetail" component={MessageDetailScreen} />
      <MainStack.Screen name="MobxTest1" component={MobxTest1} />
      <MainStack.Screen name="MobxTest2" component={MobxTest2} />
      <MainStack.Screen name="TabViewBasic" component={TabViewBasic} />
      <MainStack.Screen
        name="TabViewCustomTabbar"
        component={TabViewCustomTabbar}
      />
      <MainStack.Screen
        name="TabViewScrollable"
        component={TabViewScrollable}
      />
    </MainStack.Navigator>
  );
};

export default MainStackScreen;
