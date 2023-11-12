import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { User } from 'src/models/user';
import Auth from 'src/models/auth';

//State represent the content of the store
type State = {
  user: User;
  auth: Auth;
};

// Actions represent the available function to modify the store
type Actions = {
  setUser: (user: User) => void;
  setAuth: (auth: Auth) => void;
};

// Create a store instance, wrapped with immer
const useStore = create(
  immer<State & Actions>((set) => ({
    user: {
      id: '',
      fisrt_name: 'dummy',
      last_name: 'mc. dummy',
      roles: [],
    },

    auth: {
      accessToken: null,
      refreshToken: null,
    },

    // Assign the user
    setUser: (user) =>
      set((state) => {
        state.user = user;
      }),

    setAuth: (auth) =>
      set((state) => {
        state.auth = auth;
      }),
  }))
);

export default useStore;
