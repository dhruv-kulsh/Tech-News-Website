import { createContext, useContext } from "react";



const AppContext = createContext();


const AppProvider = ({children}) => {
    return(
        <AppContext.Provider value={"Dhruv is Great"}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext, AppProvider};

// Custom Hook
const useGlobalContext = () => {
    return useContext(AppContext);
}

export {useGlobalContext}

