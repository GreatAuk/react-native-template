import {DarkTheme, ExtendedTheme} from '@react-navigation/native';

const defaultTheme: ExtendedTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: 'yellow',
  },
};

export default defaultTheme;
