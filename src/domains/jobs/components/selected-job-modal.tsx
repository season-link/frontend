import JobOfferType from '../types/job-offer.type';
import { StyleSheet, View } from 'react-native';
import { Modal, Portal, Text } from 'react-native-paper';
import { useGetCompanyQuery } from '../store/companies.api';
import { useGetJobQuery } from '../store/jobs.api';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedJobOffer } from '../store/job-offers.slice';

type Props = {
  jobOffer: JobOfferType;
};

export default function SelectedJobModal({ jobOffer }: Props) {
  const dispatch = useDispatch();
  const { data: company, error: companyError } = useGetCompanyQuery(
    jobOffer.companyId
  );
  const { data: job, error: jobError } = useGetJobQuery(jobOffer.jobId);

  useEffect(() => {
    if (companyError) {
      console.error(companyError);
    }

    if (jobError) {
      console.error(jobError);
    }
  }, [companyError, jobError]);

  return (
    <Portal>
      <Modal
        visible={true}
        onDismiss={() => dispatch(setSelectedJobOffer(null))}
        contentContainerStyle={style.modalContainer}
      >
        <View>
          <Text>{JSON.stringify(job)}</Text>
          <Text>{JSON.stringify(company)}</Text>
        </View>
      </Modal>
    </Portal>
  );
}

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
