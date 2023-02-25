import { create } from 'zustand';
import { LoadingSlice, createLoadingSlice } from './slices/app/loading.module';
import { devtools } from 'zustand/middleware';
type StoreState = LoadingSlice;

// export const useAppStore = create<StoreState>()(
//   devtools(
//     persist(
//       (...a) => ({
//         ...createLoadingSlice(...a),
//       }),
//       //   { name: 'app-store', partialize: (state) => ({ foo: state.loadingStates }) },
//       { name: 'app-store' },
//     ),
//   ),
// );

export const useAppStore = create<StoreState>()(
  devtools((...a) => ({
    ...createLoadingSlice(...a),
  })),
);
