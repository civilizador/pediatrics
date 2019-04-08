import testApi from '../apis/testapi.js'


    export const fetchPosts =  () => async dispatch => {
            const response = await testApi.get('/posts')
            dispatch({type: 'FETCH_POSTS', payload: response.data}) 
        }
        
        
        
        
// Here fetchPost is async action creator. It returns a function inside of which 
// we fetch data from api and pass result to dispatch function
// Above with Unshortened syntax

    //  export const fetchPosts =  () => {
    //     return async (dispatch) => {
    //         const response = await testApi.get('/posts')
    //         dispatch({
    //             type: 'FETCH_POSTS',
    //             payload: response
    //         }) 
    //     }
    // };