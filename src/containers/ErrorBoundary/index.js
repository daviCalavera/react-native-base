import React from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RNRestart from 'react-native-restart';

import Colors from '../../constants/Colors';
import styles from './styles';

export class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    // You can also log error messages to an error reporting service here
    console.error('>>>> ', error);
  }

  destroyAuthToken = async () => {
    await AsyncStorage.removeItem('appstate');
  };

  handleBackToSignIn = async () => {
    // remove user settings
    await this.destroyAuthToken();
    // restart app
    RNRestart.Restart();
  };

  render() {
    const {hasError} = this.state;

    if (hasError) {
      return (
        <SafeAreaView style={styles.safeAreaView}>
          <View style={styles.container}>
            <View style={styles.content}>
              <Ionicons
                name="ios-information-circle-outline"
                size={60}
                color={Colors.tintColor}
              />
              <Text style={styles.title__text}>Something went wrong!</Text>
              <Text style={styles.details__text}>
                {
                  'If the problem persists, consult with the administrator. Sorry for the inconvenience.'
                }
              </Text>
              <Button
                style={[styles.reset__button]}
                onPress={() => this.handleBackToSignIn()}
                title="Restart"
              />
            </View>
          </View>
        </SafeAreaView>
      );
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
