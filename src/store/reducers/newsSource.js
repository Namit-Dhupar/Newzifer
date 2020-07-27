import * as actionTypes from '../actions';

const initialstate = {
    newsList: [],
    loading: false,
    error: '',
    search: ''
}

const reducer = (state=initialstate, action) => {
    switch(action.type){
        case actionTypes.FETCH_SOURCE_REQUEST:
            return{
                //Copying the rest of the state in an immutable way
               ...state,
                loading: !state.loading
            }
        case actionTypes.FETCH_SOURCE_SUCCESS:
            return{
                ...state,
                loading: !state.loading,
                newsList: state.newsList.concat(action.payload)
            }
        case actionTypes.FETCH_SOURCE_FAILURE:
            return{
                ...state,
                error: state.error.concat(action.payload)
            }
        case actionTypes.SEARCH_SOURCE:
            return{
                ...state,
                search: action.payload
            }
         case actionTypes.GET_SOURCE_ID:{
             return{
                 ...state,
                 id: action.listid
             }
         }                  
         default:
             break;        
    }
    return state;
}

export default reducer;