import { Avatar, Button, Modal, Portal } from 'react-native-paper';
import { useJobOfferStore } from 'store/job-offer.store';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigate } from 'react-router-native';

const JobDetail = () => {
  const { t } = useTranslation();
  const { isModalOpen, closeModal, selected } = useJobOfferStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (selected) {
      console.log(`Selected job offer: ${selected}`);
    }
  }, [selected]);

  if (isModalOpen && selected) {
    return (
      <Portal>
        <Modal
          visible={isModalOpen}
          onDismiss={() => closeModal()}
          contentContainerStyle={style.modalContainer}
        >
          <Text variant='displaySmall'>{selected.job.title}</Text>
          <Text variant='bodyLarge'>
            {`${t('jobOffers:detail:jobTitleSeparator')} ${
              selected.company.name
            }`}
          </Text>

          <View style={{ flexDirection: 'row' }}>
            <Ionicons name='star' size={24} color='orange' />
            <Ionicons name='star' size={24} color='orange' />
            <Ionicons name='star' size={24} color='orange' />
            <Ionicons name='star-half' size={24} color='orange' />
            <Ionicons name='star-outline' size={24} color='orange' />
          </View>

          <Text>{`${t('jobOffers:detail:fromDatePrefix')} ${new Date(
            selected.from
          ).toLocaleDateString()}`}</Text>
          <Text>{`${t('jobOffers:detail:toDatePrefix')} ${new Date(
            selected.from
          ).toLocaleDateString()}`}</Text>
          <Text style={{ marginBottom: 20 }}>{`${t(
            'jobOffers:detail:locationPrefix'
          )} ${selected.address}`}</Text>

          {/* TODO: Add advantages if no advantages display a cross*/}
          <View style={style.additionalInfoContainer}>
            <View style={style.infoContainer}>
              <Text>{t('jobOffers:detail:advantages')}: </Text>
              <View style={style.infoContainer}>
                <Avatar.Icon
                  icon='silverware-fork-knife'
                  size={32}
                  style={{ marginRight: 2 }}
                />
                <Avatar.Icon icon='bed' size={32} />
              </View>
            </View>

            {/* TODO: Add salary based on country code */}
            <View style={{ ...style.infoContainer, marginTop: 15 }}>
              <Text>{t('jobOffers:detail:salary')}: </Text>
              <Text>20$/{t('jobOffers:detail:hour')}</Text>
            </View>

            {/* TODO: Add salary based on country code */}
            <View style={{ ...style.infoContainer, marginTop: 15 }}>
              <Text>{t('jobOffers:detail:hoursPerWeek')}: </Text>
              <Text>25</Text>
            </View>
          </View>

          <Text variant='bodyLarge' style={{ marginTop: 20, marginBottom: 10 }}>
            {t('jobOffers:detail:description')}
          </Text>
          <Text>{selected.description}</Text>

          {/* stick apply button to the bottom of the page */}

          <Button
            mode='contained'
            style={{ marginTop: 20 }}
            onPress={() => navigate('/chat')}
          >
            {t('jobOffers:detail:apply')}
          </Button>
        </Modal>
      </Portal>
    );
  }

  return null;
};

const style = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 50,
    flex: 1,
  },
  additionalInfoContainer: {
    flexDirection: 'column',
    width: '60%',
  },
  infoContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});

export default JobDetail;
