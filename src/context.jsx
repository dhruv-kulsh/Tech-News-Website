import { createContext, useContext, useReducer, useState, useEffect } from "react";
import { reducer } from "./reducer";

const AppContext = createContext();


const AppProvider = ({ children }) => {

    const api = "https://hn.algolia.com/api/v1/search?";

    const initialState = {
        isLoading: true,
        query: "CSS",           
        nbPages: 0,
        page: 0,
        hits: []
    };

    const [state, dispatch] = useReducer(reducer, initialState);


    const fatchApiData = async () => {

        dispatch({
            type: "SET_LOADING"
        })

        try {
            const res = await fetch(`${api}query=${initialState.query}`);
            const data = await res.json();
            console.log(data);
            dispatch({
                type: "GET_STORIES",
                payload: {
                    hits: data.hits,
                    nbPages: data.nbpages
                }
            })

        } catch (error) {
            console.log(error.message);

        }
    }

    useEffect(() => {
        fatchApiData();
    }, []);



    return (
        <AppContext.Provider value={{ ...state }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider };

// Custom Hook
const useGlobalContext = () => {
    return useContext(AppContext);
}

export { useGlobalContext }

