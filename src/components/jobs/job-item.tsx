import { useEffect, useState } from 'react';
import { Avatar, Card, TouchableRipple } from 'react-native-paper';
import { Company } from 'src/models/company';
import { Job } from 'src/models/job';
import { JobOffer } from 'src/models/job-offer';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import restService from 'src/services/rest-client.service';
import { useJobOfferStore } from 'store/job-offer.store';

interface Props {
  item: JobOffer;
}

const JobItem = ({ item }: Props) => {
  const { t } = useTranslation();
  const { openModal } = useJobOfferStore();

  // State
  const [company, setCompany] = useState<Company | undefined>(undefined);
  const [job, setJob] = useState<Job | undefined>(undefined);

  useEffect(() => {
    async function fetchCompany() {
      const data: Company = await restService.get(
        `/companies/${item.companyId}`
      );

      setCompany(data);
    }

    fetchCompany();
  }, [item.companyId]);

  useEffect(() => {
    async function fetchJob() {
      const data = await restService.get(`/jobs/${item.jobId}`);

      setJob(data);
    }

    fetchJob();
  }, [item.jobId]);

  return (
    <>
      {company && job ? (
        <TouchableRipple
          onPress={() =>
            openModal({
              ...item,
              job: job,
              company: company,
            })
          }
          rippleColor='rgba(0, 0, 0, .1)'
        >
          <Card.Title
            title={`${job.title} ${t('jobOffers:list:cardSeparator')}`}
            subtitle={company.name}
            left={(props) => <Avatar.Icon {...props} icon='domain' />}
          />
        </TouchableRipple>
      ) : (
        <View>
          <Card.Title
            title='Loading...'
            subtitle='Loading...'
            left={(props) => <Avatar.Icon {...props} icon='domain' />}
          />
        </View>
      )}
    </>
  );
};

export default JobItem;
