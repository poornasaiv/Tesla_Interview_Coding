import { useState, createContext } from "react";

export const CountContext = createContext();

export default function CountProvider({children}){

    const [count, setCount] = useState(0);

    return (
        <CountContext value={{count, setCount}}>{children}</CountContext>
    );
};