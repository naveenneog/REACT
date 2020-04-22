import React, { Component } from 'react';

import './FullPost.css';
import axios from 'axios';

class FullPost extends Component {
    state = {
        loadedPost: null,
        isError : false
    }

    componentDidUpdate() {
       let loaded = false;
        if (this.props.id) {
            console.log('1:', this.props.id);
            if(this.state.loadedPost){
                loaded = true;
                console.log('2:', this.state.loadedPost.data.id);
                if(this.state.loadedPost.data.id !== this.props.id){
                    console.log('3:', this.state.loadedPost.data.id);
                    loaded = false;
                }
            }
            
            if (!loaded) {
                console.log('in comp');
                axios.get("https://jsonplaceholder.typicode.com/posts/" + this.props.id)
                    .then(
                        response => {
                            console.log(response);
                            this.setState({ loadedPost: response });
                        }
                    )
                    .catch( error => {
                        console.log(error);
                        this.setState({isError : true});
                    })
            }

        }

    }
    render() {
        let post = <p style={{ textAlign: 'center' }}> Please select a Post!</p>;
        if(this.state.error){
            post = <p style={{ textAlign: 'center' }}> Something went wrong</p>;
        }
        if (this.props.id) {
            post = <p style={{ textAlign: 'center' }}> Loading ...</p>;
        }
        console.log('Inside the props', this.props.id);
        if (this.state.loadedPost) {

            post = (

                <div className="FullPost">
                    <h1>{this.state.loadedPost.data.title}</h1>
                    <p>{this.state.loadedPost.data.body}</p>
                    <div className="Edit">
                        <button className="Delete">Delete</button>
                    </div>
                </div>

            );
        }
        return post;
    }
}

export default FullPost;