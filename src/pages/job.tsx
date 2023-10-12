import JobList from 'components/jobs/job-list';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

const JobPage = () => {
  const { t } = useTranslation();

  return (
    <View>
      <View style={{ alignItems: 'center' }}>
        <Text variant='displayMedium'>{t('jobOffers:title')}</Text>
      </View>
      <JobList />
    </View>
  );
};

export default JobPage;
