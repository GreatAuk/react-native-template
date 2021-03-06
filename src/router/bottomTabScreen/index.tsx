import React from 'react';
import {TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from '@/components/Iconfont';
import {ArticleHomeScreen} from '@/views/article';
import {MessageListScreen} from '@/views/message';
import {MineHomeScreen} from '@/views/mine';

export type TabParamList = {
  ArticleHome: undefined;
  MessageHome: undefined;
  MineHome: undefined;
};

const BottomTabs = createBottomTabNavigator<TabParamList>();

export default function BottomTabScreen() {
  return (
    <BottomTabs.Navigator
      lazy={false}
      screenOptions={{
        tabBarButton: (props) => (
          <TouchableOpacity activeOpacity={0.6} {...props} />
        ),
      }}
      initialRouteName="ArticleHome">
      <BottomTabs.Screen
        name="ArticleHome"
        component={ArticleHomeScreen}
        options={{
          tabBarLabel: '文章',
          tabBarIcon: ({color, size}) => (
            <Icon name="cheliangziliao" color={color} size={size} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="MessageHome"
        component={MessageListScreen}
        options={{
          tabBarLabel: '消息',
          tabBarIcon: ({color, size}) => (
            <Icon name="shezhi" color={color} size={size} />
          ),
          tabBarBadge: 3,
        }}
      />
      <BottomTabs.Screen
        name="MineHome"
        component={MineHomeScreen}
        options={{
          tabBarLabel: '我的',
          tabBarIcon: ({color, size}) => (
            <Icon name="ziyuan" color={color} size={size} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}
