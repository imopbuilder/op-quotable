import { Action, combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import quoteReducer from './slices/quote-slice';

const rootReducer = combineReducers({
	quoteSlice: quoteReducer,
});

export const store = configureStore({
	reducer: rootReducer,
	devTools: process.env.NODE_ENV === 'development',
});

export type RootState = ReturnType<typeof store.getState>;

export const dispatch = (action: Action) => store.dispatch(action);
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
