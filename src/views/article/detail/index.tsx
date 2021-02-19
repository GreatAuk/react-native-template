import React, {FC, useLayoutEffect} from 'react';
import {View, Text, Button, StyleSheet, Alert} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

import {MainStackParamList} from '@/router/mainStackScreen';

type NavigationProp = StackNavigationProp<MainStackParamList, 'ArticleDetail'>;
type ScreenRouteProp = RouteProp<MainStackParamList, 'ArticleDetail'>;

export type ArticleDetailScreenParams = {
  /** 文章的 id */
  id: number;
};

interface DetailProps {
  navigation: NavigationProp;
  route: ScreenRouteProp;
}

const Detail: FC<DetailProps> = ({navigation, route}) => {
  const {id} = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => Alert.alert(`sharing ${id}`)} title="share" />
      ),
    });
  }, [navigation, id]);
  return (
    <View style={styles.wrap}>
      <Text>Detail Screen</Text>
      <Text>id from Screen Home: {id}</Text>
      <Button
        onPress={() => {
          navigation.setOptions({
            title: 'Detail-test',
          });
        }}
        title="Set Title Test"
      />
      <Button
        onPress={() => navigation.navigate('MessageDetail')}
        title="Go MessageDetail"
      />
      <Button
        onPress={() => navigation.navigate('ArticleHome', {id})}
        title="Go Back"
      />
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
