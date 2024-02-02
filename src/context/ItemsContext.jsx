import { createContext, useState } from "react";

export const ItemsContext = createContext();

const initialState = () => [];

const ItemsProvider = ({ children }) => {
    const [items, setItems] = useState([initialState]);

    return (
        <ItemsContext.Provider value={[items, setItems]}>
            {children}
        </ItemsContext.Provider>
    )
};

export default ItemsProvider;