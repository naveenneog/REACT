import React, { Component } from 'react';
// import axios from 'axios';
import Posts from './PostFolder/Posts';
import {Route , NavLink , Switch} from 'react-router-dom';
import NewPost from './NewPost/NewPost';
import Login from './Login/Login';
import './Blog.css';

class Blog extends Component {
    render () {
        return (
            <div className = "Blog">
                <header> 
                    <nav>
                        <ul> 
                        <li> <NavLink to= "/web/logon" exact > Login </NavLink> </li>
                            {/* <li> <NavLink to= "/"  exact > Home</NavLink> </li>
                            <li> <NavLink to={{
                                pathname : './new-post',
                                hash : '#submit',
                                search : '?quick-submit=true'
                            }}> New Post</NavLink></li> */}
                            
                        </ul>
                    </nav>
                </header>
                {/* <Posts /> */}
                {/* <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section> */}
            {/* <Route path="/" exact render = {() => <h1> Home</h1>} />
            <Route path="/" render = {() => <Posts />} /> */}
            <Switch>
            {/* <Route path="/" component = {Posts} /> */}
            {/* <Route path="/new-post" component = {NewPost} /> */}
            <Route path="/web/logon" component = {Login} />
            {/* Since the Route is parsed from top to bottom having the ID below will prevent having full post rendered in place of id */}
            
            </Switch>
            </div>
        );
    }
}

export default Blog;