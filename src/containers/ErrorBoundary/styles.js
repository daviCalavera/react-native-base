import {StyleSheet} from 'react-native';

import Colors from '../../constants/Colors';

export default StyleSheet.create({
  details__text: {
    color: Colors.tintColorDarker,
    marginVertical: 10,
    lineHeight: 23,
    fontWeight: '500',
  },
  reset__button: {
    backgroundColor: Colors.tintColor,
    borderRadius: 5,
    marginVertical: 15,
  },
  title__icon: {
    width: '100%',
  },
  title__text: {
    color: Colors.tintColor,
    fontSize: 32,
  },
});
