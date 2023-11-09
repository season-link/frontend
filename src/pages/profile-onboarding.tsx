import { PersonnalDetailsFragment } from 'components/profile-onboarding/personnal-details';
import { ResumeFragment } from 'components/profile-onboarding/resume';
import { View } from 'react-native';
import PagerView from 'react-native-pager-view';
import { Text } from 'react-native-paper';
import { DefaultRootStyle, DefaultStyle } from 'src/styles/default-style';

const OnboardingPage = () => {
  return (
    <View style={DefaultRootStyle.container}>
      <PagerView style={DefaultRootStyle.container} initialPage={0}>
        <View style={DefaultStyle.container} key='1'>
          <PersonnalDetailsFragment />
        </View>
        <View style={DefaultStyle.container} key='2'>
          <ResumeFragment />
        </View>
        <View style={DefaultStyle.container} key='3'>
          <Text>Third page</Text>
        </View>
      </PagerView>
    </View>
  );
};

export default OnboardingPage;
