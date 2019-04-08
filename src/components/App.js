import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import PostCreate from './posts/PostCreate'; 
import PostEdit from './posts/PostEdit'; 
import PostDelete from './posts/PostDelete'; 
import PostList from './posts/PostList'; 
import PostShow from './posts/PostShow'; 
import Header from './Header' 

class App extends Component {
  
  render() {
    return (
      <div> 
        <Header />
        <BrowserRouter>
          <div>
             <Route path='/' exact component={PostList} /> 
             <Route path='/posts/new'   exact component={PostCreate} /> 
             <Route path='/posts/edit'  component={PostEdit} /> 
             <Route path='/posts/delete'   exact component={PostDelete} /> 
             <Route path='/posts/show'  component={PostShow} /> 
          </div>
        </BrowserRouter>
      
        <div class="jumbotron text-center" >
          <p>Footer</p>
        </div>
              
      </div>
    );
  }
}

export default App;
