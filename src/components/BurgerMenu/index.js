import React from 'react';
import {ScrollView} from 'react-native';
import {DrawerItems, SafeAreaView, withNavigation} from 'react-navigation';

import styles from './styles';

const BurgerMenu = ({navigation}) => {
  return (
    <SafeAreaView
      forceInset={{top: 'always', horizontal: 'never'}}
      style={styles.container}>
      <ScrollView>
        <DrawerItems {...this.props} />
      </ScrollView>
      <Button
        icon={{name: 'md-log-out', type: 'ionicon'}}
        title={loginStrings.logOut}
        iconContainerStyle={styles.icon}
        buttonStyle={styles.button}
        titleStyle={styles.title}
        onPress={() => navigation.navigate('LoginScreen')}
      />
    </SafeAreaView>
  );
};

export default withNavigation(React.memo(BurgerMenu));
