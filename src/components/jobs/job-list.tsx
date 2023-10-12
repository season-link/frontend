import { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useJobOfferStore } from 'src/store/job-offer.store';
import JobItem from './job-item';
import { useTranslation } from 'react-i18next';
import { ActivityIndicator } from 'react-native-paper';
import JobDetail from './job-detail';

const JobList = () => {
  const { t } = useTranslation();
  const { isLoading, error, items, fetchAll } = useJobOfferStore();

  useEffect(() => {
    fetchAll();
  }, []);

  if (isLoading) {
    return (
      <View style={style.loadingContainer}>
        <ActivityIndicator size='large' color='white' />
        <Text style={style.loadingMessageContainer}>
          {t('jobOffers:list:loadingMessage')}
        </Text>
      </View>
    );
  } else if (!error) {
    if (items.length === 0) {
      return (
        <View style={style.loadingContainer}>
          <Text style={style.loadingMessageContainer}>
            {t('jobOffers:list:empty')}
          </Text>
        </View>
      );
    }

    return (
      <>
        {items.map((item) => (
          <JobItem key={item.id} item={item} />
        ))}
        <JobDetail />
      </>
    );
  } else {
    return (
      <View style={style.loadingContainer}>
        <Text style={style.loadingMessageContainer}>
          {t('common:errorMessage')}
        </Text>
      </View>
    );
  }
};

const style = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    flexDirection: 'column',
  },
  loadingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingMessageContainer: {
    alignItems: 'center',
  },
});

export default JobList;
