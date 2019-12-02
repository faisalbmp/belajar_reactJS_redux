import React,{Component,useState} from 'react';
import './Hooks.css'

/* class Hooks extends Component{
    state = {
        count: 0
    }

    onUpdate = () => {
        this.setState({
            count: this.state.count+1
        })
    }

    render(){
        return(
            <div className="p-hooks">
                <p> nilain saya saat ini adalah : {this.state.count}</p>
                <button onClick={this.onUpdate}>submit</button>
            </div>
        )
    }
} */

const Hooks = () =>{
    const [count, setCount] = useState(0);
    return (
        <div className="p-hooks">
            <p> nilain saya saat ini adalah : {count}</p>
            <button onClick={()=> setCount(count +1)}>submit</button>
        </div>
    )
}

export default Hooks;