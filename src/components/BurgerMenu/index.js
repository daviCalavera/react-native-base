import React from 'react';
import {DrawerContentScrollView, DrawerItem, DrawerItemList} from '@react-navigation/drawer';

import styles from './styles';

const BurgerMenu = (props) => {
  const {navigation} = props;
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Logout"
        onPress={() => navigation.navigate('LoginScreen')}
      />
    </DrawerContentScrollView>
  );
};

export default React.memo(BurgerMenu);
