import React, { useState } from "react"

const useCount = () => {
    const [count, setCount] = useState(0);

    return { count, setCount }
}

const UseStateView = () => {
    const { count, setCount } = useCount()
    return (
        <div>
            <h1>useState</h1>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    )
}

export default UseStateView;