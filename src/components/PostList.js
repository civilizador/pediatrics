import React from 'react';
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'

class PostList extends React.Component{
    componentDidMount(){
        return this.props.fetchPosts()
    }
    
    renderListOfPosts(){
        return this.props.posts.slice(0,10).map(post=>{
            return(
                  <a key={post.id} href="#" className="list-group-item list-group-item-action">
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">{post.title}</h5>
                      <small>3 days ago</small>
                    </div>
                    <p className="mb-1">{post.body}</p>
                    <small>Donec id elit non mi porta.</small>
                    <button className='btn btn-sm btn-info float-right'>Read More</button>
                  </a>
            )
        })
    }
    
    render(){
        return(
            <div className='container'>
                <div className="list-group">
                 {this.renderListOfPosts()}
                </div>
            </div>
            )
    }
}
// In this function we decide under which name our state will available inside of props. Then we pass it to connect
//  so it makes it available within the component we specify in the second parametr.
    const mapStateToProps = (state)=>{
        return {posts: state.posts }
    }
export default connect(mapStateToProps, {fetchPosts} )(PostList);


