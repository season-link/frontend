import useStore from 'hooks/store/useStore';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { emptyTokens } from 'src/utils/tokens';

export function HelloWorld() {
  const { user, auth, setAuth } = useStore();

  return (
    <View>
      <Text variant='displayLarge'>Hello World!</Text>
      <Text>
        Have you considered calling yourself "{user.fisrt_name} {user.last_name}
        "?
      </Text>
      <Text>
        You are currently {auth.accessToken ? 'logged in' : 'logged out'}.
      </Text>
      <Button
        disabled={!auth.accessToken}
        onPress={() => {
          setAuth({
            accessToken: null,
            refreshToken: null,
          });
          emptyTokens();
        }}
      >
        Logout
      </Button>
    </View>
  );
}
