import { StateCreator } from 'zustand';

export interface LoadingNames {
  contactForm?: boolean;
}

export interface LoadingSlice {
  loadingStates: LoadingNames;
  setLoading: (stateName: keyof LoadingNames, loading: boolean) => void;
}

export const createLoadingSlice: StateCreator<LoadingSlice> = (set) => ({
  loadingStates: {},
  setLoading: (stateName, loading) =>
    set((state) => {
      state.loadingStates[stateName] = loading;

      return {
        ...state,
        loadingState: state.loadingStates,
      };
    }),
});

// export const useLoadingStore = create<LoadingState>()(
//   devtools(
//     persist(
//       (set) => ({
//         loadingStates: {},
//         setLoading: (stateName, loading) =>
//           set((state) => {
//             state.loadingStates[stateName] = loading;
//             return {
//               ...state,
//               loadingState: state.loadingStates,
//             };
//           }),
//       }),
//       {
//         name: 'loading-store',
//       },
//     ),
//   ),
// );
