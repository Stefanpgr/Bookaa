import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import FingerprintScanner from 'react-native-fingerprint-scanner';
import * as Keychain from 'react-native-keychain';
import {Button} from '../../components';

import {Colors, hp, mediumFont, semiBoldFont, wp} from '../../styles/global';
import Eye from './../../assets/svg/eye.svg';
import FingerPrint from './../../assets/svg/fingerprint.svg';

const LoginScreen = ({navigation}: any) => {
  const [showPwd, setShowPwd] = useState(true);
  const [biometry, setBiometryType] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  useEffect(() => {
    Keychain.getSupportedBiometryType()
      .then((biometryType) => {
        return setBiometryType(biometryType as string);
      })
      .catch((error) => console.log('isSensorAvailable error => ', error));
    // FingerprintScanner.isSensorAvailable()
    //   .then((biometryType) => {
    //     return setBiometryType(biometryType);
    //   })
    //   .catch((error) => console.log('isSensorAvailable error => ', error));
    // Keychain.setGenericPassword('test@example.com', 'qwertyui', {
    //   service: 'user-auth',
    //   accessControl: 'BiometryAny' as any,
    //   accessible: 'AccessibleWhenPasscodeSetThisDeviceOnly' as any,
    // });
    // showAuthenticationDialog();
  }, []);

  const loginUser = async (result) => {
    if (email === '' || password === '') {
      Alert.alert('Please fill all fields');
    }
    const dataFromField = JSON.stringify({
      email: email.toLowerCase(),
      password,
      returnSecureToken: true,
    });

    try {
      const opt = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: dataFromField,
      };

      const res = await fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyARSWpgnHfBgdZoJGlRqUrX21OPQ-qBV5U',
        opt,
      );
      const result = await res.json();
      if (res.status === 200) {
        navigation.navigate('HomeScreen');
        Keychain.setGenericPassword(email, password, {
          service: 'user-auth',
          accessControl: 'BiometryAny' as any,
          // accessible: 'AccessibleWhenPasscodeSetThisDeviceOnly' as any,
        });
      } else {
        console.log(result);
        throw new Error('Login failed');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const showAuthenticationDialog = async () => {
    if (biometry !== null && biometry !== undefined && biometry !== '') {
      Keychain.getGenericPassword({
        service: 'user-auth',
        authenticationPrompt: {title: 'Scan fingerprint to continue'},
      })
        .then(
          (
            result:
              | boolean
              | {service: string; username: string; password: string},
          ) => {
            if (!result) {
              Alert.alert('You need to login first');
            } else {
              console.log(result);
              setPassword(result.password);
              setEmail(result.username);
            }
          },
        )
        .then((result) => loginUser(result))
        .catch((err) => console.log(err));
    } else {
      console.log('biometric authentication is not available');
    }
  };

  return (
    <ImageBackground
      source={require('./../../assets/img/login-bg.png')}
      style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#06070D" />
      <View
        style={{
          flex: 1,
        }}>
        <View style={styles.welcome}>
          <Text style={styles.welcomeTxt}>Adventures</Text>
          <Text style={styles.welcomeTxt}>in literature.</Text>
          <Text style={styles.join}>Join our community</Text>
        </View>
      </View>
      <View style={styles.section2}>
        <Text style={styles.login}>Login</Text>
        <TextInput
          keyboardType="email-address"
          placeholder="Email"
          style={styles.input}
          onChangeText={(value) => setEmail(value)}
          value={email}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.passInput}
            selectionColor={'#7a7979'}
            placeholder="*****************"
            autoCorrect={false}
            secureTextEntry={showPwd}
            keyboardType="default"
            onChangeText={(value) => setPassword(value)}
            value={password}
          />
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => setShowPwd(!showPwd)}>
            <Eye />
          </TouchableOpacity>
        </View>
        <Button
          onPress={() => loginUser()}
          style={styles.btnLg}
          item={<Text style={styles.btnLgTxt}>Sign in</Text>}
        />
        <TouchableOpacity
          style={styles.fingerprint}
          activeOpacity={0.8}
          onPress={() => showAuthenticationDialog()}>
          <FingerPrint />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#06070D',
  },
  section2: {
    backgroundColor: '#FDFDFD',
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
    padding: wp(33),
  },
  welcomeTxt: {
    color: Colors.light,
    fontFamily: semiBoldFont,
    fontSize: 24,
    lineHeight: 29.5,
  },
  join: {
    color: '#E5E0D5',
    fontFamily: mediumFont,
    fontSize: 12,
    lineHeight: 18,
    marginTop: 30,
  },
  welcome: {
    flex: 1,
    paddingHorizontal: 35,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    marginBottom: hp(90),
  },
  login: {
    fontFamily: semiBoldFont,
    fontSize: 16,
    marginBottom: 10,
    color: Colors.textBlack,
  },
  input: {
    height: 46,
    borderWidth: 1,
    marginVertical: 10,
    borderColor: '#EEEEEE',
    borderRadius: 15,
    paddingHorizontal: 15,
    fontFamily: mediumFont,
    fontSize: 14,
  },
  inputContainer: {
    flexDirection: 'row',
    height: 46,
    borderWidth: 1,
    marginVertical: 10,
    borderColor: '#EEEEEE',
    borderRadius: 15,
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  passInput: {
    flex: 1,
    fontFamily: mediumFont,
    fontSize: 14,
  },
  btnLg: {
    backgroundColor: Colors.textBlack,
    height: 46,
    borderRadius: 16,
    marginTop: 15,
    marginBottom: 20,
  },
  btnLgTxt: {
    fontFamily: mediumFont,
    alignSelf: 'center',
    fontSize: 16,
    paddingLeft: 10,
    color: Colors.white,
  },
  fingerprint: {
    alignSelf: 'center',
    marginVertical: hp(5),
  },
});

export default LoginScreen;
