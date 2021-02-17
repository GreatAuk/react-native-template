import React from 'react';

export interface IAuthContext {
  /** 登录 */
  signIn: ({
    userName,
    password,
  }: {
    userName: string;
    password: string;
  }) => Promise<void>;
  /** 退出登录 */
  signOut: () => void;
  /** 注册 */
  signUp: (userName: string, passworld: string) => Promise<void>;
}
export const AuthContext = React.createContext<null | IAuthContext>(null);
