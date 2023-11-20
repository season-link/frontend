import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import baseQueryConfig from 'common/helpers/base-query-fn';
import JobOfferType from '../types/job-offer.type';

export const JOB_OFFERS_API_REDUCER_KEY = 'jobOffersApi';

export const jobOffersApi = createApi({
  reducerPath: JOB_OFFERS_API_REDUCER_KEY,
  baseQuery: fetchBaseQuery(baseQueryConfig),
  endpoints: (builder) => ({
    getJobOffers: builder.query<JobOfferType[], void>({
      query: () => `/job-offers`,
    }),
  }),
});

export const { useGetJobOffersQuery } = jobOffersApi;
