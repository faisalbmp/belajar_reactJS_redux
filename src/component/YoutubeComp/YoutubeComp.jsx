import React from 'react';
import { className } from 'postcss-selector-parser';
import './YoutubeComp.css'

const YoutubeComp = (props) => {
    return(
        <div className = "youtube-wrapper">
            <p className = "img-thumb">
                <img src="http://i3.ytimg.com/vi/CZKcmzNs5Jw/maxresdefault.jpg" alt=""/>
                <p className="time">{props.time} </p>
            </p>
            <p className = "title">{props.title}</p>
    <p className = "desc">{props.desc}</p>
        </div>
    )
        
}

YoutubeComp.defaultProps = {
    time: '10.00',
    title:'title here',
    desc:'desc here'
}

export default YoutubeComp;