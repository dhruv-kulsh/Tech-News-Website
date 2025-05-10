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

    const removePost = (post_ID) => {
        dispatch({
            type: "REMOVE_POST",
            payload: {
                post_ID: post_ID
            }
        })
    };

    const SearchPost = (value) => {
        console.log(value);
        dispatch({
            type: "SEARCH_QUERY",
            payload: {
                user_value: value
            }
        })

    }

    // Pagination
    const getPrevPage = () => {
        dispatch({
            type: "PREV_PAGE"
        })
    };

    const getNextPage = () => {
        dispatch({
            type: "NEXT_PAGE"
        })
    }


    const fatchApiData = async (url) => {

        dispatch({
            type: "SET_LOADING"
        })

        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            dispatch({
                type: "GET_STORIES",
                payload: {
                    hits: data.hits,
                    nbPages: data.nbPages
                }
            })

        } catch (error) {
            console.log(error.message);

        }
    }

    useEffect(() => {
        fatchApiData(`${api}query=${state.query}&page=${state.page}`);
    }, [state.query, state.page]);


    return (
        <AppContext.Provider value={{ ...state, removePost, SearchPost, getPrevPage, getNextPage }}>
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

