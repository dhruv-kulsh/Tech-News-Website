export const reducer = (state, action) => {
    switch(action.type){
        case "SET_LOADING":
            return{
                ...state,
                isLoading : false
            }
        case "GET_STORIES":
            return {
                ...state, 
                hits: action.payload.hits,
                nbpages: action.payload.nbpages,
                isLoading: true
            }
        case "REMOVE_POST":
            return {
                ...state,
                hits: state.hits.filter((curElem) => curElem.objectID !==  action.payload.post_ID)
            }
        case "SEARCH_QUERY":
            return{
                ...state,
                query : action.payload.user_value
            }

    }
    return state;
}