import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';

const Splash = () => {
  return (
    <View style={styles.wrap}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
