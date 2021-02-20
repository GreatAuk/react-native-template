import React, {useContext, FC} from 'react';
import {View, Text, Button} from 'react-native';
// import {} from ''
import {observer} from 'mobx-react-lite';
import {StackNavigationProp} from '@react-navigation/stack';

import {MainStackParamList} from '@/router/mainStackScreen';

import {StoreContext} from '@/store';

type Navigation = StackNavigationProp<MainStackParamList, 'MobxTest1'>;

interface Test1Props {
  navigation: Navigation;
}

const Timer: FC<Test1Props> = observer(({navigation}) => {
  const {timerStore} = useContext(StoreContext);
  return (
    <View>
      <Text>Test1</Text>
      <Text>secondsPassed: {timerStore.secondPassed}</Text>
      <Button title="increase" onPress={() => timerStore.increase()} />
      <Button
        title="Go MobxTest2"
        onPress={() => navigation.navigate('MobxTest2')}
      />
    </View>
  );
});

export default Timer;
