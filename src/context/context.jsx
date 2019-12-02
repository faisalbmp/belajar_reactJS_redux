import React, {Component, createContext} from 'react';
import ActionType from '../redux/reducer/globalActionType';


const RootContext = createContext();

//Context for Provider at HOME
const Provider = RootContext.Provider;
const GlobalProvider = (Children) => {
    return(
        class ParentComponent extends Component {
            state = {
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
            }
            render(){
                return(
                    <Provider value={
                        {
                            state: this.state,
                            dispatch: this.dispatch
                        }
                    }>
                        <Children {...this.props}/>
                    </Provider>
                )
            }
        }
    )
}

export default GlobalProvider;

//Context for Consumer at COMPONENT
const Consumer = RootContext.Consumer;
export const GlobalConsumer = (Children) => {
    return(
        class ParentConsumer extends Component{
            render(){
                return(
                    <Consumer>
                        {
                            value =>{
                                return(
                                    <Children {...this.props} {...value}/>
                                )
                            }
                        }
                    </Consumer>
                ) 
            }
        }
    )
}
