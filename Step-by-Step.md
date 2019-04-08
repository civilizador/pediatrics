What we would need beside react and react-dom libraries: 
    
    1. react-redux
        Provider 
        connect
   
    2. redux
        createStore
        combineReducers
        applyMiddleware
    
    3. redux-thunk
        thunk

1. Inside of the src->index.js import :
    React, ReactDOM, {Provider} from react-redux and {createStore} from redux;

    import React from 'react';
    import ReactDOM from 'react-dom';
    
    import {Provider} from 'react-redux';
    import {createStore} from 'redux';
    
    import reducers from './reducers';
 

2.  Creating store and passing it to Provider so all of our components can have access to the redux store.
    Inside of the same index.js file:
    a.)     Wrap App component with the Provider component. 
    b.)     Inside of provider component tag we need to use createStore in order to create redux store.
            We will make available our store to each react component through props. 
    c.)     Pass reducers to createStore function.

    ReactDOM.render(
    <Provider store={createStore(reducers)}>    
        <App />
    </Provider>    
    , document.getElementById('root'));
 
3.  Create a postList component as a CLASS based component then Import and place it inside of App component.
   
5.  Create actions and reducers directories inside of the src folder 
         then create an index.js file inside of each directory.

6.  Export action creator and import it inside of PostList

7.  CONNECT action, state and component inside of CONNECT method:
    Connect will wire up all 3 of them. As a result we would be able to call our state object
    inside of the component from props.
    
    Import Connect library and pass imported action and component to it. 
        Since we don't have mapStateToProps Yet pass null instead.
        Now we can refer to fetchPosts action creator through props inside of PostList component. 

    import {connect} from 'react-redux'
    import {fetchPosts} from '../actions'
    
    class PostList extends React.Component{
        componentDidMount(props){
            return this.props.fetchPosts()
        }
        render(){
            return(
                <div className='container'>
                    Post List
                </div>
                )
        }
    }
    export default connect(null, {fetchPosts:fetchPosts})(PostList);

8.  Create a directory inside of src called apis , create a testApi.js file.
9.  Import axios library inside of it and define url:
    
    import axios from 'axios';

        export default axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com/'
    })    

10. THUNK - thunk is a middleware that will run between fetching the data and passing to the action object.
    We need it because action creator should always return a plain object however when we are using async await
    it being translated by babel into ES5 syntax in the result we have a function not  a plain object.
    So to help resolve it thunk recieves whatever output of the action creator is and if it is not an object 
    thunk extract only the responded data object and passes it to the action after that procedure 
    we can safely dispatch our action object to reducers.

     Go to index.js file and import react-thunk middleware library.
     
        import thunk from 'redux-thunk';

11. Also import applyMiddleware method from 'redux' library. 
    This method will be used to apply thunk middleware on our store.

        import {applyMiddleware} from 'redux';

12. Now we need to pass it to createStore function as a second argument.

    const store = createStore(reducers, applyMiddleware(thunk) )
    
13. ASYNC ACTION CREATOR
     Go to actions/index.js .
    // Here fetchPost is async action creator. It returns a function 
        inside of which we fetch data from api and pass result to dispatch function

        export const fetchPosts =  () => {
        return async (dispatch) => {
            const response = await testApi.get('/posts')
            dispatch({
                type: 'FETCH_POSTS',
                payload: response
            }) 
        }
    };
14. Go to reducers/postReducer and define our reducer for fetch post action:
    
    export const postReducer = (state=[],action)=>{
        switch(action.type){
            case 'FETCH DATA': return action.payload
            default: return state
        }
    }

15. Now we can import our reducer for fetched posts into reducers/index.js file.
    
    The reason why we have separeted them because usually we want to keep each reducer in separate file 
        then import each of them into index file where with combineReducers method we are going to 
            wire them all together. After that we will pass our combined reducer object to  src/index.js 
                where it will be passed to createStore method to create a redux store:
    
    import { combineReducers } from 'redux';
    import {postReducer} from './postReducer';

    export default combineReducers({
        posts: postReducer
    });
    
    
16. Now go to src/index.js and create store then pass it to Provider

    import reducers from './reducers';

    const store = createStore(reducers,applyMiddleware(thunk))
 
    
    ReactDOM.render(
        <Provider store={store}>    
            <App />
        </Provider>    
        , document.getElementById('root'));
 
17.  Now we can go back to our PostList component and add missing mapStateToProps function since we already resolved issue with async action creator. 
     
    const mapStateToProps = (state)=>{
        return {posts: state.posts }
    }

18.  The last thing left is to add method to our PostList class which will render a 
        

    4 rules for REDUCERS
    
    1.  Reducer can return any value but UNDEFINED. 
        That means we need to give initial value for the state argument that we are passing to the reducer.
    2.  Reducers produce new state or data that will be used inside of the app only out of previous state.
    3.  Reducers can't reach out of it self to get data. Which means it can't make an ajax call or DOM element selection , 
        it only can use state and action data that passed as parametrs to it.
        so if we have
        const reducerTest = (state, action)=>{
            return state and cation manipulations only.
        }