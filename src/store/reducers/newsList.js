import * as actionTypes from '../actions';

const initialstate = {
    newsItem: [],
    newsloading: false,
    newserror: '',
    newsTitle: '',
    newsDescription: '',
    newsDate: '',
    newsImage: '',
    newsURL: ''
}

const reducer = (state=initialstate, action) => {
    switch(action.type){
         case actionTypes.FETCH_NEWS_REQUEST:
             return{
                 ...state,
                 newsloading: !state.newsloading
             }
         case actionTypes.FETCH_NEWS_SUCCESS:
             return{
                 ...state,
                 newsloading: !state.newsloading,
                 newsItem: state.newsItem.concat(action.payload).map(el => ({
                    ...el,
                    liked: false,
                })),
              } 
         case actionTypes.FETCH_NEWS_FAILURE:
             return{
                 ...state,
                 newserror: state.newserror.concat(action.payload)
             }
         case actionTypes.GET_NEWS_TITLE:
             return{
                 ...state,
                 newsTitle: action.payload,
             }
         case actionTypes.GET_NEWS_DESCRIPTION:
             return{
                 ...state,
                 newsDescription: action.payload
             }
         case actionTypes.GET_NEWS_IMAGE:
             return{
                 ...state,
                 newsImage: action.payload
             }
         case actionTypes.GET_NEWS_DATE:
             return{
                 ...state,
                 newsDate: action.payload
             }
         case actionTypes.GET_NEWS_URL:
             return{
                 ...state,
                 newsURL: action.payload
             } 
         default:
             break;        
    }
    return state;
}

export default reducer;