import { JobOffer } from 'models/job-offer';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import restService from 'src/services/rest-client.service';
import { Job } from 'models/job-category';
import { Company } from 'models/company';

type FullJobOffer = JobOffer & {
  job: Job;
  company: Company;
};

type State = {
  items: JobOffer[];
  selected: FullJobOffer | null;
  isModalOpen: boolean;
  isLoading: boolean;
  error: unknown | null;
};

export interface Actions {
  setItems: (newItems: JobOffer[]) => void;
  addItems: (newItems: JobOffer[]) => void;
  fetchAll: () => void;
  openModal: (jobOffer: FullJobOffer) => void;
  closeModal: () => void;
}

export const useJobOfferStore = create(
  immer<State & Actions>((set) => ({
    items: [],
    selected: null,
    isLoading: false,
    error: null,
    isModalOpen: false,
    setItems: (newItems: JobOffer[]) =>
      set((state) => void (state.items = newItems)),
    addItems: (newItems: JobOffer[]) =>
      set((state) => void state.items.push(...newItems)),
    fetchAll: async () => {
      set((state) => void (state.isLoading = true));

      try {
        const data: JobOffer[] = await restService.get('/job_offers');

        set((state) => {
          state.isLoading = false;

          state.items = data;
        });
      } catch (error) {
        console.error(error);
        set((state) => {
          state.isLoading = false;

          state.error = error;
        });
      }
    },
    openModal: (jobOffer: FullJobOffer) =>
      set((state) => {
        console.log(jobOffer);
        state.selected = jobOffer;
        state.isModalOpen = true;
      }),
    closeModal: () =>
      set((state) => {
        state.selected = null;
        state.isModalOpen = false;
      }),
  }))
);
