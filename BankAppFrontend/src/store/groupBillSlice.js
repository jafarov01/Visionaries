import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allData: [],
  currentBillData: null,
  currentBillID: null,
  addedAccounts: []
};

export const groupBillSlice = createSlice({
  name: "groupBill",
  initialState,
  reducers: {
    setAllData: (state, action) => {
      state.allData = action.payload;
    },
    setCurrentBill: (state, action) => {
      state.currentBillData = action.payload;
    },
    setBillId: (state, action) => {
      state.currentBillID = action.payload;
    },
    setAddedAccounts: (state, action) => {
      state.addedAccounts = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { setCurrentBill, setBillId, setAddedAccounts, setAllData } = groupBillSlice.actions

export default groupBillSlice.reducer;
