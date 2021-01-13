import React from 'react';
import {
  Platform,
  View
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const TabBarIcon = ({color, focused, name, size}) => {

  const platformIconName = Platform.select({
    android: `md-${name}`,
    ios: `ios-${name}`
  });

  return (
    <View style={[styles.container, focused && styles.container__focused]}>
    <Icon
      name={platformIconName}
      size={size}
      style={[styles.icon, focused && styles.icon__focused]}
      color={color}
    />
    </View>
  );
}

export default React.memo(TabBarIcon);
