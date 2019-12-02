import React, { Component, Fragment, createContext } from 'react';
import Product from '../pages/Product/Product';
import LifeCycleComp from '../pages/LifeCycleComp/LifeCycleComp';
import BlogPost from '../pages/BlogPost/BlogPost';
import { BrowserRouter, Route, Link } from "react-router-dom"
import './Home.css'
import YoutubeCompPage from '../pages/YoutubeCompPage/YoutubeCompPage';
import YoutubeComp from '../../component/YoutubeComp/YoutubeComp';
import DetailPost from '../pages/BlogPost/DetailPost/DetailPost';
import ActionType from '../../redux/reducer/globalActionType';
import GlobalProvider from '../../context/context';
import Hooks from '../pages/Hooks/Hooks';

/* export const RootContext = createContext();
const Provider = RootContext.Provider; */

class Home extends Component {
    /* state = {
        totalOrder: 0
    }

    dispatch = (action) => {
        if (action.type === ActionType.PLUS_ORDER) {
            return this.setState({
                totalOrder: this.state.totalOrder + 1
            })
        }
        if (action.type === ActionType.MINUS_ORDER) {
            return this.setState({
                totalOrder: this.state.totalOrder - 1
            })
        }
    } */


    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    
                    <div className="navigation">
                        <Link to="/">Blog Post</Link>
                        <Link to="/product">Product</Link>
                        <Link to="/lifeCycle">Life LifeCycle</Link>
                        <Link to="/youtube-Comp">youtube</Link>
                        <Link to="/hooks">HOOKS</Link>
                    </div>
                    <Route path='/' exact component={BlogPost} />
                    <Route path='/detail-post/:postID' component={DetailPost} />
                    <Route path='/product' component={Product} />
                    <Route path='/lifeCycle' component={LifeCycleComp} />
                    <Route path='/youtube-Comp' component={YoutubeCompPage} />
                    <Route path='/hooks' component={Hooks} />
                </Fragment>
               
                {/* <Provider value={
                    {
                        state: this.state,
                        dispatch: this.dispatch
                    }
                }>
                </Provider> */}
            </BrowserRouter>
        )
    }
}

export default GlobalProvider(Home);