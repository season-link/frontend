import { HelloWorld } from 'components/HelloWorld';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { NativeRouter, Route, Routes } from 'react-router-native';
import ChatPage from 'src/pages/chat';
import EmailSentPage from 'src/pages/email-sent';
import EmailValidatedPage from 'src/pages/email-validated';
import HistoryPage from 'src/pages/history';
import JobPage from 'src/pages/job';
import LoginPage from 'src/pages/login';
import ProfileDeletePage from 'src/pages/profile-delete';
import OnboardingPage from 'src/pages/profile-onboarding';
import ScorePage from 'src/pages/profile-score';
import SettingsPage from 'src/pages/profile-settings';
import SignUpPage from 'src/pages/sign-up';

export default function App() {
  return (
    <PaperProvider>
      <NativeRouter>
        <View style={styles.container}>
          <StatusBar style='auto' />
          <Routes>
            <Route path='/' Component={HelloWorld} />
            <Route path='/login' Component={LoginPage} />
            <Route path='/sign-up' Component={SignUpPage} />
            <Route path='/email-sent' Component={EmailSentPage} />
            <Route path='/email-validated' Component={EmailValidatedPage} />
            <Route path='/delete-account' Component={ProfileDeletePage} />
            <Route path='/onboarding' Component={OnboardingPage} />
            <Route path='/settings' Component={SettingsPage} />
            <Route path='/score' Component={ScorePage} />
            <Route path='/history' Component={HistoryPage} />
            <Route path='/jobs' Component={JobPage} />
            <Route path='/chat' Component={ChatPage} />
          </Routes>
        </View>
      </NativeRouter>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
