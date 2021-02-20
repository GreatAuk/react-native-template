import {DefaultTheme, ExtendedTheme} from '@react-navigation/native';

const defaultTheme: ExtendedTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'red',
  },
};

export default defaultTheme;
