import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from 'axios';

class Blog extends Component {
    state = {
        posts : [],
        selectedId : null
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            const posts = response.data.slice(0,4);
            const updatedPosts = posts.map(post =>{
                return {
                    ...post ,
                    Author : 'Neo'
                }
            })
            this.setState({posts: updatedPosts});
            // console.log(response);
        })
    }
    postSelectedHandler = (id) =>{
        console.log("clicked on the id", id)
        this.setState( {selectedId : id})
    }
    render () {

        const posts = this.state.posts.map( post => {
            return <Post id = {post.id}
             title = {post.title}
             clicked = {() => {this.postSelectedHandler(post.id)}}
             author = {post.Author}
             />
        })

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id = {this.state.selectedId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;