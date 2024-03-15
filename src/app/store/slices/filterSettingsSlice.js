import { createSlice } from "@reduxjs/toolkit";

const filterSettingsSlice = createSlice({
  name: "filterSettings",
  initialState: {
    checkboxes: [],
    filterCriteriasWithTypes:[],
    minPrice: 0,
    maxPrice: 0,
    priceBy: 0,
    priceTo: 0,
  },
  reducers: {
    setCheckboxesSettings: (state, action) => {
      state.checkboxes = action.payload;
    },
    setFilterCriteriasWithTypes: (state, action) => {
      state.filterCriteriasWithTypes = action.payload;
    },
    setMinPrice: (state, action) => {
      state.minPrice = action.payload;
    },
    setMaxPrice: (state, action) => {
      state.maxPrice = action.payload;
    },
    setPriceBy: (state, action) => {
      state.priceBy = action.payload;
    },
    setPriceTo: (state, action) => {
      state.priceTo = action.payload;
    },
  },
});

export const { setCheckboxesSettings, setMinPrice, setMaxPrice, setPriceBy, setPriceTo, setFilterCriteriasWithTypes } = filterSettingsSlice.actions;
export default filterSettingsSlice.reducer;
