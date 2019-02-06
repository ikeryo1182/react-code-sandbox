import React, { useState } from "react"

const useCount = () => {
    const [count, setCount] = useState(0);

    return { count, setCount }
}

const UseStateView = () => {
    const { count, setCount } = useCount()
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    )
}

export default UseStateView;