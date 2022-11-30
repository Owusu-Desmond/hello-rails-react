import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGreeting } from "../redux/greetings/greetings";

export default function Greetings() {
    const dispatch = useDispatch();
    const greeting = useSelector((state) => state.greetings);

    useEffect(() => {
        dispatch(fetchGreeting());
    }, []);
    
    return (
        <div>
           <h1>{greeting}</h1>
           {console.log(greeting)}
        </div>
    );
}

