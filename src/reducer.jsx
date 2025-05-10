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
                nbPages: action.payload.nbPages,
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
        case "PREV_PAGE":
            let pageNum = state.page;
            
            if(pageNum <= 0) pageNum = 0;
            else{
                pageNum = pageNum - 1;
            }
    
            return{
                ...state,
                page: pageNum
            }
        case "NEXT_PAGE":
            let pageNumInc = state.page + 1;
            if(pageNumInc >= state.nbPages) pageNumInc = 0;
            return{
                ...state,
                page: pageNumInc
            }

    }
    return state;
}