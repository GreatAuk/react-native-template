import React, {useContext} from 'react';
import {View, StyleSheet, Button, TextInput} from 'react-native';
import {useToast} from 'react-native-toast-hybrid';

import {AuthContext, IAuthContext} from '@/utils/context';

function SignIn() {
  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const toast = useToast();

  const {signIn} = useContext(AuthContext) as IAuthContext;

  const onSubmit = async () => {
    toast.loading();
    await signIn({userName, password});
    toast.hide();
  };

  return (
    <View style={styles.wrap}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={userName}
        onChangeText={setUserName}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign in" onPress={onSubmit} />
    </View>
  );
}

export default SignIn;

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: 200,
    borderColor: '#ccc',
    borderRadius: 4,
    marginBottom: 15,
  },
});
