import React,{useReducer} from 'react'
const initialState = 0;
const reducer = (currentState, action) => {
    switch(action.type){
        case 'INCREMENT':
            return currentState + action.payload
        case 'DECREMENT':
            return currentState - action.payload
        case 'RESET':
            return initialState
        default:
            return currentState
    }
}
function Counter() {
    const [count, dispatch] =  useReducer(reducer, initialState);
    // dispatch methodu istediğimiz action ile reducerı çalıştırmamıza yarar.
    // action'ı bir parametre olarak alır.
    return (
        <div>
            <h1>Count - {count}</h1>
            <button onClick={() => dispatch({type: 'INCREMENT', payload: 5})}>Increment</button>
            <button onClick={() => dispatch({type: 'DECREMENT', payload: 3})}>Decrement</button>
            <button onClick={() => dispatch({type: 'RESET'})}>Reset</button>
        </div>
    )
}

export default Counter
