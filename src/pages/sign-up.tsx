import VisualHeader from 'components/visual-header';
import { Formik } from 'formik';
import { ToastAndroid, View } from 'react-native';
import { Button, Checkbox, HelperText, Text, TextInput } from 'react-native-paper';
import { Link, useNavigate } from 'react-router-native';
import { DefaultStyle } from 'src/styles/default-style';
import * as yup from 'yup';

const registerValidationSchema = yup.object().shape({
  email: yup.string().email().required('Email is required'),
  password: yup.string().min(4, 'smol pass').required('password is required'),
  over18: yup.boolean().oneOf([true], 'You have to be over 18').required(),
  acceptedTos: yup.boolean().oneOf([true], 'You have to accept the TOS').required(),
});

const SignUpPage = () => {
  const navigate = useNavigate();

  return (
    <View style={DefaultStyle.container}>
      <VisualHeader />
      <Formik
        validateOnMount={true}
        initialValues={{ email: '', password: '', over18: false, acceptedTos: false }}
        validationSchema={registerValidationSchema}
        onSubmit={(values) => {
          ToastAndroid.show(
            `${values.email} ${values.password} ${Object.getOwnPropertyNames(values)}`,
            ToastAndroid.SHORT
          );

          navigate('/on');
        }}
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

              <Checkbox.Item
                label='I declare being over 18'
                onPress={() => props.setFieldValue('over18', !props.values.over18)}
                status={props.values.over18 ? 'checked' : 'unchecked'}
              />
              <Checkbox.Item
                label='I accept to sell my soul in accordance to the TOS'
                onPress={() => props.setFieldValue('acceptedTos', !props.values.acceptedTos)}
                status={props.values.acceptedTos ? 'checked' : 'unchecked'}
              />

              <Button
                disabled={!props.isValid}
                onPress={(e) => props.handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>)}
              >
                Register
              </Button>

              <Link to='/login'>
                <Text>Already Familiar ? Login here !</Text>
              </Link>
            </View>
          );
        }}
      </Formik>
    </View>
  );
};

export default SignUpPage;
