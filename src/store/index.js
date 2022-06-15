import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartslices';

import uiSlice from './cartView';


const store = configureStore({
  reducer: { ui: uiSlice.reducer, cart : cartSlice.reducer},
});

export default store;