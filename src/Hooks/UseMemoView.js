import React, { useState, useMemo } from "react"

const useCount = () => {
    const [count, setCount] = useState(0);

    return { count, setCount }
}

const UseMemoView = () => {
    const { count, setCount } = useCount()

    const doubledValue = useMemo(() => {
        return count * 2;
    }, [count])

    return (
        <div>
            <h1>useMemo</h1>
            <p>Count {count}</p>
            <p>DoubleCount {doubledValue}</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    )
}

export default UseMemoView;