import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { statusCodes } from 'react-native-google-signin';
import { GoogleSignin } from 'react-native-google-signin';

import styles from '../Styles/Welcome'
GoogleSignin.configure({
  webClientId: '140988325102-3ajr3f20d91ucph9ohpq08ab2r6p3po6 WelcomeScreens.googleusercontent.com',
  offlineAccess: true,
  hostedDomain: '',
  forceCodeForRefreshToken: true,
  accountName: '',
});
const Welcome = ({ navigation }) => {
  const [user, setUser] = useState(null);

  const handleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
      setUser(userInfo);
      console.log(userInfo.email)
    } catch (error) {
      console.log(error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // login already in progress
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error occurred
      }
    }
  }
  return (
    <View style={styles.fullscreen}>
      <View style={[styles.titleView]}>
        <Text style={[styles.title1]}>TaskStack</Text>
        <Text style={[styles.title2]}>Manage{'\n'} your tasks easily</Text>
        <Text style={[styles.title3]}>
          Effortlessly manage your tasks with TaskStack.
        </Text>
      </View>

      <View style={[styles.mainContainer, { flexDirection: 'column' }]}>
        <TouchableOpacity
          style={styles.container}
        >
          <View style={styles.card}>
            <Text style={styles.headingText}>Sign in with Google </Text>
            <IonIcon
              name="logo-google"
              size={25}
              color="#6b8cff"

              style={styles.google_logo}></IonIcon>
            <View style={styles.rightIcon}>
              <IonIcon
                name="arrow-forward-outline"
                size={25}
                color="#6b8cff"
                onPress={handleSignIn}
                style={styles.arrow}></IonIcon>

            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.container}
          onPress={() => console.warn('Sign IN with facebook')}>
          <View style={styles.card}>
            <Text style={styles.headingText}>Sign in with facebook </Text>
            <IonIcon
              name="logo-facebook"
              size={25}
              color="#6b8cff"
              style={styles.facebook_logo}></IonIcon>

            <View style={styles.rightIcon}>
              <IonIcon
                name="arrow-forward-outline"
                size={25}
                color="#6b8cff"
                style={styles.arrow}></IonIcon>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.container}
          onPress={() => navigation.navigate('Login')}>
          <View style={styles.card}>
            <Text style={styles.headingText}>Sign in with Email</Text>
            <IonIcon
              name="mail-outline"
              size={25}
              color="#6b8cff"
              style={styles.email_logo}></IonIcon>
            <View style={styles.rightIcon}>
              <IonIcon
                name="arrow-forward-outline"
                size={25}
                color="#6b8cff"
                style={styles.arrow}></IonIcon>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Welcome;
