import React, {FC, useEffect, useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp, useTheme} from '@react-navigation/native';

import {MainStackParamList} from '@/router/mainStackScreen';
import Icon from '@/components/Iconfont';

type NavigationProp = StackNavigationProp<MainStackParamList, 'ArticleHome'>;
type ScreenRouteProp = RouteProp<MainStackParamList, 'ArticleDetail'>;

export type ArticleHomeScreenParams =
  | {
      /** 从 detail 返回时获取的 id */
      id?: number;
    }
  | undefined;

interface HomeProps {
  navigation: NavigationProp;
  route: ScreenRouteProp;
}

const Home: FC<HomeProps> = ({navigation, route}) => {
  const [idFromDetail, setIdFromDetail] = useState<number | undefined>();
  const theme = useTheme();
  useEffect(() => {
    if (route.params?.id) {
      setIdFromDetail(route.params?.id);
    }
    return () => {
      setIdFromDetail(undefined);
    };
  }, [route.params]);
  return (
    <View style={styles.wrap}>
      <Text>is dark Theme {theme.dark ? 'Yes' : 'No'}</Text>
      <Text>id from detail: {idFromDetail}</Text>
      <Icon name="xiaoxi" />
      <Button
        onPress={() => navigation.navigate('ArticleDetail', {id: 11233})}
        title="Go Article Detail"
      />
      <Button
        onPress={() => navigation.navigate('MessageHome')}
        title="Go 『Message』 List"
      />
      <Button
        onPress={() => navigation.navigate('MessageDetail')}
        title="Go 『Message』 Detail"
      />
      <Button
        onPress={() => navigation.navigate('MobxTest1')}
        title="Go MobxTest1"
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
