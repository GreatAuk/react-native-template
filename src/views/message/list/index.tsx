import React, {FC} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import FocusAwareStatusBar from '@/components/FocusAwareStatusBar';
import {MainStackParamList} from '@/router/mainStackScreen';

type NavigationProp = StackNavigationProp<MainStackParamList, 'MessageList'>;

interface MessageListProps {
  navigation: NavigationProp;
}

const MessageList: FC<MessageListProps> = ({navigation}) => {
  return (
    <View style={styles.wrap}>
      <FocusAwareStatusBar barStyle="light-content" />
      <Text>MessageList</Text>
      <Button
        onPress={() => navigation.navigate('MessageDetail')}
        title="Go Message Detail"
      />
      <Button
        onPress={() => navigation.navigate('ArticleHome')}
        title="Go Article Home"
      />
    </View>
  );
};

export default MessageList;

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: 'blue',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
