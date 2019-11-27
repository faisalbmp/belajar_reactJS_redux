import React, { Component, Fragment } from 'react';
import './BlogPost.css';
import Post from '../../component/post/post';
import axios from 'axios';

const url = 'http://localhost:3000/posts';

class BlogPost extends Component {
    state = {
        post: [],
        formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userid: 1
        },
        isUpdate: false
    }

    handleRemove = (data) => {
        console.log(data);
        axios.delete(`http://localhost:3000/posts/${data}`)
            .then((res) => {
                console.log(res);
                this.getPostApi();
            })
    }

    componentDidMount() {

        this.getPostApi();
    }

    getPostApi = () => {
        axios.get(url + '?_sort=id&_order=desc')
            .then((res) => {
                // console.log(res.data);
                this.setState({
                    post: res.data
                });
            })
    }

    postDatatoAPI = () => {
        axios.post(url, this.state.formBlogPost)
            .then((res) => {
                console.log(res);
                this.getPostApi();

            }, (err) => {
                console.log('error :', err);
            })
    }

    putDatatoAPI = () => {
        axios.put(`http://localhost:3000/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost)
            .then((res) => {
                console.log(res);
                this.getPostApi();
                this.setState({
                    post: [],
                    formBlogPost: {
                        id: 1,
                        title: '',
                        body: '',
                        userid: 1
                    },
                    isUpdate: false
                })
            })
    }

    handleSubmit = () => {
        if (this.state.isUpdate) {
            this.putDatatoAPI(); 
        } else {    
            this.postDatatoAPI();
        }
    }

    handleUpdate = (data) => {
        this.setState({
            formBlogPost: data,
            isUpdate: true
        });
        // this.putDatatoAPI(data);
        console.log(this.state.formBlogPost);
        
    }

    handleFormChange = (event) => {
        let formBlogPost = { ...this.state.formBlogPost };
        let timeStamp = new Date().getTime();
        if(!this.state.isUpdate){
            formBlogPost['id'] = timeStamp;
        }
        formBlogPost[event.target.name] = event.target.value;

        this.setState({
            formBlogPost: formBlogPost
        }, () => {
            console.log("value new : ", this.state.formBlogPost)
        })
    }

    render() {
        return (
            <Fragment>
                <p>Halaman Blog Post</p>
                <hr />
                <p className='section-title'>MY BLOG</p>
                <div className="form-add-post">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" placeholder="add title" value={this.state.formBlogPost.title} onChange={this.handleFormChange} />
                    <label htmlFor="body">Blog Content</label>
                    <textarea type="text" name="body" placeholder="add Content" value={this.state.formBlogPost.body} onChange={this.handleFormChange} />
                    <button className="btn-submit" onClick={this.handleSubmit}>SIMPAN</button>
                </div>
                {this.state.post.map(post => {
                    return <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} />
                })}
            </Fragment>
        )
    }
}

export default BlogPost;