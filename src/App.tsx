import React, {useReducer, useMemo} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {StorageKey} from '@/type';
import type {IAuthContext} from '@/utils/context';
import {AuthContext} from '@/utils/context';
import {SignInScreen, SignUpScreen, SplachScreen} from '@/views/user';
import {ArticleHomeScreen, ArticleDetailScreen} from '@/views/article/index';
import {sleep} from '@/utils';

export type RootStackParamList = {
  ArticleHome:
    | {
        /** 从 detail 返回时获取的 id */
        id?: number;
      }
    | undefined;
  ArticleDetail: {
    /** 文章的 id */
    id: number;
  };
  SignIn: undefined;
  SignUp: undefined;
  AutoSignIn: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

interface AuthState {
  userToken: string | undefined;
  isSignout: boolean;
  isLoading: boolean;
}
type AuthActionType =
  | {
      /** 重置 token */
      type: 'RESTORE_TOKEN';
      payload: Pick<AuthState, 'userToken' | 'isLoading'>;
    }
  | {
      /** 登录 */
      type: 'SIGN_IN';
      payload: Pick<AuthState, 'userToken' | 'isLoading'>;
    }
  | {
      /** 退出登录 */
      type: 'SIGN_OUT';
      payload: undefined;
    };

const AuthReducer = (prevState: AuthState, action: AuthActionType) => {
  switch (action.type) {
    case 'RESTORE_TOKEN':
      return {
        ...prevState,
        userToken: action.payload.userToken,
        isLoading: false,
      };
    case 'SIGN_IN':
      console.log('[59]-App.tsx', action.payload);
      return {
        ...prevState,
        isSignout: false,
        userToken: action.payload.userToken,
      };
    case 'SIGN_OUT':
      return {
        ...prevState,
        isSignout: true,
        userToken: undefined,
      };
  }
};

function App() {
  const [authState, dispatch] = useReducer(AuthReducer, {
    isLoading: true,
    isSignout: false,
    userToken: undefined,
  });
  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem(StorageKey.userToken);
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({
        type: 'RESTORE_TOKEN',
        payload: {userToken: userToken as string, isLoading: false},
      });
    };

    bootstrapAsync();
  }, []);
  const authContext = useMemo<IAuthContext>(
    () => ({
      signIn: async ({userName, password}) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token
        await sleep(1000);
        const userToken = 'KDFLDSKFJDSLKF<DS>FDS';
        await AsyncStorage.setItem(StorageKey.userToken, userToken);
        dispatch({
          type: 'SIGN_IN',
          payload: {userToken, isLoading: false},
        });
        return Promise.resolve();
      },
      signOut: () => dispatch({type: 'SIGN_OUT', payload: undefined}),
      signUp: async (userName, password) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        dispatch({
          type: 'SIGN_IN',
          payload: {userToken: 'fds', isLoading: false},
        });
      },
    }),
    [],
  );

  if (authState.isLoading) {
    return <SplachScreen />;
  }
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator>
          {!authState.userToken ? (
            <>
              <Stack.Screen name="SignIn" component={SignInScreen} />
              <Stack.Screen name="SignUp" component={SignUpScreen} />
            </>
          ) : (
            <>
              <Stack.Screen
                name="ArticleHome"
                options={{
                  title: 'Home_',
                }}
                component={ArticleHomeScreen}
              />
              <Stack.Screen
                name="ArticleDetail"
                initialParams={{
                  id: 233,
                }}
                options={({route}) => {
                  return {
                    title: `Detail-${route.params.id}`,
                  };
                }}
                component={ArticleDetailScreen}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;
