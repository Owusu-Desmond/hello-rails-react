import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { greetingsReducer } from './greetings/greetings';

const rootReducer = combineReducers({
    greetings: greetingsReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});