import React, {useContext} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {AuthContext} from '@/utils/context';

const MineHomeScreen = () => {
  const authContext = useContext(AuthContext);
  return (
    <View style={styles.wrap}>
      <Text>Mine</Text>
      <Button onPress={() => authContext?.signOut()} title="退出登录" />
    </View>
  );
};

export default MineHomeScreen;

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
