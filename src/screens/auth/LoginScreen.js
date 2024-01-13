import React, {useCallback, useEffect} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  View,
} from 'react-native';
const logo = require('../../assets/sundarbanshop_logo.png');

import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import Toast from 'react-native-toast-message';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {LoginUser} from '../../service/apiCalls/authApi';

const LoginScreen = () => {
  const navigation = useNavigation();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: {errors},
  } = useForm();

  // submit data
  const handleLogin = async data => {
    console.log(data);
    const response = await LoginUser(data);
    // const response = await axios;
    console.log('response', response.user);

    if (response.success) {
      AsyncStorage.setItem('userInfo', JSON.stringify(response.user));
      AsyncStorage.setItem('authToken', JSON.stringify(response.user.token));
      // Alert.alert('User info');
      ToastAndroid.showWithGravityAndOffset(
        response.message,
        ToastAndroid.LONG,
        ToastAndroid.TOP,
        25,
        0,
      );
      Toast.show({
        type: 'success',
        text1: `Welcome ${response.user.name}`,
        text2: `${response.message}`,
        position: 'top',
        topOffset: 100,
      });
      navigation.replace('BottomTabsNavigator');
    } else {
      console.log('else');
      // ToastAndroid.show(
      //   'Network error',
      //   ToastAndroid.SHORT,
      //   ToastAndroid.CENTER,
      // );
      Toast.show({
        type: 'info',
        text1: 'Network error',
        position: top,
      });
    }
  };
  const onError = err => console.log(err);

  const onChangeField = useCallback(
    name => text => {
      name === 'state' || name === 'level'
        ? setValue(name, text.value)
        : setValue(name, text);
    },
    [],
  );
  const checkLoginStatus = async () => {
    try {
      const token = JSON.parse(await AsyncStorage.getItem('authToken'));
      if (token) {
        navigation.replace('BottomTabsNavigator');
      }
    } catch (error) {
      console.log('error', error);
    }
  };
  useEffect(() => {
    register('email');
    register('password');
  }, [register]);

  useEffect(() => {
    checkLoginStatus();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image style={styles.shopLogo} source={logo} />
      </View>

      <KeyboardAvoidingView>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.loginText}>Login to your Account</Text>
        </View>

        <View style={{marginTop: 70}}>
          <View style={styles.inputWrapper}>
            <Icon name="email" size={24} color="gray" style={{marginLeft: 8}} />
            <TextInput
              placeholder="Enter your email"
              style={styles.textInput}
              onChangeText={onChangeField('email')}
            />
          </View>
          <View style={styles.inputWrapper}>
            <Icon name="lock" size={24} color="gray" style={{marginLeft: 8}} />
            <TextInput
              secureTextEntry={true}
              placeholder="Enter your password"
              style={styles.textInput}
              onChangeText={onChangeField('password')}
            />
          </View>
        </View>
        <View style={styles.instructionText}>
          <Text>Keep me logged in</Text>
          <Text style={styles.forgotPassword}>Forgot Password</Text>
        </View>
        <View style={{marginTop: 80}}>
          <Pressable
            style={styles.loginButton}
            onPress={handleSubmit(handleLogin, onError)}>
            <Text style={styles.loginButtonText}>Login</Text>
          </Pressable>
        </View>
        <View style={{marginTop: 10}}>
          <View style={styles.signupBtn}>
            <Text>Don't have an account?</Text>
            <Pressable onPress={() => navigation.navigate('Register')}>
              <Text style={{color: 'green', fontSize: 14}}>Sign Up</Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  shopLogo: {
    height: 100,
    width: 150,
  },
  loginText: {
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 12,
    color: '#041E42',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: '#D0D0D0',
    paddingVertical: 5,
    borderRadius: 5,
    marginTop: 30,
  },
  textInput: {
    color: 'gray',
    marginVertical: 0,
    width: 280,
  },
  instructionText: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  forgotPassword: {
    color: '#007FFF',
    fontWeight: '500',
  },
  loginButton: {
    width: 200,
    backgroundColor: '#FEBE10',
    borderRadius: 6,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 15,
  },
  loginButtonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signupBtn: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 5,
  },
});
