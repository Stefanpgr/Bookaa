import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import FingerprintScanner from 'react-native-fingerprint-scanner';
import {Button} from '../../components';

import {Colors, hp, mediumFont, semiBoldFont, wp} from '../../styles/global';
import Eye from './../../assets/svg/eye.svg';
import FingerPrint from './../../assets/svg/fingerprint.svg';

const LoginScreen = ({navigation}: any) => {
  const [showPwd, setShowPwd] = useState(true);
  const [biometry, setBiometryType] = useState<string>('');

  useEffect(() => {
    FingerprintScanner.isSensorAvailable()
      .then((biometryType) => {
        return setBiometryType(biometryType);
      })
      .catch((error) => console.log('isSensorAvailable error => ', error));
  }, []);

  const getMessage = () => {
    if (biometry === 'Face ID') {
      return 'Scan your Face on the device to continue';
    } else {
      return 'Scan your Fingerprint on the device scanner to continue';
    }
  };

  const showAuthenticationDialog = () => {
    if (biometry !== null && biometry !== undefined) {
      FingerprintScanner.authenticate({
        description: getMessage(),
      })
        .then((res) => {
          console.log(res);
          navigation.navigate('HomeScreen');
        })
        .catch((error) => {
          console.log('Authentication error is => ', error);
        });
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
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.passInput}
            selectionColor={'#7a7979'}
            placeholder="*****************"
            autoCorrect={false}
            secureTextEntry={showPwd}
            keyboardType="default"
          />
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => setShowPwd(!showPwd)}>
            <Eye />
          </TouchableOpacity>
        </View>
        <Button
          onPress={() => navigation.navigate('HomeScreen')}
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
    padding: wp(35),
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
    marginBottom: wp(90),
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
