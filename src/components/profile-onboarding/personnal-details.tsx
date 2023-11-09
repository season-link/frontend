import PersonnalDetailsFace from 'components/svg/personnal-details-face';
import { Formik } from 'formik';
import { ScrollView, StyleSheet, ToastAndroid, View } from 'react-native';
import { Button, HelperText, TextInput } from 'react-native-paper';
import * as yup from 'yup';
import { DatePickerInput } from 'react-native-paper-dates';
import { DefaultStyle } from 'src/styles/default-style';
import DropDown from 'react-native-paper-dropdown';
import { useState } from 'react';

const validationSchema = yup.object().shape({
  lastName: yup.string().required('The last name is required'),
  birthDate: yup.date().required('The birth date is required'),
  firstName: yup.string().required('The first name'),
  nationality: yup.string().required('select one at least :('),
  gender: yup.string().oneOf(['male', 'female', 'other']).required('We like data, give us your gender'),
  someWords: yup.string().required('Hey tell us a bit about yourself !'),
});

//TODO give back the data of all forms !

export const PersonnalDetailsFragment = () => {
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <View style={DefaultStyle.container}>
      <ScrollView>
        <PersonnalDetailsFace height={100} />
        <Formik
          validateOnMount={true}
          validationSchema={validationSchema}
          initialValues={{
            lastName: '',
            birthDate: undefined,
            firstName: '',
            nationality: '',
            someWords: '',
            gender: '',
          }}
          onSubmit={(values) => {
            ToastAndroid.show(` ${Object.getOwnPropertyNames(values)}`, ToastAndroid.SHORT);
          }}
        >
          {(props) => {
            return (
              <View style={DefaultStyle.container}>
                <View>
                  <TextInput
                    label='Last Name'
                    onChangeText={props.handleChange('lastName')}
                    onBlur={props.handleBlur('lastName')}
                    value={props.values.lastName}
                  />
                  <HelperText type='error' visible={!!props.errors.lastName}>
                    {props.errors.lastName}
                  </HelperText>
                </View>

                <View>
                  <TextInput
                    label='First Name'
                    onChangeText={props.handleChange('firstName')}
                    onBlur={props.handleBlur('firstName')}
                    value={props.values.firstName}
                  />
                  <HelperText type='error' visible={!!props.errors.firstName}>
                    {props.errors.firstName}
                  </HelperText>
                </View>

                <View>
                  {/* TODO imagine a picker instead of a text input here */}
                  <TextInput
                    label='Nationality'
                    onChangeText={props.handleChange('nationality')}
                    onBlur={props.handleBlur('nationality')}
                    value={props.values.nationality}
                  />
                  <HelperText type='error' visible={!!props.errors.nationality}>
                    {props.errors.nationality}
                  </HelperText>
                </View>

                <View>
                  <DropDown
                    visible={showDropDown}
                    onDismiss={() => setShowDropDown(false)}
                    list={[
                      { label: 'Male', value: 'male' },
                      { label: 'Female', value: 'female' },
                      { label: 'Other Kind of entity', value: 'other' },
                    ]}
                    setValue={(newValue: string) => props.setFieldValue('gender', newValue)}
                    showDropDown={() => setShowDropDown(true)}
                    value={props.values.gender}
                  />
                  <HelperText type='error' visible={!!props.errors.gender}>
                    {props.errors.gender}
                  </HelperText>
                </View>

                <View style={style.datePicker}>
                  <DatePickerInput
                    label='Birth Date'
                    inputMode='end'
                    locale='en'
                    onChange={(newDate) => props.setFieldValue('birthDate', newDate)}
                    value={props.values.birthDate}
                  />
                  <HelperText type='error' visible={!!props.errors.birthDate}>
                    {props.errors.birthDate}
                  </HelperText>
                </View>

                <View>
                  <TextInput
                    label='some words about you'
                    multiline
                    onChangeText={props.handleChange('someWords')}
                    onBlur={props.handleBlur('someWords')}
                    value={props.values.someWords}
                  />
                  <HelperText type='error' visible={!!props.errors.someWords}>
                    {props.errors.someWords}
                  </HelperText>
                </View>

                <Button
                  disabled={!props.isValid}
                  onPress={(e) => props.handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>)}
                >
                  Next
                </Button>
              </View>
            );
          }}
        </Formik>
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  // Workaround for the date picker having no intrisic height
  datePicker: {
    height: 80,
  },
});
