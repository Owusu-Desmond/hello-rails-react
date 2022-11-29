import { createAsyncThunk } from '@reduxjs/toolkit';

const GREETINGS_URL = '/api/v1/greetings';
const FETCH_GREETING = 'greetings/fetchGreeting';

export const fetchGreeting = createAsyncThunk(GREETINGS_URL, async () => {
    const response = await fetch(GREETINGS_URL);
    const data = await response.json();
    return data.message;
});

const initialState = { 
    greeting: 'Hi there', 
};

// Path: app/javascript/controllers/redux/greetings/greetings.js

export function greetingsReducer (state = initialState, action) {
    switch (action.type) {
        case `${FETCH_GREETING}/fulfilled`:
            return { greeting: action.payload };
        default:
            return state;
    }
}



