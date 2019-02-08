import React, { createContext, useReducer, useContext } from "react"

const initialCount = 1;

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

const CounterContext = createContext();
const DispatchContext = createContext();

const CounterProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialCount, init);
    return (
        <CounterContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
                {children}
            </DispatchContext.Provider>
        </CounterContext.Provider>
    )
}

const Counter = () => {
    const state = useContext(CounterContext);
    const dispatch = useContext(DispatchContext);
    return (
        <div>
            Count: {state.count}
            <button onClick={() => dispatch({ type: actionType.reset, payload: initialCount })}>
                Reset
            </button>
            <button onClick={() => dispatch({ type: actionType.increment })}>+</button>
            <button onClick={() => dispatch({ type: actionType.decrement })}>-</button>
        </div>
    )
}

const UseReducerWithContextView = () => {
    return (
        <div>
            <h1>useReducerWithContext</h1>
            <CounterProvider>
                <Counter />
            </CounterProvider>
        </div>
    );
}

export default UseReducerWithContextView;