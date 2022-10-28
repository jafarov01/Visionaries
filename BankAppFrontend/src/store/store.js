import { configureStore } from '@reduxjs/toolkit';
import groupBillSlice from './groupBillSlice';

export const store = configureStore({
  reducer: {
    groupBill: groupBillSlice
  },
})

