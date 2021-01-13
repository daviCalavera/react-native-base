import React from 'react';
import {Button, Text, View} from 'react-native';

import detailStrings from '../DetailScreen/strings';
import optionsStrings from '../OptionsScreen/strings';
import styles from './styles';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Button
        title={detailStrings.detailTitle}
        onPress={() => navigation.navigate('DetailScreen')}
      />
      <Button
        title={optionsStrings.optionsTitle}
        onPress={() => navigation.navigate('OptionsScreen')}
      />
    </View>
  );
};

export default HomeScreen;
