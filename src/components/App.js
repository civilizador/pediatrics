import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

const pages = {
    homePage: ()=>{
      return(
        <div>
          <h1> Welcome to the home page </h1>
            <Link to='/navigation'> Go to Navigation Page </Link>
        </div>
      )
    },
    articles: ()=>{
      return(
        <div>
          <h1> Welcome to the Navigation Page page </h1>
                      <h2> All Articles </h2>
            <Link to='/navigation/1'> First Article </Link>
        </div>
      )
    },
    article1: ()=>{
      return(
        <div>
          <h1> This is a first article </h1>
          <h2> This article is about something </h2>
            <Link to='/navigation'> Go to Navigation Page </Link>
        </div>
      )
    }
  }


class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <div className="container">
           <Route path='/' exact component={pages.homePage} /> 
           <Route path='/navigation'   exact component={pages.articles} /> 
           <Route path='/navigation/1'  component={pages.article1} /> 
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
