import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import {observer} from 'mobx-react-lite';

import {StoreContext} from '@/store';

const Timer = observer(({}) => {
  const {timerStore} = useContext(StoreContext);
  return (
    <View>
      <Text>Test2</Text>
      <Text>secondsPassed: {timerStore.secondPassed}</Text>
      <Button title="increase" onPress={() => timerStore.increase()} />
    </View>
  );
});

export default Timer;
