import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { Link } from 'react-router-native';
import { useStore } from 'src/store/store';

export function HelloWorld() {
  const store = useStore();

  return (
    <View>
      <Text variant='displayLarge'>Hello World!</Text>
      <Text>Have you considered calling yourself "{store.user.name}"?</Text>
      <Link to='/login'>
        <Text>Go to the login page</Text>
      </Link>
    </View>
  );
}
