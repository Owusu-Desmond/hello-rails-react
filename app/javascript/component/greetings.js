import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchGreeting } from "../redux/greetings/greetings";

export default function Greetings() {
    const dispatch = useDispatch();
    const greeting = useSelector((state) => state.greetings);
    
    return (
        <div>
        <h1>{greeting.greeting}</h1>
        <button onClick={() => dispatch(fetchGreeting())}>Greet me</button>
        </div>
    );
}

