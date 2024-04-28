import { createSlice } from '@reduxjs/toolkit';
import { statusFilters } from './constants';

const initialFilter = {
  status: statusFilters.all,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFilter,
  reducers: {
    setFilter: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;

export default filterSlice;
