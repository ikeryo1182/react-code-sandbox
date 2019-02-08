import React, { useReducer } from "react"

const actionType = {
    increment: "increment",
    decrement: "decrement",
    reset: "reset"
}

const init = (initialCount = 1) => {
    return { count: initialCount };
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return init(action.payload);
        default:
            // A reducer must always return a valid state.
            return state;
    }
}

const UseReducerView = ({ initialCount }) => {
    const [state, dispatch] = useReducer(reducer, initialCount, init);
    return (
        <div>
            Count: {state.count}
            <button onClick={() => dispatch({ type: actionType.reset, payload: initialCount })}>
                Reset
            </button>
            <button onClick={() => dispatch({ type: actionType.increment })}>+</button>
            <button onClick={() => dispatch({ type: actionType.decrement })}>-</button>
        </div>
    );
}

export default UseReducerView;