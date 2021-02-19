import React, {FC} from 'react';
import {StatusBar, StatusBarProps} from 'react-native';
import {useIsFocused} from '@react-navigation/native';

type FocusAwareStatusBarProps = StatusBarProps;

const FocusAwareStatusBar: FC<FocusAwareStatusBarProps> = (props) => {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar {...props} /> : null;
};

export default FocusAwareStatusBar;
