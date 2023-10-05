import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { User } from 'src/models/user';

//State represent the content of the store
type State = {
  user: User;
};

// Actions represent the available function to modify the store
type Actions = {
  setUser: (user: User) => void;
};

// Create a store instance, wrapped with immer
export const useStore = create(
  immer<State & Actions>((set) => ({
    user: {
      id: '0000-0000-0000-0000',
      name: 'dummy',
    },

    // Assign the user
    setUser: (user) =>
      set((state) => {
        state.user = user;
      }),
  }))
);
