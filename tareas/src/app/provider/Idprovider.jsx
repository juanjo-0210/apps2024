import { createContext, useState, useContext } from 'react';

const AppContext = createContext();
export const useIdContext = () => useContext(AppContext);

const IdProvider = ({ children }) => {
    const [id, setId] = useState();
    return (
        <AppContext.Provider value={[id, setId]}>
            {children}
        </AppContext.Provider>
    );
}


export default IdProvider;