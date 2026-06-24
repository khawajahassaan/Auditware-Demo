import { configureStore } from '@reduxjs/toolkit';
import workdoneReducer from './workdoneSlice';

export const store = configureStore({
    reducer: {
        workdone: workdoneReducer,
    },
});
