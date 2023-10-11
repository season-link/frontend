import VisualHeader from 'components/visual-header';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { Link } from 'react-router-native';

const EmailValidatedPage = () => {
  return (
    <View>
      <VisualHeader />
      <Text>An email has been validated, congratulations ?</Text>
      <Link to='/login'>
        <Text>Go back to the login page</Text>
      </Link>
    </View>
  );
};

export default EmailValidatedPage;
