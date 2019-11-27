import React, {Component, Fragment} from 'react';
import YoutubeComp from '../../../component/YoutubeComp/YoutubeComp'

class YoutubeCompPage extends Component{
    
    render(){
        console.log("this is youtube")
        return(
            <Fragment>
                <p>Halaman Youtube</p>
                <hr />
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
            </Fragment>
        )
    }
}

export default YoutubeCompPage;