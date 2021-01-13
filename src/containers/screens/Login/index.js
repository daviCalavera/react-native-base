import React from 'react';
import {Button, Text, View} from 'react-native';

import detailStrings from '../DetailScreen/strings';
import homeStrings from '../HomeScreen/strings';
import styles from './styles';

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>LoginScreen</Text>
      <Button
        title={detailStrings.detailTitle}
        onPress={() => navigation.navigate('PasswordResetScreen')}
      />
      <Button
        title={homeStrings.homeTitle}
        onPress={() => navigation.navigate('HomeScreen')}
      />
    </View>
  );
};

export default Login;
