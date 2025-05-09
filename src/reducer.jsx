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

    }
    return state;
}