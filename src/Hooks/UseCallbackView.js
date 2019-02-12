import React, { useState, useCallback } from "react"

const useCount = () => {
    const [count, setCount] = useState(0);

    return { count, setCount }
}

const UseCallbackView = () => {
    const { count, setCount } = useCount()

    const doubledValueFunction = useCallback(() => {
        return count * 2;
    }, [count])

    return (
        <div>
            <h1>useCallback</h1>
            <p>Count {count}</p>
            <p>DoubleCount {doubledValueFunction()}</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    )
}

export default UseCallbackView;