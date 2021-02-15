import React, {FC, useEffect, useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

import {RootStackParamList} from '../../../App';

type NavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
type ScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

interface HomeProps {
  navigation: NavigationProp;
  route: ScreenRouteProp;
}

const Home: FC<HomeProps> = ({navigation, route}) => {
  const [idFromDetail, setIdFromDetail] = useState<number | undefined>();
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
      <Text>Hello wolrd</Text>
      <Text>id from detail: {idFromDetail}</Text>
      <Button
        onPress={() => navigation.navigate('Detail', {id: 11233})}
        title="Go Detail"
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
