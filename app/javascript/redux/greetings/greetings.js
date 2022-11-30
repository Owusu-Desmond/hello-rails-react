import { createAsyncThunk } from '@reduxjs/toolkit';

const GREETINGS_URL = '/api/v1/greetings';
const FETCH_GREETING = 'greetings/fetchGreeting';

export const fetchGreeting = createAsyncThunk(FETCH_GREETING , async () => {
    const response = await fetch(GREETINGS_URL);
    const data = await response.json();
    return data.message;
});

const initialState = { 
    greeting: '', 
};

export default (state = initialState, action) => {
    switch (action.type) {
        case `${FETCH_GREETING}/fulfilled`:
            return { ...state, greeting: action.payload };
        default:
            return state;
    }
};
