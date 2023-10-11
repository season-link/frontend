import VisualHeader from 'components/visual-header';
import { Formik } from 'formik';
import React from 'react';
import { ToastAndroid, View } from 'react-native';
import { Button, HelperText, Text, TextInput } from 'react-native-paper';
import { Link } from 'react-router-native';
import { DefaultStyle } from 'src/styles/default-style';
import * as yup from 'yup';

const loginValidationSchema = yup.object().shape({
  email: yup.string().email().required('Email is required'),
  password: yup.string().min(4, 'smol pass').required('password is required'),
});

const LoginPage = () => {
  return (
    <View style={DefaultStyle.container}>
      <VisualHeader />
      <Formik
        validateOnMount={true}
        initialValues={{ email: '', password: '' }}
        validationSchema={loginValidationSchema}
        onSubmit={(values) =>
          ToastAndroid.show(
            `${values.email} ${values.password} ${Object.getOwnPropertyNames(values)}`,
            ToastAndroid.SHORT
          )
        }
      >
        {(props) => {
          return (
            <View style={DefaultStyle.container}>
              <View>
                <TextInput
                  label='Email'
                  onChangeText={props.handleChange('email')}
                  onBlur={props.handleBlur('email')}
                  value={props.values.email}
                />
                <HelperText type='error' visible={!!props.errors.email}>
                  {props.errors.email}
                </HelperText>
              </View>

              <View>
                <TextInput
                  label='Password'
                  secureTextEntry={true}
                  onChangeText={props.handleChange('password')}
                  onBlur={props.handleBlur('password')}
                  value={props.values.password}
                />
                <HelperText type='error' visible={!!props.errors.password}>
                  {props.errors.password}
                </HelperText>
              </View>

              <Button
                disabled={!props.isValid}
                onPress={(e) => props.handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>)}
              >
                Login
              </Button>

              <Link to='/sign-up'>
                <Text>New here ? Sign Up</Text>
              </Link>
            </View>
          );
        }}
      </Formik>
    </View>
  );
};

export default LoginPage;
