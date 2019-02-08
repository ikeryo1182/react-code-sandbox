import React, { useState, useContext, createContext } from "react"

const CounterContext = createContext()

const CounterProvider = ({ children }) => {
    const [count, setCount] = useState(0)
    const value = { count, setCount }
    return (
        <CounterContext.Provider value={value}>
            <p>
                Provider: {value.count}
            </p>
            {children}
        </CounterContext.Provider>
    )
}

const CounterConsumer = () => {
    const { setCount, count } = useContext(CounterContext)
    return (
        <div>
            <p>
                Consumer: {count}
            </p>
            <button onClick={() => setCount(count + 1)}>
                button
            </button>
        </div>
    )
}

const UseContextView = () => {
    return (
        <div>
            <h1>useContext</h1>
            <CounterProvider>
                <CounterConsumer />
            </CounterProvider>
        </div>
    )
}

export default UseContextView;