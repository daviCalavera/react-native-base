import React from 'react';
import {Button, Text, View} from 'react-native';

import strings from './strings';
import styles from './styles';

const PasswordReset = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>PasswordResetScreen</Text>
      <Button
        title={strings.backToLogin}
        onPress={() => navigation.navigate('LoginScreen')}
      />
    </View>
  );
};

export default PasswordReset;
