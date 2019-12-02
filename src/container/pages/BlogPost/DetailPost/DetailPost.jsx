import React, { Component } from 'react';
import Axios from 'axios';
import "./DetailPost.css"


class DetailPost extends Component {

    state = {
        post: {}
    }

    componentDidMount() {
        console.log(this.props.match.params.postID)
        let id = this.props.match.params.postID;
        Axios.get(`http://localhost:3000/posts/${id}`)
            .then((res) => {
                console.log(res)
                let post = res.data;
                this.setState({
                    post: {
                        title: post.title,
                        body: post.body
                    }
                })
            })
    }

    render() {
        // console.log(this.props)
        return (
            <div className="p-detail-post">
                <p className="detail-title">{this.state.post.title}</p>
                <p className="detail-body">{this.state.post.body}</p>
            </div>
        )
    }
}

export default DetailPost;