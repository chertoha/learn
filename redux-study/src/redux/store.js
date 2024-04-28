import { configureStore } from '@reduxjs/toolkit';
// import { rootReducer } from './reducer';
import tasksSlice from './tasksSlice';
import filterSlice from './filterSlice';

// export const store = configureStore({ reducer: rootReducer });

export const store = configureStore({
  reducer: {
    tasks: tasksSlice.reducer,
    filter: filterSlice.reducer,
  },
});
