import { configureStore } from '@reduxjs/toolkit';

import uiSlice from './cartView';
// import cartSlice from './cart-slice';

const store = configureStore({
  reducer: { ui: uiSlice.reducer},
});

export default store;