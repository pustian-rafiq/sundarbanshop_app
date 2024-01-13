import React, {useCallback, useEffect} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  View,
} from 'react-native';
const logo = require('../../assets/sundarbanshop_logo.png');

import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {RegisterUser} from '../../service/apiCalls/authApi';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: {errors},
  } = useForm();

  // submit data
  const handleRegistration = async data => {
    console.log(data);
    const response = await RegisterUser(data);
    // const response = await axios;
    console.log('response', response);

    if (response.success) {
      ToastAndroid.showWithGravity(
        response.message,
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
      );
      navigation.navigate('Login');
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

  useEffect(() => {
    register('name');
    register('email');
    register('phone');
    register('password');
  }, [register]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{alignItems: 'center'}}>
          <Image style={styles.shopLogo} source={logo} />
        </View>

        <KeyboardAvoidingView>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.loginText}>Create your Account</Text>
          </View>

          <View style={{marginTop: 20}}>
            <View style={styles.inputWrapper}>
              <FontAwesomeIcon
                name="user"
                size={24}
                color="gray"
                style={{marginLeft: 8}}
              />
              <TextInput
                placeholder="Enter your name"
                style={styles.textInput}
                onChangeText={onChangeField('name')}
              />
            </View>
            <View style={styles.inputWrapper}>
              <Icon
                name="email"
                size={24}
                color="gray"
                style={{marginLeft: 8}}
              />
              <TextInput
                placeholder="Enter your email"
                style={styles.textInput}
                onChangeText={onChangeField('email')}
              />
            </View>
            <View style={styles.inputWrapper}>
              <FontAwesomeIcon
                name="phone"
                size={24}
                color="gray"
                style={{marginLeft: 8}}
              />
              <TextInput
                placeholder="Enter your phone no"
                style={styles.textInput}
                onChangeText={onChangeField('phone')}
              />
            </View>
            <View style={styles.inputWrapper}>
              <Icon
                name="lock"
                size={24}
                color="gray"
                style={{marginLeft: 8}}
              />
              <TextInput
                secureTextEntry={true}
                placeholder="Enter your password"
                style={styles.textInput}
                onChangeText={onChangeField('password')}
              />
            </View>
            <View style={styles.inputWrapper}>
              <Icon
                name="lock"
                size={24}
                color="gray"
                style={{marginLeft: 8}}
              />
              <TextInput
                secureTextEntry={true}
                placeholder="Re-type your password"
                style={styles.textInput}
              />
            </View>
          </View>
          {/* <View style={styles.instructionText}>
            <Text>Keep me logged in</Text>
            <Text style={styles.forgotPassword}>Forgot Password</Text>
          </View> */}
          <View style={{marginTop: 40}}>
            <Pressable
              style={styles.loginButton}
              onPress={handleSubmit(handleRegistration, onError)}>
              <Text style={styles.loginButtonText}>Register</Text>
            </Pressable>
          </View>
          <View style={{marginTop: 10}}>
            <View style={styles.signupBtn}>
              <Text>Already have an account?</Text>
              <Pressable onPress={() => navigation.goBack()}>
                <Text style={{color: 'green', fontSize: 14}}>Sign In</Text>
              </Pressable>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  shopLogo: {
    height: 80,
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
    marginTop: 20,
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
