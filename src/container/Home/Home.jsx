import React, { Component ,Fragment} from 'react';
import Product from '../pages/Product/Product';
import LifeCycleComp from '../pages/LifeCycleComp/LifeCycleComp';
import BlogPost from '../pages/BlogPost/BlogPost';
import {BrowserRouter  , Route, Link} from "react-router-dom"
import './Home.css'
import YoutubeCompPage from '../pages/YoutubeCompPage/YoutubeCompPage';
import YoutubeComp from '../../component/YoutubeComp/YoutubeComp';

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
            <BrowserRouter>
                {/* <div>
                    <p>Youtube Component</p>
                    <hr/>
                    
                    <p>Counter</p>
                    <hr/>
                    <Product />

                    <p>LifeCycle Component</p>
                    <hr />
                    {
                        this.state.showComponent ?
                            <LifeCycleComp />
                            : null
                    }

                    <p>Blog Post</p>
                    <hr/>
                    <BlogPost />
                </div> */}
               {/*  <div>   
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
                </div> */}
                <Fragment>
                    <div className="navigation">
                        <Link to="/">Blog Post</Link>
                        <Link to="/product">Product</Link>
                        <Link to="/lifeCycle">Life LifeCycle</Link>
                        <Link to="/youtube-Comp">youtube</Link>
                    </div>
                    <Route path='/' exact component={BlogPost} />
                    <Route path='/product' component={Product}/>
                    <Route path='/lifeCycle' component={LifeCycleComp}/>
                    <Route path='/youtube-Comp' component={YoutubeCompPage} />
                </Fragment>
            </BrowserRouter>
        )
    }
}

export default Home;