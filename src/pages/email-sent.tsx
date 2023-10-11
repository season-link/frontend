import VisualHeader from 'components/visual-header';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { Link } from 'react-router-native';

const EmailSentPage = () => {
  return (
    <View>
      <VisualHeader />
      <Text>An email has been sent to confirm the account validity, verify it</Text>
      <Link to='/login'>
        <Text>Go back to the login page</Text>
      </Link>
    </View>
  );
};

export default EmailSentPage;
