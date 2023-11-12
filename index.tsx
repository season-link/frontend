import { registerRootComponent } from 'expo';
import { PaperProvider } from 'react-native-paper';
import { decode, encode } from 'base-64';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from 'src/App';
import { NativeRouter } from 'react-router-native';

if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}

function Index() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <PaperProvider>
        <NativeRouter>
          <App />
        </NativeRouter>
      </PaperProvider>
    </QueryClientProvider>
  );
}

export default registerRootComponent(Index);
