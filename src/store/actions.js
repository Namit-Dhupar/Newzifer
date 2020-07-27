import axios from 'axios';


/*****************************COMPONENT: SOURCES.JS*****************************/
export const GET_SOURCE = 'GET_SOURCE';
export const FETCH_SOURCE_REQUEST = 'FETCH_SOURCE_REQUEST';
export const FETCH_SOURCE_SUCCESS = 'FETCH_SOURCE_SUCCESS';
export const FETCH_SOURCE_FAILURE = 'FETCH_SOURCE_FAILURE';
export const SEARCH_SOURCE = 'SEARCH_SOURCE';

//Action Creators are useful for Asynchronous Code
//Thunk allows to return a function instead of action form an action creator
//Thunk is essential for making Async function calls in a React-Redux App

export const searchsource = (searchterm) =>{
    return{
        type: SEARCH_SOURCE,
        payload: searchterm
    }
}

export const fetchSourceRequest = () => {
    return {
        type: FETCH_SOURCE_REQUEST
    }
}

export const fetchSourceSuccess = (sources) => {
    return{
        type: FETCH_SOURCE_SUCCESS,
        payload: sources
    }
}

export const fetchSourceError = (err) => {
    return{
        type: FETCH_SOURCE_FAILURE,
        payload: err
    }
}

export const getsource = () =>{
    return dispatch => {
        dispatch(fetchSourceRequest()); //Will set loading to true
        axios.get('https://newsapi.org/v2/sources?apiKey=d52cd4ddccbc429e937e35cd9af2337e')
        .then( response => {
            dispatch(fetchSourceSuccess(response.data.sources));
        })
        .catch(err => {
            dispatch(fetchSourceError(err.message));
        })
    }
};

/***************************************************************************************/
/**********************************COMPONENT: LIST.JS***********************************/

export const GET_NEWS = 'GET_NEWS';
export const FETCH_NEWS_REQUEST = 'FETCH_NEWS_REQUEST';
export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS';
export const FETCH_NEWS_FAILURE = 'FETCH_NEWS_FAILURE';
export const GET_SOURCE_ID = 'GET_SOURCE_ID';
export const GET_NEWS_TITLE = 'GET_NEWS_TITLE';
export const GET_NEWS_DESCRIPTION = 'GET_NEWS_DESCRIPTION';
export const GET_NEWS_IMAGE = 'GET_NEWS_IMAGE';
export const GET_NEWS_DATE = 'GET_NEWS_DATE';
export const GET_NEWS_URL = 'GET_NEWS_URL';

export const getTitle = (title) => {
    return{
        type: GET_NEWS_TITLE,
        payload: title
    }
}

export const getDescription = (desc) => {
    return{
        type: GET_NEWS_DESCRIPTION,
        payload: desc
    }
}

export const getImageURL = (image) => {
    return{
        type: GET_NEWS_IMAGE,
        payload: image
    }
}

export const getDate = (date) => {
    return{
        type: GET_NEWS_DATE,
        payload: date
    }
}

export const getURL = (url) => {
    return{
        type: GET_NEWS_URL,
        payload: url
    }
}

export const listsourceid = (id) =>{
    return{
        type: GET_SOURCE_ID,
        listid: id
    }
}

export const fetchNewsRequest = () => {
    return {
        type: FETCH_NEWS_REQUEST
    }
}

export const fetchNewsSuccess = (news) => {
    return{
        type: FETCH_NEWS_SUCCESS,
        payload: news
    }
}

export const fetchNewsError = (err) => {
    return{
        type: FETCH_NEWS_FAILURE,
        payload: err
    }
}

export const getnews = (id) =>{
    return dispatch => {
       dispatch(fetchNewsRequest()); //Will set loading to true
        axios.get('https://newsapi.org/v2/everything?sources='+id+'&apiKey=d52cd4ddccbc429e937e35cd9af2337e')
        .then( response => {
            dispatch(fetchNewsSuccess(response.data.articles))
        })
        .catch(err => {
            dispatch(fetchNewsError(err.message));
        })
    }
};

