import '@react-navigation/native';

// Override the theme in react navigation to accept our custom theme props.
// https://github.com/react-navigation/react-navigation/issues/9161#issuecomment-764922017
declare module '@react-navigation/native' {
  export type ExtendedTheme = {
    dark: boolean;
    colors: {
      /** 主要颜色 */
      primary: string;
      secondary: string;
      tertiary: string;
      danger: string;
      background: string;
      card: string;
      text: string;
      subtext: string;
      separator: string;
      border: string;
      highlight: string;
      notification: string;
    };
  };
  export function useTheme(): ExtendedTheme;
}
