import React, { Component } from 'react';
import YoutubeComp from '../../component/YoutubeComp/YoutubeComp';
import Product from '../Product/Product';
import LifeCycleComp from '../LifeCycleComp/LifeCycleComp';
import BlogPost from '../BlogPost/BlogPost';

class Home extends Component {
    state = {
        showComponent: true
    }
    componentDidMount() {
        /* setTimeout(()=>{
            this.setState({
                showComponent: false
            })
        },15000) */
    }
    render() {
        return (
            <div>
                {/* <p>Youtube Component</p>
                <hr/>
                <YoutubeComp 
                    time='7.12'
                    title='video 1'
                    desc='ditonton 2jt'/>
                <YoutubeComp 
                    time='8.82'
                    title='video 2'
                    desc='ditonton 3jt'/>
                <YoutubeComp 
                    time='10.2'
                    title='video 3'
                    desc='ditonton 5jt'/>
                <YoutubeComp 
                    time='2.22'
                    title='video 4'
                    desc='ditonton 3jt'/>
                <YoutubeComp />
                <p>Counter</p>
                <hr/>
                <Product /> */}

                {/* <p>LifeCycle Component</p>
                <hr />
                {
                    this.state.showComponent ?
                        <LifeCycleComp />
                        : null
                } */}

                <p>Blog Post</p>
                <hr/>
                <BlogPost />
            </div>
        )
    }
}

export default Home;