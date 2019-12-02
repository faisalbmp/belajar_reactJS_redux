const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    value: 0,
    age: 17
}

//reducer
const rootReducer = (state = initialState,action) => {
    console.log(action);
    
    switch (action.type) {
        case 'ADD_AGE':
            return{
                ...state,
                age: state.age + 1
            }
            break;
        case 'CHANGE_VALUE':
            return{
                ...state,
                value: state.value + action.newValue
            }
            break;
    
        default:
            return state;
            break;
    }
}

//store
const store = createStore(rootReducer);
console.log(store.getState());

//subscriptions
store.subscribe(() => {
    console.log("store Changes", store.getState())
});

//dispatching action
store.dispatch({type: 'ADD_AGE', })
store.dispatch({type: 'CHANGE_VALUE', newValue: 12 })
console.log(store.getState())


