import { Formik } from 'formik';
import { ToastAndroid, View } from 'react-native';
import { DefaultStyle } from 'src/styles/default-style';
import * as yup from 'yup';

const isAvailableSchema = yup.object().shape({
  isAvailable: yup.boolean().required(),
});

const availabilitySchema = yup.object().shape({
  from: yup.date().required(),
  to: yup.date().required(),
  place: yup.string().required(),
  category: yup.string().required(),
});

export const AvailabilityFragment = () => {
  return (
    <View style={DefaultStyle.container}>
      <Formik
        validateOnMount={true}
        validationSchema={availabilitySchema}
        initialValues={{
          from: undefined,
          to: undefined,
          place: '',
          category: '',
        }}
        onSubmit={(values) => {
          ToastAndroid.show(` ${Object.getOwnPropertyNames(values)}`, ToastAndroid.SHORT);
        }}
      >
        {(props) => {
          return <View style={DefaultStyle.container}></View>;
        }}
      </Formik>
    </View>
  );
};
