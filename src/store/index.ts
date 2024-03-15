import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import {tasksApi} from "../services/tasksApi"

export const store = configureStore({
    reducer: {
        [tasksApi.reducerPath]: tasksApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        tasksApi.middleware,
    )
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
