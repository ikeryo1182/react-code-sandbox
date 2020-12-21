import React, { useState, useCallback } from "react"

const useCount = () => {
    const [count, setCount] = useState(0);

    return { count, setCount }
}

const UseCallbackView = () => {
    const { count: count1, setCount: setCount1 } = useCount()

    const doubledValueFunction1 = useCallback(() => {
        return count1 * 2;
    }, [count1])

    const handleClickCounter1 = useCallback(() => {
        setCount1(count1 + 1)
        console.log("called1");
    }, [count1])


    return (
        <div>
            <h1>useCallback</h1>
            <p>Count1 {count1}</p>
            <p>DoubleCount1 {doubledValueFunction1()}</p>
            <button onClick={handleClickCounter1}>
                Click me
            </button>
        </div>
    )
}

export default UseCallbackView;